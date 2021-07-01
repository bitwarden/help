---
layout: article
title: Condition a Bitwarden .csv or .json
categories: [import-export]
featured: true
popular: false
tags: [import]
order: 09
---

This article defines the format you should use when manually conditioning a `.csv` or `.json` for import into Bitwarden. This format is identical to that used by `.csv` or `.json` files created by [Exporting your Bitwarden Vault]({% link _articles/account/export-your-data.md %}).

Make sure that you're using the format for Personal Vaults or Organizations depending on your export/import operation, as they are slightly different.

## Condition a .csv

{% callout info %}
Bitwarden `.csv` files will only handle Logins and Secure Notes. If you need to import or export Identities and Cards as well, [use JSON](#condition-a-json).
{% endcallout %}

### For your Personal Vault

Create a UTF-8 encoded plaintext file with the following header as the first line in the file:

```
folder,favorite,type,name,notes,fields,reprompt,login_uri,login_username,login_password,login_totp
```
For example:
```
folder,favorite,type,name,notes,fields,reprompt,login_uri,login_username,login_password,login_totp
Social,1,login,Twitter,,,0,twitter.com,me@example.com,password123,
,,login,EVGA,,,https://www.evga.com/support/login.asp,hello@bitwarden.com,fakepassword,TOTPSEED123
,,login,My Bank,Bank PIN is 1234,"PIN: 1234",https://www.wellsfargo.com/home.jhtml,john.smith,password123456,
,,note,My Note,"This is a secure note.",,,,,
```

When importing this file, select **Bitwarden (csv)** as your file format.

[{% icon fa-download %} Download sample csv]({{site.baseurl}}/files/bitwarden_export.csv)

### For your Organization

Create a UTF-8 encoded plaintext file with the following header as the first line in the file:

```
collections,type,name,notes,fields,reprompt,login_uri,login_username,login_password,login_totp
```
For example,
```
collections,type,name,notes,fields,reprompt,login_uri,login_username,login_password,login_totp
"Social,Marketing",login,Twitter,,,0,twitter.com,me@example.com,password123,
"Finance",login,My Bank,Bank PIN is 1234,"PIN: 1234",0,https://www.wellsfargo.com/home.jhtml,john.smith,password123456,
,login,EVGA,,,https://www.evga.com/support/login.asp,hello@bitwarden.com,fakepassword,TOTPSEED123
,note,My Note,"This is a secure note.",,,,,
```
When importing this file, select **Bitwarden (csv)** as your file format.

[{% icon fa-download %} Download sample csv]({{site.baseurl}}/files/bitwarden_export_org.csv)

### Minimum Required Values

You may not have data for all the values shown in the above formats, however most are optional. In order for the Bitwarden `.csv` importer to function properly, you are only required to have the following values for any given object:

```
folder,favorite,type,name,notes,fields,reprompt,login_uri,login_username,login_password,login_totp
,,login,Login Name,,,,,,
,,note,Secure Note Name,,,,,,
```

## Condition a .json

### For your Personal Vault

Create a UTF-8 encoded plaintext file in the following format:

```
{
  "folders": [
    {
      "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "name": "Folder Name"
    },
    ...
  ],
  "items": [
    {
    "id": "yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy",
    "organizationId": null,
    "folderId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "type": 1,
    "reprompt": 0,
    "name": "My Gmail Login",
    "notes": "This is my gmail login for import.",
    "favorite": false,
    "fields": [
        {
          "name": "custom-field-1",
          "value": "custom-field-value",
          "type": 0
        },
        ...
      ],
      "login": {
        "uris": [
          {
            "match": null,
            "uri": "https://mail.google.com"
          }
        ],
        "username": "myaccount@gmail.com",
        "password": "myaccountpassword",
        "totp": otpauth://totp/my-secret-key
      },
      "collectionIds": null
    },
    ...
  ]
}
```
When importing this file, select **Bitwarden (json)** as your file format.

[{% icon fa-download %} Download sample json]({{site.baseurl}}/files/bitwarden_export.json)

### For your Organization

Create a UTF-8 encoded plaintext file in the following format:


```
{
  "collections": [
    {
      "id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "organizationId": "yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy",
      "name": "My Collection"
      "externalId": null
    },
    ...
  ],
  "items": [
    {
    "id": "vvvvvvvv-vvvv-vvvv-vvvv-vvvvvvvvvvvv",
    "organizationId": "yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy",
    "folderId": "zzzzzzzz-zzzz-zzzz-zzzz-zzzzzzzzzzzz",
    "type": 1,
    "reprompt": 1,
    "name": "Our Shared Login",
    "notes": "A login for sharing",
    "favorite": false,
    "fields": [
        {
          "name": "custom-field-1",
          "value": "custom-field-value",
          "type": 0
        },
        ...
      ],
      "login": {
        "uris": [
          {
            "match": null,
            "uri": "https://mail.google.com"
          }
        ],
        "username": "myaccount@gmail.com",
        "password": "myaccountpassword",
        "totp": otpauth://totp/my-secret-key
      },
      "collectionIds": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
    },
    ...
  ]
}
```
When importing this file, select **Bitwarden (json)** as your file format.

[{% icon fa-download %} Download sample json]({{site.baseurl}}/files/bitwarden_org_export.json)

### Minimum Required Key-Value Pairs

You may not have data for all the key-value pairs shown in the above formats, however most are optional. In order for the Bitwarden `.json` importer to function properly, you are only required to have the following key-value pairs for each object:

```
{
  "items": [
    {
    "type": 1,
    "name": "Login Item's Name",
    "login": {}                         
  },
  {
    "type": 2,
    "name": "Secure Note Item's Name",
    "secureNote": {}                     
  },
  {
    "type": 3,
    "name": "Card Item's Name",
    "card": {}                         
  },
  {
    "type": 4,
    "name": "Identity Item's Name",
    "identity": {}                     
  }
  ]
}
```

The `"login":`, `"secureNote":`, `"card":`, and `"identity":` objects can be imported as empty objects, however we recommend conditioning files with as much data as you are able.
