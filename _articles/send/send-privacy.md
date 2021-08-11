---
layout: article
title: Send Privacy
categories: [send]
featured: true
popular: false
tags: [bitwarden send, send, passwords, hidden text]
order: 05
---
Protect the contents of your Send by optionally configuring a [password for access](#send-passwords) so that no unintended recipients can see the contained information, and/or to [hide your email from recipients](). For text Sends, you can also optionally require recipients to [toggle visibility](#hide-text) to prevent exposure to unintentional onlookers.

The **Password**, **Hide Email**, and **Hide Text** options are configurable from the Create New Send view, or from the Edit Send views at any time prior to the Send's [deletion]({{site.baseurl}}/article/send-lifespan/#deletion-behavior).

## Send Passwords

For any Send, you may configure a password that recipients will be required to enter in order to access its contents. Password-protecting a Send is a good way to ensure the contents of a Send aren't exposed to unintended recipients:

{% image send/send-pw-protected.png Receiving a password-protected Send%}

Once you password-protect a Send, you won't be able to view the configured password again, however you can [change](#change-send-passwords) or [remove](#remove-send-passwords) it at any time:

### Change Send Passwords

You can change a Send's password at any time from the **Edit Send** view. Changing a Send's password **will not** require you to enter the previous password. When changing a Send's password, the **Password** field will change to **New Password**:

{% image send/send-new-pw.png %}

### Remove Send Passwords

You can remove a Send's password at any time using the {% icon fa-undo %} **Remove Password** menu option. Removing a Send's password **will not** require you to enter the previous password.

## Hide Email

{% callout success %}
For Enterprise Organizations, the availability of this option can be set using an [Enterprise Policy]({{site.baseurl}}/article/policies/#send-options).
{% endcallout %}

By default, Send objects will display the email address of the Sender to recipients:

{% image send/send-email-visible.png Sender Email Visible %}

Toggle the **Hide my email address from recipients** option to remove your email address from the Send object. Send recipients can still validate the trustworthiness of of expected Sends by cross-referencing the **Send link** with their Sender. Hidden-email Send objects will issue a warning to recipients encouraging them to do so:

{% image send/send-email-hidden.png Sender Email Hidden %}

## Hide Text

For text Sends, toggle the **When accessing the Send, hide the text by default** option to require recipients to {% icon fa-eye %} **Toggle Visibility** in order to see its contents. Hiding the text on a Send is a good way to ensure the contents of a Send aren't exposed to unintentional onlookers:

{% image send/send-hidden-text.png Receiving a hidden-text Send%}
