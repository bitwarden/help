---
layout: article
title: Add or Remove Users
categories: [organizations]
featured: true
popular: false
tags: []
order: 09
---
This article will guide you through the process of inviting or removing users from your Organization.

Teams and Enterprise Organizations can sync Bitwarden to an existing user directory to automatically add or remove new users using the **Bitwarden Directory Connector**. For more information, see [About Directory Connector]({% link _articles/directory-connector/directory-sync.md %}}).

Invitations to an Organization will expire after 5 days, at which point the user will need to be re-invited. If you're self-hosting Bitwarden, you can configure the invitation expiration period. For more information, see [Configure Environment Variables]({% link _articles/hosting/environment-variables.md %}).

{% callout info %}
**Free** Organizations and **Families** Organizations have a maximum number of users; 2 and 6 respectively.

**Teams** Organizations and **Enterprise** Organizations must ensure that there are available users seats for their account before inviting users. For more information, see [Add or Remove User Seats for your Organization](https://bitwarden.com/help/article/user-seats/).
{% endcallout %}

## Invite Users

{% callout warning %}
**For Enterprise Organizations**, Bitwarden recommends configuring Enterprise Policies prior to inviting users to ensure compliance on-entrance to your Organization. For more information, see [Enterprise Policies](https://bitwarden.com/help/article/policies/).
{% endcallout %}

Complete the following steps to invite users to your Organization:

1. Login to your [Web Vault](https://vault.bitwarden.com){:target="\_blank"} and open your Organization.
2. In your Organization, open the **Manage** tab and select **People** from the left menu.
3. On the **People** screen, select the **Invite User** button.

   {% image /organizations/org-people-invite.png Select Invite User %}
4. On the **Invite User** panel:
   - Enter the **Email** address where new users should receive invites. You can add up to 20 users at a time by comma-separating email addresses.
   - Select the **User Type** to be applied to new users. User Type will determine what permissions these users will have at an Organizational level. For more information, see [User Types and Access Control](https://bitwarden.com/help/article/user-types-access-control/).
   - Select the **Access Control** to be applied to new users. Access Control will determine which Collections these users will have access to, and what level of access within those Collections. For more information, see [User Types and Access Control](https://bitwarden.com/help/article/user-types-access-control/).
5. Click **Save** to invite the designated users to your Organization.

Once users have accepted the invitation, you will need to [Confirm Invited Users](#confirm-invited-users).

### Invited Users

Invited users will receive an email from Bitwarden asking them to join the Organization. Clicking the **Join Organization Now** button in the email invitation will open a screen prompting users to **Log In** or **Create Account**.

{% image organizations/user-accept-updated.png %}

If the user does not answer this invitation, it will expire after 5 days.

### Confirm Invited Users

Once a user has accepted the invitation to join the Organization, you'll need to **Confirm** their acceptance.

On the **People** screen for your Organization, users who have accepted invitations will have an `Accepted` status indicator next to their email address. Users who are invited but have not yet accepted will have an `Invited` status indicator next to their email address.

Confirm an `Accepted` user by hovering over the user, selecting the gear dropdown, and selecting **Confirm** from the dropdown menu.

{% image organizations/org-people-options-overlay.png Confirm an Accepted user %}

Selecting **Confirm** will open a panel asking you to verify the user's fingerprint phrase. For added security, ask the user to verify the fingerprint phrase before confirming them into your Organization. Once confirmed, the user will have access to all assigned Collections within the Organization.

## Remove A User

Complete the following steps to remove a user from your Organization:

1. Login to your [Web Vault](https://vault.bitwarden.com){:target="\_blank"} and open your Organization.
2. In your Organization, open the **Manage** tab and select **People** from the left menu.
3. On the **People** screen, hover over the user you want to remove and select the gear dropdown.
4. From the gear dropdown, select the **Remove** option.

{% image organizations/org-people-options-updated-overlay.png Remove a user %}

Removing a user from an Organization **does not** delete their Bitwarden account. When a user is removed they can no longer access the Organization or any shared items and Collections, however they will still be able to login to Bitwarden using the established credentials and access to any Personal Vault items.

{% callout success %}
If you're an Organization Owner or Admin removing a user with a `@yourcompany.com` email address, you can delete the Bitwarden account as long as you have access to the `@yourcompany.com` email inbox. For more information, see [Delete an Account Without Logging In](https://bitwarden.com/help/article/delete-your-account/#without-logging-in).
{% endcallout %}
