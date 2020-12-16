---
layout: article
title: Import Data from Firefox
categories: [import-export]
featured: true
popular: false
tags: [import, firefox]
order: 05
---

Use this article for help exporting data from Firefox and importing into Bitwarden.

## Export from Firefox

### From Latest Version of Firefox

Complete the following steps to export your logins from the latest version of Firefox:

1. Using the address bar, navigate to `about:logins`
2. Select the {% icon fa-ellipsis-h %} menu button from the top right and select **Export Logins...** from the dropdown.

   You will be prompted to specify a location to save your login export to.

   Firefox will export your logins as a `.csv`.

### From Older Versions of Firefox

Some older versions of Firefox do not support native export. Complete the following steps to export using an FF Password Exporter.

1. [Download](https://github.com/kspearrin/ff-password-exporter){:target="\_blank"}, install, and open the FF Password Exporter.
2. Select a User Profile from the Detected Firefox User Profiles, or from a specified custom profile directory. If you have set a Master Password for the User Profile, enter it:

   {% image importing/ff-password-exporter.png %}
3. Select the **Export Passwords** button.
4. Choose `.csv` for the file format, and save the file to your device.

### From Firefox-based Browsers

Some Firefox-based browsers offer login export in a different location than vanilla Firefox. If exporting [From Latest Version of Firefox](#from-latest-version-of-firefox) doesn't work, try the following:

1. Using the address bar, navigate to `about:preferences#privacy`.
2. Click the **Saved Logins** button.
3. Click the {% icon fa-ellipsis-h %} menu button from the top right and select **Export Logins** from the dropdown.

   You will be prompted to specify a location to save your login export.

   Most Firefox-based browsers will export your logins as a `.csv`.

## Import to Bitwarden

Complete the following steps to import data to your Bitwarden personal Vault (for help importing to an Organization Vault, see [Import Items to an Organization]({% link _articles/organizations/import-to-org.md %})):

1. Log in to the [Web Vault](https://vault.bitwarden.com){:target="\_blank"}.
2. Select **Tools** from the top navigation bar.
3. Select **Import Data** from the left Tools menu.
4. Select **Firefox (csv)** from the format dropdown.
5. Select the **Browse...** button and add the file exported from Firefox.
6. Select the **Import Data** button to complete your import.

{% callout warning %}
Importing data multiple times will create duplicates.
{% endcallout %}

Congratulations! You have just transferred your data from Firefox into Bitwarden.
