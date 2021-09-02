---
layout: article
title: Onboarding and Succession
categories: [business]
featured: true
popular: false
hidden: false
tags: [onboarding]
order: 10
redirect_from:
  - /article/employee-onboarding-and-succession-white-paper/
---

{% callout success %}
Read the full paper below or [download the PDF](https://bitwarden.com/images/resources/GUIDE-enterprise-password-management-throughout-employee-lifecycle.pdf).
{% endcallout %}

## Password Management to fit your Business

Getting new employees up and running quickly drives productivity. Likewise, saying farewell properly drives assurance in the security of your business's systems and accounts. Whether your business leans towards consolidation and centralization, or prefers a flexible and dynamic environment, Bitwarden fits your needs.

This guide covers the Bitwarden approach to onboarding and succession planning for users in your Organization, starting with our approach to the relationship between users and Organizations, then covering the simplest use-cases for Onboarding and Offboarding, and finally and moving on to the levers and options at your disposal to fit Bitwarden to your needs.

## The Bitwarden Approach

The Bitwarden vision is to imagine a world where no one gets hacked. We carry this forward in our mission to help individuals and companies manage their sensitive information easily and securely. Bitwarden believes that:

- Basic password management for individuals can and should be **free**. We provide just that, a [basic free account for individuals]({{site.baseurl}}/article/about-bitwarden-plans/#free-individual).
- Individuals and Families should take an active role in their security using [TOTPs, Emergency Access, and other supporting security features]({{site.baseurl}}/article/about-bitwarden-plans/#premium-individual).
- Organizations can greatly improve their security profile through [Organizational password management and secure sharing]({{site.baseurl}}/article/about-bitwarden-plans/#bitwarden-for-your-business).

{% callout success %}
For Bitwarden, [different plans]({{site.baseurl}}/article/about-bitwarden-plans/) and options are connected and complementary, all originating in our vision of a hack-free world. Empowering everyone at work **and** at home with password management gets us one step closer to that goal.
{% endcallout %}

A key aspect of Bitwarden is that, unlike many software applications, everything in every a Vault is [end-to-end encrypted]({{site.baseurl}}/article/what-encryption-is-used/). To maintain this security model, every person using Bitwarden must have a unique account with a unique [Master Password]({{site.baseurl}}/article/master-password). Master Passwords should be **strong** and **memorable**.

Each user is in charge of their Master Password. Bitwarden is a Zero-knowledge encryption solution, meaning that the team at Bitwarden, as well as Bitwarden systems themselves, have no knowledge of, way to retrieve, or way to reset any Master Password.

{% callout success %}
Bitwarden is planning a feature in mid-2021 to enable Enterprises to reset their Organization user passwords. This will not impact individual personal accounts that are not connected to an Enterprise organization with this upcoming feature enabled.
{% endcallout %}

### Use Bitwarden Anywhere

Security everywhere means security anywhere, so the best password managers provide access across all your devices. Bitwarden supports a [range of client applications](https://bitwarden.com/download), any of which can be connected to our Cloud-hosted servers or a self-hosted server of your own:

{% image ../images/onboarding-succession/bitwarden-clients-cloud-server.png Bitwarden Clients/Servers %}

### Users' Personal Vaults

Anyone who creates a Bitwarden account will have their own Personal Vault. Accessible from any client application, Personal Vaults are unique to each user and only that user holds the key to access it, using a combination of their Email Address and Master Password. Personal accounts, and the personal [Vault items]({{site.baseurl}}/article/managing-items/) stored therein, are the account owners responsibility. Organization [Owners, Admins, and Managers]({{site.baseurl}}/article/user-types-access-control) cannot see any other user's Personal Vault by design, guaranteeing someone's personal data remains their own.

{% image ../images/onboarding-succession/bitwarden-individual-personal-vault.png Personal Vaults %}

Families, Teams, and Enterprise Organizations automatically provide members individually with premium features, like [Emergency Access]({{site.baseurl}}/article/emergency-access/) and [encrypted Attachment storage]({{site.baseurl}}/article/attachments/), which they can choose to use. A Personal Vault is just that, **Personal**, but Personal Vaults do not enable sharing, [Organization do](#bitwarden-organizations).

{% callout success %}
**Why provide Personal Vaults by default?**

Personal Vaults are an instrumental component of the [Bitwarden approach](#the-bitwarden-approach). Employees use a range of credentials every day, personally and professionally, and **habits formed in one area typically become habits in the other**. In our view, employees that use proper security practices in their personal lives will carry over that good behavior to their professional lives, **protecting your business** in the process.

Using the same tool in both areas helps that habit form faster and easier. Enterprise Organizations have the option to [configure policies](#), including to disable Personal Vaults.
{% endcallout %}

## Bitwarden Organizations

**Bitwarden Organizations** add a layer of collaboration and sharing to password management for your team or enterprise, allowing you to securely share common information like office wifi passwords, online credentials, or shared company credit cards. Secure sharing through Organizations is safe and easy.

{% image ../images/onboarding-succession/bitwarden-organization-collections.png  %}

Anyone can start an Organization directly from the Web Vault:

{% image organizations/new-org-button-overlay.png Create New Organization %}

Once created, you'll land in your Organization Vault, which is the central hub for all things sharing and Organization administration. Whoever launches the Organization will be the [Owner]({{site.baseurl}}/article/user-types-access-control), giving them full control to oversee the **Vault**, to **Manage** users, [Collections](#), [Groups](#), and [Policies](#), to use a suite of Bitwarden **Tools**, and to configure the Organization's **Settings**:

{% image getting-started/org-vault.png Organization Vault %}

### Collections

Bitwarden Organizations manage users and data in a scalable and secure fashion. Managing users and data on an individual basis is inefficient for large businesses and can leave room for error. To solve this, Organizations provide Collections and [Groups](#groups).

**Collections** gather together Logins, Notes, Cards, and Identities for [secure sharing]({{site.baseurl}}/article/sharing/) within an Organization:

{% image organizations/collections-graphic-1.png Using Collections %}

### Onboarding Users

Once your Organization is established and Collections are setup to store your data, Owners and Administrators should invite new members. To ensure the security of your Organization, Bitwarden applies a 3-step process for onboarding new members, [Invite]({{site.baseurl}}/article/managing-users/#invite) &rarr; [Accept]({{site.baseurl}}/article/managing-users/#accept) &rarr; [Confirm]({{site.baseurl}}/article/managing-users/#confirm).

Users can be onboarded [directly from the Web Vault](#adding-users) or [using the Directory Connector](#directory-connector) application to sync individual users and [Groups](#groups).

#### Adding Users

In the simplest cases, users can be added to your Organization directly from the Web Vault. When adding users, you can designate which [Collection](#collections) to grant them access to, which [role](#comprehensive-role--based-access-controls) to give them, and more.

[Learn step-by-step how to add users to your Organization]({{site.baseurl}}/article/managing-users/#onboard-users).

Once users are fully onboarded to your Organization, you can assign access to your Organization's Vault data by assigning them to [Collections](#collections). Teams and Enterprise Organizations can assign users to [Groups](#groups) for scalable permissions assignment, and construct Group-Collection associations instead of assigning access on the individual level.

{% callout success %}
For large Organizations, [Directory Connector](#directory-connector) is the best way to onboard and offboard users at scale.
{% endcallout %}

#### Groups

Groups relate together individual users, and provide a scaleable way to assign permissions including access to [Collections](#collections) and other [access controls](#comprehensive-role--based-access-controls). When onboarding new users, add them to a Group to have them automatically inherit that Groups's configured permissions:

{% image organizations/collections-graphic-2.png Using Collections with Groups %}


#### Comprehensive Role-based Access Controls

Bitwarden takes an enterprise-friendly approach to sharing at scale. Users can be added to the Organization with [a number of different roles]({{site.baseurl}}/article/user-types-access-control/), belong to different [Groups](#groups), and have those Groups assigned to various [Collections](#collections) to regulate access. Among the available roles is a [Custom Role]({{site.baseurl}}/article/user-types-access-control/#custom-role) for granular configuration of administrative permissions.

### Offboarding Users

At Bitwarden, we see sharing of credentials as a vital aspect to getting work done efficiently and securely. We also recognize that once a credential is shared, it is *technically* possible for the recipient to keep it. For that reason, secure onboarding using appropriate [role-based access controls](#comprehensive-role--based-access-controls) and [implementing policies](#) plays an important role in facilitating secure offboarding.

Offboarding users from Bitwarden involves removing users from your Organization, and like onboarding can be done [directly from the Web Vault](#adding-users) or in automated fashion [using the Directory Connector](#directory-connector).

### Sample Offboarding

Alice is a **Manager** in your Organization, which is hosted on the Bitwarden Cloud and uses company email addresses (e.g. `first-last@company.com`). Currently, this is how Jane uses Bitwarden:

|**Client Applications**|Uses Bitwarden on Mobile and a Browser Extension personally and professionally, and the Web Vault for occasional Organization-related work.|
|**Email & Master Password**|Logs in to Bitwarden using `alice@company.com` and `p@ssw0rD`.|
|**Personal Items**|Stores assorted personal items, including Logins and Credit Cards, in her Personal Vault.|
|**Permissions in the Organization**|As a [Manager]({{site.baseurl}}/articles/user-types-access-control/), Jane can manage many aspects of Collections.|
|**Two-step Login**|Uses Organization-wide [Duo 2FA]({{site.baseurl}}/article/setup-two-step-login-duo).|
|**Created Collections**|Created a Collection for her team, "Jane's Team Collection".|
|**Shared Items**|Created and shared several Vault items that are owned by by the Organization and reside in her team's Collection.|

#### Once Offboarded

When Jane is removed from your Organization:

|**Client Applications**|Can continue to use any Bitwarden application to access her Personal Vault, however **all will immediately lose access** to the Organization Vault, all Collections, and all shared items.|
|**Email & Master Password**|Can continue to log in using `alice@company.com` and `p@ssw0rD`, however since she won't have access to her `@company.com` inbox, she should be advised to change the email associated with her Bitwarden account.|
|**Personal Items**|Will still be able to use her Personal Vault and access the items stored therein.|
|**Permissions in the Organization**|Will **immediately lose all permissions over and access to** anything related to the Organization.|
|**Two-step Login**|Won't be able to use Organization Duo 2FA to access her Vault, but can setup one of our free Two-step Login options or upgrade to Premium for more.|
|**Created Collections**|Ownership of Collections and shared items **belongs to the Organization**, so Jane will lose access to "Jane's Team Collection" despite having created it.|
|**Shared Items**|Ownership of Collections and shared items **belongs to the Organization**, so Jane will lose access to all these items despite having created them.|

{% callout success %}
Offline devices cache a read-only copy of Vault data, including Organizational Vault data. If your anticipate malicious exploitation of this, credentials the employee had access to should be updated upon separation.
{% endcallout %}

## Designing your Organization for your Business

At Bitwarden, we often say that password management is people management, and we can fit the workflows suited to your Organization. By offering a wide range of options, shared via our open source approach, customers can rest assured that they can meet their own individual needs.

[Get started today](https://bitwarden.com/pricing/business/) with a free Enterprise or Teams trial.

### Directory Connector

For companies with large user-bases that operate using directory services (LDAP, AD, Okta, and others), Directory Connector can synchronize users and groups from the directory to the Bitwarden Organization. Directory Connector is a stand-alone application that can be run anywhere with access to your directories and to Bitwarden.

{% image onboarding-succession/bitwarden-directory-connector.png Directory Connector %}

Many Bitwarden Teams and Enterprise Organizations focus their onboarding efforts on the Directory Connector and use the Organization Vault administration areas to manage Group-Collection relationships.

Directory Connector will:

- Sync LDAP-based directory groups with Bitwarden Groups
- Sync users within each Group
- Invite new users to join the Organization
- Remove deleted users from the Organization

### Login with SSO

Bitwarden Enterprise Organizations can integrate with your existing Identity Provider (IdP) using SAML 2.0 or OIDC to allow members of your Organization to login to Bitwarden using SSO. Login with SSO separates user authentication from Vault decryption:

**Authentication** is completed to your chosen IdP and retains any two-factor authentication processes connected to that IdP. **Decryption** of Vault data requires the user's individual key, through the Master Password. Using Login with SSO, new Bitwarden users can authenticate into their Bitwarden Vault using their regular SSO credentials and perform decryption of this Vault with their newly created master password. Users that removed from your IdP will no longer be able to authenticate with that path.

This approach ensures that you can:

- Leverage your existing Identity Provider
- Protect the end-to-end encryption of your data
- Provision users automatically
- Configure access with or without SSO
- Decrypt Vault data wile offline

### Enterprise Policies

Enterprise Organizations can implement a variety of Policies designed to lay a secure foundation for any business. Policies include:

- **Two-step Login:** Require users to set up two-step login on their personal accounts.
- **Master Password:** Set minimum requirements for master password strength.
- **Password Generator:** Set minimum requirements for password generator configuration.
- **Single Organization:** Restrict users from being able to join any other organizations.
- **Personal Ownership:** Require users to save vault items to an organization by removing the personal ownership option.

{% callout success %}
The **Personal Ownership** policy, for example, fits into earlier discussion regarding the interplay between Personal Vaults and Organization Vaults. Some companies may desire the assurance of have all credentials retained in the Organization Vault. A possible implementation could involve allowing each individual user to have their own Collection, which unlike Personal Vaults could be overseen by Organization Owners and Admins.
{% endcallout %}

### Event Logs

Bitwarden Organizations include access to [Event Logs]({{site.baseurl}}/article/event-logs), which can be viewed directly from the Web Vault or [exported to be analyzed]({{site.baseurl}}/article/event-logs/#siem-and-external-systems-integrations) within security information and event management (SIEM) systems like Splunk. Event Logs include information about:

- User-Item interactions
- Changes made to Vault items
- Onboarding Events
- Organization Configuration Changes
- Much, much more

{% callout success%}
In addition to these benefits, customers appreciate the ability to tightly integrate Bitwarden into their existing systems. Bitwarden offers a robust public [API](https://bitwarden.com/help/api/) and a fully-featured command line interface ([CLI](https://bitwarden.com/help/article/cli/)) for further integration into existing Organization workflows.
{% endcallout %}

### Self-hosting

In keeping with the Bitwarden approach to offer password management anywhere and everywhere, Bitwarden provides an option
to self-host to address an even wider range of use cases for Enterprises. There are many reasons for a company to choose to self-host. Specifically when it comes to onboarding, offboarding, and enhanced features, here are some of the reasons companies choose to do so:

- **Immediate deletion of user accounts:** Because you control the server, users can be deleted entirely (including their Personal Vaults).
- **Network access control**: Organization Owners can determine which network access employees must use to access their Bitwarden server.
- **Advanced proxy settings:** Administrators can choose to enable or disable certain types of devices from accessing the Bitwarden Server.
- **Use an existing database cluster:** Connect to an existing Microsoft SQL Server database. Additional databases will be supported in the future.
- **Increase storage for file attachments and Bitwarden Send:** File attachments for Bitwarden items or Bitwarden Send are retained on user-provided storage.

## Put the Pieces Together

Directory Connector, Login with SSO, Enterprise Policies, and your Vault work well individually or in harmony to optimize your onboarding, offboarding, and Organization management experience. The following table details how that it might look to string together these pieces into one smooth process:

|Step|Description|
|----|-----------|
|**Synchronize**|Use Directory Connector to sync groups and users to Bitwarden from your existing directory service.|
|**Invite**|Directory Connector will automatically issue invitations to synced users.|
|**Authenticate**|Pair your Login with SSO implementation with the SSO Policy to require users to sign up with SSO when they accept their invitations.|
|**Administer**|Use the Web Vault interface to promote some users to different roles and to ensure Group-Collection relationships are configured to grant the right access to the right users.|
|**Re-synchronize**|Periodically re-run Directory Connector to remove users from Bitwarden that are no longer active in your directory service and to start onboarding for new hires.|


## FAQs

#### Q: If an employee already has a Bitwarden account, can we attach it to the Organization so they don't need another Bitwarden account?

**A:** Yes! You can. Some customers recommend that prior to attaching users to the Organization, that those users have a Bitwarden Vault attached to their company email. This choice is company-specific and either approach works.

#### Q: When an employee leaves, can we detach their account from the Organization so that they don't have access to company credentials anymore and they do not lose their personal credentials?

**A:** Yes! That's exactly what [offboarding entails](#offboarding-users).

#### Q: Can we prevent employees from duplicating credentials from the company Organization to their Personal Vault

**A:** Yes! Using our [comprehensive suite of role-based access controls]({{site.baseurl}}/article/user-types-access-control/#access-control) you can make credentials **Read Only** to prevent duplication.
