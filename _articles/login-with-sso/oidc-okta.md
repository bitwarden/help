---
layout: article
title: Okta OIDC Implementation
categories: [login-with-sso]
featured: false
popular: false
hidden: true
tags: [sso, oidc, okta]
order:
---
This article contains **Okta-specific** help for configuring Login with SSO via OpenID Connect (OIDC). For help configuring Login with SSO for another OIDC IdP, or for configuring Okta via SAML 2.0, see [OIDC Configuration]({{site.baseurl}}/article/configure-sso-oidc/) or [Okta SAML Implementation]({{site.baseurl}}/article/saml-okta/).

Configuration involves working simultaneously within the Bitwarden [Business Portal]({{site.baseurl}}/article/about-business-portal/) and the Okta Admin Portal. As you proceed, we recommend having both readily available and completing steps in the order they're documentated.

## Open the Business Portal

If you're coming straight from [OIDC Configuration]({{site.baseurl}}/article/configure-sso-oidc/), you should already have an **Organization ID** created and SSO **Enabled**. If you don't, follow [steps 1 and 2 of that document]({{site.baseurl}}/article/configure-sso-oidc/) and return to this document.

Open your [Business Portal]({{site.baseurl}}/article/about-business-portal/) and navigate to the SSO Configuration screen:

{% image sso/sso-oidc1.png OIDC Configuration %}

You don't need to edit anything on this screen yet, but keep it open for easy reference.

## Create an Okta App

In the Okta Admin Portal, select **Applications** &rarr; **Applications** from the navigation. On the Applications screen, select the **Create App Integration** button. For Sign-on method, select **OIDC - OpenID Connect**. For Application type, select **Web Application**:

{% image sso/cheatsheets/oidc-okta/okta-createapp.png %}

On the **New Web App Integration** screen, configure the following fields:

|Field|Description|
|-----|-----------|
|App integration name|Give the app a Bitwarden-specific name.|
|Grant type|Enable the following [grant types](https://developer.okta.com/docs/concepts/oauth-openid/#choosing-an-oauth-2-0-flow){:target="\_blank"}:<br><br>- Client acting on behalf of itself &rarr; **Client Credentials**<br>- Client acting on behalf of a user &rarr; **Authorization Code**|
|Sign-in redirect URIs|Set this field to your **Callback Path**, which can be retrieved from the Bitwarden SSO Configuration screen.<br><br>For Cloud-hosted customers, this is always `https://sso.bitwarden.com/oidc-signin`. For self-hosted instances, this is determined by your [configured server URL]({{site.baseurl}}/article/install-on-premise/#configure-your-domain), for example `https://your.domain.com/sso/oidc-signin`.|
|Sign-out redirect URIs|Set this field to your **Signed Out Callback Path**, which can be retrieved from the Bitwarden SSO Configuration screen.|
|Assignments|Use this field to designate whether all or only select groups will be able to use Bitwarden Login with SSO.|

Once configured, select the **Next** button.

### Get Client Credentials

On the Application screen, copy the **Client ID** and **Client secret** for the newly created Okta app:

{% image sso/cheatsheets/oidc-okta/okta-clientcredentials.png App Client Credentials %}

You'll need to use both values [during a later step](#bitwarden-business-portal-configuration).

### Get Authorization Server Information

Select **Security** &rarr; **API** from the navigation. From the **Authorization Servers** list, select the server you'd like to use for this implementation. On the **Settings** tab for the server, copy the **Issuer** and **Metadata URI** values:

{% image sso/cheatsheets/oidc-okta/okta-authserver.png Okta Authorization Server Settings %}

You'll need to use both values [during the next step](#bitwarden-business-portal-configuration).

## Bitwarden Business Portal Configuration

At this point, you've configured everything you need within the context of the Okta Admin Portal. Jump back over to the Bitwarden Business Portal to configure the following fields:

|Field|Description|
|-----|-----------|
|Authority|Enter the [retrieved Issuer URI](#get-authorization-server-information) for your Authorization Server.|
|Client ID|Enter the [retrieved Client ID](#get-client-credentials) for your Okta app.|
|Client Secret|Enter the [retrieved Client secret](#get-client-credentials) for your Okta app.|
|Metadata Address|Enter the [retrieved Metadata URI](#get-client-authorization-server-information) for your Authorization Server.|
|OIDC Redirect Behavior|Select **Redirect GET**. Okta currently does not support Form POST.|
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

Enter the [configured Organization Identifier](#) and select **Log In**. If your implementation is successfully configured, you'll be redirected to the Okta login screen:

{% image sso/cheatsheets/saml-okta/okta-login.png Log in with Okta %}

After you authenticate with your Okta credentials, enter your Bitwarden Master Password to decrypt your Vault!

{% comment %}

{% image sso/cheatsheets/oidc-okta/oidc-okta1.png %}

{% image sso/cheatsheets/oidc-okta/oidc-okta2.png %}

{% image sso/cheatsheets/oidc-okta/oidc-okta4.png %}

{% image sso/cheatsheets/oidc-okta/oidc-okta3.png %}

{% endcomment %}
