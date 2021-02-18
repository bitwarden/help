---
layout: article
title: Send Deletion
categories: [send]
featured: true
popular: false
tags: []
order: 04
---

Unlike traditional Bitwarden [Vault items]({% link _articles/account/managing-items.md %}) and [File Attachments]({% link _articles/features/attachments.md %}), Sends are designed to be impermanent. Every Send that you [create]({% link _articles/send/create-send.md %}) requires a **Deletion Date**, however there are additional impermanence options you may choose to enable as well.

## Deletion Date

For any Send, you must choose a Deletion Date from a pre-specified list (e.g. *1 hour*, *1 day*, *7 days*), or specify a custom timestamp (`MM/DD/YYYY HH:MM AM/PM` or `YYYY-MM-DD HH:MM` ([ISO 8601](https://en.wikipedia.org/wiki/ISO_8601){:target="\_blank"})).

When a Send is deleted:

- For recipients of the Send (i.e. anyone with the generated link), navigating to the Send link will show a screen reporting that the Send does not exist or is no longer available.

- For the creator of the Send, a {% icon fa-trash %} **Pending Deletion** icon will appear next to the Send. The Send will pend deletion for `xxxx`, after which it will be permanently deleted from Bitwarden and the creator's Send view.

  {% callout note %}There is no "soft delete" or Trash Can for Sends, meaning that once the pending deletion window has lapsed you will not be able to access the contents of a Send.{% endcallout %}

## Additional Impermanence Options

You may *optionally* choose to specify an **Expiration Date** and/or **Maximum Access Count** in addition to the Deletion Date for any Send:

### Expiration Date

For any Send, you may specify an Expiration Date from a pre-specified list (e.g. *1 hour*, *1 day*, *7 days*) or specify a custom timestamp (`MM/DD/YYYY HH:MM AM/PM` or `YYYY-MM-DD HH:MM` ([ISO 8601](https://en.wikipedia.org/wiki/ISO_8601){:target="\_blank"})). By default, **Expiration Date** will be set to **Never**.

When the specified Expiration Date is reached:

- For recipients of the Send (i.e. anyone with the generated link), navigating to the Send link will show a screen reporting that the Send does not exist or is no longer available.

- For the creator of the Send, an {% icon fa-clock-o %} **Expired** icon will appear next to the Send. The Send will remain accessible to only the creator until the specified **Deletion Date** is reached.

### Maximum Access Count

For all Sends, a **Current Access Count** ticker will track the number of times the generated link has been accessed:

{% image /send/send-access-ticker.png Current Access Count ticker %}

For any Send, you may specify a Maximum Access Count that is a positive whole integer. When the specified Maximum Access Count is reached:

- For recipients of the Send (i.e. anyone with the generated link), navigating to the Send link will show a screen reporting that the Send does not exist or is no longer available.

- For the creator of the Send, a {% icon fa-ban %} **Max access count reached** icon will appear next to the Send. The Send will remain accessible to only the creator until the specified **Deletion Date** is reached.

{% callout note %}
The **Current Access Count** ticker tracks the number of times the link has been accessed, not
{% endcallout %}

## Manual Deletion

At any time, the creator of a Send can manually [delete](#manually-delete-a-send) or [disable](#manually-disable-a-send) a Send:

### Manually Delete a Send

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="wvtab" href="#webvault" role="tab" aria-controls="webvault" aria-selected="true">Web Vault</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="betab" href="#browserextension" role="tab" aria-controls="browserextension" aria-selected="false">Browser Extensions</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="desktab" href="#desktop" role="tab" aria-controls="desktop" aria-selected="false">Desktop Apps</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="mobtab" href="#mobile" role="tab" aria-controls="mobile" aria-selected="false">Mobile Apps</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="clitab" href="#cli" role="tab" aria-controls="cli" aria-selected="false">CLI</a>
  </li>
</ul>
<div class="tab-content" id="clientsContent">
  <div class="tab-pane show active" id="webvault" role="tabpanel" aria-labelledby="wvtab">
{% capture web_vault %}

To delete a Send from the Web Vault, use the hover-over {% icon fa-cog %} gear dropdown to select the **Delete** button:

{% image /send/send-delete.png Delete from the Web Vault %}

{% endcapture %}
{{ web_vault | markdownify}}
  </div>
  <div class="tab-pane" id="browserextension" role="tabpanel" aria-labelledby="betab">
{% capture browser_extension %}

To delete a Send from a Browser Extension, select the {% icon fa-trash %} **Trash** icon next to the Send you want to delete:

{% image /send/send-delete-be.png Delete from a Browser Extension %}

{% endcapture %}
{{ browser_extension | markdownify}}
  </div>
  <div class="tab-pane" id="desktop" role="tabpanel" aria-labelledby="desktab">
{% capture desktop_info %}

{% endcapture %}
{{ desktop_info | markdownify}}
  </div>
  <div class="tab-pane" id="mobile" role="tabpanel" aria-labelledby="mobtab">
{% capture mobile_info %}

{% endcapture %}
{{ mobile_info | markdownify}}
  </div>
  <div class="tab-pane" id="cli" role="tabpanel" aria-labelledby="cliab">
{% capture cli_info %}

To delete a Send from the CLI, use the following command:

```
bw send delete -n <name>
```

{% endcapture %}
{{ cli_info | markdownify}}
  </div>
</div>

### Manually Disable a Send
