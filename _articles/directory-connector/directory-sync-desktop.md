---
layout: article
title: Directory Connector Desktop App
categories: [directory-connector]
featured: true
popular: false
tags: []
order: 02
---

The Directory Connector Desktop App is a standalone desktop application that can be used to sync users, groups, and group associations from a selection of directory services.

{% image directory-connector/app.png Directory Connector Desktop App %}

Directory Connector is also available as a [CLI Tool]({{site.baseurl}}/article/directory-sync-cli). The Desktop App and CLI [share a database and configurations]({% link _articles/directory-connector/directory-sync-shared.md %}), so you may choose to use both, however simultaneous use is not recommended.

## Getting Started

To get started using the Directory Connector Desktop App:

1. Download the latest version of the app from our [GitHub releases page](https://github.com/bitwarden/directory-connector/releases){:target="_blank"} or by using one of the following official links:

   - [{% icon fa-windows %} Windows Installer (.exe)](https://vault.bitwarden.com/download/?app=connector&platform=windows)
   - [{% icon fa-windows %} Windows Portable (.exe)](https://vault.bitwarden.com/download/?app=connector&platform=windows&variant=portable)
   - [{% icon fa-apple %} macOS (.dmg)](https://vault.bitwarden.com/download/?app=connector&platform=macos)
   - [{% icon fa-linux %} Linux (.AppImage)](https://vault.bitwarden.com/download/?app=connector&platform=linux)

2. **If you're using a self-hosted version of Bitwarden**, change the Server URL used by Directory Connector before logging in:

   1. On the Login screen, select **Settings**.
   2. In the **Server URL** field, enter the domain name for your self-hosted instance with `https://`. For example, `https://your.domain.bitwarden.com`.
   3. Select **Save**.
3. Log in to Directory Connector using your [Organization API Key]({{site.baseurl}}/article/public-api/#authentication). If you don't have the API Key, reach out to an [Organization Owner]({{site.baseurl}}/article/user-types-access-control/).
4. On the {% icon fa-cogs %} **Settings** tab, connect to your directory and configure [sync options]({{site.baseurl}}/article/user-group-filters/). This procedure will vary based on the directory in use, so refer to one of the following articles for instruction:

   - [Sync with Active Directory or LDAP]({% link _articles/directory-connector/ldap-directory.md %})
   - [Sync with Azure Active Directory]({% link _articles/directory-connector/azure-active-directory.md %})
   - [Sync with G Suite (Google)]({% link _articles/directory-connector/gsuite-directory.md %})
   - [Sync with Okta]({% link _articles/directory-connector/okta-directory.md %})
   - [Sync with OneLogin]({% link _articles/directory-connector/onelogin-directory.md %})

   {% callout success %}If you're re-configuring sync options, rather than setting them for the first time, navigate to the **More** tab and select the **Clear Sync Cache** button to prevent potential conflicts with prior sync operations ([learn more]({{site.baseurl}}/article/clear-sync-cache/)).{% endcallout %}
5. On the {% icon fa-cogs %} **Settings** tab, select you Organization from the Organization dropdown.
6. **Perform a Test Sync**. To check that your directory connection and sync options are successfully configured and working as expected:

   1. Open the {% icon fa-dashboard %} **Dashboard** tab.
   2. Select the **Test Now** button.

Sync testing will query the directory server and print the results to the dashboard. If the printed results match your expectations, you're ready to [start syncing](#sync-with-directory-connector).

## Sync with Directory Connector

Directory Connector can be used to run a one-time [manual sync](#manual-sync) or [automatic sync polling](#automatic-sync):

### Manual Sync

To run a one-time manual sync from your directory to your Bitwarden Organization, open the {% icon fa-dashboard %} **Dashboard** tab and select the {% icon fa-refresh %} **Sync Now** button.

Synced users will be invited to your Organization, and groups will be immediately created.

### Automatic Sync

Automatic syncing will poll your directory based on the **Interval** specified in your [sync options]({{site.baseurl}}/article/user-group-filters/) as long as the application is open. If you exit or close the application, automatic sync polling will stop.

To start automatic sync polling with Directory Connector, open the {% icon fa-dashboard %} **Dashboard** tab and select the {% icon fa-play %} **Start Sync** button.
