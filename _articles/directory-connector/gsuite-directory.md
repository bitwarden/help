---
layout: article
title: Configuring directory sync with G Suite (Google)
categories: [directory-connector]
featured: true
popular: false
hidden: false
tags: []
---

This article will cover how to connect the Bitwarden Directory Connector application to your G Suite directory.

## Requirements

- Read through the following article: [Syncing users and groups with a directory]({% link _articles/directory-connector/directory-sync.md %})
- Install Bitwarden Directory Connector
- Using Directory Connector, log into your Bitwarden account and select your enterprise organization

## Create a Google Cloud Project

{% callout info %}
If you already have a Google Cloud project available, you can skip this step and re-use it here.
{% endcallout %}

1. Go to <https://console.cloud.google.com/home>
2. Click the **Create** project button
   {% image directory-connector/gsuite/create-project.png %}
3. Enter a project name and click **Create**
   {% image directory-connector/gsuite/new-project.png %}
4. Refresh the page and you should now see your project

## Enable the Admin SDK API for Your Project

1. Go to <https://console.cloud.google.com>.
2. Make sure the appropriate project is selected. You should be on the **Dashboard** page for your project.
3. Open the navigation menu and navigate to **APIs &amp; Services** &rarr; **Library**.
4. Search for and select the **Admin SDK** service.
   {% image directory-connector/gsuite/admin-sdk.png %}
5. Click the **Enable** button near the top.
   {% image directory-connector/gsuite/admin-sdk-enable.png %}

## Create & Configure a Service Account

1. Go to <https://console.cloud.google.com>
2. Make sure the appropriate project is selected. You should be on the **Dashboard** page for your project.
3. Open the navigation menu and navigate to **APIs &amp; Services** &rarr; **Credentials**.
4. Click the **Create credentials** button and select **Service account key**.
   {% image directory-connector/gsuite/create-credentials.png %}
5. Select **New service account** from the **Service account** dropdown menu.
6. Name the service account **Bitwarden Directory Connector**. For the role, select **Project** and then **Owner**. Ensure that **JSON** is the selected **Key type**. Upon clicking **Create**, a JSON file will be downloaded; this is important for later so keep a note of where you have downloaded it.
   {% image directory-connector/gsuite/create-service-account.png %}
7. You should now see your newly created service account listed. Click on **Manage service accounts** (on the right-hand side).
   {% image directory-connector/gsuite/click-manage-service-accounts.png %}
8. Select the options button next to your service account, and select **Edit**.
   {% image directory-connector/gsuite/edit-service-account.png %}
9. Check the box "Enable G Suite Domain-wide Delegation", enter anything for "Product name for the consent screen" and click **Save**.
   {% callout info %}"Enable G Suite Domain-wide Delegation" is only required on some older G Suite accounts. Newer G Suite accounts will automatically have domain-wide delegation enabled for all service accounts. If you do not see the "Enable G Suite Domain-wide Delegation" checkbox option available for your service account, you can assume it is already enabled.{% endcallout %}
   {% image directory-connector/gsuite/tick-gsuite.png %}
1.  Click **View Client ID** and you'll see the Client ID on screen. You will need the Client ID to configure security within G Suite. Highlight the Client ID and copy it to your clipboard.
   {% image directory-connector/gsuite/view-client-id.png %}
   {% image directory-connector/gsuite/copy-client-id.png %}

## Configure G Suite Security

1. Go to <https://admin.google.com>
2. Open the navigation menu and navigate to **Security** &rarr; **Settings**.
3. Select the **API reference** option and make sure **Enable API access** is checked.
   {% image directory-connector/gsuite/enable-api-access.png %}
4. Back in the list of options, select the **Advanced settings** options and then the **Manage API client access** link.
   {% image directory-connector/gsuite/manage-api-access.png %}
5. For **Client Name**, paste the **Client ID** of the service account that you created in the previous steps. For **API Scopes**, paste the following values to grant read-only access to users and groups:
   <pre>https://www.googleapis.com/auth/admin.directory.user.readonly,https://www.googleapis.com/auth/admin.directory.group.readonly,https://www.googleapis.com/auth/admin.directory.group.member.readonly</pre>
6. Click the **Authorize** button to save.
   {% image directory-connector/gsuite/authorize-client.png %}
7. You should now see your service account listed as an authorized client of G Suite.
   {% image directory-connector/gsuite/authorized-client-list.png %}

## Configure Directory Connector

1. Launch the Directory Connector desktop application.
2. Go to the **Settings** tab.
3. Select **G Suite Directory** as the directory type.
4. Enter the **Domain** of your G Suite account.
5. Enter the email address of an **Admin User** that has full access to the G Suite directory (such as your own).
6. If you have one, enter the **Customer Id** of your directory (most users won't need to enter a Customer Id).
7. Select the **JSON Key File** that was downloaded whenever you created your service account in the steps above. The **Client Email** and **Private Key** will be automatically extracted from this key file for you.

Congrats! You are done configuring G Suite with the Bitwarden Directory Connector.

## Testing

Test your configuration by running a sync test. You should see your G Suite groups and/or users printed to the screen.
