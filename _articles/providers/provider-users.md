---
layout: article
title: Provider Users
categories: [providers]
featured: false
popular: false
hidden: false
tags: []
order: 03
---

## Onboard Provider Users

To ensure the secure administration of your Client Organizations, Bitwarden applies a 3-step process for onboarding a new Provider member, [Invite](#invite) &rarr; [Accept](#accept) &rarr; [Confirm](#confirm).

### Invite

To invite users to your Provider:

1. Log in to the [Web Vault](https://vault.bitwarden.com){:target="\_blank"} and open your Provider.
2. Open the {% icon fa-sliders %} **Manage** tab and select **People** from the left-hand menu.
3. Select the {% icon fa-plus %} **Invite User** button:

   {% image /providers/provider-adduser.png Invite Provider Users %}
4. On the Invite User panel:

   - Enter the **Email** address where new users should receive their invites. You can add up to 20 users at a time by comma-separating email addresses.
   - Select the **User Type** to be applied to this batch of users. [User Type](#provider-user-types) will determine what access these users will have to the Provider. **Both User Types** will be able to fully administer any [Client Organization]({{site.baseurl}}/article/client-orgs/).
5. Click **Save** to invite the designated users to join the Provider.

{% callout info %}
**Invitations expire after 5 days**, at which point the user will need to be re-invited. Re-invite users in bulk by selecting each user and using the {% icon fa-cog %} gear dropdown to **Resend Invitations**:

{% image /providers/provider-resend-invite.png Resend Invitations %}
{% endcallout %}

### Accept

Invited users will receive an email from Bitwaden inviting them to join the Provider. Clicking the link in the email will open a Bitwarden invitations window. **Log In** with an existing Bitwarden account or **Create Account** to accept the invitation:

{% image /providers/provider-accept-invite.png Email Invitation %}

### Confirm

To confirm accepted invitations to your Provider:

1. Log in to the [Web Vault](https://vault.bitwarden.com){:target="\_blank"} and open your Provider.
2. Open the {% icon fa-sliders %} **Manage** tab and select **People** from the left-hand menu.
3. Select any `Accepted` users and use the {% icon fa-cog %} gear dropdown to {% icon fa-check %} **Confirm Selected**:

   {% image /providers/provider-confirm.png Confirm Provider Users %}
4. On the panel that appears, verify that the [fingerprint phrases]({{site.baseurl}}/article/fingerprint-phrase) for new users match those they can find in their **Settings** &rarr; **My Account** screen.

   Each fingerprint phrase is unique to its account, and ensures a final layer of oversight in securely adding users. If they match, select **Confirm**.

## Offboard Users

To remove users from your Provider:

1. Log in to the [Web Vault](https://vault.bitwarden.com){:target="\_blank"} and open your Provider.
2. Open the {% icon fa-sliders %} **Manage** tab and select **People** from the left-hand menu.
3. Select the users you want to remove from the Provider and use the {% icon fa-cog %} gear dropdown to {% icon fa-times %} **Remove**:

   {% image /providers/provider-removeuser.png Remove Provider Users %}

## Provider User Types

{% callout success %}
**Managing a Client Organization's users?** Organizations have a set of [User Types and Access Controls]({{site.baseurl}}/article/user-types-access-control/) that are distinct from Provider User Types.
{% endcallout %}

Bitwarden Provider Users can be granted one of two User Types to manage their access to the Provider. **Both User Types will be able to fully administer any Client Organization.** Bitwarden strongly recommends that you provision a second user with a Provider Admin role for failover purposes.

You can set User Types when you [invite](#invite) Provider users, or at any time from the **Manage** &rarr; **People** screen in your Provider Portal. User Types include:

|Role|Description|
|----|-----------|
|Service User|Service Users can access and manage all [Client Organizations]({{site.baseurl}}/article/client-orgs/), including:<br><br>- Access shared items stored in the Organization Vault<br>- Add, edit, or remove items from all Collections<br>- Create or delete Collections<br>- Assign Users and User Groups to Collections<br>- Assign Users to User Groups<br>- Create or delete User Groups<br>- Invite and confirm new users<br>- Manage Enterprise Policies<br>- View Event Logs<br>- Export Organization Vault data<br>- Manage Password Reset<br>- Manage Billing, Subscription, and Integrations|
|Provider Admin|Provider Admins manage all aspects of the Provider and all Client Organizations. Provider admins can do all of the above, plus:<br><br>- Create new Client Organizations<br>- Add existing Organizations to the Provider<br>- Invite and confirm new Service Users and Provider Admins<br>- View Provider Event Logs<br>- Edit Provider Settings|
