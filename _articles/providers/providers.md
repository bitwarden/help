---
layout: article
title: Provider Portal Overview
categories: [providers]
featured: false
popular: false
hidden: false
tags: []
order: 01
---

{% callout success %}
Interested in becoming a Provider? To get started, we ask that:

- Your business has an active Enterprise Organization.
- Your business has a client ready to be onboarded under your Provider.

<br>
If you're not ready to start a Provider, the Bitwarden team is eager to support your Bitwarden journey as a reseller or customer.

<a role="button" class="btn btn-primary" href="https://bitwarden.com/contact" target="blank">Contact Us</a>
{% endcallout %}

## What are Providers?

Providers are administration entities in Bitwarden that allow Managed Service Providers (MSPs) and Resellers to create and fully manage multiple [Client Organizations](#client-organizations) on behalf of individual business customers. Client Organization management is easily accessible through the **Provider Portal**:

### What is the Provider Portal

The Provider Portal is an all-in-one management experience that enables Providers to manage customers' Bitwarden Organizations at scale. The Provider Portal streamlines administration tasks by centralizing a dedicated space to access and support each client, or to create a new one:

{% image providers/provider.png Provider Portal %}

Providers are built with two distinct [user types]({{site.baseurl}}/artice/provider-users/#user-types):

- **Service Users** can fully administer [Client Organizations](#client-organizations).
- **Provider Admins** can administer [Client Organizations](#client-organizations) and administer the Provider itself, including adding new Service Users to the team.

## Client Organizations

Client Organizations are any [Organization]({{site.baseurl}}/article/about-organizations/) that is attached to or administered by a [Provider](#what-are-providers). To your customers, there's no difference between a "Client" Organization and a "regular" Organization except for who is conducting administration. All Provider members have **full** access to all Client Organizations:

{% image providers/provider-diagram.png Structure of a Provider %}

{% callout info %}
**As denoted in the above diagram**, if Providers want to use an [Organization]({{site.baseurl}}/article/about-organizations) to manage their own credentials, they **should not** include it as a Client Organization that's administered by the Provider.

Creating an independent Organization for this case will ensure users can be given the appropriate [user types and access controls]({{site.baseurl}}/article/user-types-access-control) over credentials.
{% endcallout %}

Organizations relate Bitwarden users and Vault items together for [secure sharing]({{site.baseurl}}/article/sharing/) of Logins, Cards, Notes, and Identities. Organizations have a unique Vault, where Provider Service Users can manage the Organization's items, users, and settings:

{% image /providers/client-org.png Client Organization Vault %}

Members of a Client Organization (i.e. your customer's end-users) will find shared items ({% icon fa-cube %}) in their **My Vault** view alongside personal items, as well as filters for assigned [Collections]({{site.baseurl}}/article/about-collections/), which group Organization items similarly to how [Folders]({{site.baseurl}}/article/folders/) organize personal items:

{% image organizations/personal-vault-org-enabled.png End-user Vault %}

Once you've filled out the [Provider Registration form](#) and been setup with a Provider by a member of the Bitwarden team, [start a Client Organization]({{site.baseurl}}/article/client-org-setup).
