---
layout: article
title: Two-step Login via Duo
categories: [two-step-login]
featured: false
popular: false
tags: [two-step login, 2fa, two factor authentication, account, duo, sms]
order: 05
---

Two-step Login using Duo is unique among Bitwarden's [available Two-step Login methods]({% link _articles/two-step-login/setup-two-step-login.md %}) in that it can be enabled for a Personal Vault (like the other methods) or **enabled for an entire Organization** by [Teams and Enterprise Organizations]({% link _articles/organizations/about-organizations.md %}).

Enabling Duo for an Organization will prompt all enrolled members to register a device for Duo Two-step Login on their next login.

[Configuring Duo](#activate-bitwarden-in-duo) in the Admin Panel and [registering a device](#register-a-device) will follow the same procedure in either case, but the interstitial [setup procedure](#setup-duo) varies slightly depending on whether you're setting up Duo for yourself or for an Organization.

## Configure Duo

You'll need a Duo account in order to obtain some information required by Bitwarden to complete setup. [Sign up for free](https://signup.duo.com/){:target="_blank"}, or log in to your existing [Duo Admin Panel](https://admin.duosecurity.com/login){:target="_blank"}. To configure Duo:

1. In the left menu, navigate to **Applications**.
2. Select the **Protect an Application** button.
3. Find or search for **Bitwarden** in the Applications list, and select the **Protect** button. You will be redirected to a Bitwarden Application page:

    {% image two-step/duo/duoportal.png Bitwarden Application page %}

Take note of the **Integration Key**, **Secret Key**, and **API Hostname**. You will need to reference these values when you [Setup Duo](#setup-two-step-login) within Bitwarden.

## Setup Duo

Setting up Duo in Bitwarden is slightly different depending on whether you're enabling it for your **Personal Vault** or **Organization**. Select one of the following tabs accordingly for instructions:

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="andtab" data-bs-toggle="tab" data-target="#personal" role="tab" aria-controls="personal" aria-selected="true">Personal</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="orgtab" data-bs-toggle="tab" data-target="#organization" role="tab" aria-controls="organization" aria-selected="false">Organization</a>
  </li>
</ul>

<div class="tab-content" id="clientsContent">
  <div class="tab-pane show active" id="personal" role="tabpanel" aria-labelledby="pertab">
{% capture and_gs %}

#### Setup for your Personal Vault

{% callout warning %}
**Losing access to your Duo-enabled device can permanently lock you out of your Vault,** unless you write down and keep your Two-step Login Recovery Code in a safe place or have an alternate Two-step Login method enabled and available.

[Get your Recovery Code]({% link _articles/two-step-login/two-step-recovery-code.md %}) from the **Two-step Login** screen immediately after completeting the following steps.
{% endcallout %}

To enable Two-step Login using Duo for your Personal Vault:

1. Log in to your [Web Vault](https://vault.bitwarden.com){:target="\_blank"}.
2. Select **Settings** from the top navigation bar.

   {% image two-step/wv-settingstab.png Select Settings %}
3. Select **Two-step Login** from the left-side Settings menu.
4. Locate the **Duo** option and select the **Manage** button.

   {% image two-step/twostep-options-duooverlay.png Select the Manage button %}

   You will be prompted to enter your Master Password to continue.
5. Enter the **Integration Key**, **Secret Key**, and **API Hostname** [retrieved from your Duo Admin Portal](#configure-duo).
6. Select the **Enable** button.

A green `Enabled` message should appear to indicate that Duo has been enabled for your Vault. You can double-check by selecting the **Close** button and seeing that the **Duo** option has a green checkmark ( {% icon fa-check %} ) on it.

Once enabled, make sure you get your [Recovery Code]({% link _articles/two-step-login/two-step-recovery-code.md %}). You should also log out of all Bitwarden client apps (mobile, browser extension, etc.) to immediately trigger the Two-step Login requirement. If you don't, you will be automatically logged out of these apps eventually.

{% endcapture %}
{{ and_gs | markdownify }}
  </div>
  <div class="tab-pane" id="organization" role="tabpanel" aria-labelledby="orgtab">
{% capture ios_gs %}

#### Setup for your Organization

{% callout warning %}
**Organizations Only:** Once you initially [Configure](#configure-duo) and [Setup](#setup-duo) Duo, it is **critically important** that you disable it for the Organization before making any further application configuration changes from the Duo Admin Panel. To make configuration changes; disable Duo in Bitwarden, make the required changes in the Duo Admin Panel, and re-enable Duo in Bitwarden.

This is because Duo for Organizations does not currently support [Recovery Codes]({% link _articles/two-step-login/two-step-recovery-code.md %}), instead you will need to rely on the Duo Admin panel to bypass Two-step Login for members who lose access to Duo. Altering the application configuration from the Duo Admin Panel while Duo is active risks losing the ability to bypass Two-step Login for you or your Organization's members.
{% endcallout %}

You must be an [Organization Owner]({% link _articles/organizations/user-types-access-control.md%}) to setup Duo for your Organization. To enable Two-step Login using Duo for your Organization:

1. Log in to your [Web Vault](https://vault.bitwarden.com){:target="\_blank"}.
2. Open your Organization and select **Settings** from the Organization navigation.

   {% image two-step/wv-orgsettingstab.png Select Settings %}
3. Select **Two-step Login** from the left-side Settings menu.
4. Locate the **Duo (Organization)** option and select the **Manage** button.

   {% image two-step/duo/enable-org.png Select Manage %}

   You will be prompted to enter your Master Password to continue.
5. Enter the **Integration Key**, **Secret Key**, and **API Hostname** [retrieved from your Duo Admin Portal](#configure-duo).
6. Select the **Enable** button.

A green `Enabled` message should appear to indicate that Duo has been enabled for your Vault. You can double-check by selecting the **Close** button and seeing that the **Duo** option has a green checkmark ( {% icon fa-check %} ) on it.

{% endcapture %}
{{ ios_gs | markdownify }}
  </div>
</div>

### Register a Device

Once [Duo is setup](#setup-duo), navigate to the [Web Vault](https://vault.bitwarden.com){:target="\_blank"} in a new tab. If Duo is your highest-priority Two-step Login method, you will be prompted by a Duo setup screen.

{% image two-step/duo/enroll1.png Duo Setup Screen %}

Follow the on-screen prompts to configure a Secondary Device to use Duo (for example, *type of device to register* and *send SMS or send push notification*). If you haven't already downloaded the [Duo Mobile App](#get-the-duo-mobile-app), it's recommended that you do so:

- [Download for iOS](https://itunes.apple.com/us/app/duo-mobile/id422663827?mt=8){:target="_blank"}
- [Download for Android](https://play.google.com/store/apps/details?id=com.duosecurity.duomobile){:target="_blank"}

## Use Duo

The following assumes that **Duo** is your [highest-priority enabled method](https://bitwarden.com/help/article/setup-two-step-login/#using-multiple-methods). Complete the following steps to access your Vault using Two-step Login:

1. Login to your Bitwarden Vault on any app and enter your Email Address and Master Password.

   A Duo screen will appear to begin your Two-step Login verification.

3. Depending on how you've configured Duo, complete the authentication request by:
   - Approving the **Duo Push** request from your registered device.
   - Finding the 6 digit verification code in your **Duo Mobile** app or **SMS** messages, and enter the code on the Vault login screen.

   {% callout success %}Check the **Remember Me** box to remember your device for 30 days. Remembering your device will mean you won't be required to complete your Two-step Login step.{% endcallout %}

You will not be required to complete your secondary Two-step Login step to **Unlock** your Vault once logged in. For help configuring Log Out vs. Lock behavior, see [Vault Timeout Options]({% link _articles/account/vault-timeout.md %}).
