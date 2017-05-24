---
layout: article
title: Managing users for your organization
categories: [Organizations]
featured: true
popular: false
tags: []
---

## Onboarding Users

Adding new users to your organization involves a three step process: invite, accept, and confirm.

To **invite** a user to your organization simply enter their email address, select what type of user they are (normal user, admin, or owner) and select the collection(s) that they should have access to (you can change this later by editing the user). You can also designate a user as having access to all items for the organization and collection assignment will not be necessary.

{% note %}
Enterprise organizations can sync their existing user directory with their bitwarden organization to automatically invite new users into bitwarden.
{% endnote %}

{% image organizations/invite-modal.png %}

Once you invite a user they will receive an email where they will need to click a link to **accept** the invitation. After clicking the accept link the user will be prompted to create a new bitwarden account or log into the an existing account registered at that email address.

{% image organizations/user-accept.png %}

After the user has successfully accepted the organization invite, an organization admin will then need to **confirm** the user from the same area in the web vault that you invited the user from (Organization Admin -> People). Only after the user is confirmed will they then have access to that organization and the items being shared with them.

{% image organizations/org-people-options.png %}

## Removing Users

{% note %}
Enterprise organizations can sync their existing user directory with their bitwarden organization to automatically remove users when they are disabled or deleted from the directory.
{% endnote %}

To remove a user from your organization, select the **Remove** option from the options menu for that user. Once a user is removed from your organization, they will no longer have access to any shared logins.

{% image organizations/org-people-options.png %}
