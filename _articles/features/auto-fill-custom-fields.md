---
layout: article
title: Auto-fill Custom Fields
categories: [auto-fill]
order: "05"
featured: true
popular: false
tags: [browser, autofill, auto-fill, custom fields, form fill]
---

Bitwarden can do more than just [auto-fill your usernames and passwords]({{site.baseurl}}/article/auto-fill-browser/)! **Bitwarden Browser Extensions** can auto-fill [custom fields]({{site.baseurl}}/article/custom-fields) to simplify fill-in of security questions, PINS, and more using the [unique Tab view]({{site.baseurl}}/article/auto-fill-browser/)).

Additionally, if your Browser Extension is having issues auto-filling usernames and passwords for a particular site, using [Linked custom fields](#using-linked-custom-fields) can force an auto-fill.

## Auto-fill Custom Fields

{% callout success %}
It's important to name the custom field correctly in order for auto-fill to work ([learn more]({{site.baseurl}}/article/custom-fields/#custom-field-names)).
{% endcallout %}

To auto-fill custom fields:

1. Open the Browser Extension or, if your Browser Extension is already open, navigate to the {% icon fa-folder %} **Tab** view.

   The Tab view automatically detects the URI (e.g. myverizon.com) of the page displayed in the open tab and surfaces any Vault items with corresponding URIs.
2. Select the item that contains the custom field you want to auto-fill:

   {% image autofill/auto-fill-custom-field.png Item with a Custom Field %}

The Browser Extension will find any fields that match the [custom field name]({{site.baseurl}}/article/custom-fields/custom-field-names) and auto-fill that field's value.

### Using Linked Custom Fields

Linked custom fields can be used to solve issues where your Browser Extension can't auto-fill usernames and passwords for a particular site. To create and auto-fill a Linked custom field:

1. In the **Custom Fields** section of a Vault item's **Edit Item** panel, choose **Linked** from the dropdown and select {% icon fa-plus %} **New Custom Field**:

   {% image features/custom-fields.png Add a Linked Custom Field %}
2. In the **Name** input, [give the custom field a name]({{site.baseurl}}/article/custom-fields/#custom-field-names) that corresponds to the username or password's HTML form element `id`, `name`, `aria-label`, or `placeholder`.

   {% callout success %}You can get the right value by right-clicking the form element and using the **Copy Custom Field Name** context menu option:<br><br>{% image features/custom-fields-contextmenu.png %}{% endcallout %}
3. From the **Value** dropdown, select **Username** or **Password** depending on which credential you're having trouble auto-filling. In many cases, you'll need to create a Linked custom field for each.
4. **Save** the changes to your Vault item.

Now that you've created one or more Linked custom fields, you can auto-fill using the [method described in an earlier section](#auto-fill-custom-fields). When you do, your Browser Extension will auto-fill the username, password, or both into the HTML form element given for a field Name.

## Special Auto-fill Scenarios

### HTML `<span>` Elements

Typically custom fields are auto-filled in HTML `<form>` or `<input>` elements, however Bitwarden Browser Extensions can auto-fill custom field values into the `innerText` of HTML `<span>` elements as well.

In order to auto-fill into a `<span>` element, the opening tag must have the `data-bwautofill` attribute. So, in the following scenario:

```
<span data-bwautofill id="myspan">Bitwarden is great.</span>
```

A custom field with **name:** `myspan` will replace `Bitwarden is great` with whatever is saved in the custom field's **value**.
