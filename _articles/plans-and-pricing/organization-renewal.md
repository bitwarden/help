---
layout: article
title: Organization Renewal
categories: [plans-and-pricing]
featured: false
popular: false
hidden: false
tags: [plans, premium, renewal]
order: 07
---

Organization subscriptions renew automatically on an annual or monthly basis. You can check your renewal date from your [Web Vault](https://vault.bitwarden.com){:target="\_blank"} by navigating to Organization **Settings** &rarr; **Subscription**.

As your renewal date approaches, Bitwarden recommends that you validate the payment method by navigating to Organization **Settings** &rarr; **Billing**. For help updating your payment method, see [Update Your Billing Information](https://bitwarden.com/help/article/update-billing-info/#update-billing-information-for-organizations).

{% callout warning %}
If we cannot process your payment method, or if you have cancelled your subscription, your Organization will be disabled. For **self-hosted customers**, there is a 2 month grace period between expiration of your [license]({{site.baseurl}}/article/licensing-on-premise/#organization-license) and disabling of your Organization. In either case, a disabled Organization will result in the following:

**Organization-owned Vault Items**

[Owners]({{site.baseurl}}/article/user-types-access-control/) will retain access to [shared Vault items]({{site.baseurl}}/article/sharing), however all other users will lose access to these items. Organization Vault items and existing [Collections]({{site.baseurl}}/article/about-collections/) **will not be deleted**.

**Organization Users**

Users and existing [Groups]({{site.baseurl}}/article/about-groups/) **will not be removed** from the Organization. When your Organization is [re-enabled](#re-enabling-a-disabled-organization), users will not need to take any action.

{% endcallout %}

## Re-enabling a disabled Organization

If your cloud-hosted Organization is disabled, [Contact Us](https://bitwarden.com/contact/) with the subject **Disabled Organization**. The Bitwarden team will manually re-enable your Organization and work with the Accounts Receivable team for any further billing assistance.

If your self-hosted Organization is disabled, download a new license file from your cloud-hosted Bitwarden Organization Vault. Once downloaded, open your self-hosted Web Vault and update the license from the Organization **Settings** &rarr; **Subscription** page:

{% image hosting/update-license.png Update a self-hosting license %}
