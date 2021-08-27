---
layout: article
title: Keycloak SAML Implementation
categories: [login-with-sso]
featured: false
popular: false
hidden: true
tags: [sso, saml, keyclock]
order:
---
This article contains **Keycloak-specific** help for configuring Login with SSO via SAML 2.0. For help configuring Login with SSO for another IdP, refer to [SAML 2.0 Configuration]({{site.baseurl}}/article/configure-sso-saml/).

Configuration involves working simultaneously with the Bitwarden [Business Portal]({{site.baseurl}}/article/about-business-portal) and the Keycloak Portal. As you proceed, we recommend having both readily available and completing steps in the order they're documented.


## Open the Business Portal

If you're coming straight from [SAML 2.0 Configuration]({{site.baseurl}}/article/configure-sso-saml/), you should already have an [Organization ID created](https://bitwarden.com/help/article/configure-sso-saml/#step-1-enabling-login-with-sso) and the SSO Configuration screen open. If you don't, open your
[Business Portal]({{site.baseurl}}/article/about-business-portal/) and navigate to the SSO Configuration screen:

{% image sso/sso-saml1.png SAML 2.0 Configuration %}

You don't need to edit anything on this screen yet, but keep it open for easy reference.

## Create a Client

In the Keycloak portal, create a new Client:

{% image sso/cheatsheets/saml-keycloak/keycloak-createclient.png Create a Client %}

On the **Add Client** screen, configure the following settings:

|Field|Description|
|-----|-----------|
|Client ID|Set this field to the pre-generated **SP Entity ID** retrieved from the Bitwarden SSO Configuration screen.<br><br>For Cloud-hosted customers, this is always `https://sso.bitwarden.com/saml2`. For self-hosted instances, this is determined by your [configured server URL]({{site.baseurl}}/article/install-on-premise/#configure-your-domain), for example `https://your.domain.com/sso/saml2`.|
|Client Protocol|Select `saml`.|
|Client SAML Endpoint|Enter your master SAML processing URL, for example `https://<keycloak_domain>/auth/realms/master/protocol/saml`.|

When you're finished, select the **Save** button.

### Settings

On the **Settings** tab, configure the following options:

|Field|Description|
|-----|-----------|
|Name|Give the client a unique, Bitwarden-specific name.|
|Enabled|Toggle to **On**.|
|Sign Documents|Specify whether SAML documents should be signed by the Keycloak realm.|
|Sign Assertions|Specify whether SAML assertions should be signed by the Keycloak realm.|
|Signature Algorithm|If **Sign Assertions** is enabled, select what algorithm to sign with (`sha-256` by default).|
|Name ID Format|Select the Name ID Format for Keycloak to use in SAML responses.|
|Valid Redirect URLs|Set this field to the pre-generated Assertion Consumer Service (ACS) URL retreived from the Bitwarden SSO configuration screen.<br><br>For Cloud-hosted customers, this is always `https://sso.bitwarden.com/saml2/your-org-id/Acs`. For self-hosted instances, this is determined by your configured server URL, for example `https://your.domain/sso/your-org-id/Acs`.|
|Base URL|Set this field to the login URL from which users will access Bitwarden.<br><br>For Cloud-hosted customers, this is always `https://vault.bitwarden.com/#/sso`. For self-hosted instances, this is determined by you [configured server URL]({{site.baseurl}}/article/install-on-premise/#configure-your-domain), for example `https://your-domain.com/#/sso`.|
|Master SAML Processing URL|If not automatically filled in, set this field to your master SAML processing URL, for example `https://<keycloak_domain>/auth/realms/master/protocol/saml`.|

#### Fine Grain SAML Endpoint Configuration

In the **Fine Grain SAML Endpoint Configuration** section, configure either the **Assertion Consumer Service POST Binding URL** or **Assertion Consumer Service Redirect Binding URL**. You will choose in a later step whether to use HTTP POST or Redirect, so configure whichever you'd like to use:

{% image sso/cheatsheets/saml-keycloak/keycloak-samlendpoint.png Configure SAML Endpoint %}

For either field, set it to the pre-generated Assertion Consumer Service (ACS) URL retreived from the Bitwarden SSO configuration screen. For Cloud-hosted customers, this is always `https://sso.bitwarden.com/saml2/your-org-id/Acs`. For self-hosted instances, this is determined by your configured server URL, for example `https://your.domain/sso/your-org-id/Acs`.

### Mappers

Select the **Mappers** tab and create all of the following Mappers:


<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="1tab" data-target="#givenname" role="tab" aria-controls="givenname" aria-selected="true">X500 givenName</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="2tab" data-target="#surname" role="tab" aria-controls="surname" aria-selected="false">X500 surname</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="3tab" data-target="#email" role="tab" aria-controls="email" aria-selected="false">X500 email</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="4tab" data-target="#groups" role="tab" aria-controls="groups" aria-selected="false">groups</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="5tab" data-target="#roles" role="tab" aria-controls="roles" aria-selected="false">role list</a>
  </li>
</ul>
<div class="tab-content" id="clientsContent">
  <div class="tab-pane show active" id="givenname" role="tabpanel" aria-labelledby="1tab">
{% capture givenname %}
### X500 givenName

{% image sso/cheatsheets/saml-keycloak/x500-givenname.png %}

{% endcapture %}
{{ givenname | markdownify}}
  </div>
  <div class="tab-pane" id="surname" role="tabpanel" aria-labelledby="2tab">
{% capture surname %}
### X500 surname

{% image sso/cheatsheets/saml-keycloak/x500-surname.png %}

{% endcapture %}
{{ surname | markdownify}}
  </div>
  <div class="tab-pane" id="email" role="tabpanel" aria-labelledby="3tab">
{% capture email %}
### X500 email

{% image sso/cheatsheets/saml-keycloak/x500-email.png %}

{% endcapture %}
{{ email | markdownify}}
  </div>
  <div class="tab-pane" id="groups" role="tabpanel" aria-labelledby="4tab">
{% capture groups %}
### groups

{% image sso/cheatsheets/saml-keycloak/groups.png %}

{% endcapture %}
{{ groups | markdownify}}
  </div>
  <div class="tab-pane" id="roles" role="tabpanel" aria-labelledby="5tab">
{% capture roles %}
### role list

{% image sso/cheatsheets/saml-keycloak/rolelist.png %}

{% endcapture %}
{{ roles | markdownify}}
  </div>
</div>

### Download your Certificate

From the navigation, select **Realm Settings** &rarr; **Keys** and get your certificate:

{% image sso/cheatsheets/saml-keycloak/keycloak-getcert.png Get Keycloak Certificate %}

Copy the certificate for use in a [later step](#identity-provider-configuration).

## Back to the Business Portal

At this point, you've configured everything you need within the context of the Keycloak Portal. Jump back over to the Bitwarden Business Portal to complete configuration.

The Business Portal separates configuration into two sections:

- **SAML Service Provider Configuration** will determine the format of SAML requests.
- **SAML Identity Provider Configuration** will determine the format to expect for SAML responses.

### Service Provider Configuration

Configure the following fields:

|Field|Description|
|-----|-----------|
|Name ID Format|Select the Name ID Format you chose when [configuring the Keycloak client](#settings).|
|Outbound Signing Algorithm|The algorithm Bitwarden will use to sign SAML requests.|
|Signing Behavior|Whether/when SAML requests will be signed.|
|Minimum Incoming Signing Algorithm|Select the algorithm the Keycloak client is [configured to use](#settings) to sign SAML documents or assertions.|
|Want Assertions Signed|Whether Bitwarden expects SAML assertions to be signed. If toggled on, make sure you configure the Keycloak client to [sign assertions](#settings).|
|Validate Certificates|Check this box when using trusted and valid certificates from your IdP through a trusted CA. Self-signed certificates may fail unless proper trust chains are configured with the Bitwarden Login with SSO docker image.|

When you're done with the Service Provider Configuration section, **Save** your work.

### Identity Provider Configuration

Identity Provider Configuration will often require you to refer back to the Keycloak Portal to retrieve client values:

|Field|Description|
|-----|-----------|
|Entity ID|Enter the URL of the Keycloak realm on which the client was created, for example `https://<keycloak_domain>/auth/realms/master`.|
|Binding Type|Select **HTTP POST** or **Redirect**.|
|Single Sign On Service URL|Enter your master SAML processing URL, for example `https://<keycloak_domain>/auth/realms/master/protocol/saml`.|
|Single Log Out Service URL|Login with SSO currently **does not** support SLO. This option is planned for future development, however you may preconfigure it with your **Logout URL** if you wish.|
|Artifact Resolution Service URL|Leave this field blank, Keycloak SAML supports only HTTP POST and Redirect.|
|X509 Public Certificate|Paste the [downloaded certificate](#download-your-certificate), removing `-----BEGIN CERTIFICATE-----` and `-----END CERTIFICATE-----`.<br><br>Extra spaces, carriage returns, and other extraneous characters **will cause certificate validation to fail**.|
|Outbound Signing Algorithm|Select the algorithm the Keycloak client is [configured to use](#settings) to sign SAML documents or assertions.|
|Allow Unsolicited Authentication Response|Login with SSO currently **does not** support unsolicited (IdP-initiated) SAML assertions. This option is planned for future development.|
|Disable Outbound Logout Requests|Login with SSO currently **does not** support SLO. This option is planned for future development.|
|Want Authentication Requests Signed|Whether Keycloak expects SAML requests to be signed.|

When you're done with the Identity Provider Configuration section, **Save** your work.

## Test the Configuration

Once your configuration is complete, test it by navigating to [https://vault.bitwarden.com](https://vault.bitwarden.com){:target="\_blank"} and selecting the **Enterprise Single Sign-On** button:

{% image sso/sso-button-lg.png Enterprise Single Sign-On button %}

Enter the [configured Organization Identifier]({{site.baseurl}}/article/configure-sso-saml/#step-1-enabling-login-with-sso) and select **Log In**. If your implementation is successfully configured, you'll be redirected to the Keycloak login screen:

{% image sso/cheatsheets/saml-keycloak/keycloak-login.png Keycloak Login Screen %}

After you authenticate with your Keycloak credentials, enter your Bitwarden Master Password to decrypt your Vault!

{% comment %}

{% image sso/cheatsheets/saml-keycloak/saml-keycloak2.jpg %}

{% image sso/cheatsheets/saml-keycloak/saml-keycloak1.jpg %}

{% image sso/cheatsheets/saml-keycloak/saml-keycloak-bitwarden.jpg %}
{% endcomment %}
