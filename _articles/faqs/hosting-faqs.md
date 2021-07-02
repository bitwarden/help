---
layout: article
title: Hosting FAQs
categories: [hosting]
featured: true
popular: true
hidden: false
tags: []
order: 13
---

This article contains Frequently Asked Questions (FAQs) regarding **Self-hosting**.

## General

### Q: What platforms can I host on?

**A:** Bitwarden is a cross-platform application that is deployed using Docker Linux containers. This means that Bitwarden can be hosted on Linux, macOS, and Windows machines.

You can read more about Docker and container technologies at [Docker's Website](https://www.docker.com/why-docker){:target="_blank"}.

### Q: How should I achieve High Availability?

**A:** High availability can be achieved by either configuring multiple instances of the containers into a Docker Swarm or Kubernetes environment, and/or by pointing the database connection string that the containers reference to any MSSQL database or cluster. Then you would probably want to load balance the NGINX containers or however you choose to handle the front-end.

### Q: How do I backup and restore my self-hosted instance?

**A:** Bitwarden takes automated nightly backups of the `bitwarden-mssql` database container in order to protect your stored credentials. For help with manual backups, or help restoring a backup, see [Backup your Hosted Data]({% link _articles/hosting/backup-on-premise.md %}).

### Q: What are my installation id and installation key used for?

**A:** Installation ids keys are used when installing Bitwarden on-premises in order to:

- Register your installation and contain email so that we can contact you for important security updates.
- Authenticate to push relay servers for push notifications to Bitwarden client applications.
- Validate licensing of paid features.

Retrieve an installation id and key from [https://bitwarden.com/host](https://bitwarden.com/host){:target="_blank"}.

**You should not share your installation id or installation key across multiple Bitwarden installations.** They should be treated as secrets.

### Q: How do I change the name of my server?

**A:** Configure the `url:` in the `./bwdata/config.yml` with your new server name and the run the `./bitwarden.sh` rebuild command to rebuild `bwdata` assets.

Check that your server name or FQDN has been proliferated to all `globalSettings_baseServiceUri__*` variables in `./bwdata/env/global.override.env`, and that your certificate contains a Subject Alternative Name (SAN) with the new server FQDN

If you are using Let's Encrypt certificate, you'll need to [Manually Update Your Certificate](https://bitwarden.com/help/article/certificates/#manually-update-a-lets-encrypt-certificate){:target="\_blank"}.

## SMTP Configuration

### Q: How do I set up an SMTP Mail Server?

**A:** Connect your self-hosted instance to an existing SMTP Mail Server by editing all `globalSettings__mail__smtp__*` values in `./bwdata/env/global.overide.env`. For more information, see [Configure Environment Variables]({% link _articles/hosting/environment-variables.md %}).

If you don't yet have an existing SMTP Mail Server from which you can relay emails, consider services like [Mailgun](https://www.mailgun.com/){:target="\_blank"} or [SparkPost](https://www.sparkpost.com){:target="\_blank"}, or use Gmail an SMTP Mail Server.

### Q: How do I use Gmail as an SMTP Mail Server?

**A:** Configure the following variables in `./bwdata/env/global.override.env`:

```
globalSettings__mail__replyToEmail=no-reply@your.domain
globalSettings__mail__smtp__host=smtp.gmail.com
globalSettings__mail__smtp__port=587
globalSettings__mail__smtp__ssl=false
globalSettings__mail__smtp__username=<valid-gmail-username>
globalSettings__mail__smtp__password=<valid-gmail-password>
```

Whether you're a Workspace Admin or personal user of Gmail, you'll need to enable SMTP relay from within Google. For more information, see [Google's Documentation](https://support.google.com/a/answer/176600?hl=en){:target="\_blank"}.

If you're using Two-step Authentication for your Gmail account, you'll need to generate an app-specific password for use with Bitwarden and update the `globalSettings__mail__smtp__password=` field in `./bwdata/env/global.override.env`.

## Advanced Configuration

#### How do I use custom server ports?

**A:** To use custom ports, instead of 80 and 443, edit the `http_port=` and `https_port=` values in `./bwdata/config.yml` and run `./bitwarden.sh rebuild` to rebuild your server assets.

Check that the custom port values have been proliferated to `./bwdata/env/global.override.env`.

### Q: How do I add Bitwarden to system boot?

**A:** Before adding Bitwarden to system boot, complete [Docker Post-Installation](https://bitwarden.com/help/article/install-on-premise/#docker-post-installation-linux-only) to setup a dedicated `bitwarden` service account.

Then, complete the following steps:

1. Create a Bitwarden service file:

   ```
   sudo vi bitwarden.service

   [Unit]
   Description=Bitwarden
   Requires=docker.service
   After=docker.service

   [Service]
   Type=oneshot
   User=bitwarden
   Group=bitwarden
   ExecStart=<your-install-directory>/bitwarden.sh start
   ExecStop=<your-install-directory>/bitwarden.sh stop
   RemainAfterExit=true

   [Install]
   WantedBy=multi-user.target
   ```
2. Copy the Bitwarden service file to systemd:

   ```
   sudo cp bitwarden.service /etc/systemd/system/bitwarden.service
   ```
3. Set permissions on the Bitwarden service file under systemd:

   ```
   sudo chmod 644 /etc/systemd/system/bitwarden.service
   ```
4. Optionally, reload for testing:

   ```
   systemctl daemon-reload
   ```
5. Add the service to start with system boot:

   ```
   sudo systemctl enable bitwarden.service
   ```
