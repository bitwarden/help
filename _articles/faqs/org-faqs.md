---
layout: article
title: Organizations FAQs
categories: [organizations, faqs]
featured: true
popular: false
tags: []
order: 16
---

This article contains Frequently Asked Questions (FAQs) regarding **Organizations** in the following categories:

- [Organizations General](#organizations-general)
- [Organization Administration](#organization-administration)
- [Sharing with an Organization](#sharing-with-an-organization)

Or, for more high-level information about **Organizations**, refer to the following articles:
- [About Organizations](https://bitwarden.com/help/article/about-organizations/)
- [About Collections](https://bitwarden.com/help/article/about-collections/)
- [About Groups](https://bitwarden.com/help/article/about-groups/)

## Organizations General

### Q: What's the difference between Organizations and Premium?

**A:** Organizations unlock access to secure sharing between users who are members of that Organization.

Premium Individual plans unlock premium password security and management features, including advanced 2FA options, the Bitwarden Authenticator (TOTP), encrypted file storage, and more. Premium Individual does not include secure data sharing.

Paid Organizations (Families, Teams, or Enterprise) automatically include premium features (advanced 2FA options, Bitwarden Authenticator, etc.) for every user enrolled in the Organization.

## Organization Administration

### Q: My Organization's Owner is no longer with the company, can a new owner be created?

**A:** Only an Owner can create a new Owner or assign Owner to an existing user. For failover purposes, Bitwarden recommends creating multiple Owner users. If your single Owner has left the company, [Contact Us](https://bitwarden.com/contact).

### Q: I have invited users but they cannot see shared items, what do I do?

**A:** Invited users will receive an email asking them to join the Organization. First, make sure they have accepted the invitation. If they have, a **Admin** or **Owner** should navigate to **Manage** &rarr; **People**, hover over that user, open the gear dropdown, and select **Confirm**.
### Q: What events are auditing for my Organization?

**A:** For a full list of what's included in Bitwarden Event Logs, see [Event Logs](https://bitwarden.com/help/article/event-logs/).

## Sharing with an Organization

### Q: How do I "unshare" an item from my Organization?

**A:** To unshare an item:
  1. Clone the item back to your Personal Vault by navigating to your Organization Vault and selecting **Clone** from the gear dropdown for the item you want to clone. Only users with User Type **Admin** or higher can only clone items into their Personal Vault by changing the **Ownership** setting.

     {% image /organizations/clone-org-item.png %}
2. Delete the item from the Organization Vault by selecting **Delete** from the same gear dropdown.

Alternatively, you can unshare items by moving them to a different Collection with higher Access Control restrictions.

### Q: Does an item I share with the organization stay after I leave?

**A:** It does! When a user shares an item with an Organization, the Organization takes ownership of the item. Even if the user leaves the Organization or deletes their account, that item will remain in the Organization Vault.
