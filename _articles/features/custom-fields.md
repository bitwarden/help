---
layout: article
title: Custom Fields
categories: [account-management]
featured: false
popular: false
tags: [fields, autofill, custom fields]
order: "08"
---

Custom fields, available for any [Vault item type]({{site.baseurl}}/article/managing-items/), allow you to store additional well-structured data fields for a Vault item. Custom fields are saved as `Name:Value` pairs, and can be one of three types:

- **Text**: Field value stores a freeform input (text, numbers, etc.)
- **Hidden**: Field value stores freeform input that is hidden from view (particularly useful for Organizations using the [Hide Password access control]({{site.baseurl}}/article/user-types-access-control/#granular-access-control)).
- **Boolean**: Field value stores a boolean value (true/false).

{% callout success %}
#### Custom Fields for Keys

In addition to common web service inputs like PINs and Security Questions, Custom Fields can be used to store values **up to 5000 characters in length**, for example RSA 4096-bit SSH keys.

Character limits for custom field values are imposed on the **post-encryption character count**. For example, a 3383-character RSA-4096 Private SSH key would grow to about 4400-characters when it's encrypted and stored in your Vault.
{% endcallout %}

## Creating Custom Fields

Custom fields can be added to a Vault item from any Bitwarden client using the **Custom Fields** section of the **Edit Item** panel:

{% image features/custom-fields.png Custom Fields in Web Vault %}

### Custom Field Names

The specified **Name** is important to get right in order to successfully auto-fill a custom field. Using the Browser Extension, you can quickly get the correct field name using the **Copy Custom Field Name** option in the context menu (in most cases, by right-clicking on the form element):

{% image features/custom-fields-contextmenu.png %}

Selecting this context menu option will copy the form element's `id`, `name`, `aria-label`, or `placeholder` value (**in that order of preference**).

#### Find Custom Field Names Manually

If you don't use the Browser Extension, the best way to find a field name is to use your web browser's developer tools, as in the following example:

{% image features/custom-fields/custom_field.gif Browser Extension Context Menu %}

1. On the webpage that matches the Login item's URI, right-click the field you want to auto-fill to and select **Inspect**. The HTML element will open and be highlighted in the Developer Console.
2. Find and copy the element `id` (find `id="xxx"`, where `xxx` is the element's `id` value).
3. In the relevant Vault item's **Custom Fields** section, choose the appropriate field type and select the {% icon fa-plus %} **New Custom Field** button:

   {% image features/custom-fields/types.png Select custom field type%}
4. Paste the copied element `id` in the **Name** field.
5. Specify the desired information to be auto-filled (in the above example, a PIN) in the **Value** field.

   {% image features/custom-fields/custom-field-eg.png Custom field example %}
6. Save the Vault item.

### More About Custom Field Names

#### Order of Preference

If you're naming a custom field manually, you should use one of the following HTML form element attributes/values **in order of preference**:

1. HTML form element's `id` attribute.
2. HTML form element's `name` attribute.
3. HTML form element's `aria-label` attribute.
4. HTML form element's `placeholder` attribute.

#### Matching

Field name matching is an **exact** and **case-insensitive** comparison. For example, if your custom field has the name `PIN`:

- **Auto-fill is offered** for `pin`, `PiN`, `PIN`, etc.
- **Auto-fill is not offered** for `pin2` or `mypin`

#### Prefixing

There are two cases in which you can exercise more control over [matching](#matching) by using prefixes:

- **csv**: Prefixing your custom field's name with `csv=` allows you to specify multiple names to search for and compare against for auto-fill, for example `csv=pin,mypin,pincode`.
- **regex**: Prefixing your custom field's name with `regex=` allows you to perform [regular expression comparisons](https://regexone.com){:target="\_blank"} when auto-fill is performed. For example, `regex=^first.*name` will offer auto-fill for `firstName`, `First_name`, and `First Name`.
