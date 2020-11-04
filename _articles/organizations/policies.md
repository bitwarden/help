---
layout: article
title: Enterprise Policies
categories: [organizations]
featured: true
popular: false
hidden: false
tags: [organizations, enterprise, policies]
order: 14
---

## What are Enterprise Policies?

Enterprise Polices enable Enterprise Organizations to enforce security rules for all users, for example mandating use of Two-step Login.

Enterprise Policies can be set by users with the User Type **Admin** or **Owner**.

{% warning %}
Bitwarden highly recommends setting Enterprise Policies prior to inviting users to your Organization. Some Policies will remove non-compliant users on enabling, and some are not retroactively enforceable.
{% endwarning %}

### In This Article

- [Setting Enterprise Policies](#setting-enterprise-policies)
- [Available Policies](#available-policies)
  - [Two-Step Login Policy](#two-step-login)
  - [Master Password Policy](#master-password)
  - [Password Generator Policy](#password-generator)

## Setting Enterprise Policies

Policies can be set in two locations:

- In your Organization, open the **Manage** tab and select **Policies** from the left menu.
- Navigate to the Business Portal, and select the **Policies** button. For more information, see [About the Business Portal](https://bitwarden.com/help/article/about-business-portal/).

## Available Policies

### Two-Step Login

Enabling the **Two-step Login** policy will require users to use any two-step login method to access their Vaults.

{% warning %}
**Users in the Organization who do not have two-step login enabled will be removed from the Organization when you enable this policy.**

Users who are removed as a result of this policy will be notified via email, and must be re-invited to the Organization.
- Existing users will not be able to accept the invitation until two-step login is enabled for their Vault.
- New users will be automatically setup with email-based two-step login, but can change this at any time.
{% endwarning %}

### Master Password

Enabling the **Master Password** policy will enforce a configurable set of minimum requirements for users' Master Password strength. Organizations can enforce:
- Minimum Master Password complexity
- Minimum Master Password length
- Types of characters required

Password complexity is calculated on a scale from 0 (Weak) to 4 (Strong). Bitwarden calculates password complexity using [the zxcvbn library](https://github.com/dropbox/zxcvbn).

{% warning %}
Existing non-compliant users **will not** have their Master Passwords changed when this policy is enabled, nor will they be removed from the Organization. The next time this group of users changes their Master Password, this policy will be enforced.
{% endwarning %}

### Password Generator

Enabling the **Password Generator** policy will enforce a configurable set of minimum requirements for any user-generated passwords. Organizations can enforce:
- Password , Passphrase, or User Preference

**For Passwords:**
- Minimum Password Length
- Minimum Number (0-9) count
- Minimum Special Character (!@#$%^&*) count
- Types of characters required

**For Passphrases:**
- Minimum number of words
- Whether to capitalize
- Whether to include numbers

{% warning %}
Existing non-compliant passwords **will not** be changed when this policy is enabled, nor will the items be removed from the Organization. When changing or generating a password after this policy is enabled, configured policy rules will be enforced.

A banner will appear to users on the Password Generator screen indicating that a policy will affect their generator settings.
{% endwarning %}
