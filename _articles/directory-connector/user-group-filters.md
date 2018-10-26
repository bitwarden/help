---
layout: article
title: Configuring user and group sync filters
categories: [organizations]
featured: false
popular: false
hidden: false
tags: []
---

You can configure the Bitwarden Directory Connector application to use filters to limit the users and/or groups that are processed for syncing to your Bitwarden organization.

The syntax for filtering is different for each directory server type and is covered in detail below.

## Table of Contents

- [Active Directory and Other LDAP Directories](#active-directory-and-other-ldap-directories)
- [Azure Active Directory](#azure-active-directory)
- [G Suite](#g-suite)
- [Okta](#okta)

## Active Directory and Other LDAP Directories

The group and user filters can be in the form of any LDAP compatible search filter. Additionally, Active Directory provides a few more advanced options as well as a few limitations when writing search filters as opposed to other more standard LDAP directories. You can read more about writing LDAP search filters here: <https://msdn.microsoft.com/en-us/library/windows/desktop/aa746475(v=vs.85).aspx>

### Examples

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
The following examples are written for Active Directory. In order to use them for something such as OpenLDAP the attributes will need to be changed.
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

The Microsoft Graph API does not provide a way to filter groups and users directly, however, you can use our custom filtering syntax that allows you to exclude or include a comma separated list of group names, user e-mails or users based on their group membership.

### Examples

#### Groups

{% note %}
If you are filtering groups your user filter will only apply to users from the groups returned.
{% endnote %}

```
include:Group A,Sales People,My Other Group
```

```
exclude:Group C,Developers,Some Other Group
```

#### Users

You can include/exclude users directly by using `include` or `exclude` keywords like below:

```
include:joe@company.com,bill@company.com,tom@company.com
```

```
exclude:joe@company.com
```

Alternatively, you can filter users based on their group membership by using `includeGroup` or `excludeGroup` keywords. You have to obtain the group ID and include it with the keyword. You can get group's ID in the [Azure Portal](https://portal.azure.com) or through [Azure AD PowerShell](https://docs.microsoft.com/en-us/powershell/module/azuread/get-azureadgroup?view=azureadps-2.0).

```
includeGroup:97b9ff2a-7d4f-463d-a925-efb1677fd40d,b389c339-8c13-4c1a-8ac1-4fde56d9f70f
```

```
excludeGroup:97b9ff2a-7d4f-463d-a925-efb1677fd40d
```

## G Suite

### Groups

The G Suite APIs do not provide a way to filter groups directly, however, you can use our custom filtering syntax that allows you to exclude or include a comma separated list of group names.

{% note %}
If you are filtering groups your user filter will only apply to users from the groups returned.
{% endnote %}

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

## Okta

We provide a custom filtering syntax that allows you to exclude or include a comma separated list of group names or user emails.

Additionally, the Okta APIs provide limited filtering capabilities for users and groups. Read more about filtering with the `filter` parameter here: <https://developer.okta.com/docs/api/resources/groups#filters> and <https://developer.okta.com/docs/api/resources/users#list-users-with-a-filter>

You can combine both of these filtering options by concatenating the two strings with a pipe (`|`);

### Examples

#### Groups

Only the include/exclude filter:

```
include:Group A,Group B
```

An include/exclude filter + an Okta `filter`:

```
exclude:Group A|type eq "APP_GROUP"
```

Only the Okta `filter` search (notice the `|` prefix that is required):

```
|type eq "BUILT_IN"
```

#### Users

Only the include/exclude filter:

```
include:joe@company.com,bill@company.com,tom@company.com
```

An include/exclude filter + an Okta `filter`:

```
exclude:john@company.com,bill@company.com|profile.firstName eq "John"
```

Only the Okta `filter` search (notice the `|` prefix that is required):

```
|profile.lastName eq "Smith"
```