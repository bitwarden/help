---
layout: article
title: About Groups
categories: [organizations]
featured: true
popular: false
tags: [groups, access control]
order: 03
redirect_from:
  - /article/groups/
---

## What are Groups?

Groups are structures used by Organizations to together individual users, and provide a scalable way to assign access (including assigning Collections) by configuring Access Controls at the Group-level instead of at the individual-level.

{% callout info %}
Groups are currently available to Teams Organizations and Enterprise Organizations.
{% endcallout %}

When onboarding new users, add them to a Group to have them automatically inherit that Group's Access Controls configuration.

Users with the User Type **Admin** or higher can create Groups, assign users to each Group, and construct Group-Collection associations. For more information, see [User Types and Access Control](https://bitwarden.com/help/article/user-types-access-control/).

Create a Group by navigating to your Organization, opening the **Manage** tab, and selecting the **New Group** button. For help creating a Group, see [Create a Group](https://bitwarden.com/help/article/create-groups/).

{% image /organizations/groups-newgroup.png Select New Group %}

## Groups Best Practices

For Teams and Enterprise Organizations, using **Groups** alongside Collections provides a deeper level of access control and scalability to sharing resources. When you create a Group, you can gather users from common departments and assign access to Collections at the Group-level instead of the individual-level.

A common Group-Collection methodology is to create **Groups by Department** and **Collections by Function**, for example:

{% image /organizations/collections-graphic-2.png Using Groups %}

Other common methodologies include:
- Collections by Vendor or System (*i.e. users in an **Engineering** Group are assigned to a **AWS Credentials** Collection*)
- Groups by Locality (*i.e. users are assigned to a **US Employees** Group or **UK Employees** Group*)

### Next Steps

To get started using Groups, we recommend that you:

- [Create a Group](https://bitwarden.com/help/article/create-groups/)
- [Learn about User Types and Access Controls](https://bitwarden.com/help/article/user-types-access-control/)
