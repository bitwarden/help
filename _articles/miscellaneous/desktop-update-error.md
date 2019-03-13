---
layout: article
title: Resolving desktop application update errors
categories: [miscellaneous]
featured: false
popular: false
tags: [update, desktop, error]
---

When updating the Bitwarden desktop application on Windows, you may receive the following error:

```
A JavaScript error occurred in the main process

Uncaught Exception:
Error: spawn
C:\Users\Username\AppData\Roaming\Bitwarden\__update__\Bitwarden-Installer-1.14.0.exe
EACCES
    at Process.ChildProcess._handle.onexit (internal/child_process.js:229:19)
    at onErrorNT (internal/child_process.js:406:16)
    at process._tickCallback (internal/process/next_tick.js:63:19)
```

{% image update-error.png %}

## Solution

This error occurs whenever there is a permissions problem running the Bitwarden updater. This prevents the updater from running and installing the latest version of the application. This issue has been resolved in current versions of the application and should no longer occur if you are running the latest version of Bitwarden.

You can resolve this problem by temporarily running Bitwarden in Administrator Mode.

1. Right click the **Bitwarden** shortcut icon on your desktop or from the Windows start menu.
2. Select **Run as administrator**. From the start menu, this option may be under the **More** sub-menu.
3. Select **Yes** from the prompt.

This will launch Bitwarden in administrator mode and allow it to finish updating.

If for whatever reason you are not able to run the application in administrator mode, we recommend reinstalling the application to the latest version to workaround the problem. You can download the latest version of the Bitwarden desktop application for Windows from [our website](https://bitwarden.com/#download).
