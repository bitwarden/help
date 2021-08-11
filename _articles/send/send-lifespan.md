---
layout: article
title: Send Lifespan
categories: [send]
featured: true
popular: false
tags: [bitwarden send, send, ephemeral sharing, deletion, expiration, access count]
order: 04
---

Unlike traditional Bitwarden Vault items and File Attachments, Sends are ephemeral and have a **default lifespan of 7 days**. The lifespan of a Send is entirely configurable using the [Deletion Date](#deletion-date) option, each having a maximum allowed lifespan of 31 days. When a Send has reached its Deletion Date, it will be purged from Bitwarden systems and inaccessible to both its Sender and recipients.

**Optionally**, you can configure additional limitations on recipient access using the [Expiration Date](#expiration-date) and/or [Maximum Access Count](#maximum-access-count) options.

You can also manually [disable or delete](#manually-disable-or-delete) a Send at any time.

## Deletion Date

By default, a Send will have a Deletion Date set to 7 days from creation. Using the **Deletion Date** option, you may change this to a range of pre-specified options (e.g. *1 hour*, *1 day*, *31 days*) or specify a **Custom** timestamp using the date picker (or in the text input in the format `MM/DD/YYYY HH:MM AM/PM`).

Deletion Date has a **maximum allowed value of 31 days from creation**.

### Deletion Behavior

When a Send reaches its configured Deletion Date:

- For recipients of the Send (i.e. anyone with the generated link), navigating to the Send link will show a screen reporting that the Send does not exist or is no longer available.

- For the Sender, a {% icon fa-trash %} **Pending Deletion** icon will appear next to the Send. The Send will pend deletion for a few minutes, after which it will be permanently deleted from Bitwarden systems and from the Sender's Send view.

  {% callout info %}There is no "soft delete" or Trash Can for Sends, meaning that once the pending deletion window has closed you will not be able to access the contents of a Send.{% endcallout %}

## Expiration Date

By default, Expiration Date will be set to Never. Using the **Expiration Date** option, you may change this to a range of pre-specified options (e.g. *1 hour*, *1 day*, *7 days*) or specify a **Custom** timestamp using the date picker (or in the text input in the format `MM/DD/YYYY HH:MM AM/PM`).

### Expiration Behavior

When a Send reaches its specified Expiration Date:

- For recipients of the Send (i.e. anyone with the generated link), navigating to the Send link will show a screen reporting that the Send does not exist or is no longer available.

- For the Sender, an {% icon fa-clock-o %} **Expired** icon will appear next to the Send. The Send will remain accessible to its Sender in the Send view until the specified **Deletion Date** is reached.

## Maximum Access Count

For all Sends, a **Current Access Count** ticker will track the number of times the Send link has been accessed:

{% image send/send-access-ticker.png Current Access Count ticker %}

For any Send, you may specify a **Maximum Access Count** that is a positive integer.

### Maximum Access Count Behavior

When a Send reaches its specified Maximum Access Count:

- For recipients of the Send (i.e. anyone with the generated link), navigating to the Send link will show a screen reporting that the Send does not exist or is no longer available.

- For the Sender, a {% icon fa-ban %} **Max access count reached** icon will appear next to the Send. The Send will remain accessible to its Sender in the Send view until the specified **Deletion Date** is reached.

{% callout success %}
The **Current Access Count** ticker counts:
- For text Sends, the number of times the link has been accessed.
- For file Sends, the number of times the contents are downloaded.
{% endcallout %}

## Manually Disable or Delete

Manually disable or delete a Send from any Bitwarden application:

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

#### Disable from the Web Vault

To disable a Send from the Web Vault, open the **Edit Send** view and check the **Disable this Send so that no one can access it** checkbox. You can uncheck this box at any time to re-enable access to the Send.

{% image send/send-disable-wv.png Disable from the Web Vault %}

When a Send is disabled:

- For recipients of the Send (i.e. anyone with the generated link), navigating to the Send link will show a screen reporting that the Send does not exist or is no longer available.

- For the Sender, a {% icon fa-warning %} **Disabled** icon will appear next to the Send. The Send will remain accessible to its Sender in the Send view until the specified **Deletion Date** is reached.

#### Delete from the Web Vault

To delete a Send from the Web Vault, use the hover-over {% icon fa-cog %} gear dropdown to select the {% icon fa-trash %} **Delete** button:

{% image send/send-delete.png Delete from the Web Vault %}

{% endcapture %}
{{ web_vault | markdownify}}
  </div>
  <div class="tab-pane" id="browserextension" role="tabpanel" aria-labelledby="betab">
{% capture browser_extension %}

#### Disable from Browser Extensions

To disable a Send from a Browser Extension, open the **Edit Send** view and check the **Disable this Send so that no one can access it** checkbox. You can uncheck this box at any time to re-enable access to the Send.

{% image send/send-disable-be.png Disable from a Browser Extension %}

When a Send is disabled:

- For recipients of the Send (i.e. anyone with the generated link), navigating to the Send link will show a screen reporting that the Send does not exist or is no longer available.

- For the Sender, a {% icon fa-warning %} **Disabled** icon will appear next to the Send. The Send will remain accessible to its Sender in the Send view until the specified **Deletion Date** is reached.

#### Delete from Browser Extensions

To delete a Send from a Browser Extension, select the {% icon fa-trash %} **Trash** icon next to the Send you want to delete:

{% image send/send-delete-be.png Delete from a Browser Extension %}

{% endcapture %}
{{ browser_extension | markdownify}}
  </div>
  <div class="tab-pane" id="desktop" role="tabpanel" aria-labelledby="desktab">
{% capture desktop_info %}

#### Disable from Desktop Apps

To disable a Send from a Desktop App, open the **Edit Send** view and check the **Disable this Send so that no one can access it** checkbox. You can uncheck this box at any time to re-enable access to the Send.

{% image send/send-desktop-disable.png Disable from a Desktop App%}

When a Send is disabled:

- For recipients of the Send (i.e. anyone with the generated link), navigating to the Send link will show a screen reporting that the Send does not exist or is no longer available.

- For the Sender, a {% icon fa-warning %} **Disabled** icon will appear next to the Send. The Send will remain accessible to its Sender in the Send view until the specified **Deletion Date** is reached.

#### Delete from Desktop Apps

To delete a Send from a Desktop App, open the **Edit Send** view and select the  {% icon fa-trash %} **Delete** button:

{% image send/send-desktop-delete.png Delete from a Desktop App %}

{% endcapture %}
{{ desktop_info | markdownify}}
  </div>
  <div class="tab-pane" id="mobile" role="tabpanel" aria-labelledby="mobtab">
{% capture mobile_info %}

#### Disable from Mobile Apps

To disable a Send from a Mobile App, open the **Edit Send** view and toggle the **Disable this Send so that no one can access it** option. You can toggle this option off at any time to re-enable access to the Send.

{% image send/send-disable-mobile.png Disable from a Mobile App %}

When a Send is disabled:

- For recipients of the Send (i.e. anyone with the generated link), navigating to the Send link will show a screen reporting that the Send does not exist or is no longer available.

- For the Sender, a {% icon fa-warning %} **Disabled** icon will appear next to the Send. The Send will remain accessible to its Sender in the Send view until the specified **Deletion Date** is reached.

#### Delete from Mobile Apps

To delete a Send from a Mobile App, tap the menu icon ( {% icon fa-ellipsis-v %} or {% icon fa-ellipsis-h %} ) and tap the **Delete** option:

{% image send/send-delete-mob.png Delete from a Mobile App %}

{% endcapture %}
{{ mobile_info | markdownify}}
  </div>
  <div class="tab-pane" id="cli" role="tabpanel" aria-labelledby="cliab">
{% capture cli_info %}

#### Disable from the CLI

To disable a Send from the CLI, you'll need to use the `edit` command to change the `"disabled":false` key-value pair to `"disabled":true`, for example:

```
bw send get <id> | jq '.disabled=false' | bw encode | bw send edit
```

We recommend reading the [Send from CLI]({% link _articles/send/send-cli.md %}) article for complete information on using Send from the CLI.

#### Delete from the CLI

To delete a Send from the CLI, use the `delete` command with the Send's exact unique `id` as an argument:

```
bw send delete <id>
```

We recommend reading the [Send from CLI]({% link _articles/send/send-cli.md %}) article for complete information on using Send from the CLI.

{% endcapture %}
{{ cli_info | markdownify}}
  </div>
</div>
