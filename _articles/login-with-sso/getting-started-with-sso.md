---
layout: article
title: Getting Started with Login with SSO
categories: [login-with-sso]
featured: true
popular: true
tags: [saml, saml2.0, single sign-on, sso, oidc, openid, openid connect, idp, identity provider]
order: 01
---

## What is SSO?
Single Sign-On (SSO) is a user authentication service to access SaaS applications. With SSO, employees are able to use one set of credentials, such as a username and password, to securely access multiple applications.

## What is Login with SSO?

Login with SSO separates user authentication from Vault decryption by leveraging your existing Identity Provider (IdP) to authenticate users into their Bitwarden Vault and using Master Passwords for decryption of Vault data.

Login with SSO currently supports SAML 2.0 and OpenID Connect authentication for customers on the current Enterprise Plan.

Users of Bitwarden authenticate into their vaults using the Enterprise Single Sign-On button located on the login screen of any Bitwarden client application. For more information, see Access Your Vault Using SSO.

Administrators can configure Login with SSO in the Business Portal. For more information, see About the Business Portal.

{% image /sso/sso-button-lg.png Enterprise Single Sign-On button%}

### In This Article

- [Enterprise Free Trial](#enterprise-free-trial)
- [Requirements](#requirements)
  - [Identity Server Requirements](#identity-server-requirements)
  - [Client Application Requirements](#client-requirements)
  - [Self-Hosting Requirements](#self-hosting-requirements)
- [Workflow Diagram](#workflow-diagram)
- [Next Steps](#next-steps)

## Enterprise Free Trial

Login with SSO is available for all customers on the current Enterprise plan (for more information, see [here](https://bitwarden.com/help/article/2020-plan-updates/)). Customers are encouraged to participate in a 7 Day Free Trial of the current Enterprise Plan in order to test Login with SSO. For more information, see:
- [Start an Enterprise Free Trial](https://bitwarden.com/help/article/enterprise-free-trial/)
- [About Bitwarden Plans](https://bitwarden.com/help/article/about-bitwarden-plans/)

If you are self-hosting Bitwarden, you will need to generate a new license file after starting your 7 Day Free Trial. We recommend using a separate Bitwarden instance for testing Login with SSO. For more information, see [Licensing Paid Features](https://bitwarden.com/help/article/licensing-on-premise).

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

For information on updating your self-hosted instance, see [Updating your Self-Hosted Installation](https://bitwarden.com/help/updating-on-premise).

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
- [Blog Post](https://bitwarden.com/blog/post/bitwarden-password-manager-login-with-sso/)
- [Blog Post](https://bitwarden.com/blog/post/bitwarden-launches-sso-authentication/)
