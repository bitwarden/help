---
layout: article
title: uMatrix access rules
categories: [miscellaneous]
featured: false
popular: false
tags: [umatrix, firefox]
---

By default, the uMatrix addon will block the bitwarden Firefox addon from accessing the bitwarden API servers. Without adding proper rules to allow the bitwarden API servers, logging in will fail.

The following [uMatrix rules](https://github.com/gorhill/uMatrix/wiki/Rules-syntax) are required:

```
dc8ef5f6-eb0d-4c87-9e9f-0cf803f619e8.moz-extension-scheme bitwarden.com xhr allow
dc8ef5f6-eb0d-4c87-9e9f-0cf803f619e8.moz-extension-scheme bitwarden.com cookie allow
```

{% note %}
The UUID included in the above rule will be different for your installation.
{% endnote %}
