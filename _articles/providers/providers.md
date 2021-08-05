---
layout: article
title: Providers Overview
categories: [providers]
featured: false
popular: false
hidden: false
tags: []
order: 02
---

{% callout success %}
Interested in becoming a Provider? Sign up for the Provider Program using the registration link:

<a role="button" class="btn btn-primary" href="#" target="blank">Register as a Provider</a>
{% endcallout %}

## What are Providers?

Providers are administration entities that allow Managed Service Providers (MSPs), Resellers, and other businesses to create and manage [Client Organizations](#client-organizations) for individual business customers. Provider members can fully administer Client Organizations on behalf of their customers. With full access to each Client Organization from the **Provider Portal**, Providers can seamlessly protect and support customers while allowing them to focus on critical day-to-day operations.

The Provider Portal's {% icon fa-bank %} **Clients** tab provides access to each Client Organization registered with the Provider as well as providing [Provider Admins]({{site.baseurl}}/article/provider-users/#user-types) the ability to create new Organizations:

{% image providers/provider.png Provider Portal %}

Provider Admins can also use the {% icon fa-sliders %} **Manage** and {% icon fa-cogs %} **Settings** tabs to administer the Provider itself, including adding new Service Users.

## Client Organizations

Client Organizations are any [Organization]({{site.baseurl}}/article/about-organizations/) that is attached to or administered by a [Provider](#what-are-providers). To your customers, there's no difference between a "Client" Organization and a "regular" Organization except for who is conducting administration. All Provider members have **full** access to all Client Organizations:

{% image providers/provider-diagram.png Structure of a Provider %}

{% callout info %}
**As denoted in the above diagram**, if Providers want to use an [Organization]({{site.baseurl}}/article/about-organizations) to manage their own credentials, they **should not** include it as a Client Organization that's administered by the Provider.

Creating an independent Organization for this case will ensure users can be given the appropriate [user types and access controls]({{site.baseurl}}/article/user-types-access-control) over credentials.
{% endcallout %}

Organizations relate Bitwarden users and Vault items together for [secure sharing]({{site.baseurl}}/article/share-to-a-collection/) of Logins, Cards, Notes, and Identities. Organizations have a unique Vault, where Provider Service Users can manage the Organization's items, users, and settings:

{% image /providers/client-org.png Client Organization Vault %}

Members of a Client Organization (i.e. your customer's end-users) will find shared items ({% icon fa-share-alt %}) in their **My Vault** view alongside personal items, as well as filters for assigned [Collections]({{site.baseurl}}/article/about-collections/), which group Organization items similarly to how [Folders]({{site.baseurl}}/article/folders/) organize personal items:

{% image /organizations/shared-items.png End-user Vault %}

Once you've filled out the [Provider Registration form](#) and been setup with a Provider by a member of the Bitwarden team, [start a Client Organization]({{site.baseurl}}/article/client-org-setup).
