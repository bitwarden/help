---
layout: article
title: Search your Vault
categories: [account-management]
featured: false
popular: false
tags: [search, lunr]
order: 05
---

Bitwarden Vaults can be easily searched to quickly surface relevant Vault items. [Basic search](#basic-search) queries can be made in any Bitwarden client application, and advanced [full-text search](#full-text-search) queries can be made in Web Vaults, Desktop Apps, and Browser Extensions.

The potential results available to any search operation is dependent on what is currently opened through the Filter menu or Navigation, for example:

- If {% icon fa-th %} **All Items** is selected, entered search queries will use all possible Vault items as potential results.
- If the **Login** Type is selected, entered search queries will use all Login items as potential results.
- If **My Folder** is selected, entered search queries will use all items in that Folder as potential results (not including items in a nested Folder).

The placeholder text in the search box will transform to indicate the current search location:

{% image manage-items/search.png Search a Folder%}

## Basic Search

Basic search is available in all Bitwarden client applications. Entering a basic search query (e.g. `Github` or `myusername`) will search for the entered string in the following Vault item fields:

- Item Name
- For Login, Username
- For Login, URI
- For Card, Brand or last four digits
- For Identity, Name

For your convenience, basic search automatically includes leading and trailing [wildcards](#wildcards-and-advanced-search-parameters). For example, searching for `mail` will return Vault items with the name `gmail` as well as `email`.

## Full-text Search

[Full-text search](https://en.wikipedia.org/wiki/Full-text_search){:target="_blank"}, implemented in your Vault using a programming library called [Lunr](https://lunrjs.com/){:target="_blank"}, provides ways to invoke high-performance queries for Vault items. **Full-text search is available in Web Vaults, Desktop Applications, and Browser Extensions.**

### Construct a Full-text Search

To invoke full-text search, start your search query with a "greater than" (`>`) character.

When constructing a full-text search, an indexed field name should immediately follow the "greater than" (`>`) character. The following fields of Vault items are indexed and searchable:

- `shortid`: First 8 characters of the item's ID.
- `organizationid`: ID of the item's Organization (if it belongs to one).
- `name`: Item's designated name.
- `subtitle`: Depending on Item Type; Login Username, Card Brand or last four digits, or Identity Name.
- `notes`: Item's notes.
- `fields`: Name or Value. **Only `Text` type field values are included.**
- `attachments`: Name of the attached file.
- `login.username`: Login item's username.
- `login.uris`: Login item's URI [hostname](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/hostname){:target="_blank"} value.

Once a field is specified, search for a value in that field using a colon (`:`) delimiter, for example:

- `>login.username:jsmith` will search for Login items with `jsmith` specified as the **Username**.
- `>name:Turbo Tax` will search for any Vault items with `Turbo Tax` specified as the **Name**.
- `>fields:Security Question` will search for any Vault items with a custom text field with the **Name** `Security Question`.

### Wildcards and Advanced Search Parameters

When constructing a full-text search, you can apply the asterisk (`*`) as a wildcard character for specified search values, for example:

- `>organizationid:*` will search for all Vault items that belong to an Organization.
- `>-organizationid:*` will search for all Vault items that do not belong to an Organization.
- `>login.username:*@gmail.com` will search for any Login item **Username** that ends in `@gmail.com`.

{% callout success %}
[Lunr](https://lunrjs.com/){:target="_blank"} provides a variety of advanced query options beyond wildcards, including:
- **Term Presence** using a `+` (*must contain*) or `-` (*must not contain*) prefix.

   For example, if you have multiple Gmail accounts, searching `>name:Gmail -Work` **would** return a Vault item with the name `Personal Gmail` but **would not** return a Vault item with the name `Work Gmail`.
- **Fuzzy Matching** using a tilde (`~`) prefix combined with an edit distance integer.

   For example, searching `>name:email~1` would return both Vault items with the name `email` **and** Vault items with the name `gmail`.

Learn more about writing advanced search queries using [Lunr's Searching Guide](https://lunrjs.com/guides/searching.html){:target="_blank"}.
{% endcallout %}
