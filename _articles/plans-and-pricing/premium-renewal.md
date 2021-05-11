---
layout: article
title: Premium Renewal
categories: [plans-and-pricing]
featured: false
popular: false
hidden: false
tags: [plans, premium, renewal]
order: 06
---

Premium Individual subscriptions renew automatically on an annual basis. You can check your renewal date from your [Web Vault](https://vault.bitwarden.com){:target="\_blank"} by navigating to **Settings** &rarr; **Premium Membership**.

As your renewal date approaches, Bitwarden recommends that you validate the payment method by navigating to **Settings** &rarr; **Billing**. For help updating your payment method, see [Update Your Billing Information](https://bitwarden.com/help/article/update-billing-info/).

{% callout warning %}
If we cannot process your payment method, or if you have cancelled your subscription, your account will revert to [Free Individual](https://bitwarden.com/help/article/about-bitwarden-plans/#free-individual). Until you re-instate your Premium subscription, this will result in the following:

**Two-step Login**

You will **not** be locked out of your Vault, however you will not be able to use advanced Two-step Login options like Yubikey, FIDO2, or Duo for authentication.
- If you have a core Two-step Login option enabled (authenticator app or email), you will be prompted to use the enabled option.
- If you do not have another Two-step Login option enabled, you will authenticate into your Vault without Two-step Login.

**Bitwarden Authenticator (TOTP)**

Your secret keys will remain stored in Vault items in the **Authenticator Key (TOTP)** field, however Bitwarden will not generate TOTP codes.

**Encrypted File Attachments**

Files will **not** be deleted from your Vault, however you will not be able to upload or download.

**Emergency Access**

Trusted emergency contacts will still be able to request and obtain access to your Vault. As a grantor, however, you will not be able to add new or edit existing trusted emergency contacts.
{% endcallout %}
