---
layout: article
title: Groups
categories: [organizations]
featured: true
popular: false
tags: [groups, access control]
order: 03
redirect_from:
  - /article/groups/
  - /article/create-groups/
---

## What are Groups?

Groups relate together individual users, and provide a scalable way to assign permissions, including access to [Collections]({{site.baseurl}}/article/about-collections) and other [access controls]({{site.baseurl}}/article/user-types-access-control/#access-control). When [onboarding new users]({{site.baseurl}}/article/managing-users/), add them to a Group to have them automatically inherit that Group's configured permissions.

{% callout info %}
Groups are available to [Teams and Enterprise Organizations]({{site.baseurl}}/article/about-organizations/#types-of-organizations).
{% endcallout %}

### Using Groups

Teams and Enterprise Organizations can designate access to [Collections]({{site.baseurl}}/article/about-collections/) based on user Groups, rather than individual users. Group-Collection associations provide a deep level of access control and scalability to sharing resources. One common Group-Collection methodology is to create **Groups by Department** and **Collections by Function**, for example:

{% image organizations/collections-graphic-2.png Using Collections with Groups%}

Other common methodologies include **Collections by Vendor or System** (i.e. users in an **Engineering** Group are assigned to a **AWS Credentials** Collection) and **Groups by Locality** (i.e. users are assigned to a **US Employees** Group or **UK Employees** Group).

## Create a Group

Organization [Admins (or higher)]({{site.baseurl}}/article/user-types-access-control/#user-types) and [Provider Users]({{site.baseurl}}/article/provider-users/provider-user-types) can create and manage Groups. To create a Group:

1. Log in to your [Web Vault](https://vault.bitwarden.com){:target="\_blank"} and open your Organization.
2. Open the **Manage** tab and select **Groups** from the left-hand menu.
3. On the Groups screen, select the {% icon fa-plus %} **New Group** button.

   {% image organizations/groups-newgroup.png New Group %}
4. Give your Group a **Name** and assign the desired [Access Control]({{site.baseurl}}/article/user-types-access-control/#access-control).

   Access Controls can designate that users can access all items (i.e. all Collections) or only specific Collections, as well as whether [Passwords are hidden or Logins are read-only]({{site.baseurl}}/article/user-types-access-control/#granular-access-control).

   {% callout success %}The **External Id** field is only relevant if you're using [Directory Connector]({{site.baseurl}}/article/directory-sync/).{% endcallout %}
5. Select **Save** to finish creating your Group.

### Assign Users to Group(s)

Once your Groups are created and configured, add users to them:

1. In your Organization Vault open the **Manage** tab and select **People** from the left-hand menu.
2. Hover over the user you want to add and use the {% icon fa-cog %} gear dropdown to select **Groups**:

   {% image organizations/org-people-options-updated-overlay.png %}
3. Select the Group(s) to add this user to and **Save** your selection.

{% callout success %}
You can check which users belong to a Group from the **Manage** &rarr; **Groups** screen by using the {% icon fa-cog %} gear dropdown to select **Users**.
{% endcallout %}

### Edit Collections Assignments

If you want to change the [Collections]({{site.baseurl}}/article/about-collections/) or [access controls]({{site.baseurl}}/article/user-types-access-control/#access-control) assigned to a Group:

1. In your Organization Vault, open the **Manage** tab and select **Groups** from the left-hand menu.
2. Select the group you want to edit.
3. Configure the Access Control settings as you did when the Group was [initially created](#create-a-group).
