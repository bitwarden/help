---
layout: article
title: Sync your Vault
categories: [account-management]
featured: false
popular: false
tags: [vault, sync, automatic, FAQ]
order: 04
---

Adding, editing, or deleting Vault items from any Bitwarden client application will automatically push changes to your Bitwarden server, whether Cloud-hosted or self-hosted.

In order to pull those changes down to another Bitwarden client application, your Vault will need to Sync.

## Automatic Sync

Your personal [Web Vault](https://vault.bitwarden.com){:target="\_blank"} will always remain in-sync. Organization Vaults will automatically sync across users and client applications every 30 minutes.

Bitwarden client applications (Desktop Applications, Browser Extensions, Mobile Apps, and CLI) will sync automatically on login, and with regularity when unlocked. You can also [Manually Sync](#manual-sync) your Vault to pull changes to a client application immediately.

{% callout success %}
When you install Bitwarden on a new device, simply log in to your existing account to automatically pull down your most up-to-date Vault data.
{% endcallout %}

## Manual Sync

To manually sync your Vault from a Bitwarden client application:

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" id="tab" role="presentation">
    <a class="nav-link active" id="betab" data-bs-toggle="tab" data-target="#be" role="tab" aria-controls="be" aria-selected="true">Browser Extensions</a>
  </li>
  <li class="nav-item" id="tab" role="presentation">
    <a class="nav-link" id="mobtab" data-bs-toggle="tab" data-target="#mob" role="tab" aria-controls="mob" aria-selected="false">Mobile</a>
  </li>
  <li class="nav-item" id="tab" role="presentation">
    <a class="nav-link" id="desktab" data-bs-toggle="tab" data-target="#desk" role="tab" aria-controls="desk" aria-selected="false">Desktop</a>
  </li>
  <li class="nav-item" id="tab" role="presentation">
    <a class="nav-link" id="clitab" data-bs-toggle="tab" data-target="#cli" role="tab" aria-controls="cli" aria-selected="false">CLI</a>
  </li>
</ul>

<div class="tab-content" id="clientsContent">
  <div class="tab-pane show active" id="be" role="tabpanel" aria-labelledby="betab">
{% capture be_sync %}
### Sync Browser Extensions

Select the {% icon fa-cogs %} **Settings** tab, select the **Sync** option and select the **Sync Vault Now** button.

{% endcapture %}
{{ be_sync | markdownify }}
  </div>
  <div class="tab-pane" id="mob" role="tabpanel" aria-labelledby="mobtab">
{% capture mob_sync%}
### Sync Mobile Apps

Open the {% icon fa-cogs %} **Settings** tab, tap the **Sync** option and tap **Sync Vault Now**.

Toggle the **Enable sync on refresh** option to allow your Vault to be synced using a pulldown gesture on the {% icon fa-lock %} **My Vault** tab.

{% endcapture %}
{{ mob_sync | markdownify }}
  </div>
  <div class="tab-pane" id="desk" role="tabpanel" aria-labelledby="desktab">
{% capture desk_sync%}
### Sync Desktop Apps

Select **File** &rarr; **Sync Vault** from the menu bar.

{% endcapture %}
{{ desk_sync | markdownify }}
  </div>
  <div class="tab-pane" id="cli" role="tabpanel" aria-labelledby="clitab">
{% capture cli_sync%}
### Sync the CLI

Use the `sync` command to manually sync your Vault:

```
bw sync
```

For more information, refer to our [CLI documentation]({% link _articles/miscellaneous/cli.md %}).
{% endcapture %}
{{ cli_sync | markdownify }}
  </div>
</div>

## Troubleshooting

If Vault Sync is not working properly, investigate the following:

#### Mismatched Timestamp

Sync failure may occur if your device's time is not correct. Bitwarden uses TLS/SSL, which will fail to connect a client application to the server if timestamps are mismatched.

#### VPN or Ad Blocker Interference

In some cases, VPN or Ad Blocker browser extensions may interfere with the connection between client application and server. This issue is typically observed with Bitwarden Browser Extensions.
