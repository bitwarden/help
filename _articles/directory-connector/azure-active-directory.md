---
layout: article
title: Configuring directory sync with Azure Active Directory
categories: [organizations]
featured: true
popular: false
hidden: false
tags: []
---

This article will cover how to connect the Bitwarden Directory Connector tool to your Azure Active Directory.

## Requirements

- Read through the following article: [Syncing users and groups with a directory]({% link _articles/directory-connector/directory-sync.md %})
- Install Bitwarden Directory Connector
- Using Directory Connector, log into your Bitwarden account and select your enterprise organization

## Table of Contents

- [Create a New Application Registration](#create-a-new-application-registration)
- [Grant Application Permissions](#grant-application-permissions)
- [Create Application Secret Key](#create-application-secret-key)
- [Get Your Application ID](#get-your-application-id)
- [Get Your Tenant Hostname](#get-your-tenant-hostname)
- [Configure Directory Connector](#configure-directory-connector)
- [Testing](#testing)


## Create a New Application Registration

1. Go to <https://portal.azure.com>
2. Select the **Azure Active Directory** resource
3. Navigate to **App registrations** and select **New application registration**
   {% image directory-connector/azure/new-application.png %}
4. **Name** your application "Bitwarden"
5. Set the **Application type** to "Web app / API" 
6. Set the **Sign-on URL** to any website value, such as "https://company.com". This URL is not used in this setup process so it can be anything.
7. Click the **Create** button to create the application.
   {% image directory-connector/azure/create-application.png %}

## Grant Application Permissions

1. Select the **Bitwarden** application you created in the previous section.
2. Navigate to **Settings** and select **Required Permissions**.
3. Select the existing **Windows Azure Active Directory** API.
4. Check **all** Application and Delegated permissions and click **Save**.
   {% image directory-connector/azure/directory-permissions.png %}
5. Select the **Add** button to create a new API permission set.
6. For step 1, **Select an API** for **Microsoft Graph**.
7. For step 2, **Select Permissions** for the following:
   - Application Permissions:
     - "Read all users' full profiles"
     - "Read all groups"
   - Delegated Permissions:
     - "Read all groups"
     - "Read all users' full profiles"
     - "Read all users basic profiles"
8. Click the **Select** button and then **Done** to add the Microsoft Graph API permissions.
   {% image directory-connector/azure/graph-permissions.png %}
9. Click the **Grant Permissions** button to grant the permissions to the application.
   {% image directory-connector/azure/grant-permissions.png %}

## Create Application Secret Key

1. Go back to the **Bitwarden** application that you created.
2. Navigate to **Settings** and select **Keys**.
3. Add a new **Password** key by entering a **Name** and **Duration**. We recommend selecting "Never Expires" for the duration.
4. Click **Save** to create a new secret key.
5. Copy the key's value to safe place. We will need to reference it later.
   {% image directory-connector/azure/key.png %}

## Get Your Application ID

1. Go back to the **Bitwarden** application that you created.
2. Copy the **Application ID** to a safe place.  We will need to reference it later.
   {% image directory-connector/azure/application-id.png %}

## Get Your Tenant Hostname

1. Select your username in the top right corner of the Azure Portal.
2. Note the **hostname** value that appears under your directory (ex. company.onmicrosoft.com). This is your **Tenant** hostname. Copy the **Tenant** hostname to a safe place. We will need to reference it later.
   {% image directory-connector/azure/tenant.png %}

## Configure Directory Connector

1. Launch the Directory Connector console by double clicking the shortcut. 
2. Select option 3 (Configure directory connection) from the main menu.
3. Select **Azure Active Directory** as the type.
6. Enter the **Tenant** hostname that you copied from the steps above (ex. company.onmicrosoft.com).
7. Enter the **Application ID** that you copied from the steps above.
8. Enter the Application **Secret** Key that you copied from the steps above.

Congrats! You are done configuring Azure Active Directory with the Bitwarden Directory Connector.

## Testing


{% note %}
It can take up to 15 minutes for the granted permissions for your application to properly propagate. You may receive "Insufficient privileges to complete the operation" errors in the meantime.
{% endnote %}

Test your configurations by running a simulated directory sync. You should see your Azure Active Directory groups and/or users printed to the screen.
