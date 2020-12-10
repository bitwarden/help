---
layout: article
title: License Paid Features
categories: [hosting]
featured: false
popular: false
tags: [hosting, licensing]
order: 08
---

Self-hosting Bitwarden is free, however some features must be unlocked in your self-hosted instance with a registered license file. A license file can be obtained from the Bitwarden-hosted [Web Vault](https://vault.bitwarden.com){:target="\_blank"} by either an account with a Premium Individual subscription or by the Owner of a Families or Enterprise Organization.

{% callout info %}
The procedures in this article assume that you have already started a paid subscription to Bitwarden. If you haven't, see [What Plan is Right for Me?]({% link _articles/plans-and-pricing/what-plan-is-right-for-me.md %}).
{% endcallout %}

## Individual License

For individual users, complete the following steps to retrieve and apply a license to your self-hosted instance:

1. In the Bitwarden-hosted [Web Vault](https://vault.bitwarden.com){:target="\_blank"}, select **Settings** from the top navigation bar.
2. Select **Premium Membership** from the left menu.
3. Select the **Download License** button.
4. Log in in to your self-hosted Web Vault with an email address that matches the Bitwarden-hosted account from which you downloaded the license.

   If you haven't already, verify your email address before proceeding. You will need to have configured SMTP environment variables to do so, for more information see [Configure Environment Variables]({% link _articles/hosting/environment-variables.md %}).
5. Select the **Settings** tab from the top navigation.
6. Select **Go Premium** from the left menu.
7. In the License File section, select the **Browse...** button and add your downloaded license file.
8. Select the **Submit** button to finish applying your Premium License.

## Organization License

For Owners of a Families or Enterprise Organization, complete the following steps to retrieve and apply a license to your self-hosted instance:

1. Log in to your [Web Vault](https://vault.bitwarden.com){:target="\_blank"} and open your Organization.
2. In your Organization, open the **Settings** tab and select **Subscription** from the left menu.
3. On the **Subscription** screen, select the **Download License** button.

   You will be prompted to enter an installation id. Enter the installation id that was used to install your self-hosted instance and select **Submit**.

   You can retrieve your installation id from `./bwdata/env/global.override.env` or, for more information, see [Install and Deploy]({% link _articles/hosting/install-on-premise.md %}).
4. Log in in to your self-hosted Web Vault.
5. Start a new Organization in your self-hosted instance by selecting the {% icon fa-plus %} **Add Organization** button.

   You will be prompted to upload a license file. Select the **Browse** button and add your downloaded license file.
