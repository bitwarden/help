---
layout: article
title: Using URIs
categories: [auto-fill]
featured: false
popular: false
tags: [uri, match detection, autofill]
order: 05
---

Any Login item in your Vault can be created with or edited to include one or more URI (Uniform Resource Identifier). A URI can be a website address (i.e. a URL), a Server IP Address, a Mobile App Package ID, and more.

{% image uri.png Login item URI fields in the Web Vault %}

{% callout success %}
Assigning URIs to Login items is **required if you want to use auto-fill** functionality in the various Bitwarden client applications.
{% endcallout %}

## URI Schemes

Well-formed URIs should include a scheme at the beginning, for example the `https://` scheme to securely reference a website address. If no scheme is specified, `http://` is assumed.

{% callout success %}
Most Bitwarden client applications allow you to {% icon fa-share-square %} **Launch** an website or app directly from your Vault. Without a scheme, Launch won't work properly.
{% endcallout %}

Schemes include:

- `http://` or `https://` reference website addresses (e.g. `https://github.com`)
- `androidapp://` references an Android Application Package ID or Name (e.g. `androidapp://com.twitter.android`)

{% callout success %}
An easy way to obtain the proper URI for an Android app is to **use a web browser** to visit the App's page in the Google Play store. The URI for the app will appear in the URL as an `?id=` query parameter (e.g. `https://play.google.com/store/apps/details?id=com.twitter.android`). [Learn more]({{site.baseurl}}/article/blacklisting-uris/#android-app-uris).
{% endcallout %}

## Match Detection Options

Each URI assigned to a Login item has an associated **Match Detection** option. This option determines when and whether Bitwarden will offer the Login as an available option for auto-fill, typically determined by matching against specific component pieces. The following graphic breaks down component pieces of a URI:

{% image autofill/urlgraphic.png %}

### Default match detection

Bitwarden Browser Extensions and Mobile Apps can select a **Default match detection** behavior from the options listed below by navigating to {% icon fa-cogs %}**Settings** &rarr; **Options** &rarr; **Default URI Match Detection**. You can also set match detection behavior on an item-by-item basis, which will override the global default.

By default, Bitwarden will use **Base domain** matching as the default option.

### Base domain

Selecting **Base domain** will prompt Bitwarden to offer auto-fill when the top-level domain and second-level domain of a Login's URI value match the detected resource.

For example, if the URI value `https://google.com` uses base domain match detection:

|URL|Auto-fill?|
|---|----------|
|http://google.com |<i class="fa fa-check" aria-hidden="true"></i>|
|https://accounts.google.com |<i class="fa fa-check" aria-hidden="true"></i>|
|https://google.net |<i class="fa fa-times" aria-hidden="true"></i>|
|http://yahoo.com |<i class="fa fa-times" aria-hidden="true"></i>|

### Host

Selecting **Host** will prompt Bitwarden to offer auto-fill when the hostname and (*if specified*) port of the Login's URI value matches the detected resource.

For example, if the URI value `https://sub.domain.com:4000` uses host match detection:

|URL|Auto-fill?|
|---|----------|
|http://sub.domain.com:4000 |<i class="fa fa-check" aria-hidden="true"></i>|
|https://sub.domain.com:4000/page.html |<i class="fa fa-check" aria-hidden="true"></i>|
|https://domain.com |<i class="fa fa-times" aria-hidden="true"></i>|
|https://sub.domain.com |<i class="fa fa-times" aria-hidden="true"></i>|
|https://sub2.sub.domain.com:4000 |<i class="fa fa-times" aria-hidden="true"></i>|
|https://sub.domain.com:5000 |<i class="fa fa-times" aria-hidden="true"></i>|

### Starts with

Selecting **Starts with** will prompt Bitwarden to offer auto-fill when the detected resource starts with the Login URI value, regardless of what follows it.

For example, if the URI value `https://sub.domain.com/path/` uses starts with match detection:

|URL|Auto-fill?|
|---|----------|
|https://sub.domain.com/path/ |<i class="fa fa-check" aria-hidden="true"></i>|
|https://sub.domain.com/path/page.html |<i class="fa fa-check" aria-hidden="true"></i>|
|https://sub.domain.com |<i class="fa fa-times" aria-hidden="true"></i>|
|https://sub.domain.com:4000/path/page.html (interrupted with a port) |<i class="fa fa-times" aria-hidden="true"></i>|
|https://sub.domain.com/path (absent trailing slash) |<i class="fa fa-times" aria-hidden="true"></i>|

### Regular expression

{% callout info %}
Regular expressions are an advanced option and can be quite dangerous if used incorrectly. You should not use this option if you do not know exactly what you're doing.
{% endcallout %}

Selecting **Regular expression** will prompt Bitwarden to offer auto-fill when the detected resources matches a specified [regular expression](https://en.wikipedia.org/wiki/Regular_expression){:target="_blank"}. Regular expressions are always *case insensitive*.

#### Unsafe example

If the URI value `^https://.*google\.com$` uses regular expression match detection:

|URL|Auto-fill?|
|---|----------|
|https://google.com |<i class="fa fa-check" aria-hidden="true"></i>|
|https://sub.google.com |<i class="fa fa-check" aria-hidden="true"></i>|
|https://malicious-site.com?q=google.com |<i class="fa fa-check" aria-hidden="true"></i>|
|http://google.com |<i class="fa fa-times" aria-hidden="true"></i>|
|https://yahoo.com |<i class="fa fa-times" aria-hidden="true"></i>|

This probably matches more than what is intended. Consider avoiding periods (`.`), which unless escaped (`\`) match on any character.

#### Safe example

If the URI value `^https://[a-z]+\.wikipedia\.org/w/index\.php` uses regular expression match detection:

|URL|Auto-fill?|
|---|----------|
|https://en.wikipedia.org/w/index.php?title=Special:UserLogin&returnto=Bitwarden |<i class="fa fa-check" aria-hidden="true"></i>|
|https://pl.wikipedia.org/w/index.php?title=Specjalna:Zaloguj&returnto=Bitwarden |<i class="fa fa-check" aria-hidden="true"></i>|
|https://en.wikipedia.org/w/index.php |<i class="fa fa-check" aria-hidden="true"></i>|
|https://malicious-site.com |<i class="fa fa-times" aria-hidden="true"></i>|
|https://en.wikipedia.org/wiki/Bitwarden |<i class="fa fa-times" aria-hidden="true"></i>|

### Exact

Selecting **Exact** will prompt Bitwarden to offer auto-fill when the Login URI value matches the detected resource exactly.

For example, if the URI value `https://www.google.com/page.html` uses exact match detection:

|URL|Auto-fill?|
|---|----------|
|https://www.google.com/page.html |<i class="fa fa-check" aria-hidden="true"></i>|
|http://www.google.com/page.html |<i class="fa fa-times" aria-hidden="true"></i>|
|https://www.google.com/page.html?query=123 |<i class="fa fa-times" aria-hidden="true"></i>|
|https://www.google.com |<i class="fa fa-times" aria-hidden="true"></i>|

### Never

Selecting **Never** will prompt Bitwarden to never offer auto-fill for the Login item.
