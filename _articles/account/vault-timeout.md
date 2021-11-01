---
layout: article
title: Vault Timeout Options
categories: [account-management]
featured: false
popular: false
tags: [account, vault, timeout, 2FA, two-step]
order: "14"
description: "Learn how to set a Vault timeout timer and behavior for your Bitwarden password manager."
---

Vault Timeout determines how your Vault will behave after a specified period of inactivity. Timeout is configured individually for each Bitwarden Client application (Web Vault, Browser Extension, Mobile, Desktop). Vault Timeout can be configured from the **Settings** menu of any Bitwarden app. When configuring your Vault Timeout settings, you can set both the **Vault Timeout** (time-constraint) and **Vault Timeout Action**:

## Vault Timeout

This option determines how long the Bitwarden app can be inactive before timing out. "Inactivity" is determined by time since interacting with Bitwarden, not system idle time. Each app will have standardized options (e.g. 1 minute, 15 minutes, 1 hour) as well as options specific to certain apps (e.g. On System Idle) and a Custom time input.

{% callout info %}
Enterprise Organizations can implement a maximum allowable Timeout option using an [Enterprise Policy]({{site.baseurl}}/article/policies/).
{% endcallout %}

### Web and Browser Extension Timeouts

Due to the Web Vault and Browser Extension depending on your Web Browser, unique "timeout" scenarios to take into account:

1. **If you refresh your browser** (`CMD/CTRL + R`), your Web Vault will lock. Refreshing will not affect a Browser Extension.
2. **If you close your browser tab**, you will be logged out of your Web Vault. Closing a single tab will not affect a Browser Extension.
3. **If you quit your browser**, you will be logged out of both your Web Vault and Browser Extension.

{% callout success %}
If you're using a Browser Extension, you can bypass this by enabling the **Unlock with PIN** option and unchecking the **Lock with master password on browser restart** checkbox.
{% endcallout %}

## Vault Timeout Action

This option determines what Bitwarden will do once the [Vault Timeout](#vault-timeout) is reached. Options include:

- **Lock** (default)

   Locking your Vault will maintain Vault data on the device, so unlocking your Vault can be done offline. You'll only be required to enter your [Master Password]({{site.baseurl}}/article/master-password/) to decrypt your Vault data, **not** any active Two-step Login methods.

- **Log Out**

   Logging out of your Vault completely removes all Vault data from your device. Logging back in will require you to re-authenticate your identity, so logging in can only be done when online. You'll be required to enter your [Master Password]({{site.baseurl}}/article/master-password/) and any active [Two-step Login]({{site.baseurl}}/article/setup-two-step-login/) method.
