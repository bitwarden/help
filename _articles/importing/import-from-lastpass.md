---
layout: article
title: Import your data from LastPass
categories: [Getting Started]
featured: true
popular: true
tags: [import, lastpass]
---

Importing your data from LastPass into bitwarden is easy. 

{% warning %}
It is recommended to export through the LastPass.com web vault in order to avoid known bugs with the LastPass extension exporter.

If you use the LastPass browser extension to export your sites, your password data could be corrupted.
{% endwarning %}

## Export your sites from the LastPass.com web vault

1. Log into your LastPass account and navigate to "More Options" > "Advanced" > "Export". 
2. This will take you to a page that then asks you to enter your LastPass master password for verification. Enter your LastPass master password.
3. Your data will be decrypted and shown on screen in [CSV][csv] format.
4. Highlight all of the data on the page and copy it to your clipboard.
   - Highlight all of the data with your mouse, then right click with your mouse and select "Copy".

## Import your sites into bitwarden

1. Go to the [bitwarden web vault][bitwarden-vault] and log in.
2. Navigate to "Tools" > "Import".
3. Select "LastPass" as the file format and paste the [CSV][csv] content into the textbox that you copied to your clipboard in step 4 above.
   - Click into the textbox with your mouse, then right click with your mouse and select "Paste".
4. Click the "Import" button.

Congratulations! You have just transferred all of your data from LastPass into bitwarden.

[csv]: https://en.wikipedia.org/wiki/Comma-separated_values
[bitwarden-vault]: https://vault.bitwarden.com
