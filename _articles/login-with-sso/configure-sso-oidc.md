---
layout: article
title: Configure Login with SSO (OIDC)
categories: [login-with-sso]
featured: false
popular: false
tags: [sso, oidc, openid, idp, identity]
order: 04
---

This article will guide you through the steps required to configure Login with SSO for OpenID Connect (OIDC) authentication.

### In This Article

- [Step 1: Enabling Login with SSO](#step-1-enabling-login-with-sso)
- [Step 2: Configure Your IdP](#step-2-configure-your-idp)
- [Step 3: Open ID Connect Configuration](#step-3-openid-connect-configuration)

## Step 1: Enabling Login with SSO

Complete the following steps to enable Login with SSO for OIDC authentication:

1. In the Web Vault, navigate to your Organization and open the **Settings** tab.
2. In the **Identifier** field, enter a unique identifier for your Organization.

   Don't forget to **Save** your identifier. Users will be required to enter this **Identifier** upon login.

3. Navigate to the **Business Portal**.

   {% image /organizations/business-portal-button-overlay.png Business Portal button %}

4. Select the **Single Sign-On** button.
5. Check the **Enabled** checkbox.
6. From the **Type** dropdown menu, select the **OpenID Connect** option.

After selecting **OpenID Connect**, this page will display a list of configuration fields you will need to configure.

Keep this page on-hand, as you will need the values of **Callback Path** and **Signed Out Callback Path** to complete [Step 2](#step-2-configure-your-idp).

## Step 2: Configure Your IdP

Before you can complete your configuration settings, you must configure your IdP to receive requests from and send responses to Bitwarden.

{% comment %}
PLACEHOLDER TO ADD PROVIDER SCREENSHOTS Configuration can vary provider-to-provider. Refer to the following samples for assistance:

- [{% icon fa-download %} Okta OIDC Sample]({{site.baseurl}}/files/bitwarden_export.csv)
{% endcomment %}

When you've successfully set your IdP, return to the Bitwarden Business Portal to complete your OIDC configuration.

## Step 3: OpenID Connect Configuration

Fields in this section should come from the configured values in [Step 2: Configure your IdP](#step-2-configure-your-idp).

Required fields will be marked. Failing to provide a value for a required field will cause your configuration to be rejected.

{% image /sso/sso-oidc.png OpenID Connect Configuration screen %}

### Callback Path
The URL for Bitwarden authentication automatic redirect. This value will be automatically generated. For all Cloud-hosted instances, `https://sso.bitwarden.com/oidc-signin`. For self-hosted instances, domain is based on your configured Server URL.

### Signed Out Callback Path
The URL for Bitwarden sign-out automatic redirect. This value will be automatically generated. For all Cloud-hosted instances, `https://sso.bitwarden.com/oidc-signedout`. For self-hosted instances, domain is based on your configured Server URL.

### Authority (*Required*)
Your Identity Provider URL or the Authority that Bitwarden will perform authentication against.

### Client ID (*Required*)
The Client identifier used for Bitwarden, as configured in your Identity Provider.

### Client Secret (*Required*)
*May be required depending on your IdP's configuration, needs, or requirements*

A secret used  in conjunction with **Client ID** to exchange for an authentication token.

### Metadata Address (*Required if Authority is not a valid URL*)

Identity Provider information which Bitwarden will perform authentication against (*e.g.* Okta Metadata URI).

### OIDC Redirect Behavior
Method used by the IdP to respond to Bitwarden authentication requests. Options include:
- Form POST
- Redirect GET

### Get Claims From User Info Endpoint
Check this checkbox if you receive `URI Too Long (HTTP 414)` errors, truncated URLs, or failures during SSO.
