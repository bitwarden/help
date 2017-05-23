---
layout: article
title: Importing your data from 1Password
categories: [Getting Started]
featured: true
popular: true
tags: [import, 1password]
---

Importing your data from 1Password into bitwarden is easy. 1Password has two versions of their application:
1Password 4 and 1Password 6. Depending on which operating system and version of 1Password and you are using,
follow the proper steps below.

## Export Your 1Password 1pif Logins

{% alert info %}
This set of instructions is only for:

- 1Password 4 users on macOS and Windows
- 1Password 6 users on macOS

These instructions may vary slightly for macOS users.
{% endalert %}

1. Open the 1Password desktop application on your computer and enter your 1Password master password to unlock
   your vault.
2. Select the vault that you wish to export. It is not possible to export from "All Vaults", so you'll need to switch
   to a specific vault.
3. Navigate to "File" > "Export" and an Export window will pop up.
4. In the Export window that pops up, select format "1Password Interchange Format (.1pif)" and "All Items".
5. Click "OK". You may be prompted to enter your master password again.
6. Select a folder to save your export file to (recommended to use your desktop folder). Click save to export your
   .1pif data file.

## Export your 1Password 6 csv logins from Windows

{% alert info %}
This set of instructions is only for:

- 1Password 6 users on Windows
{% endalert %}

1. Open the 1Password 6 desktop application on your computer and enter your 1Password master password to unlock
   your vault.
2. Select the items you want to export. Select multiple items by holding down the Ctrl key (Command on macOS) when
   clicking on them. Select all of the items by pressing Ctrl+A (Command+A on macOS) after clicking one of the items
   in the list.
3. Click the gear icon in the top right corner and then "Export".
4. Select the format "Comma Delimited Text (.csv)".
5. Select a folder to save your export file to (recommended to use your desktop folder). Enter a file name and click
   Save.

## Import your logins into bitwarden

1. Go to the [bitwarden web vault][bitwarden-vault] and log in.
2. Navigate to "Tools" > "Import".
3. Select "1Password (1pif)" or "1Password 6 Windows (csv)" as the source (depending on which path you followed above)
   and select your data file from the desktop that you created in the last step from above.
4. Click the "Import" button.

Congratulations! You have just transferred your data from 1Password into bitwarden.

[bitwarden-vault]: https://vault.bitwarden.com
