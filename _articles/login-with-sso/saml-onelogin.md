---
layout: article
title: OneLogin SAML Configuration
categories: [login-with-sso]
featured: false
popular: false
hidden: true
tags: [sso, saml, onelogin]
order:
---
This article contains **OneLogin-specific** help for configuring Login with SSO via SAML 2.0. For help configuring Login with SSO for another IdP, refer to [SAML 2.0 Configuration]({{site.baseurl}}/article/configure-sso-saml/).

Configuration involves working simultaneously within the Bitwarden [Business Portal]({{site.baseurl}}/article/about-business-portal/) and the OneLogin Portal. As you proceed, we recommend having both readily available and completing steps in the order they're documented.

## Open the Business Portal

If you're coming straight from [SAML 2.0 Configuration]({{site.baseurl}}/article/sso-configure-saml/), you should already have an [Organization ID created](https://bitwarden.com/help/article/configure-sso-saml/#step-1-enabling-login-with-sso) and the SSO Configuration screen open. If you don't, open your [Business Portal]({{site.baseurl}}/article/about-business-portal/) and navigate to the SSO Configuration screen:

{% image sso/sso-saml1.png SAML 2.0 Configuration %}

You don't need to edit anything on this screen yet, but keep it open for easy reference.

## Create a OneLogin App

In the OneLogin Portal, navigate to the the **Applications** screen and select the **Add App** button:

{% image sso/cheatsheets/saml-onelogin/ol-addapp.png Add an Application %}

In the search bar, type `saml test connector` and select the **SAML Test Connector (Advanced)** app:

{% image sso/cheatsheets/saml-onelogin/ol-addapp2.png SAML Test Connector App %}

Give your application a Bitwarden-specific **Display Name** and select the **Save** button.

### Configuration

Select **Configuration** from the left-hand navigation and configure the following information, some of which you'll need to retreive from the Bitwarden Business Portal:

{% image sso/cheatsheets/saml-onelogin/ol-appconfig.png %}

|Application Setting|Description|
|----------------|-----------|
|Audience (EntityID)|Set this field to the pre-generated **SP Entity ID** retrieved from the Bitwarden SSO Configuration screen.<br><br>For Cloud-hosted customers, this is always `https://sso.bitwarden.com/saml2`. For self-hosted instances, this is determined by your [configured server URL]({{site.baseurl}}/article/install-on-premise/#configure-your-domain), for example `https://your.domain.com/sso.saml2`.|
|Recipient|Set this field to the same pre-generated **SP Entity ID** used for the **Audience (Entity ID)** setting.|
|ACS (Consumer) URL Validator|Despite being marked **Required** by OneLogin, you don't actually need to enter information into this field to integrate with Bitwarden. Skip to the next field, **ACS (Consumer) URL**.|
|ACS (Consumer) URL|Set this field to the pre-generated **Assertion Consumer Service (ACS) URL** retrieved from the Bitwarden SSO Configuration screen.<br><br>For Cloud-hosted customers, this is always `https://sso.bitwarden.com/saml2/your-org-id/Acs`. For self-hosted instances, this is determined by your [configured server URL]({{site.baseurl}}/article/install-on-premise/#configure-your-domain), for example `https://your.domain.com/sso/saml2/your-org-id/Acs`.|
|SAML initiator|Select **Service Provider**. Login with SSO does not currently support IdP-initiated SAML assertions.|
|SAML nameID Format|Set this field to the [SAML NameID Format](https://docs.oracle.com/cd/E19316-01/820-3886/ggwbz/index.html){:target="\_blank"} you want to use for SAML assertions.|
|SAML signature element|By default, OneLogin will sign the SAML Response. You can set this to **Assertion** or **Both**, and |

Select the **Save** button to finish your Configuration settings.

### Parameters

Select **Parameters** from the left-hand navigation and use the {% icon fa-plus %} **Add** icon to create the following custom parameters:

|Field Name|Value|
|----------|-----|
|email|Email|
|firstname|First Name|
|lastname|Last Name|

Select the **Save** button to finish your custom parameters.

### SSO

Select **SSO** from the left-hand navigation and complete the following:

1. Select the **View Details** link under your X.509 Certificate:

   {% image sso/cheatsheets/saml-onelogin/ol-viewcert.png View your Cert %}

   On the Certificate screen, download or copy your X.509 PEM Certificate, as you'll need to [use it later](#identity-provider-configuration). Once copied, return to the main SSO screen.
2. Set your **SAML Signature Algorithm**.
3. Take note of your **Issuer URL** and **SAML 2.0 Endpoint (HTTP)**. You'll need to [use these values shortly](#identity-provider-configuration).

### Access

Select **Access** from the left-hand navigation. In the **Roles** section, assign application access to all the roles you'd like to be able to use Bitwarden. Most implementations create a Bitwarden-specific role and instead opt to assign based on a catch-all (for example, **Default**) or based on pre-existing roles.

{% image sso/cheatsheets/saml-onelogin/ol-roles.png Role Assignment %}

## Back to the Business Portal

At this point, you've configured everything you need within the context of the OneLogin Portal. Jump back over to the Bitwarden Business Portal to complete configuration.

The Business Portal separates configuration into two sections:

- **SAML Service Provider Configuration** will determine the format of SAML requests.
- **SAML Identity Provider Configuration** will determine the format to expect for SAML responses.

### Service Provider Configuration

Configure the following fields according to the choices selected in the OneLogin Portal [during app creation](#create-a-onelogin-app):

|Field|Description|
|-----|-----------|
|Name ID Format|Set this field to whatever you selected for the OneLogin **SAML nameID Format** field [during App Configuration](#configuration).|
|Outbound Signing Algorithm|Algorithm used to sign SAML requests, by default `sha-256`.|
|Signing Behavior|Whether/when SAML requests will be signed. By default, OneLogin will not require requests to be signed.|
|Minimum Incoming Signing Algorithm|Set this field to whatever you selected for the **SAML Signature Algorithm** [during App Configuration](#configuration)|
|Want Assertions Signed|Check this box if you set the **SAML signature element** in OneLogin to **Assertion** or **Both** [during App Configuration](#configuration).|
|Validate Certificates|Check this box when using trusted and valid certificates from your IdP through a trusted CA. Self-signed certificates may fail unless proper trust chains are configured within the Bitwarden Login with SSO docker image.|

When you're done with the Service Provider configuration section, **Save** your work.

### Identity Provider Configuration

Identity Provider Configuration will often require you to refer back to the OneLogin Portal to retrieve application values:

|Field|Description|
|-----|-----------|
|Entity ID|Enter your OneLogin **Issuer URL**, which can be retrieved from the [OneLogin app SSO screen](#sso).|
|Binding Type|Set to **HTTP Post** (as indicated in the SAML 2.0 Endpoint (HTTP)).|
|Single Sign On Service URL|Enter your OneLogin **SAML 2.0 Endpoint (HTTP)**, which can be retrieved from the [OneLogin app SSO screen](#sso).|
|Single Log Out Service URL|Login with SSO currently **does not** support SLO. This option is planned for future development, however you may pre-configure it if you wish.|
|Artifact Resolution Service URL|For OneLogin implementations, you can leave this field blank.|
|X509 Public Certificate|Paste the [retrieved X.509 Certificate](#sso), removing `-----BEGIN CERTIFICATE-----` and `-----END CERTIFICATE-----`.<br><br>Extra spaces, carriage returns, and other extraneous characters **will cause certifiation validation to fail**.|
|Outbound Signing Algorithm|Select the SAML Signature Algorithm selected in the [OneLogin SSO](#sso) configuration section.|
|Allow Unsolicited Authentication Response|Login with SSO currently **does not** support unsolicited (IdP-Initiated) SAML assertions. This option is planned for future development.|
|Disable Outbound Logout Requests|Login with SSO currently **does not** support SLO. This option is planned for future development.|
|Want Authentication Requests Signed|Whether OneLogin expects SAML requests to be signed.|

## Test the Configuration

Once your configuration is complete, test it by navigating to [https://vault.bitwarden.com](https://vault.bitwarden.com){:target="\_blank"} and selecting the **Enterprise Single Sign-On** button:

{% image sso/sso-button-lg.png Enterprise Single Sign-On button %}

Enter the [configured Organization Identifier](#) and select **Log In**. If your implementation is successfully configured, you'll be redirected to the OneLogin login screen:

{% image sso/cheatsheets/saml-onelogin/ol-login.png OneLogin Login %}

After you authenticate with your OneLogin credentials, enter your Bitwarden Master Password to decrypt your Vault!


{% comment %}

{% image sso/cheatsheets/saml-onelogin/saml-onelogin3.png %}

{% image sso/cheatsheets/saml-onelogin/saml-onelogin4.png %}

{% image sso/cheatsheets/saml-onelogin/saml-onelogin5.png %}

{% image sso/cheatsheets/saml-onelogin/saml-onelogin1.png %}

{% image sso/cheatsheets/saml-onelogin/saml-onelogin2.png %}
{% endcomment %}
