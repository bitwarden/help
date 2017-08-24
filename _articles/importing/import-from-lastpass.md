---
layout: article
title: Import your data from LastPass
categories: [getting-started]
featured: true
popular: true
tags: [import, lastpass]
---

Importing your data from LastPass into bitwarden is easy. 

## Export your sites from the LastPass.com web vault

1. Log into your LastPass account at www.lastpass.com and navigate to "More Options" (at the very bottom of the left sidebar menu) > "Advanced" > "Export".<br />
   {% image lastpass-options.png %}
2. This will take you to a page that then asks you to enter your LastPass master password for verification. Enter your LastPass master password.<br />
   {% image lastpass-password.png %}
3. Your data will be decrypted and shown on screen in [CSV][csv] format.
4. Highlight all of the data on the page and copy it to your clipboard.
   - Highlight all of the data with your mouse (or simply press <code>Ctrl + A</code>), then right click with your mouse and select "Copy".<br />
   {% image lastpass-copy.png %}

{% warning %}
There are known bugs with the LastPass exporter regarding the ampersand character (<code>&amp;</code>). The LastPass exporter may change all ampersand characters in your passwords to the value <code>&amp;amp;</code>. If this LastPass bug affects your export you should use a text editor (such as notepad) to find/replace all values <code>&amp;amp;</code> with <code>&amp;</code> before importing into bitwarden.
{% endwarning %}

## Import your sites into bitwarden

1. Go to the [bitwarden web vault][bitwarden-vault] and log in.
2. Navigate to "Tools" > "Import".
3. Select "LastPass" as the file format and paste the [CSV][csv] content into the textbox that you copied to your clipboard in step 4 above.
   - Click into the textbox with your mouse, then right click with your mouse and select "Paste".
4. Click the "Import" button.

Congratulations! You have just transferred all of your data from LastPass into bitwarden.

[csv]: https://en.wikipedia.org/wiki/Comma-separated_values
[bitwarden-vault]: https://vault.bitwarden.com
