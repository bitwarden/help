---
layout: article
title: Login with SSO FAQs
categories: [faqs, login-with-sso]
featured: true
popular: false
hidden: false
tags: [sso, enterprise, security]
order: 07
---
This article contains Frequently Asked Questions (FAQs) regarding **Login with SSO** in the following categories:

- [Using Login with SSO](#using-login-with-sso)
- [Security](#security)
- [Billing](#billing)
- [Supportability](#supportability)

Or, for more high-level information about **Login with SSO**, refer to the following articles:
- [About Login with SSO](https://bitwarden.com/help/article/sso-about/)
- [About the Business Portal](https://bitwarden.com/help/article/about-business-portal/)

## Using Login with SSO

### Q: Will changing my SSO password affect my Bitwarden Master Password?

  **A:** No. Your Master Password will remain the same and will still be used to decrypt your Vault data.

### Q: Does SSO authentication replace my Master Password and Email?

  **A:** No. Login with SSO leverages your existing Identity Provider (IdP) to authenticate you into Bitwarden, however your Master Password and Email must still be entered in order to decrypt your Vault data.

### Q: Can I still log in with my Master Password if my Organization has SSO enabled?

  **A:** Currently, yes. In the near future, we will enable an Enterprise Policy to allow Organizations to enforce authentication mechanism for their users.

### Q: How does Login with SSO work for new users ("just-in-time")?

  **A:** New users who log into their Organization using Login with SSO will be placed in the *Accepted* status of their Organization until they are confirmed by an administrator. When that user is assigned to a Group manually or via the Bitwarden Directory Connector, they will receive access to the appropriate shared items.

### Q: Do I still need to use Bitwarden Directory Connector?

  **A:** If you manage your Bitwarden Group and Collection assignments directly within Bitwarden, there is no need to leverage the Directory Connector. However, if you would like to have Groups and users automatically synchronized with your organizations directory, we recommend using Login with SSO in conjunction with Directory Connector for the most complete solution.

## Security

### Q: How does Login with SSO work with the zero-knowledge model?

  **A:** Bitwarden Login with SSO only performs user authentication and does not decrypt user data. Adding SSO functionality does not introduce any further individually identifiable information into the Bitwarden database.

## Billing

### Q: What plans offer Login with SSO?

**A:** Only our current (2020) Enterprise Plan offers this feature. To upgrade from a Classic Enterprise 2019 Plan to the current Enterprise offering, please [Contact Us](https://bitwarden.com/contact).

### Q: Can I change to the new subscription plan with Login with SSO, and then go back to the old subscription plan if we decide we don’t need the feature?

**A:** Once you elect to move forward with the new subscription plan, going back to your previous subscription plan will not be an option.

## Supportability

### Q: Does Bitwarden support OAuth 2.0?

**A:** Bitwarden supports OpenID Connect, but does not support OAuth at this time.

### Q: Will Login with SSO work with a self-hosted instance of Bitwarden?

**A:** Yes! Login with SSO will work with self-hosted instances regardless of whether they are on-premises or in your own cloud, as long as your Identity Server is reachable from the instance.

### Q: Does Login with SSO work across hybrid cloud environments?

**A:** Yes! Login with SSO only requires the ability to connect to your Identity Provider from your instance of Bitwarden. It can be used with Cloud or on-premises Identity providers, as well as Cloud or self-hosted Bitwarden instances.

### Q: If my Identity Provider is offline, can users user Login with SSO to authenticate into Bitwarden?

**A:** If your Identity Provider is offline, users must log in using their email and Master Password. This may change in the future as we enable further authentication control mechanisms for Organizations.
