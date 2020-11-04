---
layout: article
title: Event Logs
categories: [organizations]
featured: true
popular: false
tags: [organizations  events  event logs  audit  access control]
order: 13
---

## What are Event Logs?

Event Logs are timestamped records of everything that occurs within your Organization. Event Logs are accessible to users with the type **Admin** or **Owner** from the **Manage** tab of your Organization.

{% image /organizations/event-logs-updated.png %}

Events Logs are also accessible using Bitwarden's API for Organization Management. For more information, see [RESTful API for Organization Management](https://bitwarden.com/help/article/public-api/).

### In This Article

- [Events List](#events-list)
- [API Responses](#API-responses)
- [SIEM and External Systems Integrations](#siem-and-external-systems-integrations)

## Events List

Event Logs record roughly 40 different types of events. In the Web Vault, the action catalogued by each event is described in plain text under the **Event** column.

Each type of event is associated with `type` code (`1000`, `1001`, etc.) that identifies the action captured by the event. Event `type` codes are important to understand when accessing Event Logs via API. For more information, see [RESTful API for Organization Management](https://bitwarden.com/help/article/public-api/).

All Event types are documented below, with their corresponding `type` codes:

{% comment %}
Sources:
https://github.com/bitwarden/server/blob/master/src/Core/Enums/EventType.cs
https://github.com/bitwarden/web/blob/master/src/app/services/event.service.ts
https://github.com/bitwarden/web/blob/master/src/locales/en/messages.json
{% endcomment %}

### User Events
- Logged In. (`1000`)
- Changed account password. (`1001`)
- Enabled/updated two-step login. (`1002`)
- Disabled two-step login. (`1003`)
- Recovered account from two-step login. (`1004`)
- Login attempted failed with incorrect password. (`1005`)
- Login attempt failed with incorrect two-step login. (`1006`)
- Exported Vault. (`1007`)

### Item Events
- Created item *item-identifier*. (`1100`)
- Edited item *item-identifier*. (`1101`)
- Permanently Deleted item *item-identifier*. (`1102`)
- Created attachment for item *item-identifier*. (`1103`)
- Deleted attachment for item *item-identifier*. (`1104`)
- Shared item *item-identifier*. (`1105`)
- Edited collections for item *item-identifier* (`1106`)
- Viewed item *item-identifier*. (`1107`)
- Viewed password for item *item-identifier*. (`1108`)
- Viewed hidden field for item *item-identifier*. (`1109`)
- Viewed security code for item *item-identifier*. (`1110`)
- Copied password for item *item-identifier*. (`1111`)
- Copied hidden field for item *item-identifier*. (`1112`)
- Copied security code for item *item-identifier*. (`1113`)
- Auto-filled item *item-identifier*. (`1114`)
- Sent item *item-identifier* to trash. (`1115`)
- Restored item *item-identifier*. (`1116`)

### Collection Events
- Created collection *collection-identifier*. (`1300`)
- Edited collection *collection-identifier*. (`1301`)
- Deleted collection *collection-identifier*. (`1302`)

### Group Events
- Created group *group-identifier*. (`1400`)
- Edited group *group-identifier*. (`1401`)
- Deleted group *group-identifier*. (`1402`)

### Organization Events
- Invited user *user-identifier*. (`1500`)
- Confirmed user *user-identifier*. (`1501`)
- Edited user *user-identifier*. (`1502`)
- Removed user *user-identifier*. (`1503`)
- Edited groups for user *user-identifier*. (`1504`)
- *unlinked sso placeholder*. (`1505`)
- Edited organization settings. (`1600`)
- Purged organization vault. (`1601`)
- *Updated Policy placeholder*. (`1700`)

## API Responses

Accessing Event Logs via API will return a response like the following. For more information, see [RESTful API for Organization Management](https://bitwarden.com/help/article/public-api/).

```
{
  "object": "list",
  "data": [
    {
      "object": "event",
      "type": 1000,
      "itemId": "3767a302-8208-4dc6-b842-030428a1cfad",
      "collectionId": "bce212a4-25f3-4888-8a0a-4c5736d851e0",
      "groupId": "f29a2515-91d2-4452-b49b-5e8040e6b0f4",
      "policyId": "f29a2515-91d2-4452-b49b-5e8040e6b0f4",
      "memberId": "e68b8629-85eb-4929-92c0-b84464976ba4",
      "actingUserId": "a2549f79-a71f-4eb9-9234-eb7247333f94",
      "date": "2020-07-06T17:25:50.932Z",
      "device": 0,
      "ipAddress": "172.16.254.1"
    }
  ],
  "continuationToken": "string"
}
```

## SIEM and External Systems Integrations

When exporting data from Bitwarden into other systems, a combination of data from the API and CLI may be used to gather data.

For example, using Bitwarden RESTful APIs gather data around the structure of the organization:

- GET /public/members returns the Members, Ids, and assigned groupIds
- GET /public/groups returns all the Groups, Ids, assigned Collections, and their permissions
- GET /public/collections returns all Collections, and their assigned Groups

Once you have the unique ID for each member, group, and collection, you can now use the CLI tool to gather  information using the CLI command ```bw-list``` retrieve the following items in JSON format:

- Org Members
- Items
- Collections
- Groups

After gathering this data, you can join rows on their unique Ids to build a reference to all parts of your Bitwarden Organization. For more information on using the Bitwarden CLI, see [The Bitwarden command-line tool (CLI)](https://bitwarden.com/help/article/cli/).
