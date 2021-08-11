---
layout: article
title: Sync with Active Directory or LDAP
categories: [directory-connector]
featured: true
popular: false
tags: [active directory, ldap, ad]
order: 07
---

This article will help you get started using Directory Connector to sync users and groups from your LDAP or Active Directory service to your Bitwarden Organization. Bitwarden provides built-in connectors for the most popular LDAP directory servers, including:

- Microsoft Active Directory
- Apache Directory Server (ApacheDS)
- Apple Open Directory
- Fedora Directory Server
- Novell eDirectory
- OpenDS
- OpenLDAP
- Sun Directory Server Enterprise Edition (DSEE)
- Any generic LDAP directory server

## Connect to your Server

Complete the following steps to configure Directory Connector to use your LDAP or Active Directory:

1. Open the Directory Connector [Desktop Application]({% link _articles/directory-connector/directory-sync-desktop.md %}).
2. Navigate to the **Settings** tab.
3. From the **Type** dropdown, select **Active Directory / LDAP**.

   The available fields in this section will change according to your selected Type.
4. Configure the following options:

   |Option|Description|Examples|
   |------|-----------|--------|
   |Server Hostname|Hostname of your directory server.|`ad.example.com`<br><br>`ldap.company.org`|
   |Server Port|Port on which your directory server is listening.|`389` or `10389`|
   |Root Path|Root path at which the Directory Connector should start all queries.|`cn=users,dc=ad,dc=example,dc=com`<br><br>`dc=ldap,dc=company,dc=org`|
   |This server uses active directory|Check this box if the server is an Active Directory server.||
   |This server pages search results|Check this box if the server paginates search results.<br><br>(*LDAP only*)||
   |This server uses an encrypted connection|Checking this box will prompt you to select one of the following options:<br><br>**Use SSL** (LDAPS)<br>If your LDAPS server uses an untrusted certificate, you can configure certificate options on this screen.<br><br>**Use TLS** (STARTTLS)<br>If your LDAP server uses a self-signed certificated for STARTTLS, you can configure certification options on this screen.<br>||
   |Username|The Distinguished Name of an administrative user that the application will use when connecting to the directory server.<br><br>For Active Directory, the user should be a member of the built-in administrators group.|`cn=admin,cn=users,dc=ad,dc=company,dc=com`<br><br>`company\admin`|
   |Password|The password of the user specified above. The password is safely stored in the operating system's native credential manager.||

5. In the **Account** section, select Organization to connect to your directory from the dropdown.

## Configure Sync Options

{% callout success %}
When you're finished configuring, navigate to the **More** tab and select the **Clear Sync Cache** button to prevent potential conflicts with prior sync operations. For more information, see [Clear Sync Cache]({% link _articles/directory-connector/clear-sync-cache.md %}).
{% endcallout %}

Complete the following steps to configure the settings used when syncing using Directory Connector:

{% callout info %}
If you are using Active Directory, many of these settings are predetermined for you and are therefore are not shown.
{% endcallout %}

1. Open the Directory Connector [Desktop Application]({% link _articles/directory-connector/directory-sync-desktop.md %}).
2. Navigate to the **Settings** tab.
3. In the **Sync** section, configure the following options as disired:

|Option|Description|
|------|-----------|
|Interval|Time between automatic sync check (in minutes).|
|Remove disabled users during sync|Check this box to remove users from the Bitwarden Organization that have been disabled in your Organization.|
|Overwrite existing organization users based on current sync settings|Check this box to fully overwrite the user set on each sync, including removing users from your Organization when they're absent from the directory user set.<br><br>**If for any reason an empty sync is run when this options is enabled, Directory Connector will remove all users.** Always run a [Test Sync](#test-a-sync) prior to syncing after enabling this option.|
|More than 2000 users or groups are expected to sync.|Check this box if you expect to sync 2000+ users or groups. If you don't check this box, Directory Connector will limit a sync at 2000 users or groups.|
|Member Attribute|Name of the attribute used by the directory to define a group's membership (e.g. `uniqueMember`).|
|Creation Data Attribute|Name of the attribute used by the directory to specify when an entry was created (e.g. `whenCreated`).|
|Revision Date Attribute|Name of the attribute used by the directory to specify when an entry was last changed (e.g. `whenChanged`).|
|If a user has no email address, combine a username prefix with a suffix value to form an email|Check this box to form valid email options for users that do not have an email address. **Users without real or formed email addresses will be skipped by Directory Connector.**<br><br>Formed Email = **Email Prefix Attribute** + **Email Suffix**|
|Email Prefix Attribute|Attribute used to create a prefix for formed email addresses.|
|Email Suffix|A string (`@example.com`) used to create a suffix for formed email addresses.|
|Sync users|Check this box to sync users to your Organization.<br><br>Checking this box will allow you to specify a **User Filter**, **User Path**, **User Object Class**, and **User Email Attribute**.|
|User Filter|See [Specify Sync Filters](#specify-sync-filters).|
|User Path|Attribute used with the specified **Root Path** to search for users (e.g. `ou=users`). If no value is supplied, the subtree search will start from the root path.|
|User Object Class|Name of the class used for the LDAP user object (e.g. `user`).|
|User Email Attribute|Attribute to be used to load a user's stored email address.|
|Sync groups|Check this box to sync groups to your Organization.<br><br>Checking this box will allow you to specify a **Group Filter**, **Group Path**, **Group Object Class**, **Group Name Attribute**.|
|Group Filter|See [Specify Sync Filters](#specify-sync-filters).|
|Group Path|Attribute used with the specified **Root Path** to search for groups (e.g. `ou=groups`). If no value is supplied, the subtree search will start from the root path.|
|Group Object Class|Name of the class used for the LDAP group object (e.g. `groupOfUniqueNames`).|
|Group Name Attribute|Name of the attribute used by the directory to define the name of a group (e.g. `name`).|

### Specify Sync Filters

User and group filters can be in the form of any LDAP-compatible search filter.

Active Directory provides some advanced options and limitations for writing search filters, when compared to standard LDAP directions. Learn more about writing Active Directory search filters [here](https://docs.microsoft.com/en-us/windows/win32/adsi/search-filter-syntax?redirectedfrom=MSDN).

#### Samples

To filter a sync for all entries that have `objectClass=user` and `cn` (common name) that contains `Marketing`:
```
(&(objectClass-user)(cn=*Marketing*))
```

(**LDAP-only**) To filter a sync for all entries with an `ou` (organization unit) component of their `dn` (distinguished name) that is either `Miami` or `Orlando`:
```
(|(ou:dn:=Miami)(ou:dn:=Orlando))
```

(**LDAP-only**) To exclude entities that match an expression, for example all `ou=Chicago` entries *except* those that also match a `ou=Wrigleyville` attribute:
```
(&(ou:dn:=Chicago)(!(ou:dn:=Wrigleyville)))
```

(**AD Only**) To filter a sync for users in the `Heroes` group:
```
(&(objectCategory=Person)(sAMAccountName=*)(memberOf=cn=Heroes,ou=users,dc=company,dc=com))
```

(**AD Only**) To filter a sync for users that are members of the `Heroes` group, either directory or via nesting:
```
(&(objectCategory=Person)(sAMAccountName=*)(memberOf:1.2.840.113556.1.4.1941:=cn=Heroes,ou=users,dc=company,dc=com))
```

## Test a Sync

To test whether Directory Connector will successfully connect to your Directory and return the desired users and groups, navigate to the **Dashboard** tab and select the **Test Now** button. If successful, users and groups will be printed to the Directory Connector window according the specified [Sync Options](#configure-sync-options) and [Filters](#specify-sync-filters):

{% image directory-connector/okta/dc-okta-test.png Test sync results %}

## Start Automatic Sync

Once [Sync Options](#configure-sync-options) and [Filters](#specify-sync-filters) are configured and tested, you can begin syncing. Complete the following steps to start automatic syncing with Directory Connector:

1. Open the Directory Connector [Desktop Application]({% link _articles/directory-connector/directory-sync-desktop.md %}).
2. Navigate to the **Dashboard** tab.
3. In the **Sync** section, select the **Start Sync** button.

   You may alternatively select the **Sync Now** button to execute a one-time manual sync.

Directory Connector will begin polling your directory based on the configured [Sync Options](#configure-sync-options) and [Filters](#specify-sync-filters).

If you exit or close the application, automatic sync will stop. To keep Directory Connector running in the background, minimize the application or hide it to the system tray.
