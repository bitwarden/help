---
layout: article
title: Clear Sync Cache
categories: [directory-connector]
featured: true
popular: false
tags: []
order: 06
---

Directory Connector keeps a local cache while syncing changes to your Bitwarden Organization. This cache allows Directory Connector to **only send the deltas between the two directories** (before / after).

If you encounter sync errors, or if a particular directory change is not being synced as expected, you should clear this cache. Clearing the cache will trigger a full sync to occur during the next sync operation.

To clear the local cache:

1. Open the Directory Connector [Desktop Application]({% link _articles/directory-connector/directory-sync-desktop.md %}).
2. Navigate to the **More** tab.
3. In the **Other** section, select the **Clear Sync Cache** button.
