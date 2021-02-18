---
layout: article
title: Receive a Send
categories: [send]
featured: true
popular: false
tags: []
order: 03
---

Unlike traditional Bitwarden Vault items, a Send can be received and opened by anyone with the generated link (including those who *do not* have Bitwarden accounts). Recipients of a Send are sent a generated link, for example:

- `https://vault.bitwarden.com/#/send/yawoill8rk6VM6zCATXv2A/9WN8wD-hzsDJjfnXLeNc2Q`
- `https://your.selfhosted.domain.com/#/send/yawoill8rk6VM6zCATXv2A/9WN8wD-hzsDJjfnXLeNc2Q`

These links can be opened in any modern web browser, and will open a simple no-navigation web page, for example:

{% image /send/received-send.png A received Send%}

Depending on the [options configured]({% link _articles/send/create-send.md %}) by the Send's creator, the recipient of a Send may be required to:

- Enter a Password to access the contents of the Send.
- Manually toggle visibility on a hidden-text Send.

When a Send has [been deleted, expired, or disabled]({% link _articles/send/send-impermanence.md %}), recipients who attempt to use the generated Send link will be shown a screen that reports the Send does not exist or is no longer available:

{% image /send/send-unavailable.png A deleted, expired, or disabled Send %}
