---
layout: article
title: User Management
categories: [organizations]
featured: true
popular: false
tags: []
order: 05
---

## Manage User Seats

Bitwarden [Teams and Enterprise Organizations]({{site.baseurl}}/article/about-organizations/#types-of-organizations) allow you to add or remove user seats on-the-fly to best fit your business's needs. Only an [Organization Owner]({{site.baseurl}}/article/user-types-access-control/#user-types) or [Provider Service User]({{site.baseurl}}/article/provider-users/#provider-user-types) can add and remove seats, as this directly affects billing.

{% callout info %}
If you have a [Free or Families Organization]({{site.baseurl}}/article/about-organizations/#types-of-organizations), your user seats are pre-loaded and fixed at 2 and 6, respectively.
{% endcallout %}

### Add Seats

To add seats to your Organization:

1. Log in to your [Web Vault](https://vault.bitwarden.com){:target="\_blank"} and open your Organization.
2. Open the **Settings** tab and select **Subscription** from the left-hand menu.
3. Select the **Add Seats** button.

Adding user seats will adjust your future billing totals and immediately charge your payment method on file. That immediate charge will be pro-rated such that you'll only pay for the remainder of the billing cycle (month/year).

### Remove Seats

To remove seats from your Organization:

1. Log in to your [Web Vault](https://vault.bitwarden.com){:target="\_blank"} and open your Organization.
2. Open the **Settings** tab and select **Subscription** from the left-hand menu.
3. Select the **Add Seats** button.

Removing user seats will adjust your future billing totals. The next charge will be pro-rated such that you are credited back for time not used by the already-paid-for seat.

## Onboard Users

To ensure the security of your Organization, Bitwarden applies a 3-step process for onboarding a new member, [Invite](#invite) &rarr; [Accept](#accept) &rarr; [Confirm](#confirm).

{% callout success %}
Teams and Enterprise Organizations can sync Bitwarden to an existing user directory to automatically add or remove new users using the [**Bitwarden Directory Connector**]({{site.baseurl}}/article/directory-sync).
{% endcallout %}

### Invite

{% callout success %}
**For Enterprise Organizations**, we recommend configuring [Enterprise Policies]({{site.baseurl}}/article/policies) prior to inviting users to ensure compliance on-entrance to your Organization.
{% endcallout %}

To invite users to your Organization:

1. Log in to your [Web Vault](https://vault.bitwarden.com){:target="\_blank"} and open your Organization.
2. Open the **Manage** tab and select **People** from the left-hand menu.
3. Select the {% icon fa-plus %} **Invite User** button:

   {% image organizations/org-people-invite.png Invite User %}
4. On the Invite User panel:

   - Enter the **Email** address where new users should receive invites. You can add up to 20 users at a time by comma-separating email addresses.
   - Select the **User Type** to be applied to new users. [User Type]({{site.baseurl}}/article/user-types-access-control/#user-type) will determine what permissions these users will have at an Organizational level.
   - Select the **Access Control** to be applied to new users. [Access Control]({{site.baseurl}}/article/user-types-access-control/#access-control) will determine which Collections these users will have access to, and what level of access within those Collections.  
5. Click **Save** to invite the designated users to your Organization.

{% callout info %}
**Invitations expire after 5 days**, at which point the user will need to be re-invited. Re-invite users in bulk by selecting each user and using the {% icon fa-cog %} gear dropdown to **Resend Invitations**:

{% image organizations/org-people-reinvite.png Bulk Reinvite %}

If you're self-hosting Bitwarden, you can configure the invitation expiration period [using an environment variable]({{site.baseurl}}/article/environment-variables/).
{% endcallout %}  
### Accept

Invited users will receive an email from Bitwarden inviting them to join the Organization. Clicking the link in the email will open a Bitwarden Client invitation window. **Log In** with an existing Bitwarden or **Create Account** to accept the invitation:

{% image organizations/user-accept-updated.png Invitation Window %}

### Confirm

To confirm accepted invitations into your Organization:

1. Log in to your [Web Vault](https://vault.bitwarden.com){:target="\_blank"} and open your Organization.
2. Open the **Manage** tab and select **People** from the left-hand menu.
3. Select any `Accepted` users and use the {% icon fa-cog %} gear dropdown to {% icon fa-check %} **Confirm Selected**:

   {% image organizations/org-people-options-overlay.png Confirm an Accepted user %}
3. Verify that the [fingerprint phrase]({{site.baseurl}}/article/fingerprint-phrase) on your screen matches the one your new member can find in **Settings** &rarr; **My Account**:

   {% image fingerprint-phrase.png Sample Fingerprint Phrase %}

Each fingerprint phrase is unique to its account, and ensures a final layer of oversight in securely adding users. If they match, select **Submit**.

## Offboard Users

To remove users from your Organization:

1. Login to your [Web Vault](https://vault.bitwarden.com){:target="\_blank"} and open your Organization.
2. In your Organization, open the **Manage** tab and select **People** from the left menu.
3. Select the users you want to remove from the Organization and use the {% icon fa-cog %} gear dropdown to {% icon fa-times %} **Remove**:

{% image organizations/org-people-bulkremove.png Remove Users %}

### Deleting User Accounts

**Removing a user from your Organization does not delete their Bitwarden account.** When a user is removed they can no longer access the Organization or any shared items and Collections, however they will still be able to login to Bitwarden using their existing Master Password and access any Personal Vault items.

Depending on the particulars of your implementation, you may be able to use one of the following methods to delete a Bitwarden user account that belongs to an offboarded user:

1. If you're self-hosting Bitwarden, an authorized admin can delete the account from the [System Administrator Portal]({{site.baseurl}}/article/admin-portal/).
2. If the account has an `@yourcompany.com` email address that your company controls, you can use the [delete without logging in](https://vault.bitwarden.com/#/recover-delete){:target="\_blank"} tool and confirm deletion within the `@yourcompany.com` inbox. For more information, see [Delete an Account Without Logging In](https://bitwarden.com/help/article/delete-your-account/#without-logging-in).
