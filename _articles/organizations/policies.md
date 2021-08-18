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

{% callout warning %}
Bitwarden highly recommends setting Enterprise Policies prior to inviting users to your Organization. Some Policies will remove non-compliant users on enabling, and some are not retroactively enforceable.
{% endcallout %}

## Setting Enterprise Policies

Policies can be set in two locations:

- In your Organization, open the **Manage** tab and select **Policies** from the left menu.
- Navigate to the Business Portal, and select the **Policies** button. For more information, see [About the Business Portal](https://bitwarden.com/help/article/about-business-portal/).

## Available Policies

### Two-Step Login

Enabling the **Two-step Login** policy will require non-Owner/non-Admin users to use any two-step login method to access their Vaults.

{% callout warning %}
**Users in the Organization who do not have two-step login enabled will be removed from the Organization when you enable this policy.**

Users who are removed as a result of this policy will be notified via email, and must be re-invited to the Organization.
- Existing users will not be able to accept the invitation until two-step login is enabled for their Vault.
- New users will be automatically setup with email-based two-step login, but can change this at any time.
{% endcallout %}

### Master Password

Enabling the **Master Password** policy will enforce a configurable set of minimum requirements for users' Master Password strength. Organizations can enforce:
- Minimum Master Password complexity
- Minimum Master Password length
- Types of characters required

Password complexity is calculated on a scale from 0 (Weak) to 4 (Strong). Bitwarden calculates password complexity using [the zxcvbn library](https://github.com/dropbox/zxcvbn).

{% callout warning %}
Existing non-compliant users **will not** have their Master Passwords changed when this policy is enabled, nor will they be removed from the Organization. The next time this group of users changes their Master Password, this policy will be enforced.
{% endcallout %}

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

{% callout warning %}
Existing non-compliant passwords **will not** be changed when this policy is enabled, nor will the items be removed from the Organization. When changing or generating a password after this policy is enabled, configured policy rules will be enforced.

A banner is displayed to users on the Password Generator screen to indicate that a policy will affect their generator settings.
{% endcallout %}

### Single Organization

Enabling the **Single Organization** policy will restrict non-Owner/non-Admin members of your Organization from being able to join other Organizations, or from creating other Organizations.

{% callout warning %}
**Users in the Organization who are members of multiple Organizations will be removed from the Organization when you enable this policy.**

Users who are removed as a result of this policy will be notified via email, and must be re-invited to the Organization. Users will not be able to be confirmed to the Organization until they have removed themselves from all other Organizations.
{% endcallout %}

### Single Sign-On Authentication

Enabling the **Single Sign-On Authentication** policy will require non-Owner/non-Admin users to log in with Enterprise Single Sign-On. For more information, see [Access Your Vault using SSO](https://bitwarden.com/help/article/sso-access-your-vault/).

{% callout info %}
The **Single Organization** policy must be enabled before activating this policy.

As a result, you must disable the **Single Sign-On Authentication** policy before you can disable the **Single Organization** policy.
{% endcallout %}

### Personal Ownership

Enabling the **Personal Ownership** policy will require non-Owner/non-Admin users to save Vault Items to an Organization by disabling personal ownership of Vault items for organization users.

A banner is displayed to users on the Add Item screen indicating that a policy will affect their ownership options.

{% callout info %}
Vault Items that were created prior to the implementation of this policy or prior to joining the Organization will remain in the user's personal Vault.
{% endcallout %}

### Disable Send

Enabling the **Disable Send** policy will prevent non-Owner/non-Admin users from creating or editing a Send using [Bitwarden Send]({% link _articles/send/about-send.md %}). Users subject to this policy will still be able to delete existing Sends that have not yet reached their [Deletion Date]({% link _articles/send/send-lifespan.md %}).

A banner is displayed to users in the Send view and on opening any existing Send to indicate that a policy is restricting them to only deleting Sends.

### Send Options

Enabling the **Send Options** policy will allow Owners and Admins to specify options for creating and editing Sends. Owners and Admins are exempt from this policy's enforcement. Options include:

|Option|Description|
|------|-----------|
|Do not allow users to hide their email address|Enabling this option disables the [Hide Email option]({{site.baseurl}}/article/send-privacy/#hide-email), meaning that all [received Sends]({{site.baseurl}}/article/receive-send) will include whom they are sent from.|

### Master Password Reset

Enabling the **Master Password Reset** policy will allow Owners and Admins to use [Password Reset]({{site.baseurl}}/article/admin-reset/) to reset the master password of enrolled users. By default, users will need to [self-enroll in Password Reset]({{site.baseurl}}/article/admin-reset/#self-enroll-in-password-reset), however the [Automatic Enrollment](#automatic-enrollment) option can be used to automatically enroll invited users:

#### Automatic Enrollment

Enabling the **Automatic Enrollment** option will automatically enroll new users in Password Reset when their [invitation to the Organization is accepted]({{site.baseurl}}/article/managing-users/#accept).

{% callout info %}
Users already in the Organization will not be retroactively enrolled in Password Reset, and will be required to [self-enroll]({{site.baseurl}}/article/admin-reset/#self-enroll-in-password-reset).
{% endcallout %}
