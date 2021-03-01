---
layout: article
title: Two-step Login FAQs
categories: [two-step-login]
featured: true
popular: false
hidden: false
tags: []
order: 10
---

This article contains Frequently Asked Questions (FAQs) regarding **Two-step Login**.

### Q: Can I use SMS 2FA?

**A:** Bitwarden does not support SMS 2FA due to vulnerabilities, including SIM hijacking. We do not recommend SMS 2FA for other accounts unless it is the only available method. Any second factor is recommended over having none, but most alternatives are safer than SMS 2FA.

### Q: Is FIDO U2F supported on my iOS or Android App?

**A:** At this time, due to platform/OS limitations, FIDO U2F is **only supported for Web Vaults and Browser Extensions**, however we are currently investigating ways to implement this. In the meantime, we recommend enabling another [Two-step Login Method]({% link _articles/two-step-login/setup-two-step-login.md %}) for use with unsupported client applications.


### Q: Why is Bitwarden not asking for my enabled Two-step Login method?

**A:** In most cases, one of two things is happening:

1. You may be already logged in to Bitwarden and only unlocking your Vault. Two-step Login is required to **Log In** but not to **Unlock** your Vault. For more information on the difference between Logging In and Unlocking, see [Vault Timeout Action](https://bitwarden.com/help/article/vault-timeout/#vault-timeout-action).

2. You may have previously checked the **Remember me** checkbox on a device when accessing your Vault using Two-step Login.

   {% image /two-step/twostep-remember.png Remember me option %}

   If you used the **Remember me** option, you will need to **Deauthorize Sessions** from your Web Vault (**Settings** &rarr; **My Account**) for that device to continue asking for your Two-step Login method.
