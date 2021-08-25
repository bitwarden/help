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

**Dates on this page represent Cloud Server and Web releases.** Bitwarden incrementally updates each client application (Desktop, Browser Extension, Mobile, etc.) and for self-hosted servers following the initial release date to ensure feature efficacy and stability. As a result, client applications and self-hosted servers should expect listed features following the initial release.

To be notified of Release Announcements, subscribe to the [Bitwarden Status RSS Feed](https://status.bitwarden.com/){:target="\_blank"}.

## 2021-08-18

{% callout success %}
Interested in becoming a Provider? To get started, we ask that:

- Your business has an active Enterprise Organization.
- Your business has a client ready to be onboarded under your Provider.

<br>
If you're not ready to start a Provider, the Bitwarden team is eager to support your Bitwarden journey as a reseller or customer.

<a role="button" class="btn btn-primary" href="https://bitwarden.com/contact" target="blank">Contact Us</a>
{% endcallout %}

The latest release of Bitwarden is focused on enabling Managed Service Providers (MSPs) to support their customers' password management needs:

- **Provider Portal**: The Provider Portal allows Managed Service Providers (MSPs) and Resellers to create and administer Organizations on behalf of customers. Using the Portal, Providers can seamlessly support credential management across multiple customers (see [here]({{site.baseurl}}/article/getting-started-providers/) for details).
- **Share Verbiage Change**: We've updated the {% icon fa-share-alt %} **Share** button to {% icon fa-arrow-circle-o-right %} **Move to Organization** to make it cleared that shared items are owned by the Organization. Additionally, we've updated the "shared item" indicator ({% icon fa-share-alt %}) to match the Collections indicator ({% icon fa-cube %}).
- **CLI `move` Command**: In keeping with the above item, the CLI `share` command has been changed to `move` (see [here]({{site.baseurl}}/article/cli/#move) for details).

## 2021-06-29

The Bitwarden team is happy to announce the rollout of Admin Password Reset, the latest feature purpose-built to help enterprises seeking to ensure password security at scale. This release includes:

- **Admin Password Reset**: Enterprise Organizations can enroll in Admin Password Reset to allow designated administrators to reset the Master Password of Organization users (see [here]({{site.baseurl}}/article/admin-reset/) for details).
- **Master Password Re-prompt**: Use the new Master Password re-prompt option to require verification of your Master Password to access sensitive Vault items as designated by the user (see [here]({{site.baseurl}}/article/managing-items/#protect-individual-items) for details).
- **Bulk User Management**: Organization Owners and Admins can now re-send invitations, confirm accepted users, and remove users from an Organization in-bulk (see [here]({{site.baseurl}}/article/managing-users/#onboard-users) for details).
- **Event Log Export**: Export event logs directly from the Web Vault (see [here]({{site.baseurl}}/article/event-logs/#export-events) for details).
- **Directory Connector API Key Authentication**: Starting with this release, users of Directory Connector will need to use the [Organization API Key]({{site.baseurl}}/article/public-api/#authentication) to login.
- **Directory Connector Sync Limit Increase**: Directory Connector can now sync an unlimited number of users or groups, where previously the limit was set at 2000 of either. To sync more than 2000 users or groups, toggle the new Sync Option (see [here]({{site.baseurl}}/article/user-group-filters/#large-syncs) for details).
- **Autofill On Page Load Enhancements**: The Browser Extension's Auto-fill on page load feature has been upgraded to more flexibly fit users' unique needs (see [here]({{site.baseurl}}/article/auto-fill-browser/#on-page-load) for details).
- **More CLI Options**: We've added a few new CLI options, including easy retrieval of Vault item notes (`bw get notes <id>`) and the ability to set maximum access count for Sends (`bw send create --maxAccessCount <#>`).
- **Web Developer Autofill Exclusion**: Web Development contributors can now prevent the Browser Extension from auto-filling a given form element by adding a `data-bwignore` attribute (e.g. `data-bwignore="true"`) to an `<input>` element.

## 2021-05-11

The Bitwarden team is pleased to release a set of features and updates continuing our mission of making password management easy and accessible for individuals and businesses:

- **Privacy & Security Options for Send**: Use a new Send Privacy option to hide your email from recipients (see [here]({{site.baseurl}}/article/send-privacy/#hide-email) for details). To prevent abuse, File Sends will now require a verified email address. Additionally, Enterprise Organizations can implement a new policy to set the availability of the Hide Email option (see [here]({{site.baseurl}}/article/policies/#send-options) for details).
- **FIDO Updates & Expanded Support**: Our FIDO implementation has been upgraded from FIDO U2F to FIDO2 WebAuthn, but existing FIDO U2F keys will retain their integrity. FIDO support has been expanded to more Browser Extensions and the Windows Desktop App (see [here]({{site.baseurl}}/article/setup-two-step-login-fido/) for details).
- **Custom Fields for Keys**: Custom Field values have been upgraded to support up to 5000 characters, allowing storage of keys like RSA 4096-bit SSH keys (see [here]({{site.baseurl}}/article/custom-fields/#custom-fields-for-keys) for details).
- **File Size Increases**: You can now create File Attachments or File Sends that are up to 500 MB each. Due to device restrictions, the old 100 MB limit is still in place for Mobile Apps.

   {% callout warning %}As a result of the Attachment upgrade, Attachments uploaded on the newest clients cannot be opened on older client versions. If you find you're unable to access a recently-created Attachment, upgrade your client to the newest version. (**Hint:** The Cloud Web Vault is *always* on the newest version.)<br><br>**Frozen or legacy client versions**, including the Safari 13 (or earlier) macOS Desktop App & App Extension, will not support accessing these attachments.{% endcallout %}
- **Disable Browser Extension Counter**: Disable the Browser Extension badge counter using a new toggle in the {% icon fa-cogs %} **Settings** &rarr; **Options** menu (see [here]({{site.baseurl}}/article/auto-fill-browser/) for details).
- **Biometrics for Safari**: The Safari Web Extension now includes support for Unlock with Biometrics for Safari 14+ (see [here]({{site.baseurl}}/article/biometrics/) for details).
- **Search Internationalization**: Vaults can now be searched against 1 character, improving the experience for languages with 1-character words like Simplified and Traditional Chinese.
- **Sorted Weak Passwords Report**: The Weak Passwords Report is now sorted by the severity of the password's weakness (see [here]({{site.baseurl}}/article/reports/#weak-passwords-report) for details)

{% callout success %}
Since implementing [Soft Delete]({{site.baseurl}}/article/managing-items/#items-in-the-trash) back in 2020, we've been patient to take out the Trash. **Starting 5/15/2021**, we'll activate the nightly job that will permanently delete items that have been in your trash for 30 days or more.

Prior to 5/15/2021, we recommend digging through your Trash for anything you might want to Restore!
{% endcallout %}

## 2021-03-11

Bitwarden is proud to announce the release of Bitwarden Send, and end-to-end encrypted solution for ephemeral sharing. This release includes:

- **Bitwarden Send**: Bitwarden Send is end-to-end encrypted solution for ephemeral sharing. There's lot of material about Send on our website and Help Center, but you can start [here](https://bitwarden.com/products/send){:target="\_blank"} or [here]({% link _articles/send/about-send.md %}).
- **FIDO U2F Support for Edge**: Two-step Login via FIDO U2F is now available for the Web Vault and Browser Extensions in Microsoft Edge (see [here]({% link _articles/two-step-login/setup-two-step-login-fido.md %}) for details).
- **Domain Exclusion in Browser Extensions**: Bitwarden Browser Extensions can now be configured with domains to explicitly not offer to remember passwords for (see [here]({% link _articles/miscellaneous/exclude-domains.md %}) for details).
- **Improved Import Error Messages**: We've had lots of folks migrating to Bitwarden recently, so we cleaned up an import error message to help you reconcile issues faster (see [here]({{site.baseurl}}/article/import-data/#length-related-import-errors) for details).
- **Safari Web Extension Port**: Our Safari App Extension has officially been ported to a Web Extension for use with Safari 14+. Due to changes to Safari, Web Extension use is now limited to only those obtained through Mac App Store downloads (see [here]({% link _articles/account/install-safari-app-extension.md %}) for details).

## 2021-01-19 Post-Release Update

{% callout info %}
Biometric Unlock for Browser Extensions is available for **only Chromium-based browsers** (e.g. Chrome, Edge) with v1.48.0 of the Browser Extension, provided you have the latest version (2021-01-19) of the Desktop App.

When your Browser Extension updates to this version, you may be asked to accept a new permission for Bitwarden to `Communicate with cooperating native applications`. This permission is safe, but **optional**, and will enable the Browser Extension to communicate with the Bitwarden Desktop App, which is required to enable Biometric Unlock (see [here](https://bitwarden.com/help/article/biometrics/#browser-extensions) for details). Declining this permission will allow you to use v1.48.0 without Biometric Unlock functionality.

**Biometric Unlock is currently not available for:**
- Firefox Browser Extensions below version 87.
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
