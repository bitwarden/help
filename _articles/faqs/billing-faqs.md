---
layout: article
title: Billing FAQs
categories: [plans-and-pricing]
featured: true
popular: false
hidden: false
tags: []
order: 09
---

This article contains Frequently Asked Questions (FAQs) regarding **Plans and Pricing**.

For help selecting the right Bitwarden plan for you, refer to [What Plan is Right for Me?]({% link _articles/plans-and-pricing/what-plan-is-right-for-me.md %}) and [About Bitwarden Plans]({% link _articles/plans-and-pricing/about-bitwarden-plans.md %}).

## Account Management

### Q: How do I find out what subscription plan I'm on?

**A:** Login to your [Web Vault](https://vault.bitwarden.com):

- For individual subscriptions, navigate to your **Settings** tab. If the left menu bar has a **Go Premium** option, this account is on a free plan. If the left menu bar has a **Premium Membership** option, this account is on a Premium plan.
- For Organization subscriptions, open your Organization. In your Organization's **Settings** tab, select **Subscription** from the left menu. The **Plan** section will log this Organization's plan.

### Q: How do I view my billing information?

**A:** Viewing Billing information is different depending on whether you're viewing it for an Individual or Organization subscription. Use [Update Your Billing Information](https://bitwarden.com/help/article/update-billing-info/) to guide you through both processes.

### Q: How do I delete my account?

**A:** We're sad to see you go! Use [Delete Your Account](https://help.bitwarden.com/article/delete-your-account/) to guide you through this process.

### Q: How do I upgrade from an Individual subscription to an Organization?

**A:** Use [Upgrade from Individual to Organization](https://bitwarden.com/help/article/upgrade-from-individual-to-org/) to guide you through this process.

### Q: How do I add or remove a user seat from my Organization?

**A:** Login to your [Web Vault](https://vault.bitwarden.com) and open your Organization. In your Organization's **Settings** tab, select the **Subscription** from the left menu:

{% image organizations/org-subscription-screen-overlay-addseats.png Add or Remove seats %}

You can add or remove seats from your Organization at any time. The cost will be automatically pro-rated and debited or credited accordingly.

### Q: How do I pay for Premium on a self-hosted instance?

**A:** In order to pay for a self-hosted instance of Bitwarden, you'll need to create an account in the Bitwarden cloud via the [Web Vault](https://vault.bitwarden.com). From there, you can download the license file to apply to your self-hosted instance. Your license file will flag your access to Premium features, so make sure that you download a new license file if you were previously on a free plan.

For more information, see [Hosting](https://bitwarden.com/help/hosting).

### Q: If I have a Families Organization, do I need Premium?

**A:** The current Families plan (introduced Sep. 2020) automatically provides premium features for all 6 members of the Organization, so no!

Legacy Families plans do not automatically provide premium features, so users would need to upgrade to premium individually or the Families Organization Owner could upgrade the organization.

## Payment Options

### Q: What payment options do you accept for customers based in the United States?

**A:** We accept Credit/Debit Cards, PayPal, Bank Account (ACH), and Bitcoin. For business subscriptions, we also accept wire transfers and corporate checks, with a minimum payment of 500 USD. For more information regarding payment options, please [Contact Support](https://bitwarden.com/contact/).

### Q: What payment options do you accept for customers outside the United States?

**A:** We accept Credit/Debit Cards, PayPal, and Bitcoin. For business subscriptions, we also accept international wire transfers and corporate checks, with a minimum payment of 500 USD. For more information regarding payment options, please [Contact Support](https://bitwarden.com/contact/).

### Q: Can I pay with Bitcoin?

**A:** Yes! Refer to [Update Your Billing Information](https://bitwarden.com/help/article/update-billing-info/) for more information.

[Contact Us](https://bitwarden.com/contact/) once you have added the credit for the subscription amount. We will generate and send you an invoice and activate the new account. You will also receive an invoice from our payment processor (BitPay) at the time the Bitcoin is sent.

### Q: How do I enter my tax information (VAT)?

**A:** Login to your [Web Vault](https://vault.bitwarden.com) and open your Organization. In your Organization's **Settings** tab, scroll down to **Tax Information** section:

- If you are a customer based in the United States, select **United States** from the **Country** dropdown menu and enter your **Zip / Postal Code**.
- If you are a customer based outside the United States, select your country from the **Country** dropdown menu. Check the **Include VAT/GST Information** checkbox and enter your relevant tax identification information.

## Known Issues

### Q: An error occurs when I try to Go Premium on Firefox. How do I fix this?

**A:** We've observed some users of Firefox get the following error message when submitting payment information for a Premium subscription:

`You passed an empty string for 'payment_method_data[referrer]'. We assume empty values are an attempt to unset a parameter; however 'payment_method_data[referrer]' cannot be unset. You should remove 'payment_method_data[referrer]' from your request or supply a non-empty value.`

This usually occurs when submitting your payment method is impeded by an installed browser Extension or configured Browser option.

**Open Firefox in a Private Window and try resubmitting.**
