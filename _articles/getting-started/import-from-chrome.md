---
layout: article
title: Import Your Account Data From Google Chrome
category: Getting Started
featured: true
popular: true
tags: [import, chrome]
---

Importing your data from Google Chrome into bitwarden is easy. 

**Export Your Chrome Passwords**

1. Open Chrome and enter `chrome://flags/#password-import-export` into the address bar and press enter. This will open 
   the Chrome system flags page.
2. Look for the "Password import and export" option and change the dropdown option to "Enabled".
3. A prompt will pop up from the bottom asking you to "Relaunch Now". Click the button to restart the browser so that the
   changes can take effect.
4. After relaunching the browser, enter `chrome://settings/passwords` into the address bar and press enter. This will
   open a window with all your saved passwords for Chrome.
5. Scroll down through the list and look for the "Export" and "Import" buttons at the end of the list.
6. Click the "Export" button. You'll be prompted to enter your computer's password for authorization.
7. Once your computer's password is entered and validated, you can save your passwords to a [CSV][csv] file on your
   computer. Save this file to your desktop as `chromedata.csv`.

**Import Your Chrome Passwords Into bitwarden**

1. Go to the [bitwarden web vault][bitwarden-vault] and log in.
2. Navigate to "Tools" > "Import".
3. Select "Chrome (csv)" as the source and select your `chromedata.csv` file from the desktop that you created in step 7
   above.
4. Click the "Import" button.

Congratulations! You have just transferred all of your data from Google Chrome into bitwarden.

[csv]: https://en.wikipedia.org/wiki/Comma-separated_values
[bitwarden-vault]: https://vault.bitwarden.com
