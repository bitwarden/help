---
layout: article
title: Start a Client Organization
categories: [providers]
featured: false
popular: false
hidden: false
tags: []
order: 03
---

This article will walk you through the [creation of a Client Organization](#create-a-client-organization) and outline a typical [setup procedure](#initial-setup-procedure) for getting started administering a customer's Organization.

## Create a Client Organization

{% callout success %}
**Already have an Organization setup for your customer?** You can [add an existing Organization to the Provider Portal]({{site.baseurl}}/article/providers-faqs/#q-can-i-add-an-existing-organizations-to-my-provider).
{% endcallout %}

To create a Client Organization:

1. Navigate to the Provider Portal and select the {% icon fa-plus %} **New client organization** button:

   {% image providers/provider-add-client.png Create a Client Organization %}
2. On the New Client Organization screen, enter an **Organization Name** and **Billing Email**.

   Checking the **This account is owned by a business** checkbox will filter your options down to those suitable for business, and prompt you for a **Business name** so we know who to thank!
3. From the **Choose Your Plan** list, select the [type of Organization]({{site.baseurl}}/article/about-organizations/#types-of-organizations) to create. [Learn more]({{site.baseurl}}/article/about-bitwarden-plans/#bitwarden-for-your-business) about the differences between Organization types.

   {% callout success %}All paid Organizations (Families, Teams, or Enterprise) include premium features for all enrolled users.{% endcallout %}
4. If you chose a **Free Organization**, you're all set! If you chose one of our paid Organizations:

   - **Families/Teams/Enterprise**: Your plan comes with 1GB of encrypted [storage for attachments]({{site.baseurl}}/article/attachments/). Add **Additional Storage (GB)** for $0.33 per GB per month.
   - **Teams/Enterprise**: Specify the number of **User Seats** you need for the Client Organization. You can always add more seats later.
   - **Teams/Enterprise**: CHoose whether you'd like to be billed for this Organization **Annually** or **Monthly**. Families Organizations can only be billed annually.

5. Once you're happy with the Organization, enter your **Payment Information** and select **Submit**.
5. Select **Submit** to finishing creating the Organization.

Once created, navigating to the Client Organization from the Provider Portal will bring you to the Organization Vault, from which you can fully complete initial setup and engage in [ongoing administration]({{site.baseurl}}/article/manage-client-orgs/):

{% image providers/client-org-manage.png Client Organization Vault %}

## Initial Setup Procedure

With your newly-created Client Organization, you're ready to start building the perfect solution for your customer. Exact setup will be different for each Client Organization depending on your customers' needs, but typically will involve the following steps:

1. **Create Collections**. A good first step is to [create a set of Collections]({{site.baseurl}}/article/about-collections/#create-a-collection), which provide an organizing structure for the Vault items you'll add to the Vault in the next step.

    Common Collections patterns include **Collections by Department** (i.e. users in the client's Marketing Team are assigned to a **Marketing** Collection) or **Collections by Function** (i.e. users from the client's Marketing Team are assigned to a **Social Media** Colletion):

    {% image organizations/collections-graphic-1.png %}  
2. **Populate the Organization Vault**. Once the structure of how you'll store Vault items is in place, you can begin populating the Organization with your client's Logins, Notes, Cards, and Identities.

   {% callout success %}You can [create shared items from scratch]({{site.baseurl}}/article/share-to-a-collection/#create-a-shared-item), but we recommend [importing a file that contains all their Vault items]({{site.baseurl}}/article/import-to-org/).{% endcallout %}
3. **Configure Enterprise Policies**. Before beginning the user management portion of setup, [configure Enterprise Policies]({{site.baseurl}}/article/policies/) in order to set rules-of-use for things like [Master Password complexity]({{site.baseurl}}/article/policies/#master-password), [use of Two-step Login]({{site.baseurl}}/article/policies/#two-step-login), and [Admin Password Reset]({{site.baseurl}}/article/admin-reset/).

   {% callout info %}Enterprise Policies are **only available to Enterprise Organizations**.{% endcallout %}
4. **Setup Login with SSO**. If your customer uses Single Sign-On (SSO) to authenticate with other applications, [connect Bitwarden with their IdP]({{site.baseurl}}/article/about-sso/) to allow authentication with Bitwarden using end-users' SSO credentials.
5. **Create User Groups**. For Teams and Enterprise Organizations, [create a set of Groups]({{site.baseurl}}/article/about-groups/#create-a-group) for scalable permissions assignment. When you start adding users, add them to Groups to have each user automatically inherit the Group's configured permissions (e.g. access to which Collections).

   One common Group-Collection pattern is to create **Groups by Department** and **Collections by Function**, for example:

   {% image organizations/collections-graphic-2.png %}
6. **Start Inviting Users**. Now that the infrastructure for securely and scalably sharing credentials is in place for you client, you can begin [inviting users to the Organization]({{site.baseurl}}/article/managing-users/#onboard-users). To ensure the security of the Organization, Bitwarden applies a 3-step process for onboarding new users, Invite &rarr; Accept &rarr; Confirm.

   {% callout success %}**If your customer uses directory service** (Active Directory, an LDAP, Okta, etc.), use [Directory Connector]({{site.baseurl}}/article/directory-sync/) to automatically sync Organization users from the source directory and automatically issue invitations.{% endcallout %}
