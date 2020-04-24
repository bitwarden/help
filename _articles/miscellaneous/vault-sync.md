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

Vault syncing is purely downloading the latest content from your Bitwarden vault onto your device for access. In some cases, this happens automatically. On iOS and Android apps, Bitwarden leverages push notifications to kick-off a vault synchronization.

In some cases, this isn’t available, for instance, Organization (shared) vault items must be synchronized manually.

## When does my vault sync?

Bitwarden mobile apps for iOS and Android will automatically sync when new changes are made to the vault. These changes can come from other devices adding or editing items, or by making those edits directly in the web vault.

### Mobile APPS

The Bitwarden mobile apps sync **personal** vaults automatically.
Organization vaults are synchronized on-demand by navigating to:
**Settings > Sync > Sync Vault now**

{%note%}Self-hosted users can enable Push notifications powered by the Bitwarden cloud.{%endnote%}

### Browser extensions

The Bitwarden browser extensions sync **personal** vaults automatically.
Organization vaults are synchronized on-demand by navigating to:
**Settings > Sync > Sync Vault now**

### Desktop applications

The Bitwarden desktop apps sync **personal** vaults automatically.
Organization vaults are synchronized on-demand by navigating to: **File > Sync Vault**

### Command-line interface

The Bitwarden CLI client syncs **personal** vaults automatically.
Organization vaults are synchronized on-demand by running the command: ```bw sync```

## Common issues

- Pulling to refresh on mobile applications does **not** sync your vault. You must do so within the application settings
- Sync failure can occur if your device’s time is not correct. Syncing (and all of Bitwarden services) require SSL, which will fail to connect to a host with invalid timestamps.
