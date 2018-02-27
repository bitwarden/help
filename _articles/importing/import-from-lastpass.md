---
layout: article
title: Import your data from LastPass
categories: [getting-started]
featured: true
popular: true
tags: [import, lastpass]
---

Importing your data from LastPass into Bitwarden is easy. 

## Export your sites from the LastPass.com web vault

1. Log into your LastPass account at www.lastpass.com and navigate to **More Options** (at the very bottom of the left sidebar menu) &rarr; **Advanced** &rarr; **Export**.<br />
   {% image lastpass-options.png %}
2. This will take you to a page that then asks you to enter your LastPass master password for verification. Enter your LastPass master password.<br />
   {% image lastpass-password.png %}
3. Your data will be decrypted and shown on screen in [CSV][csv] format.
4. Highlight all of the data on the page and copy it to your clipboard.
   - Highlight all of the data with your mouse (or simply press <code>Ctrl + A</code>), then right click with your mouse and select **Copy**.<br />
   {% image lastpass-copy.png %}

{% warning %}
There are known bugs (for years now) with the LastPass exporter regarding special characters such as the ampersand (<code>&amp;</code>), the greater than sign (<code>&gt;</code>), and the less than sign (<code>&lt;</code>). The LastPass exporter may change (HTML encode) these and possibly other special characters in your passwords to their respective HTML encoded values (ex. <code>&amp;amp;</code>, <code>&amp;gt;</code>, and <code>&amp;lt;</code>). If this LastPass bug affects your exported data you should use a text editor (such as Notepad) to find and replace all of these values before importing into Bitwarden. For example, you may want to do a find and replace for <code>&amp;amp;</code> &rarr; <code>&amp;</code> and <code>&amp;lt;</code> &rarr; <code>&lt;</code>).
{% endwarning %}

## Import your data into Bitwarden

1. Go to the [Bitwarden web vault][bitwarden-vault] and log in.
2. Navigate to **Tools** &rarr; **Import Data**.
3. Select **LastPass** as the file format and paste the [CSV][csv] content into the textbox that you copied to your clipboard in step 4 above.
   - Click into the textbox with your mouse, then right click with your mouse and select **Paste**.
4. Click the **Import** button.

Congratulations! You have just transferred all of your data from LastPass into Bitwarden.

## Importing form fills (optional)

LastPass does not include form fills with the standard export from the LastPass web vault. If you want to import form fill information into Bitwarden you can export the form fill CSV data from the LastPass browser extension.

{% note %}
You can only export form fill data from the LastPass browser extension.
{% endnote %}

1. Click the LastPass icon from the browser toolbar to open the LastPass popup interface.
2. Navigate to **More options** &rarr; **Advanced** &rarr; **Export** &rarr; **Form Fills**.
3. This will take you to a page that then asks you to enter your LastPass master password for verification. Enter your LastPass master password.
4. Your data will be decrypted and shown on screen in [CSV][csv] format.
5. Highlight all of the data on the page and copy it to your clipboard.
   - Highlight all of the data with your mouse (or simply press <code>Ctrl + A</code>), then right click with your mouse and select **Copy**.
6. Follow the same import steps in [Import your data into Bitwarden](#import-your-data-into-bitwarden).

[csv]: https://en.wikipedia.org/wiki/Comma-separated_values
[bitwarden-vault]: https://vault.bitwarden.com
