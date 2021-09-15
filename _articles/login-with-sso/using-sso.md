---
layout: article
title: Using Login with SSO
categories: [login-with-sso]
featured: false
popular: false
tags: [sso]
order: 04
redirect_from:
  - /article/link-to-sso/
  - /article/sso-access-your-vault/
---

As an end-user of Bitwarden, you will need to [link your account to SSO](#link-your-account-to-sso) and get your [Organization identifier](#get-your-organization-identifier) before you can [login using SSO](#login-using-sso):

## Link your Account

To link your account:

1. Open the Web Vault, navigate to your **Settings** tab and open your **Organizations**.
2. Hover over the desired Organization and select the {% icon fa-cog %} gear dropdown:

   {%image /sso/sso-link-button-overlay.png Link SSO Dropdown Option %}

3. From the dropdown menu, select {% icon fa-link %} **Link SSO**.

## Get your Organization Identifier

Every Bitwarden Organization has a unique identifier specifically for Login with SSO. You'll need this value to login, so ask your manager or Bitwarden administrator to [retrieve it for you]({{site.baseurl}}/article/configure-sso-saml/#step-1-set-an-organization-identifier).

## Login using SSO

To login to Bitwarden using SSO:

1. Open your Bitwarden Web Vault or App and select the **Enterprise Single Sign-On** button:

   {% image sso/sso-button-lg.png Enterprise Single Sign-On button %}

2. Enter your **Organization Identifier** and select **Log In**:

   {% image sso/org-id-input.png Organization Identifier field %}

   {% callout success %}We recommend bookmarking this page with your Organization Identifier included as a query string so that you don't have to enter it each time, for example `https://vault.bitwarden.com/#/sso?identifier=YOUR-ORG-ID` or `https://your.domain.com/#/sso?identifier=YOUR-ORG-ID`.{% endcallout %}
3. Now that you've authenticated your identity using Login with SSO, enter your [Master Password]({{site.baseurl}}/article/master-password/) on the Login screen to **decrypt** your Vault.

{% callout success %}
**Why is my Master Password still required?**

All Vault data, including credentials [shared by your Organization]({{site.baseurl}}/article/sharing), is kept by Bitwarden **only** in its encrypted form. This means that in order to use any of those credentials, **you** need a way to decrypt that data (we can't).

Your Master Password is the source of that decryption key. Even though you're authenticating (proving your identity) to Bitwarden using SSO, you still must use that decryption key (your Master Password) to see any meaningful data.
{% endcallout %}
