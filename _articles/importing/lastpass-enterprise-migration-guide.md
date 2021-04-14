---
layout: article
title:  LastPass Enterprise Migration Guide
featured: false
popular: false
hidden: true
tags: [import, lastpass]
order: 99
---
## Bitwarden exclusive content: Making migration easy

Securing your Organization with Bitwarden is straightforward and secure.

Simply follow the below steps to migrate data and users from LastPass (or any other platform):

1. [Export your data](#exporting-data)
2. [Create and configure your Bitwarden Organization](#creating-an-organization)
3. [Import your data into Bitwarden](#importing-data)
4. [Onboard your users](#onboarding-users) and [share](#sharing-collections-and-items)

If you need assistance during your migration, our [Customer Success team is here to help!](#migration-support)

## Scope

This document will describe the best practices for migrating secure data from a LastPass instance to a Bitwarden Teams or Enterprise Organization, building an infrastructure for security based on simple and scalable methods.

Password management is crucial for organizational security and operational efficiency. Providing insight into the best methods to perform migration and configuration is designed to minimize the trial-and-error approach that is often needed when exchanging enterprise tools.

The below steps are listed in the recommended order for ease of use and smooth boarding for users.

## Exporting data

LastPass data may be exported inside of the web-based vault, or from a LastPass Client. For ease of manipulation, CSV is the recommended export format.

LastPass provides step-by-step instructions [here](https://support.logmeininc.com/lastpass/help/how-do-i-nbsp-export-stored-data-from-lastpass-using-a-generic-csv-file)

### Important notes on exported data

Data imported into Bitwarden is defined as one of four item types:
- Login (username, password, 2FA keys)
- Card (Credit Cards, Bank Cards)
- Identity (Name, address fields, personal information)
- Secure Note

Bitwarden currently limits the length of item fields to 1,000 characters, and Secure Notes to 10,000 characters.  Items that exceed that criteria should be saved as separate files (text, key, pem, ssh, etc.) and added as attachments to an item.

- [More on Items](https://bitwarden.com/help/article/managing-items/)
- [Attaching a file to an item](https://bitwarden.com/help/article/attachments/)

Gathering a full export of your data across your LastPass Organization may require assigning all shared folders to a single user, or performing multiple exports - one for each segment of shared folders.

Exported data from LastPass will contain data from both your Personal vault, as well as any Shared folders that the exporting user was assigned to. Be sure to remove any personal vault items before importing data into a Bitwarden Organization.

## Creating an Organization

Shared or company-level data is stored in a Bitwarden Organization. The best practice is to create this Organization first and import it directly, instead of importing the data into an individual account and then sharing it with the organization secondarily.

For more on creating a Bitwarden Organization, visit [this article.](https://bitwarden.com/help/article/about-organizations/)

Self-hosted instances will need to create an Organization on the Bitwarden cloud instance to generate their [license key](https://bitwarden.com/host/) and can then proceed with [installing and configuring a Bitwarden Server instance.](https://bitwarden.com/help/article/install-on-premise/)

{%callout%}
Self-hosting is available for Enterprise plans.
{%endcallout%}

### Configuring Identity services

Bitwarden Enterprise plans support Login with Single-Sign-On using either SAML 2.0 or OpenID Connect (OIDC).

Each Bitwarden Organization can configure one SSO provider. Configuration for this is located in the [Business Portal](https://bitwarden.com/help/article/about-business-portal/), accessible from the Web Vault by Organization Owners and Administrators.

For more details on Login with SSO configurations and examples of Identity Provider (IdP) settings and naming conventions, please visit [these help articles](https://bitwarden.com/help/article/about-sso/).

### Enabling enterprise policies

Policies are found in the [Business Portal](https://bitwarden.com/help/article/about-business-portal/)

Policies allow you to control the actions of users within your Organization. It is recommended to configure these policies prior to onboarding users. For a complete list and details for Enterprise Policies, please see our helpful article [here.](https://bitwarden.com/help/article/policies/)

## Importing data

Importing information into Bitwarden can be performed in both an Individual Vault and Organization Vault. The below instructions are for Organization Imports.

There are two options to import data into your Organization:

Using the default CSV export file from LastPass.
Creating a Bitwarden specific CSV from your exported data

The best practice for most Organizations is to format your data into a Bitwarden CSV, or for advanced users, a Bitwarden JSON file for import into your Organization vault.

For instructions on shaping a Bitwarden specific import file, please refer to the guide [here.](https://bitwarden.com/help/article/condition-bitwarden-import/)

 A collection of data import and export documentation is available [here.](https://bitwarden.com/help/import-export/) to assist with imports from additional sources.

{%callout%}
Importing multiple times will create duplicate records in your Bitwarden Vault.
{%endcallout%}

### Individual user data import

Bitwarden supports a variety import formats from other password management platforms. Individual users can import their data into their Bitwarden Vault on their own, and does not require Administrative assistance.

For more on importing individual data, check out our helpful article [here.](https://bitwarden.com/help/import-export/)

## Onboarding users

Bitwarden supports both manual and automated user invitation and boarding. Best practice is to manually board any necessary Administrative users during configuration and initial deployment, ensuring all Organization configurations including Enterprise Policies, Login with SSO, and Directory Connector are ready prior to automating the User invitation and boarding process.

### Manual onboarding

Manual boarding is done via the Web Vault. More information on manual user boarding can be found in this [helpful article](https://bitwarden.com/help/article/managing-users/)

### Automated onboarding

Automated user boarding is also available when leveraging Bitwarden Directory Connector - a standalone application available in a [Desktop app](https://bitwarden.com/help/article/directory-sync-desktop/) and a [CLI tool](https://bitwarden.com/help/article/directory-sync-cli/) -  synchronizing user and group information to the Bitwarden Organization. These users are automatically invited to join the Organization, and can be confirmed manually or automatically using the [Bitwarden CLI tool](https://bitwarden.com/help/article/cli/#confirm).

- Learn more about how syncing works [here.](https://bitwarden.com/help/article/directory-sync/)
- Discover how to configure user and group filters for Directory Connector [here.](https://bitwarden.com/help/article/user-group-filters/)
- Documentation for multiple Directory Connector options is available [here.](https://bitwarden.com/help/directory-connector/)

## Sharing Collections and items

### Collections

Bitwarden empowers Teams and Organizations to share sensitive data easily, securely, and in a scalable manner. This is accomplished by segmenting shared secrets, items, logins, etc. into Collections.

Collections organize secure items in many ways, including but not limited to: business function, group assignment, application access levels, or even security protocols. Collections perform the same functions as shared folders, allowing for consistent access control and sharing amongst groups of users.

Shared folders from LastPass can be imported as Collections into Bitwarden by using the Organization Import template found [here](https://bitwarden.com/help/files/bitwarden_export_org.csv) and placing the name of the shared folder in the Collection column.

Example LastPass Export:

{%image /migration/lp-export.png Note: shared folders are listed in the grouping column %}

Example Bitwarden Organization Import

{%image /migration/bw-import.png Note: shared folders are now in the Collections column %}

Collections can be shared with both Groups and Individual users. Limiting the number of individual users that can access a Collection will make management more efficient for Administrators.

For more information on assigning Collections to Users and Groups, please refer to our help article [here.](https://bitwarden.com/help/article/about-collections/)

### Groups

Leveraging Groups for sharing is the most effective way to provide credential and secret access. Ideally Groups are mirrored from an LDAP service, however Bitwarden supports automatic Group synchronization via the Directory Connector application, as well as manually created ad-hoc Groups.

As a part of deployment preparations, it is possible to synchronize **just** groups from the LDAP directory before synchronization of Users begins, such that Collections can be assigned to Groups before users begin accessing Bitwarden.

For more information on filtering and synchronization of Users with the Bitwarden Directory Connector, please check out the article [here.](https://bitwarden.com/help/article/user-group-filters/)

### Permissions

Bitwarden Collection permissions are assigned on the assignment of the Group or User to a particular Collection. This means that each Group or User can be configured with permissions for the same Collection.

Collection permissions are easily configured with options for Read Only and Hide Passwords.

Read Only prevents users from adding new items to that Collection, as well as preventing the editing or deleting of existing items.
Hide Passwords prevents the users from seeing the Password field, TOTP field, and any custom field for an item that is listed as hidden. This permission is best used for Collections of items that are able to be auto-filled in a browser, since copying and pasting of credentials is disabled when this is configured.

Bitwarden uses an union of permissions to determine final access permissions for a User and a Collection Item.

**Example:**

- User A is part of the Tier 1 Support group, which has access to the Support Collection, with read-only permission.
- User A is also a member of the Support Management group, which has access to the  Support Collection, with read-write access.
- In this scenario, User A will be able to read-write to the Collection.

More information on permissions can be found on our help site [here.](https://bitwarden.com/help/article/user-types-access-control/#access-control)

## Migration support

The Bitwarden Customer Success team is available 24/7 with priority support for Enterprise and Teams Organizations. If you need assistance or have questions, please do not hesitate to contact us here: [bitwarden.com/contact](https://bitwarden.com/contact).

## Terms and equivalent references

### Organization

- A Bitwarden Organization is the encompassing “object” that relates all data for a given sharing entity. Click [here](https://bitwarden.com/help/article/about-organizations/) for more information on Organizations.

### Folders for Individual Vaults

- Within Bitwarden, individual Users can create Folders and assign items to those folders to help organize their Vault. Folders function much like ‘tags’ since they are linked to your items by reference, and deleting a folder does not delete the data inside it. Organizations use Collections to group secure items that need to be shared with the same user(s) or user group(s).
- Within LastPass, folders behave in the same manner between an individual user and a business.

### Collections for Organizational Vaults

- Collections are used by Bitwarden Organizations to group secure items that need to be shared with the same user(s) or user group(s).
- Most often exported shared folders become Collections, however, you can organize Collections in a number of ways.

### User

- Any user who is a member of a Bitwarden Organization

### Group

- Bitwarden and LastPass support User Groups. When migrating to Bitwarden, you can leverage [BWDC](https://bitwarden.com/help/directory-connector/) to synchronize your LDAP groups into your Bitwarden Organization.

### Read Only

- A permission that prevents users from adding new data to items within a Collection. Users can see / access all data within items but cannot add new items or modify existing data. This permission is set on a User or Group assignment to a Collection.

### Hide Password

- Permission to prevent users from seeing any part of a secure item within a Collection.

### User Type

- Users within Bitwarden can be granted a "user-type". Users onboarded via Directory Connector are defaulted to “Users” that can only access items that they are assigned directly and do not have access to reconfigure sharing or permissions.

### Vault

- Storage area for encrypted data. Bitwarden users that are members of an Organization have an Individual and Organization Vault, encrypted with separate keys.
