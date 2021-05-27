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

**Admin Password Reset does not bypass Two-step Login or Login with SSO**. If a [Two-step Login method](({{site.baseurl}}/article/setup-two-step-login/)) is enabled for the account or if your Organization [requires SSO Authentication]({{site.baseurl}}/article/policies/#single-sign-on-authentication), you will still be required to use that method to access your Vault after password reset.

### Encryption

{% callout info %}
**2021-06-01:** The release of Admin Password Reset introduces a new RSA public/private key pair for Enterprise Organizations. New Organizations will automatically have this key pair generated on creation, while existing Organizations `.....`.
{% endcallout %}

When a member of the Organization enrolls in Admin Password Reset, that user's master key is encrypted with the Organization's public key and stored once encrypted. When a password reset action is taken, the user's master key is decrypted with the Organization's private key so that that Master Password can be overwritten.

**At no point** will anyone, including the Admin or Owner who executes the reset, be able to see the old Master Password.

### Permissions

Admin Password Reset can be executed by [Owners, Admins, and permitted Custom users]({{site.baseurl}}/article/user-types-access-control/). Admin Password Reset uses a hierarchal permission structure to determine who can reset whose Master Password, meaning:
- Any Owner, Admin, or permitted Custom user can reset a **User**, **Manager**, or **Custom User**'s Master Password.
- Only an Admin or Owner can reset an **Admin**'s Master Password.
- Only an Owner can reset an **Owner**'s Master Password.

### Event Logging

[Events]({{site.baseurl}}/article/event-logs/) are logged when:
- A Master Password is reset.
- A user enrolls in Admin Password Reset.
- A user withdraws from Admin Password Reset.

## Activate Admin Password Reset

To activate Master Password Reset for your Enterprise Organization, navigate to the [Business Portal]({{site.baseurl}}/article/about-business-portal/) and enable the [Master Password Reset Policy]({{site.baseurl}}/article/policies/#master-password-reset). Users will need to [self-enroll](#self-enroll-in-password-reset) or [be auto-enrolled](automatic-enrollment) in Password Reset before their Master Password can be reset.

### Automatic Enrollment

Enabling the Automatic Enrollment policy option will automatically enroll new users in Admin Password Reset when their [invitation to the Organization is accepted]({{site.baseurl}}/article/managing-users/#accept). Users already in the Organization will not be retroactively enrolled in Admin Password Reset, and will be required to [self-enroll](#enroll-in-password-reset).

{% callout success %}
If you're automatically enrolling Organization members in Admin Password Reset, we **highly recommend notifying them of this feature**. Many Bitwarden Organization users store personal credentials in their Personal Vault, and should be made aware that
{% endcallout %}

### Self-enroll in Password Reset

To enroll in Password Reset, navigate to **Settings** &rarr; **Organizations** in the [Web Vault](https://vault.bitwarden.com/){:target="\_blank"}:

{% image /organizations/pwreset-enroll.png Enroll in Password Reset %}

Hover over the Organization you wish to enroll in Password Reset for, select the {% icon fa-cog %} gear dropdown, and choose **Enroll in Password Reset**. When you're enrolled in Password Reset, the Organization listing will display a {% icon fa-key %} key icon. `Something something about being enrolled in multiple orgs.`

### Withdraw Enrollment

Once enrolled, you can **Withdraw** from Password Reset from the same dropdown used to enroll:

{% image /organizations/pwreset-withdraw.png Withdraw from Password Reset %}

Manually changing your Master Password or Rotating your Encryption Key `anything else to mention?` **will not** withdraw you from Admin Password Reset.

## Reset a Master Password

{% callout info %}
You must be a [Owner, Admin, or permitted Custom user](#permissions) to reset a password.
{% endcallout %}

To reset a Master Password for a member of your Enterprise Organization:

1. In your [Web Vault](https://vault.bitwarden.com){:target="\_blank"}, open your Organization.
2. Open the **Manage** tab and navigate to the **People** section.
3. Hover over the user whose Master Password you want to reset, select the {% icon fa-cog %} gear dropdown, and choose {% icon fa-key %} **Reset Password**:

   {% image /organizations/pwreset-reset.png Reset Password %}

4. On the Reset Password window, create a **New Password** for the user. If your Organization has enabled the [Master Password Policy]({{site.baseurl}}/article/policies/#master-password), you will need to create a password that meets the implemented requirements (e.g. min 8 characters, contains numbers):

   {% image /organizations/pwreset-newpw.png Create a New Password %}

   Select **Save** to execute the Password Reset. Doing so will log the user out of their current sessions.  Active sessions on some client applications, like Mobile Apps, may remain active for up to one hour.

### After a Password Reset

When your Master Password is reset, you will receive an email from Bitwarden to inform you of this. On receiving this email, contact your Organization administrator to obtain your new Master Password through a secure channel, like [Bitwarden Send]({{site.baseurl}}/article/create-send/).

Once you have regained access to your Vault using the new Master Password, you should  
