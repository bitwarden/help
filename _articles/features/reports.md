---
layout: article
title: Vault Health Reports
categories: [account-management]
featured: false
popular: false
tags: [account, report, breach, reused, unsecured, weak]
order: 15
---

Vault Health Reports can be used to evaluate the security of your Bitwarden Personal or Organization Vault.

{% callout info %}
Vault Health Reports are available for Premium users, including members of Paid Organizations (Families, Teams, or Enterprise).
{% endcallout %}

## View a Report

Complete the following steps to view any Vault Health Report for your **Personal Vault**:

1. Log in to the [Web Vault](https://vault.bitwarden.com){:target-"\_blank"}.
2. Select **Tools** from the top navigation bar.
3. Select a report from the **Reports** section of the left menu.

Complete the following steps to view any Vault Health Reports for your **Organization Vault**:

1. Log in to the [Web Vault](https://vault.bitwarden.com){:target-"\_blank"} and open your Organization.
2. In your Organization, open the **Tools** tab.

   {% image features/reports/tools-section.png Organization Reports %}
3. Select a report from the **Reports** section of the left menu.

## Available Reports

### Exposed Passwords Report

The **Exposed Passwords Report** identifies passwords that have been uncovered in known data breaches that were released publicly or sold on the dark web by hackers.

This report uses a trusted web service to search the first 5 digits of the hash of all your passwords in a database of known leaked passwords. The returned matching list of hashes is then locally compared with the full hash of your passwords. That comparison is only done locally to preserve your [k-anonymity](https://en.wikipedia.org/wiki/K-anonymity){:target="_blank"}.

Once identified, you should create a new password for offending accounts or services.

{% callout success %}
**Why use the first 5 digits of password hashes?**

If the report was performed with your actual passwords, it doesn't matter if they were exposed or not, you would be voluntarily leaking it to the service. This report’s result may not mean your individual account has been compromised, rather that you are using a password that has been found in these databases of exposed passwords, however you should avoid using leaked and non-unique passwords.
{% endcallout %}

### Reused Passwords Report

The **Reused Passwords Report** identifies non-unique passwords in your Vault. Reusing the same password for multiple services can allow hackers to easily gain access to more of your online accounts when one service is breached.

Once identified, you should create a unique password for offending accounts or services.

### Weak Passwords Report

The **Weak Passwords Report** identifies weak passwords that can easily be guessed by hackers and automated tools that are used to crack passwords, sorted by severity of the weakness. The Bitwarden Password Generator can help you create stronger passwords.

Once identified, you should use Bitwarden's Password Generator to create a strong password for offending accounts or services.

### Unsecured Websites Report

The **Unsecured Websites Report** identifies Login items that use unsecured (`http://`) schemes in URIs. It's much safer to use `https://` to encrypt communications with TLS/SSL. To learn more, see [Using URIs]({% link _articles/features/uri-match-detection.md %}).

Once identified, you should change offending URIs from `http://` to  `https://`.

### Inactive 2FA Report

The **Inactive 2FA Report** identifies Login items where:
- Two-factor Authentication (2FA) via TOTP is available from the service
- You have not stored a TOTP Authenticator Key

Two-factor Authentication (2FA) is an important security step that helps secure your accounts. If any website offers it, you should always enable 2FA. Offending items are identified by cross-referencing URI-data with data from [https://2fa.directory/](https://2fa.directory/){:target="_blank"}.

Once identified, setup 2FA using the `Instructions` hyperlink for each offending item:

{% image features/reports/inactive-2fa.png %}

### Data Breach Report (*Personal Vaults only*)

The **Data Breach Report** identifies compromised data (email addresses, passwords, credit cards, DoB, etc.) in known breaches, using a service called Have I Been Pwned (HIBP).

A “breach” is defined by HIBP as "an incident where data is inadvertantly exposed in a vulnerable system, usually due to insufficient access controls or security weaknesses in the software". For more information, refer to [HIBP's FAQs documentation](https://haveibeenpwned.com/FAQs){:target="\_blank"}.

{% callout info %}
If you are self-hosting Bitwarden, in order to run the **Data Breach Report** report in your instance you will need to buy an HIBP subscription key that will authorize you to make calls to the API, obtained [here](https://haveibeenpwned.com/API/Key){:target="_blank"}.

Once you have the key, open your `./bwdata/env/global.override.env` and REPLACE the placeholders value for `globalSettings__hibpApiKey` with your purchased API key:

```
globalSettings__hibpApiKey=REPLACE
```

For more information, see [Configure Environment Variables]({% link _articles/hosting/environment-variables.md %}).
{% endcallout %}
