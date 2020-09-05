---
layout: article
title: Open ID Connect (OIDC) Configuration
categories: [login-with-sso]
featured: false
popular: false
tags: [sso, saml, oidc, openid, saml2.0, idp, identity]
---

## OpenID Connect Configuration

### Callback Path

URL for Bitwarden authentication redirect (automatically generated)

### Signed Out Callback Path

URL for Bitwarden sign-out redirect (automatically generated)

### Authority

*Required* Your Identity Provider URL that Bitwarden will perform Authentication against.

### Client ID

*Required* for Bitwarden messages to be identified by your Identity Provider

Your Identity Provider's client ID for Bitwarden. You will need to configure this before enabling SSO.

### Client Secret

*Required* In conjunction with your Client ID for authentication against your Identity Provider

### Metadata Address

Provides Identity Provider information back to Bitwarden

### Other OIDC Options

- Get Claims From User Info Endpoint (*Boolean*)
