---
layout: article
title: Migration Procedures
categories: [hosting]
featured: false
popular: false
tags: [hosting, docker, install, deploy]
order: 03
---

This article will walk your through migration procedures if you're moving from **Cloud to On-premises**, or from **on-premises to Cloud**.

## Migrate Cloud to On-premises

When migrating from the Cloud to an on-premises instance:

1. [Install and Deploy]({% link _articles/hosting/install-on-premise.md %}) Bitwarden to your on-premises server.
2. [Download your Enterprise Organization License](https://bitwarden.com/help/article/licensing-on-premise/#organization-license) from the Cloud Web Vault and use it to [Create an Organization]({% link _articles/organizations/create-an-organization.md %}) in your on-premises instance.
3. [Export your Data]({% link _articles/account/export-your-data.md %}) from the Cloud Web Vault.
4. [Import your Data]({% link _articles/importing/import-data.md %}) to your on-premises instance to automatically create Collections, Vault items, and their associations.
5. [Create User Groups]({% link _articles/organizations/create-groups.md %}) manually in your on-premises instance.
6. Start [Inviting Users to your Organization]({% link _articles/organizations/managing-users.md %}).

## Migrate on-premises to Cloud

When migrating from an on-premises instance to the Cloud:

1. [Create an Organization]({% link _articles/organizations/create-an-organization.md %}) in the Cloud [Web Vault](https://vault.bitwarden.com){:target="\_blank"}.
2. [Create User Groups]({% link _articles/organizations/create-groups.md %}) and [Invite Users to your Organization]({% link _articles/organizations/managing-users.md %}) to mirror your on-premises instance.
3. [Export your Data]({% link _articles/account/export-your-data.md %}) from your on-premises instance. Encourage your users to export their personal Vaults as well.
4. [Import your Data]({% link _articles/organizations/import-to-org.md %}) to the Cloud.
5. Manually migrate (download from on-premises and upload to Cloud) any stored attachments.
