---
layout: article
title: About Directory Connector
categories: [directory-connector]
featured: true
popular: false
tags: []
order: 01
---

## What is Directory Connector?

The Bitwarden **Directory Connector** application enables Organization Admins to sync users and groups to a Bitwarden Organization from a selection of directory services. Directory Connector will automatically provision and de-provision users, groups, and group associations from the source directory.

{% image /directory-connector/dc-diagram.png %}

Directory Connector can be run on-demand as well as automatically on a configured interval while running in the background. You can install and run Directory Connector as an agent on the server that hosts your directory, an administrator's workstation, or any other desktop device that can access the source directory.

Directory Connector supports directory sync from the following sources:

- [Active Directory]({% link _articles/directory-connector/ldap-directory.md%})
- [Any LDAP-based directory]({% link _articles/directory-connector/ldap-directory.md %})
- [Azure Active Directory]({% link _articles/directory-connector/azure-active-directory.md %})
- [G Suite]({% link _articles/directory-connector/gsuite-directory.md %})
- [Okta]({% link _articles/directory-connector/okta-directory.md %})
- [OneLogin]({% link _articles/directory-connector/onelogin-directory.md %})

{% callout info %}
Directory sync is available to **Teams** and **Enterprise** organizations.
{% endcallout %}

## Directory Connector Applications

Directory Connector is available as a cross-platform [Desktop Application]({% link _articles/directory-connector/directory-sync-desktop.md %}) and as a [Command Line Interface (CLI) tool]({% link _articles/directory-connector/directory-sync-cli.md %}). Directory Connector applications [share data]({% link _articles/directory-connector/directory-sync-shared.md %}), so you may choose to use both.

{% image directory-connector/app.png Directory Connector Desktop App %}

### Download Directory Connector

Use the following links to download Directory Connector:

#### Download the Desktop App

You can download the latest version of the Bitwarden Directory Connector application from our [GitHub releases page](https://github.com/bitwarden/directory-connector/releases){:target="_blank"} or by using one of the following official links:

- [{% icon fa-windows %} Windows Installer (.exe)](https://vault.bitwarden.com/download/?app=connector&platform=windows)
- [{% icon fa-windows %} Windows Portable (.exe)](https://vault.bitwarden.com/download/?app=connector&platform=windows&variant=portable)
- [{% icon fa-apple %} macOS (.dmg)](https://vault.bitwarden.com/download/?app=connector&platform=macos)
- [{% icon fa-linux %} Linux (.AppImage)](https://vault.bitwarden.com/download/?app=connector&platform=linux)

#### Download the CLI Tool

Download the Directory Connector CLI Tool from one of the following links:

- [{% icon fa-windows %} Windows CLI (.exe)](https://vault.bitwarden.com/download/?app=connector&platform=windows&variant=cli-zip)
- [{% icon fa-apple %} macOS CLI](https://vault.bitwarden.com/download/?app=connector&platform=macos&variant=cli-zip)
- [{% icon fa-linux %} Linux CLI](https://vault.bitwarden.com/download/?app=connector&platform=linux&variant=cli-zip)

## Source code

As with everything at Bitwarden, the Directory Connector is open source and hosted on GitHub at [github.com/bitwarden/directory-connector](https://github.com/bitwarden/directory-connector).
