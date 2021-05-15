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

Login prompts like the one pictured below, called "basic" or "native" authentication prompts, will be automatically auto-filled by the Bitwarden Browser Extension **if there is only 1 Login item with a** [**matching URI**]({{site.baseurl}}/article/uri-match-detection). You can also use the Browser Extension's {% icon fa-share-square %} **Launch** button to automatically open and log in to a basic auth-protected resource.

Auto-filling on basic auth prompts will, by default, use the [Host]({{site.baseurl}}/article/uri-match-detection/#host) URI match detection option so that auto-filling is more restrictive. This can be changed by setting the [match detection option]({{site.baseurl}}/article/uri-match-detection/) for the relevant Vault item.

If more than one Login item with a matching URI is found, the Browser Extension will not be able to auto-fill your credentials and you will need to manually copy/paste your username and password to log in.

If a single Login item is present for a matching URI the credentials will be autofilled in the background and no authentication prompt will be shown.

{% image autofill/basic-auth-prompt.png Basic Auth Prompt %}

The below animation shows the authentication flow in Google Chrome for autofilled basic auth credentials.

{% image autofill/saving-basic-auth.gif Basic Auth Autofill flow %}

{% callout note %}
Due to the way basic auth prompts are designed, auto-filling must be non-interactive. This means you cannot auto-fill on a basic auth prompt using the {% icon fa-folder %} **Tab** view, context-menu, or keyboard shortcuts.
{% endcallout %}
