---
layout: article
title: Receive a Send
categories: [send]
featured: true
popular: false
tags: [bitwarden send, send, receive, receive a send]
order: 03
---

Unlike traditional Bitwarden Vault items, a Send can be received and opened by anyone with the Send link (including those who *do not* have Bitwarden accounts). Send links are randomly generated, and will look something like this:

- `https://send.bitwarden.com/#...`, which will automatically resolve to `https://vault.bitwarden/com/#/send/...`
- `https://your.selfhosted.domain.com/#/send/....` if you're self-hosting

These links can be opened in any modern web browser, and will open a simple no-navigation web page, for example:

{% image /send/received-send.png A received Send%}

Depending on the [options configured]({% link _articles/send/create-send.md %}) by the Sender, the recipient of a Send may be required to:

- Enter a Password to access the contents of the Send.
- Manually toggle visibility on a hidden-text Send.

When a Send has [been deleted, expired, or disabled]({% link _articles/send/send-lifespan.md %}), recipients who attempt to use the generated Send link will be shown a screen that reports the Send does not exist or is no longer available:

{% image /send/send-unavailable.png A deleted, expired, or disabled Send %}
