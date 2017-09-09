---
layout: article
title: Extension won't load in Firefox's private mode
categories: [miscellaneous]
featured: false
popular: false
tags: [firefox, extension, private window, private mode, private browsing]
---

The bitwarden browser extension does not completely function in Firefox's private browsing mode. This is a known issue specific only to Firefox. You will see a message indicating so when you try to open the bitwarden popup window in a private window. We have discussed the problem with Mozilla, however, they seem unable to fix it so that extensions like bitwarden can function entirely in private mode.

As a workaround, if you are looking to auto-fill a login while in a private window you can use the right-click context menu:

1. Navigate to the website's login page while browsing in a private window.
2. Right click the page. A context menu will appear.
3. Select **bitwarden** &rarr; **Auto-fill** and then pick your login.

Alternatively, you can also copy/paste your login credentials by accessing your vault in the popup from a regular, non-private browsing window.

## References

- GitHub discussion: <https://github.com/bitwarden/browser/issues/136>
- Firefox Bugzilla report: <https://bugzilla.mozilla.org/show_bug.cgi?id=1329304>
