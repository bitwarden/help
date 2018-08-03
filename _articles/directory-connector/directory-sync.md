---
layout: article
title: Syncing users and groups with a directory
categories: [organizations]
featured: true
popular: false
tags: []
---

Bitwarden supports syncing users and/or groups from outside directories through the use of the **Bitwarden Directory Connector** application. The application will automatically provision and deprovision users, groups, and group associations from your configured user directory.

The following directories are supported:

- Active Directory
- Any LDAP-based directory
- Azure Active Directory
- G Suite (Google)
- Okta

{% note %}
Directory sync is only available to enterprise organizations.
{% endnote %}

## Bitwarden Directory Connector Application

The Bitwarden Directory Connector is cross-platform desktop application that allows you to keep your Bitwarden organization and user directory in sync. Directory Connector can be run on-demand manually as well as automatically in the background on an configured interval. The Directory Connector application can be installed on Windows, macOS, and most Linux distributions.

You can install and run Directory Connector as an agent on the server that hosts your directory, an administrator's workstation, or any other desktop device than can access the directory.

{% image directory-connector/app.png %}

### Table of Contents

- [Download and Install](#download-and-install)
- [Configure environment](#configure-environment)
- [Log in to your Bitwarden organization account](#log-in-to-your-bitwarden-organization-account)
- [Configure the directory connection](#configure-the-directory-connection)
- [Configure sync options](#configure-sync-options)
- [Test a sync](#test-a-sync)
- [Perform a manual sync](#perform-a-manual-sync)
- [Sync automatically](#sync-automatically)
- [Clear sync cache](#clear-sync-cache)
- [Source code](#source-code)

### Download and Install

You can download the latest version of the Bitwarden Directory Connector application from our [GitHub releases page](https://github.com/bitwarden/directory-connector/releases){:target="_blank"} or by using one of the official links below:

- [{% icon fa-windows %} Windows Installer (.exe)](https://vault.bitwarden.com/download/?app=connector&platform=windows)
- [{% icon fa-windows %} Windows Portable (.exe)](https://vault.bitwarden.com/download/?app=connector&platform=windows&variant=portable)
- [{% icon fa-apple %} macOS (.dmg)](https://vault.bitwarden.com/download/?app=connector&platform=macos)
- [{% icon fa-linux %} Linux (.AppImage)](https://vault.bitwarden.com/download/?app=connector&platform=linux)

The application will prompt you for automatic updates whenever newer versions become available.

### Configure environment

By default the Directory Connector communicates with the Bitwarden public cloud servers. If you are using the public cloud version of Bitwarden, you can skip this step. If you are using a self-hosted deployment of Bitwarden you will want to change the configured environment endpoints of the Directory Connector to your own on-premise installation.

1. Run the Directory Connector application.
2. If you are already logged into the application, go to the **More** tab and **Log Out**.
3. On the main log in screen, select the **Settings** button.
4. Enter your installation's base URL and save. For example, `https://bitwarden.company.com`.

### Log in to your Bitwarden organization account

1. Run the Directory Connector application.
2. Log in with your Bitwarden user account that has Admin or Owner access to your organization.
3. Go to the **Settings** tab and select your organization from the **Account** section.

### Configure the directory connection

1. Run the Directory Connector application.
2. Go to the **Settings** tab.
3. Select the **Type** of directory server you are configuring from the **Directory** section.
4. Set each configuration setting for the directory server type that you selected in step 3. The settings are different for each type of directory. You can read more about setting up each type of directory connection in the following articles:
   - [Active Directory & Other LDAP-based Directories Setup]({% link _articles/directory-connector/ldap-directory.md %})
   - [Azure Active Directory Setup]({% link _articles/directory-connector/azure-active-directory.md %})
   - [G Suite (Google) Setup]({% link _articles/directory-connector/gsuite-directory.md %})
   - [Okta Setup]({% link _articles/directory-connector/okta-directory.md %})

### Configure sync options

1. Run the Directory Connector application.
2. Go to the **Settings** tab.
3. Set each configuration setting from the **Sync** section. Some settings are dependent on the **Type** of directory you have configured.

{% note %}
The syntax for user and group filters is different for each type of directory. Learn more about how user and group filters work in the following article:

- [Configuring user and group sync filters]({% link _articles/directory-connector/user-group-filters.md %})
{% endnote %}

### Test a sync

You can run a sync test in order to check that all of your configuration settings are setup and working as expected. A sync test will query the directory server and print the results to the screen. The results that you see printed to the screen will be what is uploaded and synced to your Bitwarden organization whenever a real sync is performed.

1. Run the Directory Connector application.
2. Go to the **Dashboard** tab.
3. Click the **Test Now** button from the **Testing** section.

### Perform a manual sync

1. Run the Directory Connector application.
2. Go to the **Dashboard** tab.
3. Click the **Sync Now** button from the **Sync** section.

Your synced users and groups will be immediately available in your Bitwarden organization. Synced users will receive an email invite to your organization.

### Sync automatically

1. Run the Directory Connector application.
2. Go to the **Dashboard** tab.
3. Click the **Start Sync** button from the **Sync** section.

The application will begin polling your directory based on the interval you specified in your sync settings. Be sure not to exit/close the application or automatic syncing intervals will stop. You can minimize the application or hide it to the system tray (under the **Window** application menu).

You can click the **Stop Sync** button to end the automatic syncing intervals.

### Clear sync cache

As the Directory Connector works at syncing changes up to your Bitwarden organization it keeps a local cache. This cache helps the Directory Connector only send the difference in directory changes (deltas) from the previous time that it performed a sync operation. If you encounter sync errors or a particular directory change is not correctly being synced, you may need to clear this cache. Clearing the cache will allow a full sync to occur during the next sync operation.

1. Run the Directory Connector application.
2. Go to the **More** tab.
3. Click the **Clear Sync Cache** button from the **Other** section.

### Source code

As with everything here at Bitwarden, the Directory Connector is open source and hosted on GitHub at <https://github.com/bitwarden/directory-connector>.
