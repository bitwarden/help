---
layout: article
title: JumpCloud SAML Implementation
categories: []
featured: false
popular: false
hidden: true
tags: [sso, saml, jumpcloud]
order:
---

This article contains **JumpCloud-specific** help for configuring Login with SSO via SAML 2.0. For help configuring Login with SSO for another IdP, refer to [SAML 2.0 Configuration]({{site.baseurl}}/article/configure-sso-saml/).

Configuration involves working simultaneously within the Bitwarden [Business Portal]({{site.baseurl}}/article/about-business-portal/) and the JumpCloud Portal. As you proceed, we recommend having both readily available and completing steps in the order they're documented.

## Open the Business Portal

If you're coming straight from [SAML 2.0 Configuration]({{site.baseurl}}/article/sso-configure-saml/), you should already have an [Organization ID created](https://bitwarden.com/help/article/configure-sso-saml/#step-1-enabling-login-with-sso) and the SSO Configuration screen open. If you don't, open your [Business Portal]({{site.baseurl}}/article/about-business-portal/) and navigate to the SSO Configuration screen:

{% image sso/sso-saml1.png SAML 2.0 Configuration %}

You don't need to edit anything on this screen yet, but keep it open for easy reference.

## Create a JumpCloud SAML App

In the JumpCloud Portal, select **SSO** from the menu and select the {% icon fa-plus %} **Add** icon:

{% image sso/cheatsheets/saml-jumpcloud/jc-addapp.png Add JumpCloud App %}

Enter `Bitwarden` in the search box and select the **configure** button:

{% image sso/cheatsheets/saml-jumpcloud/jc-bw.png Configure Bitwarden %}

{% callout success %}
If you're more comfortable with SAML, or want more control over things like NameID Format and Signing Algorithms, create a **Custom SAML App** instead.
{% endcallout %}

### General Info

In the **General Info** section, configure the following information:

|Field|Description|
|-----|-----------|
|Display Label|Give the application a Bitwarden-specific name.|

### Single Sign-On Configuration

In the **Single Sign-On Configuration** section, configure the following information:

|Field|Description|
|-----|-----------|
|IdP Entity ID|Set this field to a unique, Bitwarden-specific value, e.g. `bitwardensso_yourcompany`.|
|SP Entity ID|Set this field to the pre-generated **SP Entity ID** retrieved from the Bitwarden SSO Configuration screen.<br><br>For Cloud-hosted customers, this is always `https://sso.bitwarden.com/saml2`. For self-hosted instances, this is determined by your [configured server URL]({{site.baseurl}}/article/install-on-premise/#configure-your-domain), for example `https://your.domain.com/sso/saml2`.|
|ACS URL|Set this field to the pre-generated **Assertion Consumer Service (ACS) URL** retrieved from the Bitwarden SSO Configuration screen.<br><br>For Cloud-hosted customers, this is always `https://sso.bitwarden.com/saml2/your-org-id/Acs`. For self-hosted instances, this is determined by your [configured server URL]({{site.baseurl}}/article/install-on-premise/#configure-your-domain), for example `https://your.domain.com/sso/saml2/your-org-id/Acs`.|

#### Custom SAML App Only

If you created a Custom SAML App, you'll also need to configure the following **Single Sign-On Configuration** fields:

|Field|Description|
|-----|-----------|
|SAMLSubject NameID|Specify the JumpCloud attribute that will be sent in SAML responses as the NameID.|
|SAMLSubject NameID Format|Specify the format of the NameID sent in SAML responses.|
|Signature Algoritm|Select the algorithm to use to sign SAML assertions or reponses.|
|Sign Assertion|By default, JumpCloud will sign the SAML response. Check this box the sign the SAML assertion.|
|Login URL|Specify the URL from which your users will login to Bitwarden via SSO. For Cloud-hosted customers, this is always `https://vault.bitwarden.com/#/sso`. For self-hosted instances, this is determined by your [configured server URL]({{site.baseurl}}/article/install-on-premise/#configure-your-domain), for example `https://your.domain.com/#/sso`. |

### Attributes

In the **Single Sign-On Configuration** &rarr; **Attributes** section, construct the following SP &rarr; IdP attribute mappings. If you selected the Bitwarden App in JumpCloud, these should already be constructed:

{% image sso/cheatsheets/saml-jumpcloud/jc-attr.png Attribute Mapping %}

Once you're finished, select the **activate** button.

### Download the Certificate

Once the application is activated, use the **SSO** menu option again to open the created Bitwarden application. Select the **IDP Certificate** dropdown and **Download certificate**:

{% image sso/cheatsheets/saml-jumpcloud/jc-cert.png Download Certificate %}

### Bind Users Groups

In the JumpCloud Portal, select **User Groups** from the menu:

{% image sso/cheatsheets/saml-jumpcloud/jc-groups.png User Groups %}

Either create a Bitwarden-specific User Group, or open the All Users default User Group. In either case, select the **Applications** tab and enable access to the created Bitwarden SSO application for that User Group:

{% image sso/cheatsheets/saml-jumpcloud/jc-group-app.png Bind App Access %}

{% callout success %}
Alternatively, you can bind access to User Groups directly from the **SSO** &rarr; **Bitwarden Application** screen.
{% endcallout %}

## Back to the Business Portal

At this point, you've configured everything you need within the context of the JumpCloud Portal. Jump back over to the Bitwarden Business Portal to complete configuration.

The Business Portal separates configuration into two sections:

- **SAML Service Provider Configuration** will determine the format of SAML requests.
- **SAML Identity Provider Configuration** will determine the format to expect for SAML responses.

### Service Provider Configuration

Configure the following fields according to the choices selected in the OneLogin Portal [during app creation](#create-a-onelogin-app):

|Field|Description|
|-----|-----------|
|Name ID Format|If you created a Custom SAML App, set this to whatever the specified SAMLSubject NameID Format is. Otherwise, leave **Unspecified**.|
|Outbound Signing Algorithm|The algorithm Bitwarden will use to sign SAML requests.|
|Signing Behavior|Whether/when SAML requests will be signed. By default, JumpCloud will not require requests to be signed.|
|Minimum Incoming Signing Algorithm|If you created a Custom SAML App, set this to whichever Signature Algorithm you selected. Otherwise, leave as `rsa-sha256`.|
|Want Assertions Signed|If you created a Custom SAML App, check this box if you set the **Sign Assertion** option in JumpCloud. Otherwise, leave unchecked.|
|Validate Certificates|Check this box when using trusted and valid certificates from your IdP through a trusted CA. Self-signed certificates may fail unless proper trust chains are configured within the Bitwarden Login with SSO docker image.|

When you're done with the Service Provider configuration section, **Save** your work.

### Identity Provider Configuration

Identity Provider Configuration will often require you to refer back to the OneLogin Portal to retrieve application values:

|Field|Description|
|-----|-----------|
|Entity ID|Enter your JumpCloud **IdP Entity ID**, which can be retrieved from the JumpCloud [Single Sign-On Configuration screen](##single-sign-on-configuration).|
|Binding Type|Set to **Redirect**.|
|Single Sign On Service URL|Enter your JumpCloud **IdP URL**, which can be retrieved from the JumpCloud [Single Sign-On Configuration screen](##single-sign-on-configuration).|
|Single Log Out Service URL|Login with SSO currently **does not** support SLO. This option is planned for future development.|
|Artifact Resolution Service URL|For JumpCloud implementations, you can leave this field blank.|
|X509 Public Certificate|Paste the [retrieved Certificate](##download-the-certificate), removing `-----BEGIN CERTIFICATE-----` and `-----END CERTIFICATE-----`.<br><br>Extra spaces, carriage returns, and other extraneous characters **will cause certifiation validation to fail**.|
|Outbound Signing Algorithm|If you created a Custom SAML App, set this to whichever Signature Algorithm you selected. Otherwise, leave as `rsa-sha256`.|
|Allow Unsolicited Authentication Response|Login with SSO currently **does not** support unsolicited (IdP-Initiated) SAML assertions. This option is planned for future development.|
|Disable Outbound Logout Requests|Login with SSO currently **does not** support SLO. This option is planned for future development.|
|Want Authentication Requests Signed|Whether JumpCloud expects SAML requests to be signed.|

## Test the Configuration

Once your configuration is complete, test it by navigating to [https://vault.bitwarden.com](https://vault.bitwarden.com){:target="\_blank"} and selecting the **Enterprise Single Sign-On** button:

{% image sso/sso-button-lg.png Enterprise Single Sign-On button %}

Enter the [configured Organization Identifier](#) and select **Log In**. If your implementation is successfully configured, you'll be redirected to the JumpCloud login screen:

{% image sso/cheatsheets/saml-jumpcloud/jc-login.png JumpCloud Login %}

After you authenticate with your JumpCloud credentials, enter your Bitwarden Master Password to decrypt your Vault!

{% comment %}

{% image sso/cheatsheets/saml-jumpcloud/saml-jumpcloud.png %}

{% image sso/cheatsheets/saml-jumpcloud/saml-jumpcloud-bitwarden.png %}
{% endcomment %}
