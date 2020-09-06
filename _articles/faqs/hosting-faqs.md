---
layout: article
title: Hosting FAQs
categories: [faqs, hosting]
featured: true
popular: true
hidden: false
tags: []
---

## Bitwarden Server service/user account and (optional: systemd service configuration)

{%note%}
You will want to configure the Bitwarden Server to use a `bitwarden` service account. $USER=bitwarden You will want to have your installation owned by the bitwarden service account, and you should be logged in as bitwarden.

After those are verified, you will want to make sure the UID and GID in the /bwdata/env/uid.env file are set to your bitwarden service account id numbers in Linux. When using the bitwarden service account you will also need to follow these steps:     

1. Make sure the docker group has been created.  sudo groupadd docker     
2. Add the bitwarden account to the docker group  sudo usermod -aG docker $USER     
3. Create the bitwarden service file (may want to store it with your bitwarden installation)  sudo vi bitwarden.service     [Unit]  Description=Bitwarden  Requires=docker.service  After=docker.service     [Service]  Type=oneshot  User=bitwarden  Group=bitwarden  ExecStart={INSTALL_DIR}/bitwarden.sh start  RemainAfterExit=true  ExecStop= {INSTALL_DIR}/bitwarden.sh stop     [Install]  WantedBy=multi-user.target    
 4. Copy the bitwarden service file to systemd.  sudo cp bitwarden.service /etc/systemd/system/bitwarden.service     
5. Set permissions on bitwarden service file under systemd.  sudo chmod 644 /etc/systemd/system/bitwarden.service     
6. Optional (reload for testing)  systemctl daemon-reload     
7. Add service to start with system boot.  sudo systemctl enable bitwarden.service     
{%endnote%}

**Certificate Setup for Private CA, On-premises/self-hosted**

When configuring your server you will need to have three files, private key, server cert, and the CA cert then you will configure their path in the config.yml file in the Bitwarden installation directory.     

The path that is defined in the `config.yml` is actually the location inside the NGINX container. The directory on the host is mapped to the container so you will actually want to make sure your correct certificate related files are under the `./bwdata/ssl/` directory.

You should only ever need to work with the files under `./bwdata/ssl/`, you do not want to work with files directly inside any container. It should line up like this (bitwarden.domain.local is only an example):

```
{ ./bwdata/config.yml }
ssl_certificate_path: /etc/ssl/bitwarden.domain.local/certificate.crt
ssl_key_path: /etc/ssl/bitwarden.domain.local/private.key
ssl_ca_path: /etc/ssl/bitwarden.domain.local/ca.crt
```

```
{ ./bwdata/ssl/bitwarden.domain.local }
ca.crt
certificate.crt
private.key`
```
Please make sure all of your CA certificates are all included in the CA certificate chain file if you have a Root CA and Intermediate CA certificate.

**Certificate Setup for Public CA, On-premises/self-hosted**

You will need to create a private key for the Bitwarden server. Then you can generate a CSR. You can use OpenSSL to accomplish this. Once you have generated the CSR then you can provide it to the Certificate Authority you are using to provide your server/site certificate. After you generate your key and certs, place them in the ./bwdata/ssl directory. Then you will need to map them in ./bwdata/config.yml. When configuring your server, you will need to have three files, private key, server cert, and the ca-cert then you will configure their path in the config.yml file in the Bitwarden installation directory. The path that is defined in the config.yml is actually the location inside the NGINX container. The directory on the host is mapped to the container so you will actually want to make sure your correct certificate related files are under the ./bwdata/ssl/ directory. You should only ever need to work with the files under ./bwdata/ssl/, you do not want to work with files directly inside any container. It should line up like this (bitwarden.domain.local is only an example):

```
{ ./bwdata/config.yml }
ssl_certificate_path: /etc/ssl/bitwarden.domain.local/certificate.crt
ssl_key_path: /etc/ssl/bitwarden.domain.local/private.key
ssl_ca_path: /etc/ssl/bitwarden.domain.local/ca.crt
```
```
{ ./bwdata/ssl/bitwarden.domain.local }
ca.crt
certificate.crt
private.key
```
Please make sure all of your CA certificates are all included in the CA certificate chain file if you have a Root CA and Intermediate CA certificate.

**Change Server Name**

In order to change the server name of your Bitwarden Server, you will need to configure the `url` in the `./bwdata/config.yml` with the new server name and the run the ./bitwarden.sh rebuild command. Next you will want to make sure the new name or FQDN has been set on all the `globalSettings__baseServiceUri__` variables in the `./bwdata/env/global.override.env` file. You will also need to make sure your certificate contains a Subject Alternative Name (SAN) with the new server FQDN.

If you are using a Let's Encrypt certificate, you can create a new one with the new server name by using these steps:
```
./bitwarden.sh stop
mv ./bwdata/letsencrypt ./bwadata/letsencrypt_backup
mkdir ./bwdata/letsencrypt
chown -R bitwarden:bitwarden ./bwdata/letsencrypt
chmod -R 740 ./bwdata/letsencrypt
docker pull certbot/certbot
docker run -i --rm --name certbot -p 443:443 -p 80:80 -v <Full Path from / >/bwdata/letsencrypt:/etc/letsencrypt/ certbot/certbot certonly --logs-dir /etc/letsencrypt/logs
Select 1, then follow instructions
openssl dhparam -out ./bwdata/letsencrypt/live/<your.domain.com>/dhparam.pem 2048
./bitwarden.sh rebuild
./bitwarden.sh start
```

**Gmail self-hosted config**

You can configure your Bitwarden Server to send email using your Gmail account by configuring these variable in the ./bwdata/env/global.override.env file. (Please note, with ssl=false it will default to use TLS)
```
globalSettings__mail__replyToEmail=no-reply@bitwarden.domain.com
globalSettings__mail__smtp__host=smtp.gmail.com
globalSettings__mail__smtp__port=587
globalSettings__mail__smtp__ssl=false
globalSettings__mail__smtp__username=Gmail-username  
globalSettings__mail__smtp__password=Gmail-password
```
If you are using Two-Step Authentication with your Gmail account then you will need to generate an app-specific password for use with Bitwarden. You can generate an app-specific password by signing in to your Google and following their instructions. Once you have the app-specific password, enter it into Bitwarden's SMTP configuration in the ./bwdata/env/global.override.env file.

**High Availability**

High availability can be achieved by either configuring multiple instances of the containers into a Docker Swarm, Kubernetes, etc. environment and/or you can point the database connection string that the containers reference to any MSSQL database or cluster. Then you would probably want to load balance the NGINX containers or however you choose to handle the front-end.

**Let's Encrypt Manual Update (issue or domain/server name change)**

```
./bitwarden.sh stop
mv ./bwdata/letsencrypt ./bwadata/letsencrypt_backup
mkdir ./bwdata/letsencrypt
chown -R bitwarden:bitwarden ./bwdata/letsencrypt
chmod -R 740 ./bwdata/letsencrypt
docker pull certbot/certbot
docker run -i --rm --name certbot -p 443:443 -p 80:80 -v <Full Path from / >/bwdata/letsencrypt:/etc/letsencrypt/ certbot/certbot certonly --logs-dir /etc/letsencrypt/logs
Select 1, then follow instructions
openssl dhparam -out ./bwdata/letsencrypt/live/<your.domain.com>/dhparam.pem 2048
./bitwarden.sh rebuild
./bitwarden.sh start
```
**Migrate cloud to on-premise**

 In order to migrate your data from a Bitwarden Cloud account to a self-hosted Bitwarden Server, you will want to follow the on-premise installation instructions:
<https://help.bitwarden.com/article/install-on-premise/>

Once you have completed the installation, you will need to download your Enterprise Organization license (this is written for someone doing a clean installation, you will only need to download the license from your existing Organization:  <https://help.bitwarden.com/article/licensing-on-premise/#organization-account-sharing>

After the server is running and the Organization has been created and licensed, you will need to export your data from our servers and import it to your server:  <https://help.bitwarden.com/article/export-your-data/>

Once you have completed the import, which will include the Collections, Items and their associations, you will need to set up the groups and users (there are several options so please check the relative links):  <https://help.bitwarden.com/organizations/>

Please take note of the backup procedure:  https://help.bitwarden.com/article/backup-on-premise/     

**Restore Bitwarden Server Detailed (Restore Backup)**

Do you have a full backup of the entire Bitwarden Server directory (bwdata)? If so you can simply copy that back to the server and run the normal start command.

If you need to restore from a SQL backup then you will want to first log into the mssql container.
​
In order to log into the container you will first need to figure out the CONTAINER ID.

`docker ps`

Note the CONTAINER ID for the bitwarden/mssql container and then log in by running:

`docker exec -it {CONTAINER ID} /bin/bash`

Once you are in the container, you will want to find the name of the latest backup file under /etc/bitwarden/mssql/backups/ and note the name of the BAK file. Now you can make a new backup file just in case. To do this you will simply run ./backup-db.sh found on the root "/" of the container

Now you will need to log into the mssql instance.

​`/opt/mssql-tools/bin/sqlcmd -S localhost -U sa`
Password: (Please note, you will want to get the database sa password from the /bwdata/env/global.override.env file on your host.)

```
1> use master
2> GO
1> alter database vault set offline with rollback immediate
2> GO
1> restore database vault from disk='/etc/bitwarden/mssql/backups/vault_FULL_{Backup File Name}.BAK' with replace
2> GO
​1> alter database vault set online
2> GO
1> exit
```

You can now exit the container and then you will not need to restart the Bitwarden Server as normal.

**Custom Server Ports**

To use custom ports instead of 80 and 443, you will need to set the new ports in the config.yml and then run the rebuild command (./bitwarden.sh rebuild). Next you will want to make sure the custom https port has been set on all the globalSettings__baseServiceUri__ variables in the ./bwdata/env/global.override.env file.

**SMTP Config w/ Mail Service Options**

- Have you already configured an SMTP server in your Bitwarden's ./bwdata/env/global.override.env file? You will want to check the post-install steps which cover SMTP configuration:
<https://help.bitwarden.com/article/install-on-premise/#post-install-environment-configuration>

If you edit the ./bwdata/env/global.override.env file on your server, you will want to set the globalSettings__mail__smtp__ variables.

- Do you currently have a mail server or a mail service you currently use which can relay email from your Bitwarden server? If you don't then you may want to consider a service such as Mailgun (<https://www.mailgun.com/>) or SparkPost (<https://www.sparkpost.com/>) which allows for many relayed emails for free per month.

**Trust a private CA issued or Self-signed certificate for Bitwarden Client**

When using a self-signed certificate, you will need to add the certificate to your OS's Trusted Root Certification Authorities Store. Are you running the Directory Connector on Windows or Linux? If you are using Windows then you can simply run certmgr.msc and then import the certificate into the correct store/folder. If you are using Linux then you will want to add the certificate to these directories:
```
/usr/local/share/ca-certificates/
/usr/share/ca-certificates/
```

Then run these commands:
```
sudo dpkg-reconfigure ca-certificates
sudo update-ca-certificates
```

Once you have trusted the certificate then you will need to close the client/app and relaunch it.

The CLI and BWDC CLI are written in Node.js, a private CA certificate or self-signed certificate, if being used, will need to be trusted using one of the following environment variables:

Linux:
export `NODE_EXTRA_CA_CERTS=/path/to/cert/ca.crt`

Windows:
`NODE_EXTRA_CA_CERTS | C:\path\to\cert\ca.crt`

**When does an Organization Invitation expire?**

**A:** 5 days (If self-hosting it can be configured with globalSettings__organizationInviteExpirationHours=120)

**When does an Offline Vault session expire:**

**A:** 30 days except for mobile is 90 days

**When does a “Remember Me” 2FA selection:**

**A:**30 days

**How long are Event Logs stored:**

**A:** A retention policy is not configurable at this time.
