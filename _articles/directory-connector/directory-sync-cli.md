---
layout: article
title: Directory Connector CLI
categories: [directory-connector]
featured: true
popular: false
tags: []
order: 03
---

The Directory Connector CLI is suited toward work in environments where a desktop GUI is unavailable, or if you want to programmatically script directory sync operations using tools provided by the operating system (cron job, scheduled task, etc.). The Directory Connector CLI can be used cross-platform on Windows, macOS, and Linux distributions.

## Getting Started

Complete the following steps to get started with the Bitwarden Directory Connector CLI:

1. Download the CLI from one of the following links:
   - [{% icon fa-windows %} Windows CLI](https://vault.bitwarden.com/download/?app=connector&platform=windows&variant=cli-zip)
   - [{% icon fa-apple %} macOS CLI](https://vault.bitwarden.com/download/?app=connector&platform=macos&variant=cli-zip)
   - [{% icon fa-linux %} Linux CLI](https://vault.bitwarden.com/download/?app=connector&platform=linux&variant=cli-zip)

2. Extract the `.zip` and move the contents (`bwdc` and `keytar.node`) to `/usr/local/bin` or another directory in your `$PATH`. Please note, `keytar.node` **must** be in the same directory as the primary `bwdc` executable.

   **Linux Only:** If not already installed, install `libsecret` with your package manager of choice:
   ```
   apt-get install libsecret-1-0
   brew install libsecret
   ```
   **Windows Only:** Windows users can [add `bwdc.exe` to the current user's `PATH`](https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/){:target="_blank"}.
3. Verify that the `bwdc` command works in your terminal by running the following:

   ```
   bwdc --help
   ```
4. Connect Directory Connector to your Directory using the `bwdc config <setting> <value>` command (see [command reference](#config)).
5. Configure Sync Options by editing your `data.json` file (to learn more, see [Directory Connector File Storage]({% link _articles/directory-connector/directory-sync-shared.md %})). Use the `bwdc data-file` command to obtain the absolute path of your `data.json` file.

   Available **Sync Options** depend on the directory type in use, so refer to one of the following articles for a list of options available to you:
   - [Sync with Active Directory or LDAP]({% link _articles/directory-connector/ldap-directory.md %})
   - [Sync with Azure Active Directory]({% link _articles/directory-connector/azure-active-directory.md %})
   - [Sync with G Suite (Google)]({% link _articles/directory-connector/gsuite-directory.md %})
   - [Sync with Okta]({% link _articles/directory-connector/okta-directory.md %})
   - [Sync with OneLogin]({% link _articles/directory-connector/onelogin-directory.md %})
5. Run the `bwdc test` command to check whether your configuration would sync the expected results.
6. Once your Directory and Sync Options are properly configured, and `bwdc test` yields the expected results, run the `bwdc sync` command to start a live sync operation.

## Commands Reference

### login

Use the `login` command to login to Directory Connector with your Bitwarden Account. You must be an Admin or Owner for your Organization to use Directory Connector (for more information, see [User Types and Access Controls]({% link _articles/organizations/user-types-access-control.md %})).
```
bwdc login [options] [email] [password]
```

Options include:
- `--method`: Use this options to specify the [Two-step Login method]({% link _articles/two-step-login/setup-two-step-login.md %}) to use.
   - `0` = Authenticator App
   - `1` = Email
   - `3` =  YubiKey
- `--code`: Use this option to specify the [Two-step Login]({% link _articles/two-step-login/setup-two-step-login.md %}) code for the specified `method`.
- `--sso`: Use this option to [Login with SSO]({% link _articles/login-with-sso/about-sso.md %}). Selecting this option will open the SSO Login Flow in your Web Browser. For more information, see [Access your Vault Using SSO]({% link _articles/login-with-sso/sso-access-your-vault.md %}).

For example:

{% callout warning %}
Contrary to the following example, it's generally not recommended to enter your password inline, as this will save it to the history of the shell. Leaving the password out of the initial command will cause Bitwarden to prompt for it, which will not save it.
{% endcallout %}

```
bwdc login bwuser@gmail.com mystrongpassword --method 0 --code 204678
```

### logout

Use the `logout` command to logout of the Directory Connector CLI.
```
bwdc logout
```

### help

The Bitwarden Directory Connector CLI is self-documented with `--help` content and examples for every command. List all available commands using the global `--help` option:
```
bwdc --help
```

Use the `--help` option on any *specific* command to learn more about that command:
```
bwdc test --help
bwdc config --help
```
### test

The `test` command queries your directory and prints a JSON formatted array of groups and users that would be synced to your Bitwarden Organization whenever you run a real sync operation.
```
bwdc test
```

Use the `--last` option to test only the changes since the last successful sync.
```
bwdc test --last
```
### sync

The `sync` command runs a live sync operation and pushes data to your Bitwarden Organization.

```
bwdc sync
```
Synced users and groups will be immediately available in your Bitwarden organization. Newly added users will receive an email invite to your Organization.

### last-sync

The `last-sync` command returns an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601){:target="_blank"} timestamp for the last sync operation that was performed for users or groups. You must specify either `users` or `groups` as an `<object>` to run the command against:
```
bwdc last-sync <object>
```
Returns an empty response if no sync has been performed for the given object.

### config

The `config` command allow you to specify your Directory settings:
```
bwdc config <setting> <value>
```

Options include:

- `server <server-url>`
- `directory <directory-type>`
- `ldap.password <password>`
- `azure.key <key>`
- `gsuite.key <key>`
- `okta.token <token>`
- `onelogin.secret <secret>`

{% callout success %}
`ldap.password`, `azure.key`, `gsuite.key`, `okta.token`, and `onelogin.secret` can **only** be modified from the CLI using `bwdc config`, or from the [Desktop Application]({% link _articles/directory-connector/directory-sync-desktop.md %}).
{% endcallout %}

### data-file

The `data-file` command returns an absolute path to the `data.json` configuration file used by the Directory Connector CLI:
```
bwdc data-file
```

Configuration settings can be modified for the Directory Connector CLI by editing the `data.json` configuration file directly in your favorite text editor.

### clear-cache

The `clear-cache` command allows you to clear cached data that the application stores while performing sync operations. For more information, see [Clear Sync Cache]({% link _articles/directory-connector/clear-sync-cache.md %}).

```
bwdc clear-cache
```
### update

The `update` command allows you to check if your Directory Connector CLI is up-to-date:
```
bwdc update
```  
If a newer version is found, the command will return a URL to download a new version. **The Directory Connector CLI will not automatically update.** You will need to use this URL download the new version manually.

{% callout warning %}
If you using the CLI and Desktop App together, it is important to ensure their versions match whenever in use. Running two different versions may cause unexpected issues.

Check the version of the Directory Connector CLI using the `--version` global option.
{% endcallout %}

## Troubleshooting

If you receive an error message referring to the libsecret shared object `Error: libsecret-1.so.0: cannot open shared object file: No such file or directory`, you may need to install libsecret which is required to store things securely on the host.
