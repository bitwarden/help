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

{% image send/received-send.png A received Send%}

Depending on the [options configured]({% link _articles/send/create-send.md %}) by the Sender, the recipient of a Send may be required to:

- Enter a Password to access the contents of the Send.
- Manually toggle visibility on a hidden-text Send.

## Hidden-email Sends

By default, Send objects will display the email address of the Sender to recipients, as in the above screenshot. Senders can optionally hide their email address from the Send object, which will substitute in a warning message:

{% image send/send-email-hidden-file.png %}

If you receive a Send with this error message, here's what you should do:

- **Was this Send expected?**

   If this Send was expected, get in touch with the expected Sender. Validate with this person that the received Send link (`https://vault.bitwarden.com/#/send/xxx/yyy`) matches the one they created.
- **Was this Send unexpected?**

   If this Send was unexpected, you should identify the Sender before interacting with it. Ask your colleagues, managers, or friends who have Bitwarden accounts whether they might have sent you something. If you do identify the Sender, validate with this person that the received Send link (`https://vault.bitwarden.com/#/send/xxx/yyy`) matches the one they created. **If you can't identify the Sender**, don't interact with the Send.

{% callout warning %}
Taking the above measures to ensure the trustworthiness of a hidden-email Send are particularly important in the case of File Sends. **Don't download mysterious files.**
{% endcallout %}

## Deleted, Expired, and Disabled Sends

When a Send has [been deleted, expired, or disabled]({% link _articles/send/send-lifespan.md %}), recipients who attempt to use the generated Send link will be shown a screen that reports the Send does not exist or is no longer available:

{% image send/send-unavailable.png A deleted, expired, or disabled Send %}
