---
layout: article
title: Azure OIDC Implementation
categories: [login-with-sso]
featured: false
popular: false
hidden: true
tags: [sso, oidc, azure]
order:
---

This article contains **Azure-specific** help for configuring Login with SSO via OpenID Connect (OIDC). For help configuring Login with SSO for another OIDC IdP, or for configuring Azure via SAML 2.0, see [OIDC Configuration]({{site.baseurl}}/article/configure-sso-oidc/) or [Azure SAML Implementation]({{site.baseurl}}/article/saml-azure/).

Configuration involves working simultaneously within the Bitwarden [Bitwarden Business Portal]({{site.baseurl}}/article/about-business-portal/) and the Azure Portal. As you proceed, we recommend having both readily available and completing steps in the order they're documented.

## Open the Business Portal

If you're coming straight from [OIDC Configuration]({{site.baseurl}}/article/configure-sso-oidc/), you should already have an **Organization ID** created and SSO **Enabled**. If you don't, follow [steps 1 and 2 of that document]({{site.baseurl}}/article/configure-sso-oidc/) and return to this guide.

Open your [Business Portal]({{site.baseurl}}/article/about-business-portal/) and navigate to the SSO Configuration screen:

{% image sso/sso-oidc1.png OIDC Configuration %}

You don't need to edit anything on this screen yet, but keep it open for easy reference.

## Create an App Registration

In the Azure Portal, navigate to **App registrations** and select the **New registration** button:

{% image sso/cheatsheets/oidc-azure/azure-newapp.png Create App Registration %}

On the **Register an application** screen, give your app a Bitwarden-specific name and specify which accounts should be able to use the application. This selection will determine which users can use Bitwarden Login with SSO.

### Register a Redirect URI

Select **Authentication** from the navigation and select the **Add a platform** button:

{% image sso/cheatsheets/oidc-azure/azure-redirecturis.png Register a Redirect URI %}

Select the **Web** option on the Configure platforms screen and enter your **Callback Path** in the Redirect URIs input.

{% callout info %}
Callback Path can be retrieved from the Bitwarden SSO Configuration screen. For Cloud-hosted customers, this is always `https://sso.bitwarden.com/oidc-signin`. For self-hosted instances, this is determined by your [configured server URL]({{site.baseurl}}/article/install-on-premise/#configure-your-domain), for example `https://your.domain.com/sso/oidc-signin`.
{% endcallout %}

### Create a Client Secret

Select **Certificates & secrets** from the navigation, and select the **New client secret** button:

{% image sso/cheatsheets/oidc-azure/azure-newcert.png Create Client Secret %}

Give the certificate a Bitwarden-specific name, and choose an expiration timeframe.



## Bitwarden Business Portal Configuration

At this point, you've configured everything you need within the context of the Azure Portal. Jump back over to the Bitwarden Business Portal to configure the following fields:

|Field|Description|
|-----|-----------|
|Authority|Enter `https://login.microsoft.com/<TENANT_ID>/v2.0`, where `TENANT_ID` is the **Directory (tenant) ID** value retrieved from the App registration's Overview screen.|
|Client ID|Enter the App registration's **Application (client) ID**, which can be retrieved from the Overview screen.|
|Client Secret|Enter the **Secret ID** of the [created Client Secret](#create-a-client-secret).|
|Metadata Address|For Azure implementations as documented, you can leave this field blank.|
|OIDC Redirect Behavior|Select either **Form POST** or **Redirect GET**.|
|Get Claims From User Info Endpoint|Enable this option if you receive URL too long errors (HTTP 414), truncated URLS, and/or failures during SSO.|
|Additional/Custom Scopes|Define custom scopes to be added to the request (comma-delimited). |
|Additional/Custom User ID Claim Types|Define custom claim type keys for user identification (comma-delimited). When defined, custom claim types are searched for before falling back on standard types.|
|Additional/Custom Email Claim Types|Define custom claim type keys for users' email addresses (comma-delimited). When defined, custom claim types are searched for before falling back on standard types.|
|Additional/Custom Name Claim Types|Define custom claim type keys for users' full names or display names (comma-delimited). When defined, custom claim types are searched for before falling back on standard types.|
|Requested Authentication Context Class Reference values|Define Authentication Context Class Reference identifiers (`acr_values`) (space-delimited). List `acr_values` in preference-order.|
|Expected "acr" Claim Value in Response|Define the `acr` Claim Value for Bitwarden to expect and validate in the response.|

When you're done configuring these fields, **Save** your work.

## Test the Configuration

Once your configuration is complete, test it by navigating to [https://vault.bitwarden.com](https://vault.bitwarden.com){:target="\_blank"} and selecting the **Enterprise Single Sign-On** button:

{% image sso/sso-button-lg.png Enterprise Single Sign-On button %}

Enter the [configured Organization Identifier]({{site.baseurl}}/article/configure-sso-saml/#step-1-enabling-login-with-sso) and select **Log In**. If your implementation is successfully configured, you'll be redirected to the Microsoft login screen:

{% image sso/cheatsheets/saml-azure/az-login.png Azure login screen %}

After you authenticate with your Azure credentials, enter your Bitwarden Master Password to decrypt your Vault!
