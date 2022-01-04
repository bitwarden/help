---
layout: article
title: Delete an Account or Organization
categories: [plans-and-pricing]
featured: false
popular: false
tags: [account, delete]
order: "09"
description: "This article explains how to delete a Bitwarden account or Organization if you forget your master password and need to create a new account."
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

1. In the [Web Vault]({{site.baseurl}}/article/getting-started-webvault), select **Settings** from the top navigation bar.
3. On the **My Account** page, scroll down to the **Danger Zone** and select the **Delete Account**.

   You'll be prompted to enter your Master Password to confirm you have the authority to take this action.

### Without Logging In

Complete the following steps to delete your account without logging in (e.g. if you have lost your Master Password, or if you are deleting a Bitwarden account tied to a `@yourcompany.com` email address):

1. Navigate to [vault.bitwarden.com/#/recover-delete](https://vault.bitwarden.com/#/recover-delete).
2. Enter the **Email Address** associated with the account.
3. In the email inbox, open the email to verify that you want to delete this Bitwarden account.

If any of your client applications were logged in to the old account, log out of them. If you delete a Bitwarden account that has a Premium subscription associated with it, [Contact Us](https://bitwarden.com/contact/){:target="\_blank"} and we'll reapply your existing subscription to the new account. If you were able to successfully export your Vault data prior to deletion, you can easily [import it into the new account]({{site.baseurl}}/article/import-data/).

## Delete an Organization

{% callout info %}
Only the **Owner** of an Organization has the authority to delete the Organization. For more information, see [User Types and Access Controls]({{site.baseurl}}/article/user-types-access-control/).
{% endcallout %}

1. In the [Web Vault]({{site.baseurl}}/article/getting-started-webvault), open your Organization.
2. In the Organization Vault, select the **Settings** tab.
3. On the **My Organization** page, scroll down to the **Danger Zone** and select the **Delete Organization**.

   You'll be prompted to enter your Master Password to confirm you have the authority to take this action.
