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

Event Logs are timestamped records of events that occur within your Organization. Event Logs are accessible to [Admins and Owners]({{site.baseurl}}/article/event-logs/) from the **Manage** tab of your Organization Vault:

{% image organizations/event-logs-updated.png Event Logs %}

Events Logs are [exportable](#export-events) and accessible from the `/events` endpoint of the [Bitwarden Public API](https://bitwarden.com/help/article/public-api/).

## Events

Event Logs record roughly 40 different types of events. The Event Logs screen captures a **Timestamp** for the event, client app information including application type and IP (accessed by hoving over the {% icon fa-globe %} globe icon), the **User** connected to the event, and an **Event** description.

{% callout info %}
Each **Event** is associated with type code (`1000`, `1001`, etc.) that identifies the action captured by the event. Type codes are used by the [Bitwarden Public API](https://bitwarden.com/help/article/public-api/) to identify the action documented by an event.
{% endcallout %}

All Event types are listed below, with their corresponding type codes:

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
- Unlinked SSO. (`1505`)
- *user-identifier* enrolled in Master Password Reset. (`1506`)
- *user-identifier* withdrew from Master Password Reset. (`1507`)
- Master Password was reset for *user-identifier*. (`1508`)
- Edited organization settings. (`1600`)
- Purged organization vault. (`1601`)
- Updated a Policy. (`1700`)

{% comment %}
Sources:
https://github.com/bitwarden/server/blob/master/src/Core/Enums/EventType.cs
https://github.com/bitwarden/web/blob/master/src/app/services/event.service.ts
https://github.com/bitwarden/web/blob/master/src/locales/en/messages.json
{% endcomment %}

### Provider Events

When any of the above events is executed by a member of an [administering Provider]({{site.baseurl}}/article/providers/), the **User** column will record the name of the Provider. Additionally, a Provider-specific event will record whenever a member of an administering Provider accesses your Organization Vault:

`IMAGE PLACEHOLDER`

## Export Events

Exporting event logs will create a `.csv` of all events within the specified date range:

{% image organizations/event-logs-export.png Export Event Logs %}

For example:

```
message,appIcon,appName,userId,userName,userEmail,date,ip,type
Logged in.,fa-globe,Web Vault - Chrome,1234abcd-56de-78ef-91gh-abcdef123456,Alice,alice@bitwarden.com,2021-06-14T14:22:23.331751Z,111.11.111.111,User_LoggedIn
Invited user zyxw9876.,fa-globe,Unknown,1234abcd-56de-78ef-91gh-abcdef123456,Alice,alice@bitwarden.com,2021-06-14T14:14:44.7566667Z,111.11.111.111,OrganizationUser_Invited
Edited organization settings.,fa-globe,Web Vault - Chrome,9876dcba-65ed-87fe-19hg-654321fedcba,Bob,bob@bitwarden.com,2021-06-07T17:57:08.1866667Z,222.22.222.222,Organization_Updated
```

## API Responses

Accessing Event Logs from the `/events` endpoint of the [Bitwarden Public API](https://bitwarden.com/help/article/public-api/) will return a JSON response like the following:

```
{
  "object": "list",
  "data": [
    {
      "object": "event",
      "type": 1000,
      "itemId": "string",
      "collectionId": "string",
      "groupId": "string",
      "policyId": "string",
      "memberId": "string",
      "actingUserId": "string",
      "date": "2020-11-04T15:01:21.698Z",
      "device": 0,
      "ipAddress": "xxx.xx.xxx.x"
    }
  ],
  "continuationToken": "string"
}
```

## SIEM and External Systems Integrations

When exporting data from Bitwarden into other systems, a combination of data from the Exports, API and CLI may be used to gather data. For example, using Bitwarden RESTful APIs to gather data around the structure of the organization:

- GET /public/members returns the Members, Ids, and assigned groupIds
- GET /public/groups returns all the Groups, Ids, assigned Collections, and their permissions
- GET /public/collections returns all Collections, and their assigned Groups

Once you have the unique ID for each member, group, and collection, you can now use the CLI tool to gather  information using the CLI command ```bw-list``` retrieve the following items in JSON format:

- Org Members
- Items
- Collections
- Groups

After gathering this data, you can join rows on their unique Ids to build a reference to all parts of your Bitwarden Organization. For more information on using the Bitwarden CLI, see [The Bitwarden command-line tool (CLI)](https://bitwarden.com/help/article/cli/).
