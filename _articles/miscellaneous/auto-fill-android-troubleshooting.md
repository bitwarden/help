---
layout: article
title: Troubleshooting Android Auto-fill
categories: [auto-fill]
order: 09
featured: false
popular: false
tags: [android, autofill, auto-fill]
---

Depending on the version of Android your device is running, there are a few different ways to enable auto-fill from Bitwarden:

|Option|Requires version...|Requires you to also enable...|
|------|-------------------|-------------------------|
|Autofill Service|Android 8+|-|
|Inline Autofill|Android 11+|Autofill Service, IME that supports Inline|
|Draw-Over|Android 6+|Accessibility|
|Accessibility|All Android Versions|-|

For instructions on setting up auto-fill on Android, see [Auto-fill Logins]({{site.baseurl}}/article/auto-fill-android/).

### Troubleshooting the Autofill Service

If the Bitwarden Auto-fill Service overlay isn't visible when your device is focusing on a username or password input field, your device may require a device-specific setting to be enabled:

**For Huawei/Honor devices**, enable Dropzone:

1. Open the Huawei/Honor Optimizer App (also known as "Phone Manager").
2. Tap **Dropzone** in the middle of the bottom row.
3. Slide the toggle to the right to allow Dropzone.

**For Oppo and other devices**, enable Floating Window:

1. Open the Android Settings App.
2. Navigate to Privacy/Security.
3. Locate **Floating Windows** or **App Management** and tap to open.
4. Slide the toggle to the right to allow Floating Windows.

### Troubleshooting the Accessibility Service

The most common issue encountered using the Accessibility Service is that **Android Battery Optimization** settings will automatically turn off services (like the Accessibility Service) in order to preserve battery. To resolve this, **turn off battery optimization for Bitwarden**.

If you continue to experience issues with the Accessibility Service:

1. Double-check your Battery Optimization settings. If Battery Optimization is on for Bitwarden, turn it off.
2. If you use a Battery Saver or Task Manager app, try disabling to see if that makes a difference. If it does, add Bitwarden to the exception list.
3. Check the built-in Task Manager. You'll need to bring up the running apps view and then hold down the app icon or swipe up on the Bitwarden app and then select Lock.

Please note, the service can also halt if you ever "Force stop" the Bitwarden app.

{% callout success %}
The site [https://dontkillmyapp.com/](https://dontkillmyapp.com/){:target="_blank"} might help you determine the default battery optimization configurations for your device.
{% endcallout %}

### Troubleshooting Draw-Over

Draw-Over interacts differently with Bitwarden's auto-fill functionality depending on which Android version you're using. If you're experiencing issues, check the following table:

|Version|Description|
|-------|-----------|
|Android 5|**Not Available**, permission is granted by default.|
|Android 6|**Required** to use Accessibility, as the pop-up is the only available option.|
|Android 7+|**Optional** if you only want to use the Auto-fill quick action tile without a pop-up.|

{% callout info %}
If you're still not able to get Android auto-fill working, [Contact Us](https://bitwarden.com/contact){:target="\_blank"}.
{% endcallout %}
