---
layout: article
title: Import Your Account Data From 1Password
category: Getting Started
featured: true
popular: true
tags: [import, 1password]
---

Importing your data from 1Password into bitwarden is easy.

**Export Your 1Password Logins**

1. Open 1Password on your computer. Enter your master password to unlock your vault.
2. Select the vault you want to export. It is not possible to export from "All Vaults", so you'll need to switch to a
   specific vault.
3. Click on the "Logins" category and highlight all listed login items (for macOS press `Command + A`, for Windows
   press `Ctrl + A`).
4. Navigate to "File" > "Export" > "Selected Items". You will be prompted for your 1Password master password. To proceed,
   enter your 1Password master password.
5. The export window will give you an option for the file format to use. Ensure the selected file format is default
   file format, "1Password Interchange Format (.1pif)".
6. Select a folder to save your export file to (recommended to use your desktop folder). Click save to export your
   password data file.

**Import Your 1Password Logins Into bitwarden**

1. Go to the [bitwarden web vault][bitwarden-vault] and log in.
2. Navigate to "Tools" > "Import".
3. Select "1Password (1pif)" as the source and select your `data.1pif` file from the desktop that you created in step 6
   above.
4. Click the "Import" button.

Congratulations! You have just transferred your data from 1Password into bitwarden.

[bitwarden-vault]: https://vault.bitwarden.com
