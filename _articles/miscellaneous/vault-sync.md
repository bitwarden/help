---
layout: article
title: Syncing your Vault
categories: [miscellaneous]
featured: false
popular: false
tags: [vault, sync, automatic, FAQ]
---

## Table of Contents

- [What is vault syncing?](#what-is-vault-syncing-)
- [When does my vault sync?](#when-does-my-vault-sync-)
  * [Mobile APPS](#mobile-apps)
  * [Browser extensions](#browser-extensions)
  * [Desktop applications](#desktop-applications)
  * [Command-line interface](#command-line-interface)
- [Common issues](#common-issues)


## What is vault syncing?

Vault syncing is purely downloading the latest content from your Bitwarden vault onto your device for access.

In some cases, this happens automatically. On iOS and Android apps, Bitwarden leverages push notifications to kick-off a **personal** vault synchronization.

**Organization Vaults** synchronize to devices every 30 minutes, or upon manual sync.

## When does my vault sync?

### Mobile APPS

The Bitwarden mobile apps sync **personal** vaults automatically.
Organization vaults are synchronized once every 30 minutes, or on-demand by navigating to:
**Settings > Sync > Sync Vault now**

{%note%}Self-hosted users can enable Push notifications powered by the Bitwarden cloud.{%endnote%}

You can also sync your vault on-demand with the pull down gesture. Navigate to **Settings > Sync > Enable sync on refresh** to enable sync on refresh.

### Browser extensions

The Bitwarden browser extensions sync **personal** vaults automatically.
Organization vaults are synchronized once every 30 minutes, or on-demand by navigating to:
**Settings > Sync > Sync Vault now**

### Desktop applications

The Bitwarden desktop apps sync **personal** vaults automatically.
Organization vaults are synchronized once every 30 minutes, or on-demand by navigating to: **File > Sync Vault**

### Command-line interface

The Bitwarden CLI client syncs **personal** vaults automatically.
Organization vaults are synchronized once every 30 minutes, or on-demand by running the command: ```bw sync```

## Common issues

- Sync failure can occur if your device’s time is not correct. Syncing (and all of Bitwarden services) require TLS/SSL, which will fail to connect to a host with invalid timestamps.
