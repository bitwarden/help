---
layout: article
title: Directory Connector File Storage
categories: [directory-connector]
featured: true
popular: false
tags: []
order: 04
---

The Directory Connector [Desktop Application]({% link _articles/directory-connector/directory-sync-desktop.md %}) and [CLI]({% link _articles/directory-connector/directory-sync-cli.md %}) share the same database and configuration settings. You may install and use both applications, however **it is not recommended to use them simultaneously**.

{% callout success %}
Though not required, it may be helpful to use the Desktop Application first to setup and configure all of your settings before using the Directory Connector CLI.
{% endcallout %}

## Config File

The Directory Connector configuration file (`data.json`) contains objects you may directly edit in order to:
- Set the connection to your Directory
- Configure Sync Options

It is not possible to setup the *entirety* of Directory Connector from `data.json`. Authentication values, like keys or secrets, must be set from either the [Desktop Application]({% link _articles/directory-connector/directory-sync-desktop.md %}) or [CLI]({% link _articles/directory-connector/directory-sync-cli.md %}).

[{% icon fa-download %} Download a sample configuration file]({{site.baseurl}}/files/data.json)

{% callout warning %}
Avoid opening or modifying `data.json` while the Directory Connector Desktop Application or CLI executable is running.
{% endcallout %}

### Location

The location of `data.json` depends on which platform is in use:

- Windows : `%AppData%\Bitwarden Directory Connector`
  - Portable: `.\bitwarden-connector-appdata`
- macOS: `~/Library/Application Support/Bitwarden Directory Connector`
- Linux: `~/.config/Bitwarden Directory Connector`

{% callout success %}
Using the Directory Connector [CLI]({% link _articles/directory-connector/directory-sync-cli.md %}), run the `data-file` command to discover the absolute path to the `data.json`.
{% endcallout %}


## Secret Storage

By default, the Directory Connector [Desktop Application]({% link _articles/directory-connector/directory-sync-desktop.md %}) and [CLI]({% link _articles/directory-connector/directory-sync-cli.md %}) both use a secure method for persisting sensitive data (such as your directory account password, API keys, etc).

On Linux systems this requires [GNOME Keyring](https://wiki.archlinux.org/index.php/GNOME/Keyring){:target="\_blank"} and [X11](https://en.wikipedia.org/wiki/X_Window_System){:target="\_blank"}, which are usually reserved for desktop environments. If you are using a headless Linux environment you may encounter errors such as:
```
Cannot autolaunch D-Bus without X11 $DISPLAY
```
### Secret Storage in Headless Environments

If a secure storage environment is not available, you can configure the Directory Connector CLI to use plaintext storage of secrets. To do so, set the following environment variable to override secure storage:
```
BITWARDENCLI_CONNECTOR_PLAINTEXT_SECRETS=true
```

With plaintext storage enabled, you can then configure all settings directly, in plaintext, from the `data.json` configuration file.

{% callout info %}
Plaintext storage of secrets is not compatible with the Directory Connector desktop application. You should only use the Directory Connector CLI with plaintext storage of secrets.
{% endcallout %}
