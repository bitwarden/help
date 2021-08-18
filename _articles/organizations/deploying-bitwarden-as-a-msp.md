---
layout: article
title: Deploying Bitwarden as an MSP
categories: [organizations]
featured: false
popular: false
hidden: false
tags: [MSPs, Organizations, Collections, Groups]
order: 16
---

Bitwarden supports a reseller and Managed Service Provider (MSP) model. You can get started right away, no formal agreement needs to be signed. If you are looking for information about the Bitwarden Partner Program, look no further.

This article details *one recommended* implementation to set partners and their customers up for success, and addresses some common questions about our Partner Program.

## Bitwarden Organizations

Bitwarden Organizations relate users and Vault items together for [secure sharing]({{site.baseurl}}/article/share-to-a-collection/) of Logins, Notes, Cards, and Identities. Organizations could be a family, team, company or any group of people that needs to securely share data. Organizations have a unique Vault, where [administrators]({{site.baseurl}}/article/user-types-access-control/) can manage the Organization's items, users, and settings:

{% image organizations/org-vault-admin.png Organization Vault %}

An MSP should [create an Organization]({{site.baseurl}}/article/about-organizations/#create-an-organization) **for each client**, or the client can create one for themselves. There are a few [types of Organizations]({{site.baseurl}}/article/about-organizations/#types-of-organizations) you can choose from to best fit your client's needs. For the most robust set of business features, we recommend [Enterprise Plans]({{site.baseurl}}/article/about-bitwarden-plans/#enterprise-organizations).

In all cases, members of the MSP team should be [designated as Owners and Admins]({{site.baseurl}}/article/user-types-access-control/) so they can manage the Organization. Administrators can access and manage all Items, [Collections]({{site.baseurl}}/article/about-collections), and users in the Organization. Share administrative duties between multiple users, especially in cases of Organizations with large number of users.

{% callout info %}
To ensure the security of your Organization, Bitwarden applies a 3-step process for onboarding a new member, [Invite]({{site.baseurl}}/article/managing-users/#invite) &rarr; [Accept]({{site.baseurl}}/article/managing-users/#accept) &rarr; [Confirm]({{site.baseurl}}/article/managing-users/#confirm). Notify users when an invitation is issued, and help them through accepting if needed.
{% endcallout %}

**Once members of the MSP team are provisioned as Owners and Admins, they can manage and execute all the tasks remaining in this article.**

### Collections and Groups

Bitwarden Organizations are designed to manage users and data in a scalable and secure fashion. Managing users and data on a individual basis is highly inefficient and opens both up to accidental mismanagement. To solve this, Organizations provide [Collections]({{site.baseurl}}/article/about-collections) and [Groups]({{site.baseurl}}/article/about-groups).

#### Collections

Collections gather together Logins, Notes, Cards, and Identities for [secure sharing]({{site.baseurl}}/article/share-to-a-collection) within an Organization. Some common methods for constructing scalable Collections include **Collections by Department** (i.e. users from the client's Marketing Team are assigned to a Marketing Collection), or **Collections by Function** (i.e. users from the client's Marketing Team are assigned to a Social Media Collection):

{% image organizations/collections-graphic-1.png Collections %}

[Learn how to create Collections]({{site.baseurl}}/article/about-collections/#create-a-collection).

#### Groups

Teams and Enterprise Organizations can also institute Groups, which relate together individual users to provide a scalable way to assign permissions, including access to [Collections]({{site.baseurl}}/article/about-collections) and other [access controls]({{site.baseurl}}/article/user-types-access-control/#access-control). One common Group-Collection methodology is to create **Groups by Department** and **Collections by Function**, for example:

{% image organizations/collections-graphic-2.png Groups %}

[Learn how to create Groups]({{site.baseurl}}/article/about-groups/#create-a-group).

### Share Vault items

With Collections now created, and a plan for connecting users to credentials using Groups, you can start adding data to the Organization. You can [import data directly to the Organization]({{site.baseurl}}/article/import-to-org/) or [manually add and share]({{site.baseurl}}/article/share-to-a-collection/) data.

### User Management

MSP teams can manage Organization users manually or using Directory Connector to sync users and Groups from existing directory services (LDAP, AD, etc.). For most MSP clients, Directory Connector is the recommended method:

{% image directory-connector/dc-diagram.png Directory Connector %}

Prepare to onboard users by ensuring your Organization has the correct [number of user seats]({{site.baseurl}}/article/managing-users/#manage-user-seats). Then, onboard users:

- [Directly from the Web Vault]({{site.baseurl}}/article/managing-users/#onboard-users)
- [Using Directory Connector]({{site.baseurl}}/article/directory-sync)

## MSP Best Practices

### Pricing for Partners

Whether you’re reselling or using Bitwarden on behalf of clients, Bitwarden offers a transparent pricing model. Price is based on per user per month, and is not dependent on the deployment method (cloud, private cloud, or self-host). Volume discounts start at 250 seats.

### Invoicing

Bitwarden will invoice based on Organization Seats for yearly subscriptions and an invoice will be sent to the Billing Contact on your Account. With many of our MSPs, they add on or charge for additional services, so they prefer to handle billing their own clients.

### Value-Added Services

Partners have complete flexibility for how they want to structure additional services for Clients. Some examples of services are organization consulting and implementation, onboarding training, Collections management, Support, and Reporting. If you’d like to see an example of how to structure an invoice for your client, [contact us](https://bitwarden.com/contact/).

### Cross-Platform Accessibility

One of the best parts about Bitwarden is that end-users can access it anytime, anywhere, from any device and any platform.

Encourage clients and end-users to [download](https://bitwarden.com/download/) Bitwarden for the operating systems and browsers they use the most.

### Training

Bitwarden is easy-to-use no matter if you are highly technical or more of a typical computer user. There are many [training videos](https://www.youtube.com/c/Bitwarden/videos) on the Bitwarden YouTube channel.

Additionally, Bitwarden hosts webcasts, demos, and Vault hours (our version of “office hours”) to regularly keep in touch with our customers and provide educational opportunities. Stay up-to-date on these events by following us on [Twitter](https://twitter.com/bitwarden).

### Company Credentials and Personal Credentials

Bitwarden recommends every end-user take advantage of their personal Vault to store their private information and secrets.

Company credentials should be stored in the Organizational Vault and put into a Collection appropriate for team use. Personal credentials should be stored in personal Vaults. This way, if an end-user parts way with the company, both parties can ensure smooth success. The employee retains access to their personal items, but will not have access to Organizational items.

Read more about the benefits of the Bitwarden Partner Program on [our blog](https://bitwarden.com/blog/post/secure-password-management-for-msps/). If you have additional questions or feedback, feel free to reach out to the [Bitwarden sales team](https://bitwarden.com/contact).
