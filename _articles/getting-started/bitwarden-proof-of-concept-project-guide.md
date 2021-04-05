---
layout: article
title: Bitwarden Proof-of-Concept Project Guide
categories: [getting-started]
featured: false
popular: false
hidden: true
tags: [porject guide, poc]
order: 7
---

## Required POC Checklist 


|         Day         | Step |Key Person| Action | Help Article | Duration (hrs)
|:---------------------------------:|:--------------------------------|:--------------------------------------------------------------------:|:-----------------------------------|:-----------------------------------------------:|:-----------------------------------------------:|
| 1                    | Identify Organization Owner         | Organization Owner                                                      | Create a free user account on [vault.bitwarden.com](https://vault.bitwarden.com) using the email intended for Organization ownership and administration.                        |                               |  0.1|
 1             | Create Organization          | Organization Owner     | Create a **free** Organization on Bitwarden Cloud at [vault.bitwarden.com](https://vault.bitwarden.com). This will be used for billing purposes even if self-hosted. Once the free Organization is created, let Bitwarden know and we will upgrade the trial to Enterprise status for you. |  [About Organizations](https://bitwarden.com/help/article/what-is-an-organization/)                               |  0.1
 |1 | If self-hosting, download a license file for your self-hosted installation.  | Organization Owner                                                      |This is required to enable the Enterprise Organization functionality and set the number of user seats available for use.                    | [License Paid Features](https://bitwarden.com/help/article/licensing-on-premise/#organization-account-sharing)                             |  0.1
  |1 | Install self-hosted instance (if applicable)          | Organization Owner / IT Team                                                      |We recommend deploying on Linux OS for best performance and lowest total cost of ownership.                       | [Install and Deploy](https://bitwarden.com/help/article/install-on-premise/)                               |  2.5
  |1 | Add additional administrators | Organization Owners + Admins  | Add Administrators to the Organization as needed. We also recommend configuring a second Owner for redundancy.      | [Add or Remove Users](https://bitwarden.com/help/article/managing-users/)  |  0.2
  |2 |Create test Collections for Administrators and POC users to share          | Organization Owners + Admins                                                      | Collections are the method of sharing secure items with Groups of users.                        | [About Collections](https://bitwarden.com/help/article/about-collections/)     |  0.25 |
  | 2                    | Create test Groups for managing POC users         | Organization Owners + Admins                                                      | Creating Groups allows easy assignment of Collections. Please note: If you decide to sync Groups and users from your Identity Provider or Directory Service, you may need to reconfigure user and Group assignments later.                       |    [About Groups](https://bitwarden.com/help/article/groups/)                          |  0.25    
  | 2     | Assign test Collections to test Groups to begin sharing passwords | Organization Owners + Admins     | Assign Groups to Collections, making sure to test and demonstrate 'Read Only' and 'Hide Password' options. |  [User Types and Access Control](https://bitwarden.com/help/article/user-types-access-control/)   |  .5|
  2 | Add items to test Collections  | Organization Owners + Admins      |Add items manually or import via CSV or JSON from another password management application.                 | [Import Data to Your Vault](https://bitwarden.com/help/article/import-data/)                     |  0.25
  |2 |Configure Enterprise Policies Note: Any Policies should be enabled prior to user invitation. The 2FA policy being enabled after user invitation will cause a duplicate of efforts onboarding users | Organization Owners + Admins  | Best practice is to enable and configure all policies before user onboarding begins.                  | [Enterprise Policies](https://bitwarden.com/help/article/policies/)                             |  0.1
|3 | Add short term users to POC Groups manually | Organization Owners + Admins | A recommended best practice while automated functions are tested.      | [Add or Remove Users](https://bitwarden.com/help/article/managing-users/)  |  0.5
|3 |Download and login to Bitwarden Client Applications    |All POC users                 | Download and implement Bitwarden client applications to confirm proper configuration for secure data sharing, and intended Enterprise Policies are working, and onboarding function is successful.Note: Self-hosted users will need to set the client's environment: [Connect Clients to Your Instance](https://bitwarden.com/help/article/change-client-environment/)        | [Download Bitwarden](https://get.bitwarden.com)  |  0.5 |
|4-6 |Configure Login with SSO    |Organization Owners + Admins   | Create an Organization identifier Configure to work with SAML 2.0 or OpenID Connect  | [Auto Login With SSO](https://bitwarden.com/help/article/getting-started-with-sso/)    |  1.5 |
|4-6 |Test and confirm long-term user onboarding with Directory Connector   |Organization Owners + Admins       | Download/configure the Bitwarden Directory Connector application and test Group and user sync.      | [Auto Directory Connector](https://bitwarden.com/help/article/directory-sync/)                               |  1.5 |
|4-6 |Configure Directory Connector to invite remainder of users    |Organization Owners + Admins                 | Invitation process Including secure offboarding|                               |  1 |

## Recommended Deployment Best Practices

|         Day         | Step |Key Person| Action | Help Article | Duration (hrs)
|:---------------------------------:|:--------------------------------|:--------------------------------------------------------------------:|:-----------------------------------|:-----------------------------------------------:|:-----------------------------------------------:|
| 7                   | Determine timeline for rollout to initial wave         | Senior leadership / Security teams                                                      |                        |                               |  |
 7         | Create internal messaging / memo about Bitwarden rollout          | Internal training / managers     | Check out Bitwarden tutorial videos on Youtube and the Bitwarden Help Center. |  [youtube.com/bitwarden](http://youtube.com/bitwarden)  [bitwarden.com/help](https://bitwarden.com/help/)                             |  
 |7 | Communicate to internal leaders about Password Management policies  | Internal leaders / Security teams                                                      |  |                     |  
  | |     |                                                     |      |                  |  
  | |  |      | | **Total hours (Bitwarden Cloud)**  |  **7.35**
  | |        |                                                      |                | **Total Hours (Self-hosted)**    |  **9.85** |
