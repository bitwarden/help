---
layout: article
title: SAML 2.0 Configuration
categories: [login-with-sso]
featured: false
popular: false
tags: [sso, saml, saml2.0, idp, identity]
order: "03"
---

## Step 1: Set an Organization Identifier

Users who [authenticate their identity using SSO]({{site.baseurl}}/article/using-sso/#login-using-sso) will be required to enter an **Organization Identifier** that indicates the Organization (and therefore, the SSO integration) to authenticate against. to set a unique Organization Identifier:

1. Log in to your [Web Vault]({{site.baseurl}}/article/getting-started-webvault) and open your Organization.
2. Open the **Settings** tab and enter a unique **Identifier** for your Organizations.

   {% image sso/org-id.png Enter an Identifier %}
3. **Save** your changes before exiting this page.

{% callout success %}
You'll need to share this value with users once the configuration is ready to be used.
{% endcallout %}

## Step 2: Enable Login with SSO

Once you have your Organization Identifier, you can proceed to enabling and configuring your integration. To enable Login with SSO:

1. From the Organization Vault, navigate to the **Business Portal**:

   {% image organizations/business-portal-button-overlay.png Business Portal %}
2. From the Business Portal menu bar, check that the correct Organization is listed and select the **Single Sign-On** button:

   {% image sso/sso-bp-1.png Business Portal Menu %}
3. Check the **Enabled** checkbox.
4. From the **Type** dropdown menu, select the **SAML 2.0** option. If you intend to use OIDC instead, switch over to the [OIDC Configuration Guide]({{site.baseurl}}/article/configure-sso-oidc/).

## Step 3: Configuration

From this point on, **implementation will vary provider-to-provider**. Jump to one of our specific **Implementation Guides** for help completing the configuration process:

|Provider|Guide|
|--------|-----|
|AD FS|[AD FS Implementation Guide]({{site.baseurl}}/article/saml-adfs/)|
|Auth0|[Auth0 Implementation Guide]({{site.baseurl}}/article/saml-auth0/)|
|AWS|[AWS Implementation Guide]({{site.baseurl}}/article/saml-aws/)|
|Azure|[Azure Implementation Guide]({{site.baseurl}}/article/saml-azure/)|
|Duo|[Duo Implementation Guide]({{site.baseurl}}/article/saml-duo/)|
|Google|[Google Implementation Guide]({{site.baseurl}}/article/saml-google/)|
|JumpCloud|[JumpCloud Implementation Guide]({{site.baseurl}}/article/saml-jumpcloud/)|
|Keycloak|[Keycloak Implementation Guide]({{site.baseurl}}/article/saml-keycloak/)|
|Okta|[Okta Implementation Guide]({{site.baseurl}}/article/saml-okta/)|
|OneLogin|[OneLogin Implementation Guide]({{site.baseurl}}/article/saml-onelogin/)|
|PingFederate|[PingFederate Implementation Guide]({{site.baseurl}}/article/saml-pingfederate/)|

### Configuration Reference Materials

The following sections will define fields configured in the [Bitwarden Business Portal]({{site.baseurl}}/article/about-business-portal/), agnostic of which IdP you're integration with. Fields that must be configured will be marked (**Required**).

{% callout success %}
**Unless you're comfortable with SAML 2.0**, we recommend using one of the [above Implementation Guides](#step-3-configuration) instead of the following generic material.
{% endcallout %}

The Business Portal separates configuration into two sections:

- **SAML Service Provider Configuration** will determine the format of SAML requests.
- **SAML Identity Provider Configuration** will determine the format to expect for SAML responses.

#### Service Provider Configuration

|Field|Description|
|-----|-----------|
|SP Entity ID|(**Automatically generated**) The Bitwarden endpoint for authentication requests. For Cloud-hosted customers, this is always `https://sso.bitwarden.com/saml2`. For self-hosted instances, this is determined by your [configured Server URL]({{site.baseurl}}/article/install-on-premise/#configure-your-domain), for example `https://your.domain.com/sso/saml2`.|
|SAML 2.0 Metadata URL|(**Automatically generated**) Metadata URL for the Bitwarden endpoint. For Cloud-hosted customers, this is always `https://sso.bitwarden.com/saml2/your-org-id`. For self-hosted instances, this is determined by your [configured Server URL]({{site.baseurl}}/article/install-on-premise/#configure-your-domain), for example `https://your.domain.com/sso/saml2/your-org-id`.|
|Assertion Consumer Service (ACS) URL|(**Automatically generated**) Location where the SAML assertion is sent from the IdP. For Cloud-hosted customers, this is always `https://sso.bitwarden.com/saml2/your-org-id/Acs`. For self-hosted instances, this is determined by your [configured Server URL]({{site.baseurl}}/article/install-on-premise/#configure-your-domain), for example `https://your.domain.com/sso/saml2/your-org-id/Acs`.|
|Name ID Format|Format Bitwarden will request of the SAML assertion. Options include:<br>-Unspecific (*default*)<br>-Email Address<br>-X.509 Subject Name<br>-Windows Domain Qualified Name<br>-Kerberos Principal Name<br>-Entity Identifier<br>-Persistent<br>-Transient|
|Outbound Signing Algorithm|The algorithm Bitwarden will use to sign SAML requests. Options include:<br>-<http://www.w3.org/2001/04/xmldsig-more#rsa-sha256> (*default*)<br>-<http://www.w3.org/2000/09/xmldsig#rsa-sha1><br>-<http://www.w3.org/2000/09/xmldsig#rsa-sha384><br>-<http://www.w3.org/2000/09/xmldsig#rsa-sha512>|
|Signing Behavior|Whether/when SAML requests will be signed. Options include:<br>-If IdP Wants Authn Requests Signed (*default*)<br>-Always<br>-Never|
|Minimum Incoming Signing Algorithm|Minimum strength of the algorithm that Bitwarden will accept in SAML responses.|
|Want Assertions Signed|Check this checkbox if Bitwarden should expect responses from the IdP to be signed.|
|Validate Certificates|Check this box when using trusted and valid certificates from your IdP through a trusted CA. Self-signed certificates may fail unless proper trust chains are configured within the Bitwarden Login with SSO docker image.|

#### Identity Provider Configuration

|Field|Description|
|-----|-----------|
|Entity ID|(*Required*) Address or URL of your Identity Server or the IdP Entity ID.|
|Binding Type|Method used by the IdP to respond to Bitwarden SAML requests. Options include:<br>-Redirect (*Recommended*)<br>-HTTP POST<br>-Artifact|
|Single Sign On Service URL|(*Required if Entity ID is not a URL*) SSO URL issued by your IdP.|
|Single Log Out Service URL|Login with SSO currently **does not** support SLO. This option is planned for future use, however we strongly recommend pre-configuring this field.|
|Artifact Resolution Service URL|(*Required if Binding Type is Artifact*) URL used for the Artifact Resolution Protocol.|
|X509 Public Certificate|(*Required unless Signing Behavior is Never*) The X.509 Base-64 encoded certificate body. Do not include the `-----BEGIN CERTIFICATE-----` and `-----END CERTIFICATE-----` lines or portions of the CER/PEM formatted certificate.<br><br>Extra spaces, carriage returns, and other extraneous characters inside this field will cause certificate validation failure. Copy **only** the certificate data into this field.|
|Outbound Signing Algorithm|The algorithm your IdP will use to sign SAML responses/assertions. Options include:<br>-<http://www.w3.org/2001/04/xmldsig-more#rsa-sha256> (*default*)<br>-<http://www.w3.org/2000/09/xmldsig#rsa-sha1><br>-<http://www.w3.org/2000/09/xmldsig#rsa-sha384><br>-<http://www.w3.org/2000/09/xmldsig#rsa-sha512>|
|Allow Unsolicited Authentication Response|Login with SSO currently **does not** support unsolicited (IdP-Initiated) SSO assertions. This checkbox is planned for future use.|
|Disable Outbound Logout Requests|Login with SSO currently **does not** support SLO. This option is planned for future use, however we strongly recommend pre-configuring this field.|
|Want Authentication Requests Signed|Check this checkbox if your IdP should expect SAML requests from Bitwarden to be signed.|

#### SAML Attributes & Claims

An **email address is required for account provisioning**, which can be passed as any of the attributes or claims in the below table.

A unique user identifier is also highly recommended. If absent, Email will be used in its place to link the user.

Attributes/Claims are listed in order of preference for matching, including Fallbacks where applicable:

|Value|Claim/Attribute|Fallback Claim/Attribute|
|-----|---------------|------------------------|
|Unique ID|NameID (when not Transient)<br>urn:oid:0.9.2342.19200300.100.1.1<br>Sub<br>UID<br>UPN<br>EPPN|
|Email|Email<br>http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress<br>urn:oid:0.9.2342.19200300.100.1.3<br>Mail<br>EmailAddress|Preferred_Username<br>Urn:oid:0.9.2342.19200300.100.1.1<br>UID|
|Name|Name<br>http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name<br>urn:oid:2.16.840.1.113730.3.1.241<br>urn:oid:2.5.4.3<br>DisplayName<br>CN|First Name + “ “ + Last Name (see below)|
|First Name|urn:oid:2.5.4.42<br>GivenName<br>FirstName<br>FN<br>FName<br>Nickname|
|Last Name|urn:oid:2.5.4.4<br>SN<br>Surname<br>LastName|
