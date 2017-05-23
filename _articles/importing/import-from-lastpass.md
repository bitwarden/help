---
layout: article
title: Importing your data from LastPass
categories: [Getting Started]
featured: true
popular: true
tags: [import, lastpass]
---

Importing your data from LastPass into bitwarden is easy. 

{% alert warning %}
It is recommended to export through the LastPass web vault in order to avoid known bugs with the LastPass extension exporter.
{% endalert %}

## Export your sites from the LastPass.com web vault

1. Log into your LastPass account and navigate to "More Options" > "Advanced" > "Export". 
2. This will take you to a page that then asks you to enter your LastPass master password for verification. Enter your LastPass master password.
3. Your data will be decrypted and shown on screen in [CSV][csv] format.
4. Highlight all of the data on the page and copy it to your clipboard.
5. Create a new text file on your desktop called "lastpass_export.csv".
6. Edit this file, paste your CSV data that was copied from step 4. Save.

## Import your sites into bitwarden

1. Go to the [bitwarden web vault][bitwarden-vault] and log in.
2. Navigate to "Tools" > "Import".
3. Select "LastPass" as the source and select your "lastpass_export.csv" file from the desktop that you created in step 5 above.
4. Click the "Import" button.

Congratulations! You have just transferred all of your data from LastPass into bitwarden.

[csv]: https://en.wikipedia.org/wiki/Comma-separated_values
[bitwarden-vault]: https://vault.bitwarden.com
