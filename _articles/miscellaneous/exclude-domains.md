---
layout: article
title: Exclude Domains
categories: [miscellaneous]
featured: false
popular: false
tags: []
---

Bitwarden Browser Extensions can be configured to exclude (i.e. explicitly not offer to save passwords for) specific domains. When a domain is in the **Excluded Domains** list, Bitwarden won't issue the popup offering to remember an entered password:

{% image be-offer.png Browser Extension popup offer %}

To configure excluded domains, open the {% icon fa-cogs %} **Settings** tab and select the **Excluded Domains** option:

{% image be-excludeddomains.png Excluded Domains Configuration %}

*Domain* Exclusion does not register "full" URLs, only the domain component. In the above example, `https://github.com/bitwarden/browser` would resolve to `github.com` when saved, meaning that the Browser Extension would explicitly not offer to save credentials for Github.
