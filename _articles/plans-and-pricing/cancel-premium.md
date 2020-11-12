---
layout: article
title: Cancel a Premium Subscription
categories: [plans-and-pricing]
featured: false
popular: false
hidden: false
tags: [plans, premium, cancel, expire]
order: 06
---

Premium Individual subscriptions default to automatic renewal on an annual basis. You can proactively cancel renewal of your Premium Individual subscription from the **Settings** menu of your [Web Vault](https://vault.bitwarden.com){:target="\_blank"}. When you cancel a Premium Individual subscription, you will still be able to use premium features for the remainder of your paid-for term.

{% warning %}
**Once your paid-for term ends, you will lose access to Bitwarden premium features.** It is important that you take the following into consideration when allowing your Premium Individual subscription to expire:
{% endwarning %}

### Two-step Login

You will **not** be locked out of your Vault, however you will no longer be able to use advanced Two-step Login options like Yubikey, U2F, or Duo for authentication.
- If you have a core Two-step Login option enabled (authenticator app or email), you will be prompted to use the enabled option.
- If you do not have another Two-step Login option enabled, you will authenticate into your Vault without Two-step Login.

### Bitwarden Authenticator (TOTP)

Your secret keys will remain stored in Vault items in the **Authenticator Key (TOTP)** field, however Bitwarden will no longer generate TOTP codes.

### Encrypted File Storage

Files will **not** be deleted from your Vault, however you will no longer be able to upload or download.

**Bitwarden recommends downloading all stored files prior to your subscription expiration.** If your subscription has already expired, you can leverage our 30 Day Refund Policy by temporarily renewing premium access, downloading your files, and requesting a refund.
