---
layout: article
title: Install and Deploy - Windows
categories: [hosting]
featured: false
popular: false
tags: [hosting, docker, install, deploy]
order: "02"
---

This article will walk you through the procedure to install and deploy Bitwarden to your own Windows Server. Bitwarden can also be installed and deployed on [Linux and macOS]({{site.baseurl}}/article/install-on-premise/) machines.

## System Specifications

| |Minimum|Recommended|
|-|-------|-----------|
|Processor|x64, 1.4GHz|x64, 2GHz Dual Core|
|Memory|6GB RAM|8+ GB RAM|
|Storage|10GB|25GB|
|Docker Version|Engine 19+ and Compose 1.24+|Engine 19+ and Compose 1.24+|

### Nested Virtualization

Running Bitwarden on a Windows Server **requires use of Nested Virtualization**. Please check your Hypervisor's documentation to find out if Nested Virtualization is supported and how to enable it.

{% callout success %}
If you're running the Windows Server as an Azure VM, we recommend a **Standard D2s v3 Virtual Machine running Windows Server 2019 Gen2**, which meets all [system requirements](#system-specifications) including support for Nested Virtualization.
{% endcallout %}

## TL;DR

The following is a summary of the [Installation Procedure](#installation-procedure) in this article. Links in this section will jump to detailed **Installation Procedure** sections:

1. [**Configure your Domain**](#configure-your-domain). Set DNS records for a domain name pointing to your machine, and open ports 80 and 443 on the machine.
2. [**Install and Setup Docker Desktop**](#setup-docker-desktop) on your machine.
3. [**Create a Bitwarden User & Directory**](#create-bitwarden-local-user--directory) from which to complete the installation.
4. Retrieve an installation id and key from [**https://bitwarden.com/host**](https://bitwarden.com/host){:target="_blank"} for use in installation.

   For more information, see [What are my installation id and installation key used for?]({{site.baseurl}}/article/hosting-faqs/#general).
5. [**Install Bitwarden**](#install-bitwarden) on your machine.
6. [**Configure your Environment**](#post-install-configuration) by adjusting settings in `\bwdata\env\global.override.env`.
   {% callout success %}At a minimum, configure the `globalSettings__mail__smtp...` variables to setup an email server for inviting and verifying users.{% endcallout %}
7. [**Start your instance**](#start-bitwarden).
8. Test your installation by opening your configured domain in a Web Browser.

## Installation Procedure

### Configure your Domain

By default, Bitwarden will be served through ports 80 (`http`) and 443 (`https`) on the host machine. Open these ports so that Bitwarden can be accessed from within and/or outside of the network. You may opt to choose different ports during installation.

{% callout success %}
**If you're using Windows Firewall**, Docker Desktop for Windows will not automatically add an exception for itself in Windows Firewall. Add exceptions for TCP ports 80 and 443 (or chosen alternative ports) to prevent some errors.
{% endcallout %}

We recommend configuring a domain name with DNS records that point to your host machine (for example, `bitwarden.example.com`), especially if you are serving Bitwarden over the internet.

### Setup Docker Desktop

Bitwarden will be deployed and run on your machine using an array of [Docker containers](https://docs.docker.com/get-started/){:target="_blank"}. Docker Desktop for Windows includes both Docker Engine and Docker Compose. Download and install [Docker Desktop for Windows](https://docs.docker.com/desktop/windows/install/){:target="\_blank"} and check the **Enable Hyper-V Windows Features** configuration option during installation.

### Create Bitwarden Local User & Directory

Open PowerShell and create a Bitwarden local user by running the following commands:

```
PS C:\> $Password = Read-Host -AsSecureString
```
After running the above command, enter the desired password in the text input dialog. After specifying a password, run the following:
```
New-LocalUser "Bitwarden" -Password $Password -Description "Bitwarden Local Admin"
```

As the newly created user, create a Bitwarden folder under `C:\`:

```
PS C:\> mkdir Bitwarden
```

In Docker Desktop, navigate to **Settings** &rarr; **Resources** &rarr; **File Sharing** and add the created directory (`C:\Bitwarden`) to the Resources list. Select **Apply & Restart** to apply your changes.

### Install Bitwarden

Bitwarden provides a Powershell Cmdlet file (`.ps1`) for easy installation on Windows machines. Complete the following steps to install Bitwarden using the Cmdlet:

{% callout success %}
If you've [created a Bitwarden User & Directory](#create-bitwarden-local-user--directory), complete the following as the `Bitwarden` user.
{% endcallout %}

1. Navigate to the [created](#create-bitwarden-local-user--directory) directory:

   ```
   cd C:\Bitwarden
   ```
1. Run the following command to download the Bitwarden installation script (`bitwarden.ps1`):

   ```
   Invoke-RestMethod -OutFile bitwarden.ps1 -Uri https://go.btwrdn.co/bw-ps
   ```
2. Run the installer script using the following command:

   ```
   .\bitwarden.ps1 -install
   ```
3. Complete the prompts in the installer:

   - **Enter the domain name for your Bitwarden instance:**

      Typically, this value should be the configured DNS record.
   - **Do you want to use Let's Encrypt to generate a free SSL certificate? (y/n):**

      Specify `y` to generate a trusted SSL certificate using Let's Encrypt. You will be prompted to enter an email address for expiration reminders from Let's Encrypt. For more information, see [Certificate Options]({{site.baseurl}}/article/certificates/).

      Alternatively, specify `n` and use the **Do you have a SSL certificate to use?** option.
   - **Enter your installation id:**

      Retrieve an installation id using a valid email at [https://bitwarden.com/host](https://bitwarden.com/host){:target="\_blank"}. For more information, see [What are my installation id and installation key used for?]({{site.baseurl}}/article/hosting-faqs/#q-what-are-my-installation-id-and-installation-key-used-for).
   - **Enter your installation key:**

      Retrieve an installation key using a valid email at [https://bitwarden.com/host](https://bitwarden.com/host){:target="\_blank"}. For more information, see [What are my installation id and installation key used for?]({{site.baseurl}}/article/hosting-faqs/#q-what-are-my-installation-id-and-installation-key-used-for).
   - **Do you have a SSL certificate to use? (y/n)**

      If you already have your own SSL certificate, specify `y` and place the necessary files in the `C:\Bitwarden\bwdata\ssl\<your_domain>` directory. You will be asked whether it is a trusted SSL certificate (`y/n`). For more information, see [Certificate Options]({{site.baseurl}}/article/certificates/).

      Alternatively, specify `n` and use the **self-signed SSL certificate?** option, which is only recommended for testing purposes.
   - **Do you want to generate a self-signed SSL certificate? (y/n)**:

      Specify `y` to have Bitwarden generate a self-signed certificate for you. This option is only recommended for testing. For more information, see [Certificate Options]({{site.baseurl}}/article/certificates/).

      If you specify `n`, your instance will not use an SSL certificate and you will be required to front your installation with an HTTPS proxy, or else Bitwarden applications will not function properly.

### Post-Install Configuration

Configuring your environment can involve making changes to two files; an [environment variables file](#environment-variables) and an [installation file](#installation-configuration):

#### Environment Variables (*Required*)

Some features of Bitwarden are not configured by the `bitwarden.ps1` Cmdlet. Configure these settings by editing the environment file, located at `\bwdata\env\global.override.env`. **At a minimum, you should replace the values for:**

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
.\bitwarden.ps1 -restart
```

#### Installation File

The Bitwarden installation script uses settings in `.\bwdata\config.yml` to generate the necessary assets for installation. Some installation scenarios (e.g. installations behind a proxy with alternate ports) may require adjustments to `config.yml` that were not provided during standard installation.

Edit `config.yml` as necessary and apply your changes by running:

```
.\bitwarden.psq -rebuild
```

### Start Bitwarden

Once you've completed all previous steps, start your Bitwarden instance by running the following command:

```
.\bitwarden.ps1 -start
```

{% callout info %}
The first time you start Bitwarden it may take some time as it downloads images from Docker Hub.
{% endcallout %}

Verify that all containers are running correctly:

```
docker ps
```

{% image hosting/docker-ps-win.png List showing Healthy Containers %}

Congratulations! Bitwarden is now up and running at `https://your.domain.com`. Visit the web vault in your web browser to confirm that it’s working.

You may now register a new account and log in. You will need to have configured `smtp` environment variables (see [Environment Variables]({{site.baseurl}}/article/environment-variables/)) in order to verify the email for your new account.

## Start Docker on Boot

Docker Desktop will only automatically start on boot if you have a logged-in RDP session. To start Docker Desktop on boot regardless of whether there is a user logged in:

{% callout warning %}
Docker Desktop may take up to 15 minutes after boot to fully start and for containers to be accessible from the network.
{% endcallout %}

1. Open Task Scheduler and select **Create Task...** from the Actions menu.
2. Configure the task with the following Security options:

   - Set the task to use the [created](#create-bitwarden-local-user--directory) `Bitwarden` user account.
   - Set the task to **Run whether user is logged on or not**.
3. Select the **Triggers** tab and create the following trigger:

   - From the Begin the task dropdown, select **At startup**.
   - In the Advanced settings section, check the **Delay task for:** checkbox and select **1 minute** from the dropdown.
4. Select the **Actions** tab and create the following action:

   - In the Program/script input, specify `"C:\Program Files\Docker\Docker\Docker Desktop.exe"`.
5. Select **OK** to finish creating the scheduled task.

## Script Commands Reference

The Bitwarden installation script (`bitwarden.ps1`) has the following commands available. All command must be prefixed with a switch (`-`), for example `.\bitwarden.ps1 -start`:

|Command|Description|
|-------|-----------|
|-install|Start the installer.|
|-start|Start all containers.|
|-restart|Restart all containers.|
|-stop|Stop all containers.|
|-update|Update all containers and the database.|
|-updatedb|Update/initialize the database.|
|-updateself|Update the installation script.|
|-updateconf|Update all containers without restarting the running instance.|
|-renewcert|Renew certificates.|
|-rebuild|Rebuild generated installation assets from `config.yml`.|
|-help|List all commands.|
