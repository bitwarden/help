---
layout: article
title: Configuring directory sync with Google GSuite
categories: [Organizations]
featured: true
popular: false
hidden: true
tags: []
---

This article will cover how to connect the bitwarden Directory Connector tool to your GSuite directory.

## Requirements

- Read through the following article: [Syncing users and groups with a directory]({% link _articles/directory-connector/directory-sync.md %})
- Install bitwarden Directory Connector
- Using Directory Connector, log into your bitwarden account and select your enterprise organization

## Table of Contents

- [Create a Google Cloud Project](#create-a-google-cloud-project)
- [Create & Configure a Service Account](#create---configure-a-service-account)
- [Configure GSuite Security](#configure-gsuite-security)
- [Configure Directory Connector](#configure-directory-connector)
- [Testing](#testing)

## Create a Google Cloud Project

{% note %}
If you already have a Google Cloud project available, you can skip this step and re-use it here.
{% endnote %}

1. Go to <https://console.cloud.google.com>
2. Click **Create Project**
   {% image directory-connector/gsuite/create-project.png %}
3. Enter a project name and click **Create**
   {% image directory-connector/gsuite/new-project.png %}
4. Refresh the page and you should now see your project

## Create & Configure a Service Account

1. Go to <https://console.cloud.google.com>
2. Make sure the appropriate project is selected.
3. Open the navigation menu and navigate to **API Manager** -> **Credentials**.
4. Click the **Create credentials** button and select **Service account key**.
   {% image directory-connector/gsuite/create-credentials.png %}
5. Select **New service account**.
6. Name the service account **bitwarden Directory Connector**. For the role, select **Project** and then **Owner**. Ensure that **JSON** is the selected **Key type**. Upon clicking **Create**, a JSON file will be downloaded; this is important for later so keep a note of where you have downloaded it.
   {% image directory-connector/gsuite/create-service-account.png %}
7. Click on **Manage service accounts** (on the right-hand side).
   {% image directory-connector/gsuite/click-manage-service-accounts.png %}
8. Select the options button next to your service account, and select **Edit**.
   {% image directory-connector/gsuite/edit-service-account.png %}
9. Check the box "Enable G Suite Domain-wide Delegation", enter anything for "Product name for the consent screen" and click **Save**.
   {% image directory-connector/gsuite/tick-gsuite.png %}
10. Click **View Client ID** and you'll see the Client ID on screen. You will need the Client ID to configure security within GSuite. Highlight the Client ID and copy it to your clipboard.
   {% image directory-connector/gsuite/view-client-id.png %}
   {% image directory-connector/gsuite/copy-client-id.png %}

## Configure GSuite Security

1. Go to <https://admin.google.com>
2. Open the navigation menu and navigate to **Security**.
3. Select the **API reference** option and make sure **Enable API access** is checked.
   {% image directory-connector/gsuite/enable-api-access.png %}
4. Back in the list of options, select **Show more** -> **Advanced settings** -> **Manage API client access**
   {% image directory-connector/gsuite/manage-api-access.png %}
5. For **Client Name**, paste the **Client ID** of the service account that you created in the previous steps. For **API Scopes**, paste the following values to grant read-only access to users and groups:
   <pre>https://www.googleapis.com/auth/admin.directory.user.readonly,https://www.googleapis.com/auth/admin.directory.group.readonly,https://www.googleapis.com/auth/admin.directory.group.member.readonly</pre>
6. Click the **Authorize** button to save.
   {% image directory-connector/gsuite/authorize-client.png %}
7. You should now see your service account listed as an authorized client of G Suite.
   {% image directory-connector/gsuite/authorized-client-list.png %}

## Configure Directory Connector

1. Locate the secret key JSON file that was downloaded whenever you created your service account in the steps above.
2. Copy this file to the bitwarden Directory Connector program data folder at `C:/ProgramData/bitwarden/Directory Connector`.
   - Optionally rename the JSON file to something that is easier to remember, such as `client_secret.json`
3. Launch the Directory Connector console by double clicking the shortcut. 
4. Select option 3 (Configure directory connection) from the main menu.
5. Select **GSuite Directory** as the type.
6. Enter the name of the JSON file that you copied in step 2.
7. Enter the domain of your GSuite account.
8. Enter the email address of an admin user that has full access to the GSuite directory (such as your own).

Congrats! You are done configuring GSuite with the bitwarden Directory Connector.

## Testing

Test your configurations by running a simulated directory sync. You should see your GSuite groups and/or users printed to the screen.
