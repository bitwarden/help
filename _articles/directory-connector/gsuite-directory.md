---
layout: article
title: Sync with Google Workspace
categories: [directory-connector]
featured: true
popular: false
hidden: false
tags: []
order: 09
---

This article will help you get started using Directory Connector to sync users and groups from your Google Workspace (formerly "G Suite") Directory to your Bitwarden Organization.

## Google Workspace Setup

To setup directory sync with Google Workspace (formerly "G Suite"), you will need access to the **Google Workspace Admin Portal** and **Google Cloud Platform Console**. Directory Connector will require information obtained from these processes to function properly.

### Create a Cloud Project

Complete the following steps to create a Google Cloud project to use to connect Directory Connector to your directory. If you already have a Google Cloud project available, skip to [Enable Admin SDK](#enable-admin-sdk):

1. In the [GCP Console](https://console.cloud.google.com/home){:target="\_blank"}, select the **Create Project** button.
2. Enter a Bitwarden-specific name for the project (e.g. `bitwarden-dc-project`) and select the **Create** button.

### Enable Admin SDK

Complete the following steps to enable the Admin SDK API, to which Directory Connector will make requests:

1. In the [GCP Console](https://console.cloud.google.com/home){:target="\_blank"}, select the created or pre-existing Project.
2. From the left-hand navigation, select **APIs &amp; Services** &rarr; **Library**.
3. In the search box, enter `Admin SDK` and open the **Admin SDK API** service.
4. Select the **Enable** button.

### Create Service Account

Complete the following steps to create a service account to use when making API calls:

1. In the [GCP Console](https://console.cloud.google.com/home){:target="\_blank"}, select the created or pre-existing Project.
2. From the left-hand navigation, select **APIs &amp; Services** &rarr; **Credentials**.
3. Select the **Create Credentials** button, and select **Service account** from the dropdown.
4. Fill in the **Service account details** section, and select the **Create** button.
5. In the **Grant this service account access to project** section, select **Project &rarr; Owner** from the **Role** dropdown and select the **Continue** button.
6. Select the **Done** button.

### Obtain Service Account Credentials

Complete the following steps to obtain the appropriate permissions for the created service account:

1. In the [GCP Console](https://console.cloud.google.com/home){:target="\_blank"}, select the created or pre-existing Project.
2. From the left-hand navigation, select **IAM &amp; Admin** &rarr; **Service Accounts**.
3. Select the created service account.
4. On the Service Account Details page, select the **Add Key** button and select **Create new key** from the dropdown.
5. Select the Key type: **JSON** and select the **Create** button to download a JSON-formatted key to your local machine.
6. Back on the details page of your service account, select the **Show Domain-wide Delegation** dropdown.
7. Check the **Enable Domain-wide Delegation** box.
8. Enter a **Product name for the consent screen**.
9. Select **Save**.

### Allow Read-access to Google Workspace

Complete the following steps to authorize the client to read your directory:

1. Open the [Google Admin Portal](https://admin.google.com/u/5/ac/home){:target="\_blank"}.
2. From the left-hand navigation, select **Security** &rarr; **API Controls**.
3. Select the **Manage Domain Wide Delegation** button.
4. Select the **Add new** button.
5. In the Client ID field, paste the created **Client ID**.

   To retrieve the created Client ID, open the [GCP Console](https://console.cloud.google.com/home){:target="\_blank"} and navigate to **API &amp; Services** &rarr; **Credentials**.
6. In the OAuth scopes field, paste the following value to grant only read-access:

   ```
   https://www.googleapis.com/auth/admin.directory.user.readonly,https://www.googleapis.com/auth/admin.directory.group.readonly,https://www.googleapis.com/auth/admin.directory.group.member.readonly
   ```
7. Select the **Authorize** button.

## Connect to your Directory

Complete the following steps to configure Directory Connector to use your Google directory:

1. Open the Directory Connector [Desktop Application]({% link _articles/directory-connector/directory-sync-desktop.md %}).
2. Navigate to the **Settings** tab.
3. From the **Type** dropdown, select **G Suite (Google)**.

   The available fields in this section will change according to your selected Type.
4. Enter the **Domain** of your Google account.
5. Enter the email address of an **Admin User** with full access to your Google Directory.
6. If you have one, enter the **Customer ID** of your directory. Many users will not have or be required to enter a Customer ID.
7. Select the **Choose File** button and select the [downloaded JSON key](#obtain-service-account-credentials).
8. In the **Account** section, select Organization to connect to your directory from the dropdown.

## Configure Sync Options

{% callout success %}
When you're finished configuring, navigate to the **More** tab and select the **Clear Sync Cache** button to prevent potential conflicts with prior sync operations. For more information, see [Clear Sync Cache]({% link _articles/directory-connector/clear-sync-cache.md %}).
{% endcallout %}

Complete the following steps to configure the setting used when syncing using Directory Connector:

1. Open the Directory Connector [Desktop Application]({% link _articles/directory-connector/directory-sync-desktop.md %}).
2. Navigate to the **Settings** tab.
3. In the **Sync** section, confiture the following options as desired:

|Option|Description|
|------|-----------|
|Interval|Time between automatic sync checks (in minutes).|
|Remove disabled users during sync|Check this box to remove users from the Bitwarden Organization that have been disabled in your directory.|
|Overwrite existing organization users based on current sync settings|Check this box to always perform a full sync and remove any users from the Bitwarden Organization if they are not in the synced user set.|
|More than 2000 users or groups are expected to sync.|Check this box if you expect to sync 2000+ users or groups. If you don't check this box, Directory Connector will limit a sync at 2000 users or groups.|
|Sync users|Check this box to sync users to your Organization.<br><br> Checking this box will allow you to specify a **User Filter**.|
|User Filter|See [Specify Sync Filters](#specify-sync-filters).|
|Sync groups|Check this box to sync groups to your Organization.<br><br>Checking this box will allow you to specify a **Group Filter**.|
|Group Filter|See [Specify Sync Filters](#specify-sync-filters).|

### Specify Sync Filters

Use comma-separated lists to include or exclude from a sync based on User Email or Group:

#### User Filters

The following filtering syntaxes should be used in the **User Filter** field:

The Admin SDK API provides limited filtering capabilities for users with a `query` parameter. Learn more [here](https://developers.google.com/admin-sdk/directory/v1/guides/search-users){:target="\_blank"}.

##### Include/Exclude Users by Email

To include or exclude specific users from a sync based on email address:
```
include:joe@example.com,bill@example.com,tom@example.com
```
```
exclude:joe@example.com,bill@example,tom@example.com
```

##### Concatenate with `query`

To concatenate a user filter with the `query` parameter, use a pipe (`|`):
```
include:john@example.com,bill@example.com|orgName=Engineering orgTitle:Manager
```
```
exclude:john@example.com,bill@example.com|orgName=Engineering orgTitle:Manager
```

##### Use only `query`

To use only the `query` parameter, prefix the query with a pipe (`|`):
```
|orgName=Engineering orgTitle:Manager
```

#### Group Filters

To include or exclude groups from a sync based on Group Name:
```
include:Group A,Group B
```
```
exclude:Group A,Group B
```

## Test a Sync

To test whether Directory Connector will successfully connect to your directory and return the desired users and groups, navigate to the **Dashboard** tab and select the **Test Now** button. If successful, users and groups will be printed to the Directory Connector window according to the specified [Sync Options](#configure-sync-options) and [Filters](#specify-sync-filters):

{% image directory-connector/okta/dc-okta-test.png Test sync results %}

## Start Automatic Sync

Once [Sync Options](#configure-sync-options) and [Filters](#specify-sync-filters) are configured and tested, you can begin syncing. Complete the following steps to start automatic syncing with Directory Connector:

1. Open the Directory Connector [Desktop Application]({% link _articles/directory-connector/directory-sync-desktop.md %}).
2. Navigate to the **Dashboard** tab.
3. In the **Sync** section, select the **Start sync** button.

   You may alternatively select the **Sync now** button to execute a one-time manual sync.

Directory Connector will begin polling your directory based on the configured [Sync Options](#configure-sync-options) and [Filters](#specify-sync-filters).

If you exit or close the application, automatic sync will stop. To keep Directory Connector running in the background, minimize the application or hide it to the system tray.
