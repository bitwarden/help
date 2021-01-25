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

**Dates on this page represent Cloud Server and Web releases.** Bitwarden incrementally updates each client application (Desktop, Browser Extension, Mobile, etc.) following the initial release date to ensure feature efficacy and stability. As a result, client applications should expect listed features following the initial release.

To be notified of Release Announcements, subscribe to the Bitwarden Status RSS feed:

## 2021-01-19 Post-Release Update

{% callout info %}
Biometric Unlock for Browser Extensions is available for **only Chromium-based browsers** (e.g. Chrome, Edge) with v1.48.0 of the Browser Extension, provided you have the latest version (2021-01-19) of the Desktop App.

When your Browser Extension updates to this version, you may be asked to accept a new permission for Bitwarden to `Communicate with cooperating native applications`. This permission is safe, but **optional**, and will enable the Browser Extension to communicate with the Bitwarden Desktop App, which is required to enable Biometric Unlock (see [here](https://bitwarden.com/help/article/biometrics/#browser-extensions) for details). Declining this permission will allow you to use v1.48.0 without Biometric Unlock functionality.

**Biometric Unlock is currently not available for:**
- Firefox Browser Extensions (keep tabs on the required up-stream enhancement to make `nativeMessaging` optional [here](https://bugzilla.mozilla.org/show_bug.cgi?id=1630415){:target="\_blank"}).
- Microsoft App Store Desktop Apps (a side-loaded Windows Desktop App, available at [bitwarden.com/download](https://bitwarden.com/download){:target="\_blank"} will work fine).
- Side-loaded MacOS Desktop Apps (an App Store Desktop app will work fine).

The Bitwarden team is investigating these and will provide updates as things progress.
{% endcallout %}

## 2021-01-19
For the first major release of 2021, the Bitwarden team combined multiple major enhancements to address the critical needs of all users, including:
- **Emergency Access**: Bitwarden's new Emergency Access feature enables users to designate and manage trusted emergency contacts, who may request access to their Vault in a Zero Knowledge/Zero Trust environment (see [here]({% link _articles/security/emergency-access.md %}) for details).
- **Encrypted Exports**: Personal users and Organizations can now export Vault data in an encrypted `.json` file (see [here]({% link _articles/importing/encrypted-export.md %}) for details).
- **New Role**: A Custom role is now available to allow for granular control over user permissions (see [here](https://bitwarden.com/help/article/user-types-access-control/#custom-role) for details).
- **New Enterprise Policy**: The Personal Ownership policy is now available for use by Enterprise Organization (see [here](https://bitwarden.com/help/article/policies/#personal-ownership) for details).
- **Biometric Unlock for Browser Extensions**: Using an integration with a native Desktop application, you can now use Biometric input to unlock Chromium-based Browser Extensions (see [here](https://bitwarden.com/help/article/biometrics/#browser-extensions) for details).

## 2020-11-12
The latest release of Bitwarden adds SSO-related enhancements to all client applications, including:
- **New Enterprise Policies:** The Single Organization and Single Sign-On Authentication polices are now available for use by Enterprise Organizations (see [here](https://bitwarden.com/help/article/policies/) for details).
- **API Key for CLI:** Authenticate into the Bitwarden CLI using an API Key newly available from your Web Vault (see [here](https://bitwarden.com/help/article/personal-api-key/) for details).
- **Improvements to SSO Onboarding:** We've made some improvements to the way users are onboarded via SSO to prevent potential security risks (see [here](https://github.com/bitwarden/server/pull/945) for details).
- **GDPR Acknowledgement:** From now on, new users of Bitwarden will be asked to acknowledge a Privacy Policy on registration.
- **Android 11 Inline Auto-fill**: For devices using Android 11+, enabling the Auto-fill Service will display suggestions inline for IMEs that also support [this feature](https://developer.android.com/guide/topics/text/ime-autofill#workflow) (see [here](https://github.com/bitwarden/mobile/pull/1145) for details).

## 2020-9-30
The latest release of Bitwarden adds much-anticipated **Login with SSO** functionality for all client applications, and the Business Portal for Web Vaults. Read this [blog post](https://bitwarden.com/blog/post/bitwarden-launches-sso-authentication/) for more information about Login with SSO, and refer to our [documentation](https://bitwarden.com/help/login-with-sso).

## Early 2020 releases

The following items were released between March and September of 2020.

- [Enterprise Policies](https://bitwarden.com/help/article/policies/)
- [Vault Timeout Options](https://bitwarden.com/help/article/vault-timeout/)
- [Trash functionality](https://bitwarden.com/help/article/managing-items/#deleting-an-item)
- [Password View Permissions - "Hide Passwords"](https://bitwarden.com/help/article/user-types-access-control/#granular-access-control)
- [Touch ID / Windows Hello for Desktop Applications](https://bitwarden.com/help/article/biometrics/#desktop-applications)
