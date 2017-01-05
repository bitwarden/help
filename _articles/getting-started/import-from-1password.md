---
layout: article
title: Import Your Account Data From 1Password
category: Getting Started
featured: true
popular: true
tags: [import, 1password]
---

Importing your data from 1Password into bitwarden is easy. 1Password has two versions of their application:
1Password 4 and 1Password 6. Depending on which version you are using, follow the proper steps below.

**Export Your 1Password 4 Logins**

1. Open the 1Password 4 desktop application on your computer and enter your 1Password master password to unlock
   your vault.
2. Select the vault that you wish to export. It is not possible to export from "All Vaults", so you'll need to switch
   to a specific vault.
3. Navigate to "File" > "Export" and an Export window will pop up.
4. In the Export window that pops up, select format "1Password Interchange Format (.1pif)" and "All Items".
5. Click "OK". You may be prompted to enter your master password again.
6. Select a folder to save your export file to (recommended to use your desktop folder). Click save to export your
   .1pif data file.

**Export Your 1Password 6 Logins**

1. Open the 1Password 6 desktop application on your computer and enter your 1Password master password to unlock
   your vault.
2. 

**Import Your 1Password Logins Into bitwarden**

1. Go to the [bitwarden web vault][bitwarden-vault] and log in.
2. Navigate to "Tools" > "Import".
3. Select "1Password 4 (1pif)" or "1Password 6 (csv)" as the source (depending on which path you followed above) and
   select your data file from the desktop that you created in step 6 above.
4. Click the "Import" button.

Congratulations! You have just transferred your data from 1Password into bitwarden.

[bitwarden-vault]: https://vault.bitwarden.com
