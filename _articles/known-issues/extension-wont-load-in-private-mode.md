---
layout: article
title: Extension won't load in Firefox Private Browsing
categories: [Known Issues]
featured: false
popular: false
tags: [firefox, extension, private mode, private browsing]
---

## Issue
The bitwarden extension does not load/appears blank when I open it in Firefox Private Browsing.

## Details
This is a known issue with Firefox that Mozilla is unwilling to fix.

>It is due to the popup being unable to communicate with the background page during private mode. Mozilla claims that inter-window communication should not be allowed in private mode.

## Workaround
If you are looking to auto-fill usernames and passwords while in Firefox Private Browsing, please visit [https://help.bitwarden.com/article/auto-fill-firefox-private-mode](/article/auto-fill-firefox-private-mode/#workaround).

## References
1. bitwarden discussion - <https://github.com/bitwarden/browser/issues/136>
2. FireFox Bugzilla - <https://bugzilla.mozilla.org/show_bug.cgi?id=1329304>
