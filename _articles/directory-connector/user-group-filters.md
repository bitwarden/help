---
layout: article
title: Configuring user and group sync filters
categories: [Organizations]
featured: false
popular: false
hidden: false
tags: []
---

You can configure the bitwarden Directory Connector to use filters to limit the users and/or groups that are processed for syncing to your bitwarden organization.

The syntax for filtering is different for each directory server type and is covered in detail below.

## Active Directory and Other LDAP Directories

Coming soon...

## Azure Active Directory

The Microsoft Graph API provides advanced filtering capabilities through the `$filter` parameter using OData syntax. This parameter is exposed to you in both the user and group filters of the Directory Connector.

Read more about the `$filter` parameter with OData syntax here: <https://developer.microsoft.com/en-us/graph/docs/concepts/query_parameters#filter>

### Example

```
startswith(displayName,'J')
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
