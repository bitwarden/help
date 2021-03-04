---
layout: article
title: Directory Connector Desktop App
categories: [directory-connector]
featured: true
popular: false
tags: []
order: 02
---

Download the latest version of the Directory Connector Desktop App from our [GitHub releases page](https://github.com/bitwarden/directory-connector/releases){:target="_blank"} or by using one of the following official links:

- [{% icon fa-windows %} Windows Installer (.exe)](https://vault.bitwarden.com/download/?app=connector&platform=windows)
- [{% icon fa-windows %} Windows Portable (.exe)](https://vault.bitwarden.com/download/?app=connector&platform=windows&variant=portable)
- [{% icon fa-apple %} macOS (.dmg)](https://vault.bitwarden.com/download/?app=connector&platform=macos)
- [{% icon fa-linux %} Linux (.AppImage)](https://vault.bitwarden.com/download/?app=connector&platform=linux)

## Setup

Directory Connector configuration will vary based on the directory type in use. Use one of the following articles for instruction:

- [Sync with Active Directory or LDAP]({% link _articles/directory-connector/ldap-directory.md %})
- [Sync with Azure Active Directory]({% link _articles/directory-connector/azure-active-directory.md %})
- [Sync with G Suite (Google)]({% link _articles/directory-connector/gsuite-directory.md %})
- [Sync with Okta]({% link _articles/directory-connector/okta-directory.md %})
- [Sync with OneLogin]({% link _articles/directory-connector/onelogin-directory.md %})

{% callout info %}
**If you're using a self-hosted version of Bitwarden**, you must change the Server URL used by the Directory Connector application:

1. Log out of Directory Connector.
2. On the Login screen, select the **Settings** button.
3. In the **Server URL** field, enter the domain name for your self-hosted instance with `https://`. For example, `https://bitwarden.example.com`.
4. Select the **Save** button.
{% endcallout %}

## Using Directory Connector

The following sections will walk you through typical actions taken with the Desktop App.

In all cases, log in with a Bitwarden user account that is an Admin or Owner for the relevant Organization(s). For more information, see [User Types and Access Control]({% link _articles/organizations/user-types-access-control.md %}).

### Connect to a Bitwarden Organization

Complete the following steps to specify which Bitwarden Organization to sync to:

1. Open the Directory Connector application.
2. Navigate to the **Settings** tab.
3. In the **Account** section, select your Organization from the dropdown.

### Configure Sync Options

Complete the following steps to configure options for your sync:

1. Open the Directory Connector application.
2. Navigate to the **Settings** tab.
3. In the **Sync** section, configure the available options as desired. Available **Sync Options** depend on the directory type in use, so refer to one of the following articles for a list of options available to you:

   - [Sync with Active Directory or LDAP]({% link _articles/directory-connector/ldap-directory.md %})
   - [Sync with Azure Active Directory]({% link _articles/directory-connector/azure-active-directory.md %})
   - [Sync with G Suite (Google)]({% link _articles/directory-connector/gsuite-directory.md %})
   - [Sync with Okta]({% link _articles/directory-connector/okta-directory.md %})
   - [Sync with OneLogin]({% link _articles/directory-connector/onelogin-directory.md %})

{% callout success %}
When you're finished configuring, navigate to the **More** tab and select the **Clear Sync Cache** button to prevent potential conflicts with prior sync operations. For more information, see [Clear Sync Cache]({% link _articles/directory-connector/clear-sync-cache.md %}).
{% endcallout %}

### Perform a Sync Test

Perform a sync test to check that all configured settings are in-place and working as expected. Sync tests will query the directory server and print the results to the Directory Connector **Dashboard**.

1. Open the Directory Connector application.
2. Navigate to the **Dashboard** tab.
3. In the **Testing** section, select the **Test Now** button.

### Perform a Manual Sync

Complete the following steps to run a one-time manual sync between your directory and your Bitwarden Organization:

1. Open the Directory Connector application.
2. Navigate to the **Dashboard** tab.
3. In the **Sync** section, select the the **Sync Now** button.

Your synced users and groups will be immediately available in your Bitwarden Organization. Added users will receive an email invite to your Organization.

### Start Automatic Sync

Complete the following steps to start automatic sync polling with Directory Connector:

1. Open the Directory Connector application.
2. Navigate to the **Dashboard** tab.
3. In the **Sync** section, select the **Start Sync** button.

Directory Connector will begin polling your directory based on the **Interval** specified in your **Sync Options**.

If you exit or close the application, automatic sync will stop. To keep Directory Connector running in the background, minimize the application or hide it to the system tray.
