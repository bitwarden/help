---
layout: article
title: Create a Group
categories: [organizations]
featured: true
popular: false
tags: [groups, how to]
order: 06
---

This article will guide you through the process of setting up your first Group. For more information about Groups, see [About Groups](https://bitwarden.com/help/article/about-groups/).

{% note %}
Groups are currently available to Teams Organizations and Enterprise Organizations.
{% endnote %}

### In This Article
- [Create a Group](#create-a-group)
- [Assign Users to a Group](#assign-users-to-a-group)
- [View Users in a Group](#view-users-in-a-group)
- [Associate Groups to Collections](#associate-groups-to-collections)

## Create a Group

Complete the following steps to create a Group:

1. Login to your [Web Vault](https://vault.bitwarden.com){:target="\_blank"} and open your Organization.
2. In your Organization, open the **Manage** tab and select **Groups** from the left menu.
3. On the **Groups** screen, select the **New Group** button.

   {% image /organizations/groups-newgroup.png %}
4. On the **Add Group** screen:
   - Enter a **Name** for your Group.
   - Enter an **External Id** for your Group. External ids are used to link resources to external systems, like user directories.
   - Set the **Access Control** configuration for your Group, including which Collections this Group should have access to. For more information, see [User Types and Access Control](https://bitwarden.com/help/article/user-types-access-control/).

   Users who are added to this Group will automatically receive access according to this configuration.
5. Select **Save** to finish creating your Group.


## Assign Users to a Group

Complete the following steps to assign users to a Group:

1. Login to your [Web Vault](https://vault.bitwarden.com){:target="\_blank"} and open your Organization.
2. In your Organization, open the **Manage** tab and select **People** from the left menu.
3. Hover over the user you'd like to add to a Group and select the gear dropdown.

   {% image /organizations/org-people-options-updated-overlay.png %}
4. From the dropdown, select **Groups**.
5. In the **Groups Access** panel, select the Group(s) to add this user to and **Save** your selection.

   Users that are assigned to multiple Groups will be able to access items from the union of associated Collections.

### View Users in a Group
You can view which users belong to a specific Group at any time by completing the following steps:

1. In your Organization's **Manage** tab, select **Groups** from the left menu.
2. Hover over the Group you want to list users for and select the gear dropdown.
3. From the dropdown menu, select **Users**.

## Associate Groups to Collections

You can select which Collections a Group should have access to when you [Create Groups](#create-a-group), or by doing one of the following:

- Opening the Group from the **Manage** tab of your Organization, and configuring the Access Control section.
- Opening the Collection from the **Manage** tab of your Organization, and configuring the Group Access section.
