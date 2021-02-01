---
layout: article
title: I Forgot my Master Password
categories: [account-management]
featured: true
popular: false
tags: [master password, account]
order: 02
---

As described in the [About Your Master Password](#about-your-master-password) article, Bitwarden has no knowledge of, way to retrieve, or way to reset your Master Password. If you've already lost your Master Password, there is unfortunately no way for the team to recover the account or the data therein. You will need to delete your account and start a new one.

{% callout success %}
If you're using any Bitwarden client applications (Mobile Apps, Browser Extensions, etc.) you should check whether any of these sessions are still logged in prior to deleting your account. If a client application is still logged in, [Export Vault Data]({% link _articles/account/export-your-data.md %}) to a file for import into a new account.
{% endcallout %}

Complete the following steps to delete your account:

1. Navigate to [vault.bitwarden.com/#/recover-delete](https://vault.bitwarden.com/#/recover-delete).
2. Enter the **Email Address** associated with your account.
3. In your email inbox, open the email and verify that you want to delete this Bitwarden account.

Once deleted, you're free to create a new Bitwarden account with that email address. If you delete a Bitwarden account that has a Premium subscription associated with it, [Contact Us](https://bitwarden.com/contact/){:target="\_blank"} and we'll reapply your existing subscription to the new account.
