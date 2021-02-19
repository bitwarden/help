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

Bitwarden Send is a secure way to transmit sensitive information to **anyone**. A Send, which can contain plaintext or file attachments up to 100 MB, generates a unique and secure link which can be shared with anyone (including those who *do not* have Bitwarden accounts) via text, email, or whatever communication channel you prefer. Every send operation is:

- **End-to-end Encrypted**: Data in a Send is encrypted on creation, and only decrypted when a recipient opens the received link. The generated link doesn't contain any data related to the Send's contents, so it's safe to share over intermediary communications services without exposing information to anyone but the recipient.

- **Customizably Ephemeral**: Sends are designed to be ephemeral, so every Send that you creates requires a Deletion Date that will trigger automatic deletion from all systems. With additional options to automate a Expiration Date and Maximum Access Count, every Send can be configured to be available to recipients for only as long as you need it to be.

- **Customizably Private**: To enhance the privacy of your shared information, you can configure any Send with a password that will be required for any recipient to access the contained data. For text Sends, you can also require users to toggle visibility to prevent exposure to unintentional onlookers.

## The Send View

Sends are created, edited, configured, and deleted from the **Send** view in any Bitwarden application. The **Send** view can be accessed from the global application navigation, for example in the Web Vault:

{% image /send/send-webvault.png Send in the Web Vault %}

Once you've [created a Send]({% link _articles/send/create-send.md %}), share it by copying the generated **Send Link** and passing it along to intended recipients via text, email, or whatever communication channel you prefer. Recipients will be able to [access a Send]({% link _articles/send/receive-send.md %}) in any modern web browser.

### Next Steps

Now that you've learned the basics of Bitwarden Send, we recommend that you:

- [Create a Send]({% link _articles/send/create-send.md %}) from any Bitwarden application.
- Learn about [Send Impermanence Options]({% link _articles/send/send-impermanence.md %}), including Deletion and Expiration.
- Learn how to [make a Send private]({% link _articles/send/send-privacy.md %}).
