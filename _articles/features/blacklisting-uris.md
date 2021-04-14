---
layout: article
title: Blacklisting URIs
categories: [auto-fill]
featured: false
popular: false
order: 06
tags: [android, autofill, auto-fill]
---

{% callout info %}
Blacklisting URIs is currently only available for Bitwarden Mobile on **Android 8.0 (Oreo)** or higher.
{% endcallout %}

Auto-fill relies on the attribution of URIs to Login items. If you're unfamiliar with using URIs, brush up using our [Using URIs]({% link _articles/features/uri-match-detection.md %}) article. **Android** users can explicitly blacklist URIs to prevent Bitwarden from offering them for auto-fill. To specify URIs to blacklist:

1. In the Bitwarden Android app, open the {% icon fa-cog %} **Settings** tab.
2. Tap **Options**.
3. Scroll down to the bottom of the Options screen and enter URIs in the **Blacklisted URIs** input:

   {% image features/auto-fill-android/blacklist-uris.png %}

   Blacklisted URIs should be specified in a **comma-separated list**, for example:

   ```
   https://twitter.com,androidapp://com.twitter.android,https://facebook.com
   ```
4. There's no **Save** button for this screen, so simply pressing the back button or returning to the previous screen will save your specification.

## Android App URIs

For websites accessed via a web browser, a proper URI will be the `https://..` address of the Login page, for example `https://twitter.com` or `https://twitter.com/login`.

**For Android Apps**, the [URI scheme]({{site.baseurl}}/article/uri-match-detection/#uri-schemes) always starts with `androidapp://` and is usually a bit different from a typical web browser URI. For example,

- The Twitter Android app has the URI `androidapp://com.twitter.android`
- The Reddit Android app has the URI `androidapp://com.reddit.frontpage`
- The Bitwarden Android app has the URI `androidapp://com.x8bit.bitwarden`

{% callout success %}
An easy way to obtain the proper URI for an Android app is to **use a web browser** to visit the App's page in the Google Play store. The URI for the app will appear in the address bar as an `?id=` query parameter (e.g. `https://play.google.com/store/apps/details?id=com.twitter.android`).
{% endcallout %}
