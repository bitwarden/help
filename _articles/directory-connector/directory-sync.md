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

## Table of Contents

- [Download and Install](#download-and-install)
- [Configure environment](#configure-environment)
- [Log in to your Bitwarden organization account](#log-in-to-your-bitwarden-organization-account)
- [Configure the directory connection](#configure-the-directory-connection)
- [Configure sync options](#configure-sync-options)
- [Test a sync](#test-a-sync)
- [Perform a manual sync](#perform-a-manual-sync)
- [Sync automatically](#sync-automatically)
- [Clear sync cache](#clear-sync-cache)
- [Command-line Interface](#command-line-interface)
  * [Quick Start](#quick-start)
  * [Download and Install](#download-and-install-1)
  * [Shared Data](#shared-data)
  * [Explore the CLI](#explore-the-cli)
  * [Test Command](#test-command)
  * [Sync Command](#sync-command)
  * [Last Sync Command](#last-sync-command)
  * [Config Command](#config-command)
  * [Data File Command](#data-file-command)
  * [Clear Cache Command](#clear-cache-command)
  * [Update Command](#update-command)
  * [Version Option](#version-option)
- [Source code](#source-code)

## Download and Install

You can download the latest version of the Bitwarden Directory Connector application from our [GitHub releases page](https://github.com/bitwarden/directory-connector/releases){:target="_blank"} or by using one of the official links below:

- [{% icon fa-windows %} Windows Installer (.exe)](https://vault.bitwarden.com/download/?app=connector&platform=windows)
- [{% icon fa-windows %} Windows Portable (.exe)](https://vault.bitwarden.com/download/?app=connector&platform=windows&variant=portable)
- [{% icon fa-apple %} macOS (.dmg)](https://vault.bitwarden.com/download/?app=connector&platform=macos)
- [{% icon fa-linux %} Linux (.AppImage)](https://vault.bitwarden.com/download/?app=connector&platform=linux)

The application will prompt you for automatic updates whenever newer versions become available.

Command-line Interface

- [{% icon fa-windows %} Windows CLI (.exe)](https://vault.bitwarden.com/download/?app=connector&platform=windows&variant=cli-zip)
- [{% icon fa-apple %} macOS CLI](https://vault.bitwarden.com/download/?app=connector&platform=macos&variant=cli-zip)
- [{% icon fa-linux %} Linux CLI](https://vault.bitwarden.com/download/?app=connector&platform=linux&variant=cli-zip)

## Configure environment

By default the Directory Connector communicates with the Bitwarden public cloud servers. If you are using the public cloud version of Bitwarden, you can skip this step. If you are using a self-hosted deployment of Bitwarden you will want to change the configured environment endpoints of the Directory Connector to your own on-premise installation.

1. Run the Directory Connector application.
2. If you are already logged into the application, go to the **More** tab and **Log Out**.
3. On the main log in screen, select the **Settings** button.
4. Enter your installation's base URL and save. For example, `https://bitwarden.company.com`.

## Log in to your Bitwarden organization account

1. Run the Directory Connector application.
2. Log in with your Bitwarden user account that has Admin or Owner access to your organization.
3. Go to the **Settings** tab and select your organization from the **Account** section.

## Configure the directory connection

1. Run the Directory Connector application.
2. Go to the **Settings** tab.
3. Select the **Type** of directory server you are configuring from the **Directory** section.
4. Set each configuration setting for the directory server type that you selected in step 3. The settings are different for each type of directory. You can read more about setting up each type of directory connection in the following articles:
   - [Active Directory & Other LDAP-based Directories Setup]({% link _articles/directory-connector/ldap-directory.md %})
   - [Azure Active Directory Setup]({% link _articles/directory-connector/azure-active-directory.md %})
   - [G Suite (Google) Setup]({% link _articles/directory-connector/gsuite-directory.md %})
   - [Okta Setup]({% link _articles/directory-connector/okta-directory.md %})

## Configure sync options

1. Run the Directory Connector application.
2. Go to the **Settings** tab.
3. Set each configuration setting from the **Sync** section. Some settings are dependent on the **Type** of directory you have configured.

{% note %}
The syntax for user and group filters is different for each type of directory. Learn more about how user and group filters work in the following article:

- [Configuring user and group sync filters]({% link _articles/directory-connector/user-group-filters.md %})
{% endnote %}

## Test a sync

You can run a sync test in order to check that all of your configuration settings are setup and working as expected. A sync test will query the directory server and print the results to the screen. The results that you see printed to the screen will be what is uploaded and synced to your Bitwarden organization whenever a real sync is performed.

1. Run the Directory Connector application.
2. Go to the **Dashboard** tab.
3. Click the **Test Now** button from the **Testing** section.

## Perform a manual sync

1. Run the Directory Connector application.
2. Go to the **Dashboard** tab.
3. Click the **Sync Now** button from the **Sync** section.

Your synced users and groups will be immediately available in your Bitwarden organization. Synced users will receive an email invite to your organization.

## Sync automatically

1. Run the Directory Connector application.
2. Go to the **Dashboard** tab.
3. Click the **Start Sync** button from the **Sync** section.

The application will begin polling your directory based on the interval you specified in your sync settings. Be sure not to exit/close the application or automatic syncing intervals will stop. You can minimize the application or hide it to the system tray (under the **Window** application menu).

You can click the **Stop Sync** button to end the automatic syncing intervals.

## Clear sync cache

As the Directory Connector works at syncing changes up to your Bitwarden organization it keeps a local cache. This cache helps the Directory Connector only send the difference in directory changes (deltas) from the previous time that it performed a sync operation. If you encounter sync errors or a particular directory change is not correctly being synced, you may need to clear this cache. Clearing the cache will allow a full sync to occur during the next sync operation.

1. Run the Directory Connector application.
2. Go to the **More** tab.
3. Click the **Clear Sync Cache** button from the **Other** section.

## Command-line Interface

A command-line interface (CLI) tool is also available to connect to and sync your directory. The Bitwarden Directory Connector CLI is especially useful whenever you are working in environments where a desktop GUI is not available, or if you want to programmatically script directory sync operations using tools provided by the operating system (cron job, scheduled task, etc). The Bitwarden Directory Connector CLI can be used cross-platform on Windows, macOS, and Linux distributions.

### Quick Start

1. [Download and install](#download-and-install) the Directory Connector CLI for your platform.
2. Move `bwdc` to `/usr/local/bin` or another directory in your `$PATH`. Windows users can [add `bwdc.exe` to the current user's `PATH`](https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/){:target="_blank"}. **IMPORTANT:** Make sure that the included `keytar.node` dependency remains in the same directory as the main `bwdc` executable.
3. Verify the `bwdc` command works in your terminal.

       bwdc --help

### Download and Install

See the [download and install](#download-and-install) section above for links to download the CLI executable for your platform.

{% note %}
When extracting the zip, make sure that the included `keytar.node` dependency remains in the same directory as the main `bwdc` executable.
{% endnote %}

### Shared Data

The Directory Connector CLI shares the same database and configuration settings with the Directory Connector desktop application. You can install and use both applications together, however, you should avoid using them both at the same time.

Though not required, often times it may be helpful to use the Directory Connector desktop application first to setup and configure all of your settings before using the Directory Connector CLI.

The default location for the shared `data.json` database file depends on which platform you are using.

- Windows : `%AppData%\Bitwarden Directory Connector`
- macOS: `~/Library/Application Support/Bitwarden Directory Connector`
- Linux: `~/.config/Bitwarden Directory Connector`

The [`data-file` command](#data-file-command) can be used to discover the absolute path to the `data.json` database file on your system.

### Explore the CLI

The Bitwarden Directory Connector CLI is self-documented with `--help` content and examples for every command. You should start exploring the Directory Connector CLI by using the global `--help` option:

    bwdc --help

This option will list all available commands that you can use with the Directory Connector CLI.

Additionally, you can use the `--help` option on a specific command to learn more about it:

    bwdc test --help
    bwdc config --help

### Test Command

The `test` command queries your directory and prints a JSON formatted array of groups and users that will be synced to your Bitwarden organization whenever you run a real sync operation.

    bwdc test

### Sync Command

The `sync` command runs a live sync operation and pushes data to your Bitwarden organization.

    bw sync

Your synced users and groups will be immediately available in your Bitwarden organization. Synced users will receive an email invite to your organization.

### Last Sync Command

The `last-sync` command returns an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601){:target="_blank"} timestamp of the last time a sync operation has been performed for users or groups:

    bwdc last-sync users
    bwdc last-sync groups

### Config Command

The `config` command allow you to specify settings for the Directory Connector CLI to use.

    bwdc config <setting> <value>

For example, if you are using a self hosted Bitwarden server you will need to change the endpoint that the Directory Connector CLI communicates with.

    bwdc config server https://bitwarden.company.com

You can also use the `config` command to set parameters that require secure storage and cannot be modified directly in the `data.json` database file, such as passwords or access tokens.

    bwdc config ldap.password <password>
    bwdc config azure.key <key>
    bwdc config gsuite.key <key>
    bwdc config okta.token <token>

Additional configuration settings can be modified in the Bitwarden Directory Connector desktop application or by editing the `data.json` database file directly in your favorite text editor. [Read more about shared data](#shared-data).

{% note %}
You should avoid opening or modifying the `data.json` database file while the Directory Connector desktop application or CLI executable is running.
{% endnote %}

### Data File Command

The `data-file` command returns an absolute path to the `data.json` database file used by the Directory Connector CLI.

    bwdc data-file

Configuration settings can be modified for the Directory Connector CLI by editing the `data.json` database file directly in your favorite text editor. [Read more about shared data](#shared-data).

### Clear Cache Command

The `clear-cache` command allows you to clear cached data that the application stores while performing sync operations. [Read more about clearing sync cache](#clear-sync-cache).

    bwdc clear-cache

### Update Command

The `update` command allows you to check if your Directory Connector CLI is up to date. The Directory Connector CLI will not automatically update. You must download new versions of the Directory Connector CLI manually.

    bwdc update

A URL to download a new version of the CLI executable will be returned to you.

{% note %}
If you are also using the Directory Connector desktop application, it is important that you keep them both up to date and that their versions match. Running two different versions of the Directory Connector desktop application and Directory Connector CLI may cause unexpected issues.
{% endnote %}

### Version Option

The `--version` option allows you to check which version the Directory Connector CLI you are currently using.

```
bwdc --version
```

## Source code

As with everything here at Bitwarden, the Directory Connector is open source and hosted on GitHub at <https://github.com/bitwarden/directory-connector>.
