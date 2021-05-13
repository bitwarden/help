---
layout: article
title: Delete an Account or Organization
categories: [plans-and-pricing]
featured: false
popular: false
tags: [account, delete]
order: 08
---

Deleting a Bitwarden account or Organization permanently deletes the account or Organization and **all data that is associated with it**. Bitwarden does not "soft delete" any data.

Deleting an account or Organization does not automatically cancel a subscription. If you're leaving Bitwarden, you should cancel your subscription from the **Settings** &rarr; **Premium Membership** or **Organization Settings** &rarr; **Subscription** page first.

If you're locked out of your Vault and deleting your account so that you can create a new one, [Contact Us](https://bitwarden.com/contact/){:target="\_blank"} and we can help transfer your subscription to the new account.

{% callout warning %}
This action is permanent and cannot be undone.
{% endcallout %}

## Delete a Personal Account

### From the Web Vault

Complete the following steps to delete your Bitwarden account:

1. In the [Web Vault](https://vault.bitwarden.com){:target="\_blank"}, select **Settings** from the top navigation bar.
3. On the **My Account** page, scroll down to the **Danger Zone** and select the **Delete Account**.

   You'll be prompted to enter your Master Password to confirm you have the authority to take this action.

### Without Logging In

Complete the following steps to delete your account without logging in (e.g. if you have lost your Master Password, or if you are deleting a Bitwarden account tied to a `@yourcompany.com` email address):

1. Navigate to [vault.bitwarden.com/#/recover-delete](https://vault.bitwarden.com/#/recover-delete).
2. Enter the **Email Address** associated with the account.
3. In the email inbox, open the email to verify that you want to delete this Bitwarden account.

If you're deleting the account because you lost your Master Password, you can now create a new Bitwarden account with that email address. If the deleted account had a Premium subscription associated with it, [Contact Us](https://bitwarden.com/contact/){:target="\_blank"} and we'll reapply your subscription to the new account.

## Delete an Organization

{% callout info %}
Only the **Owner** of an Organization has the authority to delete the Organization. For more information, see [User Types and Access Controls]({% link _articles/organizations/user-types-access-control.md %}).
{% endcallout %}

1. In the [Web Vault](https://vault.bitwarden.com){:target="\_blank"}, open your Organization.
2. In the Organization Vault, select the **Settings** tab.
3. On the **My Organization** page, scroll down to the **Danger Zone** and select the **Delete Organization**.

   You'll be prompted to enter your Master Password to confirm you have the authority to take this action.
