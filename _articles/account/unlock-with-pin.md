---
layout: article
title: Unlock with PIN
categories: [account-management]
featured: false
popular: false
tags: [unlock, pin]
order: 10
---

Bitwarden can be configured to accept a Personal Identification Number (PIN) as a method to unlock your Vault. PINs can **only be used to unlock** your Vault, you will still be required to log in to your Vault with your Master Password and any enabled [Two-step Login Method]({% link _articles/two-step-login/setup-two-step-login.md %}).

## Enable Unlock with PIN

Unlock with PIN can be enabled for Bitwarden Browser Extensions, Mobile Apps, and Desktop Apps:

### Enable for Browser Extensions

Complete the following steps to enable Unlock with PIN in your Browser Extension:

1. Open the {% icon fa-cogs %} **Settings** tab.
2. In the Security section, check the **Unlock with PIN** checkbox.
3. Enter the desired PIN code in the input box. PIN codes can be any combination of characters (a-z, 0-9, $, #, etc.).

   {% callout success %}**Optional:** The pre-checked option **Lock with master password on browser restart** will require you to enter your Master Password instead of a PIN when your browser restarts. If you want to be able to unlock with a PIN when your browser restarts, uncheck this option.{% endcallout %}

Regardless of whether you use the **Lock with master password on browser restart** option, your PIN settings will remain until you **log out** of Bitwarden.

Once enabled, you'll be prompted to **Verify PIN** to unlock the Browser Extension.

### Enable for Desktop Apps

Complete the following steps to enable Unlock with PIN in your Browser Extension:

1. Open your **Settings** (on Windows, **File** &rarr; **Settings**) (on macOS, **Bitwarden** &rarr; **Preferences**).
2. In the Security section, check the **Unlock with PIN** checkbox.
3. Enter the desired PIN code in the input box. PIN codes can be any combination of characters (a-z, 0-9, $, #, etc.).

   {% callout success %}**Optional:** The pre-checked option **Lock with master password on restart** will require you to enter your Master Password instead of a PIN when your app restarts. If you want to be able to unlock with a PIN when your app restarts, uncheck this option.{% endcallout %}

Regardless of whether you use the **Lock with master password on restart** option, your PIN settings will remain until you **log out** of Bitwarden.

Once enabled, you'll be prompted to **Verify PIN** to unlock the Desktop App.

### Enable for Mobile Apps

Complete the following steps to enable Unlock with PIN in your Browser Extension:

1. Open the {% icon fa-cogs %} **Settings** tab.
2. In the Security section, tap the **Unlock with PIN code** option.
3. Enter the desired PIN code in the input box and tap **Submit**. PIN codes can be any combination of characters (a-z, 0-9, $, #, etc.).

   {% callout success %}A dialog box will appear asking `Do you want to require unlocking with your master password when the application is restarted?` Tap **Yes** to require you to enter your Master Password instead of a PIN after your apps restarts. Tap **No** to be able to unlock with a PIN after your app restarts.{% endcallout %}

Regardless of whether you use the **Lock with master password on app restart** option, your PIN settings will remain until you **log out** of Bitwarden.

Once enabled, you'll be prompted to **Verify PIN** to unlock the Mobile App.
