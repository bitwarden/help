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

The Bitwarden Directory Connector application syncs users and groups to a Bitwarden Organization from a selection of directory services. Directory Connector **will automatically provision and de-provision users, groups, and group associations** from the source directory.

Directory Connector will issue invitations to synced users, however it will not automatically construct Bitwarden credentials based on any credentials stored in the source directory. Invited users will be required to follow the normal Organization [onboarding procedure]({{site.baseurl}}/article/managing-users/#onboard-users) and log in with the created Bitwarden Master Password.

{% callout info %}
Directory Connector functionality is available to **Teams** and **Enterprise** Organizations. To use Directory Connector, you must have access to your [Organization API Key]({{site.baseurl}}/article/public-api/#authentication) which can only be retrieved by an [Organization Owner]({{site.baseurl}}/article/user-types-access-control/) and securely shared using [Bitwarden Send]({{site.baseurl}}/article/about-send/).
{% endcallout %}

{% image directory-connector/dc-diagram.png %}

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

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="desktab" data-bs-toggle="tab" data-target="#desk" role="tab" aria-controls="desk" aria-selected="true">Desktop App</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="clitab" data-bs-toggle="tab" data-target="#cli" role="tab" aria-controls="cli" aria-selected="false">CLI</a>
  </li>
</ul>

<div class="tab-content" id="clientsContent">
  <div class="tab-pane show active" id="desk" role="tabpanel" aria-labelledby="desktab">
{% capture desktop %}

#### Download Desktop App

Download the latest version of the Directory Connector Desktop App from our [GitHub releases page](https://github.com/bitwarden/directory-connector/releases){:target="_blank"} or by using one of the following official links:

- [{% icon fa-windows %} Windows Installer (.exe)](https://vault.bitwarden.com/download/?app=connector&platform=windows)
- [{% icon fa-windows %} Windows Portable (.exe)](https://vault.bitwarden.com/download/?app=connector&platform=windows&variant=portable)
- [{% icon fa-apple %} macOS (.dmg)](https://vault.bitwarden.com/download/?app=connector&platform=macos)
- [{% icon fa-linux %} Linux (.AppImage)](https://vault.bitwarden.com/download/?app=connector&platform=linux)

{% endcapture %}
{{ desktop | markdownify }}
  </div>
  <div class="tab-pane" id="cli" role="tabpanel" aria-labelledby="clitab">
{% capture commandline %}

#### Download CLI Tool

Download the latest version of the Directory Connector CLI from one of the following links:

- [{% icon fa-windows %} Windows CLI (.exe)](https://vault.bitwarden.com/download/?app=connector&platform=windows&variant=cli-zip)
- [{% icon fa-apple %} macOS CLI](https://vault.bitwarden.com/download/?app=connector&platform=macos&variant=cli-zip)
- [{% icon fa-linux %} Linux CLI](https://vault.bitwarden.com/download/?app=connector&platform=linux&variant=cli-zip)

{% endcapture %}
{{ commandline | markdownify }}
  </div>
</div>

## Source code

As with everything at Bitwarden, the Directory Connector is open source and hosted on GitHub at [github.com/bitwarden/directory-connector](https://github.com/bitwarden/directory-connector).
