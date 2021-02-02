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

A Bitwarden Send link can be opened in any modern web browser:

{% image /send/send-variety.png A variety of received Sends %}

When opened, a Send is a simple no-navigation web page that allows a recipient to interact with the Send data, for example:

- Enter the password required to access a Send.
- Toggle visibility on a hidden-text Send.
- Read or copy a Send's text.
- Download a Send's attached file.

## Terminated Sends

When a Send has expired or been deleted, recipients will be shown a screen that reports that the Send `does not exist or is no longer available`:

{% image /send/send-unavailable.png A deleted or expired Send %}

For more information when a Send terminates or how to automate termination, see [Terminate a Send]({% link _articles/send/terminate-send.md %}).
