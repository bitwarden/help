---
layout: article
title: Login with SSO FAQs
categories: [faqs, miscellaneous, login-with-sso]
featured: true
popular: false
hidden: false
tags: [sso, enterprise, security]
---
## Table of Contents

- [Login with SSO FAQs](#login-with-sso-faqs)
  * [Q: How does the new Login with SSO capability work?](#q-how-does-the-new-login-with-sso-capability-work)
  * [Q: Can I see workflows for the technical specifications and end-users?](#q-can-i-see-workflows-for-the-technical-specifications-and-end-users)
  * [Q: How does Bitwarden SSO integration work with the zero-knowledge model?](#q-how-does-bitwarden-sso-integration-work-with-the-zero-knowledge-model)
  * [Q: Do I still need to use Bitwarden Directory Connector?](#q-do-i-still-need-to-use-bitwarden-directory-connector)
  * [Q: Will changing my SSO password affect my Master Password?](#q-will-changing-my-sso-password-affect-my-master-password)
  * [Q: Can I still log in with my Master Password if my Organization has SSO enabled?](#q-can-i-still-log-in-with-my-master-password-if-my-organization-has-sso-enabled)
  * [Q: Does SSO authentication Replace my Master Password and Email?](#q-does-sso-authentication-replace-my-master-password-and-email)
  * [Q: Can existing users login with SSO?](#q-can-existing-users-login-with-sso)
  * [Q: How does Login with SSO work for new users (just-in-time)?](#q-how-does-login-with-sso-work-for-new-users--just-in-time)
  * [Q: Will this work with a self-hosted instance of Bitwarden?](#q-will-this-work-with-a-self-hosted-instance-of-bitwarden)
  * [Q: Does Login with SSO work across hybrid cloud environments?](#q-does-login-with-sso-work-across-hybrid-cloud-environments)
  * [Q: Is it possible to use SSO and non-SSO authentication for the same organization?](#q-is-it-possible-to-use-sso-and-non-sso-authentication-for-the-same-organization)
  * [Q: Will Login with SSO be available on all Bitwarden client applications?](#q-will-login-with-sso-be-available-on-all-bitwarden-client-applications)
  * [Q: If my Identity Provider is offline, can users get into Bitwarden?](#q-if-my-identity-provider-is-offline--can-users-get-into-bitwarden)
  * [Q: How do I test the new feature?](#q-how-do-i-test-the-new-feature)
  * [Q: Do you support OAuth 2.0?](#q-do-you-support-oauth-20)
  * [Q: What Plans offer Login with SSO?](#q-what-plans-offer-login-with-sso)
  * [Q: I am a current Teams customer considering implementing SSO. Can I add Login with SSO to my Teams Plan?](#q-i-am-a-current-teams-customer-considering-implementing-sso-can-i-add-login-with-sso-to-my-teams-plan)
  * [Q: We are an existing Enterprise customer. Will we be able to use the new Login with SSO on our existing subscription plan?](#q-we-are-an-existing-enterprise-customer-will-we-be-able-to-use-the-new-login-with-sso-on-our-existing-subscription-plan)
  * [Q: Can I change to the new subscription plan with Login with SSO, and then go back to the old subscription plan if we decide we don’t need the feature?](#q-can-i-change-to-the-new-subscription-plan-with-login-with-sso--and-then-go-back-to-the-old-subscription-plan-if-we-decide-we-don-t-need-the-feature)
- [Business Portal FAQs](#business-portal-faqs)
  * [Q: What is the Business Portal?](#q-what-is-the-business-portal)
  * [Q: Who can see the Business Portal?](#q-who-can-see-the-business-portal)
  * [Q: What value does the Business Portal offer?](#q-what-value-does-the-business-portal-offer)


## Login with SSO FAQs

### Q: How does the new Login with SSO capability work?

**A:** Implementing Bitwarden Login with SSO option separates user authentication from Vault encryption.  Logging in with SSO will authenticate your Bitwarden session using an existing Identity Provider (IdP) session if it exists, and leverage any currently implemented MFA rules.

Once authenticated in, after providing (or creating) your Master Password, your personal Bitwarden Vault data will be decrypted for viewing.

The current distinction between authentication and Vault encryption keeps the audited Bitwarden security model intact.

### Q: Can I see workflows for the technical specifications and end-users?

**A:** View the Login with SSO technical workflow [here](https://bitwarden.com/help/article/getting-started-with-sso/#workflow) and the end-user process [here](https://bitwarden.com/help/article/getting-started-with-sso/#logging-in-with-sso).

### Q: How does Bitwarden SSO integration work with the zero-knowledge model?

**A:** Bitwarden Login with SSO only performs user authentication and does not decrypt user data. Adding SSO functionality does not introduce any further individually identifiable information into the Bitwarden database.

### Q: Do I still need to use Bitwarden Directory Connector?  

**A:** If you \ manage your Bitwarden Group and Collection assignments directly within Bitwarden, there is no need to leverage the Directory Connector. However, if you would like to have Groups and users automatically synchronized with your organizations directory, we recommended using Login with SSO in conjunction with Directory Connector for the most complete solution.

### Q: Will changing my SSO password affect my Master Password?

**A:** No, your Master Password will remain the same and will still be used to decrypt your Vault data. If ever needed, you can change your Master Password in the Web Vault.

### Q: Can I still log in with my Master Password if my Organization has SSO enabled?

**A:** Currently, yes. In the near future, we will enable an Enterprise Policy to allow Organizations to set the authentication mechanism for their users.

### Q: Does SSO authentication Replace my Master Password and Email?

**A:** No, SSO authentication is meant to provide an easier way for Organizations to facilitate Organization users, allow just-in-time new user provisioning, centralized MFA, and in the near future, improved employee succession management.

### Q: Can existing users login with SSO?

**A:** Yes, but they will need to first link their existing Bitwarden account to the Organization Identity Provider. You can find instructions [here.](https://bitwarden.com/help/article/getting-started-with-sso/#linking-an-existing-user)

### Q: How does Login with SSO work for new users (just-in-time)?

**A:** New users who log into their Organization with SSO will be placed in the Accepted status of their Organization [Manage > People] until they are confirmed by an Administrator. If that user is then assigned to a Group manually, or via the Bitwarden Directory Connector, they will receive access to the appropriate shared items at that time.

### Q: Will this work with a self-hosted instance of Bitwarden?

**A:** Yes! It will work with self-hosted regardless of whether it is on-premises or in your own cloud, as long as your Identity Server is reachable from the Bitwarden instance.

### Q: Does Login with SSO work across hybrid cloud environments?

**A:** Yes. Our Login with SSO function only requires the ability to connect to your Identity Provider from your instance of Bitwarden. It can be used with Cloud or on-premises Identity providers, as well as Cloud or self-hosted Bitwarden instances.

### Q: Is it possible to use SSO and non-SSO authentication for the same organization?

**A:** Yes, it is currently possible to leverage either SSO or the default Bitwarden authentication. Organizations will have the ability to set options as Enterprise policies are introduced.

### Q: Will Login with SSO be available on all Bitwarden client applications?

**A:** Yes - SSO is available for:
- Web Vault
- Browser extensions
- Desktop
- Mobile
- CLI - with the caveat that the CLI machine *must* have a web browser available (no windowless environments)

### Q: If my Identity Provider is offline, can users get into Bitwarden?

**A:** If your Identity Provider is offline, currently users can log in using their email address and Master Password. This option may change in the future as we enable further authentication control mechanisms for Organizations.

### Q: How do I test the new feature?

**A:** We recommend you test the feature using the Bitwarden free 7-day Enterprise trial with a trial organization. Once you understand the feature in your test environment, you can upgrade your primary organization to the new Enterprise Plan at any time.

### Q: Do you support OAuth 2.0?

**A:** We support OpenID Connect, but we do not support OAuth itself right now.

### Q: What Plans offer Login with SSO?

**A:** Our current Enterprise plan offers this feature. To upgrade from a Classic Enterprise 2019 Plan to the current Enterprise offering, please [contact us](https://bitwarden.com/contact).

### Q: I am a current Teams customer considering implementing SSO. Can I add Login with SSO to my Teams Plan?

**A:** No, the new feature is only available on the current Enterprise Plan. You would need to upgrade your plan to enable SSO.

### Q: We are an existing Enterprise customer. Will we be able to use the new Login with SSO on our existing subscription plan?

**A:** To use Login with SSO you would need to move to the upgraded plan. For current customers on a 2019 plan who are able to participate in a case study, we are offering a consideration to make the migration to the new plan easy. If you are interested in upgrading your plan or participating in the case study, Contact the Bitwarden sales team [here] (bitwarden.com/contact).

### Q: Can I change to the new subscription plan with Login with SSO, and then go back to the old subscription plan if we decide we don’t need the feature?

**A:** Once you elect to move forward with the new subscription plan, going back to your previous subscription plan will not be an option.

## Business Portal FAQs

### Q: What is the Business Portal?

**A:** The Business Portal is the Organization management area that allows Owners and Administrators to set Enterprise Policies and SSO configurations. Future Enterprise features will also be added to the Business Portal. Classic 2019 Enterprise plans will only display Enterprise Policy management options.

### Q: Who can see the Business Portal?

**A:** Enterprise Organization owners and Administrators can see the Business Portal link.

### Q: What value does the Business Portal offer?

**A:** The Business Portal separates Organization configuration from encrypted Vault data and allows for more segmented and role-based access for Administrators.
