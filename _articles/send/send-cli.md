---
layout: article
title: Send from CLI
categories: [send]
featured: true
popular: false
tags: []
order: 06
---

Bitwarden Send is available as a set of fully-featured CLI commands.

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

will create a text Send object with the contents `Fastest Send in the West.` and print the Send link.

Or, for example:

```
bw send -f <path/to/file.ext>
```

will create a file Send object with the specified file at the specified `path` and print the Send link.

### create

The `create` command, which can also be run using `bw send` as a shortcut, creates a Send object.

```
bw send create [options] <encodedJson>
```

The `create` command takes encoded JSON as an argument. For example:

```
bw send create 
```

### edit

The `edit` command allows you to edit an existing Send object.

```
bw send edit
```

### delete

The `delete` command will delete a Send owned by you, according to a specified Globally Unique ID.

```
bw send delete <id> [options]
```

{% callout success %}
Use `bw send get <id>` or `bw send list` if you want to confirm that the Send object was deleted.
{% endcallout %}

### get

The `get` command will retrieve a Send owned by you, according to a specified Globally Unique ID or Search Term.

```
bw send get <id / searchterm> [options]
```

**Options:**

- Use `--pretty` to format the JSON the output.
- Use `--text` to only return the text body of the retrieved send.
- Use


### list

The `list` command will list all sends owned by you, returned as a JSON string.

```
bw send list [options]
```

**Options:**

- Use `--pretty` to format the JSON the output.
- Pipe stdout to a file using the `>` operator, for example:

   ```
   bw send list --pretty  > /Users/myaccount/Documents/pretty_list_of_sends.json
   ```

### receive

The `receive` command allows you to delete an existing Send object.

```
bw send receive
```

### template

The `template` command prints the expected JSON formatting for  
