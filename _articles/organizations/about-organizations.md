---
layout: article
title: Organizations
categories: [organizations]
featured: true
popular: true
tags: [organizations]
order: 01
redirect_from:
  - /article/what-is-an-organization/
  - /article/create-an-organization/
---

## What are Organizations?

Organizations relate Bitwarden users and Vault items together for [secure sharing]({{site.baseurl}}/article/sharing/) of Logins, Notes, Cards, and Identities. Organizations have a unique Vault, where [administrators]({{site.baseurl}}/article/user-types-access-control/) can manage the Organization's items, users, and settings:

{% image organizations/org-vault-admin.png Organization Vault %}

Members of an Organization will find shared items ({% icon fa-cube%}) in their **My Vault** view alongside personal items, as well as filters for assigned [Collections]({{site.baseurl}}/article/about-collections/), which group Organization items similarly to how [Folders]({{site.baseurl}}/article/folders/) organize personal items:

{% image organizations/personal-vault-org-enabled.png Access shared items %}

### Types of Organizations

Bitwarden offers a variety of types of Organizations to meet your business's or family's needs. For feature-by-feature breakdowns of each Organization type, see [About Bitwarden Plans](https://bitwarden.com/help/article/about-bitwarden-plans/).

|Type|Description|
|----|-----------|
|Free Organizations|Free Organizations allow 2 users to securely share in up to 2 [Collections]({{site.baseurl}}/article/about-collections/).|
|Families Organizations|Families Organizations allow 6 users to securely share in unlimited [Collections]({{site.baseurl}}/article/about-collections/).|
|Teams Organizations|Teams Organizations allow unlimited users (*billed Per User Per Month*) to securely share in unlimited [Collections]({{site.baseurl}}/article/about-collections/) and offer a suite of operational tools like [Event Logs]({{site.baseurl}}/article/event-logs/).|
|Enterprise Organizations|Enterprise Organizations allow unlimited users (*billed Per User Per Month*) to securely share in unlimited [Collections]({{site.baseurl}}/article/about-collections/) and add enterprise-only features like [Login with SSO]({{site.baseurl}}/article/about-sso/) and [Policies]({{site.baseurl}}/article/policies/) to Bitwarden's suite of operational tools.|

### Comparing Organizations with Premium

The key thing to know is that Organizations enable **secure sharing from Organizations to users**. [Premium Individual plans]({{site.baseurl}}/article/about-bitwarden-plans/#premium-individual) unlock premium password security and management features, including advanced 2FA options, the Bitwarden Authenticator (TOTP), encrypted file attachments, and more, but Premium Individual **does not include secure data sharing.**

Paid Organizations (Families, Teams, or Enterprise) automatically include those premium features (advanced 2FA options, Bitwarden Authenticator (TOTP), etc.) for **every** user enrolled in the Organization.

### Comparing Organizations with Providers

[Providers]({{site.baseurl}}/article/providers) are Vault-administration entities that allow businesses like Managed Service Providers (MSPs) to quickly create and administer **multiple Bitwarden Organizations** on behalf of business customers.

## Create an Organization

Organizations are created and managed from the [Web Vault](https://vault.bitwarden.com){:target="\_blank"}. If you're new to Bitwarden, [create an account](https://vault.bitwarden.com/#/register){:target="\_blank"} before you start your Organization, then proceed with these instructions:

1. Select the **New Organization** button in your Web Vault:

   {%image /organizations/new-org-button-overlay.png Select New Organization %}
2. Enter an **Organization Name** and a **Billing Email** we can reach you at.

   Checking the **This account is owned by a business** checkbox will filter your options down to those suitable for businesses, and prompt your for a **Business name** so we know who to thank!
3. **Choose your Plan**. Bitwarden offers Organizations suited to any need. Check out the [feature-by-feature breakdown]({{site.baseurl}}/article/about-bitwarden-plans/#compare-the-plans-1) to figure out which is best for you.

   {% callout success %}All paid Organization (Families, Teams, or Enterprise) include premium features for all enrolled users!{% endcallout %}
4. If you chose a **Free Organization**, you're all set! If you chose one of our paid Organizations,

   - **Families/Teams/Enterprise:** Your plan comes with 1GB of encrypted [storage for attachments]({{site.baseurl}}/article/attachments/). Add **Additional Storage (GB)** for $0.33 per GB per month.
   - **Teams/Enterprise:** Specify the number of **User Seats** you need for your Organization. You can always add more seats later.
   - **Teams/Enterprise:** Choose whether you'd like to be billed **Annually** or **Monthly**. Families Organizations can only be billed annually.
5. Once you're happy with your Organization, enter your **Payment Information** and select **Submit**.

   {% callout success %}New Families, Teams, and Enterprise Organization have a 7 day free trial built in! We won't charge you until your trial is over, and you can cancel your subscription at any time from the Organization **Settings** tab.{% endcallout %}

Once you've created your Organization, create a [collection]({{site.baseurl}}/article/about-collections/), [invite users]({{site.baseurl}}/article/managing-users/), and [start sharing]({{site.baseurl}}/article/sharing).
