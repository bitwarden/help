---
layout: article
title: Update your Instance
categories: [hosting]
featured: false
popular: false
tags: [hosting, update]
order: "07"
description: "If you self-host Bitwarden, this article will explain how to keep your password manager up to date. "
---

{% callout success %}
Please be aware that self-hosted server releases lag several days behind Cloud server releases.
{% endcallout %}

**It is critically important to keep your Self-hosted Bitwarden instance up to date.** Updates may include fixes that are important for the security of your Bitwarden instance, including patches to any vulnerabilities. Data stored in your Bitwarden Vault, including passwords, should be considered critical data and therefore protected with up-to-date software.

 Additionally, newer versions of client applications may not support older versions of your self-hosted instance.

{% callout warning %}
We highly recommend backing up your data before updating your self-hosted instance. For more information, see [Backup your Hosted Data]({{site.baseurl}}/article/backup-on-premise/).
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
We recommend creating a cronjob or scheduled task to run these update commands weekly, or even nightly, to keep your instance up to date. For example, the following cron job would check for an update every Sunday at 2:00 and turn off email output for the job:

```
0 2 * * 0 /opt/bitwarden/bwdata/scripts/updatebw.sh >/dev/null 2>&1
```

In the above example, `updatebw.sh` is a script you must save manually that contains:

```
#!/bin/bash
./bitwarden.sh updateself
./bitwarden.sh update
```
{% endcallout %}
