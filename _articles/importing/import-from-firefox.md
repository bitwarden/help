---
layout: article
title: Import your data from Firefox
categories: [getting-started]
featured: true
popular: false
tags: [import, firefox]
---

## FIREFOX EXPORTS

If your version of Firefox does not support native export, please use the FF Password Exporter instructions below.

## EXPORT YOUR PASSWORDS USING NATIVE FIREFOX EXPORT

1. Navigate to `about:logins` in Firefox.
2. Click the `...` menu from the top right and choose 'Export Logins'.
3. Firefox will now prompt where to save the exported CSV file.

## EXPORT YOUR FIREFOX PASSWORDS USING FF PASSWORD EXPORTER

1. [Download][link-ffexporter] and install/run FF Password Exporter. The installation file is under Download/Install section.
2. Choose the Firefox user's profile directory you want to export passwords from.
If you have set a master password to protect your Firefox passwords, enter it.
{% image importing/ff-password-exporter.png %}
3. Click the export button.
4. Choose your file format [CSV][csv], and save the file to your device.

## IMPORT YOUR FIREFOX PASSWORDS INTO BITWARDEN

1. Go to the [Bitwarden web vault][bitwarden-vault] and log in.
2. Navigate to **Tools** &rarr; **Import Data**.
3. Select **Firefox (csv)** as the file format and select your data file from the desktop that you created in the last step from above.
4. Click the **Import Data** button.

Congratulations! You have just transferred your data from Firefox into Bitwarden.

[bitwarden-vault]: https://vault.bitwarden.com
[link-ffexporter]: https://github.com/kspearrin/ff-password-exporter
[csv]: https://en.wikipedia.org/wiki/Comma-separated_values
