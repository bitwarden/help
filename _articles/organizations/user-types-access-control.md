---
layout: article
title: User Types and Access Control
categories: [organizations]
featured: true
popular: false
tags: [user types, access control]
order: 06
---

Users in Bitwarden Organizations can be granted a variety of User Types and Access Controls in order to manage their permissions and access. You can set User Types and Access Controls when you [invite users to your Organization]({{site.baseurl}}/article/managing-users/), or at any time from the **Manage** &rarr; **People** screen in your Organization:

{% image organizations/user-types-access-control.png Editing User Types and Access Control %}

## User Types

User Type determines the permissions a user will have within your Organization. User Types does not determine [which Collections they have access to](#access-control), rather it determines **what actions they can take** within the context of your Organization's resources and tools. Options include:

|User Type|Permissions|
|---------|-----------|
|User|Access shared items in assigned Collections<br>Add, edit, or remove items from assigned Collections (unless **Read Only**)|
|Manager|All of the above,<br>+ Assign Users to Collections<br>+ Assign User Groups to Collections<br>+ Create or delete Collections|
|Admin|All of the above,<br>+ Assign Users to User Groups<br>+ Create or delete User Groups<br>+ Invite and confirm new Users<br>+ Manage Enterprise Policies<br>+ View Event Logs<br>+ Export Organization Vault data<br>+ Manage Password Reset<br><br>**Admin Users automatically have access to all Collections.**|
|Owner|All of the above,<br>+ Manage Billing, Subscription, and Integrations<br><br>**Owner Users automatically have access to all Collections.**|
|Custom|Allows for granular control of user permissions on a user-by-user basis, see [Custom Role](#custom-role).|

{% callout info %}
**Only an Owner** can create a new Owner or assign the Owner type to an existing user. For failover purposes, Bitwarden recommends creating multiple Owner users.
{% endcallout %}

### Custom Role

Selecting the **Custom** role for a user allows for granular control of permissions on a user-by-user basis. A Custom role user can have a configurable selection of Manager and Admin capabilities, including:

- Manage Assigned collections
- Access Business Portal
- Access Event Logs
- Access Import/Export
- Access Reports
- Manage All Collections
- Manage Groups
- Manage SSO
- Manage Policies
- Manage Users
- Manage Password Reset

{% callout success %}
As an example, the Custom role allows for the creation of a user that can fully manage a User-Group-Collection relationship, without the ability to see anything in a Collection to which they are not assigned. This scenario would involve selecting only the following boxes for this Custom user:
- Manage Assigned Collections
- Manage Groups
- Manage Users
{% endcallout %}

## Access Control

Access Control determines access to Collections, as well as permissions within each individual Collection:

{% image organizations/collection-access-control.png Configure Access Control options %}

{% callout info %}
Recall that [Admins and Owners](#user-types) can automatically access all Collections. For these user types, configuring Access Control will determine **which Collections are readily accessible** in their Personal Vault and client applications (Browser Extension, Mobile, etc.). Admins and Owners will still be able to access "unassigned" Collections from the Organization Vault.
{% endcallout %}

|Access Control|Description|
|--------------|-----------|
|**This user can access and modify all items**|Grants the user(s) access to all Collections, as well as the ability to modify Vault items stored therein.<br><br>Selecting this option will collapse the Collection selection section.|
|**This user can access only the selected Collections**|Grants the user(s) access to only selected Collections, as well as [granular access control](#granular-access-control) over permissions for each Collection.<br><br>Selecting this option will expand the Collection selection section.|

### Granular Access Control

If you selected **This user can access only the selected Collection**, choose which Collections you want to provide them access to. For each Collection, you can also configure the following options:

|Option|Description|
|------|-----------|
|**Hide Passwords**|Prevents users from seeing or copying all passwords, TOTP seeds, or *Hidden* custom fields. Users with **Hide Passwords** active may only use items in the Collection via Auto-Fill.<br><br>**Hide Passwords** prevents easy copy-and-paste of hidden items, however it does not completely prevent user access to this information. Treat hidden passwords as you would any shared credential.|
|**Read Only**|Prevents users from adding, editing, or removing items within the Collection. Users with **Read Only** access may still see and use all passwords, TOTP seeds, and *Hidden* custom fields.|
