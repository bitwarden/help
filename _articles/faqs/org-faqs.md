---
layout: article
title: Organizations FAQs
categories: [organizations]
featured: true
popular: false
tags: []
order: 18
---

This article contains Frequently Asked Questions (FAQs) regarding **Organizations**.

For more high-level information about **Organizations**, refer to the following articles:
- [About Organizations](https://bitwarden.com/help/article/about-organizations/)
- [About Collections](https://bitwarden.com/help/article/about-collections/)
- [About Groups](https://bitwarden.com/help/article/about-groups/)

## Organizations General

### Q: What's the difference between Organizations and Premium?

**A:** Organizations enable secure sharing from Organizations to Organization users.

Premium Individual plans unlock premium password security and management features, including advanced 2FA options, the Bitwarden Authenticator (TOTP), encrypted file attachments, and more. Premium Individual does not include secure data sharing.

Paid Organizations (Families, Teams, or Enterprise) automatically include premium features (advanced 2FA options, Bitwarden Authenticator, etc.) for every user enrolled in the Organization.

## Organization Administration

### Q: My Organization's owner is no longer with the company, can a new owner be created?

**A:** Only an Owner can create a new Owner or assign Owner to an existing user. For failover purposes, Bitwarden recommends creating multiple Owner users. If your single Owner has left the company, [Contact Us](https://bitwarden.com/contact).

### Q: I have invited users but they cannot see shared items, what do I do?

**A:** Invited users will receive an email asking them to join the Organization. First, make sure they have accepted the invitation. If they have, a **Admin** or **Owner** should navigate to **Manage** &rarr; **People**, hover over that user, open the gear dropdown, and select **Confirm**.

### Q: What events are audited for my Organization?

**A:** For a full list of what's included in Bitwarden Event Logs, see [Event Logs](https://bitwarden.com/help/article/event-logs/).

### Q: Can I prevent users from self-registering into my Organization?

**A:** If you're self-hosting, [configure the environment variable]({% link _articles/hosting/environment-variables.md %}) `globalSettings__disableUserRegistration=` to `true` to prevent users from signing up for an account via the Registration page. Once configured, Organization Admins or Owners must invite users to signup for an account on the self-hosted instance.

### Q: My users don't have permission to update desktop apps on their workstations. Can I turn off automatic updates for Bitwarden?

**A:** Yes! Add the environment variable `ELECTRON_NO_UPDATER=1` to your desktop app template to prevent automatic update procedures from trying and failing on your end-user workstations. [Learn how to set environment variables for desktop apps.](https://www.twilio.com/blog/2017/01/how-to-set-environment-variables.html){:target="\_blank"}

{% callout warning %}
Like with any software, running old versions may present a security risk.
{% endcallout %}


## Sharing with an Organization

### Q: How do I "unshare" an item from my Organization?

**A:** To unshare an item:
  1. Clone the item back to your Personal Vault by navigating to your Organization Vault and selecting **Clone** from the gear dropdown for the item you want to clone. Only users with User Type **Admin** or higher can only clone items into their Personal Vault by changing the **Ownership** setting.

     {% image organizations/clone-org-item.png %}
2. Delete the item from the Organization Vault by selecting **Delete** from the same gear dropdown.

Alternatively, you can unshare items by moving them to a different Collection with higher Access Control restrictions.

### Q: How do I hide a password from my Organization's users?

**A:** Use the **Hide Passwords** option in the **Access Control** section when adding new users or editing existing ones in order to hide a given Collection's passwords and hidden fields from them. For more information, see [Access Control](https://bitwarden.com/help/article/user-types-access-control/#access-control).

### Q: Does an item I move to the Organization stay after I leave?

**A:** It does! When a user shares an item with an Organization, the Organization takes ownership of the item. Even if the user leaves the Organization or deletes their account, that item will remain in the Organization Vault.
