---
layout: article
title:  Teams and Enterprise Migration Guide
categories: [business]
featured: false
popular: false
hidden: false
tags: [import, teams, enterprise, onboarding, security]
order: 04
---

Secure migration of your Organization with Bitwarden is straightforward and secure. Simply follow the steps in this guide to migrate data and users from your existing password manager:

1. [Export your data](#step-1-export-your-data).
2. [Create and configure your Bitwarden Organization](#step-2-setup-your-bitwarden-organization).
3. [Import your data into Bitwarden](#step-3-import-data-to-your-organization).
4. [Onboard your users](#step-4-onboard-users-to-the-organization).
5. [Configure access to Collections and Vault items](#step-5-configure-access-to-collections-and-items).

{% callout success %}
If you need assistance during your migration, our [Customer Success team is here to help](https://bitwarden.com/contact){:target="\_blank"}!
{% endcallout %}

## Scope

This document describes the best practices for migrating secure data from your current password manager(s) to a Bitwarden [Teams or Enterprise Organization]({{site.baseurl}}/article/about-organizations/), building an infrastructure for security based on simple and scalable methods.

Password management is crucial for organizational security and operational efficiency. Providing insight into the best methods to perform migration and configuration is designed to minimize the trial-and-error approach that is often needed when exchanging enterprise tools.

Steps in this document **are listed in the recommended order** for ease of use and smooth onboarding for users.

## Step 1: Export your Data

Exporting data from another password manager will be different for each solution, and in some cases may be a bit tricky. Use one of our [Import & Export Guides]({{site.baseurl}}/import-export/) for help, for example with exporting from [Lastpass]({{site.baseurl}}/article/import-from-lastpass/#export-from-lastpass) or [1Password]({{site.baseurl}}/article/import-from-1password/#export-from-1password).

Gathering a full export of your data may require assigning shared folders or items to a single user for export, or performing multiple exports between users with appropriate permissions. Additionally, exported data may include personal data alongside shared/organizational data, so be sure to remove personal items from the export file before [importing to Bitwarden](#).

{% callout info %}
We recommend paying special attention to the location of the following types of data during export:

- Secure documents
- Secure file attachments
- Secure notes
- SSH / RSA key files
- Shared Folders
- Nested shared items
- Any customized structures within your password management infrastructure
{% endcallout %}

## Step 2: Setup your Bitwarden Organization

Bitwarden Organizations relate users and Vault items together for [secure sharing]({{site.baseurl}}/article/sharing/) of Logins, Notes, Cards, and Identities.

{% callout success %}
It's important that you create your Organization first and [import data to it directly]({{site.baseurl}}/article/import-to-org/), rather than importing the data to an individual account and then [moving items]({{site.baseurl}}/article/sharing/) to the Organization secondarily.
{% endcallout %}

1. **Create your Organization**. Start by creating your Organization. To learn how, check out [this article]({{site.baseurl}}/article/about-organizations/#create-an-organization).

   {% callout note %}To self-host Bitwarden, create an Organization on the Bitwarden cloud, generate a [license key](https://bitwarden.com/host/), and use the key to [unlock Organizations]({{site.baseurl}}/article/licensing-on-premise/#organization-license) on your server.{% endcallout %}

2. **Onboard Administrative Users**. With your Organization created, further setup procedures can be made easier by onboarding some [administrative users]({{siter.baseurl}}/article/user-types-access-control). It's important that you **do not begin end-user onboarding** at this point, as there are a few steps left to prepare your Organization. Learn how to invite admins [here]({{site.baseurl}}/article/managing-users/#onboard-users).
3. **Configure Identity Services**. Bitwarden Enterprise Organizations support [Login with Single-Sign-On]({{site.baseurl}}/article/about-sso/) using either SAML 2.0 or OpenID Connect (OIDC). To configure SSO, navigate to the [Business Portal](https://bitwarden.com/help/article/about-business-portal/), accessible from the Web Vault by [Organization Owners and Administrators]({{site.baseurl}}/article/user-types-access-control/).

4. **Enable Enterprise Policies**. [Enterprise Policies]({{site.baseurl}}/article/) enable Enterprise Organizations to implement roles for users, for example requiring use of Two-step Login. It is highly recommended that you configure Policies before onboarding users.

## Step 3: Import Data to your Organization

To import data to your Organization:

1. Open your Organization and navigate to the **Tools** tab:

   {% image importing/org-tools.png Organization Tools %}
3. Select **Import Data** from the left-hand Tools menu.
3. From the format dropdown, choose a **File Format** (see [Import Recommendations](#import-recommendations) below).
4. Select the **Choose File** button and add the file to import.

   {% callout warning %}Import to Bitwarden can't check whether items in the file to import are duplicative of items in your Vault. This means that **importing multiple files will create duplicative** Vault items if an item is already in the Vault and in the file to import.{% endcallout %}
5. Select the **Import Data** button to complete your import.

Currently, file attachments are not included in Bitwarden import operations and will need to be uploaded to your Vault manually. For more information, see [File Attachments]({% link _articles/features/attachments.md %}).

{% callout success %}
You should also recommend to employees that they export their personal data from your existing password manager and prepare it for import into Bitwarden. Learn more [here]({{site.baseurl}}/import-export/).
{% endcallout %}

### Import Recommendations

When importing data to your Organization, you have two options:

1. To import the default file format from your prior password manager.
2. To condition a Bitwarden-specific `.CSV` for import.

We recommend formatting your file for import as a Bitwarden `.CSV` for best results, or for advanced users, as a Bitwarden `.JSON` file. For instructions on shaping a Bitwarden-specific import file, refer to [this import guide]({{site.baseurl}}/article/condition-bitwarden-import/). For more import documentation, see [these articles]({{site.baseurl}}/import-export/).

## Step 4: Onboard Users to the Organization

Bitwarden supports both manual onboarding via the Web Vault and automated onboarding by syncing to your existing directory service:

### Manual Onboarding

To ensure the security of your Organization, Bitwarden applies a 3-step process for onboarding a new member, [Invite](#invite) &rarr; [Accept](#accept) &rarr; [Confirm](#confirm). Learn how to invite new users [here]({{site.baseurl}}/article/managing-users/#onboard-users).

### Automated Onboarding

Automated user onboarding is available through [Bitwarden Directory Connector]({{site.baseurl}}/article/directory-sync), a standalone application available in a [Desktop app]({{site.baseurl}}/article/directory-sync-desktop/) and [CLI]({{site.baseurl}}/article/directory-sync-cli/) that will synchronize users and groups from your existing directory service.

Users are automatically invited to join the Organization, and can be confirmed manually or automatically using the [Bitwarden CLI tool](https://bitwarden.com/help/article/cli/#confirm).

- Learn more about how syncing works [here]({{site.baseurl}}/article/directory-sync/).
- Discover how to configure user and group filters for Directory Connector [here]({{site.baseurl}}/article/user-group-filters/).
- See more Directory Connector documentation [here]({{site.baseurl}}/directory-connector/).

## Step 5: Configure Access to Collections and Items

Share Vault items with your end-users by configuring access through Collections, Groups, and Group-level or user-level permissions:

### Collections

Bitwarden empowers Teams and Organizations to share sensitive data easily, securely, and in a scalable manner. This is accomplished by segmenting shared secrets, items, logins, etc. into **Collections**.

Collections can organize secure items in many ways, including but not limited to business function, group assignment, application access levels, or even security protocols. Collections function as shared folders, allowing for consistent access control and sharing amongst groups of users.

Shared folders from other password managers can be imported as Collections into Bitwarden by using the Organization Import template found [here](https://bitwarden.com/help/files/bitwarden_export_org.csv) and placing the name of the shared folder in the `Collection` column:

Example Export:

{%image /migration/lp-export.png Note: shared folders are listed in the grouping column %}

Example Bitwarden Organization Import:

{%image /migration/bw-import.png Note: shared folders are now in the Collections column %}

Collections can be shared with both Groups and Individual users. Limiting the number of individual users that can access a Collection will make management more efficient for Administrators. Learn more [here]({{site.baseurl}}/article/about-collections/).

### Groups

Leveraging Groups for sharing is the most effective way to provide credential and secret access. Ideally Groups are mirrored from an LDAP service, however Bitwarden supports automatic Group synchronization via the Directory Connector application, as well as manually created ad-hoc Groups.

As a part of deployment preparations, it is possible to synchronize **just** groups from the LDAP directory before synchronization of Users begins, such that Collections can be assigned to Groups before users begin accessing Bitwarden. Learn more about syncing Groups with Directory Connector [here]({{site.baseurl}}/article/user-group-filters/).

### Permissions

Permissions for Bitwarden Collections can be assigned on the Group or User-level. This means that each Group or User can be configured with permissions for the same Collection. Collection permissions include options for **Read Only** and **Hide Passwords**.

Bitwarden uses an union of permissions to determine final access permissions for a User and a Collection Item. Learn more [here]({{site.baseurl}}/article/user-types-access-control/#access-control).

**Example:**

- User A is part of the Tier 1 Support group, which has access to the Support Collection, with read-only permission.
- User A is also a member of the Support Management group, which has access to the  Support Collection, with read-write access.
- In this scenario, User A will be able to read-write to the Collection.

## Migration Support

The Bitwarden Customer Success team is available 24/7 with priority support for Enterprise and Teams Organizations. If you need assistance or have questions, please do not hesitate to [contact us](https://bitwarden.com/contact).
