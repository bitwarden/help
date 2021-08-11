---
layout: article
title: Get Started with Desktop Apps
categories: [getting-started]
featured: false
popular: false
hidden: false
tags: [tutorial, getting started, desktop, windows, mac, linux]
order: 05
---

Bitwarden's Desktop App brings a full Vault experience straight out of your browser and into your desktop. Using a 3-column layout, the Bitwarden Desktop App is designed to help you quickly locate the Vault item you want to use or edit:

{% image getting-started/desktop-app2.png Bitwarden Desktop App%}

- The left-most column contains your **Vault Filters**. Vault items are sorted into Types (*Login*, *Card*, *Identity*, or *Secure Note*), Folders, and Collections if you're a member of an Organization.

- The middle column contains a list of **Vault Items**. Which items appear in the list is determined by the selected Filter.

- The right-most column contains **Vault Item Information**. Which item is displayed is determined by what is selected from the list.

Bitwarden's Desktop App is available for Windows, macOS, and Linux. For help getting started, select your Operating System:

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="wintab" data-bs-toggle="tab" data-target="#windows" role="tab" aria-controls="windows" aria-selected="true"><i class="fa fa-windows"></i> Windows</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="mactab" data-bs-toggle="tab" data-target="#macos" role="tab" aria-controls="macos" aria-selected="false"><i class="fa fa-apple"></i> macOS</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="lintab" data-bs-toggle="tab" data-target="#linux" role="tab" aria-controls="linux" aria-selected="false"><i class="fa fa-linux"></i> Linux</a>
  </li>
</ul>
<div class="tab-content" id="clientsContent">
  <div class="tab-pane show active" id="windows" role="tabpanel" aria-labelledby="wintab">
{% capture winfo %}
## Bitwarden on Windows

### Get Organized with Favorites and Folders

Organizing your Vault into **Favorites** and **Folders** makes filtering your Vault a breeze.

**To add a Folder:**

1. In the Vault Filters column, select the {% icon fa-plus %} **Add** icon next to **Folders**.
2. Give your new folder a name and select {% icon fa-save %} **Save**.

**To add a Vault item to a Folder or your Favorites:**

1. Using the Vault Filter and List, open the Item Information for the item you want to organize.
2. In the Item Information panel, select the {% icon fa-pencil %} **Edit** icon.
3. Select a **Folder** from the dropdown to add this item to a folder, or check the **Favorite** checkbox to add it to your Favorites.
4. Select the {% icon fa-save %} **Save** icon.

For more information, see [Folders]({% link _articles/features/folders.md %}) and [Favorites]({% link _articles/features/favorites.md %}).

### Create New Logins

You can create new Logins, Cards, Identities, and Secure Notes directly from your Desktop App.

1. At the bottom of the Vault Item List, select the {% icon fa-plus %} **Add** icon.
2. In the Add Item panel, choose which **Type** of item to create (for example, *Login*).
3. Enter all the information for the new item (for example, *Username* and *Password*).
4. For a Login item, enter the web site or service it's used for in the **URI** field (for example, https://www.google.com).
5. Select a **Folder** from the dropdown or check the **Favorites** checkbox to organize the item in your Vault.
6. When you're finished, select {% icon fa-save %} **Save**.

You can go back and edit this item at any time using the {% icon fa-pencil %} **Edit** icon in the Item Information panel.

### Unlock with Biometrics

Biometric Unlock allows for seamless access to your Windows Desktop App using [Windows Hello](https://docs.microsoft.com/en-us/windows-hardware/design/device-experiences/windows-hello){:target="\_blank"} with PIN, Facial Recognition, or [other hardware that meets Windows Hello biometric requirements](https://docs.microsoft.com/en-us/windows-hardware/design/device-experiences/windows-hello-biometric-requirements){:target="\_blank"}.

{% callout info %}
Windows Hello must be enabled on your computer **before** it can be enabled in Bitwarden.
{% endcallout %}

{% callout success%}Windows Users may need to install the [Microsoft Visual C++ Redistributable](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads){:target="\_blank"} before Windows Hello can be turned on in Desktop Preferences.{% endcallout %}

1. In your Desktop App, select **File** &rarr; **Settings**.
2. In the Security section, an **Unlock with Windows Hello** option will appear if Windows Hello is supported and enabled on your computer:

   {% image biometrics/windows.png Windows unlock options %}

   Check the **Unlock with Windows Hello** option to proceed. Your computer will prompt you to input your biometric.

Once enabled, a new button will be presented on the Unlock screen. Selecting **Unlock with Windows Hello** will prompt you to input your biometric to initiate unlock.

{% image biometrics/hello-unlock.png Unlock with Windows Hello %}

### Start Bitwarden Automatically

Starting Bitwarden automatically when you login to your desktop can help make sure your credentials are always at your fingertips.

1. Select **File** &rarr; **Settings**.
2. Scroll to the bottom of the Options section, and check the **Start automatically on login** checkbox.

Next time you login to your desktop, the Bitwarden App will automatically open.

{% endcapture %}
{{ winfo | markdownify }}
  </div>
  <div class="tab-pane" id="macos" role="tabpanel" aria-labelledby="mactab">
{% capture minfo %}
## Bitwarden on macOS

### Get Organized with Favorites and Folders

Organizing your Vault into **Favorites** and **Folders** makes filtering your Vault a breeze.

**To add a Folder:**

1. In the Vault Filters column, select the {% icon fa-plus %} **Add** icon next to **Folders**.
2. Give your new folder a name and select {% icon fa-save %} **Save**.

**To add a Vault item to a Folder or your Favorites:**

1. Using the Vault Filter and List, open the Item Information for the item you want to organize.
2. In the Item Information panel, select the {% icon fa-pencil %} **Edit** icon.
3. Select a **Folder** from the dropdown to add this item to a folder, or check the **Favorite** checkbox to add it to your Favorites.
4. Select the {% icon fa-save %} **Save** icon.

For more information, see [Folders]({% link _articles/features/folders.md %}) and [Favorites]({% link _articles/features/favorites.md %}).

### Create New Logins

You can create new Logins, Cards, Identities, and Secure Notes directly from your Desktop App.

1. At the bottom of the Vault Item List, select the {% icon fa-plus %} **Add** icon.
2. In the Add Item panel, choose which **Type** of item to create (for example, *Login*).
3. Enter all the information for the new item (for example, *Username* and *Password*).
4. For a Login item, enter the web site or service it's used for in the **URI** field (for example, https://www.google.com).
5. Select a **Folder** from the dropdown or check the **Favorites** checkbox to organize the item in your Vault.
6. When you're finished, select {% icon fa-save %} **Save**.

You can go back and edit this item at any time using the {% icon fa-pencil %} **Edit** icon in the Item Information panel.

### Unlock with Biometrics

Biometric Unlock allows for seamless access to your macOS Desktop App using native [Touch ID](https://support.apple.com/en-us/HT207054){:target="\_blank"} technology.

{% callout info %}
Touch ID must be enabled on your computer **before** it can be enabled in Bitwarden. See Apple's [Touch ID Documentation](https://support.apple.com/en-us/HT207054){:target="\_blank"} for help.
{% endcallout %}

1. From the macOS menu bar, select **Bitwarden** &rarr; **Preferences**.
2. In the Security section, an **Unlock with Touch ID** option will appear if Touch ID is supported and enabled on your computer:

   {% image getting-started/macos-bio1.png macOS unlock options%}

   Check the **Unlock with Touch ID** checkbox to proceed. Your computer will prompt your to input your fingerprint to confirm.

Once enabled, a new button will be presented on the Unlock screen. Selecting **Unlock with Touch ID** will prompt you to input your fingerprint and initiate unlock once authenticated.

{% image getting-started/macos-bio2.png Unlock with Touch ID %}

### Start Bitwarden Automatically

Starting Bitwarden automatically when you login to your desktop can help make sure your credentials are always at your fingertips.

1. From the macOS menu bar, **Bitwarden** &rarr; **Preferences**.
2. Scroll to the bottom of the Options section, and check the **Start automatically on login** checkbox.

Next time you login to your desktop, the Bitwarden App will automatically open.

{% endcapture %}
{{ minfo | markdownify }}
  </div>
  <div class="tab-pane" id="linux" role="tabpanel" aria-labelledby="lintab">
{% capture linfo %}
## Bitwarden on Linux

### Get Organized with Favorites and Folders

Organizing your Vault into **Favorites** and **Folders** makes filtering your Vault a breeze.

**To add a Folder:**

1. In the Vault Filters column, select the {% icon fa-plus %} **Add** icon next to **Folders**.
2. Give your new folder a name and select {% icon fa-save %} **Save**.

**To add a Vault item to a Folder or your Favorites:**

1. Using the Vault Filter and List, open the Item Information for the item you want to organize.
2. In the Item Information panel, select the {% icon fa-pencil %} **Edit** icon.
3. Select a **Folder** from the dropdown to add this item to a folder, or check the **Favorite** checkbox to add it to your Favorites.
3. Select the {% icon fa-save %} **Save** icon.

For more information, see [Folders]({% link _articles/features/folders.md %}) and [Favorites]({% link _articles/features/favorites.md %}).

### Create New Logins

You can create new Logins, Cards, Identities, and Secure Notes directly from your Desktop App.

1. At the bottom of the Vault Item List, select the {% icon fa-plus %} **Add** icon.
2. In the Add Item panel, choose which **Type** of item to create (for example, *Login*).
3. Enter all the information for the new item (for example, *Username* and *Password*).
4. For a Login item, enter the web site or service it's used for in the **URI** field (for example, https://google.com).
5. Select a **Folder** from the dropdown or check the **Favorites** checkbox to organize the item in your Vault.
6. When you're finished, select {% icon fa-save %} **Save**.

You can go back and edit this item at any time using the {% icon fa-pencil %} **Edit** icon in the Item Information panel.

### Start Bitwarden Automatically

Starting Bitwarden automatically when you login to your desktop can help make sure your credentials are always at your fingertips.

1. Select **File** &rarr; **Settings**.
2. Scroll to the bottom of the Options section, and check the **Start automatically on login** checkbox.

Next time you login to your desktop, the Bitwarden App will automatically open.

{% endcapture %}
{{ linfo | markdownify }}
  </div>
</div>
