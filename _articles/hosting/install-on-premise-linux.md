---
layout: article
title: Install and Deploy - Linux
categories: [hosting]
featured: false
popular: false
tags: [hosting, docker, install, deploy]
order: "01"
redirect_from:
  - /article/install-on-premise/
description: "This article guides you through the process of installing and deploying the Bitwarden password manager to a Linux server."
---

This article will walk you through the procedure to install and deploy Bitwarden to your own Linux Server. Bitwarden can also be installed and deployed on [Windows]({{site.baseurl}}/article/install-on-premise-windows) machines.

## System Specifications

|    |Minimum|Recommended|
|----|-------|-----------|
|Processor|x64, 1.4GHz|x64, 2GHz dual core|
|Memory|2GB RAM|4GB RAM|
|Storage|10GB|25GB|
|Docker Version|Engine 19+ and Compose 1.24+|Engine 19+ and Compose 1.24+|

{% callout success %}
If you are looking for a quality provider with affordable prices, we recommend **Digital Ocean**.
{% endcallout %}

## TL;DR

The following is a summary of the Installation Procedure in this article. Links in this section will jump to detailed **Installation Procedure** sections:

1. [**Configure your Domain**](#configure-your-domain). Set DNS records for a domain name pointing to your machine, and open ports 80 and 443 on the machine.
2. [**Install Docker and Docker Compose**](#install-docker-and-docker-compose) on your machine.
3. [**Create a Bitwarden User & Directory**](#create-bitwarden-local-user--directory) from which to complete installation.
3. Retrieve an installation id and key from [**https://bitwarden.com/host**](https://bitwarden.com/host){:target="_blank"} for use in installation.

   For more information, see [What are my installation id and installation key used for?]({{site.baseurl}}/article/hosting-faqs/#general).
4. [**Install Bitwarden**](#install-bitwarden) on your machine.
5. [**Configure your Environment**](#post-install-configuration) by adjusting settings in `./bwdata/env/global.override.env`.
   {% callout success %}At a minimum, configure the `globalSettings__mail__smtp...` variables to setup an email server for inviting and verifying users.{% endcallout %}
6. [**Start your instance**](#start-bitwarden).
6. Test your installation by opening your configured domain in a Web Browser.

## Installation Procedure

### Configure your Domain

By default, Bitwarden will be served through ports 80 (`http`) and 443 (`https`) on the host machine. Open these ports so that Bitwarden can be accessed from within and/or outside of the network. You may opt to choose different ports during installation.

We recommend configuring a domain name with DNS records that point to your host machine (for example, `bitwarden.example.com`), especially if you are serving Bitwarden over the internet.

### Install Docker and Docker Compose

Bitwarden will be deployed and run on your machine using an array of [Docker containers](https://docs.docker.com/get-started/){:target="_blank"}. Bitwarden can be run with any Docker Edition or plan. Evaluate which edition is best for your installation.

Deployment of containers is orchestrated using [Docker Compose](https://docs.docker.com/compose/){:target="_blank"}. Some Docker installations, including Docker for macOS, come with Docker Compose already installed.

**Install Docker and Docker Compose on your machine before proceeding with installation.** Refer to the following Docker documentation for help:

- [Install Docker Engine](https://docs.docker.com/engine/installation/){:target="_blank"}
- [Install Docker Compose](https://docs.docker.com/compose/install/){:target="_blank"}

### Create Bitwarden Local User & Directory

We recommend configuring your Linux server with a dedicated `bitwarden` service account, from which to install and run Bitwarden. Doing so will isolate your Bitwarden instance from other applications running on your server.

 **These steps are Bitwarden-recommended best practices, but are not required.** For more information, see Docker's [Post-installation steps for Linux](https://docs.docker.com/engine/install/linux-postinstall/){:target="\_blank"} documentation.

1. Create a bitwarden user:

   ```
   sudo adduser bitwarden
   ```
2. Set password for bitwarden user (strong password):

   ```
   sudo passwd bitwarden
   ```
3. Create a docker group (if it doesn’t already exist):

   ```
   sudo groupadd docker
   ```
4. Add the bitwarden user to the docker group:

   ```
   sudo usermod -aG docker bitwarden
   ```
5. Create a bitwarden directory:

   ```
   sudo mkdir /opt/bitwarden
   ```
6. Set permissions for the `/opt/bitwarden` directory:

   ```
   sudo chmod -R 700 /opt/bitwarden
   ```
7. Set the bitwarden user ownership of the `/opt/bitwarden` directory:

   ```
   sudo chown -R bitwarden:bitwarden /opt/bitwarden
   ```

### Install Bitwarden

Bitwarden provides a shell script for easy installation on Linux and macOS (Bash), or Windows (PowerShell). Complete the following steps to install Bitwarden using the shell script:

{% callout success %}
If you've [created a Bitwarden User & Directory](#create-bitwarden-local-user--directory), complete the following as the `bitwarden` user from the `/opt/bitwarden` directory.
{% endcallout %}

1. Download the Bitwarden installation script (`bitwarden.sh`) to your machine:

   ```
   curl -Lso bitwarden.sh https://go.btwrdn.co/bw-sh && chmod 700 bitwarden.sh
   ```

2. Run the installer script. A `./bwdata` directory will be created relative to the location of `bitwarden.sh`.

   ```
   ./bitwarden.sh install
   ```

3. Complete the prompts in the installer:

   - **Enter the domain name for your Bitwarden instance:**

     Typically, this value should be the configured DNS record.
   - **Do you want to use Let's Encrypt to generate a free SSL certificate? (y/n):**

     Specify `y` to generate a trusted SSL certificate using Let's Encrypt. You will be prompted to enter an email address for expiration reminders from Let's Encrypt. For more information, see [Certificate Options]({{site.baseurl}}/article/certificates/).

     Alternatively, specify `n` and use the **Do you have a SSL certificate to use?** option.

   - **Enter your installation id:**

     Retrieve an installation id using a valid email at [https://bitwarden.com/host](https://bitwarden.com/host). For more information, see [What are my installation id and installation key used for?]({{site.baseurl}}/article/hosting-faqs/#general).
   - **Enter your installation key:**

     Retrieve an installation key using a valid email at [https://bitwarden.com/host](https://bitwarden.com/host). For more information, see [What are my installation id and installation key used for?]({{site.baseurl}}/article/hosting-faqs/#general).
   - **Do you have a SSL certificate to use? (y/n):**

     If you already have your own SSL certificate, specify `y` and place the necessary files in the `.bwdata/ssl/your.domain` directory. You will be asked whether it is a trusted SSL certificate (y/n). For more information, see [Certificate Options]({{site.baseurl}}/article/certificates/).

     Alternatively, specify `n` and use the **self-signed SSL certificate?** option, which is only recommended for testing purposes.
   - **Do you want to generate a self-signed SSL certificate? (y/n):**

     Specify `y` to have Bitwarden generate a self-signed certificate for you. This option is only recommended for testing. For more information, see [Certificate Options]({{site.baseurl}}/article/certificates/).

     If you specify `n`, your instance will not use an SSL certificate and you will be required to front your installation with a HTTPS proxy, or else Bitwarden applications will not function properly.

### Post-Install Configuration

Configuring your environment can involve making changes to two files; an [environment variables file](#environment-variables) and an [installation file](#installation-configuration):

#### Environment Variables (*Required*)

Some features of Bitwarden are not configured by the `bitwarden.sh` script. Configure these settings by editing the environment file, located at `./bwdata/env/global.override.env`. **At a minimum, you should replace the values for:**

```
...
globalSettings__mail__smtp__host=<placeholder>
globalSettings__mail__smtp__port=<placeholder>
globalSettings__mail__smtp__ssl=<placeholder>
globalSettings__mail__smtp__username=<placeholder>
globalSettings__mail__smtp__password=<placeholder>
...
adminSettings__admins=
...
```

Replacing `globalSettings__mail__smtp...=` placeholdesr will configure the SMTP Mail Server that will be used to send verification emails to new users and invitations to Organizations. Adding an email address to `adminSettings__admins=` will provision access to the Admin Portal.

After editing `global.override.env`, run the following command to apply your changes:

```
./bitwarden.sh restart
```

#### Installation File

The Bitwarden installation script uses settings in `./bwdata/config.yml` to generate the necessary assets for installation. Some installation scenarios (e.g. installations behind a proxy with alternate ports) may require adjustments to `config.yml` that were not provided during standard installation.

Edit `config.yml` as necessary and apply your changes by running:

```
./bitwarden.sh rebuild
```

### Start Bitwarden

Once you've completed all previous steps, start your Bitwarden instance:

```
./bitwarden.sh start
```

{% callout info %}
The first time you start Bitwarden it may take some time as it downloads all of the images from Docker Hub.
{% endcallout %}

Verify that all containers are running correctly:

```
docker ps
```

{% image hosting/docker-healthy.png %}

Congratulations! Bitwarden is now up and running at `https://your.domain.com`. Visit the web vault in your web browser to confirm that it's working.

You may now register a new account and log in. You will need to have configured `smtp` environment variables (see [Environment Variables](#environment-variable)) in order to verify the email for your new account.

## Script Commands Reference

The Bitwarden installation script (`bitwarden.sh` or `bitwarden.ps1`) has the following commands available:

{% callout info %}
PowerShell users will run the commands with a prefixed `-` (switch). For example `.\bitwarden.ps1 -start`.
{% endcallout %}

{% table %}

| Command    | Description                                                    |
|------------|----------------------------------------------------------------|
| install    | Start the installer.                                           |
| start      | Start all containers.                                          |
| restart    | Restart all containers (same as start).                        |
| stop       | Stop all containers.                                           |
| update     | Update all containers and the database.                        |
| updatedb   | Update/initialize the database.                                |
| updateself | Update this main script.                                       |
| updateconf | Update all containers without restarting the running instance. |
| renewcert  | Renew certificates.                                            |
| rebuild    | Rebuild generated installation assets from `config.yml`.       |
| help       | List all commands.                                             |

{% endtable %}
