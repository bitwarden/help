---
layout: article
title: Auto-fill FAQs
categories: [auto-fill]
featured: true
popular: true
hidden: false
tags: []
order: 09
---

### Q: Can Bitwarden auto-fill a basic/native authentication prompt?

**A:** Login prompts like the one pictured below, called "basic" or "native" authentication prompts, will be automatically auto-filled by the Bitwarden Browser Extension **if there is only 1 Login item with a** [**matching URI**]({{site.baseurl}}/article/uri-match-detection).

{% image autofill/basic-auth-prompt.png %}

You can also use the Browser Extension's {% icon fa-share-square %} **Launch** button to automatically open and log in to a basic auth-protected resource.

### Q: Can I auto-fill on a split login-workflow?

**A:** Split login workflows (i.e. when username and password fields are displayed on separate screens) can be auto-filled by Bitwarden Browser Extensions, but not currently by Mobile apps.

### Q: Can I use auto-fill while using a physical keyboard on an iPad?

**A:** Yes! To use auto-fill while using a physical keyboard:

1. Open the iOS {% icon fa-cog %} **Settings** app on your device.
2. Tap **General**.
3. Tap **Keyboards**.
4. In the All Keyboards section, toggle **Shortcuts** on.
