---
layout: article
title: Duo SAML Configuration
categories: [login-with-sso]
featured: false
popular: false
hidden: true
tags: [sso, saml, duo]
order:
---
This article contains **Duo-specific** help for configuring Login with SSO via SAML 2.0 For help configuring Login with SSO for another IdP, refer to [SAML 2.0 Configuration]({{site.baseurl}}/article/configure-sso-saml/).

Configuration involves working simultaneously between the Bitwarden [Business Portal]({{site.baseurl}}/article/about-business-portal/) and the Duo Admin Portal. As you proceed, we recommend having both readily available and completing steps in the order they're documented.

{% callout success %}
This article assumes that you have already set up Duo with an Identity Provider. If you haven't, see [Duo's documentation](https://duo.com/docs/sso#saml){:target="\_blank"} for details.
{% endcallout %}

## Open the Business Portal

If you're coming straight from [SAML 2.0 Configuration]({{site.baseurl}}/article/sso-configure-saml/), you should already have an [Organization ID created](https://bitwarden.com/help/article/configure-sso-saml/#step-1-enabling-login-with-sso) and the SSO Configuration screen open. If you don't, open your [Business Portal]({{site.baseurl}}/article/about-business-portal/) and navigate to the SSO Configuration screen:

{% image sso/sso-saml1.png SAML 2.0 Configuration %}

You don't need to edit anything on this screen yet, but keep it open for easy reference.

{% comment %}
add authenticaiton source?

{% image sso/cheatsheets/saml-duo/saml-duo1.png %}
{% endcomment %}

## Protect an Application

In the Duo Admin Portal, navigate to the **Applications** screen and select the **Protect an Application** button:

{% image sso/cheatsheets/saml-duo/duo-addapp.png Protect an Application %}

In the search bar, type `generic service provider` and select **Generic Service Provider (Single Sign-On)**:

{% image sso/cheatsheets/saml-duo/duo-search.png Generic Service Provider %}

Complete the following steps and configurations on the Application configuration screen, some of which you'll need to retrieve from the Bitwarden Business Portal:

{% image sso/cheatsheets/saml-duo/duo-appconfig.png Configuration Screen %}

### Metadata

You don't need to edit anything in the **Metadata** section (*see the above screenshot*), but you'll need to [reference these values later](#identity-provider-configuration).

### Downloads

Select the **Download certificate** button to download your X.509 Certificate, as you'll need to use it [later in the configuration](#identity-provider).

### Service Provider

|Field|Description|
|-----|-----------|
|Entity ID|Set this field to the pre-generated **SP Entity ID** retrieved from the Bitwarden SSO configuration screen.<br><br>For Cloud-hosted customers, this is always `https://sso.bitwarden.com/saml2`. For self-hosted instances, this is determined by your [configured server URL]({{site.baseurl}}/article/install-on-premise/#configure-your-domain), for example `https://your.domain.com/sso.saml2`.|
|Assertion Consumer Service (ACS) URL|Set this field to the pre-generated **Assertion Consumer Service (ACS) URL** retrieved from the Bitwarden SSO Configuration screen.<br><br>For Cloud-hosted customers, this is always `https://sso.bitwarden.com/saml2/your-org-id/Acs`. For self-hosted instances, this is determined by your [configured server URL]({{site.baseurl}}/article/install-on-premise/#configure-your-domain), for example `https://your.domain.com/sso/saml2/your-org-id/Acs`.|
|Service Provider Login URL|Set this field to the login URL from which users will access Bitwarden.<br><br>For Cloud-hosted customers, this is always `https://vault.bitwarden.com/#/sso`. For self-hosted instances, this is determined by your [configured server URL]({{site.baseurl}}/article/install-on-premise/#configure-your-domain), for example `https://your.domain.com/#/sso`.|

### SAML Response

|Field|Description|
|-----|-----------|
|NameID format|Set this field to the [SAML NameID format](https://docs.oracle.com/cd/E19316-01/820-3886/ggwbz/index.html){:target="\_blank"} for Duo to send in SAML responses.|
|NameID attribute|Set this field to the Duo attribute that will populate the NameID in responses.|
|Signature algorithm|Set this field to the encryption algorithm to use for SAML assertions and responses.|
|Signing options|Select whether to **Sign response**, **Sign assertion**, or both.|
|Map attributes|Use these fields to map IdP attributes to SAML response attributes. Regardless of which NameID attribute you configured, map the IdP `Email Address` attribute to `Email`, as in the following screenshot:|

{% image sso/cheatsheets/saml-duo/duo-mapping.png Required Attribute Mapping %}

Once you've finished configuring these fields, **Save** your changes.

## Back to the Business Portal

At this point, you’ve configured everything you need within the context of the DUO Portal. Jump back over to the Bitwarden Business Portal to complete configuration.

The Business Portal separates configuration into two sections:

- **SAML Service Provider Configuration** will determine the format of SAML requests.
- **SAML Identity Provider Configuration** will determine the format to expect for SAML responses.

### Service Provider Configuration

Configure the following fields according to the choices selected in the Duo Admin Portal [during application setup](#protect-an-application):

|Field|Description|
|-----|-----------|
|Name ID Format|[NameID Format](https://docs.oracle.com/cd/E19316-01/820-3886/ggvxx/index.html){:target="\_blank"} to use in the SAML request (`NameIDPolicy`). Set this field to [the selected NameID format](#saml-response).|
|Outbound Signing Algorithm|Algorithm used to sign SAML requests, by default `rsa-sha256`.|
|Signing Behavior|Whether/when SAML requests will be signed. By default, Duo will not require requests to be signed.|
|Minimum Incoming Signing Algorithm|The minimum signing algorithm Bitwarden will accept in SAML responses. By default, Duo will sign with `rsa-sha256`, so choose that option from the dropdown unless you've [selected a different option](#saml-response).|
|Want Assertions Signed|Whether Bitwarden wants SAML assertions signed. Check this box if you [selected the **Sign assertion** signing option](#saml-response).|
|Validate Certificates|Check this box when using trusted and valid certificates from your IdP through a trusted CA. Self-signed certificates may fail unless proper trust chains are configured within the Bitwarden Login with SSO docker image.|

When you're done with the Service Provider Configuration section, **Save** your work.

### Identity Provider Configuration

Identity Provider Configuration will often require you to refer back to the Duo Admin Portal to retrieve application values:

|Field|Description|
|-----|-----------|
|Entity ID|Enter the **Entity ID** value of your Duo application, which can be retrieved from the Duo app [Metadata section](#metadata).|
|Binding Type|Set this field to **HTTP Post**.|
|Single Sign On Service URL|Enter the **Single Sign-On URL** value of your Duo application, which can be retrieved from the Duo app [Metadata section](#metadata).|
|Single Log Out Service URL|Login with SSO currently **does not** support SLO. This option is planned for future development, however you may pre-configure with the **Single Log-Out URL** value of your Duo application.|
|Artifact Resolution Service URL|For Duo implementations, you can leave this field blank.|
|X509 Public Certificate|Paste the downloaded [Certificate](#downloads), removing `-----BEGIN CERTIFICATE-----` and `-----END CERTIFICATE-----`.<br><br>Extra spaces, carriage returns, and other extraneous characters **will cause certifiation validation to fail**.|
|Outbound Signing Algorithm|Set this field to the [selected SAML Response signature algorithm](#saml-response).|
|Allow Unsolicited Authentication Response|Login with SSO currently **does not** support unsolicited (IdP-Initiated) SAML assertions. This option is planned for future development.|
|Disable Outbound Logout Requests|Login with SSO currently **does not** support SLO. This option is planned for future development.|
|Want Authentication Requests Signed|Whether Duo expects SAML requests to be signed.|

When you're done with the Identity Provider Configuration section, **Save** your work.

## Test the Configuration

Once your configuration is complete, test it by navigating to [https://vault.bitwarden.com](https://vault.bitwarden.com){:target="\_blank"} and selecting the **Enterprise Single Sign-On** button:

{% image sso/sso-button-lg.png Enterprise Single Sign-On button %}

Enter the [configured Organiztion Identifier](#) and select **Log In**. If your implementation is successfully configured, you'll be redirected to your source IdP's login screen.

After you authenticate with your IdP login and Duo Two-factor, enter your Bitwarden Master Password to decrypt your Vault!
