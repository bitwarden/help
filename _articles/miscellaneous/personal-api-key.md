---
layout: article
title: Personal API Key for CLI Authentication
categories: [miscellaneous]
featured: false
popular: false
tags: [api key, cli]
---

Your Bitwarden Personal API Key can be used as an alternative method for authenticating into the Command Line Interface (CLI).

{% callout info %}
Your Personal API Key is **not the same** as the [Organization API Key]({{site.baseurl}}/article/public-api/#authentication) used to access the [Bitwarden Public API]({{site.baseurl}}/article/public-api/) or [Directory Connector]({{site.baseurl}}/article/directory-sync/). Personal API Keys will have a `client_id` with format `"user.clientId"`, while Organization API Keys will have a `client_id` with format `"organization.ClientId"`.
{% endcallout %}

## Get Your Personal API Key

Complete the following steps to get your Personal API Key:

1. Login to your [Web Vault](https://vault.bitwarden.com){:target="_blank"} and select the **Settings** tab.
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

To use your API Key to authenticate into the CLI, enter the following command:
```
bw login --apikey
```
which will prompt you to enter the obtained `client_id` and  `client_secret` to authenticate. Once you enter these values, enter your Master Password to decrypt your Vault. For more information, see [Bitwarden command line tool (CLI)](https://bitwarden.com/help/article/cli/).

### Environment Variables

The Bitwarden CLI will look for non-empty environment variables `BW_CLIENTID` or `BW_CLIENTSECRET`. Save these environment variables with your `client_id` and `client_secret` to prevent Bitwarden from prompting you every time.

You will still need to enter your Master Password to decrypt your Vault.
