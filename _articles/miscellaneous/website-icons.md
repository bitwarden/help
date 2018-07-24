---
layout: article
title: Your privacy when using website icons
categories: [miscellaneous]
featured: false
popular: false
tags: [icons, website icons, privacy]
---

*Bitwarden does not collect any information when you download icons for website logins stored in your bitwarden vault.*

## The Bitwarden icons server

When Bitwarden displays a login item associated with a website in your Bitwarden vault it attempts to accompany it with a "website icon". This "website icons" feature allows you to easily identify particular logins in your vault by a recognizable icon. This is usually represented by a logo or brand image of that website. The Bitwarden icons server provides the delivery endpoint for these website icons.

If you are using the "website icons" feature on a device, Bitwarden will issue requests to `icons.bitwarden.net` for each item of type "Login" in your vault that has a URI that resembles a website (ex. `google.com` or `https://google.com`, but not `google` or `http://localhost`). The icons server is fronted with a CDN that caches the icons on Cloudflare's edge nodes all around the world. Subsequent requests to the same icon will likely hit CDN caches instead of the icons server directly. Your requests may never actually hit Bitwarden's icons server because another Bitwarden user with the same website in their vault requested the icon before you.

## Privacy concerns

Because a request for an icon image contains the hostname of the website stored in your vault, it is important to understand that this feature will "leak" otherwise cryptographically protected information to Bitwarden servers and/or CDN endpoints. An example of a icon request looks like the following:

`https://icons.bitwarden.net/google.com/icon.png`

**The icons server endpoints do not log or collection any information regarding icon image requests.** However, this is something you would have to take our word for since we have no way to demonstrate this publicly other than reviewing our [open source codebase](https://github.com/bitwarden).

## Disabling website icons

We understand that certain privacy-minded users may not want to use the "website icons" feature. We provide the option to disable website icons on all Bitwarden client applications:

- **Web vault:** Settings &rarr; Options &rarr; Disable Website Icons
- **Browser extension:** Settings &rarr; Options &rarr; Disable Website Icons
- **Mobile app:** Settings &rarr; Options &rarr; Disable Website Icons
- **Desktop app:** Settings &rarr; Options &rarr; Disable Website Icons

When the website icons feature is disabled, Bitwarden will opt to show you a generic, locally accessed icon instead ({% icon fa-globe %}) that is the same for all login items stored in your vault.
