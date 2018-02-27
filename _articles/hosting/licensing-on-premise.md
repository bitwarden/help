---
layout: article
title: Licensing for paid features
categories: [hosting]
featured: false
popular: false
tags: [hosting, licensing]
---

Hosting Bitwarden yourself is free. However, some features of Bitwarden require that you obtain a paid license in order to unlock.

## Premium Membership

Using premium features of Bitwarden in a self-hosted installation requires that you obtain a premium membership license.

1. If you haven't already, purchase a premium membership by logging in to your bitwarden.com account at <https://vault.bitwarden.com> and navigating to **Settings** &rarr; **Go Premium**.
2. Download your premium license file from <https://vault.bitwarden.com> by navigating to **Settings** &rarr; **Billing** &rarr; **Download License**.
3. Log in to the web vault of your self-hosted Bitwarden installation. Ensure that the email address used for your user account on your self-hosted installation matches the email address used on your bitwarden.com account. Also make sure that your account's email address is verified.
4. In your self hosted installation's web vault, navigate to **Settings** &rarr; **Go Premium**.
5. Upload the license file that you downloaded in step 2 and your user account will upgraded to premium.

## Organization Account (Sharing)

The sharing features of Bitwarden require that you create an organization account. To create an organization in an on-premise hosted Bitwarden installation you must first obtain a **families organization** (for personal use) or **enterprise organization** (for business use) license. Only families and enterprise organization plans are eligible for on-premise hosting.

1. If you haven't already, purchase a families or enterprise organization plan by logging in to your bitwarden.com account at <https://vault.bitwarden.com> and navigating to **Settings** &rarr; **New Organization**. If you would like to upgrade an existing organization account to a families or enterprise plan, please [contact bitwarden support](https://bitwarden.com/contact).
2. Download your families or enterprise organization license file from <https://vault.bitwarden.com> by navigating to your organization's admin area, and then **Settings** &rarr; **Billing &amp; Licensing** &rarr; **Download License**. Enter the [installation id]({% link _articles/hosting/install-on-premise.md %}#install-bitwarden) that matches your bitwarden installation. You can always locate your installation id in the `./bwdata/env/global.override.env` configuration file.
3. Log in to the web vault of your self-hosted Bitwarden installation and navigate to **Settings** &rarr; **New Organization**.
5. Upload the license file that you downloaded in step 2 and your organization account will be created.
