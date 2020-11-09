---
layout: article
title: Using the system administrator portal
categories: [hosting]
featured: false
popular: false
tags: [hosting, docker, admin]
---

As the system administrator of your Bitwarden installation you can use the **Admin Portal** to do things like:

- View installation environment settings
- View the currently installed and latest available versions
- Browse all registered users and information about them
- Delete registered users
- Browse all organizations and information about them
- Delete organizations

{% callout info %}
Admins cannot globally view sensitive data that is protected (encrypted) in a user's or organization's vault.
{% endcallout %}

The admin portal for your installation is available at https://bitwarden.example.com/admin.

## Configuring Admin Portal Access

The admin portal provides authenticated access to a list of users specified by email address in your installation's environment file located at `./bwdata/env/global.override.env`. For example:

```
adminSettings__admins=john@example.com,bill@gmail.com,tom@example.com
```

These admin email addresses **do not** need to be registered with an account on your Bitwarden installation.

If you do not want to enable access to the admin portal, you can leave the setting at its default empty value. For example:

```
adminSettings__admins=
```

The admin portal uses a secure means of *passwordless authentication*. When a user attempts to log into the admin portal a secure link is sent to their email address. The user can click this temporary link to continue logging into the admin portal. The authentication link is active for up to **15 minutes** following the log in attempt.

{% callout info %}
Since the admin portal uses email to provide secure links for authentication, you need to [configure your installation's SMTP mail settings]({% link _articles/hosting/install-on-premise.md %}) prior to attempting to log into the admin portal.
{% endcallout %}
