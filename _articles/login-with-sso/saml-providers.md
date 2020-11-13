---
layout: article
title: Configuring Bitwarden at your IdP - SAML 2.0
categories: []
featured: false
popular: false
tags: [sso, saml, oidc, openid, saml2.0, idp, identity]
---

## Service Provider Configuration Mapping

| Bitwarden Field                                          | Azure AD Field                                   | JumpCloud Field                                  | OneLogin Field                                   | G-Suite Field                             | Okta Field                                             |
|----------------------------------------------------------|--------------------------------------------------|--------------------------------------------------|--------------------------------------------------|-------------------------------------------|--------------------------------------------------------|
| SP Entity ID (The Bitwarden SSO Service- auto generated) | Identifier (Entity ID)                           | SP Entity ID                                     | Audience (EntityID)                              | Entity ID                                 | Audience Restriction                                   |
| Assertion Consumer Service (ACS) URL                     | Reply URL (Assertion Consumer Service URL)       | ACS URL                                          | ACS (Consumer) URL                               | ACS URL                                   | Single Sign On URL, Recipient URL, Destination URL |
| Name ID Format                                           | Name ID                                          | SAMLSubject NameId Format                        | Name ID                                          | Name ID: G-Suite + Bitwarden should match | Name ID Format                                         |
| Outbound Signing Algorithm                               | Azure + Bitwarden should match                   | Signature Algorithm                              | OneLogin + Bitwarden should match                | G-Suite + Bitwarden should match          | Signature Algorithm + Bitwarden should match           |
| Signing Behavior                                         | Use default, Bitwarden will sign if IdP requests | Use default, Bitwarden will sign if IdP requests | Use default, Bitwarden will sign if IdP requests | G-Suite + Bitwarden should match          | Digest Algorithm + Bitwarden should match              |

## Identity (IdP) Provider Configuration

| Bitwarden Field                 | Azure AD Field                 | JumpCloud Field                                                    | OneLogin Field                    | G-Suite Field                                 | Okta Field                                    |
|---------------------------------|--------------------------------|--------------------------------------------------------------------|-----------------------------------|-----------------------------------------------|-----------------------------------------------|
| Entity ID                       | Azure AD Identifier            | IdP Entity ID                                                      | Issuer URL                        | Entity ID                                     |                                               |
| Binding Type                    | Azure + Bitwarden should match | JumpCloud + Bitwarden should match                                 | OneLogin + Bitwarden should match | G-Suite + Bitwarden should match              | Okta + Bitwarden should match                 |
| Single Sign On Service URL      | Login URL                      | IDP URL                                                            | SAML 2.0 Endpoint (HTTP)          | SSO URL                                       |                                               |
| Single Log Out Service URL      | Logout URL                     | Optional                                                           | SLO Endpoint (HTTP)               | N/A                                           |                                               |
| Artifact Resolution Service URL | Optional                       | Optional                                                           | Optional                          | Optional                                      | Optional                                      |
| X509 Public Certificate         | Certificate (Base64)           | Download after activation, available under "IDP Certificate Valid" | X.509 Certificate                 | Certificate (download PEM file, open as text) | x.509 Certificate                             |
| Outbound Signing Algorithm      | Azure + Bitwarden should match | Signature Algorithm                                                | Azure + Bitwarden should match    | Checkbox to turn off/on                       | Signature Algorithm  + Bitwarden should match |

## Screenshots of Sample Configurations

[{% icon fa-download %} Download Okta Sample]({{site.baseurl}}/files/bitwarden_export.csv)

{% callout info %}
This table is meant to make locating some fields and values easier. Some configurations and provider versions may differ depending on your Organization's policies and procedures. If you are having trouble configuring Login with SSO for your Bitwarden Organization, please [contact us](https://bitwarden.com/contact/) for assitance.
{% endcallout %}
