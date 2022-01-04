---
layout: article
title: Personal API Key for CLI Authentication
categories: [miscellaneous]
featured: false
popular: false
tags: [api key, cli]
description: "Your Bitwarden Personal API Key can be used for authenticating to the command-line interface (CLI). Learn how to get, use, and rotate your Personal API Key."
---

Your Bitwarden Personal API Key can be used as a method for authenticating into the Command Line Interface (CLI).

{% callout info %}
Your Personal API Key is **not the same** as the [Organization API Key]({{site.baseurl}}/article/public-api/#authentication) used to access the [Bitwarden Public API]({{site.baseurl}}/article/public-api/) or [Directory Connector]({{site.baseurl}}/article/directory-sync/). Personal API Keys will have a `client_id` with format `"user.clientId"`, while Organization API Keys will have a `client_id` with format `"organization.ClientId"`.
{% endcallout %}

## Get Your Personal API Key

Complete the following steps to get your Personal API Key:

1. Login to your [Web Vault]({{site.baseurl}}/article/getting-started-webvault) and select the **Settings** tab.
2. From the **My Account** screen, scroll down to the **API Key** section.
3. Select the **View API Key** button will prompt you to enter your Master Password.

   Once correctly entered, you will be provided the following:
   - `client_id: "user.clientId"` (This value is unique to your account and does not change.)
   - `client_secret: "clientSecret"` (This value is unique and can be rotated.)
   - `scope: "api"` (This value will always be `"api"`.)
   - `grant_type: "client_credentials"` (This value will always be `"client_credentials"`.)

### Rotate Your API Key

Select the **Rotate API Key** button to rotate your personal API Key. Rotating your Key will only change your `client_secret`.

Rotating your key will invalidate your previous key and all active sessions using that key.

## Authenticate using your API Key

Logging in to the CLI with the Personal API Key is **recommended for automated workflows or providing access to an external application**. To log in with the API Key:

```
bw login --apikey
```

This will initiate a prompt for your personal `client_id` and `client_secret`. Once your session is authenticated using these values, you'll be prompted to use the `unlock` command ([learn more]({{site.baseurl}}/article/cli/#unlock)).

#### Using API Key Environment Variables

In scenarios where automated work is being done with the Bitwarden CLI, you can save environment variables to prevent the need for manual intervention at authentication.

|Environment Variable Name|Required Value|
|-------------------------|--------------|
|BW_CLIENTID|`client_id`|
|BW_CLIENTSECRET|`client_secret`|
