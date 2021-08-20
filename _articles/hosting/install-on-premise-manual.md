---
layout: article
title: Install and Deploy Manually
categories: [hosting]
featured: false
popular: false
tags: [hosting, docker, install, deploy]
order: 02
---
This article will walk you through the procedure to manually install and deploy Bitwarden to your own server. **Installation using the Bitwarden installation script is recommended for most users, for instructions see [Install and Deploy]({% link _articles/hosting/install-on-premise.md %})**.

A manual installation may be appropriate if you are intimately familiar with Docker technologies and desire more control over your Bitwarden installation.

{% callout warning %}
**Manual installations should be conducted by advanced users only.**

Manual installations lack the ability to automatically update certain dependencies of the Bitwarden installation. As you upgrade from one version of Bitwarden to the next you will be responsible for changes to required environment variables, changes to nginx `default.conf`, changes to `docker-compose.yml`, and so on.

We will try to highlight these in the [release notes on GitHub](https://github.com/bitwarden/server/releases){:target="_blank"}. You can also monitor changes to the [dependency templates](https://github.com/bitwarden/server/tree/master/util/Setup/Templates){:target="_blank"} used by the Bitwarden installation script on GitHub.
{% endcallout %}

## Installation Procedure

Complete the following steps to install Bitwarden manually:

1. Download a stubbed version of Bitwarden's dependencies (`docker-stub.zip`) from the [releases pages on GitHub](https://github.com/bitwarden/server/releases){:target="_blank"}. For example:

   ```
   curl -L https://github.com/bitwarden/server/releases/download/v<version_number>/docker-stub.zip \
    -o docker-stub.zip
   ```

2. Create a new directory named `bwdata` and extract the `docker-stub.zip` archive to it:

   ```
   unzip docker-stub.zip -d bwdata
   ```

   The created directory matches what the `./docker/docker-compose.yml` file's mapped volumes expect, however you are free to change the location of these mappings on the host machine if desired.

3. Edit the following environment variables in `./env/global.override.env`:

   - `installation__id`: Your installation id retrieved from [https://bitwarden.com/host](https://bitwarden.com/host){:target="_blank"}.
   - `installation__key`: Your installation key retrieved from [https://bitwarden.com/host](https://bitwarden.com/host){:target="_blank"}.
   - `baseServiceUri__*`: The domain for your Bitwarden instance. Enter this value in all baseServiceURi fields.
4. Generate a `.pfx` certificate file for the identity container and place it in the mapped volume directory at `./identity/identity.pfx`. For example, run the following commands:

   ```
   openssl req -x509 -newkey rsa:4096 -sha256 -nodes -keyout identity.key \
         -out identity.crt -subj "/CN=Bitwarden IdentityServer" -days 10950
   ```

   ```
   openssl pkcs12 -export -out ./identity/identity.pfx -inkey identity.key \
         -in identity.crt -passout pass:IDENTITY_CERT_PASSWORD
   ```
5. Edit the `globalSettings__identityServer__certificatePassword` value in `./env/global.override.env` with your configured password.
6. Copy the created files to the `./bwdata/ssl` directory.

   The `./bwdata/ssl` directory is mapped to the NGINX container at `/etc/ssl`. The `./nginx/default.conf` can be adjusted to utilize these certificates as desired.

   {% callout info %}Accessing the Web Vault and APIs requires HTTPS. You should provide a trusted SSL certificate to the NGINX container or front the installation with a proxy that provides a HTTPS endpoint to Bitwarden client applications.{% endcallout %}

   Example scenario for creating a self-signed certificate as an alternative:

   ```
   mkdir ./ssl/bitwarden.example.com
   openssl req -x509 -newkey rsa:4096 -sha256 -nodes -days 365 \
     -keyout ./ssl/bitwarden.example.com/private.key \
     -out ./ssl/bitwarden.example.com/certificate.crt \
     -reqexts SAN -extensions SAN \
     -config <(cat /usr/lib/ssl/openssl.cnf <(printf '[SAN]\nsubjectAltName=DNS:bitwarden.example.com\nbasicConstraints=CA:true')) \
     -subj "/C=US/ST=New York/L=New York/O=Company Name/OU=Bitwarden/CN=bitwarden.example.com"
   ```

7. Edit the following in `./nginx/default.conf`:

   - `server_name` with your configured domain name.
   - In the `Content-Security-Policy` header, replace `bitwarden.example.com` with your configured domain name.
   - Add HTTPS redirects
8. Generate your own random password strings for the following values in `./env/global.override.env`:

   - `sqlServer__connectionString=...Password=RANDOM_DATABASE_PASSWORD`
   - `internalIdentityKey=RANDOM_IDENTITY_KEY`
   - `duo__akey=RANDOM_DUO_AKEY`

     And apply the same `RANDOM_DATABASE_PASSWORD` to `value` in `./env/mssql.override.env`.
9.  Replace the domain placeholder in `./web/app-id.json` with your domain name.
10. Configure your Environment Variables in  `./env/global.override.env`.

    At a minimum, we recommend configuring you SMTP Mail Server and Admin Portal Access. For more information, see [Configure Environment Variables]({% link _articles/hosting/environment-variables.md %}).

11. Map the desired user and group id for the Bitwarden containers to run under at `./env/uid.env`. For example:

    ```
    LOCAL_UID=1000
    LOCAL_GID=1000
    ```

    Otherwise, you can leave the `./env/uid.env` file empty and the containers will run as `nobody:nobody`.
12. Start your Bitwarden instance and access it at your configured hostname:

        docker-compose -f ./docker/docker-compose.yml up -d

For reference, you can find the official Bitwarden images hosted on Docker Hub at [https://hub.docker.com/u/bitwarden/](https://hub.docker.com/u/bitwarden/){:target="_blank"}.
