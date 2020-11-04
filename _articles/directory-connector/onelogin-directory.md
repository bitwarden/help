---
layout: article
title: Configuring directory sync with OneLogin
categories: [directory-connector]
featured: true
popular: false
hidden: false
tags: []
---

This article will cover how to connect the Bitwarden Directory Connector application to your OneLogin Directory.

## Requirements

- Read through the following article: [Syncing users and groups with a directory]({% link _articles/directory-connector/directory-sync.md %})
- Install Bitwarden Directory Connector
- Using the Directory Connector, log into your Bitwarden account and select your enterprise organization

## Table of Contents

- [Creating API Credentials](#creating-api-credentials)
- [Configure Directory Connector](#configure-directory-connector)
- [Testing](#testing)

## Creating API credentials

1. Log into your OneLogin Adminsitration portal.
2. Select **Developers** → **API Credentials** from the navigation menu.
   {% image directory-connector/onelogin/onelogin-step2.png %}
3. Click the **New Credential** button.
   {% image directory-connector/onelogin/onelogin-step3.png %}
4. Name the credential something like “Bitwarden Connector”, then select "**Read users**". Save the new API credential.
   {% image directory-connector/onelogin/onelogin-step4.png %}
5. Copy your **Client ID** and **Client Secret**. You can return to view these at any time.
{% image directory-connector/onelogin/onelogin-step5.png %}

## Configure Directory Connector

1. Launch the Directory Connector desktop application.
2. Go to the **Settings** tab.
3. Select **OneLogin** as the directory type.
4. Enter the **Client ID** and **Client Secret** copied from the previous steps.
5. Select the correct Region.
6. Configure sync options. It is recommended to use the **Overwrite existing organization users based on current sync settings** option with OneLogin.
{% tip %}For minimal testing check "Sync users".{% endtip %}

Congrats! You are done configuring OneLogin with the Bitwarden Directory Connector.

## Testing

Test your configuration by running a sync test from the **Dashboard** of the Directory Connector. You should see your OneLogin groups and/or users printed to the screen.
