---
layout: article
title: About Send
categories: [send]
featured: true
popular: false
tags: []
order: 01
---

## What is Send?

Bitwarden Send is a secure, traceable way to transmit sensitive information to **anyone**. A Send, which can contain plaintext or file attachments up to 100 MB, generates a unique and secure link which can be shared with anyone (including those who *do not* have Bitwarden accounts) via text, email, or whatever communication channel you prefer. Every send operation is:

- **End-to-end Encrypted**: The data in a Send is encrypted on creation, and only decrypted when a recipient opens the received link. No Send data is transmitted when sharing a link, even if you're using an unencrypted channel. In this way, Bitwarden maintains end-to-end encryption for every Send to prevent intermediary services from accessing your sensitive data.

- **As Ephemeral as required**: With options to automate a Deletion Date, Expiration Date, and Maximum Access Count, every Send can be configured to be available for only as long as you need it to be. Ephemeral file sharing ensures, for example, that a recipient can't pass Send data along to an unintended audience. For more information, see [Terminate a Send]({% link _articles/send/terminate-send.md %}).

- **Password Protected** (*Optionally*): For an added layer of security, you can configure any Send to require a password to open.

## The Send View

{% callout info %}

{% endcallout %}

A Send can be created, edited, configured, and deleted from the [Web Vault](https://vault.bitwarden.com){:target="\_blank"} or any Bitwarden client application using a dedicated view/tab. **Send** can be accessed from the global application navigation, for example:

{% image /send/send-webvault.png Send in the Web Vault %}

From this view, you can create new Sends and view, edit, or delete existing Sends. Once created, share your Send by copying the generated **Send Link** and sharing it with intended recipients via text, email, or whatever communication channel you prefer. For more information, see [Create a Send]({% link _articles/send/create-send.md %}).

{% callout success %}
Remember, because no Send data is be transmitted when you share the link, it's safe to share a Bitwarden Send link over comparatively insecure platforms.
{% endcallout %}
