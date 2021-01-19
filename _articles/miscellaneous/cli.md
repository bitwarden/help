---
layout: article
title: The Bitwarden command-line tool (CLI)
categories: [miscellaneous]
featured: false
popular: false
tags: [cli, command, script, bash, shell, powershell, terminal]
---

Bitwarden provides a powerful, full-featured command-line interface (CLI) tool for accessing and managing your Bitwarden vault. All features that you find in other Bitwarden client applications (Desktop, Browser Extension, etc.) are also available through the CLI.

The CLI can be used cross-platform on Windows, macOS, and Linux distributions.

{% image cli.png %}

## Quick Start

1. [Download and install](#download-and-install) the CLI for your platform.
2. Move `bw` to `/usr/local/bin` or another directory in your `$PATH`. Windows users can [add `bw.exe` to the current user's `PATH`](https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/){:target="_blank"}.

   **If you installed the CLI with [NPM](https://www.npmjs.com/package/@bitwarden/cli){:target="_blank"} or another package manager you can skip this step as `bw` will automatically be added to your path.**
3. Verify the `bw` command works in your terminal:

       bw --help

## Download and Install

You can install the Bitwarden CLI in a few different ways:

### Native executable

Natively packaged versions of the CLI are available for each platform and have no dependencies:

- {% icon fa-windows fa-lg fa-fw %} [Windows x64](https://vault.bitwarden.com/download/?app=cli&platform=windows)
- {% icon fa-apple fa-lg fa-fw %} [macOS x64](https://vault.bitwarden.com/download/?app=cli&platform=macos)
- {% icon fa-linux fa-lg fa-fw %} [Linux x64](https://vault.bitwarden.com/download/?app=cli&platform=linux)

In UNIX systems you might get a `Permission denied` message. If you do, in order to grant permissions you can run
```
bash chmod +x </path/to/bw>
```

### NPM

If you already have the Node.js runtime installed on your system, you can install the CLI using [NPM](https://www.npmjs.com/package/@bitwarden/cli){:target="_blank"}. NPM makes it easy to keep your installation updated and should be the preferred installation method if you are already using Node.js.
```
npm install -g @bitwarden/cli
```

### Other Package Managers

- [Chocolatey](https://chocolatey.org/packages/bitwarden-cli){:target="_blank"}
  ```
  choco install bitwarden-cli
  ```
- [Homebrew](https://formulae.brew.sh/formula/bitwarden-cli){:target="_blank"}
  ```
  brew install bitwarden-cli
  ```
- [Snap](https://snapcraft.io/bw){:target="_blank"}
  ```
  sudo snap install bw
  ```

## Session Management

### Logging In

There are a few ways to log into your Bitwarden user account from the command line, all using the `login` command:
```
bw login [email] [password]
```
where `email` is your account Email Address and `password` is your Master Password.
```
bw login [email] [password] --method <method> --code <code>
```
where `<method>` is your Two-step Login method (see [Enums](#enums)), and `<code>` is your Two-step Login code.
```
bw login --apikey
```
where `--apikey` will prompt you to enter your personal `client_id` and `client_secret`. For more information, see [Personal API Key for CLI Authentication](https://bitwarden.com/help/article/personal-api-key/).
```
bw login --sso
```
where `--sso` starts the SSO Authentication flow from a browser.
You can also pass the `--raw` option to *only receive the session key* from stdout.

After successfully logging into the CLI a *session key* will be returned. This session key is necessary to perform any commands that require your vault to be unlocked (`list`, `get`, `edit`, etc.).

### Environment Variable

Pass the session key to CLI commands by setting the `BW_SESSION` environment variable or by using the `--session <key>` option:

{% icon fa-linux %} {% icon fa-apple %} Bash

    export BW_SESSION="5PBYGU+5yt3RHcCjoeJKx/wByU34vokGRZjXpSH7Ylo8w=="
    bw list items

{% icon fa-windows %} PowerShell

    $env:BW_SESSION="5PBYGU+5yt3RHcCjoeJKx/wByU34vokGRZjXpSH7Ylo8w=="
    bw list items

### `--session <key>` Option

    bw list items --session 5PBYGU+5yt3RHcCjoeJKx/wByU34vokGRZjXpSH7Ylo8w==

{% callout info %}
It is possible to persist your session key to your environment (for example, exporting it in `.bashrc`), however, we do not recommend doing this. Your active session key is the encryption key used to unlock all data associated with your Bitwarden vault and is not well-suited for persisting on an unprotected disk.
{% endcallout %}

### `--apikey` Variables

The Bitwarden CLI will look for non-empty environment variables `BW_CLIENTID` or `BW_CLIENTSECRET`. Save these environment variables with your `client_id` and `client_secret` to prevent Bitwarden from prompting you every time.

You will still need to enter your Master Password to decrypt your Vault.

### Locking

If you do not pass the session key to commands that require it you will receive an error message that your vault is *locked*. You can unlock your vault and/or receive a new session key by using the `unlock` command:

    bw unlock [password]

Additionally, you can manually lock your vault and destroy any active session keys by using the `lock` command:

    bw lock

If your active session key is unavailable (for example, you accidentally lost it or closed your active terminal window), your vault is already considered locked and therefore using the `lock` command is unnecessary.

### Login != Unlock

The `login` and `unlock` commands are different. `login` requires your email address and master password and performs authentication against the external Bitwarden server (requiring additional two-step login prompts, if configured). `unlock` performs local authentication only (against a persisted hash) and therefore would work even without an active internet connection or if the external Bitwarden server is not available. You cannot unlock your vault if you have not already logged in first.

Most users should prefer locking and unlocking their vault rather than logging out and logging in. This is the same process and workflow that all other Bitwarden client applications follow. A typical use case would be that a user logs into the CLI application only once and then only performs `unlock` commands thereafter.

## Explore the CLI

The Bitwarden CLI is self-documented with `--help` content and examples for every command. You should start exploring the CLI by using the global `--help` option:

    bw --help

This option will list all available commands that you can use with the CLI.

Additionally, you can use the `--help` option on a specific command to learn more about it:

    bw list --help
    bw create --help

## Managing Your Vault

### Sync

The `sync` command downloads your encrypted vault from the Bitwarden server. If you have changed something in your Bitwarden vault on another client device (for example, the browser extension) you may need to use the `sync` command before you will see those changes in the CLI:

    bw sync

It's important to note that the `sync` command is only a *pull* operation. It does not push data to the server since that is already done for you each time you make a change to your vault (`create`, `edit`, `delete`).

You can use the `--last` option to get an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601){:target="_blank"} timestamp of the last time a `sync` has been performed:

    bw sync --last

### List

The `list` command allows you to retrieve an array of objects from your vault.

    bw list (items|folders|collections|organizations|org-collections|org-members) [options]

You can *search* the list of returned objects by using the `--search` option. You can also *filter* the list by using the `--folderid`, `--collectionid`, or `--organizationid` options. Combining search and filter options performs a logical AND operation.

    bw list items --search github --folderid 9742101e-68b8-4a07-b5b1-9578b5f88e6f

Special syntax is available for filters that allows you to specify `null` and `notnull` as valid values. Combining multiple filters together performs a logical OR operation.

    bw list items --folderid null --organizationid notnull

### Get

The `get` command allows you to retrieve a single object from your vault.

    bw get (item|username|password|uri|totp|exposed|attachment|folder|collection|organization|org-collection|template|fingerprint) <id> [options]

You can retrieve an object by its globally using `id` property (usually a GUID), or you can provide a search term. The search term must be specific enough to only return a single result or the CLI will return an error.

    bw get item 99ee88d2-6046-4ea7-92c2-acac464b1412
    bw get password https://google.com
    bw get totp google
    bw get exposed yahoo.com

If you are getting an attachment, you must also specify the `--itemid <id>` option of the item that the attachment belongs to.

    bw get attachment b857igwl1dzrs2 --output ./photo.jpg \
        --itemid 99ee88d2-6046-4ea7-92c2-acac464b1412
    bw get attachment photo.jpg --raw \
        --itemid 99ee88d2-6046-4ea7-92c2-acac464b1412

### Create Items, attachments, and folders

The `create` command allows you to create new objects in your vault.

    bw create (item|attachment|folder|org-collection) [encodedJson] [options]

The process for creating an object may look something like this:

1. Get the JSON template(s) for the object you are trying to create:

       bw get template folder
2. Edit the JSON template with the values you want to use for that object.
3. Base 64 encode the JSON string. You can [use the `encode` command](#encode) included with the CLI and pipe in the JSON string from stdin:

       echo '{"name":"My Folder"}' | bw encode
4. Create the item:

       bw create folder eyJuYW1lIjoiTXkgRm9sZGVyIn0=

The `create` command can also receive encoded JSON as stdin. A complete example, using `jq` to update a template's JSON (see more about [working with JSON](#working-with-json) below), may look something like this:

    bw get template folder | jq '.name = "My Folder"' | bw encode | bw create folder

Upon success, the newly created object will be returned.

To create a new attachment for an item, specify the `--file` path on disk as well as the `--itemid`.
```
    bw create attachment --file ./path/to/myfile.csv \
        --itemid 16b15b89-65b3-4639-ad2a-95052a6d8f66
```

### Creating Collections

PowerShell:

```
bw get template org-collection | jq ('.organizationId="""00000000-0000-0000-0000-00000000""" | .name="""TestCollection"""') | bw encode | bw create org-collection --organizationid 00000000-0000-0000-0000-00000000
```

Bash:

```
bw get template org-collection | jq ('.organizationId="00000000-0000-0000-0000-00000000" | .name="TestCollection"') | bw encode | bw create org-collection --organizationid 00000000-0000-0000-0000-00000000
```

### Edit

The `edit` command allows you to edit an item in your vault. It works similarly to the `create` command with the added requirement of an object id. The `edit` command will perform a *replace* operation on the object. Upon success, the updated object will be returned.

```
bw edit (item|item-collections|folder|org-collection) <id> [encodedJson] [options]
```
```
bw edit folder dadc91e0-dcda-4bc2-8cd6-52100027c782 eyJuYW1lIjoiV2hhdCBGb2xkZXIifQ==
bw get folder dadc91e0-dcda-4bc2-8cd6-52100027c782 | jq '.name = "Updated Folder"' | \
    bw encode | bw edit folder dadc91e0-dcda-4bc2-8cd6-52100027c782
echo '["86544cd3-7e07-42bb-ba3c-e7f59852acaa","ae8c6c9e-26de-442c-b63b-3e28ef61d72d"]' | \
    bw encode | bw edit item-collections db71c8d6-3e69-4593-a6de-505e94966290
```

### Delete

The `delete` command allows you to delete an object from your vault. By default this command will
only "soft delete" the item (sending it to your trash bin). To permanently delete an item you must
use the `-p, --permanent` option. When calling the `delete` command for an item already in the trash
the command will be ignored/return an error.

```
bw delete (item|attachment|folder|org-collection) <id> [options]
```
```
bw delete folder dadc91e0-dcda-4bc2-8cd6-52100027c782
bw delete attachment b857igwl1d --itemid 310d5ffd-e9a2-4451-af87-ea054dce0f78
```

#### `--permanent` Option

By default when using the `delete` command for an `item` it will simply be moved to the trash (soft deleted). In order to permanently delete that item you must also pass the `-p, --permanent` option. When calling the `delete` command for an item already in the trash the command will be ignored/return an error.

```
bw delete item 7063feab-4b10-472e-b64c-785e2b870b92 --permanent
```

### Restore

The `restore` command allows you to restore a previously deleted object from your trash.

```
bw restore (item) <id> [options]
```
```
bw restore item 7063feab-4b10-472e-b64c-785e2b870b92
```

### Share

The `share` command allows you to transfer an item from your personal vault to an organization's vault for sharing. Upon success, the updated item will be returned.

```
bw share <id> <organizationId> [encodedJson]
```

`encodedJson` contains a Base 64 encoded JSON array of collection ids for the organization being shared to. At least one collection ID must be provided.

```
bw share 4af958ce-96a7-45d9-beed-1e70fabaa27a 6d82949b-b44d-468a-adae-3f3bacb0ea32 \
    WyI5NzQwNTNkMC0zYjMzLTRiOTgtODg2ZS1mZWNmNWM4ZGJhOTYiXQ==
echo 'WyI5NzQwNTNkMC0zYjMzLTRiOTgtODg2ZS1mZWNmNWM4ZGJhOTYiXQ==' | \
    bw share 4af958ce-96a7-45d9-beed-1e70fabaa27a 6d82949b-b44d-468a-adae-3f3bacb0ea32
echo '["974053d0-3b33-4b98-886e-fecf5c8dba96"]' | bw encode | \
    bw share 4af958ce-96a7-45d9-beed-1e70fabaa27a 6d82949b-b44d-468a-adae-3f3bacb0ea32
```

## Other Useful Commands

The CLI comes with several other commands that you may find useful.

### Confirm

The `confirm` command allows you to confirm invited members of your organization that have already accepted their invitation.

```
bw confirm org-member <id> --organizationid <orgId>
```

### Import

The `import` command allows you to import data from a previous Bitwarden export or another [supported password management application]({% link _articles/importing/import-data.md %}).

```
bw import [<format> <input>] [--formats]
```
```
bw import --formats
bw import bitwardencsv ./file.csv
```

### Export

The `export` command allows you to export your Vault data as plaintext `.json` or `.csv` files, or as a `.json` [Encrypted Export]({% link _articles/importing/encrypted-export.md %}).

Valid format values are `csv`, `json`, and `encrypted_json`.

```
bw export [password] [--output <filePath>] [--format <format>] [--organizationid <orgId>]
```
```
bw export
bw export --format csv
bw export myPassword321 --output ./backups/
bw export myPassword321 --output ./my_backup.json --format json
bw export myPassword321 --organizationid 7063feab-4b10-472e-b64c-785e2b870b92
```

### Generate

The `generate` command allows you to generate strong passwords and passphrases with the following options:

```
bw generate [--lowercase --uppercase --number --special --length --passphrase --separator --words]
```

By default, `bw generate` will generate the equivalent of passing `bw generate -uln --length 14`.

#### Generate Passwords

By default, `generate` will generate passwords. When generating passwords, you may use the following options:
- `-u` (include uppercase)
- `-l` (include lowercase)
- `-n` (include numbers)
- `-s` (include special characters)
- `--length <length>` (length of the password, with a min. of 5)

#### Generate Passphrases

To generate passphrases, specify `bw generate -p`. When generating a passphrase, you may use the following options:
- `--words <words>` (number of words, with a min. of 3)
- `--separator <separator>` (separator character)

### Encode

The `encode` command Base 64 encodes stdin. This command is helpful when performing `create` and `edit` operations.

```
<jsonString> | bw encode
```
```
echo '{"name":"My Folder"}' | bw encode
bw get template folder | jq '.name = "My Folder"' | bw encode | bw create folder
```

### Config

The `config` command allow you to specify settings for the CLI to use.

    bw config <setting> [value]

For example, if you are using a self hosted Bitwarden server you will need to change the endpoint that the CLI communicates with.

    bw config server https://bitwarden.example.com

You can read the value of a configured setting by not specifying a value.

    bw config server

### Update

The `update` command allows you to check if your CLI is up to date. The CLI will not automatically update. You must download new versions of the CLI manually.

    bw update

A URL to download a new version of the CLI executable will be returned to you.

{% callout info %}
If you have installed the CLI through a package managers (such as NPM), you should use the update commands available for that tool. For example, `npm install -g @bitwarden/cli` will update you to the latest version of the CLI on NPM.
{% endcallout %}

### Status

The `status` command shows the server URL, last synced time in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601){:target="_blank"} format, user email and ID, and the vault status.

```
bw status
```

The vault status is one of:
 - `"unauthenticated"` when you're not logged in
 - `"locked"` when the vault is locked
 - `"unlocked"` when the vault is unlocked

Example output when the vault is locked:
```
{
  "serverUrl": "https://bitwarden.example.com",
  "lastSync": "2020-06-16T06:33:51.419Z",
  "userEmail": "user@example.com",
  "userId": "00000000-0000-0000-0000-000000000000",
  "status": "locked"
}
```

Example output when you are not logged in:
```
{
  "serverUrl": "https://bitwarden.example.com",
  "lastSync": null,
  "userEmail": null,
  "userId": null,
  "status": "unauthenticated"
}
```

### Version

The `--version` option allows you to check which version the CLI you are currently using.

```
bw --version
```

## Working with JSON

Commands in the CLI will either return a JSON string or a simple string such as a URL, GUID, or message. When you need to parse or manipulate JSON input/output with the CLI we recommend using the [`jq` command-line tool](https://stedolan.github.io/jq/){:target="_blank"}.

    # Get a login item's password
    bw get item google | jq '.login.password'

    # Create a new folder from a template
    bw get template folder | jq '.name = "My Folder"' | bw encode | bw create folder

    # Update an existing folder's name
    bw get folder dadc91e0-dcda-4bc2-8cd6-52100027c782 | jq '.name = "Updated Folder"' | \
        bw encode | bw edit folder dadc91e0-dcda-4bc2-8cd6-52100027c782

## Self-signed Certificates

If your self-hosted Bitwarden server exposes as self-signed TLS certificate, specify the Node.js environment variable [`NODE_EXTRA_CA_CERTS`](https://nodejs.org/api/cli.html#cli_node_extra_ca_certs_file):

{% icon fa-linux %} {% icon fa-apple %} Bash

    export NODE_EXTRA_CA_CERTS="absolute/path/to/your/certificates.pem"

{% icon fa-windows %} PowerShell

    $env:NODE_EXTRA_CA_CERTS="absolute/path/to/your/certificates.pem"


## Shell Completion

Bitwarden CLI comes with support for shell completion. It can generate shell completion scripts that you can use to enable completion for `bw` in your shell.

### ZSH

You can enable `bw` completion for ZSH using various methods. A few of them are mentioned below:

**vanilla (.zshrc)**:

Add the following line in your `.zshrc` file:

```
eval "$(bw completion --shell zsh); compdef _bw bw;"
```

**vanilla (vendor-completions)**:

Run the following command:

```
bw completion --shell zsh | sudo tee /usr/share/zsh/vendor-completions/_bw
```

[**zinit**](https://github.com/zdharma/zinit):

Run the following commands:

```
bw completion --shell zsh > ~/.local/share/zsh/completions/_bw
zinit creinstall ~/.local/share/zsh/completions
```

## Source Code

As with everything here at Bitwarden, the CLI is fully open source and hosted on GitHub at <https://github.com/bitwarden/cli>.

## Appendix

### Templates

You can use the `get` command to retrieve templates for various types of *request* objects and sub-objects. Templates are useful when needing to get the "base" JSON object to work with while using the `create` command. A template's JSON properties are sometimes populated with example data that you should change.

- `item`
- `item.field`
- `item.login`
- `item.login.uri`
- `item.card`
- `item.identity`
- `item.securenote`
- `folder`
- `collection`
- `item-collections`
- `org-collection`

```
bw get template item
```

Some templates are meant to be used as sub-objects to another template's properties. For example, the `item.login` template is to be used with the `item` template's `login` property.

### Enums

**Two Step Login Methods**

| Name          | Value |
|---------------|-------|
| Authenticator | 0     |
| Email         | 1     |
| Yubikey       | 3     |

{% callout info %}
Other two-step login methods such as FIDO U2F and Duo are not supported by the CLI.
{% endcallout %}

**Item Types**

| Name        | Value |
|-------------|-------|
| Login       | 1     |
| Secure Note | 2     |
| Card        | 3     |
| Identity    | 4     |

**Login URI Match Types**

| Name               | Value |
|--------------------|-------|
| Domain             | 0     |
| Host               | 1     |
| Starts With        | 2     |
| Exact              | 3     |
| Regular Expression | 4     |
| Never              | 5     |

**Field Types**

| Name    | Value |
|---------|-------|
| Text    | 0     |
| Hidden  | 1     |
| Boolean | 2     |

**Secure Note Types**

| Name    | Value |
|---------|-------|
| Generic | 0     |

**Organization User Types**

| Name    | Value |
|---------|-------|
| Owner   | 0     |
| Admin   | 1     |
| User    | 2     |
| Manager | 3     |

**Organization User Status Types**

| Name      | Value |
|-----------|-------|
| Invited   | 0     |
| Accepted  | 1     |
| Confirmed | 2     |
