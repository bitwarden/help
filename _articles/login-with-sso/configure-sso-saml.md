---
layout: article
title: SAML 2.0 Configuration
categories: [login-with-sso]
featured: false
popular: false
tags: [sso, saml, oidc, openid, saml2.0, idp, identity]
---


## SAML *Service Provider* Configuration

### SP Entity ID

Bitwarden Login with SSO endpoint

### Name ID Format

Options:

- Unspecified
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
- <http://www.w3.org/2001/04/xmldsig-more#rsa-sha256>
- <http://www.w3.org/2000/09/xmldsig#rsa-sha384>
- <http://www.w3.org/2000/09/xmldsig#rsa-sha512>

### Signing Behavior

Options:
- If IdP Wants Authn Requests Signed
- Always
- Never

### Other Service Provider Options

- Want Assertions Signed (Boolean)
- Validate Certificates (Boolean)

## SAML *Identity Provider* Configuration

### Entity ID (Required)

The Address or URL of your SAML Server.

### Binding Type

Options:
- HttpRedirect
- HttpPost
- Artifact

### Single Sign On Service URL (Required if IdP Entity is not a URL)

### Single Log Out Service URL

### Artifact Resolution Service URL (Required if Binding type = Artifact)

### X509 Public Certificate (Required if Signing behavior != Never)

### Outbound Signing Algorithm

Options:

- <http://www.w3.org/2000/09/xmldsig#rsa-sha1>
- <http://www.w3.org/2001/04/xmldsig-more#rsa-sha256>
- <http://www.w3.org/2000/09/xmldsig#rsa-sha384>
- <http://www.w3.org/2000/09/xmldsig#rsa-sha512>

### Other Identity Provider Options

- Allow Unsolicited Authentication Response (Boolean)
- Disable Outbound Logout Requests (Boolean)
- Want Authentication Requests Signed (Boolean)
