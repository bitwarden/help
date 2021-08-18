---
layout: article
title: Sync with Okta
categories: [directory-connector]
featured: true
popular: false
hidden: false
tags: []
order: 10
---

This article will help you get starting using Directory Connector to sync users and groups from your Okta directory to your Bitwarden Organization.

## Create an Okta API Token

Directory Connector requires knowledge of an Okta-generated token to connect to your directory. Complete the following steps to create and obtain an Okta API Token for use by Directory Connector:

1. From your Okta Developer Console (`https://yourdomain-admin.okta.com`) navigate to **Security** &rarr; **API** &rarr; **Tokens**.
2. Select the **Create Token** button and give your token a Bitwarden-specific name (e.g. `bitwarden-dc`).
3. Copy the generated **Token Value** to the clipboard.

   {% callout warning %}Your Token Value will not be shown again. Paste it somewhere safe to prevent it from being lost.{% endcallout %}

## Connect to your Directory

Complete the following steps to configure Directory Connector to use your Okta Directory:

1. Open the Directory Connector [Desktop Application]({% link _articles/directory-connector/directory-sync-desktop.md %}).
2. Navigate to the **Settings** tab.
3. From the **Type** dropdown, select **Okta**.

   The available fields in this section will change according to your selected Type.
4. Enter your Okta Organization URL in the **Organization URL** field (e.g. `https://yourdomain.okta.com`).
5. Paste the API Token Value in the **Token** field.
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
|Overwrite existing organization users based on current sync settings|Check this box to always perform a full sync and remove any users from the Bitwarden Organization if they are not in the synced user set.|
|More than 2000 users or groups are expected to sync.|Check this box if you expect to sync 2000+ users or groups. If you don't check this box, Directory Connector will limit a sync at 2000 users or groups.|
|Sync users|Check this box to sync users to your Organization.<br><br>Checking this box will allow you to specify **User Filters**.|
|User Filter|See [Specify Sync Filters](#specify-sync-filters).|
|Sync Groups|Check this box to sync groups to your Organization.<br><br>Checking this box will allow you to specify **Group Filters**.|
|Group Filter|See [Specify Sync Filters](#specify-sync-filters).|

### Specify Sync Filters

Use comma-separated lists to include or exclude based on User Email or Group Name. Additionally, Okta APIs provided limited filtering capabilities for Users and Groups that may be used in Directory Connector Filter fields.

Consult Okta documentation for more information about using the `filter` parameter for [Users](https://developer.okta.com/docs/api/resources/users#list-users-with-a-filter){:target="\_blank"} and [Groups](https://developer.okta.com/docs/api/resources/groups#filters){:target="\_blank"}.

#### User Filters

##### Include/Exclude Users by Email

To include or exclude specific users based on email address:
```
include:joe@example.com,bill@example.com,tom@example.com
```
```
exclude:joe@example.com,bill@example.com,tom@example.com
```
##### Concatenate with `filter`

To concatenate a user filter with the `filter` parameter, use a pipe (`|`):
```
include:john@example.com,bill@example.com|profile.firstName eq "John"
```
```
exclude:john@example.com,bill@example.com|profile.firstName eq "John"
```
##### Use only `filter`

To use only the `filter` parameter, prefix the query with a pipe (`|`):
```
|profile.lastName eq "Smith"
```
#### Group Filters

##### Include/Exclude Groups

To include or exclude groups by name:
```
include:Group A,Group B
```
```
exclude:Group A,Group B
```
##### Concatenate with `filter`

To concatenate a group filter with the `filter` parameter, use a pipe (`|`):
```
include:Group A|type eq "APP_GROUP"
```
```
exclude:Group A|type eq "APP_GROUP"
```
##### Use only `filter`

To use only the `filter` parameter, prefix the query with a pipe (`|`):
```
|type eq "BUILT_IN"
```
## Test Connection

To test whether Directory Connector will successfully connect to your directory and return the desired users and groups, navigate to the **Dashboard** tab and select the **Test Now** button. If successful, users and groups will be printed to the Directory Connector window according to specified [Sync Options](#configure-sync-options) and [Filters](#specify-sync-filters):

{% image directory-connector/okta/dc-okta-test.png Test sync results%}

## Start Automatic Sync

Once [Sync Options](#configured-sync-options) and [Filters](#specify-sync-filters) are configured as desired, you can begin syncing. Complete the following steps to start automatic sync with Directory Connector:

1. Open the Directory Connector [Desktop Application]({% link _articles/directory-connector/directory-sync-desktop.md %}).
2. Navigate to the **Dashboard** tab.
3. In the **Sync** section, select the **Start Sync** button.

   You may alternatively select the **Sync Now** button to execute a one-time manual sync.

Directory Connector will begin polling your directory based on the configured [Sync Options](#configured-sync-options) and [Filters](#specify-sync-filters).

If you exit or close the application, automatic sync will stop. To keep Directory Connector running in the background, minimize the application or hide it to the system tray.
