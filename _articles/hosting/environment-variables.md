---
layout: article
title: Configure Environment Variables
categories: [hosting]
featured: false
popular: false
tags: [hosting, docker, install, deploy]
order: 05
---

Some features of Bitwarden are not configured by the `bitwarden.sh` installer. Configure these settings by editing the environment file, located at `./bwdata/env/global.override.env`. `global.override.env` comes pre-baked with configurable variables (see [Included Variables](#included-variables)), however there are additional variables which can be manually added (see [Optional Variables](#optional-variables)).

**Whenever you make changes to** `global.override.env`**, perform a** `./bitwarden.sh rebuild` **to apply your changes.**

{% callout info %}
This article will not define every environment variable, instead focusing on those used or configured by most installations.
{% endcallout %}

## Included Variables

The following variables are among those that already exist in `global.override.env`:

|Variable|Description|
|--------|-----------|
|globalSettings__sqlServer__connectionString=|Use this field to [connect to an exernal MSSQL database]({{site.baseurl}}/article/external-db/).|
|globalSettings__oidcIdentityClientKey=|A randomly generated OpenID Connect client key. For more information, see [OpenID Documentation](https://openid.net/specs/openid-connect-registration-1_0.html#RegistrationResponse){:target="\_blank"}.|
|globalSettings__duo__aKey=|A randomly generated Duo akey. For more information, see [Duo's Documentation](https://duo.com/docs/duoweb#1.-generate-an-akey){:target="\_blank"}.|
|globalSettings__yubico__clientId=|Client ID for YubiCloud Validation Service or Self-hosted Yubico Validation Server.<br><br>If YubiCloud, get your Client ID and Secret Key [here](https://upgrade.yubico.com/getapikey/){:target="\_blank"}.<br><br>If self-hosted, see Optional Variable `globalSettings__yubico__validationUrls`.|
|globalSettings__yubico__key=|Secret Key for YubiCloud Validation Service or Self-hosted Yubico Validation Server.<br><br>If YubiCloud, get your Client ID and Secret Key [here](https://upgrade.yubico.com/getapikey/){:target="\_blank"}.<br><br>If self-hosted, see Optional Variable `globalSettings__yubico__validationUrls`.|
|globalSettings__mail__replyToEmail=|Email address used for invitations, typically `no_reply@smpt__host`.|
|globalSettings__mail__smtp__host=|Your SMTP Server hostname (recommended) or IP address.|
|globalSettings__mail__smtp__port=|The SMTP port used by the SMTP Server.|
|globalSettings__mail__smtp__ssl=| (Boolean) Whether your SMTP Server uses an encryption protocol:<br>`true` = SSL<br>`false` = TLS|
|globalSettings__mail__smtp__username=|A valid username for the `smtp__host`.|
|globalSettings__mail__smtp__password=|A valid password for the `smtp__host`.|
|globalSettings__disableUserRegistration=|Specify `true` to disable new users signing up for an account on this instance via the Registration page.|
|globalSettings__hibpApiKey=|Your HaveIBeenPwned (HIBP) API Key, available [here](https://haveibeenpwned.com/API/Key).|
|adminSettings__admins=|Email addresses which may access the [System Administrator Portal]({% link _articles/hosting/admin-portal.md%}).|

## Optional Variables

The following variables do not already exist in `global.override.env`, and can be manually added:

|Variable|Description|
|--------|-----------|
|globalSettings__logDirectory=|Specifies the directory to save log files to. By default, `globalSettings__logDirectory=bwdata/logs`.|
|globalSettings__logRollBySizeLimit=|Specify the size limit in bytes to use for rolling log files (e.g. `globalSettings__logRollBySizeLimit=1073741824`).|
|globalSettings__syslog__destination=|Specify a Syslog server or endpoint to send log files to (e.g. `globalSettings__syslog__destination=udp://example.com:514`).|
|globalSettings__mail__smtp__trustServer=|Specify `true` to explicitly trust the certificate presented by the SMTP Server (**not recommended for production**).|
|globalSettings__mail__smtp__sslOverride=|Specify `true` to use SSL (not TLS) on port 25.|
|globalSettings__mail__smtp__startTls=|Specify `true` to force STARTTLS (Opportunistic TLS).|
|globalSettings__organizationInviteExpirationHours=|Specify the number of hours after which an Organization Invite will expire (`120` by default).|
|globalSettings__yubico__validationUrls__0=|Primary URL for self-hosted Yubico Validation Server. For example: `=https://your.url.com/wsapi/2.0/verify`.<br><br>Add additional Validation Server URLs by creating incremented environment variables, for example `globalSettings__yubico__validationUrls__1=`, `globalSettings__yubico__validationUrls__2=`.|
