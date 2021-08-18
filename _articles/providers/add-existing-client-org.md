---
layout: article
title: Add Existing Organizations
categories: [providers]
featured: false
popular: false
hidden: false
tags: []
order: 05
---

MSPs, Resellers, and other Bitwarden Partners that are already administering Organizations on behalf of their clients can add pre-existing Organizations to their Provider Portal.

When Bitwarden detects that a [Provider Admin's]({{site.baseurl}}/article/provider-users/#provider-user-types) account is the **Owner of a non-Provider Organization**, the Provider Portal will display an {% icon fa-plus %} **Add Existing Organization** button:

{% image /providers/add-existing-client-1.png %}

Selecting the {% icon fa-plus %} **Add Existing Organization** button prompts you to select the Organization to add to the Provider:

{% image /providers/add-existing-client-2.png %}

Once added, the Organization will appear in the {% icon fa-bank %} **Clients** list alongside all other Client Organizations.

{% callout success %}
**Once you've added the existing Organization to the Provider**, you (the Provider Admin and Organization Owner) can be removed from the Organization. Doing so will free up the User Seat previously taken up by your account. As a member of the Provider, you will retain all permission over the Client Organization:

1. Organizations may not be Owner-less, so [add a backup Owner to the Organization]({{site.baseurl}}/article/managing-users/#invite).
2. Once the new Owner is Invited, Accepted, and Confirmed, ask them to [remove you from the Organization]({{site.baseurl}}/article/managing-users/#offboard-users).
{% endcallout %}
