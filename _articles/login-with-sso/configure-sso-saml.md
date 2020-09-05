---
layout: article
title: SAML 2.0 Configuration
categories: [login-with-sso]
featured: false
popular: false
tags: [sso, saml, oidc, openid, saml2.0, idp, identity]
---

## Key Terms and Definitions

- SP - Service Provider, this is your Bitwarden instance

- IdP - Identity Provider, this is your identity server, provider, or federated identity service.

- Name ID - This is a value provided by the IdP that identifies the user claim represented by the assertion; a Name ID may be transient (different every time) or persistent (the same every time).

- Authn Request - A request created by the SP and sent to the IdP to initiate the authentication.

- Assertion - A response to the Authn Request from the IdP to the SP that contains any number of claims and attributes for use by the SP in return.

- Entity ID - This is a unique identifier, commonly a URL, and also commonly = to the base URI for each SP and IdPs respective service endpoints (but not necessarily, it could be any string).

- Signing - This is a digital signature created using a party’s private signing certificate and then verified by the relaying party using the source public key.

## SAML *Service Provider* Configuration

### SP Entity ID

Bitwarden Login with SSO endpoint (automatically generated)

### Name ID Format

Options:

- Unspecified (default)
- Email Address
- X.509 Subject Name
- Windows Domain Qualified Name
- Kerberos Principal Name
- Entity Identifier
- Persistent
- Transient

### Outbound Signing Algorithm

Options:
- <http://www.w3.org/2000/09/xmldsig#rsa-sha1>
- **<http://www.w3.org/2001/04/xmldsig-more#rsa-sha256> (*default*)**
- <http://www.w3.org/2000/09/xmldsig#rsa-sha384>
- <http://www.w3.org/2000/09/xmldsig#rsa-sha512>

### Signing Behavior

Options:
- If IdP Wants Authn Requests Signed (*default*)
- Always
- Never

### Other Service Provider Options

- Want Assertions Signed (Boolean)
- Validate Certificates (Boolean)
 	- (check only when using trusted and valid certificates from your IdP through a trusted CA, self-signed certificates may fail unless proper trust chains are configured within the Bitwarden SSO docker image; that is outside of the scope of this article)

## SAML *Identity Provider* Configuration

### Entity ID (*Required*)

The address or URL of your Identity Server or IdP Entity ID as configured in your identity provider service.

### Binding Type

Options:
- HttpRedirect
- HttpPost (recommended)
- Artifact

### Single Sign-On Service URL

*Required if IdP Entity is not a URL*

### Single Log Out Service URL

URL for SLO messages. This functionality is not yet available for Bitwarden, however you can preconfigure this URL.

### Artifact Resolution Service URL

*Required if Binding type = Artifact*

### X509 Public Certificate

Only include the X.509 Base-64 encoded certificate body and not the `-----BEGIN CERTIFICATE-----` and `-----END CERTIFICATE-----` lines or portions of the CER/PEM formatted certificate.

*Required if Signing behavior != Never*

### Outbound Signing Algorithm

Options:

- <http://www.w3.org/2000/09/xmldsig#rsa-sha1>
- **<http://www.w3.org/2001/04/xmldsig-more#rsa-sha256> (*default*)**
- <http://www.w3.org/2000/09/xmldsig#rsa-sha384>
- <http://www.w3.org/2000/09/xmldsig#rsa-sha512>

### Other Identity Provider Options

- Allow Unsolicited Authentication Response (*Boolean*)
- Disable Outbound Logout Requests (*Boolean*)
- Want Authentication Requests Signed (*Boolean*)
