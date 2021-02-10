---
layout: article
title: System Administrator Portal
categories: [hosting]
featured: false
popular: false
tags: [hosting, docker, admin]
order: 09
---

The Bitwarden System Administrator Portal can be used to:

- Check currently installed and latest available versions.
- View Environment Configuration settings (for more information, see [Configure Environment Variables]({% link _articles/hosting/environment-variables.md %})).
- View and delete registered users.
- View and delete registered Organizations.

{% callout info %}
Provisioned admins cannot view sensitive data that is protected (encrypted) in any user's or Organization's vault.
{% endcallout %}

## Configure Users for the Admin Portal

Configure access to the Admin Portal by editing the environment file, located at `./bwdata/env/global.override.env`.

Adding an email address to `adminSettings__admins=`, located at the bottom of `global.override.env`, will provide access to the Admin Portal from that email address. You can provision multiple admins using this field, for example:

```
adminSettings__admins=john@example.com,bill@gmail.com,tom@example.com
```

These email addresses **do not** need to be registered with an account on your Bitwarden instance.

### Configure SMTP Mail Server

The System Adminstrator Portal uses email to provide secure links for authentication. Therefore, you will need to configure your installation's SMTP Mail Server settings prior to attempting to log in to the portal. For more information, see [Configure Environment Variables]({% link _articles/hosting/environment-variables.md %}).

## Access the Admin Portal

The System Administrator Portal for your instance is available at `https://your.domain.com/admin`.

The Portal uses a secure means of *passwordless authentication*. When a user attempts to log in, a secure link is sent to their email address **only** if that email address is specified in `adminSettings__admins=`.

Clicking this temporary link will log that user into the System Adminstrator Portal. The link is active for 15 minutes following the login attempt.
