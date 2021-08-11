---
layout: article
title: Auth0 SAML Configuration
categories: [login-with-sso]
featured: false
popular: false
hidden: true
tags: [sso, saml, auth0]
order:
---
This article contains **Auth0-specific** help for configuring Login with SSO via SAML 2.0. For help configuring Login with SSO for another IdP, refer to [SAML 2.0 Configuration]({{site.baseurl}}/article/configure-sso-saml/).

Configuration involves working simultaneously within the Bitwarden [Business Portal]({{site.baseurl}}/article/about-business-portal/) and the Auth0 Portal. As you proceed, we recommend having both readily available and completing steps in the order they're documented.

## Open the Business Portal

If you're coming straight from [SAML 2.0 Configuration]({{site.baseurl}}/article/sso-configure-saml/), you should already have an [Organization ID created](https://bitwarden.com/help/article/configure-sso-saml/#step-1-enabling-login-with-sso) and the SSO Configuration screen open. If you don't, open your [Business Portal]({{site.baseurl}}/article/about-business-portal/) and navigate to the SSO Configuration screen:

{% image sso/sso-saml1.png SAML 2.0 Configuration %}

You don't need to edit anything on this screen yet, but keep it open for easy reference.

## Create an Auth0 Application

In the Auth0 Portal, use the Applications menu to create a **Regular Web Application**:

{% image sso/cheatsheets/saml-auth0/auth0-createapp.png Auth0 Create Application %}

Click the **Settings** tab and configure the following information, some of which you'll need to retrieve from the Bitwarden Business Portal:

|Auth0 Setting|Description|
|-------------|-----------|
|Name|Give the application a Bitwarden-specific name.|
|Application Type|Select **Regular Web Application**.|
|Token Endpoint Authentication Method|Select **Post** (HTTP Post), which will map to a **Binding Type** attribute you will [configure later](#identity-provider-configuration).|
|Application Login URI|Set this field to the pre-generated **SP Entity ID** retrieved from the Bitwarden SSO Configuration screen.<br><br>For Cloud-hosted customers, this is always `https://sso.bitwarden.com/saml2`. For self-hosted instances, this is determined by your [configured server URL]({{site.baseurl}}/article/install-on-premise/#configure-your-domain), for example `https://your.domain.com/sso/saml2`.|
|Allowed Callback URLS|Set this field to the pre-generated **Assertion Consumer Service (ACS) URL** retrieved from the Bitwarden SSO Configuration screen.<br><br>For Cloud-hosted customers, this is always `https://sso.bitwarden.com/saml2/your-org-id/Acs`. For self-hosted instances, this is determined by your [configured server URL]({{site.baseurl}}/article/install-on-premise/#configure-your-domain), for example `https://your.domain.com/sso/saml2/your-org-id/Acs`.|

#### Grant Types

In the **Advanced Settings** &rarr; **Grant Types** section, ensure that the following Grant Types are selected (they may be pre-selected):

{% image sso/cheatsheets/saml-auth0/auth0-advancedsettings.png Application Grant Types %}

#### Certificates

In the **Advanced Settings** &rarr; **Certificates** section, copy or download up your Signing Certificate. You won't need to do anything with it just yet, but you'll need to [reference it later](#identity-provider-configuration).

{% image sso/cheatsheets/saml-auth0/auth0-certificate.png Auth0 Certificate %}

#### Endpoints

You don't need to edit anything in the **Advanced Settings** &rarr; **Endpoints** section, but you'll need the SAML Endpoints to [reference later](#identity-provider-configuration).

{% callout success %}
In smaller windows, the **Endpoints** tab can disappear behind the edge of the browser. If you're having trouble finding it, click the **Certificates** tab and hit the Right Arrow key (&rarr;).
{% endcallout %}

{% image sso/cheatsheets/saml-auth0/auth0-endpoints.png Auth0 Endpoints %}

## Configure Auth0 Rules

Create rules to customize the SAML response behavior of your application. While Auth0 provides [a number of options](https://auth0.com/docs/protocols/saml-protocol/customize-saml-assertions#saml-assertion-attributes){:target="\_blank"}, this section will focus on only those that map to specifically to Bitwarden options. To create a Custom SAML Configuration ruleset, use the **Auth Pipeline** &rarr; **Rules** menu to {% icon fa-plus %} **Create** Rules:

{% image sso/cheatsheets/saml-auth0/auth0-settings.png Auth0 Rules %}

You may configure any of the following:

|Key|Description|
|---|-----------|
|`signatureAlgorithm`|Algorithm Auth0 will use to sign the SAML assertion or response. By default, `rsa-sha1`, however you can set this value to `rsa-sha256`.<br><br>If you change this value, you must:<br>-Set `digestAlgorithm` to `sha256`.<br>-Set (in Bitwarden) the **Minimum Incoming Signing Algorithm** to `rsa-sha256`.|
|`digestAlgorithm`|Algorithm used to calculate digest of SAML assertion or response. By default, `sha-1`. If you change `signatureAlgorithm`, you should also set this value to `sha256`.|
|`signResponse`|By default, Auth0 will sign only the SAML assertion. Set this to `true` to sign the SAML response instead of the assertion.|
|`nameIdentifierFormat`|By default, `urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified`. You can set this value to [any SAML NameID format](https://docs.oracle.com/cd/E19316-01/820-3886/ggwbz/index.html){:target="\_blank"}. If you do, change the SP **Name ID Format** field to the corresponding option (see [here](#service-provider-configuration)).|

Implement these rules using a **Script** like the one below. For help, refer to [Auth0's Documentation](https://auth0.com/docs/protocols/saml-protocol/customize-saml-assertions#customize-saml-assertions-with-rules){:target="\_blank"}.

```
function (user, context, callback) {
    context.samlConfiguration.signatureAlgorithm = "rsa-sha256";
    context.samlConfiguration.digestAlgorithm = "sha256";
    context.samlConfiguration.signResponse = "true";
    context.samlConfiguration.nameIdentifierFormat = "urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress"
    context.samlConfiguration.binding = "urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect";
    callback(null, user, context);
}
```

## Back to the Business Portal

At this point, you've configured everything you need within the context of the Auth0 Portal. Jump back over to the Bitwarden Business Portal to complete configuration.

The Business Portal separates configuration into two sections:

- **SAML Service Provider Configuration** will determine the format of SAML requests.
- **SAML Identity Provider Configuration** will determine the format to expect for SAML responses.

### Service Provider Configuration

Unless you've configured [custom rules](#configure-auth0-rules), your Service Provider Configuration will already be complete. If you configured custom rules or want to make further changes to your implementation, edit the relevant fields:

|Field|Description|
|-----|-----------|
|Name ID Format|[NameID Format](https://docs.oracle.com/cd/E19316-01/820-3886/ggvxx/index.html){:target="\_blank"} to specify in the SAML request (`NameIDPolicy`). To omit, set to **Not Configured**.|
|Outbound Signing Algorithm|Algorithm used to sign SAML requests, by default `rsa-sha256`.|
|Signing Behavior|Whether/when Bitwarden SAML requests will be signed. By default, Auth0 will not require requests to be signed.|
|Minimum Incoming Signing Algorithm|The minimum signing algorithm Bitwarden will accept in SAML responses. By default, Auth0 will sign with `rsa-sha1`, so choose that option from the dropdown unless you've configured a [custom signing rule](#configure-auth0-rules).|
|Want Assertions Signed|Whether Bitwarden wants SAML assertions signed. By default, Auth0 will sign SAML assertions, so check this box unless you've configured a [custom signing rule](#configure-auth0-rules).|
|Validate Certificates|Check this box when using trusted and valid certificates from your IdP through a trusted CA. Self-signed certificates may fail unless proper trust chains are configured within the Bitwarden Login with SSO docker image.|

When you're done with the Service Provider Configuration section, **Save** your work.

### Identity Provider Configuration

Identity Provider Configuration will often require you to refer back to the Auth0 Portal to retrieve application values:

|Field|Description|
|-----|-----------|
|Entity ID|Enter the **Domain** value of your Auth0 application, prefixed by `urn:`, for example `urn:bw-help.us.auth0.com`.|
|Binding Type|Select **HTTP POST** to match the [Token Endpoint Authentication Method](#create-an-auth0-application) value specified in your Auth0 application.|
|Single Sign On Service URL|Enter the **SAML Protocol URL** (see [Endpoints](#endpoints)) of your Auth0 application. For example, `https://bw-help.us.auth0.com/samlp/HcpxD63h7Qzl420u8qachPWoZEG0Hho2`.|
|Single Log Out Service URL|Login with SSO currently **does not** support SLO. This option is planned for future development, however you may pre-configure it if you wish.|
|Artifact Resolution Service URL|Enter the **SAML Metadata URL** (see [Endpoints](#endpoints)) of your Auth0 application. For example, `https://bw-help.us.auth0.com/samlp/metadata/HcpxD63h7Qzl420u8qachPWoZEG0Hho2`.|
|X509 Public Certificate|Paste the retrieved [Signing Certificate](#certificates), removing `-----BEGIN CERTIFICATE-----` and `-----END CERTIFICATE-----`.<br><br>Extra spaces, carriage returns, and other extraneous characters **will cause certifiation validation to fail**.|
|Outbound Signing Algorithm|By default, Auth0 will sign with `RSA-SHA1`, so choose that option from the dropdown unless you've configured a [custom signing rule](#configure-auth0-rules).|
|Allow Unsolicited Authentication Response|Login with SSO currently **does not** support unsolicited (IdP-Initiated) SAML assertions. This option is planned for future development.|
|Disable Outbound Logout Requests|Login with SSO currently **does not** support SLO. This option is planned for future development.|
|Want Authentication Requests Signed|Whether Auth0 expects SAML requests to be signed.|

When you're done with the Identity Provider Configuration section, **Save** your work.

## Test the Configuration

Once your configuration is complete, test it by navigating to [https://vault.bitwarden.com](https://vault.bitwarden.com) and selecting the **Enterprise Single Sign-On** button:

{% image sso/sso-button-lg.png Enterprise Single Sign-On button %}

Enter the [configured Organization Identifier](#) and select **Log In**. If your implementation is successfully configured, you'll be redirected to the Auth0 login screen:

{% image sso/cheatsheets/saml-auth0/auth0-login.png Auth0 Login %}

After you authenticate with your Auth0 credentials, enter your Bitwarden Master Password to decrypt your Vault!


{% comment %}
{% image sso/cheatsheets/saml-auth0/saml-auth01.png %}

{% image sso/cheatsheets/saml-auth0/saml-auth02.png %}
{% endcomment %}
