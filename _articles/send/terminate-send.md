---
layout: article
title: Send Ephemerality
categories: [send]
featured: true
popular: false
tags: []
order: 04
---

For each Send, there are two *termination behaviors*:

- **Deletion**: Bitwarden Send is designed for temporary file storage, so specifying a Deletion Date is **required**. Deleted Sends will not be accessible to any old or new recipients, and will be removed from the creator's Send view.

   {% callout note %}Unlike traditional Vault items, there is no Trash for Sends. Deleted Sends will stay in the list with the status {% icon fa-trash %} **Pending deletion** for ..... before being permanently deleted.{% endcallout %}

- **Expiration**: Setting an Expiration condition for a Send is an **optional** measure. Expired Sends will not be accessible to any new or old recipients, but can still be accessed by the Send's creator from their Bitwarden application until the specified Deletion Date. Expiration can be triggered by an **Expiration Date** or by a **Maximum Access Count**.

Refer to the following table for a quick view of termination behavior Send attributes that can be set on the Add Send or Edit Send screen:

|Option|Description|Possible Values|
|------|-----------|---------------|
|**Deletion Date**|The Send will be permanently deleted on the specified date and time.<br><br>**Specifying a Deletion Date is required.**|1 Hour, 1 Day, 2 Days, 3 Days, 7 Days, 30 Days or Custom (a timestamp in format `MM/DD/YYYY HH:MM AM/PM`).|
|**Expiration Date**|The Send will expire on the specified date and time.|Never, 1 Hour, 1 Day, 2 Days, 3 Days, 7 Days, 30 Days, or Custom (a timestamp in format `MM/DD/YYYY HH:MM AM/PM`).|
|**Maximum Access Count**|The Send will expire after the specified access count is reached.|Any positive integer.|

## Manually Terminate a Send

You can manually force the expiration of a Send by checking the **Disable this Send so that no one can access it.** option on the Add Send or Edit Send screen.

You can manually delete a Send using the hover-over {% icon fa-cog %} **Gear** dropdown:

{% image /send/send-delete.png %}
