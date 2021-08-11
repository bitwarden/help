---
layout: article
title: Create a Send
categories: [send]
featured: true
popular: false
tags: [bitwarden send, send, create a send, how to, ephemeral sharing]
order: 02
---

Creation of file Sends is available for Premium users, including members of a Paid Organization (Families, Teams, or Enterprise). Free users may still create text Sends.

Sends can be created and edited from the [Web Vault](https://vault.bitwarden.com){:target="\_blank"} or any Bitwarden client application. Choose the Bitwarden application you want to Send from to get started:

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="wvtab" data-target="#webvault" role="tab" aria-controls="webvault" aria-selected="true">Web Vault</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="betab" data-target="#browserextension" role="tab" aria-controls="browserextension" aria-selected="false">Browser Extension</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="desktab" data-target="#desktop" role="tab" aria-controls="desktop" aria-selected="false">Desktop</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="mobtab" data-target="#mobile" role="tab" aria-controls="mobile" aria-selected="false">Mobile</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="clitab" data-target="#cli" role="tab" aria-controls="cli" aria-selected="false">CLI</a>
  </li>
</ul>
<div class="tab-content" id="clientsContent">
  <div class="tab-pane show active" id="webvault" role="tabpanel" aria-labelledby="wvtab">
{% capture web_vault %}
### Send from the Web Vault

Complete the following steps to create a new Send from the Bitwarden [Web Vault](https://vault.bitwarden.com){:target="\_blank"}:

1. Select **Send** from the top navigation bar.

   This view will list all Sends that haven't reached their [deletion date]({{site.baseurl}}/article/send-lifespan/#deletion-date). Like the **My Vault** view, you can filter your Sends by selecting one of the available **Types**.
2. To start creating a new Send, select the {% icon fa-plus %} **Create New Send** button:

   {% image send/send-create-webvault.png Send View in the Web Vault %}
3. On the **Create New Send** dialog, specify the following to create the contents of your Send:

   - **What type of Send is this?**: Specify whether this Send will be **Text** or a **File**:

     |**Text**|Type or paste the desired text into the input box. Toggle the **When accessing the Send, hide the text by default** option to require recipients to [toggle visibility]({{site.baseurl}}/article/send-privacy/#hide-text) when they open a Send.|
     |**File**|Select the **Choose File** button and browse for the file to send. The maximum file size per Send is 500 MB (100 MB on Mobile). (**Requires Premium** & Verified Email)|

   - **Name**: Specify an identifiable, meaningful name for this Send.

     By default, a Send will be scheduled for deletion 7 days from its creation. You may configure this and other options using the {% icon fa-chevron-down %} **Options** menu (see Step 4), otherwise select **Save** to finish creating your Send.

4. Select the {% icon fa-chevron-down %} **Options** menu to configure the following options as desired:

   |**Deletion Date**|The Send will be permanently [deleted]({{site.baseurl}}/article/send-lifespan/#deletion-behavior) on the specified date and time. By default, 7 days from creation. The **maximum allowed value** is 31 days from creation.|
   |**Expiration Date**|The Send will [expire]({{site.baseurl}}/article/send-lifespan/#expiration-behavior) on the specified date and time. By default, **Never**.|
   |**Maximum Access Count**|The Send will be [disabled]({{site.baseurl}}/article/send-lifespan/#maximum-access-count-behavior) after the specified access count is reached. By default, unspecified.|
   |**Password**|[Require a password]({{site.baseurl}}/article/send-privacy/#send-passwords) to be entered by recipients of this Send in order to gain access.|
   |**Notes**|Enter private notes for this Send, which will only be visible to the Sender.|
   |**Hide my email address from recipients**|[Hide your email]({{site.baseurl}}/article/send-privacy/#hide-email) from Send recipients.|
   |**Disable this send so that no one can access it**|Check this box to prevent this Send from being accessible to any recipients. You will still be able to interact this Send from your Send view.|

   {% callout success%}The rest of this article covers copying a Send link to your clipboard, but you can do that automatically by checking the **Copy the link to share this Send to my clipboard upon save** option before you click **Save**.{% endcallout %}

   Once you're happy with the configuration of your Send, select the **Save** button to finish.

Once your Send is created, use the hover-over {% icon fa-cog %} gear dropdown and select the {% icon fa-copy %} **Copy Send link** button to copy the generated link to your clipboard:

{% image send/send-from-webvault.png Copy a Send link %}

Once copied, share your Send link with intended recipients however you prefer. Sends are end-to-end encrypted, so you don't need to worry about exposing any Send data to whatever intermediary communications services you use.

{% endcapture %}
{{ web_vault | markdownify}}
  </div>
  <div class="tab-pane" id="browserextension" role="tabpanel" aria-labelledby="betab">
{% capture browser_extension %}
### Send from a Browser Extension

Complete the following steps to create a new Send from a Bitwarden Browser Extension:

1. Select the {% icon fa-paper-plane %} **Send** tab located at the bottom of your Browser Extension.

   This view will list all Sends that haven't reached their [deletion date]({{site.baseurl}}/article/send-lifespan/#deletion-date). Like the {% icon fa-lock %} **My Vault** view, you can filter your Sends by selecting one of the available **Types**.
2. To start creating a new Send, select the {% icon fa-plus %} **Add** icon:

   {% image send/send-browserext.png Send View in a Browser Extension %}

3. On the **Add Send** view, specify the following to create the contents of your Send:

   - **Name**: Specify an identifiable, meaningful name for this Send.
   - **Type**: Specify whether this Send will be **Text** or a **File**:

     |**Text** | Type or paste the desired text into the input box. Toggle the **When accessing the Send, hide the text by default** option to require recipients to [toggle visibility]({{site.baseurl}}/article/send-privacy/#hide-text) when they open a Send.|
     |**File** | Select the **Choose File** button and browse for the file to send. The maximum file size per Send is 500 MB (100 MB on Mobile). (**Requires Premium** & Verified Email)<br><br>If you're using **Firefox or Safari**, you'll need to popout ({% icon fa-external-link fa-rotate-270 %}) the Browser Extension in order to browse for the file to send.|

    By default, a Send will be scheduled for deletion 7 days from its creation. You may configure this and other options using the {% icon fa-chevron-down %} **Options** menu (see Step 4), otherwise select **Save** to finish creating your Send.

4. Select the {% icon fa-chevron-down %} **Options** menu to configure the following options as desired:

   |**Deletion Date**|The Send will be permanently [deleted]({{site.baseurl}}/article/send-lifespan/#deletion-behavior) on the specified date and time. By default, 7 days from creation. The **maximum allowed value** is 31 days from creation.|
   |**Expiration Date**|The Send will [expire]({{site.baseurl}}/article/send-lifespan/#expiration-behavior) on the specified date and time. By default, **Never**.|
   |**Maximum Access Count**|The Send will be [disabled]({{site.baseurl}}/article/send-lifespan/#maximum-access-count-behavior) after the specified access count is reached. By default, unspecified.|
   |**Password**|[Require a password]({{site.baseurl}}/article/send-privacy/#send-passwords) to be entered by recipients of this Send in order to gain access.|
   |**Notes**|Enter private notes for this Send, which will only be visible to the Sender.|
   |**Hide my email address from recipients**|[Hide your email]({{site.baseurl}}/article/send-privacy/#hide-email) from Send recipients.|
   |**Disable this send so that no one can access it**|Check this box to prevent this Send from being accessible to any recipients. You will still be able to interact this Send from your Send view.|

   {% callout success%}The rest of this article covers copying a Send link to your clipboard, but you can do that automatically by checking the **Copy the link to share this Send to my clipboard upon save** option before you click **Save**.{% endcallout %}

   Once you're happy with the configuration of your Send, select the **Save** button to finish.

Once your Send is created, select the {% icon fa-copy %} **Copy Link** icon to copy the generated link to your clipboard:

{% image send/send-be-share.png Copy a Send link %}

Once copied, share your Send link with intended recipients however you prefer. Sends are end-to-end encrypted, so you don't need to worry about exposing any Send data to whatever intermediary communications services you use.

{% endcapture %}
{{ browser_extension | markdownify}}
  </div>
  <div class="tab-pane" id="desktop" role="tabpanel" aria-labelledby="desktab">
{% capture desktop_info %}
### Send from a Desktop App

Complete the following steps to create a new Send from a Bitwarden Desktop App:

1. Select the {% icon fa-paper-plane %} **Send** tab located at the bottom of the left-most column in your Desktop App.

   The center column will list all Sends that haven't reached their [deletion date]({% link _articles/send/send-lifespan.md %}). Like the {% icon fa-lock %} **My Vault** view, you can filter your Sends by selecting one of the available **Types** from the left-most column.
2. To start creating a new Send, select the {% icon fa-plus %} **Add** icon in at the bottom of the center column.

    {% image send/send-desktop-add.png Send view in a Desktop App %}
3. In the right-most column, specify the following to create the contents of your Send:

   - **Name**: Specify an identifiable, meaningful name for this Send.
   - **Type**: Specify whether this Send will be **Text** or a **File**:

     | **Text** | Type or paste the desired text into the input box. Toggle the **When accessing the send, hide text by default** option to require recipients to [toggle visibility]({% link _articles/send/send-privacy.md %}) when they open a Send.|
     | **File** | Select the **Choose File** button and browse for the file to send. The maximum file size per Send is 500 MB (100 MB on Mobile). (**Requires Premium** & Verified Email)|

     By default, a Send will be scheduled for deletion 7 days from its creation. You may configure this and other options using the {% icon fa-chevron-down %} **Options** menu (see Step 4), otherwise select **Save** to finish creating your Send.

4. Select the {% icon fa-chevron-down %} **Options** menu to configure the following options as desired:

   |**Deletion Date**|The Send will be permanently [deleted]({{site.baseurl}}/article/send-lifespan/#deletion-behavior) on the specified date and time. By default, 7 days from creation. The **maximum allowed value** is 31 days from creation.|
   |**Expiration Date**|The Send will [expire]({{site.baseurl}}/article/send-lifespan/#expiration-behavior) on the specified date and time. By default, **Never**.|
   |**Maximum Access Count**|The Send will be [disabled]({{site.baseurl}}/article/send-lifespan/#maximum-access-count-behavior) after the specified access count is reached. By default, unspecified.|
   |**Password**|[Require a password]({{site.baseurl}}/article/send-privacy/#send-passwords) to be entered by recipients of this Send in order to gain access.|
   |**Notes**|Enter private notes for this Send, which will only be visible to the Sender.|
   |**Hide my email address from recipients**|[Hide your email]({{site.baseurl}}/article/send-privacy/#hide-email) from Send recipients.|
   |**Disable this send so that no one can access it**|Check this box to prevent this Send from being accessible to any recipients. You will still be able to interact this Send from your Send view.|

   {% callout success%}The rest of this article covers copying a Send link to your clipboard, but you can do that automatically by checking the **Copy the link to share this Send to my clipboard upon save** option before you click **Save**.{% endcallout %}

   Once you're happy with the configuration of your Send, select the **Save** button to finish.

Once your Send is created, select the {% icon fa-copy %} **Copy Link** button to copy the generated link to your clipboard:

{% image send/send-desktop-share.png Copy a Send link %}

Once copied, share your Send link with intended recipients however you prefer. Sends are end-to-end encrypted, so you don't need to worry about exposing any Send data to whatever intermediary communications services you use.

{% endcapture %}
{{ desktop_info | markdownify}}
  </div>
  <div class="tab-pane" id="mobile" role="tabpanel" aria-labelledby="mobtab">
{% capture mobile_info %}
### Send from a Mobile App

Complete the following steps to create a new Send from Bitwarden Mobile App:

1. Tap the {% icon fa-paper-plane %} **Send** tab located at the bottom of your screen.

   This view will list all Sends that haven't reached their [deletion date]({% link _articles/send/send-lifespan.md %}). Like the {% icon fa-lock %} **My Vault** view, you can filter your Sends by tapping one of the available **Types**.
2. To start creating a new Send, tap the {% icon fa-plus %} **Add** icon:

   {% image send/send-mobile.png Send View on iOS and Android%}

3. On the **Add Send** view, specify the following to create the contents of your Send:

   - **Type**: Specify whether this Send will be **Text** or a **File**:

     |**Text** | Type or paste the desired text into the input box. Toggle the **When accessing the Send, hide the text by default** option to require recipients to [toggle visibility]({% link _articles/send/send-privacy.md %}) when they open a Send.|
     |**File** | Tap the **Choose File** button and browse for the file to send. The maximum file size per Send is 100 MB (500 MB on other clients). (**Requires Premium** & Verified Email)|

   - **Name**: Specify an identifiable, meaningful name for this Send.

     By default, a Send will be scheduled for deletion 7 days from its creation. You may configure this and other options using the {% icon fa-chevron-down %} **Options** menu (see Step 4), otherwise tap **Save** to finish creating your Send.

4. Tap the {% icon fa-chevron-down %} **Options** menu to configure the following options as desired:

   |**Deletion Date**|The Send will be permanently [deleted]({{site.baseurl}}/article/send-lifespan/#deletion-behavior) on the specified date and time. By default, 7 days from creation. The **maximum allowed value** is 31 days from creation.|
   |**Expiration Date**|The Send will [expire]({{site.baseurl}}/article/send-lifespan/#expiration-behavior) on the specified date and time. By default, **Never**.|
   |**Maximum Access Count**|The Send will be [disabled]({{site.baseurl}}/article/send-lifespan/#maximum-access-count-behavior) after the specified access count is reached. By default, unspecified.|
   |**Password**|[Require a password]({{site.baseurl}}/article/send-privacy/#send-passwords) to be entered by recipients of this Send in order to gain access.|
   |**Notes**|Enter private notes for this Send, which will only be visible to the Sender.|
   |**Hide my email address from recipients**|[Hide your email]({{site.baseurl}}/article/send-privacy/#hide-email) from Send recipients.|
   |**Disable this send so that no one can access it**|Check this box to prevent this Send from being accessible to any recipients. You will still be able to interact this Send from your Send view.|

   {% callout success%}Toggling the **Share upon save** option before you tap **Save** will open the share menu on your device so you can quickly share your Send link.{% endcallout %}

   Once you're happy with the configuration of your Send, tap the **Save** button to finish.

Once your Send is created, tap the menu icon ( {% icon fa-ellipsis-v %} or {% icon fa-ellipsis-h %} ) and tap the **Share Link** option:

{% image send/send-share-mob.png Copy a Send link %}

Share your Send link with intended recipients however you prefer. Sends are end-to-end encrypted, so you don't need to worry about exposing any Send data to whatever intermediary communications services you use.
{% endcapture %}
{{ mobile_info | markdownify}}
  </div>
  <div class="tab-pane" id="cli" role="tabpanel" aria-labelledby="cliab">
{% capture cli_info %}
### Send from the CLI

The following are sample commands to help you get started using Send from the CLI.

To create a simple text Send with a [deletion date]({{site.baseurl}}/articles/send-lifespan/#deletion-date) set to 14 days from creation:

```
bw send -n "My Text Send" -d 14 "My first secret message."
```

To create a simple file Send with a [deletion date]({{site.baseurl}}/articles/send-lifespan/#deletion-date) set to 14 days from creation:

```
bw send -n "My File Send" - d 14 -f /Users/myaccount/Documents/my_file.pdf
```

The Bitwarden CLI is a fully-featured and powerful tool. We recommend reading the [Send from CLI]({% link _articles/send/send-cli.md %}) article to learn more.

{% endcapture %}
{{ cli_info | markdownify}}
  </div>
</div>
