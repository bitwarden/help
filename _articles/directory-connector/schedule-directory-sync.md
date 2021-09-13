---
layout: article
title: Schedule a Sync
categories: [directory-connector]
featured: true
popular: false
tags: [directory connector, directory sync, schedule, cronjob]
order: "07"
---

For Organizations using the Directory Connector CLI, automatic syncs can be scheduled on defined intervals as an alternative to using the Desktop Applications **Interval** setting. This is particularly useful in headless environments, on in circumstances where a Desktop Application cannot be left running in the background.

## Cron

In Unix-like environments, including Linux and macOS, use cron to schedule Directory Connector sync jobs:

### Cron Permissions

When running a cron job, we recommend doing so as a dedicated Directory Connector user. Create a `bwdc` user if you haven't already, and add that user to the `etc/cron.allow` list. This will allow a non-Root user to set up and run cron jobs.

In order to continue, you will also need your Organization's [API Key]({{site.baseurl}}/article/public-api/#authentication) `client_id` and `client_secret`, which can be obtained by an Organization **Owner** from the Web Vault by navigating to Organization **Settings** &rarr; **My Organization**.

### Setup a Sync Script

In order avoid session timeouts, we recommend creating a shell script to run through cron, for example:

```
#!/bin/bash

#In order to protect your credentials, this script requires a .p0 file containing the API Key client_secret in base64. Create a temp file with the clear text client_secret and process it using `base64 clearTextFile > .p0`. The .p0 file should be owned and locked down by a unique account (e.g. bwdc) that is only utilized to run this script and Directory Connector. Delete the temp file after creating the .p0 file.

#Additionally, be sure to replace the BW_CLIENTID="..." value with your API Key client_id.
​
file=.p0
export BW_CLIENTID="organization.jAEFNqJ5-yKqx2-sX3jt-p7Mcw-aLY9qfFXbR69"
export BW_CLIENTSECRET=$(cat $file | base64 -d)
​
bwdc login
​
bwdc sync >> bwdc.log
```

This script will securely read your `client_secret` to complete the login, and run a `bwdc sync` command that writes output to `bwdc.log`.

### Setup the Cron Job

As the permitted `bwdc` user:

1. Edit the user's crontab file by entering `crontab -e` in the terminal, or as edit the crontab file as any user by entering `crontab -u <bwdc_username> -e`.
2. Add a line to the crontab that includes:
   - A [scheduling expression](#cron-job-scheduling-expressions) that will determine the time/recurrence interval on which to execute the desired command (e.g. `0 0 * * 2` to run every Tuesday at midnight).
   - The command to execute at the specified time/recurrence interval. In this case, execute the [previously created sync script](#setup-a-sync-script) (e.g. `bwdcSyncService.sh`):

For example, to run the sync script every Monday at 12:00:

```
# 0 12 * * 1 bwdcSyncService.sh
```

#### Cron Job Scheduling Expressions

Use the following reference when scheduling syncs via cron to ensure you're scheduling them for the desired time:

```
# ┌───────────── minute (0 - 59)
# │ ┌───────────── hour (0 - 23)
# │ │ ┌───────────── day of the month (1 - 31)
# │ │ │ ┌───────────── month (1 - 12)
# │ │ │ │ ┌───────────── day of the week (0 - 6) (Sunday to Saturday;
# │ │ │ │ │                                   7 is also Sunday on some systems)
# │ │ │ │ │
# │ │ │ │ │
# * * * * * <command to execute>
```

{% callout success %}
If you're not yet comfortable with cron job scheduling expressions, check out [https://crontab.guru/](https://crontab.guru/){:target="\_blank"} for help.

Please note, this is a third-party resource that is not operated or maintained by Bitwarden.
{% endcallout %}
