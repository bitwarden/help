---
layout: article
title: ADFS SAML Implementation
categories: [login-with-sso]
featured: false
popular: false
hidden: true
tags: [sso, saml, adfs]
order:
---
This article contains **Active Directory Federation Services (AD FS)-specific** help for configuring Login with SSO via SAML 2.0. For help configuring Login with SSO for another IdP, refer to [SAML 2.0 Configuration]({{site.baseurl}}/article/configure-sso-saml/).

Configuration involves working simultaneously within the Bitwarden [Business Portal]({{site.baseurl}}/article/about-business-portal/) and the AD FS Server Manager. As you proceed, we recommend having both readily available and completing steps in the order they're documented.

## Open the Business Portal

If you're coming straight from [SAML 2.0 Configuration]({{site.baseurl}}/article/configure-sso-saml/), you should already have an [Organization ID created]({{site.baseurl}}/article/configure-sso-saml/#step-1-enabling-login-with-sso) and the SSO Configuration screen open. If you don't, refer to that article to create an Organization ID and open your Business Portal to the SSO Configuration section:

{% image sso/sso-saml1.png SAML 2.0 Configuration %}

You don't need to edit anything on this screen yet, but keep it open for easy reference.

## Create a Relying Party Trust

In the AD FS Server Manager, select **Tools** &rarr; **AD FS Management** &rarr; **Action** &rarr; **Add Relying Party Trust**. In the Wizard, make the following selections:

1. On the Welcome screen, select **Claims Aware**.
2. On the Select Data Source screen, select **Enter data about the relying party manually**.
3. On the Specify Display Name screen, enter a Bitwarden-specific display name.
4. On the Configure URL screen, select **Enable support for SAML 2.0 WebSSO protocol**.

   - In the **Relying party SAML 2.0 SSO service URL** input, enter the Assertion Consumer Service (ACS) URL retrieved from the Bitwarden SSO Configuration screen.

     For Cloud-hosted customers, this is always `https://sso.bitwarden.com/saml2/your-org-id/Acs`. For self-hosted instances, this is determined by your [configured Server URL]({{site.baseurl}}/article/install-on-premise/#configure-your-domain), for example `https://your.domain.com/sso/saml2/your-org-id/Acs`.
  6. On the **Choose Access Control Policy** screen, select the
5. On the **Configure Identifiers** screen, add the SP Entity ID (retrieved from the Bitwarden SSO Configuration screen) as a relying party trust identifier.

   For Cloud-hosted customers, this is always `https://sso.bitwarden.com/saml2`. For self-hosted instances, this is determined by your [configured Server URL]({{site.baseurl}}/article/install-on-premise/#configure-your-domain), for example `https://your.domain.com/sso/saml2`.
6. On the **Choose Access Control Policy** screen, select the desired policy (by default, **Permit Everyone**).
7. On the **Ready to Add Trust** screen, review your selections.

### Advanced Options

Once the Relying Party Trust is created, you can further configure its settings by selecting **Relying Party Trusts** from the left-hand file navigator and selecting the correct display name.

#### Hash Algorithm

To change the **Secure hash algorithm** (by default, SHA-256), navigate to the **Advanced** tab:

{% image sso/cheatsheets/saml-adfs/saml-adfs3.png Set a Secure Hash Algorithm %}

#### Endpoint Binding

To change the endpoint **Binding** (by default, POST), navigate to the **Endpoints** tab and select the configured ACS URL:

{% image sso/cheatsheets/saml-adfs/saml-adfs4.png %}

### Edit Claim Issuance Rules

Construct Claim Issuance Rules to ensure that the appropriate claims, including Name ID, are passed to Bitwarden. The following tabs illustrate a sample ruleset:

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="1tab" data-target="#givenname" role="tab" aria-controls="givenname" aria-selected="true">Rule 1</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="2tab" data-target="#surname" role="tab" aria-controls="surname" aria-selected="false">Rule 2</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="3tab" data-target="#email" role="tab" aria-controls="email" aria-selected="false">Rule 3</a>
  </li>
</ul>
<div class="tab-content" id="clientsContent">
  <div class="tab-pane show active" id="givenname" role="tabpanel" aria-labelledby="1tab">
{% capture givenname %}
### Rule 1

{% image sso/cheatsheets/saml-adfs/saml-adfs5.png %}

{% endcapture %}
{{ givenname | markdownify}}
  </div>
  <div class="tab-pane" id="surname" role="tabpanel" aria-labelledby="2tab">
{% capture surname %}
### Rule 2

{% image sso/cheatsheets/saml-adfs/saml-adfs6.png %}

{% endcapture %}
{{ surname | markdownify}}
  </div>
  <div class="tab-pane" id="email" role="tabpanel" aria-labelledby="3tab">
{% capture email %}
### Rule 3

{% image sso/cheatsheets/saml-adfs/saml-adfs7.png %}

{% endcapture %}
{{ email | markdownify}}
  </div>
</div>

### Get Certificate

In the left-hand file navigator, select **AD FS** &rarr; **Service** &rarr; **Certificates** to open the list of certificates. Select the **Token-signing** certificate, navigate to its **Details** tab, and select the **Copy to File...** button to export the Base-64 encoded token signing certificate:

{% image sso/cheatsheets/saml-adfs/saml-adfs8.png Get token-signing Certificate %}

You will need this certificate [during a later step](#identity-provider-configuration).

### Get Federation Service Identifier

In the left-hand file navigator, select **AD FS** and from the right-hand options menu select **Edit Federation Service Properties**. In the Federation Service Properties window, copy the **Federation Service Identifier**:

{% image sso/cheatsheets/saml-adfs/saml-adfs9.png Get Federation Service Identifier %}

You will need this identifier [during a later step](#identity-provider-configuration).

## Back to the Business Portal

At this point, you've configured everything you need within the context of the AD FS Server Manager. Jump back over to the Bitwarden Business Portal to complete configuration.

The Business Portal separates configuration into two sections:

- **SAML Service Provider Configuration** will determine the format of SAML requests.
- **SAML Identity Provider Configuration** will determine the format to expect for SAML responses.

### Service Provider Configuration

In the Service Provider Configuration section, configure the following fields:

|Field|Description|
|-----|-----------|
|Name ID Format|Select the **Outgoing Name ID Format** selected when constructing [Claims Issuance Rules](#edit-claim-issuance-rules) (see **Rule 3**).|
|Outbound Signing Algorithm|The algorithm Bitwarden will use to sign SAML requests.|
|Signing Behavior|Whether/when SAML requests will be signed.|
|Minimum Incoming Signing Algorithm|By default, AD FS will sign with SHA-256. Select **SHA-256** from the dropdown unless you've [configured AD FS to use different algorithm](#hash-algorithm).|
|Want Assertions Signed|Whether Bitwarden expects SAML assertions to be signed.|
|Validate Certificates|Check this box when using trusted and valid certificates from your IdP through a trusted CA. Self-signed certificates may fail unless proper trust chains are configured within the Bitwarden Login with SSO docker image.|

When you're done with the Service Provider Configuration section, **Save** your work.

### Identity Provider Configuration

Identity Provider Configuration will often require you to refer back to the AD FS Server Manager to retrieve values:

|Field|Description|
|-----|-----------|
|Entity ID|Enter the retrieved [Federation Service Identifier](#get-federation-service-identifier). Please note, this **may not use HTTPS**.|
|Binding Type|By default, AD FS with use HTTP POST endpoint binding. Select **HTTP POST** unless you've [configured AD FS to use a different method](#endpoint-binding).|
|Single Sign On Service URL|Enter the URL which users will use to login to AD FS.|
|Artifact Resolution Service URL|Only use this field if you have selected **Artifact** as the [endpoint binding method](#endpoint-binding) of your Relying Party Trust.|
|X509 Public Certificate|Paste the downloaded certificate, removing `-----BEGIN CERTIFICATE-----` and `-----END CERTIFICATE-----`.<br><br>Extra spaces, carriage returns, and other extraneous characters **will cause certification to fail**.|
|Outbound Signing Algorithm|By default, AD FS will sign with SHA-256. Select **SHA-256** from the dropdown unless you've [configured AD FS to use different algorithm](#hash-algorithm).|
|Allow Unsolicited Authentication Response|Login with SSO currently **does not** support unsolicited (IdP-initiated) SAML assertions. This option is planned for future development.|
|Disable Outbound Logout Requests|Login with SSO currently **does not** support SLO. This option is planned for future development.|
|Want Authentication Requests Signed|Whether AD FS expects SAML requests to be signed.|

When you're done with the Identity Provider Configuration section, **Save** your work.

## Test the Configuration

Once your configuration is complete, test it by navigating to [https://vault.bitwarden.com](https://vault.bitwarden.com){:target="\_blank"} and selecting the **Enterprise Single-On** button:

{% image sso/sso-button-lg.png Enterprise Single Sign-On button %}

Enter the [configured Organization Identifier]({{site.baseurl}}/article/configure-sso-saml/#step-1-set-an-organization-identifier) and select **Log In**. If your implementation is successfully configured, you'll be redirected to the AD FS SSO login screen. After you authenticate with your AD FS credentials, enter your Bitwarden Master Password to decrypt your Vault!

{% comment %}
{% image sso/cheatsheets/saml-adfs/saml-adfs2.png %}

{% image sso/cheatsheets/saml-adfs/saml-adfs1.png %}
{% endcomment %}
