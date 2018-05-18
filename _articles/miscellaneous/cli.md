---
layout: article
title: The Bitwarden command-line tool (CLI)
categories: [miscellaneous]
featured: false
popular: false
tags: [cli, command, script, bash, shell, powershell]
---

Bitwarden provides a powerful, full-featured command-line interface (CLI) tool to access and manage your Bitwarden vault. All features that you find in other Bitwarden client applications (desktop, browser extension, etc) are also available through the CLI. The CLI can be used cross-platform on Windows, macOS, and Linux distributions.

## Quick Start

1. [Download and install](#download--install) the CLI for your platform.
2. Move `bw` to `/usr/local/bin` or another directory in your `$PATH`. Windows users can [add `bw.exe` to the current user's `PATH`](https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/){:target="_blank"}. If you installed the CLI with [NPM](https://www.npmjs.com/package/@bitwarden/cli){:target="_blank"} (or another package manager) you can skip this step since `bw` should automatically be added to your path.
3. Verify the `bw` command works in your terminal.

       bw --help

## Download &amp; Install

You can install the Bitwarden CLI multiple different ways:

### Native executable

Natively packaged versions of the CLI for each platform have no dependencies.

- {% icon fa-windows fa-lg fa-fw %} [Windows x64]()
- {% icon fa-apple fa-lg fa-fw %} [macOS x64]()
- {% icon fa-linux fa-lg fa-fw %} [Linux x64]()

### NPM

If you already have the Node.js runtime installed on your system, you can install the CLI using [NPM](https://www.npmjs.com/package/@bitwarden/cli){:target="_blank"}. NPM makes it easy to keep your installation updated and should be the preferred installation method if you are already using Node.js.

    npm install -g @bitwarden/cli

## Session Management

You can log into your Bitwarden user account by using the `login` command:

    bw login [email] [password]

After logging in you will be returned a *session key*. This session key is necessary to perform any commands that require your vault to be unlocked (`list`, `get`, `edit`, etc). You can pass the `--raw` option to `login` to receive *only* the session key from stdout.

    bw login [email] [password] --raw

You should pass the session key to CLI commands by setting the `BW_SESSION` environment variable or by using the `--session <key>` option:

### Environment Variable

{% icon fa-linux %} {% icon fa-apple %} Bash

    export BW_SESSION="5PBYGU+5yt3RHcCjoeJKx/wByU34vokGRZjXpSH7Ylo8w=="
    bw list items

{% icon fa-windows %} PowerShell

    $env:BW_SESSION="5PBYGU+5yt3RHcCjoeJKx/wByU34vokGRZjXpSH7Ylo8w=="
    bw list items

### `--session <key>` Option

    bw list items --session 5PBYGU+5yt3RHcCjoeJKx/wByU34vokGRZjXpSH7Ylo8w==

{% note %}
It is possible to persist your session key to your environment (for example, exporting it in `.bashrc`), however, we do not recommend doing this. Your active session key is the encryption key used to unlock all data associated with your Bitwarden vault and is not well-suited for persisting on an unprotected disk.
{% endnote %}

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

Additionally, you can run the `--help` option on an command to learn more about it specifically. For example:

    bw list --help

## Managing Your Vault

### List

The `list` command allows you to retrieve an array of objects from your vault.

    bw list (items|folders|collections) [options]

You can search the list of returned objects by using the `--search` option. You can also filter the list by using the `--folderid`, `--collectionid`, or `--organizationid` options. Combining search with filter options performs a logical AND operation.

    bw list items --search github --folderid 9742101e-68b8-4a07-b5b1-9578b5f88e6f

Special syntax is available for filters that allows you to specify `null` and `!null` as valid values. Combining multiple filters together performs a logical OR operation.

    bw list items --folderid null --organizationid !null

### Get

The `get` command allows you to retrieve a single object from your vault.

    bw list (item|username|password|uri|totp|exposed|attachment|folder|collection|template) <id>

You can retrieve an object by its globally using `id` property (usually a GUID), or you can provide a search term. The search term must be specific enough to only return a single result or you will get an error.

    bw get item 99ee88d2-6046-4ea7-92c2-acac464b1412
    bw get password https://google.com
    bw get totp google
    bw get exposed yahoo.com

If you are getting an attachment, you must also specify the `--itemid <id>` option of the item that the attachment belongs to.

    bw get attachment b857igwl1d --itemid 99ee88d2-6046-4ea7-92c2-acac464b1412 --output ./pic.jpg
    bw get attachment pic.jpg --itemid 99ee88d2-6046-4ea7-92c2-acac464b1412 --raw

### Create

The `create` command allows you to create new objects in your vault.

    bw create (item|folder) [encodedJson]

The process for creating an object may look something like this:

1. Get the JSON template(s) for the object you are trying to create:
    
       bw get template folder
2. Edit the JSON template with the values you want to use for that object.
3. Base 64 encode the JSON string. You can use the `encode` command included with the CLI and pipe in the JSON string from stdin:
    
       echo '{"name":"My Folder"}' | bw encode
4. Create the item:
    
       bw create folder eyJuYW1lIjoiTXkgRm9sZGVyIn0=

Upon success, the newly created object's `id` will be returned.

To create a new attachment for an item, specify the `--file` path on disk as well as the `--itemid`.

    bw create attachment --file ./myfile.csv --itemid 16b15b89-65b3-4639-ad2a-95052a6d8f66

### Edit

The `edit` command allows you to edit an item in your vault. It works similarly to the `create` command with the added requirement of an object id. The `edit` command will perform a replace operation on the object.

```
bw edit (item|folder) <id> [encodedJson]
```
```
bw edit folder dadc91e0-dcda-4bc2-8cd6-52100027c782 eyJuYW1lIjoiV2hhdCBGb2xkZXIifQ==
```

### Delete

The `delete` command allows you to delete an object from your vault.

```
bw delete (item|attachment|collection) <id> [options]
```
```
bw delete folder dadc91e0-dcda-4bc2-8cd6-52100027c782
bw delete attachment b857igwl1d --itemid 310d5ffd-e9a2-4451-af87-ea054dce0f78
```

## Other Useful Commands

## Working with JSON

## Source Code

As with everything here at Bitwarden, the CLI is fully open source and hosted on GitHub at <https://github.com/bitwarden/cli>.

## Appendix

### Templates

### Enums

**Two Step Login Methods**

**Item Types**

**Login URI Match Types**