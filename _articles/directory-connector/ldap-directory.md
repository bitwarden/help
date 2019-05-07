---
layout: article
title: Configuring directory sync with Active Directory or other LDAP servers
categories: [organizations]
featured: true
popular: false
tags: [active directory, ldap, ad]
---

An LDAP directory is a collection of data about users and groups. LDAP (Lightweight Directory Access Protocol) is an Internet protocol that web applications can use to look up information about those users and groups from the LDAP server.

We provide built-in connectors for the most popular LDAP directory servers, such as:

- Microsoft Active Directory
- Apache Directory Server (ApacheDS)
- Apple Open Directory
- Fedora Directory Server
- Novell eDirectory
- OpenDS
- OpenLDAP
- Sun Directory Server Enterprise Edition (DSEE)
- A generic LDAP directory server

## Requirements

- Read through the following article: [Syncing users and groups with a directory]({% link _articles/directory-connector/directory-sync.md %})
- Install Bitwarden Directory Connector
- Using Directory Connector, log into your Bitwarden account and select your enterprise organization

## Connecting to the LDAP Server

1. Run the Directory Connector application.
2. Go to the **Settings** tab.
3. Select **Active Directory / LDAP** as the **Type** of directory server you are configuring.

The following directory configuration options can be set:

{% table %}

| Property | Description | Examples |
|----------|-------------|----------|
| Server Hostname | The hostname of your directory server. | `ad.company.com` or `ldap.company.local` |
| Port | The port on which your directory server is listening. | 389 or 10389 |
| Root Path | The root path at which the Directory Connector should start all queries. | `cn=users,dc=ad,dc=company,dc=com` |
| LDAPS | If the server is using LDAP over SSL (LDAPS). |  |
| Active Directory | If the server is an Active Directory server. |  |
| Username | The distinguished name of an administrative user that the application will use when connecting to the directory server. For Active Directory, the user should be a member of the built-in administrators group. | `cn=admin,cn=users,dc=ad,dc=company,dc=com` or `company\admin` (Active Directory) |
| Password | The password of the user specified above. The password is safely stored in the operating system's native credential manager. |  |

{% endtable %}

## Configuring Sync Settings

1. Launch the Directory Connector desktop application
2. Go to the **Settings** tab.
3. Configure the appropriate **Sync** settings for your Active Directory or LDAP server.

{% note %}
If you are using Active Directory, many of these settings are predetermined for you and are therefore are not shown.
{% endnote %}

{% table %}

| Property | Description | Examples |
|----------|-------------|----------|
| Interval | The interval, in minutes, that you wish to perform automatic sync checks. | 5 |
| Remove Disabled Users | When a user is disabled in the directory, should they also be removed from your Bitwarden organization? |  |
| Overwrite Existing Users | Always perform a full sync and remove any users from your organization if they are not in the synced users set. |  |
| Member Attribute | The attribute field to use when loading the group's members. | uniqueMember |
| Creation Date Attribute | The attribute field that specifies when an entry was created. | whenCreated |
| Revision Date Attribute | The attribute field that specifies when an entry was changed. | whenChanged |
| Use Email Prefix/Suffix | Email addresses are required by Bitwarden. If your directory users do not have email addresses they will be skipped. Alternatively, you can specify that users without an email address use a prefix attribute concatenated with a suffix to attempt to form a valid email address. |  |
| Email Prefix Attribute | The attribute field to use when forming a user's email address from the prefix/suffix setting. | accountName |
| Email Suffix | The specified suffix to use when forming a user's email address from the prefix/suffix setting. | @company.com |
| Sync Users | Sync users to your organization. |  |
| User Filter | A filter for limiting the users that are synced. Read more at [Configuring user and group sync filters]({% link _articles/directory-connector/user-group-filters.md %}). | (&(givenName=John)) |
| User Object Class | The name of the class used for the LDAP user object. | user |
| User Path | This value is used in addition to the root path when searching and loading users. If no value is supplied, the subtree search will start from the root path. | ou=Users |
| User Email Attribute | The attribute field to use when loading the user email address. | mail |
| Sync Groups | Sync groups to your organization. |  |
| Group Filter | A filter for limiting the groups that are synced. Read more at [Configuring user and group sync filters]({% link _articles/directory-connector/user-group-filters.md %}). | (&!(name=Sales*)) |
| Group Object Class | The name of the class used for the LDAP group object. | groupOfUniqueNames |
| Group Path | This value is used in addition to the root path when searching and loading groups. If no value is supplied, the subtree search will start from the root path. | ou=Groups |
| Group Name Attribute | The attribute field to use when loading the group name. | name |

{% endtable %}
