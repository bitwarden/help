---
layout: article
title: Import your data from Google Chrome
categories: [getting-started]
featured: true
popular: false
tags: [import, chrome, opera, vivaldi]
---

Importing your data from Google Chrome into bitwarden is easy. 

{% note %}
The process is exactly the same for Opera and Vivaldi browser users.
{% endnote %}

## Export your Chrome passwords

1. Open Chrome and enter `chrome://flags/#password-import-export` into the address bar and press enter. This will open the Chrome system flags page.
2. Look for the "Password import and export" option (it should be highlighted at the top of your page) and change the dropdown option to "Enabled".
3. We also need to disable material design for the settings page so that the export button shows up (see [this topic](https://productforums.google.com/forum/?utm_medium=email&utm_source=footer#!topic/chrome/99KZmH2DRrA){:target="blank"} for more information). Enter `chrome://flags/#enable-md-settings` into the address bar and press enter. This should navigate you to another setting for "Enable Material Design settings" (it should be highlighted at the top of your page). Change the dropdown option to "Disabled".
3. A prompt will pop up from the bottom asking you to "Relaunch Now". Click the button to restart the browser so that the changes can take effect.
4. After relaunching the browser, enter `chrome://settings/passwords` into the address bar and press enter. This will open a window with all your saved passwords for Chrome.
5. Scroll down through the list and look for the "Export" and "Import" buttons at the end of the list.
6. Click the "Export" button. You'll be prompted to enter your computer's password for authorization.
7. Once your computer's password is entered and validated, you can save your passwords to a [CSV][csv] file on your computer. Save this file to your desktop as `chromedata.csv`.

{% note %}
If you would like to, you can now go back and enable material design for the settings page. This is optional. You can complain to the Chrome team about removing the password export button in [this topic](https://productforums.google.com/forum/?utm_medium=email&utm_source=footer#!topic/chrome/99KZmH2DRrA){:target="blank"} on their user forums.
{% endnote %}

## Import your passwords into bitwarden

1. Go to the [bitwarden web vault][bitwarden-vault] and log in.
2. Navigate to "Tools" > "Import".
3. Select "Chrome (csv)" as the file format and select your `chromedata.csv` file from the desktop that you created in step 7 above.
4. Click the "Import" button.

Congratulations! You have just transferred all of your data from Google Chrome into bitwarden.

[csv]: https://en.wikipedia.org/wiki/Comma-separated_values
[bitwarden-vault]: https://vault.bitwarden.com
