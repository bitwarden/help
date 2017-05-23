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

{% alert info %}
Directory sync is only available to enterprise organizations.
{% endalert %}

## bitwarden Directory Connector Tool

The bitwarden Directory Connector is a windows-based console application (CLI) that allows you to keep your bitwarden organization and user directory in sync. Directory Connector can be run on-demand manually as well as automatically in the background on an configured interval through the use of the included windows service. The tool provides a console-based UI in addition to a full array of command line arguments.

You can install and run Directory Connector on the server that hosts your directory, an administrator's machine, or any other computer than can access the directory.

### Install

### Log in to your bitwarden organization account

### Configure the directory server

### Configure sync options

### Manually simulate a sync

### Perform a sync

### Manage the background service

### Changing configurations

