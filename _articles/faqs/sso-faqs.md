---
layout: article
title: Login with SSO FAQs
categories: [login-with-sso]
featured: true
popular: false
hidden: false
tags: [sso, enterprise, security]
order: 07
---
This article contains Frequently Asked Questions (FAQs) regarding **Login with SSO**.

For more high-level information about **Login with SSO**, refer to the following articles:
- [Getting Started with Login with SSO](https://bitwarden.com/help/article/getting-started-with-sso/)
- [About the Business Portal](https://bitwarden.com/help/article/about-business-portal/)

## Using Login with SSO

### Q: Will changing my SSO password affect my Bitwarden Master Password?

  **A:** No. Your Master Password will remain the same and will still be used to decrypt your Vault data.

### Q: Does SSO authentication replace my Master Password and Email?

  **A:** No. Login with SSO leverages your existing Identity Provider (IdP) to authenticate you into Bitwarden, however your Master Password and Email must still be entered in order to decrypt your Vault data.

### Q: Can I still log in with my Master Password if my Organization has SSO enabled?

  **A:** By default, yes, you can use your email address and Master Password to login to Bitwarden. However, if your Organization enables both the [Single Organization](https://bitwarden.com/help/article/policies/#single-organization) and [Single Sign-On Authentication](https://bitwarden.com/help/article/policies/#single-sign-on-authentication) policies, all non-administrator users will be required to login with SSO.

### Q: How does Login with SSO work for new users ("just-in-time")?

  **A:** New users who log into their Organization using Login with SSO will be placed in the *Accepted* status of their Organization until they are confirmed by an administrator. When that user is assigned to a Group manually or via the Bitwarden Directory Connector, they will receive access to the appropriate shared items.

### Q: Do I still need to use Bitwarden Directory Connector?

  **A:** If you manage your Bitwarden Group and Collection assignments directly within Bitwarden, there is no need to leverage the Directory Connector. However, if you would like to have Groups and users automatically synchronized with your organizations directory, we recommend using Login with SSO in conjunction with Directory Connector for the most complete solution.

### Q: Do I need to enter my Organization Identifier every time I login?

  **A:** Nope! Bookmarking the **Enterprise Single Sign-On** page with your Organization Identifier included as a query string will save you the trouble of entering it each time. For example:

  - `https://vault.bitwarden.com/#/sso?identifier=your-org-id` for Cloud-hosted instances
  - `https://your.domain.com/#/sso?identifier=your-org-id` for Self-hosted instances

## Security

### Q: How does Login with SSO work with the zero-knowledge model?

  **A:** Bitwarden Login with SSO only performs user authentication and does not decrypt user data. Adding SSO functionality does not introduce any further individually identifiable information into the Bitwarden database.

## Billing

### Q: What plans offer Login with SSO?

**A:** Only our current Enterprise Plan offers this feature. For more information, see [here](https://bitwarden.com/help/article/2020-plan-updates/).

### Q: How do I upgrade my plan so that I can use Login with SSO?

**A:** [Contact Us](https://bitwarden.com/contact/) and select **Upgrade/Change Plan** from the **Subject** dropdown menu. We highly recommend you test Login with SSO by starting a [7 Day Enterprise Free Trial](https://bitwarden.com/help/article/enterprise-free-trial).

### Q: I would like to test Login with SSO. If I decide I don't need it, can I revert to my Classic 2019 plan?

**A:** Unfortunately, we aren't able to revert you back to a Classic 2019 plan once you've upgraded. We recommend creating a new Organization to start a [7 Day Enterprise Free Trial](https://bitwarden.com/help/article/enterprise-free-trial/) to test Login with SSO outside of your Primary Organization.

## Supportability

### Q: Does Bitwarden support OAuth 2.0?

**A:** Bitwarden supports OpenID Connect, but does not support OAuth at this time.

### Q: Will Login with SSO work with a self-hosted instance of Bitwarden?

**A:** Yes! Login with SSO will work with self-hosted instances regardless of whether they are on-premises or in your own cloud, as long as your Identity Server is reachable from the instance.

### Q: Does Login with SSO work across hybrid cloud environments?

**A:** Yes! Login with SSO only requires the ability to connect to your Identity Provider from your instance of Bitwarden. It can be used with Cloud or on-premises Identity providers, as well as Cloud or self-hosted Bitwarden instances.

### Q: If my Identity Provider is offline, can users user Login with SSO to authenticate into Bitwarden?

**A:** If your Identity Provider is offline, users must log in using their email and Master Password. This may change in the future as we enable further authentication control mechanisms for Organizations.
