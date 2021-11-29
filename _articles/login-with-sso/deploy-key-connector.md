---
layout: article
title: Deploy Key Connector
categories: [login-with-sso]
featured: false
popular: false
tags: []
order: "06"
description: "..."
---

This article will walk you through the procedure for enabling and configuring Key Connector in an existing self-hosted environment. **Before proceeding**, please thoroughly review the [About Key Connector]({{site.baseurl}}/article/about-key-connector/) article to ensure a full understanding of what Key Connector is, how it works, and the impacts of implementation.

## Requirements

{% callout warning %}
Management of cryptographic keys is incredibly sensitive and is **only recommended for enterprises with a team and infrastructure** that can securely support deploying and managing a key server.
{% endcallout %}

In order to use Key Connector you must:

- [Have an Enterprise Organization]({{site.baseurl}}/article/about-bitwarden-plans/#enterprise-organizations)
- [Have a self-hosted Bitwarden server]({{site.baseurl}}/hosting/)
- [Have an active SSO implementation]({{site.baseurl}}/article/about-sso/)
- [Activate the Single Organization and Single Sign-On policies]({{site.baseurl}}/article/policies/)

<br>
If your Organization meets or can meet these requirements, including a team and infrastructure that can support management of a key server, [Contact Us](https://bitwarden.com/contact) and we'll set up a time to help you get started.

## Setup & Deploy Key Connector

**Once you've contacted us regarding Key Connector**, we'll reach out to kick off a Key Connector discussion. The steps that follow in this article must be completed in collaboration with Bitwarden Customer Success & Implementation specialists.

### Obtain New License File

Once you've contacted us regarding Key Connector, a member of the Customer Success & Implementation team will generate a Key Connector-enabled license file for your Organization. When your Bitwarden collaborator instructs you it is ready, complete the following steps to obtain the new license:

1. Open your Bitwarden Cloud Web Vault and navigate to your Organization's **Settings** &rarr; **Subscription** screen.
2. Select the **Download License** button.
3. When prompted, enter the Installation ID that was used to install your self-hosted server and select **Submit**. If you don't know your Installation ID off-hand, you can retrieve it from `./bwdata/env/global.override.env`.

You won't need your license file immediately, but you will be required to upload it to your self-hosted server [in a later step](#activate-key-connector).

### Initialize Key Connector

To prepare your Bitwarden server for Key Connector:

1. Save a [backup]({{site.baseurl}}/article/backup-on-premise/) of, at a minimum, `.bwdata/mssql`. Once Key Connector is in use, it's recommended that you have access to a pre-Key Connector backup image in case of an issue.

   {% callout info %}If you're using an [external MSSQL database]({{site.baseurl}}/article/external-db/), take a backup of your database in whatever way fits your implementation.{% endcallout %}
2. Update your self-hosted Bitwarden installation in order to retrieve the latest changes:

   ```
   ./bitwarden.sh update
   ```
3. Edit the `.bwdata/config.yml` file and enable Key Connector by toggling `enable_key_connector` to `true`.

   ```
   nano bwdata/config.yml
   ```
4. Update your self-hosted Bitwarden installation again in order to apply the change made in **Step 3**:

   ```
   ./bitwarden.sh update
   ```

### Configure Key Connector

To configure Key Connector:

1. Edit the `.bwdata/env/key-connector.override.env` file that will have been downloaded with the `./bitwarden.sh update`.

   ```
   nano bwdata/env/key-connector.override.env
   ```

   {% callout warning %}This file will be pre-populated with default values that will spin up a functional local Key Connector setup, however the **default values are not recommended for production environments**.{% endcallout %}
2. In `key-connector.override.env`, you will need to specify values for the following:

   - [Endpoints](#endpoints): What Bitwarden endpoints Key Connector can communicate with.
   - [Database](#database): Where Key Connector will store and retrieve user keys.
   - [RSA Key Pair](#rsa-key): How Key Connector will access an RSA key pair to protect user keys at rest.

#### Endpoints

Automated setup will populate endpoint values based on your installation configuration, however it's recommended that you confirm the following values in `key-connector.override.env` are accurate for your setup:

```
keyConnectorSettings__webVaultUri=https://your.bitwarden.domain.com
keyConnectorSettings__identityServerUri=https://your.bitwarden.domain.com/identity/
```

#### Database

Key Connector must access a database which stores encrypted user keys keys for your Organization members. Create a secure database to store encrypted users keys and replace the default `keyConnectorSettings__database__` values in `key-connector.override.env` with the values designated in the **Required Values** column for the chosen database:

{% callout warning %}
Migration from one database to another is **not supported** at this time. Regardless of which provider you choose, **implement a frequent automated backup schedule** for the database.
{% endcallout %}

|Database|Required Values|
|--------|---------------|
|Local JSON (**default**)|**Not recommended outside of testing.**<br><br>`keyConnectorSettings__database__provider=json`<br>`keyConnectorSettings__database__jsonFilePath={File_Path}`|
|Microsoft SQL Server|`keyConnectorSettings__database__provider=sqlserver`<br> `keyConnectorSettings__database__sqlServerConnectionString={Connection_String}`<br><br>[Learn how to format MSSQL Connection Strings](https://docs.microsoft.com/en-us/sql/connect/ado-net/connection-string-syntax?view=sql-server-ver15){:target="\_blank"}|
|PostgreSQL|`keyConnectorSettings__database__provider=postgresql`<br>`keyConnectorSettings__database__postgreSqlConnectionString={Connection_String}`<br><br>[Learn how to format PostgreSQL Connection Strings](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING){:target="\_blank"}|
|MySQL/MariaDB|`keyConnectorSettings__database__provider=mysql`<br>`keyConnectorSettings__database__mySqlConnectionString={Connection_String}`<br><br>[Learn how to format MySQL Connection Strings](https://dev.mysql.com/doc/connector-net/en/connector-net-connections-string.html){:target="\_blank"}|
|SQLite|`keyConnectorSettings__database__provider=sqlite`<br>`keyConnectorSettings__database__sqliteConnectionString={Connection_String}`<br><br>[Learn how to format SQLite Connection Strings](https://docs.microsoft.com/en-us/dotnet/standard/data/sqlite/connection-strings){:target="\_blank"}|
|MongoDB|`keyConnectorSettings__database__provider=mongo`<br>`keyConnectorSettings__database__mongoConnectionString={Connection_String}`<br>`keyConnectorSettings__database__mongoDatabaseName={DatabaseName}`<br><br>[Learn how to format MongoDB Connection Strings](https://docs.mongodb.com/manual/reference/connection-string/){:target="\_blank"}|

#### RSA Key Pair

Key Connector uses an RSA key pair to protect user keys at rest. Create a key pair and replace the default `keyConnectorSettings__rsaKey__` and `keyConnectorSettings__certificate__` values in `key-connector.override.env` with the values required for your chosen implementation.

{% callout success %}
The RSA key pair must be **at a minimum** 2048 bits in length.
{% endcallout %}

Generally, your options include granting Key Connector access to an X509 **Certificate** that contains the key pair or granting Key Connector access directly to the **Key Pair**:

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" id="tab" role="presentation">
    <a class="nav-link active" id="certtab" data-bs-toggle="tab" data-target="#cert" role="tab" aria-controls="cert" aria-selected="true">Certificate</a>
  </li>
  <li class="nav-item" id="tab" role="presentation">
    <a class="nav-link" id="azuretab" data-bs-toggle="tab" data-target="#azure" role="tab" aria-controls="azure" aria-selected="false">Key Pair</a>
  </li>
</ul>

<div class="tab-content" id="clientsContent">
  <div class="tab-pane show active" id="cert" role="tabpanel" aria-labelledby="certtab">
{% capture cert_content %}
### Certificate

To use an X509 certificate that contains an RSA key pair, specify the values required depending on the location where your certificate is stored (see **Filesystem**, **OS Certificate Store**, etc.):

{% callout success %}
The certificate **must** be made available as a PKCS12 `.pfx` file, for example:

```
openssl req -x509 -newkey rsa:4096 -sha256 -nodes -keyout bwkc.key -out bwkc.crt -subj "/CN=Bitwarden Key Connector" -days 36500

openssl pkcs12 -export -out ./bwkc.pfx -inkey bwkc.key -in bwkc.crt -passout pass:{Password}
```

In all certificate implementations, you'll need the `CN` value shown in this example.
{% endcallout %}

#### Filesystem (default)

If the certificate is stored on the filesystem of the machine running Key Connector, specify the following values:

{% callout info %}
By default, Key Connector will be configured to create a `.pfx` file located at `etc/bitwarden/key-connector/bwkc.pfx` with a generated password. **It is not recommended** for enterprise implementations to use these defaults.
{% endcallout %}

```
keyConnectorSettings__rsaKey__provider=certificate
keyConnectorSettings__certificate__provider=filesystem
keyConnectorSettings__certificate__filesystemPath={Certificate_Path}
keyConnectorSettings__certificate__filesystemPassword={Certificate_Password}
```

#### OS Certificate Store

If the certificate is stored on the Operating System Certificate Store of the machine running Key Connector, specify the following values:

```
keyConnectorSettings__rsaKey__provider=certificate
keyConnectorSettings__certificate__provider=store
keyConnectorSettings__certificate__storeThumbprint={Certificate_Thumbprint}
```

#### Azure Blob Storage

If the certificate is uploaded to Azure Blob Storage, specify the following values:

```
keyConnectorSettings__rsaKey__provider=certificate
keyConnectorSettings__certificate__provider=azurestorage
keyConnectorSettings__certificate__azureStorageConnectionString={Connection_String}
keyConnectorSettings__certificate__azureStorageContainer={Container_Name}
keyConnectorSettings__certificate__azureStorageFileName={File_Name}
keyConnectorSettings__certificate__azureStorageFilePassword={File_Password}
```

[Learn how to format Azure Blob Storage Connection Strings](https://docs.microsoft.com/en-us/azure/data-explorer/kusto/api/connection-strings/storage#azure-blob-storage){:target="\_blank"}

#### Azure Key Vault

If certificate is stored in Azure Key Vault, specify the following values:

{% callout info %}
To use Azure Key Vault to store your `.pfx` certificate, you'll need to create an Active Directory **App Registration**. This App Registration must:
- Give delegated API permissions to access Azure Key Vault
- Have a client secret generated to allow access by Key Connector
{% endcallout %}

```
keyConnectorSettings__certificate__provider=azurekv
keyConnectorSettings__certificate__azureKeyvaultUri={Vault_URI}
keyConnectorSettings__certificate__azureKeyvaultCertificateName={Certificate_Name}
keyConnectorSettings__certificate__azureKeyvaultAdTenantId={ActiveDirectory_TenantId}
keyConnectorSettings__certificate__azureKeyvaultAdAppId={AppRegistration_ApplicationId}
keyConnectorSettings__certificate__azureKeyvaultAdSecret={AppRegistration_ClientSecretValue}
```

#### Hashicorp Vault

If the certificate is stored in Hashicorp Vault, specify the following values:

```
keyConnectorSettings__rsaKey__provider=certificate
keyConnectorSettings__certificate__provider=vault
keyConnectorSettings__certificate__vaultServerUri={Server_URI}
keyConnectorSettings__certificate__vaultToken={Token}
keyConnectorSettings__certificate__vaultSecretMountPoint={Secret_MountPoint}
keyConnectorSettings__certificate__vaultSecretPath={Secret_Path}
keyConnectorSettings__certificate__vaultSecretDataKey={Secret_DataKey}
keyConnectorSettings__certificate__vaultSecretFilePassword={Secret_FilePassword}
```

{% endcapture %}
{{ cert_content | markdownify }}
  </div>
  <div class="tab-pane" id="azure" role="tabpanel" aria-labelledby="azuretab">
{% capture key_content %}
### Key Pair

To use a Cloud Provider or physical device to store to a RSA 2048 key pair, specify the values required depending on your chosen implementation (see **Azure Key Vault**, **Google Cloud Key Management**, etc.):

#### Azure Key Vault

If you're using Azure Key Vault to store a RSA 2048 key pair, specify the following values:

{% callout info %}
To use Azure Key Vault to store your RSA 2048 key, you'll need to create an Active Directory **App Registration**. This App Registration must:
- Give delegated API permissions to access Azure Key Vault
- Have a client secret generated to allow access by Key Connector
{% endcallout %}

```
keyConnectorSettings__rsaKey__provider=azurekv
keyConnectorSettings__rsaKey__azureKeyvaultUri={Vault_URI}
keyConnectorSettings__rsaKey__azureKeyvaultKeyName={Key_Name}
keyConnectorSettings__rsaKey__azureKeyvaultAdTenantId={ActiveDirectory_TenantId}
keyConnectorSettings__rsaKey__azureKeyvaultAdAppId={AppRegistration_ApplicationId}
keyConnectorSettings__rsaKey__azureKeyvaultAdSecret={AppRegistration_ClientSecretValue}
```

[Learn how to use Azure Key Vault to create a key pair](https://docs.microsoft.com/en-us/azure/key-vault/keys/quick-create-portal){:target="\_blank"}

#### Google Cloud Key Management

If you're using Google Cloud Key Management to store a RSA 2048 key pair, specify the following values:

```
keyConnectorSettings__rsaKey__provider=gcpkms
keyConnectorSettings__rsaKey__googleCloudProjectId={Project_Id}
keyConnectorSettings__rsaKey__googleCloudLocationId={Location_Id}
keyConnectorSettings__rsaKey__googleCloudKeyringId={Keyring_Id}
keyConnectorSettings__rsaKey__googleCloudKeyId={Key_Id}
keyConnectorSettings__rsaKey__googleCloudKeyVersionId={KeyVersionId}
```

[Learn how to use Google Cloud Key Management Service to create key rings and asymmetric keys](https://cloud.google.com/kms/docs/creating-asymmetric-keys){:target="\_blank"}

#### AWS Key Management Service

If you're using AWS Key Management Service (KMS) to store a RSA 2048 key pair, specify the following values:

```
keyConnectorSettings__rsaKey__provider=awskms
keyConnectorSettings__rsaKey__awsAccessKeyId={AccessKey_Id}
keyConnectorSettings__rsaKey__awsAccessKeySecret={AccessKey_Secret}
keyConnectorSettings__rsaKey__awsRegion={Region_Name}
keyConnectorSettings__rsaKey__awsKeyId={Key_Id}
```

[Learn how to use AWS KMS to create asymmetric keys](https://docs.aws.amazon.com/kms/latest/developerguide/asymm-create-key.html){:target="\_blank"}

#### PKCS11 Physical HSM

If you're using a physical HSM device with the PKCS11 provider, specify the following values:

```
keyConnectorSettings__rsaKey__provider=pkcs11
keyConnectorSettings__rsaKey__pkcs11Provider={Provider}
keyConnectorSettings__rsaKey__pkcs11SlotTokenSerialNumber={Token_SerialNumber}
keyConnectorSettings__rsaKey__pkcs11LoginUserType={Login_UserType}
keyConnectorSettings__rsaKey__pkcs11LoginPin={Login_PIN}

ONE OF THE FOLLOWING TWO:
keyConnectorSettings__rsaKey__pkcs11PrivateKeyLabel={PrivateKeyLabel}
keyConnectorSettings__rsaKey__pkcs11PrivateKeyId={PrivateKeyId}
```

Where:
- `{Provider}` can be `yubihsm` or `opensc`
- `{Login_UserType}` can be `user`, `so`, or `context_specific`

{% callout info %}
If you're using the PKCS11 provider to store your private key on an HSM device, the associated public key must be made available and configured as a certificate using any of the options found in the **Certificates** tab.
{% endcallout %}

{% endcapture %}
{{ key_content | markdownify }}
  </div>
</div>

### Activate Key Connector

Now that Key Connector is [fully configured](#configure-key-connector) and you have a [Key Connector-enabled license](#obtain-a-new-license), complete the following steps:

1. Restart your self-hosted Bitwarden installation in order to apply the configuration changes:

   ```
   ./bitwarden.sh restart
   ```
2. Log in to your self-hosted Bitwarden as an **Organization Owner** and navigate to the Organization **Settings** &rarr; **Subscription** screen.
3. Select the **Update License** button and upload the Key Connector-enabled license [retrieved in an earlier step](#obtain-new-license-file):

   {% image hosting/update-license.png Update your License %}
3. Navigate to the Organization **Manage** screen.
4. If you haven't already, navigate to the **Policies** screen and enable the [Single Organization]({{site.baseurl}}/article/policies/#single-organization) and [Single Sign-On Authentication]({{site.baseurl}}/article/policies/#single-sign-on-authentication) policies. **Both are required to use Key Connector**.
5. Navigate to the **Single Sign-On** screen:

   {% callout success %}The next few steps assume that you already have an active [Login with SSO]({{site.baseurl}}/article/about-sso/) implementation using [SAML 2.0]({{site.baseurl}}/article/configure-sso-saml/) or [OIDC]({{site.baseurl}}/article/configure-sso-oidc/). **If you don't**, please implement and test Login with SSO before proceeding.{% endcallout %}
   {% image sso/keyconnector/enable-keyconnector.png %}
6. In the **Member Decryption Options** section, select **Key Connector**.
7. In the **Key Connector URL** input, enter your `PLACEHOLDER` and select the **Test** button to ensure you can reach Key Connector.
8. Scroll to the bottom of the screen and select **Save**.
