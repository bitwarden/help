---
layout: article
title: Installing and deploying
categories: [hosting]
featured: false
popular: false
tags: [hosting, docker, install, deploy]
---

This article will walk you through how to install and deploy Bitwarden to your own server. Because Bitwarden is a cross platform application, you can install and deploy it on Linux, macOS, and Windows machines.

## Table of Contents

- [TL;DR](#tldr)
- [System Requirements](#system-requirements)
- [Configure Your Domain](#configure-your-domain)
- [Install Docker](#install-docker)
- [Install Bitwarden](#install-bitwarden)
- [Post-install Environment Configuration](#post-install-environment-configuration)
- [Start Bitwarden](#start-bitwarden)
- [Script Commands](#script-commands)

## TL;DR

1. Set DNS records for a domain name pointing to your machine. Open ports 80 and 443 on the machine.
2. Install [Docker](https://docs.docker.com/engine/installation/){:target="_blank"} and [Docker Compose](https://docs.docker.com/compose/install/){:target="_blank"}.
3. Get an installation id and key from [https://bitwarden.com/host](https://bitwarden.com/host){:target="_blank"}.
4. Install & deploy Bitwarden.
    
    {% icon fa-linux %} {% icon fa-apple %} Bash

       curl -s -o bitwarden.sh \
           https://raw.githubusercontent.com/bitwarden/core/master/scripts/bitwarden.sh \
           && chmod +x bitwarden.sh
       ./bitwarden.sh install
       ./bitwarden.sh start
       ./bitwarden.sh updatedb

    {% icon fa-windows %} PowerShell

       Invoke-RestMethod -OutFile bitwarden.ps1 `
           -Uri https://raw.githubusercontent.com/bitwarden/core/master/scripts/bitwarden.ps1
       .\bitwarden.ps1 -install
       .\bitwarden.ps1 -start
       .\bitwarden.ps1 -updatedb
5. Adjust additional configuration settings in `./bwdata/env/global.override.env` and restart.
    
    {% icon fa-linux %} {% icon fa-apple %} Bash

       ./bitwarden.sh restart

    {% icon fa-windows %} PowerShell

       .\bitwarden.ps1 -restart
6. Test your deployment. Visit the web vault at your configured domain name, register a new account, and log in.

## System Requirements

- Processor: x64, 1.4GHz or faster
- Memory: 2GB of RAM or more
- Storage: 10GB or more
- Docker: Engine 1.8+ and Compose 1.17.1+

If you are looking for a quality provider with affordable prices, we recommend:

[![Digital Ocean](/images/digital-ocean.png "Digital Ocean")](https://m.do.co/c/512986b01931){:target="_blank"}

## Configure Your Domain

By default, Bitwarden will be served through ports 80 (http) and 443 (https) on the localhost machine. You should open these ports so that Bitwarden can be accessed from within and/or outside of the network. You can choose different ports during installation if you like.

If you are serving Bitwarden to the outside world you will need to configure a domain name with DNS records that point to your host machine (ex. bitwarden.company.com). *You should configure this domain before beginning your Bitwarden installation.*

Alternatively, if you are only testing you can install Bitwarden to the "localhost" domain.

## Install Docker

Bitwarden will be deployed and ran on your machine using an array of [Docker](https://www.docker.com/what-docker){:target="_blank"} containers. Bitwarden will work equally well with Docker Community (free) and Enterprise editions. You should evaluate which edition is best for your installation. Additionally, deployment of these containers is orchestrated through the use of [Docker Compose](https://docs.docker.com/compose/){:target="_blank"}. Docker and Docker Compose must first be installed on your machine before beginning a Bitwarden installation.

See the following official Docker documentation for more information:

- [Install Docker](https://docs.docker.com/engine/installation/){:target="_blank"}
- [Install Docker Compose](https://docs.docker.com/compose/install/){:target="_blank"} 

{% note %}
Some Docker installations such as Windows and macOS already come with Docker Compose installed.
{% endnote %}

For reference, you can find the official Bitwarden images hosted on Docker Hub at [https://hub.docker.com/u/bitwarden/](https://hub.docker.com/u/bitwarden/){:target="_blank"}.

## Install Bitwarden

We've made installing Bitwarden very simple. Depending on your environment (non-Windows vs. Windows) we provide Bash (Linux and macOS) and PowerShell (Windows) scripts to aide in installing and managing your Bitwarden installation. The following steps will include references for both Bash and PowerShell.

1. Download the main Bitwarden script to your machine in the desired location:

    {% note %}All Bitwarden assets will be installed in the `./bwdata` directory relative to where the main Bitwarden script resides.{% endnote %}

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

    **Installation Id/Key**

    Each Bitwarden installation requires a unique installation id and installation key. The installation id and key is used to:

    1. Register your installation and contact email so that we can contact you in case of important security updates.
    2. Validate licensing of paid features.
    3. Authenticate to push relay servers for push notifications to Bitwarden client applications.

    You should not share your installation id or installation key across multiple Bitwarden installations. They should be treated as secrets.

    You can obtain an installation id and key from [https://bitwarden.com/host](https://bitwarden.com/host){:target="_blank"}.

    **SSL Certificate**

    - Bitwarden can generate and maintain renewal of a trusted SSL certificate for your domain for completely free provided by [Let's Encrypt](https://letsencrypt.org){:target="_blank"} and [Certbot](https://certbot.eff.org){:target="_blank"}. Certificate renewal checks occur each time Bitwarden is restarted. Use of the automated Let's Encrypt certificate requires ports 80 and 443 to be available. Alternatively, you can manage your own Let's Encrypt certificate outside of the Bitwarden setup script and provide it using the "bring your own SSL certificate" method as described below.

    - If you already have your own SSL certificate you can place the necessary files in the `./bwdata/ssl/your.domain.com` directory. File paths for certificate assets are configurable from the `./bwdata/config.yml` file if you wish to change the default paths generated by the installer.
      - certificate.crt (required). If not done so already, you may need to bundle your primary certificate with any intermediate certificates provided by the CA or else you will receive SSL trust errors. ex. `cat domain.crt ca.crt >> certificate.crt`. [See here](https://www.google.com/search?q=nginx+ssl+bundle+certificate+and+ca){:target="_blank"} for more information.
      - private.key (required)
      - ca.crt (optional, if trusted)
      - dhparam.pem (optional, if using Diffie Hellman ephemeral parameters). You can create your own `dhparam.pem` by using OpenSSL with `openssl dhparam -out ./dhparam.pem 2048`.

    - If you are only testing and do not have an SSL certificate, a self-signed certificate can be generated for your installation. Self-signed certificates will not be trusted by Bitwarden client applications so you will need to install this certificate to the trusted store of each device you plan to use Bitwarden with.

    - If you choose not to configure Bitwarden with a SSL certificate you must front your installation with a proxy that serves the Bitwarden installation over SSL. HTTPS is required to use Bitwarden. If you try to use Bitwarden without the HTTPS protocol you will get errors.

## Post-install Environment Configuration

**Installation Config File**

The Bitwarden setup script uses settings from `./bwdata/config.yml` to generate the necessary assets for the installation to operate. More advanced installation scenarios (ex. installations behind a proxy with alternate ports) may need to make further configuration adjustments that were not provided during the standard installation prompts. Additionally, if you need to alter the initial installation settings (ex. changing the domain name used for Bitwarden) these can be made from `./bwdata/config.yml`.

After changing settings in `./bwdata/config.yml`, you can apply them by running:

{% icon fa-linux %} {% icon fa-apple %} Bash

    ./bitwarden.sh rebuild

{% icon fa-windows %} PowerShell

    .\bitwarden.ps1 -rebuild

**Environment Variables**

Some features such as a SMTP mail server settings, YubiKey OTP API credentials, etc. are not configured by the installer. You can find the environment file for these settings (and all others) in the following location: `./bwdata/env/global.override.env`. Edit this file and REPLACE the placeholders values for them.

Example:

```
globalSettings__yubico__clientId=294620155
globalSettings__yubico__key=owdez88RdxVZuGbZ4fv
globalSettings__mail__smtp__host=smtp.sendgrid.net
globalSettings__mail__smtp__username=apikey
globalSettings__mail__smtp__password=SG.YOUR.API_KEY
globalSettings__mail__smtp__ssl=true
globalSettings__mail__smtp__port=587
globalSettings__mail__smtp__useDefaultCredentials=false
```

If you plan to use YubiKeys for two-step login, you can get your YubiKey client id and key at [https://upgrade.yubico.com/getapikey/](https://upgrade.yubico.com/getapikey/){:target="_blank"}.

## Start Bitwarden

Once you've completed installing and configuring your Bitwarden installation you can start it up:

{% note %}
The first time you start Bitwarden it may take some time as it downloads all of the images from Docker Hub.
{% endnote %}

{% icon fa-linux %} {% icon fa-apple %} Bash

    ./bitwarden.sh start

{% icon fa-windows %} PowerShell

    .\bitwarden.ps1 -start

You can then verify that all containers are up and running correctly:

    docker ps

{% image hosting/docker-ps.png %}

Finally, you need to initialize and update the Bitwarden database:

{% icon fa-linux %} {% icon fa-apple %} Bash

    ./bitwarden.sh updatedb

{% icon fa-windows %} PowerShell

    .\bitwarden.ps1 -updatedb

Congratulations! Bitwarden is now up and running at `https://your.domain.com`. Visit the web vault in your web browser to confirm. You should register a new account and log in.

## Script Commands

The Bitwarden main script (`bitwarden.sh` or `bitwarden.ps1`) has the following commands available:

{% note %}
PowerShell users will run the commands with a prefixed `-` (switch). For example `.\bitwarden.ps1 -start`.
{% endnote %}

{% table %}

| Command    | Description                                              |
|------------|----------------------------------------------------------|
| install    | Start the installer.                                     |
| start      | Start all containers.                                    |
| restart    | Restart all containers (same as start).                  |
| stop       | Stop all containers.                                     |
| updatedb   | Update/initialize the database.                          |
| update     | Update all containers and the database.                  |
| updateself | Update this main script.                                 |
| rebuild    | Rebuild generated installation assets from `config.yml`. |

{% endtable %}
