---
layout: article
title: Deployment Bitwarden as an MSP
categories: [organizations]
featured: false
popular: false
hidden: true
tags: [tutorial]
---

# Deploying Bitwarden as an MSP
Today, Bitwarden supports a reseller and managed service provider (MSP) model. This article details one recommended configuration to set partners and their customers up for success.

## Create an Organization
Bitwarden Organizations are used for sharing items across multiple users.

An MSP or the client can create an Organizational Vault for the business (Business X). Organizational Vaults will contain the business-specific Logins, Cards, Identity, and Notes.

Some MSPs choose to create the Organization on behalf of their client as a value added service. If the client chooses to launch the Organization, make sure to designate an owner and administrator from the MSP team.

Once the Organization is configured, you should invite other administrators to join. This is an important step for setting a foundation of security for the MSP team, as well as the client team. 

Note: Adding a new user to an Organization involves three steps: Invite, Accept, and Confirm. Give users a heads-up once Invite emails are sent, so they are aware they need to accept the invitation to join the Organization.

Administrators can access and manage all Items, Collections, and users in the Organization. You’ll want to share your administrative duties with another person, especially if you have a large number of users.

Continue to create an Organization for **each** of your clients (Business Y, Business Z). 

You will need to select a Subscription Plan for each Organization--either Teams or Enterprise, depending on which features and functionality will suit the client’s needs. For the most robust set of business features, we recommend Enterprise Plans. 

Note: An Organization could be a team, company, department, or any other type of group that desires to share items.

Read more: [Password Sharing with Organizations ](https://bitwarden.com/blog/post/password-sharing-with-organizations/)

## Assign an Administrative Seat to Every Organization 
Once an Organization is created for each business, assign one or multiple seats as an Administrative Seat for each Organization. This administrative seat allows MSPs to maintain the account, processes, and organize passwords on behalf of clients.

Further, this administrative role on behalf of a client enables MSPs to provide a wide range of value added services to clients. Some of these services may include Organization design and implementation, onboarding training, Directory services, groups and collection management, and others. 

Multiple owners can be assigned to an Organization. We recommend this approach of multiple owners and administrators for redundancy and full coverage. 

## Build Collections
Once an Organization is configured, start adding passwords and then organizing passwords into Collections.
 
Collections are a set of related items, such as logins, shared within an Organization’s Vault. Managing Collections is a simple way to separate, grant, or limit access to Vault items in Bitwarden, thereby controlling user visibility of resources.

Read more: [How to Effectively Manage Bitwarden Collections](https://bitwarden.com/help/article/how-to-manage-collections/)

## Start Sharing
Share items by creating them within the Organizational Vault, or creating them in a Personal Vault and then sharing them with the Organization. We recommend the former, starting in the Organizational Vault, and putting passwords into a Collection as soon as possible. 

Read more: [Share within an Organization](https://bitwarden.com/help/article/getting-started-organizations/#7-sharing-within-an-organization)

## User Management
These user management strategies apply to MSPs as well as end-users and Clients.

### Onboarding and Deprovisioning
Adding a new user to an Organization involves three steps: Invite, Accept, and Confirm. To remove a user from an Organization, select the Remove option from the options menu for that user. 

Read more: [Managing Users for your Organization] (https://bitwarden.com/help/article/managing-users/)
### Adding and Removing User Seats
Administrators and owners can add or remove user seats at any time. 

Read more: [User Seat Management for your Organization] (https://bitwarden.com/help/article/user-seats/)
### Syncing Users and Groups with a Directory
The Bitwarden Directory Connector synchronizes with outside directories of users and/or groups. This function can save time by automatically provisioning and deprovision users, groups, and group associations from the existing user directory. 

Directory Sync can be configured on a per-Organization basis.

Read more: [Syncing Users and Groups with a Directory] (https://bitwarden.com/help/article/directory-sync/)
## Best Practices and Other Information
### Cross-Platform Accessibility
One of the best parts about Bitwarden is that end-users can access it anytime, anywhere, from any device and any platform. 

Encourage clients and end-users to [download](https://bitwarden.com/download/) Bitwarden for the operating systems and browsers they use the most. 
### Training
Bitwarden is easy-to-use no matter if you are highly technical or more of a typical computer user. There are many [training videos](https://www.youtube.com/c/Bitwarden/videos) on the Bitwarden YouTube channel.

Additionally, Bitwarden hosts webcasts, demos, and Vault hours (our version of “office hours”) to regularly keep in touch with our customers and provide educational opportunities. Stay up-to-date on these events by following us on [Twitter](https://twitter.com/bitwarden).
### Company Credentials and Personal Credentials 
Bitwarden recommends every end-user take advantage of their personal Vault to store their private information and secrets. 

Company credentials should be stored in the Organizational Vault and put into a Collection appropriate for team use. Personal credentials should be stored in personal Vaults. This way, if an end-user parts way with the company, both parties can ensure smooth success. The employee retains access to their personal items, but will not have access to Organizational items. 

If you have additional questions or feedback, feel free to reach out to the [Bitwarden sales team](https://bitwarden.com/contact).
