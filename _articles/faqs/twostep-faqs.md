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

#### Q: Can I use SMS 2FA?

**A:** Bitwarden does not support SMS 2FA due to vulnerabilities, including SIM hijacking. We do not recommend SMS 2FA for other accounts unless it is the only available method. Any second factor is recommended over having none, but most alternatives are safer than SMS 2FA.

#### Q: Is FIDO U2F supported on my iOS or Android App?

**A:** At this time, due to platform/OS limitations, FIDO U2F is **only supported for Web Vaults and Browser Extensions**, however we are currently investigating ways to implement this. In the meantime, we recommend enabling another [Two-step Login Method]({% link _articles/two-step-login/setup-two-step-login.md %}) for use with unsupported client applications.
