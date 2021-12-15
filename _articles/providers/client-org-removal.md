---
layout: article
title: Remove Client Organization
categories: [providers]
featured: false
popular: false
hidden: false
tags: []
order: "08"
description: "Learn how to remove a client Organization from your Bitwarden Provider Portal."
---

As a Provider, you may need to remove your Provider-Client relationship with an Organization if you're no longer providing services to them. In order for a Client Organization to be eligible for removal:

- You must be a [Provider Admin]({{site.baseurl}}/article/provider-users/#provider-user-types).
- The Client Organization must have at least one [confirmed Owner]({{site.baseurl}}/article/managing-users/#onboard-users/).

<br>
Once these criteria are met, navigate to the Provider Portal and use the {% icon fa-cog %} gear dropdown for the desired Client Organization to select the {% icon fa-times %} **Remove** option:

{% image providers/provider-remove-client.png Remove a Client Organization %}
