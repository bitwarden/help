---
layout: article
title: About Login with SSO
categories: [login-with-sso]
featured: true
popular: true
tags: [saml, saml2.0, single sign-on, sso, oidc, openid, openid connect, idp, identity provider]
order: 01
redirect_from:
  - /article/getting-started-with-sso/
---

## What is Login with SSO?

Login with SSO separates user authentication from Vault decryption by leveraging your existing Identity Provider (IdP) to authenticate users into their Bitwarden Vault and using Master Passwords for decryption of Vault data.

Login with SSO currently supports SAML 2.0 and OpenID Connect authentication for customers on the current Enterprise Plan.

Users of Bitwarden authenticate into their vaults using the **Enterprise Single Sign-On** button located on the login screen of any Bitwarden client application. For more information, see [Access Your Vault Using SSO](https://bitwarden.com/help/article/sso-access-your-vault/).

Administrators can configure Login with SSO in the Business Portal. For more information, see [About the Business Portal](https://bitwarden.com/help/article/about-business-portal/).

{% image sso/sso-button-lg.png Enterprise Single Sign-On button %}

### Requiring SSO for Users

Using the **Single Sign-On Authentication** policy, Enterprise Organizations can require non-Owner/non-Admin users to log in to Bitwarden with Enterprise Single Sign-On. For more information about setting up this policy, see [Policies]({% link _articles/organizations/policies.md %}).

## Enterprise Free Trial

Login with SSO is available for all customers on the current Enterprise plan (for more information, see [About Bitwarden Plans]({% link _articles/plans-and-pricing/about-bitwarden-plans.md %}). If you're new to Bitwarden, we'd love to help you through the process of setting up an account and starting your 7 Day Free Trial Enterprise Organization with our dedicated signup page:

<a role="button" class="btn btn-primary" href="https://vault.bitwarden.com/#/register?org=enterprise">Start your Enterprise Free Trial</a>

If you're an experienced Bitwarden user, refer to the [this article]({% link _articles/plans-and-pricing/enterprise-free-trial.md %}) for help. If you're self-hosting Bitwarden, you will need to generate a new license file after starting your 7 Day Free Trial. We recommend using a separate Bitwarden instance for testing Login with SSO. For more information, see [Licensing Paid Features](https://bitwarden.com/help/article/licensing-on-premise).

## Requirements

Login with SSO has the following requirements:

### Identity Server Requirements
Your Identity Provider must support one of the following:
- SAML 2.0
- OpenID Connect (OIDC)

### Client Application Requirements
Your Bitwarden client applications require the following versions:

- **Desktop Application**: v1.2+
- **Browser Extension**: v1.46+
- **Mobile App** (Android or iOS): v2.6+
- **CLI**: v1.12+ (Must run on systems with an available web browser)

### Self-Hosting Requirements
If you are self-hosting Bitwarden, your installation must be on v1.37+.

For information on updating your self-hosted instance, see [Updating your Self-Hosted Installation](https://bitwarden.com/help/article/updating-on-premise/).

## Workflow Diagram
The following diagram is an overview of the workflow used by Bitwarden to authenticate using SSO:

{%image /sso/sso-workflow.png Bitwarden SSO Workflow %}

## Next Steps
For administrators configuring Login with SSO, see:
- [Configure Login with SSO (SAML 2.0)](https://bitwarden.com/help/article/configure-sso-saml/)
- [Configure Login with SSO (OIDC)](https://bitwarden.com/help/article/configure-sso-oidc)

For existing users, see:
- [Link an Existing Account to SSO](https://bitwarden.com/help/article/link-to-sso/)
- [Access Your Vault Using SSO](https://bitwarden.com/help/article/sso-access-your-vault/)

For more information, see:
- [SSO FAQs](https://bitwarden.com/help/article/sso-faqs)
