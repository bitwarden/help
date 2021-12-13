---
layout: article
title: About Login with SSO
categories: [login-with-sso]
featured: true
popular: true
tags: [saml, saml2.0, single sign-on, sso, oidc, openid, openid connect, idp, identity provider]
order: "01"
redirect_from:
  - /article/getting-started-with-sso/
description: "Bitwarden enterprise plan users can take advantage of Single Sign On (SSO). Find out more about Login with SSO and how it works with Bitwarden in this useful article."
---

## What is Login with SSO?

Login with SSO is the Bitwarden solution for Single Sign-On. Using Login with SSO, [Enterprise Organizations]({{site.baseurl}}/article/about-organizations/#types-of-organizations) can leverage their existing Identity Provider to authenticate users with Bitwarden using the **SAMl 2.0** or **Open ID Connect (OIDC)** protocols.

What makes Login with SSO unique is that it retains our zero-knowledge encryption model. Nobody at Bitwarden has access to your Vault data and, similarly, **neither should your Identity Provider**. That's why Login with SSO **decouples authentication and decryption**. In all Login with SSO implementations, your Identity Provider cannot and will not have access to the decryption key needed to decrypt Vault data.

In most scenarios, that decryption key is the user's [Master Password]({{site.baseurl}}/article/master-password/), which they retain sole responsibility for, however Organizations self-hosting Bitwarden can use [Key Connector]({{site.baseurl}}/article/about-key-connector/) as an alternative means of decrypting Vault data.

{% image sso/sso-workflow-3.png Login with SSO & Master Password Decryption %}

## Why use Login with SSO?

Login with SSO is a flexible solution that can fit your enterprise's needs. Login with SSO includes:

- [SAML 2.0]({{site.baseurl}}/article/configure-sso-saml/) and [OIDC]({{site.baseurl}}/article/configure-sso-oidc/) configuration options that support integration with a wide variety of Identity Providers.
- An [Enterprise Policy]({{site.baseurl}}/article/policies/#single-sign-on-authentication) to optionally require non-Owner/non-Admin users to log in to Bitwarden with Single Sign-On.
- Two distinct [Member Decryption Options]({{site.baseurl}}/article/sso-decryption-options/) for safe data access workflows.
- "Just-in-time" end-user onboarding via SSO.


## How do I start using Login with SSO?

Login with SSO is available for all customers with an [Enterprise Organization]({{site.baseurl}}/article/about-bitwarden-plans/#enterprise-organizations). If you're new to Bitwarden, we'd love to help you through the process of setting up an account and starting your 7 Day Free Trial Enterprise Organization with our dedicated signup page:

<a role="button" class="btn btn-primary" href="https://vault.bitwarden.com/#/register?org=enterprise">Start your Enterprise Free Trial</a>

**Once you have an Enterprise Organization**, deployment should include the following steps:

1. Follow one of our [SAML 2.0]({{site.baseurl}}/article/configure-sso-saml/) or [OIDC]({{site.baseurl}}/article/configure-sso-oidc/) Implementation Guides to configure and deploy Login with SSO with Master Password decryption.
2. Test [the end-user Login with SSO experience]({{site.baseurl}}/article/using-sso/) using Master Password decryption.
3. (**If self-hosting**) Review our different [Member Decryption Options]({{site.baseurl}}/article/sso-decryption-options/) to determine whether using [Key Connector]({{site.baseurl}}/article/about-key-connector/) might be right for your Organization.
4. (**If self-hosting**) If you're interested in implementing Key Connector, [Contact Us](https://bitwarden.com/contact/) and we'll help you get started [deploying Key Connector]({{site.baseurl}}/article/deploy-key-connector/).
5. Educate your Organization members on how to [use Login with SSO]({{site.baseurl}}/article/using-sso/).
