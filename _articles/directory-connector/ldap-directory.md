---
layout: article
title: Configuring directory sync with Active Directory or other LDAP servers
categories: [organizations]
featured: true
popular: false
tags: []
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
- Install bitwarden Directory Connector
- Using Directory Connector, log into your bitwarden account and select your enterprise organization

## Connecting to the LDAP Server

1. Launch the Directory Connector console by double clicking the shortcut. 
2. Select option 3 (Configure directory connection) from the main menu.
3. Select the type of directory server you are configuring. In this case, either **Active Directory** or **Other LDAP Directory**.

The following options can be set:

{% table %}

| Property | Description | Examples |
|----------|-------------|----------|
| Address | The host name of your directory server. | `ad.company.com` or `ldap.company.local` |
| Port | The port on which your directory server is listening. | 389 or 10389 |
| Path | The root path at which the Directory Connector should start all queries. | `cn=users,dc=ad,dc=company,dc=com` |
| Current user | Authenticate to the directory server as the currently logged in user. For Active Directory, the user should be a member of the built-in administrators group. |  |
| Username | The distinguished name of an administrative user that the application will use when connecting to the directory server. For Active Directory, the user should be a member of the built-in administrators group. | `cn=admin,cn=users,dc=ad,dc=company,dc=com` or `admin@company.com` |
| Password | The password of the user specified above. Note that the password is safely encrypted before being stored for the application, however, to better guarantee its security, you should ensure that other processes do not have OS-level read permissions for this application's settings files. |  |

{% endtable %}

## Configuring Sync Settings

1. Launch the Directory Connector console by double clicking the shortcut.
2. Select option 4 (Configure sync) from the main menu.
3. Step through and set each sync configuration setting.

{% table %}

| Property | Description | Examples |
|----------|---------- --|----------|
| Sync Groups | Sync groups to your organization. |  |
| Sync Users | Sync users to your organization. |  |
| Sync Interval | When using the background service, the interval, in minutes, that you wish to automatically sync. | 5 |
| User Filter | A filter for limiting the users that are synced. Read more at [Configuring user and group sync filters]({% link _articles/directory-connector/user-group-filters.md %}). | (&(objectClass=user)) |
| Group Filter | A filter for limiting the groups that are synced. Read more at [Configuring user and group sync filters]({% link _articles/directory-connector/user-group-filters.md %}). | (&(objectClass=group)) |
| Remove Disabled | When a user is disabled in the directory, should they also be removed from your bitwarden organization? |  |
| Group Object Class | The name of the class used for the LDAP group object. | group |
| User Object Class | The name of the class used for the LDAP user object. | user |
| Group Path | This value is used in addition to the root path when searching and loading groups. If no value is supplied, the subtree search will start from the root path. | ou=Groups |
| User Path | This value is used in addition to the root path when searching and loading users. If no value is supplied, the subtree search will start from the root path. | ou=Users |
| Group Name Attribute | The attribute field to use when loading the group name. | name |
| User Email Attribute | The attribute field to use when loading the user email address. | mail |
| Member Attribute | The attribute field to use when loading the group's members. | member |
| Use Email Prefix/Suffix | Email addresses are required by bitwarden. If your directory users do not have email addresses they will be skipped. Alternatively, you can specify that users without an email address use a prefix attribute concatenated with a suffix to attempt to form a valid email address. |  |
| Email Prefix Attribute | The attribute field to use when forming a user's email address from the prefix/suffix setting. | sAMAccountName |
| Email Suffix | The specified suffix to use when forming a user's email address from the prefix/suffix setting. | @company.com |
| Creation Date Attribute | The attribute field that specifies when an entry was created. | whenCreated |
| Revision Date Attribute | The attribute field that specifies when an entry was changed. | whenChanged |

{% endtable %}
