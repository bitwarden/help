---
layout: article
title: About Key Connector
categories: [login-with-sso]
featured: false
popular: false
tags: [key connector, customer-managed encryption, login with sso]
order: "05"
description: "..."
---

## What is Key Connector?

Key Connector is a self-hosted application that serves cryptographic keys to Bitwarden clients. Key Connector runs as a docker container on the same network as existing services, and can be used with [Login with SSO]({{site.baseurl}}/article/about-sso/) to serve cryptographic keys for an Organization as an alternative to requiring a Master Password for Vault decryption ([learn more](#why-use-key-connector)).

 Key Connector requires connection to a **database where encrypted user keys are stored** and an **RSA Key Pair to encrypt and decrypt stored user keys**. Key Connector can be [configured]({{site.baseurl}}/article/deploy-key-connector/) with a variety of both database providers (e.g. MSSQL, PostgreSQL, MySQL) and Key Pair storage providers (e.g. Hashicorp Vault, Cloud KMS Providers, On-prem HSM devices) in order to fit your business' infrastructure requirements.

{% image sso/keyconnector/keyconnector-diagram.png Key Connector Architecture %}

## Why use Key Connector?

**In typical SSO implementations**, your Identity Provider handles authentication and a member's Master Password is required for Vault decryption. This separation of concerns is an important step that ensures that only an Organization member has access to the key which is required to decrypt your Organization's sensitive Vault data.

**In Key Connector SSO implementations**, your Identity Provider still handles authentication, but Vault decryption is handled by Key Connector. By accessing an encrypted Key Database (*see the above diagram*), Key Connector provides a user their decryption key when they log in, without requiring a Master Password.

We often refer to Key Connector implementations as leveraging **Customer-Managed Encryption**, because your business has sole responsibility for the management of the Key Connector application and of the Vault decryption keys it serves. For enterprises ready to deploy and maintain a Customer-Managed Encryption environment, Key Connector facilitates a streamlined Vault login experience.

### Impact on Master Passwords

Because Key Connector replaces Master Password-based decryption with customer-managed decryption keys, Organization members will be **required to remove the Master Password from their account**. Once removed, all Vault decryption actions will be conducted using the stored user key. Besides logging in, this will have some [impacts on other features](#impact-on-other-features) you should be aware of.

{% callout warning %}
Currently, there is not a way to re-create Master Passwords for accounts that have removed them.

For this reason, we **highly recommend** that Organizations Owners and Admins **do not** log in using SSO and Key Connector and therefore do not remove their Master Password. This is possible due to their exemption from the [SSO Authentication Policy]({{site.baseurl}}/article/policies/#single-sign-on-authentication) and will mitigate some risk by ensuring all Vault data and functionality is always accessible by *someone*.
{% endcallout %}

### Impact on other Features

|Feature|Impact|
|-------|------|
|**Verification**|There are a number of features in Bitwarden client applications that ordinarily require entry of a Master Password in order to be used, including [exporting]({{site.baseurl}}/article/export-your-data/) Vault data, changing [Two-step Login]({{site.baseurl}}/article/setup-two-step-login) settings, retrieving [API Keys]({{site.baseurl}}/article/personal-api-key/), and more.<br><br>**All these features** will replace Master Password confirmation with email-based TOTP verification.|
|**Vault Lock/Unlock**|Under ordinary circumstances, a [locked Vault can be unlocked]({{site.baseurl}}/article/vault-timeout/#vault-timeout-action) using a Master Password. When your Organization is using Key Connector, locked client applications can only be unlocked with a [PIN]({{site.baseurl}}/article/unlock-with-pin/) or with [Biometrics]({{site.baseurl}}/article/biometrics/).<br><br>If neither PIN nor Biometrics are enabled for a client application, the Vault will always log out instead of lock.|
|**Master Password re-prompt**|When Key Connector is being used, [Master Password re-prompt]({{site.baseurl}}/article/managing-items/#protect-individual-items) will be disabled for any user that has removed their Master Password as a result of your Key Connector implementation.|
|**Admin Password Reset**|When Key Connector is being used, [Admin Password Reset]({{site.baseurl}}/article/admin-reset/) will be disabled for any user that has removed their Master Password as a result of your Key Connector implementation.|
|**Emergency Access**|When Key Connector is being used, the Emergency Access [Account Takeover option]({{site.baseurl}}/article/emergency-access/#user-access) will be disabled for any user that has removed their Master Password as a result of your Key Connector implementation.<br><br>Trusted emergency contacts may still **View** a grantor's personal Vault data, subject to the established [emergency access workflow]({{site.baseurl}}/article/emergency-access/#initiate-emergency-access).|

## How do I start using Key Connector?

In order to get started using Key Connector, please review the following requirements:

{% callout warning %}
Management of cryptographic keys is incredibly sensitive and is **only recommended for enterprises with a team and infrastructure** that can securely support deploying and managing a key server.
{% endcallout %}

In order to use Key Connector you must also:

- [Have an Enterprise Organization]({{site.baseurl}}/article/about-bitwarden-plans/#enterprise-organizations)
- [Have a self-hosted Bitwarden server]({{site.baseurl}}/hosting/)
- [Have an active SSO implementation]({{site.baseurl}}/article/about-sso/)
- [Activate the Single Organization and Single Sign-On policies]({{site.baseurl}}/article/policies/)

<br>
If your Organization meets or can meet these requirements, including a team and infrastructure that can support management of a key server, [Contact Us](https://bitwarden.com/contact) and we'll set up a time to help you get started.
