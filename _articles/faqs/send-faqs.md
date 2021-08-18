---
layout: article
title: Send FAQs
categories: [send]
featured: true
popular: false
tags: []
order: 09
---

### Q: Why can't I create a file Send?

**A:** Use of text Sends is available to all Bitwarden users, however creation of file Sends is only available for Premium users, including members of a Paid Organization (Families, Teams, or Enterprise).

Additionally, creation of file Sends requires your Email Address to be verified.

### Q: Why can't I create a file Send from Firefox or Safari Browser Extension?

**A:** You can! But in order to browse for a file on the Create Send view in a Firefox Browser Extension, you'll need to open the extension in the sidebar or pop out a new window using the popout {% icon fa-external-link fa-rotate-270 %} button:

{% image send/send-ff-popout.png The popout icon %}

### Q: Why are Sends missing from my Send view?

**A:** By design, Sends are ephemeral. Each created Send has a **maximum lifespan of 31 days**, configurable when you [create a Send]({% link _articles/send/create-send.md %}) or at any time by editing it. When a Send's [Deletion Date]({{site.baseurl}}/article/send-lifespan/#deletion-date) is reached, it will be purged from Bitwarden systems and inaccessible to both the Sender and any recipients.

### Q: What do the icons next to my Sends indicate?

**A:** Icons in the Send view are intended to help you understand the configured [lifespan]({% link _articles/send/send-lifespan.md %}) and [privacy]({% link _articles/send/send-privacy.md %}) options:

|Icon|Meaning|
|----|-------|
|{% icon fa-key %}|This Send is [protected by a password]({{site.baseurl}}/article/send-privacy/#send-passwords).|
|{% icon fa-warning %}|This Send has been [manually disabled]({{site.baseurl}}/article/send-lifespan/#manually-disable-or-delete).|
|{% icon fa-clock-o %}|This Send has reached it's specified [Expiration Date]({{site.baseurl}}/article/send-lifespan/#expiration-date).|
|{% icon fa-ban %}|This Send has reached it's specified [Maximum Access Count]({{site.baseurl}}/article/send-lifespan/#maximum-access-count).|
|{% icon fa-trash %}|This Send has reached it's specified [Deletion Date]({{site.baseurl}}/article/send-lifespan/#deletion-date) and is **Pending Deletion**.|

### Q: Why is Send disabled for my Organization?

**A:** Bitwarden Enterprise Organizations include a [Disable Send policy]({{site.baseurl}}/article/policies/#disable-send), which Admins and Owners can use to toggle on/off Send functionality within their Organization. Contact your Admin or Owner to discuss your Organization's policies.

During the initial rollout of Send in March 2021, Organizations that already had the [Personal Ownership policy]({{site.baseurl}}/article/policies/#personal-ownership) enabled will find that the Disable Send policy was enabled for their Organizations. This was to allow for customers with this security profile to opt-in to Send on their own schedule.

If you do want to use Bitwarden Send as an end-to-end encrypted solution for ephemeral sharing within your Organization, all you need to do is turn the Disable Send policy off from the [Business Portal]({% link _articles/organizations/about-business-portal.md %}) or from your Organization's **Manage** &rarr; **Policies** page.

Learn more about Send [here](https://bitwarden.com/products/send).

### Q: Can I disable Send for my Organization?

**A:** Enterprise Organizations can disable Send at any time using the [Disable Send policy]({{site.baseurl}}/article/policies/#disable-send). Admins and Owners can implement this policy from the [Business Portal]({% link _articles/organizations/about-business-portal.md %}) or from your Organization's **Manage** &rarr; **Policies** page. Enabling the policy will prevent Organization members from creating or editing any Sends.
