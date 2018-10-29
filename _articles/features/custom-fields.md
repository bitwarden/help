---
layout: article
title: Using custom fields
categories: [features]
featured: false
popular: false
tags: [fields, autofill, custom fields]
---

Custom fields allow you to store additional, well structured data fields within your vault entries. These fields could be security questions, PINs, or anything else. Custom fields have a name, a value, and a type (text, hidden, and boolean).

## Auto-filling custom fields

Custom field names are an important identifier. Depending on the name you give your custom field, Bitwarden will attempt to auto-fill the custom field's value for you. If you intend to auto-fill custom fields you should name your field based on an identifier from the webpage form. These names are searched for using the following criteria:

- HTML form element's **id** attribute
- then the HTML form element's **name** attribute
- then the HTML form element's corresponding **label** value
- then the HTML form element's **placeholder** value

If one of these matches is found, Bitwarden will auto-fill the custom field's value for you.

## Special name prefixes for auto-filling

When Bitwarden searches a webpage's form elements to match with your custom field's name, an exact, case-insensitive comparison is done. For example, if your custom field has the name "PIN", the following form element's values (from the id, name, label, etc) will match for auto-filling: "pin", "PIN", and "Pin". However, values such as "pin2" or "mypin" will not match.

There are two special name prefixes that can give you even more control over how your custom field is auto-filled:

**CSV**

Prefixing your custom field's name with `csv=` allows you to specify multiple names to search for and compare when an auto-fill is performed.

Example:

`csv=pin,pin2,mypin` will match all of the examples above.

**Regular Expressions**

Prefixing your custom field's name with `regex=` allows you to perform [regular expression](https://regexone.com/){:target="_blank"} comparisons when an auto-fill is performed.

Example:

`regex=pin` will match all of the examples above.

Example:

`regex=^first.*name` will match "firstName", "First_name", and "First Name".
