---
layout: article
title: User Types and Access Control
categories: [organizations]
featured: true
popular: false
tags: [user types, access control]
order: 11
---

Users in Bitwarden Organizations can be granted a variety of User Types and Access Controls in order to manage their permissions.

You can designate User Type and Access Control when you invite users to your Organization (see [Add or Remove Users From Your Organization](https://bitwarden.com/help/article/managing-users/)), or at any time from the **Manage** &rarr; **People** screen in your Organization.

## User Types

User Type determines the level of access that a user will have within your Organization. User Type is configured at the Organization level.

Options include:

|User Type|Permissions|
|---------|-----------|
|User|Access shared items in assigned Collections<br>Add, edit, or remove items from assigned Collections (unless **Read Only**)|
|Manager|All of the above,<br>+ Assign Users to Collections<br>+ Assign User Groups to Collections<br>+ Create or delete new Collections|
|Admin|All of the above,<br>+ Assign Users to User Groups<br>+ Create or delete User Groups<br>+ Invite and confirm new Users<br>+ Manage Enterprise Policies<br>+ View Event Logs<br>+ Export Organization Vault data<br><br>**Admin Users automatically have access to all Collections.**|
|Owner|All of the above,<br>+ Manage Billing, Subscription, and Integrations<br><br>**Owner Users automatically have access to all Collections.**|
|Custom|Allows for granular control of user permissions on a user-by-user basis. For more information, see [Custom Role](#custom-role).|

{% callout warning %}
**Only an Owner** can create a new Owner or assign Owner to an existing user. For failover purposes, Bitwarden recommends creating multiple Owner users.
{% endcallout %}

### Custom Role

Selecting the **Custom** role for a user allows for granular control of user permissions on a user-by-user basis. A user with the Custom role can have a customizable selection of Manager and Admin capabilities, including:

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

{% callout success %}
As an example, the Custom role allows for the creation of a user that can fully manage a User-Group-Collection relationship, without the ability to see anything in a Collection to which they are not assigned. This scenario would involve selecting only the following boxes for this Custom user:
- Manage Assigned Collections
- Manage Groups
- Manage Users
{% endcallout %}

## Access Control

Access Control determines the Collection assignment of **Users** and **Managers**, as well as permissions within a given Collection. Access Control is configured at the Collection level.

Assigning **Admins** and **Owners** to Collections via Access Control will only impact which Collections appear readily in the **Filters** section of their Vault. Admins and Owners will always be able to access "un-assigned" Collections via the Organization view.

{% image /organizations/collection-access-control.png Configure Access Control options %}

Selecting **This user can access and modify all items** will allow users to use all Collections in your Organization.

Selecting **This user can access only the selected collections** will restrict users to only the assigned Collections, and activate Granular Access Control:

### Granular Access Control

To assign users to only selected Collections, check the checkbox to the left of each desired Collection. For each checked Collection, you may also configure:

**Hide Passwords**

Selecting **Hide Password** prevents users from seeing or copying all passwords, TOTP seeds, or *Hidden* custom fields. Users with **Hide Passwords** active may only use items in the Collection via Auto-Fill.

{% callout warning %}
Enabling **Hide Passwords** prevents easy copy-and-paste of hidden items, however it does not completely prevent user access to this information. Treat hidden passwords as you would any shared credential.
{% endcallout %}

**Read Only**

Selecting **Read Only** prevents users from adding, editing, or removing items within the Collection. Users with **Read Only** active may still see and use all passwords, TOTP seeds, and *Hidden* custom fields.
