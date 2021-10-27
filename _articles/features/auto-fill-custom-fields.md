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

## Auto-fill Custom Fields

{% callout success %}
It's important to name the custom field correctly in order for auto-fill to work. [Learn how to name custom fields]({{site.baseurl}}/article/custom-fields/#custom-field-names).
{% endcallout %}

To auto-fill custom fields:

1. Open the Browser Extension or, if your Browser Extension is already open, navigate to the {% icon fa-folder %} **Tab** view.

   The Tab view automatically detects the URI (e.g. myverizon.com) of the page displayed in the open tab and surfaces any Vault items with corresponding URIs.
2. Select the item that contains the custom field you want to auto-fill:

   {% image autofill/auto-fill-custom-field.png Item with a Custom Field %}

The Browser Extension will find any fields that match the [custom field name]({{site.baseurl}}/article/custom-fields/custom-field-names) and auto-fill that field's value.

## Special Auto-fill Scenarios

### HTML `<span>` Elements

Typically custom fields are auto-filled in HTML `<form>` or `<input>` elements, however Bitwarden Browser Extensions can auto-fill custom field values into the `innerText` of HTML `<span>` elements as well.

In order to auto-fill into a `<span>` element, the opening tag must have the `data-bwautofill` attribute. So, in the following scenario:

```
<span data-bwautofill id="myspan">Bitwarden is great.</span>
```

A custom field with **name:** `myspan` will replace `Bitwarden is great` with whatever is saved in the custom field's **value**.
