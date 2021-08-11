---
layout: article
title: OIDC Configuration
categories: [login-with-sso]
featured: false
popular: false
tags: [sso, oidc, openid, idp, identity]
order: 04
---

## Step 1: Set an Organization Identifier

Users who [authenticate their identity using SSO]({{site.baseurl}}/article/sso-access-your-vault) will be required to enter an **Organization Identifier** that indicates the Organization (and therefore, the SSO integration) to authenticate against. To set a unique Organization Identifier:

1. Log in to your [Web Vault](https://vault.bitwarden.com){:target="\_blank"} and open your Organization.
2. Open the **Settings** tab and enter a unique **Identifier** for your Organization.

   {% image sso/org-id.png Enter an Identifier %}
3. **Save** your changes before exiting this page.

{% callout success %}
You'll need to share this value with users once the configuration is ready to be used.
{% endcallout %}

## Step 2: Enable Login with SSO

Once you have your Organization Identifier, you can proceed to enabling and configuring your integration. To enable Login with SSO:

1. From your Organization Vault, navigate to the **Business Portal**:

   {% image organizations/business-portal-button-overlay.png Business Portal %}

2. From the Business Portal menu bar, check that the correct Organization is listed and select the **Single Sign-On** button:

{% image sso/sso-bp-1.png Business Portal Menu%}
3. Check the **Enabled** checkbox.
4. From the **Type** dropdown menu, select the **OpenID Connect** option. If you intend to use SAML instead, switch over the the [SAML Configuration Guide]({{site.baseurl}}/article/configure-sso-saml/).

## Step 3: Configuration

From this point on, **implementation will vary provider-to-provider**. Jump to one of our specific **Implementation Guides** for help completing the Configuration process:

|Provider|Guide|
|--------|-----|
|Azure|[Azure Implementation Guide]({{site.baseurl}}/article/oidc-azure/)|
|Okta|[Okta Implementation Guide]({{site.baseurl}}/article/oidc-okta/)|

### Configuration Reference Materials

The following sections will define fields configured in the [Bitwarden Business Portal]({{site.baseurl}}/article/about-business-portal), agnostic of which IdP you're integrating with. Fields that must be configured will be marked (**Required**).

{% callout success %}
**Unless you're comfortable with OpenID Connect**, we recommend using one of the [above Implementation Guides](#step-3-configuration) instead of the following generic material.
{% endcallout %}

|Field|Description|
|-----|-----------|
|Callback Path|(**Automatically generated**) The URL for authentication automatic redirect. For Cloud-hosted customers, this is always `https://sso.bitwarden.com/oidc-signin`. For self-hosted instances, this is determined by your [configured server URL]({{site.baseurl}}/article/install-on-premise/#configure-your-domain), for example `https://your.domain.com/sso/oidc-signin`.|
|Signed Out Callback Path|(**Automatically generated**) The URL for sign-out automatic redirect. For Cloud-hosted customers, this is always `https://sso.bitwarden.com/oidc-signedout`. For self-hosted instances, this is determined by your [configured server URL]({{site.baseurl}}/article/install-on-premise/#configure-your-domain), for example `https://your.domain.com/sso/oidc-signedout`.|
|Authority|(**Required**) The URL of your Authorization Server ("Authority"), which Bitwarden will perform authentication against. For example, `https://your.domain.okta.com/oauth2/default` or `https://login.microsoft.com/<TENANT_ID>/v2.0`.|
|Client ID|(**Required**) An identifier for the OIDC Client. This value is typically specific to a constructed IdP App Integration, for example an [Azure App Registration]({{site.baseurl}}/article/oidc-azure/) or [Okta Web App]({{site.baseurl}}/article/oidc-okta/).|
|Client Secret|(**Required**) The client secret used in conjunction with the Client ID to exchange for an access token. This value is typically specific to a constructed IdP App Integration, for example an [Azure App Registration]({{site.baseurl}}/article/oidc-azure/) or [Okta Web App]({{site.baseurl}}/article/oidc-okta/).|
|Metadata Address|(**Required if Authority is not valid**) A Metadata URL where Bitwarden can access Authorization Server metadata as a JSON object. For example, `https://your.domain.okta.com/oauth2/default/.well-known/oauth-authorization-server`.|
|OIDC Redirect Behavior|(**Required**) Method used by the IdP to response to authentication requests from Bitwarden. Options include **Form POST** and **Redirect GET**.|
|Get Claims From User Info Endpoint|Enable this option if you receive URL too long errors (HTTP 414), truncated URLS, and/or failures during SSO.|
|Additional/Custom Scopes|Define custom scopes to be added to the request (comma-delimited). |
|Additional/Custom User ID Claim Types|Define custom claim type keys for user identification (comma-delimited). When defined, custom claim types are searched for before falling back on standard types.|
|Additional/Custom Email Claim Types|Define custom claim type keys for users' email addresses (comma-delimited). When defined, custom claim types are searched for before falling back on standard types.|
|Additional/Custom Name Claim Types|Define custom claim type keys for users' full names or display names (comma-delimited). When defined, custom claim types are searched for before falling back on standard types.|
|Requested Authentication Context Class Reference values|Define Authentication Context Class Reference identifiers (`acr_values`) (space-delimited). List `acr_values` in preference-order.|
|Expected "acr" Claim Value in Response|Define the `acr` Claim Value for Bitwarden to expect and validate in the response.|

### OIDC Attributes & Claims

An **email address is required for account provisioning**, which can be passed as any of the attributes or claims in the below table.

A unique user identifier is also highly recommended. If absent, Email will be used in its place to link the user.

Attributes/Claims are listed in order of preference for matching, including Fallbacks where applicable:

|Value|Claim/Attribute|Fallback Claim/Attribute|
|-----|---------------|------------------------|
|Unique ID|Configured Custom User ID Claims<br>NameID (when not Transient)<br>urn:oid:0.9.2342.19200300.100.1.1<br>Sub<br>UID<br>UPN<br>EPPN|
|Email|Configured Custom Email Claims<br>Email<br>http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress<br>urn:oid:0.9.2342.19200300.100.1.3<br>Mail<br>EmailAddress|Preferred_Username<br>Urn:oid:0.9.2342.19200300.100.1.1<br>UID|
|Name|Configured Custom Name Claims<br>Name<br>http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name<br>urn:oid:2.16.840.1.113730.3.1.241<br>urn:oid:2.5.4.3<br>DisplayName<br>CN|First Name + “ “ + Last Name (see below)|
|First Name|urn:oid:2.5.4.42<br>GivenName<br>FirstName<br>FN<br>FName<br>Nickname|
|Last Name|urn:oid:2.5.4.4<br>SN<br>Surname<br>LastName|
