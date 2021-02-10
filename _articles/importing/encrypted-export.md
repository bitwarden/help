---
layout: article
title: Encrypted Exports
categories: [import-export]
featured: true
popular: false
tags: [import]
order: 07
---

Encrypted Exports provide a secure long-term storage option for Vault data backups. Vault data is encrypted using your account's Encryption Key.

{% callout warning %}
[Rotating your account's encryption key]({% link _articles/account/account-encryption-key.md %}) will render an Encrypted Export impossible to decrypt. **If you rotate your account encryption key, replace the old backup with one that uses the new encryption key.**

Account Encryption Keys are unique to each Bitwarden user account, so you won't be able to import an Encrypted Export into a different account.
{% endcallout %}

An Encrypted Export of the following plaintext login item:
```
{
      ...
      "login": {
        "username": "mylogin",
        "password": "mypassword",
        "totp": "otpauth://totp/my-secret-key"
      },
      ...
```

Will look something like:
```
{
      ...
      "login": {
        "username": "9.dZwQ+b9Zasp98dnfp[g|dHZZ1p19783bn1KzkEsA=l52bcWB/w9unvCt2zE/kCwdpiubAOf104os}",
        "password": "1o8y3oqsp8n8986HmW7qA=oiCZo872b3dbp0nzT/Pw=|A2lgso87bfDBCys049ano278ebdmTe4:",
        "totp": "2CIUxtpo870B)*^GW2ta/xb0IYyepO(*&G(&BB84LZ5ByZxu0E9hTTs6PHg0=8q5DHEPU&bp9&*bns3EYgETXpiu9898sxO78l"
      },
      ...
```

## Create an Encrypted Export

Downloading an Encrypted Export follows the same procedure as downloading a plaintext `.csv` or `.json` export:

1. In the [Web Vault](https://vault.bitwarden.com){:target="\_blank"}, select **Tools** from the top navigation bar.
3. Select **Export Vault** from the left-hand Tools menu.
4. On the Export Vault page:
   - Select **.json (Encrypted)** from the  **File Format** dropdown.
   - Enter your **Master Password**.
5. Select the **Export Vault** button to download your Vault Export. You will be prompted to specify a location for download.

For help downloading an Encrypted Export from any other client application, see [Export Vault Data]({% link _articles/account/export-your-data.md %}).

## Import an Encrypted Export

Importing an Encrypted Export following the same procedure as importing a plaintext `.csv` or `.json` file:

1. In the [Web Vault](https://vault.bitwarden.com){:target="\_blank"}, select **Tools** from the top navigation bar.
2. Select **Import Data** from the left-hand Tools menu.
3. Select **Bitwarden (json)** as the format of your file to import.

   {% callout success %}There is no import option specifically for Encrypted Exports. A handler will determine that the `.json` file is encrypted and decrypt using your account encryption key.{% endcallout %}
5. Select the **Browse** button and add your file.
6. Select the **Import Data** button to complete your import.

{% callout warning %}
Importing data multiple times will create duplicates.
{% endcallout %}
