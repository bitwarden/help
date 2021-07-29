---
layout: article
title: Providers
categories: [providers]
featured: false
popular: false
hidden: false
tags: []
order: 01
---

{% callout success %}
Interested in becoming a Provider? Sign up for the Provider Program using the registration link:

<a role="button" class="btn btn-primary" href="#" target="blank">Register as a Provider</a>
{% endcallout %}

## What are Providers?

Providers are Vault-administration entities that allow Managed Service Providers (MSPs), Resellers, and other businesses to create and manage [Client Organizations](#client-organizations) for individual business customers.

[Service Users]({{site.baseurl}}/article/provider-users/#user-types) are Provider-specific users that can fully administer Organizations on behalf of their customers. With full access to each Client Organization from the **Provider Portal**, Providers can seamlessly protect and support customers while allowing them to focus on critical day-to-day operations.

The Provider Portal's {% icon fa-bank %} **Clients** tab provides access to each Client Organization registered with the Provider as well as the ability to create new Organizations:

{% image providers/provider.png Provider Portal %}

[Provider Admins]({{site.baseurl}}/article/provider-users/#user-types) can also use the {% icon fa-sliders %} **Manage** and {% icon fa-cogs %} **Settings** tabs to administer the Provider itself, including adding new Service Users.

{% callout info %}
Unlike Organizations, a Provider does not include a Vault of its own, however Providers may create their own [Client Organization](#client-organizations) to securely store and share credentials used by employees.
{% endcallout %}

## Client Organizations

Client Organizations are any [Organization]({{site.baseurl}}/article/about-organizations/) that is attached to or adminstered by a [Provider](#what-are-providers). To your customers, there's no difference between a "Client" Organization and a "regular" Organization except for who is conducting adminstration.

Organizations relate Bitwarden users and Vault items together for [secure sharing]({{site.baseurl}}/article/share-to-a-collection/) of Logins, Cards, Notes, and Identities. Organizations have a unique Vault, where Provider Service Users can manage the Organization's items, users, and settings:

{% image /providers/client-org.png Client Organization Vault %}

Members of a Client Organization (i.e. your customer's end-users) will find shared items ({% icon fa-share-alt %}) in their **My Vault** view alongside personal items, as well as filters for assigned [Collections]({{site.baseurl}}/article/about-collections/), which group Organization items similarly to how [Folders]({{site.baseurl}}/article/folders/) organize personal items:

{% image /organizations/shared-items.png End-user Vault %}

Once you've filled out the [Provider Registration form](#) and been setup with a Provider by a member of the Bitwarden team, [start a Client Organization]({{site.baseurl}}/article/client-org-setup).
