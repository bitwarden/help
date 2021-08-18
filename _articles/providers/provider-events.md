---
layout: article
title: Provider Event Logs
categories: [providers]
featured: false
popular: false
hidden: false
tags: []
order: 07
---

## What are Event Logs?

Event logs are timestamped records of events that occur within your Provider. Event logs for the Provider are accessible only to [Provider Admins]({{site.baseurl}}/article/provider-users/) from the {% icon fa-sliders %} **Manage** tab of the Provider Portal:

{% image providers/provider-events.png Provider Event Logs %}

Selecting the **Export** button will create a `.csv` of all events within the specified date range:

{% image providers/provider-events-export.png Export Event Logs %}

### Events

Event Logs record several different types of events for Providers. The Event Logs screen captures a **Timestamp** for the event, client app information including the application type and IP (accessed by hovering over the {% icon fa-globe %} globe icon), the **User** connected to the event, and an **Event** description. Provider Events include:

- Invited user *user-identifier*
- Confirmed user *user-identifier*
- Edited user *user-identifier*
- Removed user *user-identifier*
- Accessed *organization-identifier* organization vault.
- Created organization *organization-identifier* (triggered when [a new Organization is created within Provider]({{site.baseurl}}/article/client-org-setup/#create-a-client-organization))
- Added organization *organization-identifier* (triggered when [an existing Organization is added to Provider]({{site.baseurl}}/article/providers-faqs/#q-can-i-add-an-existing-organizations-to-my-provider))
- Removed organization *organization-identifier*

{% callout success %}
Provider Events do not currently roll up the events logged for each [Client Organization]({{site.baseurl}}/article/providers/#client-organizations). Provider users can access Organization Event Logs from the Client Organization's Vault. [Learn more]({{site.baseurl}}/article/event-logs/).
{% endcallout %}
