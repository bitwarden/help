---
layout: article
title: Sync with Azure AD
categories: [directory-connector]
featured: true
popular: false
hidden: false
tags: []
order: 08
---

This article will help you get started using Directory Connector to sync users and groups from your Azure Active Directory to your Bitwarden Organization.

## Azure AD Setup

Complete the following processes from the Microsoft Azure Portal before configuring Directory Connector. Directory Connector will require information obtained from these processes to function properly.

### Create App Registration

Complete the following steps to create an app registration for Directory Connector:

1. From your Microsoft Azure portal, navigate to the **Azure Active Directory** resource.
2. From the left-hand navigation, select **App registrations**.
3. Select the **New registration** button and give your registration a Bitwarden-specific name (e.g. `bitwarden-dc`).
4. Select **Register**.

### Grant App Permissions

Complete the following steps to grant the created app registration the required permissions:

1. On the created Bitwarden application, select **API Permissions** from the left-hand navigation.
2. Select the **Add a permission** button.
3. When prompted to Select an API, select **Microsoft Graph**.
4. Set the following **Delegated permissions**:
   - User > User.ReadBasic.All (Read all users' basic profiles)
   - User > User.Read.All (Read all users' full profiles)
   - Group > Group.Read.All (Read all groups)
5. Set the following **Application Permissions**:
   - User > User.Read.All (Read all users' full profiles)
   - Group > Group.Read.All (Read all groups)
6. Back on the API Permissions page, select the **Grant admin consent for...** button.

### Create App Secret Key

Complete the following steps to create a secret key to be used by Directory Connector:

1. On the created Bitwarden application, select **Certificates & secrets** from the left-hand navigation.
2. Select the **New client secret** button and add a Bitwarden-specific description (e.g. `bitwarden-dc-secret`) and an expiration date. We recommend selecting **Never**.
3. Select **Save** once you're finished.
4. Copy the secret's **value** to a safe place for later use.

### Get App ID

Complete the following steps to obtain the app ID to be used by Directory Connector:

1. On the created Bitwarden application, select **Overview** from the left-hand navigation.
2. Copy the **Application (client) ID** to a safe place for later use.

### Get Tenant Hostname

Complete the following steps to obtain the tenant hostname to be used by Directory Connector:

1. From anywhere in the Azure portal, select the **Directory + subscription** filter button from the main navigation.
2. Copy the **Current directory:** value to a safe place for later use.

## Connect to your Directory

Complete the following steps to configure Directory Connector to use your Azure Active Directory. If you haven't already, take the proper [Azure AD Setup](#azure-ad-setup) steps before proceeding:

1. Open the Directory Connector [Desktop Application]({% link _articles/directory-connector/directory-sync-desktop.md %}).
2. Navigate to the **Settings** tab.
3. From the **Type** dropdown, select **Azure Active Directory**.

   The available fields in this section will change according to your selected Type.
4. Enter the collected [**Tenant** hostname](#get-tenant-hostname), [**Application Id**](#get-app-id), and [**Secret Key**](#create-app-secret-key).
5. In the **Account** section, select Organization to connect to your directory from the dropdown.

## Configure Sync Options

{% callout success %}
When you're finished configuring, navigate to the **More** tab and select the **Clear Sync Cache** button to prevent potential conflicts with prior sync operations. For more information, see [Clear Sync Cache]({% link _articles/directory-connector/clear-sync-cache.md %}).
{% endcallout %}

Complete the following steps to configure the settings used when syncing using Directory Connector:

1. Open the Directory Connector [Desktop Application]({% link _articles/directory-connector/directory-sync-desktop.md %}}).
2. Navigate to the **Settings** tab.
3. In the **Sync** section, configure the following options as desired:

|Option|Description|
|------|-----------|
|Interval|Time between automatic sync checks (in minutes).|
|Remove disabled users during sync|Check this box to remove users from the Bitwarden Organization that have been disabled in your directory.|
|Overwrite existing organization users based on current sync settings|Check this box to always perform a full sync and remove any users from the Bitwarden Organization if they are not in the synced user set.|
|More than 2000 users or groups are expected to sync.|Check this box if you expect to sync 2000+ users or groups. If you don't check this box, Directory Connector will limit a sync at 2000 users or groups.|
|Sync users|Check this box to sync users to your Organization.<br><br>Checking this box will allow you to specify **User Filters**.|
|User Filter|See [Specify Sync Filters](#specify-sync-filters).|
|Sync Groups|Check this box to sync groups to your Organization. Checking this box will allow you to specify **Group Filters**.|
|Group Filter|See [Specify Sync Filters](#specify-sync-filters).|

### Specify Sync Filters

Use comma-separated lists to include or exclude from a sync based on User Email, Group Name, or Group Membership:

#### User Filters

The following filtering syntaxes should be used in the **User Filter** field:

##### Include/Exclude Users by Email

To include or exclude specific users from a sync based on email address:
```
include:joe@example.com,bill@example.com,tom@example.com
```
```
exclude:jow@example.com,bill@example.com,tom@example.com
```

##### User by Group Membership

You can include or exclude users from a sync based on their Azure Active Directory group membership using the `includeGroup` and `excludeGroup` keywords. `includeGroup` and `excludeGroup` use Group Object ID, available from the **Overview** page of the group in the [Azure Portal](https://portal.azure.com){:target="\_blank"} or through the [Azure AD Powershell](https://docs.microsoft.com/en-us/powershell/module/azuread/get-azureadgroup?view=azureadps-2.0){:target="\_blank"}:
```
includeGroup:963b5acd-9540-446c-8e99-29d68fcba8eb,9d05a51c-f173-4087-9741-a7543b0fd3bc
```
```
excludeGroup:963b5acd-9540-446c-8e99-29d68fcba8eb,9d05a51c-f173-4087-9741-a7543b0fd3bc
```

#### Group Filters

The following filtering syntaxes should be used in the **Group Filter** field:

##### Include/Exclude Groups

To include or exclude groups from a sync based on group name:
```
include:Group A,Group B
```
```
exclude:Group A,Group B
```

##### Group by Administrative Unit (AU)

You can include or exclude groups from a sync based on their tagged [Azure Active Directory Administrative Units (AUs)](https://docs.microsoft.com/en-us/azure/active-directory/roles/administrative-units){:target="\_blank"} by using the `includeadministrativeunit` and `excludeadministrativeunit` keywords. `includeadministrativeunit` and `excludeadministrativeunit` use the name of the Administrative Unit:
```
includeadministrativeunit:bitwarden
```
```
excludeadministrativeunit:not-bitwarden
```

## Test a Sync

To test whether Directory Connector will successfully connect to your directory and return the desired users and groups, navigate to the **Dashboard** tab and select the **Test Now** button. If successful, users and groups will be printed to the Directory Connector window according to specified [Sync Options](#configure-sync-options) and [Filters](#specify-sync-filters).

It may take up to 15 minutes for permissions for your application to properly propagate. In the meantime, you may receive `Insufficient privileges to complete the operation` errors.

{% callout info %}
If you get the error message `Resource <user id> does not exist or one of its queried reference-property objects are not present`, you'll need to permanently delete or restore the user(s) with `<user id>`. **Please note**, this was fixed in a recent version of Directory Connector. Update your application if you're still experiencing this error.
{% endcallout %}

{% image directory-connector/okta/dc-okta-test.png Test sync results %}

## Start Automatic Sync

Once [Sync Options](#configure-sync-options) and [Filters](#specify-sync-filters) are configured and tested, you can begin syncing. Complete the following steps to start automatic syncing with Directory Connector:

1. Open the Directory Connector [Desktop Application]({% link _articles/directory-connector/directory-sync-desktop.md %}).
2. Navigate to the **Dashboard** tab.
3. In the **Sync** section, select the **Start Sync** button.

   You may alternatively select the **Sync Now** button to execute a one-time manual sync.

Directory Connector will begin polling your directory based on the configured [Sync Options](#configure-sync-options) and [Filters](#specify-sync-filters).

If you exit or close the application, automatic sync will stop. To keep Directory Connector running in the background, minimize the application or hide it to the system tray.
