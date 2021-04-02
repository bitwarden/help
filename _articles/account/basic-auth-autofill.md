---
layout: article
title: Basic Auth Prompts
categories: [auto-fill]
featured: true
popular: true
hidden: false
tags: []
order: 07
---

Login prompts like the one pictured below, called "basic" or "native" authentication prompts, will be automatically auto-filled by the Bitwarden Browser Extension **if there is only 1 Login item with a** [**matching URI**]({{site.baseurl}}/article/uri-match-detection).

If more than one Login item with a matching URI is found, the Browser Extension will not be able to auto-fill your credentials and you will need to manually copy/paste your username and password to log in.

{% image autofill/basic-auth-prompt.png %}

You can also use the Browser Extension's {% icon fa-share-square %} **Launch** button to automatically open and log in to a basic auth-protected resource.

{% callout note %}
Currently, you cannot auto-fill on a basic auth prompt using the {% icon fa-folder %} **Tab** view, context-menu, or keyboard shortcuts.
{% endcallout %}
