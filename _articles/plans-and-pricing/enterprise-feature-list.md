---
layout: article
title: Bitwarden for Enterprise - Feature List
categories: [plans-and-pricing]
featured: false
popular: false
hidden: true
tags: [project guide, poc]
order: 
---

|ENTERPRISE FEATURES  |DESCRIPTION|
|---------------------|----------------------|
|**Application range and ease-of-use**|    |
|Wide download and deployment options | Cloud, private cloud, self-hosted, mobile, desktop, CLI  |
|Mobile Apps (with Mobile Login Controls) | Available for iOS and Android  |
|Browser extensions | Chrome, Firefox, Opera, Edge, Vivaldi, Brave, Tor, Safari  |
|Desktop applications | Windows, Mac, Linux  |
|Streamlined UI design |   |
|**Administrative features and capabilities**| | 
|Directory Connector | Synchronize with your existing directory. Provision, de-provision users, groups, group associations|
|User type access controls| Custom role, granular controls (hide passwords, read only), password inheritance and custodianship, LDAP group permissions, Personal and Company Vaults |
|User management |Add/remove seats, onboard/offboard users (flags and assistance) |
|**Security**| |
|Secure storage for Logins, Notes, Cards, and Identities| Bitwarden Vault items |
|Secure password generator |Generate secure, random passwords |
|Encrypted export |Download encrypted exports from Bitwarden clients |
|Biometrics, mobile |Android (Google Play or FDroid); iOS (Touch ID, Face ID) |
|Biometrics, desktop | Windows (Windows Hello using PIN, Facial Recognition, or other hardware that meets Windows Hello biometric requirements); macOS (Touch ID) |
|Biometrics, browser extensions |Chromium-based browsers (Chrome, Edge, Opera, Brave, etc.), Firefox 87+, and Safari 14+ |
|Emergency Access | Users can designate and manage trusted emergency contacts | 
|Zero knowledge encryption |All Vault data is end-to-end encrypted |
| Account fingerprint phrase |Uniquely and securely identifies a Bitwarden user account when encryption-related operations are performed.|
|Subprocessors| [https://bitwarden.com/help/article/subprocessors/](https://bitwarden.com/help/article/subprocessors/) |
|**Authentication**| |
|Two factor authentication| |
|Login with SSO | Use your existing Identity Provider to perform authentication for Bitwarden via SAML or OPENID |
|Two-step login |Duo for Organizations |
|Touch ID/ Windows Hello Support |Configure Bitwarden to accept biometrics was a method to unlock your Vault|
|**Compliance, Audits, Certifications**| |
|SOC 2 Type 2 |[https://bitwarden.com/blog/post/bitwarden-achieves-soc-2-certification/](https://bitwarden.com/blog/post/bitwarden-achieves-soc-2-certification/)|
|2018 Security Assessment|[https://bitwarden.com/blog/post/third-party-security-audit/](https://bitwarden.com/blog/post/third-party-security-audit/)|
|2020 Security Assessment | [https://bitwarden.com/blog/post/bitwarden-network-security-assessment-2020/](https://bitwarden.com/blog/post/bitwarden-network-security-assessment-2020/)|
|White box testing | Performed by unit tests and QA Engineers |
|Black box testing |Performed via automation or manual testing |
|Bug bounty program |HackerOne |
|**Privacy**| |
|GDPR, CCPA, HIPAA, Privacy Shield | [https://bitwarden.com/compliance/](https://bitwarden.com/compliance/)|
|**Reporting**| |
|Vault Health reports| Exposed passwords, reused passwords, weak passwords, and more |
| Data breach reports |compromised data (email addresses, passwords, credit cards, DoB, etc.) in known breaches |
|Event logs |User, item, collection, group, organization events |
|**Directory integration**| |
| Bitwarden Directory Connector|Sync with Active Directory or LDAP, Azure, G Suite, Okta, OneLogin|
|**Single Sign On (SSO)**| |
|SAML 2.0|Enabling login with SSO for SAML 2.0|
|OIDC | Enabling login with SSO for OpenID Connect |
| Link existing account | Link existing account to SSO |
| Vault access| Authenticate Vault using SSO |
| **APIs and Extensibility** | |
|Programmatically accessible| Public and private APIs |
| Command line interface |Public and private APIs Fully featured CLI client application |
| Extensibility Plug-in and extension supports|Output log data via the API, automate workflows with the API and CLI|
|**Technical implementation**| |
|Passwords stored encrypted in-memory until revealed| |
|Strong and flexible password generation| Configurable password generator. Policy for Password Generator strength 
| Vendor cannot access passwords |Bitwarden employs a zero-knowledge encryption model with no ability to see customer vault data |
|Confirming to cryptography standards |[https://bitwarden.com/help/article/what-encryption-is-used/](https://bitwarden.com/help/article/what-encryption-is-used/) |
| **Resiliency** | |
|Local cache/offline access| |
|**Extras**| |
|Temporary password sharing and generation| |
|Auto clear clipboard after copying a password| |
|Duplicate password detection| | 








