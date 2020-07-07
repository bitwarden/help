---
layout: article
title: Bitwarden event logs
categories: [organizations]
featured: true
popular: false
tags: [organizations  events  event logs  audit  access control]
---

## Table of Contents

- [What are event logs?](#what-are-event-logs-)
- [Where can I access event logs?](#where-can-i-access-event-logs-)
- [What information is contained in event logs?](#what-information-is-contained-in-event-logs-)
  * [User events](#user-events)
  * [Item events](#item-events)
  * [Collection events](#collection-events)
  * [Group events](#group-events)
  * [Organization events](#organization-events)
- [GitHub Link](#github-link)

## What are event logs?

Event logs are notes that contain time-stamped, detailed information about what occurs within an organization. These logs are often used to research changes in credentials or configuration, and are also helpful with troubleshooting.

## Where can I access event logs?

Inside the Web Vault  navigate to your Organization &#8594; Manage &#8594; Event logs.

You can search for up to 30 days of log events that scroll continuously.

{% image organizations/event-logs.png Web Vault Management %}

To gather more data  plans with API access can use the [Bitwarden API](https://bitwarden.com/help/api/). API responses will contain the type of event (enums referenced below) and relevant data.

Example:
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

## What information is contained in event logs?

Log data contains different events  based on the action and level of action taken. Below are the items currently captured in the Event logs.

### User events

        User_LoggedIn = 1000
        User_ChangedPassword = 1001
        User_Updated2fa = 1002
        User_Disabled2fa = 1003
        User_Recovered2fa = 1004
        User_FailedLogIn = 1005
        User_FailedLogIn2fa = 1006
        User_ClientExportedVault = 1007

### Item events

        Cipher_Created = 1100
        Cipher_Updated = 1101
        Cipher_Deleted = 1102
        Cipher_AttachmentCreated = 1103
        Cipher_AttachmentDeleted = 1104
        Cipher_Shared = 1105
        Cipher_UpdatedCollections = 1106
        Cipher_ClientViewed = 1107
        Cipher_ClientToggledPasswordVisible = 1108
        Cipher_ClientToggledHiddenFieldVisible = 1109
        Cipher_ClientToggledCardCodeVisible = 1110
        Cipher_ClientCopiedPassword = 1111
        Cipher_ClientCopiedHiddenField = 1112
        Cipher_ClientCopiedCardCode = 1113
        Cipher_ClientAutofilled = 1114
        Cipher_SoftDeleted = 1115
        Cipher_Restored = 1116

### Collection events
        Collection_Created = 1300
        Collection_Updated = 1301
        Collection_Deleted = 1302

### Group events

        Group_Created = 1400
        Group_Updated = 1401
        Group_Deleted = 1402

### Organization events

        OrganizationUser_Invited = 1500
        OrganizationUser_Confirmed = 1501
        OrganizationUser_Updated = 1502
        OrganizationUser_Removed = 1503
        OrganizationUser_UpdatedGroups = 1504
        Organization_Updated = 1600
        Organization_PurgedVault = 1601
        Policy_Updated = 1700

## GitHub Link

To see the most current enumerations and data model for event logs, please see the below project file

- [https://github.com/bitwarden/server/blob/master/src/Core/Enums/EventType.cs](https://github.com/bitwarden/server/blob/master/src/Core/Enums/EventType.cs)
