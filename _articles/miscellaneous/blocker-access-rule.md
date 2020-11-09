---
layout: article
title: uMatrix and NoScript access rules
categories: [miscellaneous]
featured: false
popular: false
tags: [umatrix, firefox]
---

By default, the uMatrix and NoScript extensions may block the Bitwarden Firefox extension from accessing the Bitwarden API servers. Without adding proper rules to whitelist the Bitwarden API servers, logging in and other API operations will fail.

## uMatrix

The following [uMatrix rule](https://github.com/gorhill/uMatrix/wiki/Rules-syntax) is required:

```
dc8ef5f6-eb0d-4c87-9e9f-0cf803f619e8.moz-extension-scheme bitwarden.com xhr allow
```

{% callout info %}
The UUID included in the above rule (`dc8ef5f6-eb0d-4c87-9e9f-0cf803f619e8`) will be different for your installation.
Use the `about:debugging#/runtime/this-firefox` page (navigate from Firefox's address bar) to locate your Bitwarden extension UUID.
{% endcallout %}

## NoScript

Whitelisting the following domain in NoScript is required: `bitwarden.com`
