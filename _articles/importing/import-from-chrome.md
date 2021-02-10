---
layout: article
title: Import Data from Google Chrome
categories: [import-export]
featured: true
popular: false
tags: [import, chrome, opera, vivaldi, edge]
order: 04
---

Use this article for help exporting data from Google Chrome and importing into Bitwarden.

{% callout info %}
The steps in this article can also be used with the following browsers:
- Opera
- Microsoft Edge (Chromium)
- Brave
- Vivaldi
{% endcallout %}

## Export from Chrome

### From a Desktop

Complete the following steps to export passwords from Chrome on your Desktop:

1. Using the address bar, navigate to `chrome://settings/passwords`.
2. Select the {% icon fa-ellipsis-v %} menu button in the Saved Passwords section, and select **Export passwords...** from the dropdown.

   You may be prompted to enter your computer's password for authorization.
3. Specify a location to save your export to, and select **comma-separated values** from the **Format:** field.
4. Select **Save** to finish exporting from Chrome.

### From a Mobile Device

Complete the following steps to export passwords from Chrome on your Mobile Device:

1. Tap the {% icon fa-ellipsis-h %} menu button and tap **Settings**.
2. Tap **Passwords**.
3. Tap **Export Passwords**.

   You may be prompted to enter your device PIN or a biometric for authorization.
4. Specify a location to save your export to.

## Import to Bitwarden

Complete the following steps to import data to your Bitwarden personal Vault (for help importing to an Organization Vault, see [Import Items to an Organization]({% link _articles/organizations/import-to-org.md %})):

1. Log in to the [Web Vault](https://vault.bitwarden.com){:target="\_blank"}.
2. Select **Tools** from the top navigation bar.
3. Select **Import Data** from the left Tools menu.
4. Select **Chrome (csv)** from the format dropdown.
5. Select the **Browse...** button and add the file exported from Chrome.
6. Select the **Import Data** button to complete your import.

{% callout warning %}
Importing data multiple times will create duplicates.
{% endcallout %}

Congratulations! You have just transferred your data from Chrome into Bitwarden.
