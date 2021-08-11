---
layout: article
title: Sync with OneLogin
categories: [directory-connector]
featured: true
popular: false
hidden: false
tags: []
order: 11
---

This article will help you get started using Directory Connector to sync users and groups from your OneLogin directory to your Bitwarden Organization.

## Create API Credentials

Directory Connector requires knowledge of OneLogin-generated API Credentials to connect to your directory. Complete the following steps to create and obtain API credentials for use by Directory Connector:

1. From your OneLogin Administration portal (`https://yourdomain.onelogin.com/admin`), select to **Developers** &rarr; **API Credentials** from the navigation menu.
2. Select the **New Credential** button and give your credential a Bitwarden-specific name (e.g. `bitwarden-dc`).
3. Select the **Read Users** radio button to give read permission for user fields, roles, and groups, and select **Save**.
4. Copy the generated **Client ID** and **Client Secret**. You may return to view these at any time.

## Connect to your Directory

Complete the following steps to configure Directory Connector to use your OneLogin directory:

1. Open the Directory Connector [Desktop Application]({% link _articles/directory-connector/directory-sync-desktop.md %}).
2. Navigate to the **Settings** tab.
3. From the **Type** dropdown, select **OneLogin**.

   The available fields in this section will change according to your selected Type.
4. Enter the **Client ID** and **Client Secret** [obtained from OneLogin](#create-api-credentials).
5. From the **Region** dropdown, select your region.
6. In the **Account** section, select Organization to connect to your directory from the dropdown.

## Configure Sync Options

{% callout success %}
When you're finished configuring, navigate to the **More** tab and select the **Clear Sync Cache** button to prevent potential conflicts with prior sync operations. For more information, see [Clear Sync Cache]({% link _articles/directory-connector/clear-sync-cache.md %}).
{% endcallout %}

Complete the following steps to configure the settings used when syncing using Directory Connector:

1. Open the Directory Connector [Desktop Application]({% link _articles/directory-connector/directory-sync-desktop.md %}).
2. Navigate to the **Settings** tab.
3. In the **Sync** section, configure the following options as desired:

|Option|Description|
|------|-----------|
|Interval|Time between automatic sync checks (in minutes).|
|Remove disabled users during sync|Check this box to remove users from the Bitwarden Organization that have been disabled in your directory.|
|Overwrite existing organization users based on current sync settings|Check this box to always perform a full sync and remove any users from the Bitwarden Organization if they are not in the synced user set.<br><br>**Recommended for OneLogin directories.**|
|More than 2000 users or groups are expected to sync.|Check this box if you expect to sync 2000+ users or groups. If you don't check this box, Directory Connector will limit a sync at 2000 users or groups.|
|If a user has no email address, combine a username prefix with a suffix value to form an email|Check this box to form valid email options for users that do not have an email address. **Users without real or formed email addresses will be skipped by Directory Connector.**<br><br>Formed Email = `username` + **Email Suffix**|
|Email Suffix|A string (`@example.com`) used to create a suffix for formed email addresses.|
|Sync users|Check this box to sync users to your Organization.<br><br>Checking this box will allow you to specify **User Filters**.|
|User Filter|See [Specify Sync Filters](#specify-sync-filters).|
|Sync Groups|Check this box to sync groups to your Organization. Checking this box will allow you to specify **Group Filters**.<br><br>**Please be aware, Directory Connector uses OneLogin `role` values to create Bitwarden groups.**<br>|
|Group Filter|See [Specify Sync Filters](#specify-sync-filters).|

### Specify Sync Filters

Use comma-separated lists to include or exclude from a sync based on User Email or Group:

{% callout info %}
Directory Connector will create Bitwarden groups based on OneLogin Roles, not OneLogin Groups.
{% endcallout %}

#### User Filters

To include or exclude specific users from a sync based on email address:
```
include:joe@example.com,bill@example.com,tom@example.com
```
```
exclude:joe@example.com,bill@example.com,tom@example.com
```

#### Group Filters

To include or exclude groups from a sync based on OneLogin roles:

```
include:Role A,Role B
```
```
exclude:Role A,Role B
```

## Test a Sync

To test whether Directory Connector will successfully connect to your directory and return the desired users and groups, navigate to the **Dashboard** tab and select the **Test Now** button. If successful, users and groups will be printed to the Directory Connector window according to specified [Sync Options](#configure-sync-options) and [Filters](#specify-sync-filters):

{% image directory-connector/okta/dc-okta-test.png Test sync results %}

## Start Automatic Sync

Once [Sync Options](#configure-sync-options) and [Filters](#specify-sync-filters) are configured as desired, you can begin syncing. Complete the following steps to start automatic sync with Directory Connector:

1. Open the Directory Connector [Desktop Application]({% link _articles/directory-connector/directory-sync-desktop.md %}).
2. Navigate to the **Dashboard** tab.
3. In the **Sync** section, select the **Start Sync** button.

   You may alternatively select the **Sync Now** button to execute a one-time manual sync.

Directory Connector will begin polling your directory based on the configured [Sync Options](#configure-sync-options) and [Filters](#specify-sync-filters).

If you exit or close the application, automatic sync will stop. To keep Directory Connector running in the background, minimize the application or hide it to the system tray.
