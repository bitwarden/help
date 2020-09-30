---
layout: article
title: Getting started with Login with SSO
categories: [login-with-sso]
featured: true
popular: true
tags: [sso, saml, oidc, openid, saml2.0, idp, identity]
---

## What is Login with SSO?

The Login with SSO feature allows you to use your existing Identity Provider to authenticate into Bitwarden. Login with SSO is available on the **current** Enterprise Plan.

### Trialing Login with SSO

We understand that security requirements and Identity providers can vary greatly between Organizations. Classic 2019 Enterprise Plan customers are encouraged to trial Login with SSO before upgrading to the new Enterprise Plan and deploying globally.

To Trial our new Enterprise Plan, we recommend creating a new Trial Organization.

Navigate to your Web Vault and select "New Organization"

{%image /sso/trial-new-org.png Add a New Organization %}

Select Enterprise as your plan, and remember to add as many seats as you'll need to test with. You will automatically get 7 free days, but you may also leverage our monthly billing option to allow for extended testing if you need.

{%image /sso/trial-new-plan.png Select Enterprise to try Login with SSO %}

You can now begin using your new organization to test Login with SSO. For self-hosted and on-premise users, you will need to do this as well to generate a new license file. We recommend using a separate Bitwarden instance for testing Login with SSO for self-hosted and on-premise users.

Once you have completed your Trial and testing, [contact customer success](https://bitwarden.com/contact) to upgrade your current Enterprise Plan. You can also cancel your Trial Organization subscription via the [Bitwarden Web Vault](https://vault.bitwarden.com/).

For more information on Plan comparisons, please visit our plan comparison article [here.](https://bitwarden.com/help/article/choosing-the-right-subscription-plan/)

### Identity Server Requirements
- Support for SAML 2.0
- Support for OpenID Connect

### Bitwarden API/ Server Requirements
- Bitwarden Cloud services
- Self-hosted Bitwarden Server v1.37+

### Client requirements
- Desktop version 1.21+
- Browser extension version 1.46+
- Mobile version 2.6+
- Web version 2.16+
- CLI version 1.12+  (CLI applications leveraging Login with SSO must run on systems with an available web browser)

## Workflow

{%image /sso/sso-workflow.png Overview of Bitwarden Single Sign-On Workflow %}

## General settings and configuration
To enable Login with SSO, you’ll need to log into the Bitwarden Web Vault and access your Organization.

### Organization Identifier
When enabling Login with SSO, you’ll create an organization identifier, unique to your organization, that will allow the client to identify and connect to the right identity servers. This will be entered upon login.

Define the Organization Identifier inside the Organization Vault: Settings > My Organization.

{%image /sso/sso-orgid.png Overview of Bitwarden Single Sign-On Workflow %}

Once you have created your Organization Identifier from the Organization Settings page, you’ll
select the link to the Business Portal.

{%image /sso/sso-business-portal.png Enter the new Business Portal to manage Organization settings %}

Within the Business Portal, you’ll see the option to enable and configure Login with SSO.

{%image /sso/sso-select.png Select your protocol %}

Click the checkbox to enable Single Sign-On and select the protocol for your Identity Provider.

{%note%}
Depending on your Identity Provider and configuration, you may need to perform the creation of an additional API key or Application ID within the Identity service prior to enabling and configuring your Bitwarden Organization.

We recommend you maintain a distinct application ID or reference for Bitwarden within your Identity Server.
{%endnote%}

### SAML 2.0 Configuration

Bitwarden Login with SSO is configurable to work with your SAML 2.0 IdP - for details on configuration please use [this article.](https://bitwarden.com/help/article/configure-sso-saml/)

{%image /sso/sso-saml.png SAML 2.0 Configuration Options %}

### Open ID Connect (OIDC) Configuration

Bitwarden Login with SSO is configurable to work with your OIDC IdP - for details on configuration please use [this article.](https://bitwarden.com/help/article/configure-sso-oidc/)

{%image /sso/sso-oidc.png Open ID Connect Configuration Options %}

## Logging In with SSO

Logging into your Bitwarden client using Login with SSO is accomplished by a few steps.

1. Once your Bitwarden client app is installed, navigate to the login screen or window.
2. Click or tap the **Enterprise Single Sign-On** button.
3. Enter your Organization Identifier.
4. A browser window will open, allowing you to enter your Single-Sign-On credentials and any other required authentication mechanisms.
5. Upon successful login:
- For existing accounts, you will be brought back into the Bitwarden application and prompted for your Master Password.
- For new accounts, you will be prompted to create your Master Password and provide a password hint if desired.
6. The user is now logged into their Bitwarden account and is in *accepted* status within their organization.

{%note%}
Users that register “Just-In-Time” or “on the fly” for their Organization will still need to be confirmed to access any shared Organization Items. For more information about managing and confirming users, visit our article [here.](https://bitwarden.com/help/article/managing-users/)

Users will also need to be assigned to any Groups and Collections.

Users that are created via Login with SSO **will still be properly organized into their groups and collections** if leveraging the [Directory Connector.](https://bitwarden.com/help/article/directory-sync/) utility.
{%endnote%}

### Linking an existing user

Organizations with existing Bitwarden users that are deploying Login with SSO will need to have their users link their existing account to an SSO authentication.

To do this, the user will need to log into their Web Vault using their `email` and `Master Password`.

1. Then navigate to Settings > Organizations where they will see a list of all Organizations they belong to.
2. Hovering over the Organization to be linked will display the gear icon to the right.
3. Click the gear icon and select "Link SSO". This will initiate an authentication session link the user, allowing them to authenticate using just SSO in the future.

{%image /sso/trial-org-link.png Users with existing Bitwarden accounts will need to Link their account to SSO for the Organization%}

## FAQs

Please visit our [Login with SSO FAQs](https://bitwarden.com/help/article/sso-faqs/) for more information.
