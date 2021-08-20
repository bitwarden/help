---
layout: article
title: Azure SAML Implementation
categories: [login-with-sso]
featured: false
popular: false
hidden: true
tags: [sso, saml, azure]
order:
---

This article contains **Azure-specific** help for configuring Login with SSO via SAML 2.0. For help configuring Login with SSO for another IdP, refer to [SAML 2.0 Configuration]({{site.baseurl}}/article/configure-sso-saml/).

Configuration involves working simultaneously with the Bitwarden [Business Portal]({{site.baseurl}}/article/about-business-portal) and the Azure Portal. As you proceed, we recommend having both readily available and completing steps in the order they're documented.

## Open the Business Portal

If you're coming straight from [SAML 2.0 Configuration]({{site.baseurl}}/article/configure-sso-saml/), you should already have an [Organization ID created](https://bitwarden.com/help/article/configure-sso-saml/#step-1-enabling-login-with-sso) and the SSO Configuration screen open. If you don't, open your
[Business Portal]({{site.baseurl}}/article/about-business-portal/) and navigate to the SSO Configuration screen:

{% image sso/sso-saml1.png SAML 2.0 Configuration %}

You don't need to edit anything on this screen yet, but keep it open for easy reference.

## Create an Enterprise Application

In the Azure Portal, navigate to **Azure Active Directory** and select **Enterprise applications** from the navigation menu:

{% image sso/cheatsheets/saml-azure/az-create.png Enterprise applications %}

Select the {% icon fa-plus %} **New application** button:

{% image sso/cheatsheets/saml-azure/az-newapp.png Create new application %}

On the Browse Azure AD Gallery screen, select the {% icon fa-plus %} **Create your own application** button:

{% image sso/cheatsheets/saml-azure/az-newapp2.png Create your own application %}

On the Create your own application screen, give the application a unique, Bitwarden-specific name and select the **Create** button.

### Enable Single Sign-on

From the Application Overview screen, select **Single sign-on** from the navigation:

{% image sso/cheatsheets/saml-azure/az-sso.png Configure Single sign-on %}

On the Single sign-on screen, select **SAML**.

## SAML Setup

### Basic SAML Configuration

Select the **Edit** button and configure the following fields:

|Field|Description|
|-----|-----------|
|Identifier (Entity ID)|Set this field to the pre-generated **SP Entity ID** retrieved from the Bitwarden SSO Configuration screen.<br><br>For Cloud-hosted customers, this is always `https://sso.bitwarden.com/saml2`. For self-hosted instances, this is determined by your [configured server URL]({{site.baseurl}}/article/install-on-premise/#configure-your-domain), for example `https://your.domain.com/sso/saml2`.|
|Reply URL (Assertion Consumer Service URL)|Set this field to the pre-generated **Assertion Consumer Service (ACS) URL** retreived from the Bitwarden SSO configuration screen.<br><br>For Cloud-hosted customers, this is always `https://sso.bitwarden.com/saml2/your-org-id/Acs`. For self-hosted instances, this is determined by your [configured server URL]({{site.baseurl}}/article/install-on-premise/#configure-your-domain), for example `https://your.domain/sso/your-org-id/Acs`.|
|Sign on URL|Set this field to the login URL from which users will access Bitwarden.<br><br>For Cloud-hosted customers, this is always `https://vault.bitwarden.com/#/sso`. For self-hosted instances, this is determined by you [configured server URL]({{site.baseurl}}/article/install-on-premise/#configure-your-domain), for example `https://your-domain.com/#/sso`.|

### User Attributes & Claims

The default claims constructed by Azure will work with Login with SSO, however you can optionally use this section to configure the NameID format used by Azure in SAML responses.

Select the **Edit** button and select the **Unique User Identifier (Name ID)** entry to edit the NameID claim:

{% image sso/cheatsheets/saml-azure/az-claim.png Edit NameID Claim %}

Options include Default, Email Address, Persistent, Unspecified, and Windows qualified domain name. For more information, refer to [Microsoft Azure documentation](https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-saml-claims-customization#editing-nameid){:target="\_blank"}.

### SAML Signing Certificate

Download the Base64 Certificate for use [during a later step](#identity-provider-configuration).

### Set up your Application

Copy or take note of the **Login URL** and **Azure AD Identifier** in this section for use [during a later step](#identity-provider-configuration).

### Users and Groups

Select **Users and groups** from the navigation:

{% image sso/cheatsheets/saml-azure/az-assign.png Assign users or groups %}

Select the **Add user/group** button to assign access to the Login with SSO application on a user or group-level.

## Back to the Business Portal

At this point, you've configured everything you need within the context of the Azure Portal. Jump back over to the Bitwarden Business Portal to complete configuration.

The Business Portal separates configuration into two sections:

- **SAML Service Provider Configuration** will determine the format of SAML requests.
- **SAML Identity Provider Configuration** will determine the format to expect for SAML responses.

### Service Provider Configuration

Configure the following fields:

|Field|Description|
|-----|-----------|
|Name ID Format|By default, Azure will use Email Address. If you [changed this setting](#user-attributes--claims), select the corresponding value. Otherwise, set this field to **Unspecified** or **Email Address**.|
|Outbound Signing Algorithm|The algorithm Bitwarden will use to sign SAML requests.|
|Signing Behavior|Whether/when SAML requests will be signed.|
|Minimum Incoming Signing Algorithm|By default, Azure will sign with RSA SHA-256. Select `rsa-sha256` from the dropdown.|
|Want Assertions Signed|Whether Bitwarden expects SAML assertions to be signed.|
|Validate Certificates|Check this box when using trusted and valid certificates from your IdP through a trusted CA. Self-signed certificates may fail unless proper trust chains are configured with the Bitwarden Login with SSO docker image.|

When you're done with the Service Provider Configuration section, **Save** your work.

### Identity Provider Configuration

Identity Provider Configuration will often require you to refer back to the Azure Portal to retrieve application values:

|Field|Description|
|-----|-----------|
|Entity ID|Enter your **Azure AD Identifier**, retrieved [from the Azure Portal](#set-up-your-application).|
|Binding Type|Set to **HTTP POST** or **Redirect**.|
|Single Sign On Service URL|Enter your **Login URL**, retrieved [from the Azure Portal](#set-up-your-application).|
|Single Log Out Service URL|Login with SSO currently **does not** support SLO. This option is planned for future development, however you may preconfigure it with your **Logout URL** if you wish.|
|Artifact Resolution Service URL|Azure currently does not support Artifact binding, so leave this field blank.|
|X509 Public Certificate|Paste the [downloaded certificate](#saml-signing-certificate), removing `-----BEGIN CERTIFICATE-----` and `-----END CERTIFICATE-----`.<br><br>Extra spaces, carriage returns, and other extraneous characters **will cause certificate validation to fail**.|
|Outbound Signing Algorithm|By default, Azure will sign with RSA SHA-256. Select `rsa-sha256` from the dropdown.|
|Allow Unsolicited Authentication Response|Login with SSO currently **does not** support unsolicited (IdP-initiated) SAML assertions. This option is planned for future development.|
|Disable Outbound Logout Requests|Login with SSO currently **does not** support SLO. This option is planned for future development.|
|Want Authentication Requests Signed|Whether Azure expects SAML requests to be signed.|

When you're done with the Identity Provider Configuration section, **Save** your work.

## Test the Configuration

Once your configuration is complete, test it by navigating to [https://vault.bitwarden.com](https://vault.bitwarden.com){:target="\_blank"} and selecting the **Enterprise Single Sign-On** button:

{% image sso/sso-button-lg.png Enterprise Single Sign-On button %}

Enter the [configured Organization Identifier]({{site.baseurl}}/article/configure-sso-saml/#step-1-enabling-login-with-sso) and select **Log In**. If your implementation is successfully configured, you'll be redirected to the Microsoft login screen:

{% image sso/cheatsheets/saml-azure/az-login.png Azure login screen %}

After you authenticate with your Azure credentials, enter your Bitwarden Master Password to decrypt your Vault!

{% comment %}
{% image sso/cheatsheets/saml-azure/saml-azure.png %}
{% image sso/cheatsheets/saml-azure/saml-azure-bitwarden.png %}
{% endcomment %}
