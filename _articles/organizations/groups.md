---
layout: article
title: User groups
categories: [Organizations]
featured: true
popular: false
tags: []
---

In addition to collections, groups are a way for organizations to further control user access. They are particularly useful to larger organizations where user access can be difficult to manage.

{% note %}
User groups are only available to enterprise organizations.
{% endnote %}

## User Assignment

After creating a user, you can assign that user to one or more groups. From the users listing (People) page, Select the **Groups** option for a particular user to make your group selections.

You can also view which users belong to a specific group by navigating to the groups listing page and selecting the **Users** option for a specific group. Users can be removed from the group from this page as well, however, adding a new user to a group must be done from the individual user.

{% image organizations/user-groups.png %}

## Collection Assignment

Access control for a group is done by assigning collections to a group (or vice versa). You can assign which collections a group can access by editing the group from the group listing page.

{% image organizations/group-edit.png %}

Alternatively, edit a collection from the collections listing page to choose which groups can access it.

Organization users will only be able to access logins that belong to the groups that they are members of. If a user belongs to multiple groups, that user will be able to access logins from the _union_ of all collections for their groups plus any individual collections that they have been assigned to.