---
layout: article
title: Two-step Login via Duo
categories: [two-step-login]
featured: false
popular: false
tags: [two-step login, 2fa, two factor authentication, account, duo, sms]
order: 05
---

Two-step Login using Duo is available for Premium users, including members of a Paid Organization (Families, Teams, or Enterprise).

Enabling Duo for your Organization will prompt all enrolled members to register a device for Duo Two-step Login on their next login. Users with user type **Owner** can enable Two-step Login via Duo for the Organization. For more information, see [User Types and Access Control]({% link _articles/organizations/user-types-access-control.md%}).

## Activate Bitwarden in Duo

In order to use Two-step Login to access Bitwarden using Duo, you'll need a Duo account. [Sign up for free](https://signup.duo.com/){:target="_blank"}, or log in to your existing [Duo Admin Panel](https://admin.duosecurity.com/login){:target="_blank"}, and complete the following steps:

1. In the left menu, navigate to **Applications**.
2. Select the **Protect an Application** button.
3. Find or search for **Bitwarden** in the Applications list, and select the **Protect** button. You will be redirected to a Bitwarden Application screen:

    {% image two-step/duo/duoportal.png %}

Take note of the **Integration Key**, **Secret Key**, and **API Hostname**. You will need to reference these values when you [Setup Two-step Login from your Web Vault](#setup-two-step-login).

## Setup Duo

Complete the following steps to enable Two-step Login via Duo:

{% callout warning %}
**Losing access to your Duo-enabled device can permanently lock you out of your Vault,** unless you write down and keep your Two-step Login Recovery Code in a safe place.

[Get your Recovery Code]({% link _articles/two-step-login/lost-two-step-device.md %}) from the **Two-step Login** screen before enabling any method.
{% endcallout %}

1. Log in to your [Web Vault](https://vault.bitwarden.com){:target="\_blank"}.
2. If you're an Individual User, select **Settings** from the top navigation bar.

   If you're an Organization Owner, open your Organization and select the **Settings** tab.
3. Select **Two-step Login** from the left-side menu.
4. Locate the **Duo**  or **Duo (Organization)** option and select the **Manage** option.

   {% image two-step/twostep-options-duooverlay.png %}

   You will be prompted to enter your Master Password to continue.
5. Enter the **Integration Key**, **Secret Key**, and **API Hostname** provided in your Duo Admin portal (see [Create a Duo Account](#create-a-duo-account)).
6. Select the **Enable** button. A green `Enabled` message will indicate that Two-step Login via Duo has been enabled.
7. Select the **Close** button and confirm that the **Duo** option is now enabled, as indicated by a green checkmark ( {% icon fa-check %} ).

{% callout info %}
When you setup Two-step Login, you should logout of all your Bitwarden apps to immediately activate Two-step Login for each app. You will eventually be logged out automatically.
{% endcallout %}

### Register a Device

In a new tab, navigate to the [Web Vault](https://vault.bitwarde.com){:target="\_blank}. If Duo is your highest-priority Two-step Login method, you will be prompted by a Duo setup screen. Organization members will be prompted by this screen on their next login.

{% image two-step/duo/enroll1.png Duo Setup Screen %}

Follow the on-screen prompts to finish configuring Two-step Login via Duo (for example, *type of device to register* and *send SMS or send push notification*). If you haven't already downloaded the [Duo Mobile App](#get-the-duo-mobile-app), you will be prompted to do so.

### Get the Duo Mobile App

To take advantage of quick Two-step Login with Duo Push, download the Duo Mobile app for free. You can alternatively use Duo for SMS, phone call, or U2F security key verification.

- [Download for iOS](https://itunes.apple.com/us/app/duo-mobile/id422663827?mt=8){:target="_blank"}
- [Download for Android](https://play.google.com/store/apps/details?id=com.duosecurity.duomobile){:target="_blank"}

## Use Duo

The following assumes that **Duo** is your [highest-priority enabled method](https://bitwarden.com/help/article/setup-two-step-login/#using-multiple-methods). Complete the following steps to access your Vault using Two-step Login:

1. Login to your Bitwarden Vault on any app and enter your Email Address and Master Password.

   A Duo screen will appear to begin your Two-step Login verification.

3. Depending on how you've configured Duo, complete the authentication request by:
   - Approving the **Duo Push** request from your registered device.
   - Finding the 6 digit verification code in your **Duo Mobile** app or **SMS** messages, and enter the code on the Vault login screen.

You will not be required to complete your secondary Two-step Login step to **Unlock** your Vault once timed-out. For help configuring Log Out vs. Lock behavior, see [Vault Timeout Options]({% link _articles/account/vault-timeout.md %}).
