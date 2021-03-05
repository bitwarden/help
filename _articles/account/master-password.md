---
layout: article
title: Your Master Password
categories: [account-management]
featured: true
popular: false
tags: [master password, account]
order: 01
redirect_from:
  - /article/change-your-master-password/
---

## About your Master Password

Your Master Password is the primary method for accessing your Vault. It's critically important that your Master Password is:

- **Memorable**: Bitwarden is a Zero Knowledge/Zero Trust solution. This means that the team at Bitwarden, as well as Bitwarden systems themselves, have no knowledge of, way to retrieve, or way to reset your Master Password. **Don't forget your Master Password!** Bitwarden won't be able to reset it or recover your Vault data if you do.

   For our technically-inclined users, see the article on [Encryption]({% link _articles/security/what-encryption-is-used.md %}) to find out how we accomplish Zero Trust.
- **Strong**: The longer, more complex, and less common your Master Password is, the safer your Vault data will be. Using something like `password` for your Master Password could let a capable attacker crack your Vault in **less than a second**!

   Use Bitwarden's free [**Password Strength Testing Tool**](https://bitwarden.com/password-strength){:target="\_blank"} to test the strength of some Master Passwords you'd consider using.

   For our technically-inclined users, learn about the tool we use to calculate password strength, called [zxcvbn](https://dropbox.tech/security/zxcvbn-realistic-password-strength-estimation){:target="\_blank"}.

{% callout success %}
If you're worried about forgetting your Master Password, the team at Bitwarden has a few recommendations for you:

1. **Setup a Master Password Hint**. Once setup, a Master Password Hint can be requested on the Login Screen. The hint will be emailed to you, not displayed on the web page, so as long as your inbox isn't compromised you won't have to worry about prying eyes (that said, we don't recommend using a hint that would give away your Master Password to anyone other than yourself).
2. **Designate a [Trusted Emergency Contact]({% link _articles/security/emergency-access.md %})**. If you have a Premium subscription, you can proactively configure your Vault to grant access in the case of emergency to another Bitwarden user.

{% endcallout %}

## Change your Master Password

Provided you **know your current Master Password**, change your Master Password at any time from the [Web Vault](https://vault.bitwarden.com){:target="\_blank"}:

{% callout success %}
If you don't know your Master Password, see [I Forgot my Master Password]({% link _articles/account/forgot-master-password.md %}).
{% endcallout %}

1. In your Web Vault, Select the **Settings** tab from the top navigation.
2. On the **My Account** page, scroll down to the **Change Master Password** section.
3. Enter your **Current Master Password**.
4. Enter and Confirm your **New Master Password**.

   {% callout warning %}Don't check the **rotate account's encryption key** box unless you fully understand the ramifications and required follow-up procedures. Learn more [here]({% link _articles/account/account-encryption-key.md %}).{% endcallout %}
5. Select the **Change Master Password** button.

Changing your Master Password will log you out of your current Web Vault session, requiring you to log back in with your new Master Password.

Other logged-in client applications (Mobile Apps, Browser Extensions, etc.) may remain active for up to an hour, however they will eventually also require you to log back in with your new Master Password.

## I forgot my Master Password

As described in the [About Your Master Password](#about-your-master-password) section, Bitwarden has no knowledge of, way to retrieve, or way to reset your Master Password.

If you've already lost your Master Password, there is unfortunately no way for the team to recover the account or the data therein. You will need to delete your account and start a new one.

{% callout success %}
If you're using any Bitwarden client applications (Mobile Apps, Browser Extensions, etc.) you should check whether any of these sessions are still logged in prior to deleting your account. If a client application is still logged in, you should manually catalogue your Vault items to preserve your data.
{% endcallout %}

To delete your account:

1. Navigate to [vault.bitwarden.com/#/recover-delete](https://vault.bitwarden.com/#/recover-delete).
2. Enter the **Email Address** associated with your account and select **Submit**.
3. In your email inbox, open the email and verify that you want to delete this Bitwarden account.

Once deleted, you're free to create a new Bitwarden account with that email address. If you delete a Bitwarden account that has a Premium subscription associated with it, [Contact Us](https://bitwarden.com/contact/){:target="\_blank"} and we'll reapply your existing subscription to the new account.
