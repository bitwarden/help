---
layout: article
title: Emergency Access
categories: [security]
featured: true
popular: false
hidden: false
tags: []
order: "08"
description: "The emergency access feature of the Bitwarden password manager enables you to designate trusted emergency contacts to access your Vault in an emergency."
---

Emergency Access enables users to designate and manage trusted emergency contacts, who may request access to their Vault with a configurable level of permissions.

{% callout info %}
Only Premium users, including members of paid Organizations (Families, Teams, or Enterprise) can designate trusted emergency contacts, however anyone with a Bitwarden account *can be designated as* a trusted emergency contact.

**If your premium features are cancelled or lapses due to failed payment method**, your trusted emergency contacts will still be able to request and obtain access to your Vault. You will, however, not be able to add new or edit existing trusted emergency contacts.
{% endcallout %}

## How it Works

Emergency Access uses public key exchange and encryption/decryption to allow users to give a [trusted emergency contact](#trusted-emergency-contacts) permission to [access Vault data](#user-access) in a zero knowledge environment:

1. A Bitwarden user (the *grantor*) [invites another Bitwarden user](#setup-emergency-access) to become a trusted emergency contact (the *grantee*). The invitation (valid for only 5 days) specifies a [user access level](#user-access) and includes a request for the grantee's public key.
2. Grantee is notified of invitation via email and [accepts the invitation](#setup-emergency-access) to become a trusted emergency contact. On acceptance, the grantee's public key is stored with the invite.
3. Grantor is notified of acceptance via email and [confirms the grantee](#setup-emergency-access) as their trusted emergency contact. On confirmation, the grantor's Master Key is encrypted using the grantee's public key and stored once encrypted. Grantee is notified of confirmation.
4. An emergency occurs, resulting in grantee requiring access to grantor's Vault. Grantee [submits a request for emergency access](#use-emergency-access).
5. Grantor is notified of request via email. The grantor may [manually approve the request](#use-emergency-access) at any time, otherwise the request is bound by a grantor-specified wait time. When the request is approved or the wait time lapses, the public-key-encrypted Master Key is delivered to grantee for decryption with grantee's private key.

4. Depending on the specified [user access level](#user-access), the grantee will either:

   - Obtain view/read access to items in the grantor's Vault (**View**).
   - Be prompted to create a new Master Password for the grantor's Vault (**Takeover**).

### Trusted Emergency Contacts

Trusted emergency contacts must be existing Bitwarden users, or will be prompted to create a Bitwarden account before they can accept an invitation. Trusted emergency contacts do not need to have Premium to be designated as such.

A user's status as a trusted emergency contact is tied to a unique Bitwarden account ID, meaning that if a trusted emergency contact [changes their email address]({{site.baseurl}}/article/product-faqs/) there is no reconfiguration required to maintain their emergency access. If a trusted emergency contact creates a **new Bitwarden account** and [deletes]({{site.baseurl}}/article/delete-your-account/) the old account, they will automatically be removed as a trusted emergency contact and must be [re-invited](#setup-emergency-access).

There is no limit to the number of trusted emergency contacts a user can have.

{% callout success %}
You can [reject](#use-emergency-access) an emergency access request by your trusted emergency contact at any time before the configured wait time lapses.
{% endcallout %}

### User Access

Trusted emergency contacts can be granted one of the following user access levels:

- **View**: When an emergency access request is granted, this user is granted view/read access to all items in your personal Vault, including passwords of Login items.

   {% callout success %}You may [revoke access](#use-emergency-access) to a trusted emergency contact with **View** access at any time.{% endcallout %}

- **Takeover**: When an emergency access request is granted, this user can create a Master Password for permanent read/write access to your Vault (this will **replace** your previous Master Password). Takeover disables any [Two-step Login Methods]({{site.baseurl}}/article/setup-two-step-login/) enabled for the account.

**If you are a member of an Organization**, you will be automatically removed from any Organization(s) for which they are not an [Owner]({{site.baseurl}}/article/user-types-access-control/) on takeover. Owners will not be removed from or lose permissions to their Organization(s), however a [Master Password Policy]({{site.baseurl}}/article/policies/#master-password) will be enforced on takeover if enabled. Policies that are not usually enforced on Owners (e.g. [Two-step Login]({{site.baseurl}}/article/policies/#two-step-login)) will not be enforced on takeover.

## Setup Emergency Access

The following sections will walk you setting up Emergency Access, separated by whether you want to **Give Access** to your Vault or **Receive Access** to another user's Vault:

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" id="tab" role="presentation">
    <a class="nav-link active" id="givetab" data-bs-toggle="tab" data-target="#give" role="tab" aria-controls="give" aria-selected="true">Give Access</a>
  </li>
  <li class="nav-item" id="tab" role="presentation">
    <a class="nav-link" id="receivetab" data-bs-toggle="tab" data-target="#receive" role="tab" aria-controls="receive" aria-selected="false">Receive Access</a>
  </li>
</ul>

<div class="tab-content" id="clientsContent">
  <div class="tab-pane show active" id="give" role="tabpanel" aria-labelledby="givetab">
{% capture give_content %}
### Invite a Trusted Emergency Contact

Complete the following steps to invite a trusted emergency contact for your Vault:

1. Log in to the [Web Vault]({{site.baseurl}}/article/getting-started-webvault).
2. Select **Settings** from the top navigation bar.
3. Select **Emergency Access** from the left-hand Settings menu.
4. Select the {% icon fa-plus %} **Add emergency contact** button. In the Invite Emergency Contact window:

   {% image features/emergency-access/ea-invite.png Add emergency contact%}
   - Enter the **Email** of your trusted emergency contact. Trusted emergency contacts must have Bitwarden accounts of their own, but don't need to have Premium.
   - Set a **User Access** level for the trusted emergency contact ([View-only or Takeover](#user-access)).
   - Set a **Wait Time** for Vault access. Wait Time dictates how long your trusted emergency contact must wait to access your Vault after initiating an emergency access request.
5. Select the **Save** button to send the invitation. Your trusted emergency contact must now accept the invitation (see **Receive Access** tab).

{% callout info %}
Invitations to become a trusted emergency contact are only valid for 5 days.
{% endcallout %}

### Confirm an Accepted Invitation

Once your trusted emergency contact has accepted the invitation, complete the following steps to confirm:

1. Log in to the [Web Vault]({{site.baseurl}}/article/getting-started-webvault).
2. Select **Settings** from the top navigation bar.
3. Select **Emergency Access** from the left-hand Settings menu.

   In the **Trusted emergency contacts** section, the invited user should appear with an `Accepted` status card.
4. Hovering over the user, select the gear icon and select **Confirm** from the dropdown menu.

   {% image features/emergency-access/ea-confirm.png %}

To ensure the integrity of your encryption keys, verify the displayed fingerprint phrase with the grantee before completing confirmation.

{% endcapture %}
{{ give_content | markdownify }}
  </div>
  <div class="tab-pane" id="receive" role="tabpanel" aria-labelledby="receivetab">
{% capture receive_content %}
### Accept an Invitation

Complete the following steps to accept an invitation to become a trusted emergency contact:

1. In the received email invitation, select the **Become emergency contact** button in the email to open an Emergency Access acceptance page in your Browser:

   {% image features/emergency-access/ea-invitation.png Emergency access invitation %}
2. Log in to your Bitwarden account to accept the invitation. If you don't already have a Bitwarden account, you'll need to create one.

Once you've accepted the invitation, the inviting user must confirm your acceptance before you can [initiate access requests](#use-emergency-access) (see **Give Access** tab).
{% endcapture %}
{{ receive_content | markdownify }}
  </div>
</div>

## Use Emergency Access

Once [setup](#setup-emergency-access), the following sections will help you **Initiate Access** as a trusted emergency contact or **Manage Access** as someone who has designated a trusted emergency contact:

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" id="tab" role="presentation">
    <a class="nav-link active" id="inittab" data-bs-toggle="tab" data-target="#init" role="tab" aria-controls="init" aria-selected="true">Initiate Access</a>
  </li>
  <li class="nav-item" id="tab" role="presentation">
    <a class="nav-link" id="managetab" data-bs-toggle="tab" data-target="#manage" role="tab" aria-controls="manage" aria-selected="false">Manage Access</a>
  </li>
</ul>

<div class="tab-content" id="clientsContent">
  <div class="tab-pane show active" id="init" role="tabpanel" aria-labelledby="inittab">
{% capture init_content %}
## Initiate Emergency Access

Complete the following steps to initiate an emergency access request:

1. Log in to the [Web Vault]({{site.baseurl}}/article/getting-started-webvault).
2. Select **Settings** from the top navigation bar.
3. Select **Emergency Access** from the left-hand Settings menu.
4. In the **Designated as emergency contact** section, select the grantor whose Vault you wish to access.
5. In the Request Access window, select the **Request Access** button.

   {% image features/emergency-access/ea-request.png Request Access%}

You will be provided access to the grantor's Vault after the configured Wait Time, or when the grantor manually approves (see **Manage Access** tab) the emergency access request.

### Access the Vault

Complete the following steps to access the a Vault once your request has been approved:

1. Log in to the [Web Vault]({{site.baseurl}}/article/getting-started-webvault).
2. Select **Settings** from the top navigation bar.
3. Select **Emergency Access** from the left-hand Settings menu.
4. In the **Designated as emergency contact** section, hover over the grantor the grantor whose Vault you wish to access, and select the gear icon.
5. Select the option from the dropdown that corresponds with your [assigned access](#user-access):

   - **View** - Selecting this option will display the grantor's Vault items on this screen.
   - **Takeover** - Selecting this option will open the Takeover dialog box. Enter and confirm a new master password for the grantor's account. Once saved, log in to Bitwarden as normal, entering the the grantor's email address and the created Master Password.

{% endcapture %}
{{ init_content | markdownify }}
  </div>
  <div class="tab-pane" id="manage" role="tabpanel" aria-labelledby="managetab">
{% capture manage_content %}

### Approve or Reject Emergency Access

You can manually approve or reject an emergency access request before the configured wait time lapses. Complete the following steps to approve or reject emergency access:

1. Log in to the [Web Vault]({{site.baseurl}}/article/getting-started-webvault).
2. Select **Settings** from the top navigation bar.
3. Select **Emergency Access** from the left-hand Settings menu.
4. Hovering over the user with the `Emergency Access Initiated` status card, select the gear icon.
5. From the gear dropdown, select **Approve** or **Reject**.

### Revoking Access

The steps to take to regain exclusive access to your Vault after using Emergency Access depend on which [access level](#user-access) was granted:

#### Revoke View Access

Trusted emergency contacts who are given **View** access will be able to view your Vault items once they are approved and until their access is manually revoked. To manually revoke access, use the {% icon fa-cog %} **gear** dropdown to {% icon fa-times %} **Reject** access:

{% image features/emergency-access/ea-revoke.png Revoke Emergency Access %}

#### Revoke a Takeover

Trusted emergency contacts who are given **Takeover** access will, once used, have created a new Master Password for your account. As a result, the only way to revoke access involves:

1. Obtaining the new Master Password they created for your account and using it to log in the [Web Vault]({{site.baseurl}}/article/getting-started-webvault).
2. [Changing your Master Password]({{site.baseurl}}/article/master-password/#change-your-master-password) to one that they do not know.


{% endcapture %}
{{ manage_content | markdownify }}
  </div>
</div>
