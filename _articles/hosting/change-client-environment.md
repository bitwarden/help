---
layout: article
title: Connect Clients to your Instance
categories: [hosting]
featured: false
popular: false
tags: [hosting, environment]
order: 11
---

By default, Bitwarden client applications (Browser Extensions, Mobile Apps, etc.) will connect to Bitwarden-hosted servers. Client applications can be configured to connect to your self-hosted Bitwarden instance.

### Browser Extensions, Desktop Apps, and Mobile Apps

Complete the following steps to connect your client application to your self-hosted instance:

1. Log out of the client application.
2. On the Login screen of the client application, select the {% icon fa-cog %} **Settings** icon in the top corner.
3. In the **Server URL** field, enter the domain name for your instance with `https://` (for example, `https://my.bitwarden.server.com`).

   Users with unique setups may elect to specify the URL of each service independently in the **Custom Environment** section.
4. Select the **Save** button.

### CLI

Logout using `bw logout`, and run the following command to connect the Bitwarden CLI to your self-hosted instance:

```
bw config server <server-url>
```

where `<server-url` is the domain name for your instance. You can read the currently configured value by not specifying a `<server-url>`.

Users with unique setups may elect to specify the URL of each service independently using:

```
bw config --web-vault <url>
bw config --api <url>
bw config --identity <url>
bw config --icons <url>
bw config --notifications <url>
bw config --events <url>
```
