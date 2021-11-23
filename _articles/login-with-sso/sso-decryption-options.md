---
layout: article
title: Member Decryption Options
categories: [login-with-sso]
featured: false
popular: false
tags: [key connector, customer-managed encryption, login with sso]
order: "04"
description: "..."
---

What makes Login with SSO unique is that it retains our zero-knowledge encryption model. Nobody at Bitwarden has access to your Vault data and, similarly, **neither should your Identity Provider**. That's why Login with SSO **decouples authentication and decryption**. In all Login with SSO implementations, your Identity Provider cannot and will not have access to the decryption key needed to decrypt Vault data.

**Member Decryption Options** are used to determine what decryption key will be used to decrypt Vault data in scenarios where Login with SSO is handling authentication. Options include:

- **Master Password**: Once authenticated, Organization members will decrypt Vault data using their [Master Passwords]({{site.baseurl}}/article/master-password/).
- **Key Connector**: Connect Login with SSO to your self-hosted decryption key server. Using this option, Organization members won't need to use their Master Passwords to decrypt Vault data. Instead, [Key Connector]({{site.baseurl}}/article/about-key-connector/) will retrieve a decryption key securely stored in a database owned and managed by you.


{% callout success %}
Due to the sensitivity of storing decryption keys, the **Key Connector** option is **disabled by default** and currently **only available to Organizations self-hosting Bitwarden**.

If you're interesting in using Key Connector, check out the [About Key Connector]({{site.baseurl}}/article/about-key-connector/) and [Deploy Key Connector]({{site.baseurl}}/article/deploy-key-connector/) articles and [Contact Us](https://bitwarden.com/contact/) to setup a time for us to help you get started.
{% endcallout %}
