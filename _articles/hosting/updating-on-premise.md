---
layout: article
title: Update your Instance
categories: [hosting]
featured: false
popular: false
tags: [hosting, update]
order: 06
---

{% callout success %}
Please be aware that self-hosted server releases lag several days behind Cloud server releases.
{% endcallout %}

**It is critically important to keep your Self-hosted Bitwarden instance up to date.** Updates may include fixes that are important for the security of your Bitwarden instance, including patches to any vulnerabilities. Data stored in your Bitwarden Vault, including passwords, should be considered critical data and therefore protected with up-to-date software.

 Additionally, newer versions of client applications may not support older versions of your self-hosted instance.

{% callout warning %}
We highly recommend backing up your data before updating your self-hosted instance. For more information, see [Backup your Hosted Data]({% link _articles/hosting/backup-on-premise.md %}).
{% endcallout %}

Update your Bitwarden instance using the same Bash (Linux or macOS) or Powershell (Windows) script (`bitwarden.sh`) used to install Bitwarden. Run the following sequence of commands:

{% icon fa-linux %} {% icon fa-apple %} Bash

    ./bitwarden.sh updateself
    ./bitwarden.sh update

{% icon fa-windows %} PowerShell

    .\bitwarden.ps1 -updateself
    .\bitwarden.ps1 -update

Your Bitwarden installation should now be fully up to date and running.

{% callout success %}
We recommend creating a cronjob or scheduled task to run these update commands weekly, or even nightly. This will automatically keep your instance up to date.
{% endcallout %}
