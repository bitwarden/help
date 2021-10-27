---
layout: article
title: User Management
categories: [organizations]
featured: true
popular: false
tags: []
order: "05"
redirect_from:
  - /article/user-seats/
description: "This article explains how you can add, delete, and manage users of your Bitwarden password manager, including assigning user types and access controls."
---

## User Seats

Bitwarden [Teams and Enterprise Organizations]({{site.baseurl}}/article/about-organizations/#types-of-organizations) will **automatically scale up** user seats as you [invite](#invite) new users. You can set a [seat limit](#seat-limit) on scaling to prevent your seat count from exceeding a specified number, or [manually add seats](#manually-add-or-remove-seats) as desired. Regardless of how you choose to add seats, you will need to [manually remove](#manually-add-or-remove-seats) seats you're no longer using.

Adding and removing user seats will adjust your future billing totals. Adding seats will immediately charge your payment method on file at an adjusted rate so that **you'll only pay for the remainder of the billing cycle** (month/year). Removing seats will cause your next charge to be adjusted so that you're **credited for time not used** by the already-paid-for seat.

{% callout info %}
Only an an [Organization Owner]({{site.baseurl}}/article/user-types-access-control/#user-types) or [Provider Service User]({{site.baseurl}}/article/provider-users/#provider-user-types) can add or remove seats, as this directly affects billing.
{% endcallout %}

### Set a Seat Limit

To set a limit on the number of seats your Organization can scale up to:

1. Log in to your [Web Vault]({{site.baseurl}}/article/getting-started-webvault) and open your Organization.
2. Open the **Settings** tab and select **Subscription** from the left-hand menu.
3. Check the **Limit Subscription (Optional)** checkbox:

   {% image organizations/user-seats.png Set a Seat Limit %}
4. In the **Maximum Seat Limit (Optional)** input, specify a seat limit.
5. Select **Save**.

{% callout info %}
Once the specified limit is reached, you will not be able to invite new users unless you increase the limit.
{% endcallout %}

### Manually Add or Remove Seats

To manually add or remove seats to your Organization:

1. Log in to your [Web Vault]({{site.baseurl}}/article/getting-started-webvault) and open your Organization.
2. Open the **Settings** tab and select **Subscription** from the left-hand menu.
3. In the **Subscription Seats** input, add or remove seats using the hover-over arrows:

   {% image organizations/user-seats-add-remove.png Add or Remove Users Seats %}
4. Select **Save**.

{% callout info %}
If you're increasing your **Subscription Seats** above a  specified **Maximum Seat Limit**, you must also increase the seat limit so that it is equal to or greater than the desired subscription seat count.
{% endcallout %}

## Onboard Users

To ensure the security of your Organization, Bitwarden applies a 3-step process for onboarding a new member, [Invite](#invite) &rarr; [Accept](#accept) &rarr; [Confirm](#confirm).

{% callout success %}
Teams and Enterprise Organizations can sync Bitwarden to an existing user directory to automatically add or remove new users using the [**Bitwarden Directory Connector**]({{site.baseurl}}/article/directory-sync/).
{% endcallout %}

### Invite

{% callout success %}
**For Enterprise Organizations**, we recommend configuring [Enterprise Policies]({{site.baseurl}}/article/policies/) prior to inviting users to ensure compliance on-entrance to your Organization.
{% endcallout %}

To invite users to your Organization:

1. Log in to your [Web Vault]({{site.baseurl}}/article/getting-started-webvault) and open your Organization.
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

1. Log in to your [Web Vault]({{site.baseurl}}/article/getting-started-webvault) and open your Organization.
2. Open the **Manage** tab and select **People** from the left-hand menu.
3. Select any `Accepted` users and use the {% icon fa-cog %} gear dropdown to {% icon fa-check %} **Confirm Selected**:

   {% image organizations/org-people-options-overlay.png Confirm an Accepted user %}
3. Verify that the [fingerprint phrase]({{site.baseurl}}/article/fingerprint-phrase/) on your screen matches the one your new member can find in **Settings** &rarr; **My Account**:

   {% image fingerprint-phrase.png Sample Fingerprint Phrase %}

Each fingerprint phrase is unique to its account, and ensures a final layer of oversight in securely adding users. If they match, select **Submit**.

## Offboard Users

To remove users from your Organization:

1. Login to your [Web Vault]({{site.baseurl}}/article/getting-started-webvault) and open your Organization.
2. In your Organization, open the **Manage** tab and select **People** from the left menu.
3. Select the users you want to remove from the Organization and use the {% icon fa-cog %} gear dropdown to {% icon fa-times %} **Remove**:

{% image organizations/org-people-bulkremove.png Remove Users %}

### Deleting User Accounts

**Removing a user from your Organization does not delete their Bitwarden account.** When a user is removed they can no longer access the Organization or any shared items and Collections, however they will still be able to login to Bitwarden using their existing Master Password and access any Personal Vault items.

Depending on the particulars of your implementation, you may be able to use one of the following methods to delete a Bitwarden user account that belongs to an offboarded user:

1. If you're self-hosting Bitwarden, an authorized admin can delete the account from the [System Administrator Portal]({{site.baseurl}}/article/admin-portal/).
2. If the account has an `@yourcompany.com` email address that your company controls, you can use the [delete without logging in](https://vault.bitwarden.com/#/recover-delete){:target="\_blank"} tool and confirm deletion within the `@yourcompany.com` inbox. For more information, see [Delete an Account Without Logging In]({{site.baseurl}}/article/delete-your-account/#without-logging-in).
