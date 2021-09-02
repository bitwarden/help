---
layout: article
title: Bitwarden for Enterprise Features Datasheet
categories: [business]
featured: false
popular: false
hidden: false
tags: [enterprise, plans, organization]
order: 03
---

This document describes and references the features available to Bitwarden Enterprise Organizations in several categories:

#### Application Range and Ease-of-use

|Enterprise Features|Description|
|-------------------|-----------|
|Deployment Options|Cloud, Private Cloud, and Self-hosted.|
|Web Application|Fully encrypted cloud web app at [https://vault.bitwarden.com](https://vault.bitwarden.com){:target="\_blank"}, or on your self-hosted server|
|Mobile Apps (with Mobile Login Controls)|Available for iOS and Android. [Learn more]({{site.baseurl}}/article/getting-started-mobile/).|
|Browser Extensions|Available for Chrome, Firefox, Opera, Edge, Vivaldi, Brave, Tor, and Safari. [Learn more]({{site.baseurl}}/article/getting-started-browserext/).|
|Desktop Applications|Available for Windows, Mac, and Linux. [Learn more]({{site.baseurl}}/article/directory-sync-desktop/).|
|CLI|Fully featured and self-documented command-line tool. [Learn more]({{site.baseurl}}/article/cli/).
|Streamlined UI Design|Simple and uniform interfaces across apps for complete ease-of-use.|

#### Administrative Features and Capabilities

|Enterprise Features|Description|
|-------------------|-----------|
|Simple User Management|Add or remove seats and onboard or offboard users directly from the Web Vault. [Learn more]({{site.baseurl}}/article/managing-users/).|
|Role Based Access Control|Assign role-based access for Organization users, including a custom role and granular permissions (e.g. Hide Passwords, Read-Only). [Learn more]({{site.baseurl}}/article/user-types-access-control/).|
|Directory Sync|Synchronize your Bitwarden Organization with your existing user directory. Provision and de-provision users, groups, and group associations. [Learn more]({{site.baseurl}}/article/directory-sync/).|
|Admin Password Reset |Designated administrators can reset Master Password of end-user accounts if an employee loses or forgets their Master Password. [Learn more]({{site.baseurl}}/article/admin-reset/).|
|Enterprise Policies|Enforce security rules for all users, for example mandating use of Two-step Login. [Learn more]({{site.baseurl}}/article/policies/).|
|Temporary Password Sharing and Generation| Create and share ephemeral data using Bitwarden Send. [Learn more]({{site.baseurl}}/article/about-send/).|

#### Reporting

|Enterprise Features|Description|
|-------------------|-----------|
|Vault Health Reports|Run reports for Exposed Passwords, Reused Passwords, Weak Passwords, and more. [Learn more]({{site.baseurl}}/article/reports/).|
|Data Breach Reports|Run reports for data compromised in knwon breaches (e.g. Email Addresses, Passwords, Credit Cards, DoB, etc.). [Learn more]({{site.baseurl}}/article/reports/).|
|Event Logs|Get timestamped records of events that occur within your Organization Vault for easy use in the Web Vault or ingestion by other systems. [Learn more]({{site.baseurl}}/article/event-logs/).|

#### Authentication

|Enterprise Features|Description|
|-------------------|-----------|
|2FA for Individuals|A robust set of 2FA options for any Bitwarden user. [Learn more]({{site.baseurl}}/article/setup-two-step-login/).|
|2FA at Organization-level|Enable 2FA via Duo for your entire Organization. [Learn more]({{site.baseurl}}/article/setup-two-step-login-duo/).|
|Biometric Authentication|Available for:<br>-Android (fingerprint unlock or face unlock) and iOS (Touch ID and Face ID)<br>-Windows Desktop Apps (Windows Hello using PIN, Facial Recognition, and more) and macOS Desktop Apps (Touch ID)<br>-Chromium, Firefox 87+, and Safari Browser Extensions<br><br>[Learn more]({{site.baseurl}}/article/biometrics/).|
|Login with SSO|Leverage your existing Identity Provider to authenticate your Bitwarden Organization users via SAML 2.0 or OpenID Connect (OIDC). [Learn more]({{site.baseurl}}/article/about-sso/).|

#### Security

|Enterprise Features|Description|
|-------------------|-----------|
|Secure storage for Logins, Notes, Cards, and Identities|Bitwarden [Vault items]({{site.baseurl}}/article/managing-items/) are encrypted before being stored anywhere. [Learn more]({{site.baseurl}}/article/what-encryption-is-used/).|
|Zero Knowledge Encryption |All Vault data is end-to-end encrypted. [Learn more](https://bitwarden.com/blog/post/bitwarden-network-security-assessment-2020/).|
|Secure Password Generator|Generate secure, random, and unique passwords for every Vault item. [Learn more](https://bitwarden.com/password-generator/).|
|Encrypted Export|Download encrypted exports for secure storage of Vault data backups. [Learn more]({{site.baseurl}}/article/encrypted-exports/).|
|Biometric Authentication|Available for:<br>-Android (fingerprint unlock or face unlock) and iOS (Touch ID and Face ID)<br>-Windows Desktop Apps (Windows Hello using PIN, Facial Recognition, and more) and macOS Desktop Apps (Touch ID)<br>-Chromium, Firefox 87+, and Safari Browser Extensions<br><br>[Learn more]({{site.baseurl}}/article/biometrics/).|
|Emergency Access|Users can designate and manage trusted emergency contacts, who may request access to their Vault in case of emergency. [Learn more]({{site.baseurl}}/article/emergency-access/).|
|Account Fingerprint Phrase|Security measure that uniquely and securely identifies a Bitwarden user account when encryption-related or onboarding operations are performed. [Learn more]({{site.baseurl}}/article/fingerprint-phrase/).|
|Subprocessors|See our full list of subprocessors: [Bitwarden Subprocessors](https://bitwarden.com/help/article/subprocessors/).|

#### Compliance, Audits, Certifications

|Enterprise Features|Description|
|-------------------|-----------|
|SOC 2 Type 2 |[Read about our SOC 2 Type 2 Certification](https://bitwarden.com/blog/post/bitwarden-achieves-soc-2-certification/).|
|2018 Security Assessment|[Read our 2018 Security Assessment](https://bitwarden.com/blog/post/third-party-security-audit/).|
|2020 Security Assessment|[Read our 2020 Security Assessment](https://bitwarden.com/blog/post/bitwarden-network-security-assessment-2020/).|
|GDPR, CCPA, HIPAA, & Privacy Shield|[Read about our compliance with various privacy frameworks](https://bitwarden.com/compliance/).|
|White-box Testing |Performed by unit tests and QA Engineers.|
|Black-box Testing |Performed via automation and manual testing.|
|Bug Bounty Program|Conducted through HackerOne. [Learn more](https://hackerone.com/bitwarden/?type=team).|

#### APIs and Extensibility

|Enterprise Features|Description|
|-------------------|-----------|
|Programmatically Accessible|Public and Private APIs for Organizations. [Learn more]({{site.baseurl}}/article/public-api/).|
|Command Line Interface|Fully featured and self-documented command-line tool. [Learn more]({{site.baseurl}}/article/cli/)|
|Extensibility Support|Automate workflows by combining API and CLI.|

#### Resiliciency

|Enterprise Features|Description|
|-------------------|-----------|
|Local Cache & Offline Access|[Learn more]({{site.baseurl}}/article/security-faqs/).|
