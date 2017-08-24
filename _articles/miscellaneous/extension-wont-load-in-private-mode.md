---
layout: article
title: Extension won't load in Firefox Private Browsing mode
categories: [miscellaneous]
featured: false
popular: false
tags: [firefox, extension, private mode, private browsing]
---

The bitwarden browser extension does not function in Firefox Private Browsing mode. You will see a blank screen when opening the popup window in Private Browsing mode. This is a known issue specific only to Firefox. We have discussed the problem with Mozilla, however, they seem unwilling to fix it.

As a workaround, if you are looking to auto-fill a login while in Firefox Private Browsing you can use the right-click context menu:

1. Navigate to the website's login page in Firefox Private Browsing.
2. Right click the page. A context menu will appear.
3. Select **bitwarden -> Auto-fill -> [your login]**.

Alternatively, you can also copy/paste your login credentials by accessing your vault from the regular, non-private browsing mode.

## References

- GitHub discussion: <https://github.com/bitwarden/browser/issues/136>
- Firefox Bugzilla report: <https://bugzilla.mozilla.org/show_bug.cgi?id=1329304>
