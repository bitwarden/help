---
layout: article
title: Bitwarden CLI
categories: [getting-started]
featured: false
popular: false
tags: [cli, command, script, bash, shell, powershell, terminal]
order: 07
---

The Bitwarden command-line interface (CLI) is a powerful, fully-featured tool for accessing and managing your Vault. Most features that you find in other Bitwarden client applications (Desktop, Browser Extension, etc.) are available from the CLI.

{% image cli.png %}

The Bitwarden CLI is self-documented. From the command line, learn about the available commands using:

```
bw --help
```
Or, pass `--help` as an option on any `bw` command to see available options and examples:

```
bw list --help

bw move --help
```

Most information you'll need can be accessed using `--help`, however this article replicates all that information and goes into greater depth on some topics.

## Download and Install

The CLI can be used cross-platform on Windows, macOS, and Linux distributions. To download and install the Bitwarden CLI:

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" id="tab" role="presentation">
    <a class="nav-link active" id="exectab" data-bs-toggle="tab" data-target="#executable" role="tab" aria-controls="executable" aria-selected="true">Native Executable</a>
  </li>
  <li class="nav-item" id="tab" role="presentation">
    <a class="nav-link" id="npmtab" data-bs-toggle="tab" data-target="#npm" role="tab" aria-controls="npm" aria-selected="false">NPM</a>
  </li>
  <li class="nav-item" id="tab" role="presentation">
    <a class="nav-link" id="chocotab" data-bs-toggle="tab" data-target="#chocolatey" role="tab" aria-controls="chocolatey" aria-selected="false">Chocolatey</a>
  </li>
  <li class="nav-item" id="tab" role="presentation">
    <a class="nav-link" id="brewtab" data-bs-toggle="tab" data-target="#homebrew" role="tab" aria-controls="homebrew" aria-selected="false">Homebrew</a>
  </li>
  <li class="nav-item" id="tab" role="presentation">
    <a class="nav-link" id="snaptab" data-bs-toggle="tab" data-target="#snap" role="tab" aria-controls="snap" aria-selected="false">Snap</a>
  </li>
</ul>

<div class="tab-content" id="clientsContent">
  <div class="tab-pane show active" id="executable" role="tabpanel" aria-labelledby="betab">
{% capture executable %}
### Native Executable

Natively packaged versions of the CLI are available for each platform and have no dependencies. Download using one of these links:

- {% icon fa-windows fa-lg fa-fw %} [Windows x64](https://vault.bitwarden.com/download/?app=cli&platform=windows)
- {% icon fa-apple fa-lg fa-fw %} [macOS x64](https://vault.bitwarden.com/download/?app=cli&platform=macos)
- {% icon fa-linux fa-lg fa-fw %} [Linux x64](https://vault.bitwarden.com/download/?app=cli&platform=linux)

{% callout success %}
In UNIX systems you might get a `Permission denied` message. If you do, grant permission by running:

```
bash chmod +x </path/to/executable>
```
{% endcallout %}
{% endcapture %}
{{ executable | markdownify }}
  </div>
  <div class="tab-pane" id="npm" role="tabpanel" aria-labelledby="npmtab">
{% capture npm %}
### NPM

If you have Node.js installed on your system, you can install the CLI using NPM. Installing with NPM is the simplest way to keep your installation up-to-date and should be the **preferred method for those already comfortable with NPM**:

```
npm install -g @bitwarden/cli
```

[View the package on npmjs.org](https://www.npmjs.com/package/@bitwarden/cli){:target="_blank"}.
{% endcapture %}
{{ npm | markdownify }}
  </div>
  <div class="tab-pane" id="chocolatey" role="tabpanel" aria-labelledby="chocotab">
{% capture chocolatey %}
### Chocolatey

To install with Chocolatey:

```
choco install bitwarden-cli
```

[View the package on community.chocolatey.org](https://chocolatey.org/packages/bitwarden-cli){:target="_blank"}.
{% endcapture %}
{{ chocolatey | markdownify }}
  </div>
  <div class="tab-pane" id="homebrew" role="tabpanel" aria-labelledby="brewtab">
{% capture homebrew %}
### Homebrew

To install with Homebrew:

```
brew install bitwarden-cli
```

[View the package on formulae.brew](https://formulae.brew.sh/formula/bitwarden-cli){:target="_blank"}.
{% endcapture %}
{{ homebrew | markdownify }}
  </div>
  <div class="tab-pane" id="snap" role="tabpanel" aria-labelledby="snaptab">
{% capture snap %}
### Snap

To install with Snap:

```
sudo snap install bw
```

[View the package on snapcraft.io](https://snapcraft.io/bw){:target="_blank"}.
{% endcapture %}
{{ snap | markdownify }}
  </div>
</div>

## Log In

Logging in to the Bitwarden CLI authenticates you with the [configured](#config) Bitwarden server and syncs your Vault. To log in to Bitwarden, use the `login` command with one of the following login workflow options:

 - [Using email and password](#using-email-and-password)
 - [Using an API key](#using-an-api-key)
 - [Using SSO](#using-sso)

### Using email and password

Logging in with email and password authenticates you with Bitwarden servers, syncs your Vault, **and unlocks your Vault**. This is the only method that automatically unlocks your Vault. To log in with email and password use:

```
bw login
```

This command will initiate a prompt for your **Email address**, **Master password**, and (if [enabled]({{site.baseurl}}/article/setup-two-step-login/)) a **Two-step login code**.

{% callout info %}
You *can* string this together into a single command as in the following example, however this is not recommended for security reasons.

```
bw login [email] [password] --method <method> --code <code>
```

See [Appendices &rarr; Enums](#enums) for `<method>` values.
{% endcallout %}

### Using an API key

{% callout success %}
**Getting prompted for additional authentication** or getting a `Your authentication request appears to be coming from a bot.` error? Use your API Key `client_secret` to answer the authentication challenge. [Learn more]({{site.baseurl}}/article/cli-auth-challenges/).
{% endcallout %}

Logging in with a [Personal API Key]({{site.baseurl}}/article/personal-api-key/) authenticates you with Bitwarden servers, syncs your Vault, but **does not unlock your Vault**. After logging in with an API key, you will be required to unlock your Vault using your Master Password. To log in with an API key use:

```
bw login --apikey
```
This command will initiate a prompt for your personal `client_id` and `client_secret`.

{% callout success %}
When logging in with an API key, the CLI will first look for non-empty environment variables `BW_CLIENTID` and `BW_CLIENTSECRET` before initiating a prompt for `client_id` and `client_secret`.

If you don't want to be prompted for the `client_id` and `client_secret` every time, you can save these values to `BW_CLIENTID` and `BW_CLIENTSECRET` respectively.
{% endcallout %}

### Using SSO

Logging in with [SSO]({{site.baseurl}}/article/about-sso/) authenticates you with Bitwarden servers, syncs your Vault, but **does not unlock your Vault**. After logging in with SSO, you will be required to unlock your Vault using your Master Password. To log in with SSO use:

```
bw login --sso
```

This command will initiate the SSO authentication flow in your web browser.

### Two-step login

The CLI currently supports [two-step login]({{site.baseurl}}/article/setup-two-step-login/) via [authenticator]({{site.baseurl}}/article/setup-two-step-login-authenticator/), [email]({{site.baseurl}}/article/setup-two-step-login-email/), or [Yubikey]({{site.baseurl}}/article/setup-two-step-login-yubikey/). If you have one of these methods enabled, you will be required to enter your two-step login code to log in. If you have multiple methods enabled, you will be prompted first to select which method to use.

{% callout info %}
You *can* pass your two-step login method and code as options, as in the following example.

```
bw login [email] [password] --method <method> --code <code>
```

See [Appendices &rarr; Enums](#enums) for `<method>` values.
{% endcallout %}

## Session Management

Logging in [using email and password](#using-email-and-password) is the only method which automatically **unlocks** your Vault. All other options will subsequently prompt you to unlock your Vault using your Master Password.

In the CLI, unlocking your Vault generates a **session key** which acts as the decryption key used to interact with data in your Vault. The [session key must be used](#using-a-session-key) to perform any command that touches Vault data (e.g. `list`, `get`, `edit`). You can generate a new session key at any time using:

```
bw unlock
```

This command will prompt your for your Master Password and generate a new session key.

You can also **lock** (i.e. destroy any active session key) using:

```
bw lock
```

### Using a Session Key

The typical way to use a session key is to set a `BW_SESSION` environment variable with the session key's value. When you log in and unlock your Vault using any one of the [above methods](#log-in), the CLI will return both a `export BW_SESSION` (Bash) and `env:BW_SESSION` (PowerShell) command, including your session key, that can be easily copied and pasted to save the required environment variable.

When you set the `BW_SESSION` environment variable, `bw` commands will reference that variable and can be run cleanly, for example:

```
export BW_SESSION="5PBYGU+5yt3RHcCjoeJKx/wByU34vokGRZjXpSH7Ylo8w=="

bw list items
```

The `BW_SESSION` environment variable is only tied to the active terminal session, so closing your terminal window is equivalent to locking your Vault.

Alternatively, if you don't set the environment variable, you can pass the session key as an option with each `bw` command:

```
bw list items --session "5PBYGU+5yt3RHcCjoeJKx/wByU34vokGRZjXpSH7Ylo8w=="
```

{% callout info %}
It is *possible* to persist your session key to your environment (for example, exporting it in `.bashrc`), however, **we do not recommend doing so**. Considering their use, session keys are not well-suited to persisting on an unprotected disk.
{% endcallout %}

## Core Commands

### create

The `create` command creates a new object (`item`, `attachment`, etc.) in your Vault:

```
bw create (item|attachment|folder|org-collection) <encodedJson> [options]
```

The `create` command takes encoded JSON. A typical workflow for creating an object might look something like:

1. Use the `get template` command (see [details](#get-template)) to output the appropriate JSON template for the object type.
2. Use a [command-line JSON processor like jq](https://stedolan.github.io/jq/){:target="\_blank"} to manipulate the outputted template as required.
3. Use the `encode` command (see [details](#encode)) to encode the manipulated JSON.
4. Use the `create` command to create an object from the encoded JSON.

For example:

```
bw get template folder | jq '.name="My First Folder"' | bw encode | bw create folder
```

or

```
bw get template item | jq ".name=\"My Login Item\" | .login=$(bw get template item.login | jq '.username="jdoe" | .password="myp@ssword123"')" | bw encode | bw create item
```

Upon successful creation, the newly created object will be returned as JSON.

#### create attachment

The `create attachment` command attaches a file to an **existing** item.

Unlike other `create` operations, you don't need to use a JSON processor or `encode` to create an attachment. Instead, use the `--file` option to specify the file to attach and the `--itemid` option to specify the item to attach it to. For example:

```
bw create attachment --file ./path/to/file --itemid 16b15b89-65b3-4639-ad2a-95052a6d8f66
```

{% callout success %}
If you don't know the exact `itemid` you want to use, use `bw get item <search-term>` to return the item (see [details](#get)), including its `id`.
{% endcallout %}

### get

The `get` command retrieves a single object (`item`, `username`, `password`, etc.) from your Vault:

```
bw get (item|username|password|uri|totp|exposed|attachment|folder|collection|organization|org-collection|template|fingerprint) <id> [options]
```

The `get` command takes an item `id` or string for its argument. If you use a string (i.e. anything other than an exact `id`), `get` will search your Vault objects for one with a value that matches. For example, the following command would return a Github password:

```
bw get password Github
```

{% callout note %}
The `get` command can **only return one result**, so you should use specific search terms. If multiple results are found, the CLI will return an error.
{% endcallout %}

#### get attachment

The `get attachment` command downloads a file attachment:

```
bw get attachment <filename> --itemid <id>
```

The `get attachment` command takes a `filename` and **exact** `id`. By default, `get attachment` will download the attachment to the current working directory. You can use the `--output` option to specify a different output directory, for example:

```
bw get attachment photo.png --itemid 99ee88d2-6046-4ea7-92c2-acac464b1412 --output /Users/myaccount/Pictures/
```

{% callout info %}
When using `--output`, the path **must** end a forward slash (`/`) to specify a directory or a filename (`/Users/myaccount/Pictures/photo.png`).
{% endcallout %}

#### get notes

The `get notes` command retrieves the note for any Vault item:

```
bw get notes <id>
```

`get notes` takes an exact item `id` or string. If you use a string (i.e. anything other than an exact `id`), `getnotes` will search your Vault objects for one with a value that matches. For example, the following command would return a Github note:

```
bw get notes Github
```

#### get template

The `get template` command returns the expected JSON formatting for an object (`item`, `item.field`, `item.login`, etc.):

```
bw get template (item|item.field|item.login|item.login.uri|item.card|item.identity|item.securenote|folder|collection|item-collections|org-collection)
```

While you *can* use `get template` to output the format to your screen, the most common use-case is to pipe the output into a `bw create` operation, using a [command-line JSON processor like jq](https://stedolan.github.io/jq/){:target="\_blank"} and `bw encode` to manipulate the values retrieved from the template, for example:

```
bw get template folder | jq '.name="My First Folder"' | bw encode | bw create folder
```

{% callout info %}
Any `item.xxx` template should be used as a sub-object to an `item` template, for example:

```
bw get template item | jq ".name=\"My Login Item\" | .login=$(bw get template item.login | jq '.username="jdoe" | .password="myp@ssword123"')" | bw encode | bw create item
```
{% endcallout %}

### edit

The `edit` command edits an object (`item`, `item-collections`, etc.) in your Vault:
```
bw edit (item|item-collections|folder|org-collection) <id> [encodedJson] [options]
```

The `edit` command takes an **exact** `id` (the object to edit) and encoded JSON (edits to be made). A typical workflow might look something like:

1. Use the `get` command (see [details](#get)) to output the object to edit.
2. Use a [command-line JSON processor like jq](https://stedolan.github.io/jq/){:target="\_blank"} to manipulate the outputted object as required.
3. Use the `encode` command (see [details](#encode)) to encode the manipulated JSON.
4. Use the `edit` command (including the object `id`) to edit the object.

For example:

```
bw get item 7ac9cae8-5067-4faf-b6ab-acfd00e2c328 | jq '.login.password="newp@ssw0rd"' | bw encode | bw edit item 7ac9cae8-5067-4faf-b6ab-acfd00e2c328
```

Or, to edit a Collection:

```
bw get collection ee9f9dc2-ec29-4b7f-9afb-aac8010631a1 | jq '.name="My Collection"' | bw encode | bw edit item-collections ee9f9dc2-ec29-4b7f-9afb-aac8010631a1
```

The `edit` command will perform a **replace** operation on the object. Upon success, the updated object will be returned as JSON.

### list

The `list` command retrieves an array of objects (`items`, `folders`, `collections`, etc.) from your Vault:

```
bw list (items|folders|collections|organizations|org-collections|org-members) [options]
```

Options for the `list` command are **filters** used to dictate what will be returned, including `--url <url>`, `--folderid <folderid>`, `--collectionid <collectionid>`, `--organizationid <organizationid>` and `--trash`. Any filter will accept `null` or `notnull`. Combining multiple filters in one command will perform a logical OR operation, for example:

```
bw list items --folderid null --collectionid null
```

This command will return items that are *not* in a folder *or* Collection.

Additionally, you can **search** for specific objects using `--search <search-term>`. Combining filter and search in one command will perform a logical AND operation, for example:

```
bw list items --search github --folderid 9742101e-68b8-4a07-b5b1-9578b5f88e6f
```

This command will search for items with the string `github` in the specified folder.

### delete

The `delete` command deletes an object from your Vault. `delete` takes **only an exact** `id` for its argument.

```
bw delete (item|attachment|folder|org-collection) <id> [options]
```

By default, `delete` will "soft delete" an item (i.e. send it to the [Trash]({{site.baseurl}}/article/managing-items/#items-in-the-trash)). You can permanently delete an item using the `-p, --permanent` option.

```
bw delete item 7063feab-4b10-472e-b64c-785e2b870b92 --permanent
```

To delete an `org-collection`, you'll also need to specify `--organizationid <organizationid>`. See [Organization IDs](#organization-ids).

{% callout warning %}
While items that are "soft deleted" using `delete` can be recovered using the `restore` command (see [details](#restore)), items that are deleted using `delete --permanent` **are completely removed and irrecoverable.**
{% endcallout %}

### restore

The `restore` command restores a deleted object from your Trash. `restore` takes **only an exact** `id` for its argument.

```
bw restore (item) <id> [options]
```

For example:

```
bw restore item 7063feab-4b10-472e-b64c-785e2b870b92
```

### send

The `send` command creates a [Bitwarden Send]({{site.baseurl}}/article/about-send) object for ephemeral sharing. This section will detail simple `send` operations, however Send is a highly flexible tool and we recommend referring to the dedicated article on [Send from CLI]({{site.baseurl}}/article/send-cli).

To create a simple text Send:

```
bw send -n "My First Send" -d 7 --hidden "The contents of my first text Send."
```

To create a simple file Send:

```
bw send -n "A Sensitive File" -d 14 -f /Users/my_account/Documents/sensitive_file.pdf
```

### receive

The `receive` command accesses a [Bitwarden Send]({{site.baseurl}}/article/about-send) object. To receive a Send object:

```
bw receive --password passwordforaccess https://vault.bitwarden.com/#/send/yawoill8rk6VM6zCATXv2A/9WN8wD-hzsDJjfnXLeNc2Q
```

## Organizations Commands

### Organization IDs

Accessing an Organization from the CLI frequently requires knowledge of an ID for your Organization, as well as IDs for individual [members]({{site.baseurl}}/article/managing-users/) and [Collections]({{site.baseurl}}/article/about-collections/).

Retrieve this information directly from the CLI using `bw list`, for example:

```
bw list organizations
bw list org-members --organizationid 4016326f-98b6-42ff-b9fc-ac63014988f5
bw list org-collections --organizationid 4016326f-98b6-42ff-b9fc-ac63014988f5
```

{% callout success %}
You can `bw list` both `collections` and `org-collections`. `bw list collections` will list *all* Collections, agnostic of which Organization they belong to. `bw list org-collections` will list *only* Collections that belong to the Organization specified using `--organizationid`.
{% endcallout %}

### move

{% callout info %}
**August 2021**: The `share` command has been changed to `move`. [Find out more]({{site.baseurl}}/article/releasenotes/).
{% endcallout %}

The `move` command transfers a Vault item [to an Organization]({{site.baseurl}}/article/sharing/):

```
bw move <itemid> <organizationid> [encodedJson]
```

The `move` command requires you to `encode` a Collection ID, and takes an **exact** `id` (the object to share) and an **exact** `organizationid` (the Organization to share the object to). For example:

```
echo '["bq209461-4129-4b8d-b760-acd401474va2"]' | bw encode | bw move ed42f44c-f81f-48de-a123-ad01013132ca dfghbc921-04eb-43a7-84b1-ac74013bqb2e
```

Upon success, the updated item will be returned.

### confirm

The `confirm` command confirms [invited members]({{site.baseurl}}/article/managing-users/#confirm-invited-users) to your Organization who have accepted their invitation:

```
bw confirm org-member <id> --organizationid <orgid>
```

The `confirm` command takes an **exact** member `id` and an **exact** `organizationID`, for example:

```
bw confirm org-member 7063feab-4b10-472e-b64c-785e2b870b92 --organizationid 310d5ffd-e9a2-4451-af87-ea054dce0f78
```

## Other Commands

### config

The `config` command specifies settings for the Bitwarden CLI to use:

```
bw config <setting> [value]
```

A primary use of `bw config` is to [connect your CLI to a self-hosted]({{site.baseurl}}/article/change-client-environment/#cli) Bitwarden server:

```
bw config server https://your.bw.domain.com
```

{% callout success %}
You can read the currently connected server by passing `bw config server` without a value.
{% endcallout %}

Users with unique setups may elect to specify the URL of each service independently using:

```
bw config --web-vault <url>
bw config --api <url>
bw config --identity <url>
bw config --icons <url>
bw config --notifications <url>
bw config --events <url>
```

### sync

The `sync` command downloads your encrypted vault from the Bitwarden server. This command is most useful when you've changed something in your Bitwarden Vault on another client application (e.g. Web Vault, Browser Extension, Mobile App) since [logging in](#log-in) on the CLI.

```
bw sync
```

You can pass the `--last` option to return only the timestamp ([ISO 8601](https://en.wikipedia.org/wiki/ISO_8601){:target="_blank"}) of the last time a sync was performed.

{% callout success %}
It's important to know that `sync` **only performs a pull** from the server. Data is automatically pushed to the server any time you make a change to your Vault (e.g. `create`, `edit`, `delete`).
{% endcallout %}

### encode

The `encode` command Base 64 encodes stdin. This command is typically used in combination with a [command-line JSON processor like jq](https://stedolan.github.io/jq/){:target="\_blank"} when performing `create` and `edit` operations, for example:

```
bw get template folder | jq '.name="My First Folder"' | bw encode | bw create folder

bw get item 7ac9cae8-5067-4faf-b6ab-acfd00e2c328 | jq '.login.password="newp@ssw0rd"' | bw encode | bw edit item 7ac9cae8-5067-4faf-b6ab-acfd00e2c328
```

### import

The `import` command imports data from a prior Bitwarden export or other [supported password management application]({% link _articles/importing/import-data.md %}):

```
bw import <format> <path>
```

For example:

```
bw import lastpasscsv /Users/myaccount/Documents/mydata.csv
```

{% callout success %}
Bitwarden supports lots of formats for import, too many to list here! Use `bw import --formats` to return the list in your CLI, or [see here]({{site.baseurl}}/article/import-faqs/#q-what-file-formats-does-bitwarden-support-for-import).
{% endcallout %}

### export

The `export` command exports Vault data as a `.json` or `.csv`, or [encrypted .json]({% link _articles/importing/encrypted-export.md %}) file:

```
bw export [password] [--output <filePath>] [--format <format>] [--organizationid <orgid>]
```

The `export` command always requires your Master Password, even with an active [session key](#using-a-session-key).

By default, the `export` command will generate a `.csv` (equivalent to specifying `--format csv`) to the current working directory, however you can specify:

- `--format json` to export a `.json` file.
- `--format encrypted_json` to export an [encrypted .json]({% link _articles/importing/encrypted-export.md %}) file.
- `--output <path>` to export to a specific location.
- `--raw` to return the export to stdout instead of to a file.

#### export an Organization Vault

Using the `export` command with the `--organizationid` option, you can export an Organization Vault:

```
bw export myp@ssw0rd --organizationid 7063feab-4b10-472e-b64c-785e2b870b92 --format json --output /Users/myaccount/Downloads/
```

### generate

The `generate` command generates a strong password or [passphrase](#generate-a-passphrase):

```
bw generate [--lowercase --uppercase --number --special --length <length> --passphrase --separator <separator> --words <words>]
```

By default, the `generate` command will generate a 14-character password with uppercase characters, lowercase characters, and numbers. This is the equivalent of passing:

```
bw generate -uln --length 14
```

You can generate more complex passwords using the options available to the command, including:

- `--uppercase, -u` (include uppercase)
- `--lowercase, -l` (include lowercase)
- `--number, -n` (include numbers)
- `--special, -s` (include special characters)
- `--length <length>` (length of the password, min. of 5)

#### generate a passphrase

Using the `generate` command with the `--passphrase` option, you can generate a passphrase instead of a password:

```
bw generate --passphrase --words <words> --separator <separator>
```

By default, `bw generate --passphrase` will generate a 3-word passphrase separated by a dash (`-`). This is the equivalent of passing:

```
bw generate --passphrase --words 3 --separator -
```

You can generate a complex passphrase using the options available to the command, including:

- `--words <words>` (number of words)
- `--separator <separator>` (separator character)

### update

The `update` command checks whether your Bitwarden CLI is running the most recent version. `update` **does not automatically update the CLI for you.**

```
bw update
```

If a new version is detected, you'll need to download the new version of the CLI using the printed URL for the executable, or using the tools available for the package manager you used to [download the CLI](#download-and-install) (e.g. `npm install -g @bitwarden/cli`).

### status

The `status` command returns status information about the Bitwarden CLI, including [configured](#config) server URL, timestamp for the last sync ([ISO 8601](https://en.wikipedia.org/wiki/ISO_8601){:target="_blank"}), user email and ID, and the Vault status.

```
bw status
```

Status will return information as a JSON object, for example:

```
{
  "serverUrl": "https://bitwarden.example.com",
  "lastSync": "2020-06-16T06:33:51.419Z",
  "userEmail": "user@example.com",
  "userId": "00000000-0000-0000-0000-000000000000",
  "status": "unlocked"
}
```

`status` may be one of the following:

- `"unlocked"`, indicating you are logged in and your Vault is unlocked (i.e. a `BW_SESSION` key environment variable is saved with an active [session key](#using-a-session-key)).
- `"locked"`, indicating you are logged in but your Vault is locked (i.e. **no** `BW_SESSION` key environment variable is saved with an active [session key](#using-a-session-key))
- `"unauthenticated"`, indicating you aren't logged in.

{% callout success %}
When `"status": "unauthenticated"`, `lastSync`, `userEmail`, and `userID` will always return `null`.
{% endcallout %}

## Appendices

### Global Options

The following options are available globally:

|Option|Description|
|------|-----------|
|`--pretty`|Format output. JSON is tabbed with two spaces.|
|`--raw`|Return raw output instead of a descriptive message.|
|`--response`|Return a JSON formatted version of response output.|
|`--quiet`|Don't return anything to stdout.|
|`--nointeraction`|Do not prompt for interactive user input.|
|`--session <session>`|Pass session key instead of reading from an environment variable.|
|`-v, --version`|Output the Bitwarden CLI version number.|
|`-h, --help`|Display help text for the command.|

### ZSH Shell Completion

The Bitwarden CLI includes support for ZSH shell completion. To setup shell completion, use one of the following methods:

1. **Vanilla ZSH**: Add the following line to your `.zshrc` file:

   ```
   eval "$(bw completion --shell zsh); compdef _bw bw;"
   ```
2. **Vanilla (vendor-completions)**: Run the following command:

   ```
   bw completion --shell zsh | sudo tee /usr/share/zsh/vendor-completions/_bw
   ```
3. [**zinit**](https://github.com/zdharma/zinit): Run the following commands:

   ```
   bw completion --shell zsh > ~/.local/share/zsh/completions/_bw
   zinit creinstall ~/.local/share/zsh/completions
   ```

### Using Self-signed Certificates

If your self-hosted Bitwarden server exposes as self-signed TLS certificate, specify the Node.js environment variable [`NODE_EXTRA_CA_CERTS`](https://nodejs.org/api/cli.html#cli_node_extra_ca_certs_file):

{% icon fa-linux %} {% icon fa-apple %} Bash

```
export NODE_EXTRA_CA_CERTS="absolute/path/to/your/certificates.pem"
```  

{% icon fa-windows %} PowerShell

```
$env:NODE_EXTRA_CA_CERTS="absolute/path/to/your/certificates.pem"
```

### Enums

The following tables enumerate values required in documented scenarios:

#### Two-step Login Methods

Used to specify which [Two-step Login method]({{site.baseurl}}/article/setup-two-step-login/) to use when [logging in](#log-in):

| Name          | Value |
|---------------|-------|
| Authenticator | 0     |
| Email         | 1     |
| Yubikey       | 3     |

{% callout info %}
FIDO2 and Duo are not supported by the CLI.
{% endcallout %}

#### Item Types

Used with the `create` command to specify a [Vault item type]({{site.baseurl}}/article/managing-items/):

| Name        | Value |
|-------------|-------|
| Login       | 1     |
| Secure Note | 2     |
| Card        | 3     |
| Identity    | 4     |

#### Login URI Match Types

Used with the `create` and `edit` commands to specify [URI match detection]({{site.baseurl}}/article/uri-match-detection/) behavior:

| Name               | Value |
|--------------------|-------|
| Domain             | 0     |
| Host               | 1     |
| Starts With        | 2     |
| Exact              | 3     |
| Regular Expression | 4     |
| Never              | 5     |

#### Field Types

Used with the `create` and `edit` commands to configure [custom fields]({{site.baseurl}}/article/custom-fields/):

| Name    | Value |
|---------|-------|
| Text    | 0     |
| Hidden  | 1     |
| Boolean | 2     |

#### Organization User Types

Indicates a [user's type]({{site.baseurl}}/article/user-types-access-control/):

| Name    | Value |
|---------|-------|
| Owner   | 0     |
| Admin   | 1     |
| User    | 2     |
| Manager | 3     |

#### Organization User Statuses

Indicates a user's [status within the Organization]({{site.baseurl}}/article/managing-users/):

| Name      | Value |
|-----------|-------|
| Invited   | 0     |
| Accepted  | 1     |
| Confirmed | 2     |
