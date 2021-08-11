---
layout: article
title: Custom Fields
categories: [account-management]
featured: false
popular: false
tags: [fields, autofill, custom fields]
order: 08
---

Custom fields, available for any [Vault item type]({% link _articles/account/managing-items.md %}), allow you to store additional well-structured data fields for a Vault item. Custom fields are saved as `Name:Value` pairs, and can be one of three types:

- **Text**: Field value stores a freeform input (text, numbers, etc.)
- **Hidden**: Field value stores freeform input that is hidden from view (particularly useful for Organizations using the [Hide Password access control](https://bitwarden.com/help/article/user-types-access-control/#granular-access-control)).
- **Boolean**: Field value stores a boolean value (true/false).

## Custom Fields for Keys

In addition to common web service inputs like PINs and Security Questions, Custom Fields can be used to store values **up to 5000 characters in length**, for example RSA 4096-bit SSH keys.

{% callout success %}
Character limits for custom field values are imposed on the **post-encryption character count**. For example, a 3383-character RSA-4096 Private SSH key would grow to about 4400-characters when it's encrypted and stored in your Vault.  
{% endcallout %}

## Auto-fill Custom Fields

The **Name** specified for a custom field is critical to successfully setting up auto-fill for custom fields. When naming the custom field, you should use one of the following HTML form element attributes/values:

1. HTML form element's `id` attribute.
2. HTML form element's `name` attribute.
3. HTML form element's corresponding `label` value.
4. HTML form element's `aria-label` attribute.
5. HTML form element's `placeholder` attribute.

Bitwarden will search the matched-URI webpage for those HTML form element attributes/values **in the above priority-order**. If a custom field's name matches one of those attributes/values, its value can be auto-filled into the HTML form element.

### Name to Attribute Matching

Field Name to attribute/value matches is an **exact** and **case-insensitive** comparison. For example, if your custom field has the name `PIN`:

- **Auto-fill offered** for `pin`, `PiN`, `PIN`, etc.
- **Auto-fill not offered** for `pin2` or `mypin`

### Field Name Prefixing

There are two cases in which you can exercise more control over [name to attribute mapping](#name-to-attribute-mapping) by using prefixes.

#### csv

Prefixing your custom field's name with `csv=` allows you to specify multiple names to search for and compare to when auto-fill is performed. For example:

`csv=pin,pin2,mypin` will offer auto-fill for all the above examples.

#### regex

Prefixing your custom field's name with `regex=` allows you to perform [regular expression comparisons](https://regexone.com/){:target="_blank"} when auto-fill is performed. For example:

`regex=pin` will offer auto-fill for all the above examples.

`regex=^first.*name` will offer auto-fill for `firstName`, `First_name`, and `First Name`

### Example Auto-fill Configuration

Follow this procedure to correctly configure a custom field for auto-fill. This example uses Google Chrome for its Developer Tools.

{% image features/custom-fields/custom_field.gif %}

1. On the webpage that matches the Login item's URI, right-click the field you want to auto-fill to and select **Inspect**.

   The HTML element will open and be highlighted in the Developer Console.
2. Find and copy the element `id` (find `id="xxx"`, where `xxx` is the element's `id` value).
3. In the relevant Vault item's **Custom Fields** section, choose the appropriate field type and select the {% icon fa-plus %} **New Custom Field** button:

   {% image features/custom-fields/types.png Select custom field type%}
4. Paste the copied element `id` in the **Name** field.
5. Specify the desired information to be auto-filled (in the above example, a PIN) in the **Value** field.

   {% image features/custom-fields/custom-field-eg.png Custom field example %}
6. Save the Vault item.
