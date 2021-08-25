---
layout: article
title: Get Started with Provider Portal
categories: [providers]
featured: false
popular: false
hidden: false
tags: []
order: 02
redirect_from:
  - /article/deploying-bitwarden-as-a-msp/
---

{% callout success %}
Interested in becoming a Provider? To get started, we ask that:

- Your business has an active Enterprise Organization.
- Your business has a client ready to be onboarded under your Provider.

<br>
If you're not ready to start a Provider, the Bitwarden team is eager to support your Bitwarden journey as a reseller or customer.

<a role="button" class="btn btn-primary" href="https://bitwarden.com/contact" target="blank">Contact Us</a>
{% endcallout %}

## Why Bitwarden Providers?

Managed Service Providers (MSPs) and Resellers often need a way to quickly create and easily administer Bitwarden Organizations on behalf of business customers. **Providers** are administration entities that allow those businesses to create and manage [Client Organizations](#client-organization) through the **Provider Portal**.

The Provider Portal is an all-in-one management experience that enables Providers to manage customers’ Bitwarden Organizations at scale. The Provider Portal streamlines administration tasks by centralizing a dedicated space to access and support each client, or to create a new one:

{% image providers/provider.png Provider Portal %}

### Start a Provider

[Contact Us](https://bitwarden.com/contact){:target="\_blank"} to sign up for the Provider Program. After you register, a member of the Bitwarden team will contact you and issue an invitation to start a Provider:

{% image providers/provider-invitation.png Provider Invitation %}

Selecting the **Setup Provider Now** button will prompt you to log in to Bitwarden and fill out some Provider details:

{% image providers/provider-enrollment.png Provider Setup %}

### Onboard Users

As the creator of the Provider, you'll be automatically given [Provider Admin]({{site.baseurl}}/provider-users/#provider-user-types) status, allowing you to fully manage all aspects of the Provider and all [Client Organizations](#client-organizations). Bitwarden strongly recommends that you provision a second Provider Admin for failover purposes.

Now, begin adding your employees as [Service Users]({{site.baseurl}}/article/provider-users/#provider-user-types), which will allow them to fully administer all Client Organizations and create new ones or manage the Provider itself:

1. **Invite Users**. From the Provider Portal {% icon fa-sliders %} **Manage** tab, invite users as Service Users (or invite additional Provider Admins):

   {% image providers/provider-adduser.png %}
2. **Instruct Users to Accept Invites**. Invited users will receive an email from Bitwarden inviting them to join the Provider. Inform users that they should expect an invitation and that they will need to **Log In** with an existing Bitwarden account or **Create Account** to proceed:

   {% image providers/provider-accept-invite.png %}
3. **Confirm Accepted Invitations**. To complete the secure onboarding of your Provider users, confirm accepted invitations from the Provider Portal {% icon fa-sliders %} **Manage** tab:

   {% image providers/provider-confirm.png %}

With an assembled team of Service Users, you're ready to start setting up [Client Organizations](#client-organizations).

## Client Organizations

Client Organizations are any [Organization]({{site.baseurl}}/article/about-organizations/) that is attached to or administered by a Provider. To your customers, there's no difference between a "Client" Organization and a "regular" Organization except for who is conducting administration.

Organizations relate Bitwarden users and Vault items together for [secure sharing]({{site.baseurl}}/article/sharing/) of Logins, Cards, Notes, and Identities. Organizations have a unique Vault, where Provider Service Users can manage the Organization's items, users, and settings:

{% image providers/client-org.png %}

Members of a Client Organization (i.e. your customer's end-users) will find shared items ({% icon fa-cube %}) in their **My Vault** view alongside personal items, as well as filters for assigned [Collections]({{site.baseurl}}/article/about-collections/), which group Organization items similarly to how [Folders]({{site.baseurl}}/article/folders/) organize personal items:

{% image organizations/personal-vault-org-enabled.png End-user Vault %}

### Create a Client Organization

To create a new Client Organization, you must be a [Provider Admin]({{site.baseurl}}/article/provider-users/#provider-user-types). Navigate to the {% icon fa-bank %} **Clients** tab of the Provider Portal and select the {% icon fa-plus %} **New Client Organization** button:

{% image providers/provider-add-client.png Create a Client Organization %}

### Setup the Client Organization

With your newly-created Client Organization, start building the perfect solution for your customer. Exact setup will be different for each Client Organization based on your customers' needs, but will typically involve:

1. **Create Collections**. A good first step is to [create a set of Collections]({{site.baseurl}}/article/about-collections/#create-a-collection), which provide an organizing structure for the Vault items you'll add to the Vault in the next step.

    Common Collections patterns include **Collections by Department** (i.e. users in the client's Marketing Team are assigned to a **Marketing** Collection) or **Collections by Function** (i.e. users from the client's Marketing Team are assigned to a **Social Media** Collection):

    {% image organizations/collections-graphic-1.png %}  
2. **Populate the Organization Vault**. Once the structure of how you'll store Vault items is in place, you can begin populating the Organization with your client's Logins, Notes, Cards, and Identities.

   {% callout success %}You can [create shared items from scratch]({{site.baseurl}}/article/sharing/#create-a-shared-item), but we recommend [importing a file that contains all their Vault items]({{site.baseurl}}/article/import-to-org/).{% endcallout %}
3. **Configure Enterprise Policies**. Before beginning the user management portion of setup, [configure Enterprise Policies]({{site.baseurl}}/article/policies/) in order to set rules-of-use for things like [Master Password complexity]({{site.baseurl}}/article/policies/#master-password), [use of Two-step Login]({{site.baseurl}}/article/policies/#two-step-login), and [Admin Password Reset]({{site.baseurl}}/article/admin-reset/).

   {% callout info %}Enterprise Policies are **only available to Enterprise Organizations**.{% endcallout %}
4. **Setup Login with SSO**. If your customer uses Single Sign-On (SSO) to authenticate with other applications, [connect Bitwarden with their IdP]({{site.baseurl}}/article/about-sso/) to allow authentication with Bitwarden using end-users' SSO credentials.
5. **Create User Groups**. For Teams and Enterprise Organizations, [create a set of Groups]({{site.baseurl}}/article/about-groups/#create-a-group) for scalable permissions assignment. When you start adding users, add them to Groups to have each user automatically inherit the Group's configured permissions (e.g. access to which Collections).

   One common Group-Collection pattern is to create **Groups by Department** and **Collections by Function**, for example:

   {% image organizations/collections-graphic-2.png %}

### Invite Client Users

With the infrastructure for securely and scalably sharing credentials in place, you can begin inviting users to the Organization. Onboarding users to Bitwarden can be accomplished in two ways, depending on the size of your customer:

1. **For smaller customers**, you can send email invitations to users from the Organization Vault's {% icon fa-sliders %} **Manage** tab:

   {% image organizations/org-people-invite.png %}

2. **For larger customers** who leverage a directory service (Active Directory, LDAP, Okta, etc.), use [Directory Connector]({{site.baseurl}}/article/directory-sync) to sync Organization users from the source directory and automatically issue invitations.

Regardless of whether you've invited users from the Organization Vault or using Directory Connector, the same 3-step process (Invite &rarr; Accept &rarr; Confirm) that you followed when [onboarding Provider users](#onboard-users) will apply here as well.
