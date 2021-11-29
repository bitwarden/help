---
layout: article
title: Using Login with SSO
categories: [login-with-sso]
featured: false
popular: false
tags: [sso]
order: "07"
redirect_from:
  - /article/link-to-sso/
  - /article/sso-access-your-vault/
description: "This article explains how to get started using Login with SSO as a Bitwarden password manager end-user."
---

As an end-user of Bitwarden, you will need to have your [Organization identifier](#get-your-organization-identifier) before you can [login using SSO](#login-using-sso):

{% callout success %}
Depending on how your Organization is set up, you may also need to [link your account to SSO](#link-your-account). This is typically required if you **already have a Bitwarden account that's a member of an Organization** or if **your Organization does not require you to use SSO**.
{% endcallout %}

## Get your Organization Identifier

Every Bitwarden Organization has a unique identifier specifically for Login with SSO. You'll need this value to login, so ask your manager or Bitwarden administrator to [retrieve it for you]({{site.baseurl}}/article/configure-sso-saml/#step-1-set-an-organization-identifier).

## Login using SSO

The steps required to login using SSO will be slightly different depending on whether your Organization is using [Key Connector]({{site.baseurl}}/article/about-key-connector/) or not. Don't worry, you don't personally need to know whether   

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" id="tab" role="presentation">
    <a class="nav-link active" id="certtab" data-bs-toggle="tab" data-target="#cert" role="tab" aria-controls="cert" aria-selected="true">Login with SSO & Master Password</a>
  </li>
  <li class="nav-item" id="tab" role="presentation">
    <a class="nav-link" id="azuretab" data-bs-toggle="tab" data-target="#azure" role="tab" aria-controls="azure" aria-selected="false">Login with SSO & Key Connector</a>
  </li>
</ul>

<div class="tab-content" id="clientsContent">
  <div class="tab-pane show active" id="cert" role="tabpanel" aria-labelledby="certtab">
{% capture cert_content %}
### Login with SSO & Master Password

To login using SSO and your Master Password:

1. Open your Bitwarden Web Vault and select the **Enterprise Single Sign-On** button:

   {% image sso/sso-button-lg.png Enterprise Single Sign-On button %}
2. Enter your **Organization Identifier** and select **Log In**:

   {% image sso/org-id-input.png Organization Identifier field %}

   {% callout success %}We recommend bookmarking this page with your Organization Identifier included as a query string so that you don't have to enter it each time, for example `https://vault.bitwarden.com/#/sso?identifier=YOUR-ORG-ID` or `https://your.domain.com/#/sso?identifier=YOUR-ORG-ID`. {% endcallout %}
3. Now that you've authenticated your identity using SSO, you'll be prompted to either **create** a [Master Password]({{site.baseurl}}/article/master-password/) for your new account or, if you already have a Bitwarden account, to enter your Master Password to decrypt your Vault.

{% callout info %}
**Why is my Master Password still required?**

All Vault data, including credentials [shared by your Organization]({{site.baseurl}}/article/sharing/), is kept by Bitwarden **only** in its encrypted form. This means that in order to use any of those credentials, **you** need a way to decrypt that data. We can't.

Your Master Password is the source of that decryption key. Even though you're authenticating (proving your identity) to Bitwarden using SSO, you still need to use a decryption key (your Master Password) to unscramble Vault data.
{% endcallout %}

{% endcapture %}
{{ cert_content | markdownify }}
  </div>
  <div class="tab-pane" id="azure" role="tabpanel" aria-labelledby="azuretab">
{% capture key_content %}
### Login with SSO & Key Connector

To login using SSO and Key Connector:

1. Open your Bitwarden Web Vault and select the **Enterprise Single Sign-On**:

   {% image sso/sso-button-lg.png Enterprise Single Sign-On button %}
2. Enter your **Organization Identifier** and select **Log In**:

   {% image sso/org-id-input.png Organization Identifier field %}

   {% callout success %}We recommend bookmarking this page with your Organization Identifier includes as a query string so that you don't have to enter it each time, for example `https://vault.bitwarden.com/#/sso?identifier=YOUR-ORG-ID` or `https://your.domain.com/#/sso?identifier=YOUR-ORG-UD`.{% endcallout %}
3. Depending on your account status, you might be required to enter or create a Master Password the first time you login with SSO and Key Connector. If you do, the following dialog should prompt you to remove your Master Password:

   {% image sso/keyconnector/remove-mpw.png Remove Master Password %}

   {% callout success %}We encourage you to read [this]({{site.baseurl}}/article/about-key-connector/#impact-on-master-passwords) and [this]({{site.baseurl}}/article/about-key-connector/#impact-on-organization-membership) to fully understand what it means to remove a Master Password from your account. You can instead elect to **Leave the Organization** instead, however this will remove access to both Organization-owned Vault items and Collections and to Single Sign-On.{% endcallout %}

Once you're removed your Master Password, or if this isn't your first time logging in using SSO and Key Connector, you'll be logged in to your Vault with no further steps required!


{% endcapture %}
{{ key_content | markdownify }}
  </div>
</div>


## Link your Account

You should only need to link your account to SSO if you already have a Bitwarden account that's a member of the Organization or if your Organization does not require you to use SSO:

1. Open the Web Vault, navigate to your **Settings** tab and open your **Organizations**.
2. Hover over the desired Organization and select the {% icon fa-cog %} gear dropdown:

   {%image /sso/sso-link-button-overlay.png Link SSO Dropdown Option %}

3. From the dropdown menu, select {% icon fa-link %} **Link SSO**.

Once linked, you should be able to [login using SSO](#login-using-sso) as documented above.
