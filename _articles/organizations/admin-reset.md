---
layout: article
title: Admin Password Reset
categories: [organizations]
featured: true
popular: false
tags: [master password, reset, administrator, owner]
order: 15
---

{% callout info %}
Admin Password Reset is available for **Enterprise Organizations** on a current plan. Like Login with SSO, Password Reset is not available to [Classic 2019 Enterprise Organizations]({{site.baseurl}}/article/2020-plan-updates).
{% endcallout %}

## What is Admin Password Reset?

Admin Password Reset allows [designated administrators](#permissions) to recover Enterprise Organization user accounts and restore access in the event that an employee forgets their [Master Password]({{site.baseurl}}/article/master-password/). Admin Password Reset can be activated for an Organization by [enabling the Admin Password Reset Policy](#activate-admin-password-reset).

Individual users must be enrolled (either through [self-enrollment](#self-enroll-in-password-reset) or using the [automatic enrollment policy option](#automatic-enrollment)) to be eligible for password reset, as enrollment triggers the key exchange that makes Admin Password Reset secure.

**Admin Password Reset does not bypass Two-step Login or Login with SSO**. If a [Two-step Login method]({{site.baseurl}}/article/setup-two-step-login/) is enabled for the account or if your Organization [requires SSO Authentication]({{site.baseurl}}/article/policies/#single-sign-on-authentication), you will still be required to use that method to access your Vault after password reset.

### Encryption

{% callout info %}
**2021-06-01:** The release of Admin Password Reset introduces a new RSA public/private key pair for all Organizations. The private key is further encrypted with the Organization's pre-existing symmetric key before being stored.

The key pair is generated and encrypted client-side upon creation of a new Organization, or for an existing Organization upon:

- Navigation to the **Manage** &rarr; **People** screen.
- Updates to anything on the **Settings** &rarr; **My Organization** screen.
- Upgrades from one Organization type to another.
{% endcallout %}

When a member of the Organization [enrolls](#automatic-enrollment) in Admin Password Reset, that user's [encryption key]({{site.baseurl}}/article/account-encryption-key) is encrypted with the Organization's public key. The result is stored as the **Password Reset Key**.

When an Admin Password Reset action is taken:

1. The Organization private key is decrypted with the Organization symmetric key.
2. The user's **Reset Password Key** is decrypted with the decrypted Organization private key, resulting in the users's [encryption key]({{site.baseurl}}/article/account-encryption-key).
3. The user's encryption key and Master Password hash are replaced with a *new* encryption key and *new* Master Password hash, seeded from a new Master Password.
4. The user's new encryption key is encrypted with the Organization's public key, replacing the previous **Password Reset Key** with a new one.

**At no point** will anyone, including the administrator who executes the reset, be able to see the old Master Password.

### Permissions

Admin Password Reset can be executed by [Owners, Admins, and permitted Custom users]({{site.baseurl}}/article/user-types-access-control/). Admin Password Reset uses a hierarchical permission structure to determine who can reset whose Master Password, meaning:
- Any Owner, Admin, or permitted Custom user can reset a **User**, **Manager**, or **Custom User**'s Master Password.
- Only an Admin or Owner can reset an **Admin**'s Master Password.
- Only an Owner can reset another **Owner**'s Master Password.

### Event Logging

[Events]({{site.baseurl}}/article/event-logs/) are logged when:
- A Master Password is reset.
- A user enrolls in Admin Password Reset.
- A user withdraws from Admin Password Reset.

## Activate Admin Password Reset

To activate Master Password Reset for your Enterprise Organization, navigate to the [Business Portal]({{site.baseurl}}/article/about-business-portal/) and enable the [Master Password Reset Policy]({{site.baseurl}}/article/policies/#master-password-reset):

{% image organizations/pwreset-activate.png Activate Password Reset %}

Users will need to [self-enroll](#self-enroll-in-password-reset) or [be auto-enrolled](#automatic-enrollment) in Password Reset before their Master Password can be reset.

### Automatic Enrollment

Enabling the Automatic Enrollment policy option will automatically enroll new users in Admin Password Reset when their [invitation to the Organization is accepted]({{site.baseurl}}/article/managing-users/#accept). Users already in the Organization will not be retroactively enrolled in Admin Password Reset, and will be required to [self-enroll](#self-enroll-in-password-reset).

{% callout success %}
If you're automatically enrolling Organization members in Admin Password Reset, we **highly recommend notifying them of this feature**. Many Bitwarden Organization users store personal credentials in their Personal Vault, and should be made aware that Admin Password Reset could allow an administrator to access their Personal Vault.
{% endcallout %}

### Self-enroll in Password Reset

To enroll in Password Reset, navigate to **Settings** &rarr; **Organizations** in the [Web Vault](https://vault.bitwarden.com/){:target="\_blank"}:

{% image organizations/pwreset-enroll-gif.gif Enroll in Password Reset %}

Hover over the Organization you wish to enroll in Password Reset for, select the {% icon fa-cog %} gear dropdown, and choose **Enroll in Password Reset**. When you're enrolled in Password Reset, the Organization listing will display a {% icon fa-key %} key icon. You can enroll in Admin Password Reset for multiple Organizations, if you choose.

### Withdraw Enrollment

Once enrolled, you can **Withdraw** from Password Reset from the same dropdown used to enroll:

{% image organizations/pwreset-withdraw.png Withdraw from Password Reset %}

Manually changing your Master Password or [rotating your encryption key]({{site.baseurl}}/article/account-encryption-key/) **will not** withdraw you from Admin Password Reset.

## Reset a Master Password

{% callout info %}
You must be a [Owner, Admin, or permitted Custom user](#permissions) to reset a Master Password. Check the [Permissions](#permissions) section of this article to see whose Master Password you are allowed to reset.
{% endcallout %}

To reset a Master Password for a member of your Enterprise Organization:

1. In your [Web Vault](https://vault.bitwarden.com){:target="\_blank"}, open your Organization.
2. Open the **Manage** tab and navigate to the **People** section.
3. Hover over the user whose Master Password you want to reset, select the {% icon fa-cog %} gear dropdown, and choose {% icon fa-key %} **Reset Password**:

   {% image organizations/pwreset-reset.png Reset Password %}

4. On the Reset Password window, create a **New Password** for the user. If your Organization has enabled the [Master Password Policy]({{site.baseurl}}/article/policies/#master-password), you will need to create a password that meets the implemented requirements (e.g. min 8 characters, contains numbers):

   {% image organizations/pwreset-newpw.png Create a New Password %}

   Copy the new Master Password and contact the user to coordinate secure communication of it, for example using [Bitwarden Send]({{site.baseurl}}/article/create-send/).

5. Select **Save** to execute the Password Reset. Doing so will log the user out of their current sessions.  Active sessions on some client applications, like Mobile Apps, may remain active for up to one hour.

### After a Password Reset

When your Master Password is reset, you will receive an email from Bitwarden to inform you of this. On receiving this email, contact your Organization administrator to obtain your new Master Password through a secure channel like [Bitwarden Send]({{site.baseurl}}/article/create-send/).

Once you have regained access to your Vault using the new Master Password, you should immediately change your Master Password to something **strong** and **memorable**. Changing your Master Password after a reset will help to protect your privacy.
