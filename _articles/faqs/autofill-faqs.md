---
layout: article
title: Auto-fill FAQs
categories: [auto-fill]
featured: true
popular: true
hidden: false
tags: []
order: 10
---

### Q: Can I auto-fill on a split login-workflow?

**A:** Split login workflows (i.e. when username and password fields are displayed on separate screens) can be auto-filled by Bitwarden Browser Extensions, but not currently by Mobile apps.

### Q: Can I use auto-fill while using a physical keyboard on an iPad?

**A:** Yes! To use auto-fill while using a physical keyboard:

1. Open the iOS {% icon fa-cog %} **Settings** app on your device.
2. Tap **General**.
3. Tap **Keyboards**.
4. In the All Keyboards section, toggle **Shortcuts** on.

### Q: How do I disable Google Auto-fill in my Android Device?

**A:** To disable Google Auto-fill on your Android device:

1. Open Settings in your Android device.
2. Scroll down and tap on Google.
3. Tap on Auto-fill with Google and toggle it off.

### Q: What do I do about 'Biometric unlock disabled pending verification of master password'?

**A:** This most commonly occurs on iOS when you make a change to your device's biometrics settings (e.g. adding another finger to Touch ID). To resolve this error:

1. **If you have [PIN Code]({{site.baseurl}}/article/unlock-with-pin/) verification active**, disable it.
2. Log out of your Bitwarden mobile app.
3. Check that your device settings are [setup to use Bitwarden for autofill]({{site.baseurl}}/article/auto-fill-ios/#keyboard-auto-fill).
4. Log back in to your Bitwarden mobile app.
5. Re-enable [PIN Code]({{site.baseurl}}/article/unlock-with-pin/) verification if you want to use it as a backup for [biometrics]({{site.baseurl}}/article/unlock-with-biometrics/).
