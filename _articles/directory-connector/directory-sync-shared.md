---
layout: article
title: Directory Connector Data
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

The location of data shared between the clients (`data.json`) depends on which platform is in use:

- Windows : `%AppData%\Bitwarden Directory Connector`
  - Portable: `.\bitwarden-connector-appdata`
- macOS: `~/Library/Application Support/Bitwarden Directory Connector`
- Linux: `~/.config/Bitwarden Directory Connector`

Run the `data-file` command with the [CLI tool]({% link _articles/directory-connector/directory-sync-cli.md %}) to discover the absolute path to the `data.json` database file on your system.

{% callout warning %}
Avoid opening or modifying the `data.json` database file while the Directory Connector Desktop Application or CLI executable is running.
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

With plaintext storage enabled, you can then configure all settings directly, in plaintext, from the `data.json` database file.

{% callout info %}
Plaintext storage of secrets is not compatible with the Directory Connector desktop application. You should only use the Directory Connector CLI with plaintext storage of secrets.
{% endcallout %}
