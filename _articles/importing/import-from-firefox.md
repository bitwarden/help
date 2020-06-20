---
layout: article
title: Import your data from Firefox
categories: [getting-started]
featured: true
popular: false
tags: [import, firefox]
---

Since version 57, the Firefox browser no longer provides any password export addons and you will need to use third-party tools. We recommend FF Password Exporter, an open-source tool that works on Windows, macOS, and Linux distributions.

## EXPORT YOUR FIREFOX PASSWORDS

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