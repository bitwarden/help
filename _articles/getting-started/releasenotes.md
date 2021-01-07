---
layout: article
title: Release Notes
categories: []
featured: true
popular: true
hidden: false
tags: [release notes]
order:
---

Bitwarden believes source code transparency is an absolute requirement for security solutions like ours. View full, detailed Release Notes in GitHub using any of the following links:
- [Server Releases](https://github.com/bitwarden/server/releases){:target="\_blank"}
- [Web Releases](https://github.com/bitwarden/web/releases){:target="\_blank"}
- [Desktop Releases](https://github.com/bitwarden/desktop/releases){:target="\_blank"}
- [Browser Extension Releases](https://github.com/bitwarden/browser/releases){:target="\_blank"}
- [Mobile Releases](https://github.com/bitwarden/mobile/releases){:target="\_blank"}
- [CLI Releases](https://github.com/bitwarden/cli/releases){:target="\_blank"}
- [Directory Connector Releases](https://github.com/bitwarden/directory-connector/releases){:target="\_blank"}
- [jslib Releases](https://github.com/bitwarden/jslib/releases){:target="\_blank"}

## Release Announcements

## 2020-11-12: SSO Enhancements
The latest release of Bitwarden adds SSO-related enhancements to all client applications, including:
- **New Enterprise Policies:** The Single Organization and Single Sign-On Authentication polices are now available for use by Enterprise Organizations (see [here](https://bitwarden.com/help/article/policies/) for details).
- **API Key for CLI:** Authenticate into the Bitwarden CLI using an API Key newly available from your Web Vault (see [here](https://bitwarden.com/help/article/personal-api-key/) for details).
- **Improvements to SSO Onboarding:** We've made some improvements to the way users are onboarded via SSO to prevent potential security risks (see [here](https://github.com/bitwarden/server/pull/945) for details).
- **GDPR Acknowledgement:** From now on, new users of Bitwarden will be asked to acknowledge a Privacy Policy on registration.
- **Android 11 Inline Auto-fill**: For devices using Android 11+, enabling the Auto-fill Service will display suggestions inline for IMEs that also support [this feature](https://developer.android.com/guide/topics/text/ime-autofill#workflow) (see [here](https://github.com/bitwarden/mobile/pull/1145) for details).

## 2020-9-30: Login with SSO
The latest release of Bitwarden adds much-anticipated **Login with SSO** functionality for all client applications, and the Business Portal for Web Vaults. Read this [blog post](https://bitwarden.com/blog/post/bitwarden-launches-sso-authentication/) for more information about Login with SSO, and refer to our [documentation](https://bitwarden.com/help/login-with-sso).
