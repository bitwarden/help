---
layout: article
title: About Send
categories: [send]
featured: true
popular: false
tags: [bitwarden send, send, about send, ephemeral sharing]
order: 01
---

## What is Send?

Bitwarden Send is a secure and ephemeral way to transmit sensitive information to **anyone**. Sends can include plaintext or file attachments up to 500 MB (100 MB if creating from Mobile). Every Send is assigned a randomly generated and secure link, which can be [shared with anyone]({% link _articles/send/receive-send.md %}) (including those who *do not* have Bitwarden accounts) via text, email, or whatever communication channel you prefer. Every Send is:

- **End-to-end Encrypted**: Data in a Send is [encrypted]({{site.baseurl}}/article/send-encryption/#send-encryption) on creation, and only [decrypted]({{site.baseurl}}/article/send-encryption/#send-decryption) when a recipient opens the Send link. The contents of a Send are stored **encrypted** in Bitwarden systems, just like a traditional Vault item. The link generated for each send doesn't contain any data related to the Send's contents, so it's safe to share over intermediary communications services without exposing information to Bitwarden or any used intermediary services.

- **Dynamically Ephemeral**: Sends are designed for ephemeral sharing, so every [Send that you create]({% link _articles/send/create-send.md %}) will have a specified [lifespan]({% link _articles/send/send-lifespan.md %}) (*max 31 days*) that can be configured using pre-set options or a custom timestamp for down-to-the-minute specification. When its deletion date is reached, the Send and its contents will be completely purged from Bitwarden systems. Using additional options like [Expiration Date]({{site.baseurl}}/article/send-lifespan/#expiration-date) and [Maximum Access Count]({{site.baseurl}}/article/send-lifespan/#maximum-access-count), you can ensure that access to recipients is terminated according to your needs.

- **Customizably Private**: Protect the contents of your Send by optionally [configuring a password]({{site.baseurl}}/article/send-privacy/#send-passwords) for access or [hiding your email address from recipients]({{site.baseurl}}/article/send-privacy/#hide-email). For text Sends, you can also optionally [require users to toggle visibility]({{site.baseurl}}/article/send-privacy/#hide-text) to prevent exposure to unintentional onlookers.

## The Send View

Sends are created, edited, managed, and deleted from the **Send** view in any Bitwarden application. The **Send** view can be accessed from the global application navigation, for example in the Web Vault:

{% image send/send-webvault.png Send in the Web Vault %}

## Using Send

Using Bitwarden Send is a simple two-step process:

1. [Create your Send]({% link _articles/send/create-send.md %}), setting whichever [lifespan options]({% link _articles/send/send-lifespan.md %}) and [privacy options]({% link _articles/send/send-privacy.md %}) are required to fit your sharing needs.
2. Share the Send link with the [intended recipients]({% link _articles/send/receive-send.md %}), using whatever communication channel you prefer.

As the Sender, we recommend that you keep track of your Send's [configured lifespan]({% link _articles/send/send-lifespan.md %}). To make that as easy as possible, Sends in your Send view will display [a set of status icons]({{site.baseurl}}/article/send-faqs/#q-what-do-the-icons-next-to-my-sends-indicate) whenever a lifespan event (for example, expiration) has occurred.
