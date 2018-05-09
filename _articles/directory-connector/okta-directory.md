---
layout: article
title: Configuring directory sync with Okta
categories: [organizations]
featured: true
popular: false
hidden: false
tags: []
---

This article will cover how to connect the Bitwarden Directory Connector application to your Okta Directory.

## Requirements

- Read through the following article: [Syncing users and groups with a directory]({% link _articles/directory-connector/directory-sync.md %})
- Install Bitwarden Directory Connector
- Using Directory Connector, log into your Bitwarden account and select your enterprise organization

## Table of Contents

- [Create an API token](#create-an-api-token)
- [Configure Directory Connector](#configure-directory-connector)
- [Testing](#testing)

## Create an API token

1. Log into your Okta Developer Console
2. Select **API** &rarr; **Tokens** from the navigation menu
   {% image directory-connector/okta/api-tokens.png %}
3. Click the **Create Token** button and name the token something like "Bitwarden Connector", then click the **Create Token** button.
   {% image directory-connector/okta/create-token.png %}
4. Note and copy your API token for use with the Directory Connector. Your token will not be shown again so you may want to save it somewhere so that you can easily access it when configuring your directory connection later.
   {% image directory-connector/okta/copy-token.png %}

## Configure Directory Connector

1. Launch the Directory Connector desktop application
2. Go to the **Settings** tab.
3. Select **Okta** as the directory type.
4. Enter your Okta organization's URL (ex. https://mycompany.okta.com/).
5. Enter the API **Token** that you copied from the steps above.

Congrats! You are done configuring Okta with the Bitwarden Directory Connector.

## Testing

Test your configuration by running a sync test. You should see your Okta groups and/or users printed to the screen.
