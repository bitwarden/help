---
layout: article
title: Migration Procedures
categories: [hosting]
featured: false
popular: false
tags: [hosting, docker, install, deploy]
order: 03
---

This article will walk you through procedures for transitioning from Cloud to Self-hosted, from Self-hosted to Cloud, and from one self-hosted server to another:

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="mobtab" data-target="#mobile" role="tab" aria-controls="mobile" aria-selected="false">Cloud to Self-hosted</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="desktab" data-target="#desktop" role="tab" aria-controls="desktop" aria-selected="false">Self-hosted to Cloud</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="betab" data-target="#browserextension" role="tab" aria-controls="browserextension" aria-selected="false">Host-to-host</a>
  </li>
</ul>
<div class="tab-content" id="clientsContent">
  <div class="tab-pane show active" id="mobile" role="tabpanel" aria-labelledby="mobtab">
{% capture mobile_info %}

### Migrate Cloud to Self-hosted

To migrate from the Cloud to a self-hosted server:

1. [Install and deploy]({{site.baseurl}}/article/install-on-premise) Bitwarden to your server. At a high-level, this procedure involves:

   1. [Configuring a domain]({{site.baseurl}}/article/install-on-premise/#configure-your-domain) for Bitwarden.
   2. Installing [Docker and Docker Compose]({{site.baseurl}}/article/install-on-premise/#install-docker-and-docker-compose).
   3. Running the [installation shell script]({{site.baseurl}}/article/install-on-premise/#install-bitwarden).
   4. [Configuring your environment]({{site.baseurl}}/article/install-on-premise/#configure-your-environment) to setup the Admin Portal, an SMTP Server connection, and more.
2. Start your server by running `./bitwarden.sh start`.
3. Open the Cloud Web Vault and [download your license]({{site.baseurl}}/article/licensing-on-premise).

   {% callout success %}There are separate files for an [Organization license]({{site.baseurl}}/article/licensing-on-premise/#organization-license) and an [Individual license]({{site.baseurl}}/article/licensing-on-premise/#individual-license). **You don't need both license files.** If you're migrating an Organization, you only need to retrieve the Organization license and must be an [Organization Owner]({{site.baseurl}}/article/user-types-access-control/) to do so.{% endcallout %}
4. Still in the Cloud Web Vault, [export your personal Vault data]({{site.baseurl}}/article/export-your-data/#export-a-personal-vault) or [export your Organization Vault data]({{site.baseurl}}/article/export-your-data/#export-an-organization-vault). If you're migrating an Organization, encourage your end-users to export their Personal Vaults as well.
5. Open your self-hosted Web Vault and create an account. This account **must use the same email address** as the Cloud account you downloaded the license with.
5. Still in your self-hosted Web Vault, upload your [license]({{site.baseurl}}/article/licensing-on-premise).

   {% callout success %}There are separate locations in which to upload an [Organization license]({{site.baseurl}}/article/licensing-on-premise/#organization-license) versus an [Individual license]({{site.baseurl}}/article/licensing-on-premise/#individual-license). As before, only upload the one that's relevant for you.{% endcallout %}
6. Still in the self-hosted Web Vault, import data to your [Personal Vault]({{site.baseurl}}/article/import-your-data/) or [Organization Vault]({{site.baseurl}}/article/import-to-org/).

   {% callout info %}Importing data to an Organization will automatically re-create your [Collections]({{site.baseurl}}/article/about-collections/) and add the relevant Vault items to them.{% endcallout %}

#### Organizations-only Next Steps

If you're migrating an Organization to a self-hosted server, continue with the following steps:

1. (**Enterprise Organizations Only**) Re-implement your [Enterprise Policy]({{site.baseurl}}/article/policies) specifications and/or configure [Login with SSO]({{site.baseurl}}/article/about-sso/).
2. Manually [re-create user Groups]({{site.baseurl}}/article/about-groups/#create-a-group) in your self-hosted Web Vault and assign them to the proper Collections.
3. Start [inviting users to your Organization]({{site.baseurl}}/article/managing-users/#invite) manually or using [Directory Connector]({{site.baseurl}}/article/directory-sync).

{% endcapture %}
{{ mobile_info | markdownify}}
  </div>
  <div class="tab-pane" id="desktop" role="tabpanel" aria-labelledby="desktab">
{% capture desktop_info %}

### Migrate Self-hosted to Cloud

To migrate from a self-hosted server to the Cloud:

1. Create a full backup of the `./bwdata` directory of your self-hosted Bitwarden server. In particular, you will need access to `./bwdata/core/attachments` to manually upload [file attachments]({{site.baseurl}}/article/attachments/) to the Cloud (**Step 5**).

   {% callout success %} If users are exporting their Personal Vaults over a period of time, you may need to re-sync the items from your `./bwdata/core/attachments` directory to your backup location and upload any new items in the event that they change during the cut-over period.{% endcallout %}
2. In your self-hosted Web Vault, [export your personal Vault data]({{site.baseurl}}/article/export-your-data/#export-a-personal-vault) or [export your Organization Vault data]({{site.baseurl}}/article/export-your-data/#export-an-organization-vault). If you're migrating an Organization, encourage your end-users to export their Personal Vaults as well.
3. Open the Cloud Web Vault. Most users will have previously created Cloud accounts for billing purposes, so log in to that account. If you were previously a free user without a Cloud account for billing, create an account now.

   {% callout success %}If you're migrating an Organization, you'll already have a Cloud Organization established for billing and licensing purposes. For smoothest transition, we recommend using this already-established Organization rather than [creating a new one]({{site.baseurl}}/article/about-organizations/#create-an-organization).{% endcallout %}
4. Still in the self-hosted Web Vault, import data to your [Personal Vault]({{site.baseurl}}/article/import-your-data/) or [Organization Vault]({{site.baseurl}}/article/import-to-org/).

   {% callout info %}Importing data to an Organization will automatically re-create your [Collections]({{site.baseurl}}/article/about-collections/) and add the relevant Vault items to them.{% endcallout %}
5. Manually upload [file attachments]({{site.baseurl}}/article/attachments/) to your Personal or Organization Vault.

#### Organizations-only Next Steps

If you're migrating an Organization to the Cloud, continue with the following steps:

1. (**Enterprise Organizations Only**) Re-implement your [Enterprise Policy]({{site.baseurl}}/article/policies) specifications and/or configure [Login with SSO]({{site.baseurl}}/article/about-sso/).
2. Manually [re-create user Groups]({{site.baseurl}}/article/about-groups/#create-a-group) in the Cloud and assign them to the proper Collections.
3. Start [inviting users to your Organization]({{site.baseurl}}/article/managing-users/#invite) manually or using [Directory Connector]({{site.baseurl}}/article/directory-sync).

{% endcapture %}
{{ desktop_info | markdownify}}
  </div>
  <div class="tab-pane" id="browserextension" role="tabpanel" aria-labelledby="betab">
{% capture browser_extension %}

### Migrate from one host to another

To migrate from one self-hosted Bitwarden server to another:

1. Stop your existing Bitwarden server by running `./bitwarden.sh stop`. When you run this command, Bitwarden will go down for anyone currently using it.
2. Make a full copy of the `./bwdata` directory of the *old* server. This copy will be used to recreate your configuration, database, attachments, etc. on the new server.
3. [Install and deploy]({{site.baseurl}}/article/install-on-premise/) Bitwarden to your new server.
4. Once the new Bitwarden server is set up, replace the newly-created `./bwdata` directory with the copy from the old server.
5. Print the new Bitwarden server's UID by running `id -u bitwarden`.
6. Open the file `./bwdata/env/uid.env` and check that the listed values match what was printed in the previous step. If they do not match, replace *both* values with the result of `id -u bitwarden`.
7. If you specified a different server domain during **Step 2**, edit the following:
   - In `./bwdata/config.yml`, change the `url:` value to the new domain.
   - In `./bwdata/env/global.override.env`, change `globalSettings__baseServiceUri__vault=` to the new domain.
8. Run `./bitwarden.sh rebuild` to apply changes to `config.yml` and `global.override.env`.
9. Start your Bitwarden server with `./bitwarden.sh start`.

{% endcapture %}
{{ browser_extension | markdownify}}
  </div>
</div>
