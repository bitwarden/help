---
layout: article
title: Change your client application's environment
categories: [hosting]
featured: false
popular: false
tags: [hosting, environment]
---

By default, client applications such as the browser extensions and mobile apps all talk to the bitwarden cloud servers. If you are hosting your own bitwarden installation you will want to change your client applications to talk to your instance instead of the bitwarden cloud servers.

## Change Client Application Environment

1. If you are currently logged in to your client application, log out.
2. On the home screen of the client application, select the {% icon fa-cog %} **Settings** icon in the top left corner.
3. Under the **Self-hosted Environment** section, enter your installation's **Server URL**. For example, if your installation domain was bitwarden.company.com, you would enter https://bitwarden.company.com for the **Server URL**.
4. Save the environment settings and return to the home screen.

You have now configured your client application to point to your self-hosted environment.
