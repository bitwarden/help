---
layout: article
title: License Paid Features
categories: [hosting]
featured: false
popular: false
tags: [hosting, licensing]
order: 08
---

Self-hosting Bitwarden is free, however some features must be unlocked in your self-hosted instance with a registered license file. A license file can be obtained from the Bitwarden-hosted [Web Vault](https://vault.bitwarden.com){:target="\_blank"} by either an account with a Premium Individual subscription or by the Owner of an Organization.

{% callout info %}
The procedures in this article assume that you have already started a paid subscription to Bitwarden. If you haven't, refer to [About Bitwarden Plans]({% link _articles/plans-and-pricing/about-bitwarden-plans.md %}) and [What Plan is Right for Me?]({% link _articles/plans-and-pricing/what-plan-is-right-for-me.md %}).
{% endcallout %}

## Individual License

To retrieve your license from your Cloud account and apply it to your self-hosted server:

#### Retrieve your License

1. In the Cloud [Web Vault](https://vault.bitwarden.com){:target="\_blank"}, select **Settings** from the top navigation.
2. Select **Premium Membership** from the left menu.
3. Select the **Download License** button.

#### Apply your License

1. Log in to your self-hosted Web Vault with an email address that matches the Cloud-hosted account from which you downloaded the license.

   {% callout success %}If you haven't already, verify your email address before proceeding. You will need to have [configured SMTP-related environment variables]({{site.baseurl}}/article/environment-variables) to do so.{% endcallout %}
2. Select the **Settings** tab from the top navigation.
3. Select **Go Premium** from the left menu.
4. In the License File section, select the **Browse...** button and add the downloaded license file.
5. Select the **Submit** button to apply your Premium License.

## Organization License

To retrieve your Organization license from your Cloud Organization and apply it to you self-hosted server:

{% callout info %}
You must be an [Organization Owner]({{site.baseurl}}/article/user-types-access-control) to both retrieve and apply a license.
{% endcallout %}

#### Retrieve your License

1. In the Cloud [Web Vault](https://vault.bitwarden.com){:target="\_blank"}, open your Organization.
2. Select the Organization **Settings** tab and select **Subscription** from the left menu.
3. Select the **Download License** button.
4. When prompted, enter the installation id that was used to install your self-hosted server and select **Submit**.

   If you don't know the installation id off-hand, you can retrieve it from `./bwdata/env/global.override.env`.

#### Apply your License

1. Log in to your self-hosted Web Vault with an email address that matches the Cloud-hosted account from which you downloaded the license.
2. Start a new Organization by selecting the {% icon fa-plus %} **Add Organization** button.
3. When prompted, upload the Organization license file and select **Submit**.

### Update a renewed Organization License

When your license expires and your Organization renews, you have 2 months to apply the updated license file to your self-hosted Organization. To apply the update to your license, download the new license file (**Steps 1-3 above**) from the cloud-hosted Bitwarden Organization Vault.

Once downloaded, open your self-hosted Web Vault and update the license from the Organization **Settings** &rarr; **Subscription** page:

{% image hosting/update-license.png Update a self-hosting license %}

If you receive a `version not supported` error message, you'll need to update your server before proceeding. Make a backup or copy of the `bwdata` directory, then follow [these instructions]({{site.baseurl}}/article/updating-on-premise/).
