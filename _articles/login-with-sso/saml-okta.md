---
layout: article
title: Okta SAML Implementation
categories: [login-with-sso]
featured: false
popular: false
hidden: true
tags: [sso, saml, okta]
order:
---

This article contains **Okta-specific** help for configuring Login with SSO via SAML 2.0. For help configuring Login with SSO for another IdP, refer to [SAML 2.0 Configuration]({{site.baseurl}}/article/configure-sso-saml/).

Configuration involves working simultaneously within the Bitwarden [Business Portal]({{site.baseurl}}/article/about-business-portal/) and the Okta Admin Portal. As you proceed, we recommend having both readily available and completing steps in the order they're documented.

## Open the Business Portal

If you're coming straight from [SAML 2.0 Configuration]({{site.baseurl}}/article/configure-sso-saml/), you should already have an [Organization ID created](https://bitwarden.com/help/article/configure-sso-saml/#step-1-enabling-login-with-sso) and the SSO Configuration screen open. If you don't, open your
[Business Portal]({{site.baseurl}}/article/about-business-portal/) and navigate to the SSO Configuration screen:

{% image sso/sso-saml1.png SAML 2.0 Configuration %}

You don't need to edit anything on this screen yet, but keep it open for easy reference.

## Create an Okta App

In the Okta Admin Portal, select **Applications** &rarr; **Applications** from the navigation. On the Applications screen, select the **Add Application** button:

{% image sso/cheatsheets/saml-okta/okta-addapp.png Add Application %}

Select the **Create New App** button:

{% image sso/cheatsheets/saml-okta/okta-createapp.png Create New App %}

In the Create a New Application Integration dialog, select **Web** from the **Platform** dropdown and select the **SAML 2.0** radio button:

{% image sso/cheatsheets/saml-okta/okta-apptype.png App Type Settings %}

Select the **Create** button to proceed to configuration.

### General Settings

On the **General Settings** screen, give the application a unique, Bitwarden-specific name and select **Next**.

### Configure SAML

On the **Configure SAML** screen, configure the following fields:

|Field|Description|
|-----|-----------|
|Single sign on URL|Set this field to the pre-generated **Assertion Consumer Service (ACS) URL** retrieved from the Bitwarden SSO Configuration screen.<br><br>For Cloud-hosted customers, this is always `https://sso.bitwarden.com/saml2/your-org-id/Acs`. For self-hosted instances, this is determined by your [configured server URL]({{site.baseurl}}/article/install-on-premise/#configure-your-domain), for example `https://your.domain.com/sso/saml2/your-org-id/Acs`.|
|Audience URI (SP Entity ID)|Set this field to the pre-generated **SP Entity ID** retrieved from the Bitwarden SSO Configuration screen.<br><br>For Cloud-hosted customers, this is always `https://sso.bitwarden.com/saml2`. For self-hosted instances, this is determined by your [configured server URL]({{site.baseurl}}/article/install-on-premise/#configure-your-domain), for example `https://your.domain.com/sso/saml2`.|
|Name ID format|Select the [SAML NameID format](https://docs.oracle.com/cd/E19316-01/820-3886/ggwbz/index.html){:target="\_blank"} to use in SAML assertions. By default, **Unspecified**.|
|Application username|Select the Okta attribute users will use to login to Bitwarden.|

### Advanced Settings

Select the **Show Advanced Settings** link and configure the following fields:

{% image sso/cheatsheets/saml-okta/okta-advsettings.png Advanced Settings %}

|Field|Description|
|-----|-----------|
|Response|Whether the SAML response is signed by Okta.|
|Assertion Signature|Whether the SAML assertion is signed by Okta.|
|Signature Algorithm|The signing algorithm used to sign the response and/or assertion, depending on which is set to **Signed**. By default, `rsa-sha256`.|
|Digest Algorithm|The digest algorithm used to sign the response and/or assertion, depending on which is set to **Signed**. This field must match the selected **Signature Algorithm**.|

### Attribute Statements

In the **Attribute Statements** section, construct the following SP &rarr; IdP attribute mappings:

{% image sso/cheatsheets/saml-okta/okta-attr.png Attribute Statements %}

Once configured, select the **Next** button to proceed to the **Feedback** screen and select **Finish**.

### Get IdP Values

Once your application is created, select the **Sign On** tab for the app and select the **View Setup Instructions** button:

{% image sso/cheatsheets/saml-okta/okta-ssosettings.png Get IdP Values %}

Either leave this page up [for future use](#identity-provider-configuration), or copy the **Identity Provider Single Sign-On URL** and **Identity Provider Issuer** and download the **X.509 Certificate**.

### Assignments

Navigate to the **Assignments** tab and select the **Assign** button:

{% image sso/cheatsheets/saml-okta/okta-assign.png Assigning Groups %}

You can assign access to the application on a user-by-user basis using the **Assign to People** option, or in-bulk using the **Assign to Groups** option.

## Back to the Business Portal

At this point, you've configured everything you need within the context of the Okta Admin Portal. Jump back over to the Bitwarden Business Portal to complete configuration.

The Business Portal separates configuration into two sections:

- **SAML Service Provider Configuration** will determine the format of SAML requests.
- **SAML Identity Provider Configuration** will determine the format to expect for SAML responses.

### Service Provider Configuration

Configure the following fields according to the choices selected in the Okta Admin Portal [during app creation](#create-an-okta-app):

|Field|Description|
|-----|-----------|
|Name ID Format|Set this to whatever the Name ID format [specified in Okta](#configure-saml), otherwise leave **Unspecified**.|
|Outbound Signing Algorithm|The algorithm Bitwarden will use to sign SAML requests.|
|Signing Behavior|Whether/when SAML requests will be signed.|
|Minimum Incoming Signing Algorithm|Set this to the Signature Algorithm [specified in Okta](#advanced-settings).|
|Want Assertions Signed|Check this box if you set the Assertion Signature field to **Signed** [in Okta](#advanced-settings).|
|Validate Certificates|Check this box when using trusted and valid certificates from your IdP through a trusted CA. Self-signed certificates may fail unless proper trust chains are configure within the Bitwarden Login with SSO docker image.|

When you're done with the Service Provider Configuration section, **Save** your work.

### Identity Provider Configuration

Identity Provider Configuration will often require you to refer back to the Okta Admin Portal to retrieve application values:

|Field|Description|
|-----|-----------|
|Entity ID|Enter your **Identity Provider Issuer**, retrieved from the Okta [Sign On Settings](#get-idp-values) screen.|
|Binding Type|Set to **Redirect**. Okta currently does not support HTTP POST.|
|Single Sign On Service URL|Enter your **Identity Provider Single Sign-On URL**, retrieved from the Okta [Sign On Settings](#get-idp-values) screen.|
|Single Log Out Service URL|Login with SSO currently **does not** support SLO. This option is planned for future development, however you may pre-configure it if you wish.|
|Artifact Resolution Service URL|For Okta implementations, you can leave this field blank.|
|X509 Public Certificate|Paste the [downloaded Certificate](#get-idp-values), removing `-----BEGIN CERTIFICATE-----` and `-----END CERTIFICATE-----`.<br><br>Extra spaces, carriage returns, and other extraneous characters **will cause certifiation validation to fail**.|
|Outbound Signing Algorithm|Select the Signature Algorithm selected [during Okta app configuration](#advanced-settings). If you didn't change the Signature Algorithm, leave the default (`rsa-sha256`).|
|Allow Unsolicited Authentication Response|Login with SSO currently **does not** support unsolicited (IdP-Initiated) SAML assertions. This option is planned for future development.|
|Disable Outbound Logout Requests|Login with SSO currently **does not** support SLO. This option is planned for future development.|
|Want Authentication Requests Signed|Whether Okta expects SAML requests to be signed.|

When you're done with the Identity Provider Configuration section, **Save** your work.

## Test the configuration

Once your configuration is complete, test it by navigating to [https://vault.bitwarden.com](https://vault.bitwarden.com){:target="\_blank"} and selecting the **Enterprise Single Sign-On** button:

{% image sso/sso-button-lg.png Enterprise Single Sign-On button %}

Enter the [configured Organization Identifier]({{site.baseurl}}/article/configure-sso-saml/#step-1-enabling-login-with-sso) and select **Log In**. If your implementation is successfully configured, you'll be redirected to the Okta login screen:

{% image sso/cheatsheets/saml-okta/okta-login.png Log in with Okta %}

After you authenticate with your Okta credentials, enter your Bitwarden Master Password to decrypt your Vault!

{% comment %}
{% image sso/cheatsheets/saml-okta/saml-okta.png %}

{% image sso/cheatsheets/saml-okta/saml-okta-bitwarden.png %}
{% endcomment %}
