---
layout: article
title: Syncing users and groups with a directory
categories: [Organizations]
featured: true
popular: false
hidden: true
tags: []
---

bitwarden supports syncing users and/or groups from outside directories through the use of the **bitwarden Directory Connector** tool.

The following directories are supported:

- Active Directory
- Azure Active Directory
- GSuite (Google)
- Any other LDAP-based directory

{% note %}
Directory sync is only available to enterprise organizations.
{% endnote %}

## bitwarden Directory Connector Tool

The bitwarden Directory Connector is a windows-based console application (CLI) that allows you to keep your bitwarden organization and user directory in sync. Directory Connector can be run on-demand manually as well as automatically in the background on an configured interval through the use of the included windows service. The tool provides a console-based UI in addition to a full array of command line arguments.

You can install and run Directory Connector on the server that hosts your directory, an administrator's machine, or any other windows-based device than can access the directory.

### Install

1. Download the latest version of the Directory Connector installer (`.msi`) from our GitHub releases page.
   <br />
   [{% icon fa-download %} Download Directory Connector Installer](https://github.com/bitwarden/directory-connector/releases){:target="_blank"}
2. Launch the setup wizard by running (double-clicking) the downloaded `.msi` installer.
3. Step through the wizard and complete the installation.
4. After the setup wizard has successfully completed, you should find a shortcut on your desktop for **Directory Connector** with the bitwarden logo {% icon fa-shield %}. The full path to the application can be found at `{install_folder}/Console.exe`.

### Log in to your bitwarden organization account

1. Launch the Directory Connector console by double clicking the shortcut.
2. Select option 1 (Log in to bitwarden) from the main menu.
3. Enter your bitwarden login credentials.
4. If your bitwarden account belongs to more than one organization you will be prompted to select an organization.

Optionally, from the command line:

```
Console.exe -e -p [[-t] [-o]]
```

| Description     | Argument | Required | Example                                |
|-----------------|----------|----------|----------------------------------------|
| Email           | -e       | y        | user@example.com                       |
| Password        | -p       | y        | mypassword123                          |
| 2FA Token       | -t       | n        | 381119                                 |
| Organization Id | -o       | n        | `acadad98-b666-498d-b89f-f220f21e453f` |


### Configure the directory connection

1. Launch the Directory Connector console by double clicking the shortcut. 
2. Select option 3 (Configure directory connection) from the main menu.

### Configure sync options

1. Launch the Directory Connector console by double clicking the shortcut.
2. Select option 4 (Configure sync) from the main menu.

### Manually simulate a sync

1. Launch the Directory Connector console by double clicking the shortcut.
2. Select option 5 (Simulate directory sync) from the main menu.

### Perform a sync

1. Launch the Directory Connector console by double clicking the shortcut.
2. Select option 6 (Sync directory) from the main menu.

### Manage the background service

1. Launch the Directory Connector console by double clicking the shortcut.
2. Select option 7 (Control background service) from the main menu.

### Changing configurations

