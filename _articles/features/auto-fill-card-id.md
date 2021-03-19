---
layout: article
title: Auto-fill Cards & Identities
categories: [auto-fill]
order: 04
featured: true
popular: false
tags: [browser, autofill, auto-fill, identity, card, form fill]
---

Bitwarden can do more than just [auto-fill your usernames and passwords]({% link _articles/features/auto-fill-browser.md %})! **Bitwarden Browser Extensions** can auto-fill [Cards]({{site.baseurl}}/article/managing-items/#cards) and [Identities]({{site.baseurl}}/article/managing-items/#identities) to simplify online purchases, account creation, and more using the [unique Tab view]({% link _articles/features/auto-fill-browser.md %}).

{% callout info %}Currently, Autofill for Cards & Identities is **only available for Browser Extensions**. Mobile platforms including Android and iOS do not currently support this type of auto-fill function.{% endcallout %}

## Autofill Cards & Identities

To auto-fill Cards and Identities:

1. Open the Browser Extension or, if your Browser Extension is already open, navigate to the {% icon fa-folder %} **Tab** view.

   Unless you've [hidden Cards and/or Identities from this view](#hide-cards--identities), all your Cards and Identities will be listed here alongside any [matched Login items]({% link _articles/features/uri-match-detection.md %}).
2. Select the Card or Identity you want to auto-fill:

   {% image features/auto-fill-card-id/autofill-cardsidentities.png Auto-fill an Identity %}

The Browser Extension will find any fields on the web page that map to Card or Identity information, and auto-fill them.

## Hide Cards & Identities

If you don't want Cards & Identities to be available for auto-fill, you can disable from being displayed in the {% icon fa-folder %} **Tab** view:

1. In your Browser Extension, open the {% icon fa-cogs %} **Settings** tab.
2. Scroll down to the Other section, and select **Options**.
3. Scroll down and check the **Don't Show Cards on Tab Page** and/or **Don't Show Identities on Tab Page** boxes.
