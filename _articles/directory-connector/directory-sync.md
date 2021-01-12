---
layout: article
title: About Directory Connector
categories: [directory-connector]
featured: true
popular: false
tags: [directory connector, directory sync, teams, enterprise]
order: 01
---

## What is Directory Connector?

The Bitwarden **Directory Connector** application syncs users and groups to a Bitwarden Organization from a selection of directory services. Directory Connector will automatically provision and de-provision users, groups, and group associations from the source directory.

{% callout info %}
Directory Connector functionality is available to **Teams** and **Enterprise** organizations. To use Directory Connector, you must be an Organization Admin or Owner (for more information, see [User Types and Access Control]({% link _articles/organizations/user-types-access-control.md %})).
{% endcallout %}

{% image /directory-connector/dc-diagram.png %}

A Directory Connector sync operation can be run on-demand or automatically on a configured interval. Directory Connector applications can be installed as an agent on the server that hosts your directory, an administrator's workstation, or any other desktop device that can access the source directory.

Directory Connector supports sync from the following sources:

- [Active Directory]({% link _articles/directory-connector/ldap-directory.md%})
- [Any LDAP-based directory]({% link _articles/directory-connector/ldap-directory.md %})
- [Azure Active Directory]({% link _articles/directory-connector/azure-active-directory.md %})
- [G Suite]({% link _articles/directory-connector/gsuite-directory.md %})
- [Okta]({% link _articles/directory-connector/okta-directory.md %})
- [OneLogin]({% link _articles/directory-connector/onelogin-directory.md %})

## Directory Connector Applications

Directory Connector is available as a cross-platform [Desktop Application]({% link _articles/directory-connector/directory-sync-desktop.md %}) and as a [Command Line Interface (CLI)]({% link _articles/directory-connector/directory-sync-cli.md %}). The Desktop App and CLI [share a database and configurations]({% link _articles/directory-connector/directory-sync-shared.md %}), so you may choose to use both, however simultaneous use is not recommended.

{% image directory-connector/app.png Directory Connector Desktop App %}

### Download Directory Connector

Use the following links to download Directory Connector:

#### Download the Desktop App

Download the latest version of the Directory Connector Desktop App from our [GitHub releases page](https://github.com/bitwarden/directory-connector/releases){:target="_blank"} or by using one of the following official links:

- [{% icon fa-windows %} Windows Installer (.exe)](https://vault.bitwarden.com/download/?app=connector&platform=windows)
- [{% icon fa-windows %} Windows Portable (.exe)](https://vault.bitwarden.com/download/?app=connector&platform=windows&variant=portable)
- [{% icon fa-apple %} macOS (.dmg)](https://vault.bitwarden.com/download/?app=connector&platform=macos)
- [{% icon fa-linux %} Linux (.AppImage)](https://vault.bitwarden.com/download/?app=connector&platform=linux)

#### Download the CLI Tool

Download the latest version of the Directory Connector CLI from one of the following links:

- [{% icon fa-windows %} Windows CLI (.exe)](https://vault.bitwarden.com/download/?app=connector&platform=windows&variant=cli-zip)
- [{% icon fa-apple %} macOS CLI](https://vault.bitwarden.com/download/?app=connector&platform=macos&variant=cli-zip)
- [{% icon fa-linux %} Linux CLI](https://vault.bitwarden.com/download/?app=connector&platform=linux&variant=cli-zip)

## Source code

As with everything at Bitwarden, the Directory Connector is open source and hosted on GitHub at [github.com/bitwarden/directory-connector](https://github.com/bitwarden/directory-connector).
