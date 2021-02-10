---
layout: article
title: Privacy when using Website Icons
categories: [security]
featured: false
popular: false
tags: [icons, website icons, privacy]
order: 09
---

*Bitwarden does not collect any information when you download icons for website logins stored in your Bitwarden vault.*

## Using Website Icons

When Bitwarden displays a login item associated with a website in your Vault (determined by the URI field), it attempts to accompany it with a graphical "website icon".

Website icons help you to easily identify particular logins in your Vault by recognizable iconography, usually represented by a logo or brand image of that website. The Bitwarden icons server provides the delivery endpoint for these website icons.

If you are using website icons on a device, Bitwarden will issue requests to `icons.bitwarden.net` for each item of type "Login" in your Vault that has a URI that resembles a website (ex. `google.com` or `https://google.com`, but not `google` or `http://localhost`).

Bitwarden's icons server is fronted with a CDN that caches the icons on Cloudflare's edge nodes all around the world. Subsequent requests to the same icon will likely hit CDN caches instead of the icons server directly. Your requests may never actually hit Bitwarden's icons server because another Bitwarden user with the same website in their Vault requested the icon before you.

## Privacy Concerns

Because a request for an icon image contains the hostname of the website stored in your vault, it is important to understand that this feature will "leak" otherwise cryptographically protected information to Bitwarden servers and/or CDN endpoints. An example of a icon request looks like the following:

`https://icons.bitwarden.net/google.com/icon.png`

**The icon server endpoints do not log or collect any information regarding icon image requests.** However, this is something you would have to take our word for since we have no way to demonstrate this publicly other than reviewing our [open source codebase](https://github.com/bitwarden).

## Disabling Website Icons

We understand that certain privacy-minded users may not want to use website icons. We provide the option to disable website icons on all Bitwarden client applications:

- **Web vault:** Settings &rarr; Options &rarr; Disable Website Icons
- **Browser extension:** Settings &rarr; Options &rarr; Disable Website Icons
- **Mobile app:** Settings &rarr; Options &rarr; Disable Website Icons
- **Desktop app:** Settings &rarr; Options &rarr; Disable Website Icons

When website icons are disabled, Bitwarden will opt to display a generic, locally accessed icon instead ({% icon fa-globe %}) for all login items stored in your vault.
