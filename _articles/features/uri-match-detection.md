---
layout: article
title: URIs for Vault Items
categories: [account-management]
featured: false
popular: false
tags: [uri, match detection, autofill]
order: 09
---

Any Login item in your Vault can be created with or edited to include one or more URI (Uniform Resource Identifier). A URI can be a website address (i.e. a URL), a Server IP Address, a Mobile App Package ID, and more.

{% image uri.png Login item URI fields in the Web Vault %}

{% callout success %}
Assigning URIs to Login items is **required if you want to leverage auto-fill** functionality in the various Bitwarden client applications.
{% endcallout %}

## URI Schemes

Well-formed URIs should include a scheme at the beginning, for example the `https://` scheme to securely reference a website address. If no scheme is specified, `http://` is assumed.

{% callout success %}
Most Bitwarden client applications allow you to {% icon fa-share-square %} **Launch** an website or app directly from your Vault. Without a scheme, this functionality will not work properly.
{% endcallout %}

Schemes include:

- `http://` or `https://` reference website addresses (e.g. `https://github.com`)
- `androidapp://` references an Android Application Package ID or Name (e.g. `androidapp://com.twitter.android`)

## Match Detection Options

Each URI assigned to a Login item has an associated **Match Detection** option. This option determines when and whether Bitwarden will offer the Login as an available option for auto-fill.

### Default match detection

Bitwarden Browser Extensions and Mobile Apps can select a **Default match detection** option from the options below (Base domain, Host, Starts with, Regular expression, Exact, or Never) by navigating to {% icon fa-cogs %}**Settings** &rarr; **Options** &rarr; **Default URI Match Detection**. Setting a default option will not preclude you from specifying a match detection option on an item-by-item basis as well.

By default, Bitwarden will use **Base domain** matching as the default option.


### Base domain

Selecting **Base domain** will prompt Bitwarden to offer auto-fill when the top-level domain and second-level domain of a Login's URI value match the detected resource.

For example, if the URI value `https://google.com` uses base domain match detection:

- **Auto-fill offered** for `http://google.com` & `https://accounts.google.com`
- **Auto-fill not offered** for `https://google.net` & `http://yahoo.com`

### Host

Selecting **Host** will prompt Bitwarden to offer auto-fill when the hostname and (*if specified*) port of the Login's URI value matches the detected resource.

For example, if the URI value `https://sub.domain.com:4000` uses host match detection:

- **Auto-fill offered** for `http://sub.domain.com:4000` & `https://sub.domain.com:4000/page.html`
- **Auto-fill not offered** for `https://domain.com`, `https://sub.domain.com`,  `https://sub2.sub.domain.com:4000`, or `https://sub.domain.com:5000`

### Starts with

Selecting **Starts with** will prompt Bitwarden to offer auto-fill when the detected resource starts with the Login URI value, regardless of what follows it.

For example, if the URI value `https://sub.domain.com/path/` uses starts with match detection:

- **Auto-fill offered** for `https://sub.domain.com/path/` & `https://sub.domain.com/path/page.html`
- **Auto-fill not offered** for `https://sub.domain.com`, `https://sub.domain.com:4000/path/page.html` (interrupted with a port), or `https://sub.domain.com/path` (absent trailing slash)

### Regular expression

{% callout note %}
Regular expressions are an advanced option and can be quite dangerous if used incorrectly. You should not use this option if you do not know exactly what you're doing.
{% endcallout %}

Selecting **Regular expression** will prompt Bitwarden to offer auto-fill when the detected resources matches a specified [regular expression](https://en.wikipedia.org/wiki/Regular_expression){:target="_blank"}. Regular expressions are always *case insensitive*.

Bad example, if the URI vault `^https://.*google\.com$` uses regular expression match detection:

- **Auto-fill offered** for `https://google.com`, `https://sub.google.com`, `https://malicious-site.com?q=google.com`
- **Auto-fill not offered** for `http://google.com` or `https://yahoo.com`

This probably matches more than what is indented. Consider avoiding the `.` which matches any character entierly for this security sensitive use of regular expressions.

Good example, if the URI vault `^https://[a-z]+\.wikipedia\.org/w/index\.php` uses regular expression match detection:

- **Auto-fill offered** for `https://en.wikipedia.org/w/index.php?title=Special:UserLogin&returnto=Bitwarden`, `https://pl.wikipedia.org/w/index.php?title=Specjalna:Zaloguj&returnto=Bitwarden`, `https://en.wikipedia.org/w/index.php`
- **Auto-fill not offered** for `https://en.wikipedia.org/wiki/Bitwarden`, `https://malicious-site.com`


### Exact

Selecting **Exact** will prompt Bitwarden to offer auto-fill when the Login URI value matches the detected resource exactly.

For example, if the URI value `https://www.google.com/page.html` uses exact match detection:

- **Auto-fill offered** for `https://www.google.com/page.html`
- **Auto-fill not offered** for `http://www.google.com/page.html`, `https://www.google.com/page.html?query=123`, or `https://www.google.com`

### Never

Selecting **Never** will prompt Bitwarden to never offer auto-fill for the Login item.
