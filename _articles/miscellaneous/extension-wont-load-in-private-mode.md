---
layout: article
title: Extension won't load in Firefox's private mode
categories: [miscellaneous]
featured: false
popular: false
tags: [firefox, extension, private window, private mode, private browsing]
---

The Bitwarden browser extension does not completely function in Firefox's private browsing mode. This is a known issue specific only to Firefox. You will see a message indicating so when you try to open the Bitwarden popup window in a private window. We have discussed the problem with Mozilla, however, they seem unable to fix it so that extensions like Bitwarden can function entirely in private mode.

There are currently 3 workarounds for auto-filling a login while in Firefox's private browsing mode:

1. Use the right-click context menu:
   1. Navigate to the website's login page while browsing in a private window.
   2. Right click the page. A context menu will appear.
   3. Select **Bitwarden** &rarr; **Auto-fill** and then pick your login.

2. Copy/paste your login credentials by accessing your Vault in the popup from a regular, non-private browsing window.

3. Use the keyboard shortcut for auto-filling a login (CTRL + SHIFT + L by default on Windows, CMD + SHIFT + L by default on Mac)

## References

- GitHub discussion: <https://github.com/bitwarden/browser/issues/136>
- Firefox Bugzilla report: <https://bugzilla.mozilla.org/show_bug.cgi?id=1329304>
