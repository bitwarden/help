---
layout: article
title: Match detection for URIs
categories: [features]
featured: false
popular: false
tags: [uri, match detection, autofill]
---

A login item stored in your vault can have one or more [URI](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier){:target="_blank"} values associated with it. URIs can relate your login to a website address (URL), server IP address, mobile app package ID, and more. URIs are important values for a login since they determine how the auto-fill functions in Bitwarden will behave.

## URI schemes

A well-formed URI also has a "scheme" at the beginning of it. The most common scheme that many of us are familiar with is the `http://` scheme used for a website address.

The scheme can also have special meaning in Bitwarden:

- **`http://`** or **`https://`** tells Bitwarden that this is a website address. Example: `https://www.google.com`
- **`androidapp://`** tells Bitwarden that this is an android application package ID (or package name). Example: `androidapp://com.twitter.android`. Android apps typically follow [reverse domain name notation](https://en.wikipedia.org/wiki/Reverse_domain_name_notation){:target="_blank"}.

{% note %}
If a URI omits the scheme, `http://` is assumed.
{% endnote %}

## Match detection options

Each URI for a login item also has an associated "match detection" value. The match detection value determines whether or not Bitwarden will offer the login as an available option when performing an auto-fill.

While editing a login you can adjust the match detection value for a given URI by selecting the {% icon fa-cog %} **Options** button next to the URI's value.

The following match detection options are available:

{% note %}
**Base domain** is the default URI match detection value for all URIs. You can adjust this default value under **Settings** &rarr; **Options**.
{% endnote %}

**Base domain**

The base domain is defined as the second-level domain plus the top-level domain of the given URI. A URI with a value of `https://www.google.com` would have a base domain value of `google.com`.

Example:

- URI base domain value: `https://www.google.com`
- Matches: `http://google.com`, `https://accounts.google.com`, `https://sub.accounts.google.com`, `https://accounts.google.com/page.html`
- Not matches: `https://google.net`, `https://yahoo.com`

**Host**

The [host](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/host){:target="_blank"} is defined as the hostname plus an *optional* port of the given URI. A URI with a value of `https://sub.domain.com:4000` would have a host value of `sub.domain.com:4000`.

Example:

- URI host value: `https://sub.domain.com:4000`
- Matches: `http://sub.domain.com:4000`, `http://sub.domain.com:4000/page.html`
- Not matches: `https://domain.com`, `https://sub.domain.com`, `https://sub2.domain.com`, `https://sub.domain.com:5000`, `http://sub2.sub.domain.com:4000`

**Starts with**

The "starts with" option requires that the current website/application URI must *start with* the value defined in the URI. A URI with a value of `https://sub.domain.com/path/page.html?query=123` starts with 
`https://sub.domain.com/path/`.

Example:

- URI starts with value: `https://sub.domain.com/path/`
- Matches: `https://sub.domain.com/path/`, `https://sub.domain.com/path/page.html`
- Not matches: `https://sub.domain.com/path` (notice the missing trailing slash), `https://sub.domain.com`, `https://sub.domain.com:4000/path/page.html` (has a port)

**Regular expression**

{% warning %}
Regular expressions are an advanced option and can be quite dangerous if used incorrectly. You should not use this option if you do not know exactly what you are doing.
{% endwarning %}

The regular expression option allows you to write any simple or complex [regular expression](https://en.wikipedia.org/wiki/Regular_expression){:target="_blank"} to match the current website/application URI. All regular expressions are case *insensitive*.

Example:

- URI regex value: `^https://.*google.com$`
- Matches: `https://google.com`, `https://sub.google.com`, `https://sub.sub2.google.com`, `https://malicious-site.com?q=google.com`
- Not matches: `http://google.com` (not https), `https://yahoo.com`

**Exact**

The "exact" option requires that the current website/application URI *exactly* match the value defined in the URI.

Example:

- URI exact value: `https://www.google.com/page.html`
- Matches: `https://www.google.com/page.html`
- Not matches: `http://www.google.com/page.html` (not https), `https://www.google.com/page.html?query=123`, `https://www.google.com`

**Never**

A URI with match detection set to "Never" will *never* be offered for auto-fill.

Example:

- URI never value: `https://www.google.com`
- Matches: none
- Not matches: `https://www.google.com`, `https://google.com`, `https://sub.google.com/page.html`
