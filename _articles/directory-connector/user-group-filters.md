---
layout: article
title: Sync Options and Filters
categories: [directory-connector]
featured: false
popular: false
hidden: false
tags: []
order: 05
---

When configuring the Directory Connector application, you can use a variety of Sync Options and Filters to customize your sync operation and limit the users and/or groups that are processed to your Bitwarden Organization.

Available Sync Options and Filter syntaxes are different for each directory server type. Refer to the **Configure Sync Options** and **Specify Sync Filters** sections of one of the following articles for help:

- [Sync with Active Directory or LDAP]({% link _articles/directory-connector/ldap-directory.md %})
- [Sync with Azure Active Directory]({% link _articles/directory-connector/azure-active-directory.md %})
- [Sync with G Suite (Google)]({% link _articles/directory-connector/gsuite-directory.md %})
- [Sync with Okta]({% link _articles/directory-connector/okta-directory.md %})
- [Sync with OneLogin]({% link _articles/directory-connector/onelogin-directory.md %})

{% callout success%}
If you're using the Directory Connector CLI, see [Directory Connector File Storage]({% link _articles/directory-connector/directory-sync-shared.md %}) for help editing your `data.json` configuration file.
{% endcallout %}

## Large Syncs

Regardless of which directory you're syncing from, enable the **More than 2000 users or groups are expected to sync.** option to signal to Directory Connector that you're expecting a large number of users or groups:

{% image directory-connector/largesync.png Signal a Large Sync%}

You may also enable this option directly in the Directory Connector [configuration file]({{site.baseurl}}/article/directory-sync-shared/#config-file) (`data.json`) by setting `"largeImport": true`:

```
"syncConfig": {
  ...,
  ...,
  ...,
  "largeImport": true
  },"
```

{% callout info %}
If you don't enable this option, Directory Connector will limit a sync to 2000 users or groups.
{% endcallout %}
