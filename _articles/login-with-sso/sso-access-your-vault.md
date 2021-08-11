---
layout: article
title: Access Your Vault Using SSO
categories: [login-with-sso]
featured: false
popular: false
tags: [sso]
order: 06
---

## Before You Begin
If you are an existing Bitwarden user, you must [Link an Existing Account to SSO](https://bitwarden.com/help/article/link-to-sso/) before authenticating into your Vault using Login with SSO.

## Logging in with SSO

Complete the following steps to use Login with SSO to authenticate into your Bitwarden Vault:

1. Open your Bitwarden App or navigate to the Bitwarden Web Vault.
2. Select the **Enterprise Single Sign-On** button.

   {% image sso/sso-button-lg.png Enterprise Single Sign-On button %}

3. Enter your **Organization Identifier** and select **Log In**.

   {% callout info %}We recommend bookmarking this page with your Organization Identifier included as a query string so that you don't have to enter it each time, for example `https://vault.bitwarden.com/#/sso?identifier=your-org-id` or `https://your.domain.com/#/sso?identifier=your-org-id`.
   {% endcallout %}

   {% image sso/org-id-input.png Organization Identifier field %}

   A browser window will open prompting you to enter your SSO credentials or other required authentication mechanisms.

Upon successful authentication:

- **For existing accounts**, you will be re-directed to the Bitwarden login page and prompted to enter your Master Password to decrypt your Vault data.
- **For new accounts**, you will be prompted to create a Master Password and (optionally) provide a hint. Users with new accounts will need to have access confirmed for shared Organization items, including Collections and Groups.

In both cases, your account now has an *accepted* status within your Organization.



  {% callout info %}
  Users that are created via Login with SSO **will still be properly organized into their groups and collections** if leveraging the [Directory Connector](https://bitwarden.com/help/article/directory-sync/) utility.
  {% endcallout %}
