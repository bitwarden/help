---
layout: article
title: Configuring user and group sync filters
categories: [organizations]
featured: false
popular: false
hidden: false
tags: []
---

You can configure the bitwarden Directory Connector to use filters to limit the users and/or groups that are processed for syncing to your bitwarden organization.

The syntax for filtering is different for each directory server type and is covered in detail below.

## Table of Contents

- [Active Directory and Other LDAP Directories](#active-directory-and-other-ldap-directories)
- [Azure Active Directory](#azure-active-directory)
- [G Suite](#g-suite)

## Active Directory and Other LDAP Directories

The group and user filters can be in the form of any LDAP compatible search filter. Additionally, Active Directory provides a few more advanced options as well as a few limitations when writing search filters as opposed to other more standard LDAP directories. You can read more about writing LDAP search filters here: <https://msdn.microsoft.com/en-us/library/windows/desktop/aa746475(v=vs.85).aspx>

#### Examples

Search for all entries that have objectClass=user AND cn that contains the word 'Marketing'.

```
(&(objectClass=user)(cn=*Marketing*))
```

{% note %}
Active Directory does not implement extensible matching, the following examples won't work with it.
{% endnote %}

Find entries with an OU component of their DN which is either 'Miami' or 'Orlando'. 

```
(|(ou:dn:=Miami)(ou:dn:=Orlando))
```

To exclude entities which match an expression, use '!'. Find all Chicago entries except those with a Wrigleyville OU component.

```
(&(ou:dn:=Chicago)(!(ou:dn:=Wrigleyville)))
```

{% note %}
These examples are written for Active Directory. In order to use them for something such as OpenLDAP the attributes will need to be changed.
{% endnote %}

Users in the 'Heroes' group

```
(&(objectCategory=Person)(sAMAccountName=*)(memberOf=cn=Heroes,ou=users,dc=company,dc=com))
```

Users that are a member of the 'Heroes' group, either directly or via nesting

```
(&(objectCategory=Person)(sAMAccountName=*)(memberOf:1.2.840.113556.1.4.1941:=cn=Heroes,ou=users,dc=company,dc=com))
```

## Azure Active Directory

The Microsoft Graph API does not provide a way to filter groups and users directly, however, you can use our custom filtering syntax that allows you to exclude or include a comma separated list of group names and user emails.

#### Examples

Groups

```
include:Group A,Sales People,My Other Group
```

```
exclude:Group C,Developers,Some Other Group
```

Users

```
include:joe@company.com,bill@company.com,tom@company.com
```

```
exclude:joe@company.com
```

## G Suite

### Groups

The G Suite APIs do not provide a way to filter groups directly, however, you can use our custom filtering syntax that allows you to exclude or include a comma separated list of group names.

#### Examples

```
include:Group A,Sales People,My Other Group
```

```
exclude:Group C,Developers,Some Other Group
```

### Users

We provide the same custom filtering syntax that allows you to exclude or include a comma separated list of user emails.

Additionally, the G Suite APIs provide limited filtering capabilities for users that are exposed to you. Read more about filtering with the `query` parameter here: <https://developers.google.com/admin-sdk/directory/v1/guides/search-users>

You can combine both of these filtering options by concatenating the two strings with a pipe (`|`);

#### Examples

Only the include/exclude filter:

```
include:joe@company.com,bill@company.com,tom@company.com
```

An include/exclude filter + a G Suite `query` search:

```
exclude:john@company.com,bill@company.com|orgName=Engineering orgTitle:Manager
```

Only the G Suite `query` search (notice the `|` prefix that is required):

```
|orgName=Engineering orgTitle:Manager
```
