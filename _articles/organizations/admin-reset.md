---
layout: article
title: Master Password Reset
categories: [organizations]
featured: true
popular: false
tags: [master password, reset, administrator, owner]
order: 15
---

{% callout info %}
Password Reset is available for **Enterprise Organizations** on a current plan. Like Login with SSO, Password Reset is not available to [Classic 2019 Enterprise Organizations]({{site.baseurl}}/article/2020-plan-updates).
{% endcallout %}

Master Password Reset allows Organization [Admins and Owners]({{site.baseurl}}/article/user-types-access-control/) to reset the Master Password of a member of their Organization who is enrolled in Password Reset. Master Password Reset requires enrollment by users (either self-enrollment or auto-enrollment [through a policy](#automatic-enrollment)) to facilitate key exchange between user and Organization.

Once enrolled, an Admin or Owner can reset that user's Master Password [from the Organization's People screen](#reset-a-password) by creating a new Master Password to take its place. **At no point will anyone, including the Admin or Owner who executes the reset, be able to see the old Master Password.**

## How it Works

1. A member of an Enterprise Organization enrolls, or is automatically enrolled [by the enabled policy](#master-password-reset-policy), in Password Reset. On enrollment, the user's master key
2. The member forgets their Master Password, and is unable to access their Bitwarden Vault. The member contacts an Organization Administrator to request Master Password Reset.
3. An Organization Admin or Owner [resets the Master Password](#reset-a-password) by creating a new one to take its place. 

{% callout info %}
When an enrolled user rotates their encryption key,
{% endcallout %}

## Activate Password Reset

To activate Master Password Reset for your Enterprise Organization, navigate to the [Business Portal]({{site.baseurl}}/article/about-business-portal/) and enable the [Master Password Reset Policy]({{site.baseurl}}/article/policies/#master-password-reset). Users will need to self-enroll or [be auto-enrolled](automatic-enrollment) in Password Reset before an Owner or Admin can reset their Master Password.

### Automatic Enrollment

Enabling the Automatic Enrollment option will automatically enroll new users in Password Reset when their [invitation to the Organization is accepted]({{site.baseurl}}/article/managing-users/#accept).

{% callout info %}
Users already in the Organization will not be retroactively enrolled in Password Reset, and will be required to [self-enroll](#enroll-in-password-reset).
{% endcallout %}

### Self-enroll in Password Reset

To enroll in Password Reset, navigate to **Settings** &rarr; **Organizations** in the [Web Vault](https://vault.bitwarden.com/){:target="\_blank"}:

{% image /organizations/pwreset-enroll.png Enroll in Password Reset %}

Hover over the Organization you wish to enroll in Password Reset for, select the {% icon fa-cog %} gear dropdown, and choose **Enroll in Password Reset**. When you're enrolled in Password Reset, the Organization listing will display a {% icon fa-key %} key icon.

{% callout warning %}
a lil' ditty about being enrolled in multiple Organizations!
{% endcallout %}

## Reset a Password

To reset a Master Password for a member of your Enterprise Organization:

1. In your [Web Vault](https://vault.bitwarden.com){:target="\_blank"}, open your Organization.
2. Open the **Manage** tab and navigate to the **People** section.
3. Hover over the user whose Master Password you want to reset, select the {% icon fa-cog %} gear dropdown, and choose {% icon fa-key %} **Reset Password**:

   {% image /organizations/pwreset-reset.png Reset Password %}

4. On the Reset Password window, create a **New Password** for the user. If your Organization has enabled the [Master Password Policy]({{site.baseurl}}/article/policies/#master-password), you will be required to create a password that meets the implemented requirements (e.g. min 8 characters, contains numbers):

   {% image /organizations/pwreset-newpw.png Create a New Password %}

   Select **Save** to execute the Password Reset. Doing so will log the user out of their current sessions.  Active sessions on some client applications, like Mobile Apps, may remain active for up to one hour.

{% callout success %}
**Shameless self-promotion**: Use Bitwarden Send to securely transmit the new Master Password to the user!
{% endcallout %}
