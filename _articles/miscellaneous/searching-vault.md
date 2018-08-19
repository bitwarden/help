---
layout: article
title: Searching the vault
categories: [miscellaneous]
featured: false
popular: false
tags: [search, lunr]
---

Bitwarden indexes your vault using a [full-text search](https://en.wikipedia.org/wiki/Full-text_search){:target="_blank"} programming library called [Lunr](https://lunrjs.com/){:target="_blank"}. Lunr provides the ability to invoke high-performance search queries against your vault to quickly find what you need with great accuracy.

## Applications that use full-text search

The following Bitwarden applications provide full-text searching capabilities and are applicable to the information this article:

- Web vault
- Desktop applications
- Browser extensions

This article **does not** apply to the following Bitwarden applications:

- CLI
- Mobile apps

These applications only provide basic search capabilities.

## Indexed Fields

The following fields from items in your vault are indexed and are searchable:

- `shortId` - First 8 characters of the item's id.
- `name`
- `subTitle` - Login username, card last four, and identity name.
- `notes`
- `fields` - Name and value. Only "text" type field values are included.
- `attachments` - File name
- `login.username`
- `login.uris` - Only the URI's [hostname](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/hostname){:target="_blank"} value.

## Wildcard Searches

The asterisk character (`*`) provides the ability to perform wildcard searches in your vault. Examples:

- `*bitwarden`
- `bitwarden*`
- `*bitwarden*`
- `*bit*war*den*`

{% note %}
The following fields automatically include trailing wildcard searches while performing normal search queries:

- `name`
- `subTitle`
- `login.uris`

It is not necessary to provide trailing wildcards if you are searching these fields.
{% endnote %}

## Advanced Searches

Starting your search query with a greater than character (`>`) enables the full power of [Lunr search queries](https://lunrjs.com/guides/searching.html){:target="_blank"}. Examples:

- `>bitwarden*`
- `>notes:something`
- `>login.username:jsmith`
- `>+foo bar -baz`

Learn more about writing advanced search queries using [Lunr's searching guide](https://lunrjs.com/guides/searching.html){:target="_blank"}.
