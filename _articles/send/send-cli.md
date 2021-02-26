---
layout: article
title: Send from CLI
categories: [send]
featured: true
popular: false
tags: []
order: 06
---

Bitwarden Send is available as a set of fully-featured CLI commands. In many cases it will be useful to reference the main article for CLI documentation.

{% image /send/send-cli.png %}

## send

The `send` command is the master command used to access all Send-related subcommands.

```
bw send [options] [command] <data>
```

The `send` command can **also** can also be used as a shortcut to quickly `create` a Send, for example:

```
bw send "Fastest Send in the West."
```

will create a text Send object with the contents `Fastest Send in the West.` and print the Send link. Or, for example:

```
bw send -f <path/to/file.ext>
```

will create a file Send object with the specified file at the specified `path` and print the Send link.

**Options:**

- Use `-n <name>` or `--name <name>` to specify a name for the Send. If none is specified, name will default to the `id` for text Sends and file name for file Sends. For multi-word names, use quotations `"<name>"`.
- Use `-d <days>` or `--deleteInDays <days>` to specify a [deletion date]({% link _articles/send/send-lifespan.md %}) for the Send.
- Use `--hidden` to specify that a text Send requires recipients to [toggle visibility]({{site.baseurl}}/article/send-privacy/#hide-text).
- Use `--notes <notes>` to add private notes to the Send. For multi-word notes, use quotations `"<notes>"`.
- Use `--fullObject` to return the full Send object as JSON rather than only the Send URL (pair this option with the `--pretty` option for formatted JSON).

**Full Example:**

```
bw send -n "My First Send" -d 7 --hidden "The contents of my first Send."
```

### create

The `create` command, creates a Send. The `create` command allows more advanced configuration than using only `bw send` as described [above](#send).

```
bw send create [options] <encodedJson>
```



```
node bw.js send template send | jq ".name=\"My Send\" | .text= $(node bw.js send template send.text | jq '.text="Secret Text to Share." | .hidden=false')" | node bw.js encode | node bw.js send create
```

https://testdo.bitwarden.com/#/send/**DFQoH21lbkGrf6zaAVj5mw**/kl2rBfbN2JKx0nKob0iDAw

### edit

The `edit` command allows you to edit an existing Send object.

```
bw send edit
```

### delete

The `delete` command will delete a Send owned by you, taking a specified unique ID for its argument.

```
bw send delete <id>
```

{% callout success %}
Use `bw send get <id>` or `bw send list` if you want to confirm that the Send object was deleted.
{% endcallout %}

### get

The `get` command will retrieve a Send owned by you, according to a specified Globally Unique ID or Search Term.

```
bw send get [options] <id / searchterm>
```

**Options:**

- Use `--pretty` to format the JSON the output.
- Use `--text` to only return the text body of the retrieved send.
- Use


### list

The `list` command will list all Sends owned by you that haven't reached their [deletion date]({% link _articles/send/send-lifespan.md %}), returned as a JSON string.

```
bw send list [options]
```

**Options:**

- Use `--pretty` to format the JSON the output.
- Pipe stdout to a file using the `>` operator, for example:

   ```
   bw send list --pretty  > /Users/myaccount/Documents/pretty_list_of_sends.json
   ```

### template

The `template` command returns the expected JSON formatting for a Send object.

```
bw send template <object>
```

`<object>` represents one of the two types of Sends, either `send.text` or `send.file`.

For example, `bw send template send.text --pretty` will return:

```
{
  "object": "send",
  "name": "Send name",
  "notes": "Some notes about this send.",
  "type": 0,
  "text": {
    "text": "Text contained in the send.",
    "hidden": false
  },
  "file": null,
  "maxAccessCount": null,
  "deletionDate": "2021-03-05T15:39:56.110Z",
  "expirationDate": null,
  "password": null,
  "disabled": false
}
```

The typical use-case for `bw send template` is to pipe the output into a `bw send create` operation, using a [command-line JSON processor like jq](https://stedolan.github.io/jq/){:target="\_blank"} and `bw encode` to manipulate the values retrieved from the template, for example:

```
bw send template send.text | jq '.name="My First Send" | .text.text="Secrets I want to share."' | bw encode | bw send create
```

## receive

The `receive` command accesses a Send from a generated URL, taking a Send URL for its argument. The `receive` command is the o

```
bw send receive [options] <url>
```

- For text Sends, `receive` will return the text contents of the Send to stdout.
- For file Sends, `receive` will download the file to the current working directory.

**Options:**

- Use `--password <password>` to provide the password needed to access [password-protected]({{site.baseurl}}/article/send-privacy/#passwords) Sends
