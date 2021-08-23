---
layout: article
title: I Forgot my Master Password
categories: [account-management]
featured: true
popular: false
tags: [master password, account]
order: 02
---

As described in the [Your Master Password]({% link _articles/account/master-password.md %}) article, Bitwarden has no knowledge of, way to retrieve, or way to reset your Master Password.

If you've already lost your Master Password, there is unfortunately no way for anyone to recover the account or the data stored in your Personal Vault unless you're enrolled in [Organization Master Password Reset]({{site.baseurl}}/article/admin-reset/). You will need to delete your account and start a new one.

{% callout success %}
Before deleting your account:

**First**, use the [Get master password hint](https://vault.bitwarden.com/#/hint){:target="\_blank"} link if you have a hint setup. Hints will be emailed to the email address associated with your account. If you don't have a hint setup, you'll get an email reporting this.

**Second**, if you're having issues logging in with a Bitwarden client application, try logging in using another type of client, or on another device.

**Third**, if you have a designated Trusted Emergency Contact established using [Emergency Access]({{site.baseurl}}/article/emergency-access/), get in contact with them to regain Read or Takeover access to your account.

**Lastly**, if you're using any Bitwarden client applications (Mobile Apps, Browser Extensions, etc.), you should check whether any of these sessions are still logged in prior to deleting your account. If a client application is still logged in, you should manually catalogue your Vault items to preserve your data.
{% endcallout %}

If you weren't able to gain access to your Vault, complete the following steps to delete your account:

1. Navigate to [vault.bitwarden.com/#/recover-delete](https://vault.bitwarden.com/#/recover-delete).
2. Enter the **Email Address** associated with your account and select **Submit**.
3. In your email inbox, open the email and verify that you want to delete this Bitwarden account.

Once deleted, you're free to create a new Bitwarden account with that email address. If you delete a Bitwarden account that has a Premium subscription associated with it, [Contact Us](https://bitwarden.com/contact/){:target="\_blank"} and we'll reapply your existing subscription to the new account.
