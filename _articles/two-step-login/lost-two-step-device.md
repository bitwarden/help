---
layout: article
title: Lost Two-step Device
categories: [two-step-login]
featured: false
popular: false
tags: [two-step login, 2fa, two factor authentication, account]
order: 09
---

If you lose access to the device or method that you use for Two-step Login, you can recover your account using a Two-step Login **Recovery Code**. If you have your Recovery Code, see [Two-step Recovery Code]({% link _articles/two-step-login/two-step-recovery-code.md %}) to learn how to use it to recover your account.

## I Don't Have a Recovery Code

If you've lost your Two-step Login Device and don't have a Recovery Code, there is unfortunately no way for the team to recover the account or the data therein. You will need to delete your account and start a new one.

{% callout success %}
If you're using any Bitwarden client applications (Mobile Apps, Browser Extensions, etc.) you should check whether any of these sessions are still logged in prior to deleting your account. If a client application is still logged in, [Export Vault Data]({% link _articles/account/export-your-data.md %}) to a file for import into a new account.
{% endcallout %}

Complete the following steps to delete your account:

{% callout warning%}
This action is permanent and cannot be undone.
{% endcallout %}

1. Navigate to [vault.bitwarden.com/#/recover-delete](https://vault.bitwarden.com/#/recover-delete).
2. Enter the **Email Address** associated with your account.
3. In your email inbox, open the email and verify that you want to delete this Bitwarden account.

Once deleted, you're free to create a new Bitwarden account with that email address. If you delete a Bitwarden account that has a Premium subscription associated with it, [Contact Us](https://bitwarden.com/contact/){:target="\_blank"} and we'll reapply your existing subscription to the new account.
