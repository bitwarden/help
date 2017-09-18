---
layout: article
title: Installing and deploying
categories: [hosting]
featured: false
popular: false
tags: [hosting, docker, install, deploy]
---

{% warning %}
On-premise hosting is currently in beta. It is not yet ready for real, production use. You should only use this beta for testing purposes. DO NOT STORE SENSITIVE DATA IN THESE BETA INSTALLATIONS. There will be no upgrade path to the production versions from these beta installations and they should be removed when you are done testing.

You can provide feedback about this beta on GitHub at <https://github.com/bitwarden/core/issues/62>.
{% endwarning %}

This article will walk you through how to install and deploy bitwarden to your own server. Because bitwarden is a cross platform application, you can install and deploy it on Linux, macOS, and Windows machines.

## Table of Contents

- [TL;DR](#tldr)
- [Configure Your Domain](#configure-your-domain)
- [Install Docker](#install-docker)
- [Adjust Docker Resources](#adjust-docker-resources)
- [Install bitwarden](#install-bitwarden)
- [Post-install Environment Configuration](#post-install-environment-configuration)
- [Start bitwarden](#start-bitwarden)
- [Script Commands](#script-commands)

## TL;DR

1. Set DNS records for a domain name pointing to your machine. Open ports 80 and 443 on the machine.
2. Install [Docker](https://docs.docker.com/engine/installation/){:target="_blank"} and [Docker Compose](https://docs.docker.com/compose/install/){:target="_blank"}. If using Windows or macOS, adjust Docker so that it has at least 4 GB of RAM available.
3. Get an installation id and key from [https://bitwarden.com/host](https://bitwarden.com/host){:target="_blank"}.
4. Install & deploy bitwarden.
    
    {% icon fa-linux %} {% icon fa-apple %} Bash

       curl -s -o bitwarden.sh \
           https://raw.githubusercontent.com/bitwarden/core/master/scripts/bitwarden.sh \
           && sudo chmod u+x bitwarden.sh
       ./bitwarden.sh install
       ./bitwarden.sh start
       ./bitwarden.sh updatedb

    {% icon fa-windows %} PowerShell

       Invoke-RestMethod -OutFile bitwarden.ps1 `
           -Uri https://raw.githubusercontent.com/bitwarden/core/master/scripts/bitwarden.ps1
       .\bitwarden.ps1 -install
       .\bitwarden.ps1 -start
       .\bitwarden.ps1 -updatedb
5. Adjust additional configuration settings in `./bitwarden/env/global.override.env` and restart.
    
    {% icon fa-linux %} {% icon fa-apple %} Bash

       ./bitwarden.sh restart

    {% icon fa-windows %} PowerShell

       .\bitwarden.ps1 -restart
6. Test your deployment. Visit the web vault at your configured domain name, register a new account, and log in.

## Configure Your Domain

bitwarden will be served through ports 80 (http) and 443 (https) on the localhost machine. You should open these ports so that bitwarden can be accessed from within and/or outside of the network.

It you are serving bitwarden to the outside world you will need to configure a domain name with DNS records that point to your host machine (ex. bitwarden.company.com). You should configure this domain before beginning your bitwarden installation.

## Install Docker

bitwarden will be deployed and ran on your machine using an array of [Docker](https://www.docker.com/what-docker){:target="_blank"} containers. bitwarden will work equally well with Docker Community (free) and Enterprise editions. You should evaluate which edition is best for your installation. Additionally, deployment of these containers is orchestrated through the use of [Docker Compose](https://docs.docker.com/compose/){:target="_blank"}. Docker and Docker Compose must first be installed on your machine before beginning a bitwarden installation.

See the following official Docker documentation for more information:

- [Install Docker](https://docs.docker.com/engine/installation/){:target="_blank"}
- [Install Docker Compose](https://docs.docker.com/compose/install/){:target="_blank"} 

{% note %}
Some Docker installations such as Windows and macOS already come with Docker Compose installed.
{% endnote %}

For reference, you can find the official bitwarden images hosted on Docker Hub at [https://hub.docker.com/u/bitwarden/](https://hub.docker.com/u/bitwarden/){:target="_blank"}.

## Adjust Docker Resources

SQL Server requires that Docker be allocated with a minimum of 4 GB of RAM. By default, Docker on macOS and Windows only has 2 GB of RAM allocated. Docker on Linux should be ok.

To adjust this, simply go to Docker (click on the docker icon) &rarr; Preferences &rarr; Advanced. Change the slider to 4 GB (or more), save, and restart Docker.

You can read more about this at [https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker](https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker){:target="_blank"}.

## Install bitwarden

We've made installing bitwarden very simple. Depending in your environment (non-Windows vs. Windows) we provide Bash (Linux and macOS) and PowerShell (Windows) scripts to aide in installing and managing your bitwarden installation. The following steps will include references for both Bash  and PowerShell.

1. Download the main bitwarden script to your machine in the desired location:

    {% note %}All bitwarden assets will be installed in the `./bitwarden` directory relative to where the main script resides.{% endnote %}

    {% icon fa-linux %} {% icon fa-apple %} Bash

       curl -s -o bitwarden.sh \
           https://raw.githubusercontent.com/bitwarden/core/master/scripts/bitwarden.sh \
           && sudo chmod u+x bitwarden.sh

    {% icon fa-windows %} PowerShell

       Invoke-RestMethod -OutFile bitwarden.ps1 `
           -Uri https://raw.githubusercontent.com/bitwarden/core/master/scripts/bitwarden.ps1

2. Start the installer:

    {% icon fa-linux %} {% icon fa-apple %} Bash

       ./bitwarden.sh install

    {% icon fa-windows %} PowerShell

       .\bitwarden.ps1 -install

3. Complete the prompts in the installer.

    **SSL Certificate**

    - bitwarden can generate and maintain renewal of a trusted SSL certificate for your domain for completely free provided by [Let's Encrypt](https://letsencrypt.org){:target="_blank"} and [Certbot](https://certbot.eff.org){:target="_blank"}. Certificate renewal checks occur each time bitwarden is restarted.

    - If you already have your own SSL certificate you can place the following files in the `./bitwarden/ssl/your.domain.com` directory:
      - certificate.crt (required)
      - private.key (required)
      - ca.crt (optional, if trusted)
      - dhparam.pem (optional, if using Diffie Hellman ephemeral parameters)

    - If you are only testing and do not have an SSL certificate, a self-signed certificate will be generated for your installation.

    **Installation Id/Key**

    Each bitwarden installation requires a unique installation id and installation key. You should not share your installation id or installation key across multiple bitwarden installations. They should be treated as secrets.

    You can obtain an installation id and key from [https://bitwarden.com/host](https://bitwarden.com/host){:target="_blank"}.

    **Push Notifications**

    If you would like to take advantage of having push notifications automatically keep your bitwarden client applications synced in real time you can choose to use the bitwarden push notification relay service. This relay service is provided by external bitwarden servers. You should ensure that your machine can communicate with the `https://push.bitwarden.com` endpoint. Your bitwarden installation will POST **non-sensitive data** (reference ids) to the relay service which will then notify the bitwarden client applications to "phone home" for an update back to your installation.

    The use of the push notification relay service is optional. If you do not use this service you will need to keep your client applications in sync manually.

## Post-install Environment Configuration

Some features such as a SMTP mail server settings, YubiKey OTP API credentials, etc. are not configured by the installer. You can find the environment file for these settings (and all others) in the following location: `./bitwarden/env/global.override.env`. Edit this file and REPLACE the placeholders values for them.

Example:

```
globalSettings__yubico__clientId=294620155
globalSettings__yubico__key=YOUR_KEY
globalSettings__mail__smtp__host=smtp.sendgrid.net
globalSettings__mail__smtp__username=apikey
globalSettings__mail__smtp__password=SG.YOUR.API_KEY
globalSettings__mail__smtp__ssl=true
globalSettings__mail__smtp__port=587
```

You can get a YubiKey client id and key at [https://upgrade.yubico.com/getapikey/](https://upgrade.yubico.com/getapikey/){:target="_blank"}.

## Start bitwarden

Once you've completed installing and configuring your bitwarden installation you can start it up:

{% note %}
The first time you start bitwarden it may take some time as it downloads all of the images from Docker Hub.
{% endnote %}

{% icon fa-linux %} {% icon fa-apple %} Bash

    ./bitwarden.sh start

{% icon fa-windows %} PowerShell

    .\bitwarden.ps1 -start

You can then verify that all containers are up and running correctly:

    docker ps

{% image hosting/docker-ps.png %}

Finally, you need to initialize and update the bitwarden database:

{% icon fa-linux %} {% icon fa-apple %} Bash

    ./bitwarden.sh updatedb

{% icon fa-windows %} PowerShell

    .\bitwarden.ps1 -updatedb

Congratulations! bitwarden is now up and running at `https://your.domain.com`. Visit the web vault in your web browser to confirm. You should register a new account and log in.

## Script Commands

The bitwarden main script (`bitwarden.sh` or `bitwarden.ps1`) has the following commands available:

{% note %}
PowerShell users will run the commands with a prefixed `-` (switch). For example `.\bitwarden.ps1 -start`.
{% endnote %}

{% table %}

| Command    | Description                             |
|------------|-----------------------------------------|
| install    | Start the installer.                    |
| start      | Start all containers.                   |
| restart    | Restart all containers (same as start). |
| stop       | Stop all containers.                    |
| updatedb   | Update the database.                    |
| update     | Update all containers and the database. |
| updateself | Update this main script.                |

{% endtable %}
