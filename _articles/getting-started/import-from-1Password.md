---
layout: article
title: Import Your Account Data From 1Password
category: Getting Started
featured: true
popular: true
tags: [import, 1Password]
---

Importing your data from 1Password into bitwarden is easy.

**From the 1Password application**

1. Open 1Password on your computer. Enter your master password to unlock your vault.
2. Select the vault you want to export. It’s not possible to export from “All Vaults”, so you’ll need to switch to a specific vault.
3. Look under Categories for Logins. Click on it and highlight all the login items. On macOS, use command + a. On Windows, use control + a.
4. Navigate to "File" > "Export" > "Selected Items". It will prompt for your 1Password master password. To proceed, enter your master password.
5. The export window will give you the option of the file format to use. Ensure the selected one is default file format "1Password Interchange Format (.1pif)".
6. Select a folder to save your export to. It is recommended to use your desktop folder and hit save to export your password data.
7. Go to the [bitwarden web vault][bitwarden-vault] and log in.
8. Navigate to "Tools" > "Import".
9. Select "1Password" as the source and select your "1Password.1pif/data.1pif" file from the desktop that you created in step 6.
10. Click the "Import" button.

Congratulations! You have just transferred your data from 1Password into bitwarden.

[bitwarden-vault]: https://vault.bitwarden.com
