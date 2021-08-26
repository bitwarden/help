---
layout: article
title: Schedule a Sync
categories: [directory-connector]
featured: true
popular: false
tags: [directory connector, directory sync, schedule, cronjob]
order: 12
---

For Organizations using the Directory Connector CLI, automatic syncs can be scheduled on defined intervals as an alternative to using the Desktop Applications **Interval** setting. This is particularly useful in headless environments, on in circumstances where a Desktop Application cannot be left running in the background.

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="crontab" data-bs-toggle="tab" data-target="#cron" role="tab" aria-controls="cron" aria-selected="true">{% icon fa-linux %} {% icon fa-apple %} Cron</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="tstab" data-bs-toggle="tab" data-target="#ts" role="tab" aria-controls="ts" aria-selected="false">{% icon fa-windows %} Task Scheduler</a>
  </li>
</ul>
<div class="tab-content" id="clientsContent">
  <div class="tab-pane show active" id="cron" role="tabpanel" aria-labelledby="crontab">
{% capture croninfo %}

## Cron

In Unix-like environments, including Linux and macOS, use cron to schedule Directory Connector sync jobs:

### Cron Permissions

When running a cron job, we recommend doing so as a dedicated Directory Connector user. Create a `bwdc` user if you haven't already, and add that user to the `etc/cron.allow` list. This will allow a non-Root user to set up and run cron jobs.

### Setup a Cron Job

As the permitted `bwdc` user:

1. Edit the user's crontab file by entering `crontab -e` in the terminal, or as edit the crontab file as any user by entering `crontab -u <bwdc_username> -e`.
2. Add a line to the crontab that includes:
   - A [scheduling expression](#cron-job-scheduing-expressions) that will determine the time/recurrence interval on which to execute the desired command (e.g. `0 0 * * 2` to run every Tuesday at midnight).
   - The command to execute at the specified time/recurrence interval. In this case,

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

{% endcapture %}
{{ croninfo | markdownify }}
  </div>
  <div class="tab-pane" id="ts" role="tabpanel" aria-labelledby="tstab">
{% capture tsinfo %}

## Task Scheduler

In Windows environments, use [Task Scheduler](https://docs.microsoft.com/en-us/windows/win32/taskschd/about-the-task-scheduler){:target="\_blank"} to schedule Directory Connector sync jobs.

### Task Scheduler GUI

### Task Scheduler (Headless) -> Can't seem to tell whether this is something anybody'd actually be using...

{% endcapture %}
{{ tsinfo | markdownify }}
  </div>
</div>

{% comment %}

1. Does a cronjob need to schedule a shellscript? i.e. can't just schedule bwdc sync, need to write a .sh that includes it?
  If bwdc is added to their path, they can use straight bwdc commands in the cron expression.

IF .SH REQUIRED, probably must

bwdc login w/ saved environment variables (call profile first?)
bwdc sync
bwdc logout

{% endcomment %}
