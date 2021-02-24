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

Bitwarden Send is a secure way to transmit sensitive information to **anyone**, including plaintext or file attachments up to 100 MB. Every Send is assigned a randomly generated and secure link, which can be shared with anyone (including those who *do not* have Bitwarden accounts) via text, email, or whatever communication channel you prefer. Every Send is:

- **End-to-end Encrypted**: Data in a Send is encrypted on creation, and only decrypted when a recipient opens the received link. The contents of a Send are stored **only encrypted** in Bitwarden systems, and the generated link doesn't contain any data related to the Send's contents, so it's safe to share over intermediary communications services without exposing information to Bitwarden or any used intermediary services.

- **Dynamically Ephemeral**: Sends are designed for ephemeral sharing, so every Send has a maximum lifespan of 31 days. Alternatively, you can set your own Deletion Date for a Send using pre-set options or a custom timestamp. In either case, the Send and its contents will be completely purged from Bitwarden systems when its lifespan is terminated. Using additional options like Expiration Date and Maximum Access Count, you can ensure that access to recipients is terminated according to your needs.

- **Customizably Private**: Protect the contents of your Send by optionally configuring a password for access so that no unintended recipients can see the contained information. For text Sends, you can also optionally require users to toggle visibility to prevent exposure to unintentional onlookers.

## The Send View

Sends are created, edited, managed, and deleted from the **Send** view in any Bitwarden application. The **Send** view can be accessed from the global application navigation, for example in the Web Vault:

{% image /send/send-webvault.png Send in the Web Vault %}

## Using Send

Using Bitwarden Send is a simple two-step process:

1. [Create your Send]({% link _articles/send/create-send.md %}) to-spec, leveraging Lifespan Options and Privacy Options to fit your needs.
2. Share the Send link with the intended recipients, using whatever communication channel you prefer. If necessary, share information with your recipients on what it means to [Receive a Send]({% link _articles/send/receive-send.md %}).

As the Sender of a Send, we recommend that you keep track of your Send's lifespan by noting the configured **Deletion Date**, **Expiration Date**, **Maximum Access Count**. To make that as easy as possible, Sends in your Send view will display [a suite of status icons](https://bitwarden.com/help/article/send-faqs/#q-what-do-the-icons-next-to-my-sends-indicate).
