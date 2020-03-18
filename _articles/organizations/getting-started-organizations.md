---
layout: article
title: Getting Started with Bitwarden Organizations
categories: [organizations]
featured: false
popular: false
hidden: false
tags: [tutorial]
---

With the Bitwarden free account, and a free Organization for up to 2 users, you can experience secure sharing in no time!

- [Introduction](#introduction)
  * [What are organizations?](#what-are-organizations)
- [Set up the First and Second User Accounts](#set-up-the-first-and-second-user-accounts)
  * [1. Create an account for User 1](#1-create-an-account-for-user-1)
  * [2. Verify Your Email](#2-verify-your-email)
  * [3. Set up the Second User Account](#3-set-up-the-second-user-account)
- [Setup and Share with Organizations](#setup-and-share-with-organizations)
  * [4. Create a new Organization](#4-create-a-new-organization)
  * [5. Add the Second User to your Organization](#5-add-the-second-user-to-your-organization)
  * [6. Accepting the Invitation](#6-accepting-the-invitation)
  * [7. Sharing within an Organization](#7-sharing-within-an-organization)
- [Continuing with Bitwarden](#continuing-with-bitwarden)

## Introduction
Using a password manager makes it easy to store and access unique and secure passwords across all of your devices. This keeps your online accounts safer than repeating passwords or leaving them exposed in unencrypted formats like spreadsheets, documents, or sticky notes!

To get even more out of your password manager, you can collaborate and share with others. At work, you may choose to share common logins to office wifi networks and online services, or a shared company credit card, or a set of secure notes. Personally you may choose to share a few passwords with a significant other.

Bitwarden enables all types of password and secure sharing through Organizations. 

If you would like to try it out, Bitwarden has a free account for individuals, and the ability to set up a free Organization for up to two users and two Collections of secure information.

This tutorial walks you through the setup for two basic accounts and sharing in an Organization.

### What are organizations?
A Bitwarden organization is an entity that relates users together that want to share items. An organization could be a family, team, company, or any other type of group that desires to share items in Bitwarden.

For more, please see [What are organizations?](https://help.bitwarden.com/article/what-is-an-organization/).

**Are Organizations Different than a Premium Membership?**
Yes. Organizations are for sharing items across multiple users
Premium membership gives your individual user account additional premium features including:
- 1GB encrypted file storage
- Two-step login with YubiKey, FIDO U2F, & Duo
- Password hygiene & vault health reports
- TOTP authenticator key storage & code gen.
- Priority customer support

## Set up the First and Second User Accounts
You can choose many ways to create an account at [www.bitwarden.com](https://www.bitwarden.com) where you will find
- Desktop Apps for Windows, Mac, and Linux
- Browser Extensions for Google Chrome, Mozilla Firefox, Opera, Microsoft Edge, Safari, Vivaldi, Brave, Tor Browser
- Mobile Apps for iOS and Android
- Command Line Tools
- Web access through [https://vault.bitwarden.com](https://vault.bitwarden.com)

For the purpose of this tutorial, we’ll focus on the Web Vault.

### 1. Create an account for User 1
Create the first account by starting at [https://vault.bitwarden.com](https://vault.bitwarden.com)
Pick a strong master password and write it down in a safe place.

{% warning %}
The Bitwarden security model does not support master password recovery. You can read more in the help article [I forgot my master password](https://help.bitwarden.com/article/forgot-master-password/)
{% endwarning %}

{% image organizations/orgstart/1-create-account-user-1.png %}
**Create account for user 1**

### 2. Verify Your Email
After you create the account and log in, you will want to verify your email.

{% note %}
Reminder: You will also want to make sure your master password is written down and in a safe place where you can find it.
{% endnote %} 

{% image organizations/orgstart/2-verify-email.png %}
**Verify your email**

Once your email is verified you will be back to the main screen of the web vault.

{% image organizations/orgstart/2-email-verified.png %}
**Email verified**

As noted in the Introduction above, Organizations for sharing secure information are different than Premium membership which offers extra features on an individual account.

Premium features are not required for this tutorial, however we do recommend them to get the most out of Bitwarden.

### 3. Set up the Second User Account
Follow the same procedures to set up the second account. In our case, we will use gotest+2@bitwarden.com for that.

## Setup and Share with Organizations

### 4. Create a new Organization
Next create a new Organization via the **New Organization** button on the right of the screen.

Identify your Organization name, billing name, and plan. In this case we are choosing the free plan which supports 2 users and 2 collections of items.

{% image organizations/orgstart/4-create-organization.png %}
**Creating a new Organization**

There are additional choices for family, teams, and enterprise Organizations on this page.

After creating your Organization you will be placed into your Organization’s vault.

{% image organizations/orgstart/4-gotest-organization-vault.png %}
**View of the Organization Vault**

Be aware that you are now in the context of the Organization as shown above, in our case **GOTEST Organization**.

However you can get back to your own personal vault at any time by clicking **My Vault** at the top of the page.

Notice that we now have Collections on the left hand side which represent the logical structure of grouping items for your Organization. Here we have a **Default Collection** and one **Unassigned Collection** which is the second one allowed with the Bitwarden free Organization plan.

When we move back to our personal vault, we’ll see that we have **Folders** on the left which are for our personal items, and **Collections** for our Organization items.

{% image organizations/orgstart/4-personal-vault.png %}
**View of the Personal Vault**

### 5. Add the Second User to your Organization
Now it is time to add a second user from our Organization admin console, in our case we click back on **GOTEST Organization** and then the **Manage** tab.

{% image organizations/orgstart/5-add-user.png %}
**Adding a user**

When adding a new user to the Organization you can set the User Type and Access Control. We also have the ability to choose **all items access**, or **selected collections access** based on specific Collections, as well as read-only access. Read-only is helpful to share logins or secure information but not enable Users to change it.

{% image organizations/orgstart/5-add-user-type-and-control.png %}
**Selecting the User Type and Access Control**

Once User 2 has been invited, they will receive an email invitation to join the Organization and their status will be reflected in the dashboard.

{% image organizations/orgstart/5-user-2-invited.png %}
**Inviting User 2**

### 6. Accepting the Invitation
To ensure a trusted security relationship, **User 2** must accept the invitation, and then **User 1** must accept the **User 2** into the Organization. This sequence is imperative to ensure the highest level or security.

When **User 2** accepts the invitation they will receive a message:

> **Invitation Accepted** <br>
> You can access this organization once an administrator confirms your membership. We’ll send you an email when that happens

Back at the Organization administration console, **User 1** will see the accepted invitation, and have the ability to confirm that user.

{% image organizations/orgstart/6-confirming-users-with-accepted-invitations.png %}
**Confirming users with accepted invitations**

Keeping with the trusted security model, further confirmation on a unique fingerprint phrase is built into the exchange. For more information on this step visit [What is my account's fingerprint phrase?](https://help.bitwarden.com/article/fingerprint-phrase/)

{% image organizations/orgstart/6-confirm-fingerprint-phrase.png %}
**Confirming the fingerprint phrase**

Once the confirmation process is complete, **User 2** will have access to the Default Collection we shared earlier. Since **User 2** was only added as a User, their Organization Vault has a simplified view.

{% image organizations/orgstart/6-user-2-organization-vault-view.png %}
**User 2 Organization Vault view**

### 7. Sharing within an Organization
Sharing items in an Organization is simply a matter of creating them within the Organization Vault, or creating them in your Personal Vault and then sharing them with the Organization.

We’ll use the example of creating a Secure Note, but the same process applies to a Login or any other item in the vault.

{% image organizations/orgstart/7-add-Item-in-organization.png %}
**Adding an Item to an Organization**

{% image organizations/orgstart/7-adding-a-secure-note.png %}
**Adding a Secure Note**

{% image organizations/orgstart/7-secure-note-user-1.png %}
**Secure Note for User 1**

As expected, the same Secure Note is now viewable by User 2.

{% image organizations/orgstart/7-secure-note-user-2.png %}
**Secure Note for User 2**

Congratulations! You have now set up sharing between two users with Bitwarden Organizations!

From here you can share any item using the collaborative capabilities of Bitwarden.

If by chance you have an item in your personal vault that you wish to share, you can choose that option too. Here we have two items seen in the **User 1** Vault
- A secure note **GOTEST Secure Note** that has a sharing icon to the right of it indicating that is it being shared within a Collection
- A secure note **User 1 Note for Sharing** that is not part of Collection and only within the **User 1** vault

However, that second note can easily be shared with an Organization by clicking the drop down menu next to the item.

{% image organizations/orgstart/7-sharing-items-with-organizations.png %}
**Sharing Items with Organizations**

## Continuing with Bitwarden
Now that you have mastered the basics of Organizations feel free to explore all of the possibilities sharing logins and more!

If you’d like to dig deeper into Bitwarden please visit [www.bitwarden.com](https//www.bitwarden.com). 