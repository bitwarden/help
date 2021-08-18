---
layout: article
title: AWS SAML Implementation
categories: []
featured: false
popular: false
hidden: true
tags: [sso, saml, aws]
order:
---

This article contains **AWS-specific** help for configuring Login with SSO via SAML 2.0. For help configuring Login with SSO for another IdP, refer to [SAML 2.0 Configuration]({{site.baseurl}}/article/configure-sso-saml/).

Configuration involves working simultaneously within the Bitwarden [Business Portal]({{site.baseurl}}/article/about-business-portal/) and the AWS Console. As you proceed, we recommend having both readily available and completing steps in the order they're documented.

## Open the Business Portal

If you're coming straight from [SAML 2.0 Configuration]({{site.baseurl}}/article/configure-sso-saml/), you should already have an [Organization ID created](https://bitwarden.com/help/article/configure-sso-saml/#step-1-enabling-login-with-sso) and the SSO Configuration screen open. If you don't, open your
[Business Portal]({{site.baseurl}}/article/about-business-portal/) and navigate to the SSO Configuration screen:

{% image sso/sso-saml1.png SAML 2.0 Configuration %}

You don't need to edit anything on this screen yet, but keep it open for easy reference.

## Create an AWS SSO Application

In the AWS Console, navigate to **AWS SSO**, select **Applications** from the navigation, and select the **Add a new application** button:

{% image sso/cheatsheets/saml-aws/aws-newapp.png Add a new application %}

Underneath the search bar, select the **Add a custom SAML 2.0 application** option:

{% image sso/cheatsheets/saml-aws/aws-newapp2.png Add a custom SAML app %}

### Details

Give the application a unique, Bitwarden-specific **Display name**.

### AWS SSO Metadata

You'll need the information in this section for a later configuration step. Copy the **AWS SSO sign-in URL** and **AWS SSO issuer URL**, and download the **AWS SSO certificate**.

### Application Properties

In the **Application start URL** field, specify the login URL from which users will access Bitwarden. For Cloud-hosted customers, this is always `https://vault.bitwarden.com/#/sso`. For self-hosted instances, this is determined by your [configured server URL]({{site.baseurl}}/article/install-on-premise/#configure-your-domain), for example `https://your.domain/#/sso`.

### Application metadata

In the Application metadata section, select the option to manually enter metadata values:

{% image sso/cheatsheets/saml-aws/aws-metadata.png Enter metadata values %}

Configure the following fields:

|Field|Description|
|-----|-----------|
|Application ACS URL|Set this field to the pre-generated **Assertion Consumer Service (ACS) URL** retreived from the Bitwarden SSO configuration screen.<br><br>For Cloud-hosted customers, this is always `https://sso.bitwarden.com/saml2/your-org-id/Acs`. For self-hosted instances, this is determined by your [configured server URL]({{site.baseurl}}/article/install-on-premise/#configure-your-domain), for example `https://your.domain/sso/your-org-id/Acs`.|
|Application SAML audience|Set this field to the pre-generated **SP Entity ID** retrieved from the Bitwarden SSO Configuration screen.<br><br>For Cloud-hosted customers, this is always `https://sso.bitwarden.com/saml2`. For self-hosted instances, this is determined by your [configured server URL]({{site.baseurl}}/article/install-on-premise/#configure-your-domain), for example `https://your.domain.com/sso/saml2`.|

When you're finished, select **Save changes**.

### Attribute mappings

Navigate to the **Attribute mappings** tab and configure the following mappings:

{% image sso/cheatsheets/saml-aws/aws-attr.png Attribute mappings %}

|User attribute in the application|Maps to this string value or user attribute in AWS SSO|Format|
|---------------------------------|------------------------------------------------------|------|
|Subject|`${user:email}`|emailAddress|
|email|`${user:email}`|emailAddress|

### Assigned users

Navigate to the **Assigned users** tab and select the **Assign users** button:

{% image sso/cheatsheets/saml-aws/aws-assign.png Assign users %}

You can assign users to the application on an individual level, or by Group.

## Back to the Business Portal

At this point, you've configured everything you need within the context of the AWS Console. Jump back over to the Bitwarden Business Portal to complete configuration.

The Business Portal separates configuration into two sections:

- **SAML Service Provider Configuration** will determine the format of SAML requests.
- **SAML Identity Provider Configuration** will determine the format to expect for SAML responses.

### Service Provider Configuration

The Service Provider Configuration should already be complete, however you may choose to edit any of the following fields:

|Field|Description|
|-----|-----------|
|Name ID Format|Set to **Email Address**.|
|Outbound Signing Algorithm|The algorithm Bitwarden will use to sign SAML requests.|
|Signing Behavior|Whether/when SAML requests will be signed.|
|Minimum Incoming Signing Algorithm|By default, AWS SSO will sign with SHA-256. Unless you've changed this, select `sha256` from the dropdown.|
|Want Assertions Signed|Whether Bitwarden expects SAML assertions to be signed.|
|Validate Certificates|Check this box when sing trusted and valid certificates from your IdP through a trusted CA. Self-signed certificates may fail unless proper trust chains are configured within the Bitwarden Login with SSO docker image.|

When you're done with the Service Provider Configuration section, **Save** your work.

### Identity Provider Configuration

Identity Provider Configuration will often require you to refer back to the AWS Console to retrieve application values:

|Field|Description|
|-----|-----------|
|Entity ID|Enter the **AWS SSO issuer URL**, retrieved from the [AWS SSO metadata](#aws-sso-metadata) section in the AWS Console.|
|Binding Type|Set to **HTTP POST** or **Redirect**.|
|Single Sign On Service URL|Enter the **AWS SSO sign-in URL**, retrieved from the [AWS SSO metadata](#aws-sso-metadata) section in the AWS Console.|
|Single Log Out Service URL|Login with SSO currently **does not** support SLO. This option is planned for future development, however you may pre-configure it with the **AWS SSO sign-out URL** retrieved from the [AWS SSO metadata](#aws-sso-metadata) section in the AWS Console.|
|Artifact Resolution Service URL|For AWS implementations, you can leave this field blank.|
|X509 Public Certificate|Paste the [downloaded certificate](#aws-sso-metadata), removing `-----BEGIN CERTIFICATE-----` and `-----END CERTIFICATE-----`.<br><br>Extra spaces, carriage returns, and other extraneous characters **will cause certificate validation to fail**.|
|Outbound Signing Algorithm|By default, AWS SSO will sign with `sha256`.  Unless you've changed this, select `sha256` from the dropdown.|
|Allow Unsolicited Authentication Response|Login with SSO currently **does not** unsolicited (IdP-initiated) SAML assertions. This option is planned for future development.|
|Disable Outbound Logout Requests|Login with SSO currently **does not** support SLO. This option is planned for future development.|
|Want Authentication Requests Signed|Whether AWS SSO expects SAML requests to be signed.|

When you're done with the Identity Provider Configuration section, **Save** your work.

## Test the Configuration

Once your configuration is complete, test it by navigating to [https://vault.bitwarden.com](https://vault.bitwarden.com){:target="\_blank"} and selecting the **Enterprise Single Sign-On** button:

{% image sso/sso-button-lg.png Enterprise Single Sign-On button %}

Enter the [configured Organiztion Identifier]({{site.baseurl}}/article/configure-sso-saml/#step-1-enabling-login-with-sso) and select **Log In**. If your implementation is successfully configured, you'll be redirected to the AWS SSO login screen:

{% image sso/cheatsheets/saml-aws/aws-login.png AWS login screen %}

After you authenticate with your Auth0 credentials, enter your Bitwarden Master Password to decrypt your Vault!

{% comment %}
{% image sso/cheatsheets/saml-aws/saml-aws1.png %}
{% image sso/cheatsheets/saml-aws/saml-aws2.png %}
{% image sso/cheatsheets/saml-aws/saml-aws3.png %}
{% endcomment %}
