---
layout: article
title: Google SAML Implementation
categories: [login-with-sso]
featured: false
popular: false
hidden: true
tags: [sso, saml, google]
order:
---

This article contains **Google Workspace-specific** help for configuring Login with SSO via SAML 2.0. For help configuring Login with SSO for another IdP, refer to [SAML 2.0 Configuration]({{site.baseurl}}/article/configure-sso-saml/).

Configuration involves working simultaneously with the Bitwarden [Business Portal]({{site.baseurl}}/article/about-business-portal/) and the Google Workspace Admin console. As you proceed, we recommend having both readily available and completing steps in the order they're documented.

## Open the Business Portal

If you're coming straight from [SAML 2.0 Configuration]({{site.baseurl}}/article/sso-configure-saml/), you should already have an [Organization ID created](https://bitwarden.com/help/article/configure-sso-saml/#step-1-enabling-login-with-sso) and the SSO Configuration screen open. If you don't, open your [Business Portal]({{site.baseurl}}/article/about-business-portal/) and navigate to the SSO Configuration screen:

{% image sso/sso-saml1.png SAML 2.0 Configuration %}

You don't need to edit anything on this screen yet, but keep it open for easy reference.

## Create a SAML app

In the Google Workspace Admin console, select **Apps** &rarr; **SAML apps** from the navigation:

{% image sso/cheatsheets/saml-google/g-addapp.png SAML Apps %}

Select **Add App** &rarr; **Add custom SAML app**:

{% image sso/cheatsheets/saml-google/g-addapp2.png Custom SAML App %}

### App details

On the App details screen, give the application a unique Bitwarden-specific name and select the **Continue** button.

### Google Identity Provider details

On the Google Identity Provider details screen, copy your **SSO URL**, **Entity ID**, and **Certificate** for [use during a later step](#identity-provider-configuration).

Select **Continue** when you're finished.

### Service provider details

On the Service provider details screen, configure the following fields:

|Field|Description|
|-----|-----------|
|ACS URL|Set this field to the pre-generated **Assertion Consumer Service (ACS) URL** retrieved from the Bitwarden SSO configuration screen.<br><br>For Cloud-hosted customers, this is always `https://sso.bitwarden.com/saml2/your-org-id/Acs`. For self-hosted instances, this is determined by your [configured server URL]({{site.baseurl}}/article/install-on-premise/#configure-your-domain), for example `https://your.domain/sso/your-org-id/Acs`.|
|Entity ID|Set this field to the pre-generated **SP Entity ID** retrieved from the Bitwarden SSO Configuration screen.<br><br>For Cloud-hosted customers, this is always `https://sso.bitwarden.com/saml2`. For self-hosted instances, this is determined by your [configured server URL]({{site.baseurl}}/article/install-on-premise/#configure-your-domain), for example `https://your.domain.com/sso/saml2`.|
|Start URL|Optionally, set this field to the login URL from which users will access Bitwarden.<br><br>For Cloud-hosted customers, this is always `https://vault.bitwarden.com/#/sso`. For self-hosted instances, this is determined by your [configured server URL]({{site.baseurl}}/article/install-on-premise/#configure-your-domain), for example `https://your.domain.com/#/sso`.|
|Signed response|Check this box if you want Workspace to sign SAML responses. If not checked, Workspace will sign only the SAML assertion.|
|Name ID format|Set this field to the [SAML NameID format](https://docs.oracle.com/cd/E19316-01/820-3886/ggwbz/index.html){:target="\_blank"} for Workspace to use in SAML responses.|
|Name ID|Select the Workspace user attribute to populate NameID.|

Select **Continue** when you're finished.

### Attribute mapping

On the Attribute mapping screen, select the **Add Mapping** button and construct the following mapping:

|Google Directory attributes|App attributes|
|---------------------------|--------------|
|Primary email|email|

Select **Finish**.

### Turn On the App

By default, Workspace SAML apps will be **OFF for everyone**. Open the User Access section for the SAML app and set to **ON for everyone** or for specific Groups, depending on your needs:

{% image sso/cheatsheets/saml-google/g-activate.png User Access %}

**Save** your changes.

## Back to the Business Portal

At this point, you've configured everything you need within the context of the Google Workspace Admin console. Jump back over to the Bitwarden Business Portal to complete configuration.

The Business Portal separates configuration into two sections:

- **SAML Service Provider Configuration** will determine the format of SAML requests.
- **SAML Identity Provider Configuration** will determine the format to expect for SAML responses.

### Service Provider Configuration

Configure the following fields according to the choices selected in the Workspace Admin console [during setup](#service-provider-details):

|Field|Description|
|-----|-----------|
|Name ID Format|Set this field to the Name ID format [selected in Workspace](#service-provider-details).|
|Outbound Signing Algorithm|The algorithm Bitwarden will use to sign SAML requests.|
|Signing Behavior|Whether/when SAML requests will be signed.|
|Minimum Incoming Signing Algorithm|By default, Google Workspace will sign with RSA SHA-256. Select `sha-256` from the dropdown.|
|Want Assertions Signed|Whether Bitwarden expects SAML assertions to be signed. By default, Workspace SAML Apps will sign SAML assertions, so you may check this box.|
|Validate Certificates|Check this box when using trusted and valid certificates from your IdP through a trusted CA. Self-signed certificates may fail unless proper trust chains are configured with the Bitwarden Login with SSO docker image.|

When you're done with the Service Provider Configuration section, **Save** your work.

### Identity Provider Configuration

Identity Provider Configuration will often require you to refer back to the Workspace Admin console to retrieve application values:

|Field|Description|
|-----|-----------|
|Entity ID|Set this field to Workspace's **Entity ID**, retrieved from the [Google Identity Provider details section](#identity-provider-details) or using the **Download Metadata** button.|
|Binding Type|Set to **HTTP POST** or **Redirect**.|
|Single Sign On Service URL|Set this field to Workspace's **SSO URL**, retrieved from the [Google Identity Provider details section](#identity-provider-details) or using the **Download Metadata** button.|
|Single Log Out URL|Login with SSO currently **does not** support SLO. This option is planned for future development, however you may pre-configure it if you wish.|
|Artifact Resolution Service URL|For Workspace SAML app implementations, leave this field blank.|
|X509 Public Certificate|Paste the [retrieved Certificate](#identity-provider-details), removing `-----BEGIN CERTIFICATE-----` and `-----END CERTIFICATE-----`.<br><br>Extra spaces, carriage returns, and other extraneous characters **will cause certifiation validation to fail**.|
|Outbound Signing Algorithm|By default, Google Workspace will sign with RSA SHA-256. Select `sha-256` from the dropdown.|
|Allow Unsolicited Authentication Response|Login with SSO currently **does not** support unsolicited (IdP-initiated) SAML assertions. This option is planned for future development.|
|Disable Outbound Logout Requests|Login with SSO currently **does not** support SLO. This option is planned for future development.|
|Want Authentication Requests Signed|Whether Google Workspace expects SAML requests to be signed.|

When you're done with the Identity Provider Configuration section, **Save** your work.

## Test the Configuration

Once your configuration is complete, test it by navigating to [https://vault.bitwarden.com](https://vault.bitwarden.com){:target="\_blank"} and selecting the **Enterprise Single Sign-On** button:

{% image sso/sso-button-lg.png Enterprise Single Sign-On button %}

Enter the [configured Organization Identifier]({{site.baseurl}}/article/configure-sso-saml/#step-1-enabling-login-with-sso) and select **Log In**. If your implementation is successfully configured, you'll be redirected to the Google Workspace login screen:

{% image sso/cheatsheets/saml-google/g-login.png Login %}

After you authenticate with your Workspace credentials, enter your Bitwarden Master Password to decrypt your Vault!

{% comment %}
{% image sso/cheatsheets/saml-google/saml-google1.png %}
{% image sso/cheatsheets/saml-google/saml-google2.png %}
{% image sso/cheatsheets/saml-google/saml-google-bitwarden.png %}
{% endcomment %}
