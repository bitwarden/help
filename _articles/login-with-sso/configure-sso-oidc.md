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

URL for Bitwarden authentication redirect (automatically generated). Configure this in your identity provider for the login redirect URI.

### Signed Out Callback Path

URL for Bitwarden sign-out redirect (automatically generated). Configure this value in your identity provider for the logout redirect URI.

### Authority

*Required* Your Identity Provider URL or Authority that Bitwarden will perform Authentication against.

### Client ID

*Required* for Bitwarden messages to be identified by your Identity Provider

Your Identity Provider's client ID for Bitwarden. You will need to configure this before enabling SSO.

### Client Secret

In conjunction with your Client ID for authentication against your Identity Provider, this value may be required depending on your identity provider’s configuration, needs, or requirements.

### Metadata Address

Provides Identity Provider information back to Bitwarden. This is required if the Authority is not a valid URL.

### OIDC Redirect Behavior

Options:
- Form POST (***default***)
- Redirect GET

{%note%}
You may need to specify this if you are experiencing errors stating that URL or Query String is `too long` 
{%endnote%}

### Other OIDC Options

- Get Claims From User Info Endpoint (*Boolean*) - Check this value if you start receiving URL too long errors (HTTP 414), truncated URLs, and/or failures during SSO.
