---
layout: article
title: Enterprise Policies
categories: [organizations]
featured: true
popular: false
hidden: false
tags: [organizations, policies, access control, enterprise]
---
## Table of contents

- [What are Organizations?](#what-are-organizations)
- [What are Enterprise Policies?](#what-are-enterprise-policies)
- [Available Policies](#available-policies)
  * [Two-Step Login](#two-step-login)
    + [Setting the Policy](#setting-the-policy)
  * [Password Generator](#password-generator)
    + [Generator Options](#generator-options)
    + [Setting the Policy](#setting-the-policy-1)
  * [Master Password](#master-password)
    + [Setting the Policy](#setting-the-policy-2)
  * [Only Organization](#only-organization)
  * [Single Sign-On Authentication](#single-sign-on-authentication)

## What are Organizations?

A Bitwarden organization is an entity that relates users together that want to share items. An organization could be a family, team, company, or any other type of group that desires to share items in Bitwarden.

An individual user account can create and/or belong to many different organizations, allowing you to manage your items from a single account.

You can create a new Bitwarden organization from the web vault or request that an admin of an existing organization send you an invite.

## What are Enterprise Policies?

Bitwarden client applications have many settings for users to customize their environments. When users are members of an Enterprise Organization such as a company, the Company may want all users to maintain certain settings such as two-factor authentication and password parameters.

Enterprise Policies allow owners or administrators of an organization to set and enforce parameters for all members of their organization.

## Available Policies

Bitwarden currently supports the following Organization Policies
- Two-step Login
- Password Generator
- Master Password
- Only Organization

{% image policies/policies-enable.png %}

{%note%}
For Bitwarden server versions 1.37+ you will use the business portal to configure policies.
{%endnote%}

{% image policies/policies-business-portal.png Enter the business portal to manage policies %}

{% image policies/policies-menu-business-portal.png Choose Policies to enable and configure enterprise policies %}

## Two-Step Login

When this policy is set, members will need to have two-step login configured on their user account in order to join the organization.

{% image policies/policies-two-step.png %}

### Setting the Policy

Ideally, this policy is set before any users are invited to join an organization. The following events will occur when an Organization enabled the two-step policy for the first time:

- The administrator will receive a warning that Organization members, in confirmed status, who don’t have two-step for their account will be removed from the organization and will receive an email notifying them about the change.
- If the administrator proceeds to enable the two-step login policy Confirmed members of the organization who do not have two-step login enabled will lose access to the organization.
- Members who lose access to an organization will receive an email informing them of such.
 - Once the user enables two-step login on their account they can then be re-join to the organization through a new invite.
 - Newly invited members will not be able to accept their invitation to the organization until they enabled two-step login on their user account.
- If a newly invited member currently has a Bitwarden account using the invited email address, they will be notified and must enable two-step login before accepting their invitation.
 - If a newly invited member does not have an account, they will default to using email-based two-step login but will be able to change this configuration at any time.
- If a member of the organization later disables two-step login on their account, they will be removed from the organization.

## Password Generator

When this policy is set, administrators can choose and permanently set the parameters within the Bitwarden Password Generator.

The Bitwarden Password Generator offers options for password and passphrase generation.

### Generator Options

**Default type**
- User defined
- Password
- Passphrase

**Password options:**
- Length
- Minimum Numbers
- Minimum Special
- Uppercase letters
- Lowercase letters
- Numbers
- Symbols/Special

**Passphrase Options:**
- Minimum number of words
- Capitalization
- Include Number

{% image policies/policies-password-generator.png %}

### Setting the Policy

Ideally, this policy is set before any users are invited to join an organization.

If the policy is set after users have joined the organization, prior generated passwords that may be outside the enforced parameters of the policy will remain in place. Any new passwords using the Password Generator will conform with the policy.

If the user is affected by the policy, we will show a banner on the Bitwarden Password Generator informing them as such.

## Master Password

When this policy is set, organization administrators can choose and permanently set the complexity required for a user’s Master Password. Password complexity is calculated using the [zxcvbn](https://github.com/dropbox/zxcvbn) library on a scale from 0 to 4, with 4 being the most complex.

{% image policies/policies-master-password.png %}

### Setting the Policy

Ideally, this policy is set before any users are invited to join an organization.

If users have already joined an organization or already have a Bitwarden account, their master password - regardless of complexity - will remain in place unless it is changed, at which point it will need to conform with the policy.

### Single Organization

When this policy is set, administrators can restrict members of their organization from being part of other organizations.

{%note%}
When this policy is enabled, organization members who are already a part of another organization will be removed from this organization. They will be notifed about the change via email.
{%endnote%}

## Setting the Policy

## Single Sign-On Authentication

When this policy is activated, administrators can require users to log in with the Enterprise Single Sign-On method.

{%note%}
The Single Organization policy must be enabled before activating this Policy.
{%endnote%}
## Setting the Policy
