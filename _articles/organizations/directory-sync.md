---
layout: article
title: Syncing users and groups with a directory
categories: [Organizations]
featured: true
popular: false
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

### Table of Contents

- [Install](#install)
- [Log in to your bitwarden organization account](#log-in-to-your-bitwarden-organization-account)
- [Configure the directory connection](#configure-the-directory-connection)
- [Configure sync options](#configure-sync-options)
- [Manually simulate a sync](#manually-simulate-a-sync)
- [Perform a sync](#perform-a-sync)
- [Manage the background service](#manage-the-background-service)
- [Changing configurations manually](#changing-configurations-manually)

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
Console.exe login -e -p [-t] [-o]
```

| Description     | Argument | Example Value                        | Required |
|-----------------|----------|--------------------------------------|----------|
| Email           | -e       | user@example.com                     | y        |
| Password        | -p       | mypassword123                        | y        |
| 2FA Token       | -t       | 381119                               | n        |
| Organization Id | -o       | acadad98-b666-498d-b89f-f220f21e453f | n        |

You can also log out with the following command:

```
Console.exe logout
```

### Configure the directory connection

1. Launch the Directory Connector console by double clicking the shortcut. 
2. Select option 3 (Configure directory connection) from the main menu.
3. Select the type of directory server you are configuring.
4. Step through and set each configuration setting for the directory server type that you selected in step 3. The settings are different for each type of directory. You can read more about setting up each type of directory connection in the articles below:
   - Active Directory & Other LDAP-based directories
   - Azure Active Directory
   - GSuite (Google)

Optionally, from the command line:

```
Console.exe configdir -t [azure: -i -s -te] [gsuite: -f -u [-d] [-c]] [ad/ldap: -a -path [-port] [-cu] [-u] [-p]]
```

| Description     | Argument | Example Value                        | Required | Notes                                    |
|-----------------|----------|--------------------------------------|----------|------------------------------------------|
| Type            | -t       | 1                                    | y        | AD = 0, Azure = 1, Other = 2, GSuite = 3 |

#### Azure

| Description    | Argument | Example Value                        | Required |
|----------------|----------|--------------------------------------|----------|
| Application Id | -i       | 0f82b419-c5b3-4b63-8afc-67d240da85a6 | y        |
| Secret Key     | -s       | c2VjcmV0X2tleQ==                     | y        |
| Tenant         | -te      | mycompany.onmicrosoft.com            | y        |

#### GSuite

| Description | Argument | Example Value      | Required |
|-------------|----------|--------------------|----------|
| Secret File | -f       | client_secret.json | y        |
| Admin User  | -u       | admin@company.com  | y        |
| Domain      | -d       | company.com        | y        |
| Customer Id | -c       | 39204722352        | n        |

#### Active Directory / Other LDAP

| Description  | Argument | Example Value       | Required |
|--------------|----------|---------------------|----------|
| Address      | -a       | company.local       | y        |
| Port         | -port    | 389                 | n        |
| Root Path    | -path    | DC=company,DC=local | y        |
| Current User | -cu      | n/a                 | n        |
| Username     | -u       | admin@company.com   | n        |
| Password     | -p       | mypassword          | n        |

{% note %}
Any sensitive information such as secret keys and server passwords are encrypted and stored locally in the settings file.
{% endnote %}

### Configure sync options

1. Launch the Directory Connector console by double clicking the shortcut.
2. Select option 4 (Configure sync) from the main menu.
3. Step through and set each sync configuration setting. Some settings are dependent on the type of directory connection you are using.

Optionally, from the command line:

```
Console.exe configsync [-g] [-u] [-i] [-uf] [-gf] [-rd] [ad/ldap: [-go] [-gp] [-gf] [-gn] [-uo] [-up] [-ue] [-m] [-ps] [-ep] [-c] [-r]]
```

### Manually simulate a sync

You can simulate a directory sync in order to check that all of your configuration settings are setup and working as expected. A sync simulation will query the directory server and print the results to the screen. The results that you see printed to the screen will be what is uploaded and synced to your bitwarden organization whenever a real sync is invoked.

1. Launch the Directory Connector console by double clicking the shortcut.
2. Select option 5 (Simulate directory sync) from the main menu.
3. Review the results that are printed in the console window for accuracy.

Optionally, from the command line:

```
Console.exe sim
```

### Perform a sync

1. Launch the Directory Connector console by double clicking the shortcut.
2. Select option 6 (Sync directory) from the main menu.

Optionally, from the command line:

```
Console.exe sync
```

### Manage the background service

The background service allows sync operations to run in the background based on the interval set in your sync configuration.

1. Launch the Directory Connector console by double clicking the shortcut.
2. Select option 7 (Control background service) from the main menu.
3. Select the option you wish to perform: Start, Stop, or Check Status.

Optionally, from the command line:

```
Console.exe service [-start] [-stop]
```

| Description | Argument | Example Value | Required |
|-------------|----------|---------------|----------|
| Start       | -start   | n/a           | n        |
| Stop        | -stop    | n/a           | n        |

{% note %}
The application must be run in administrator mode to be able to manage the background service.
{% endnote %}

Alternatively, you can also manage the background service from the windows service manager window.

1. Open the windows start menu.
2. Search for "Services" and select the Services application.
   - If you do not find the "Services" application by searching, you can also open it from the "Run" window by typing `services.msc`.

{% tip %}
You can configure the bitwarden Directory Connector to run automatically each time the machine starts. Use the windows service manager to set the bitwarden Directory Connector service to "Startup type: Automatic".
{% endtip %}

### Changing configurations manually

All configuration data is saved to a `.json` configuration file stored on the local computer. No configuration data in synced to bitwarden servers. You can find the configuration file in it's default location at `C:/ProgramData/bitwarden/Directory Connector/settings.json`. Any changes that you make directory to the configuration file will require you to restart the application (if it is currently running).

{% note %}
Some configuration data that is stored in the settings file, such as LDAP server credentials, is encrypted. Therefore, you cannot edit it directly in this file. Any encrypted data must be managed through the application normally.
{% endnote %}