---
layout: article
title: Set up two-step login with Duo Security
categories: [Getting Started, Account Management]
featured: false
popular: true
tags: [two-step login, 2fa, two factor authentication, account, duo, sms]
---

bitwarden has partnered with Duo Security to bring two-factor authentication to bitwarden logins, complete with [inline self-service enrollment](https://guide.duo.com/enrollment){:target="_blank"} and [authentication prompt](https://guide.duo.com/prompt){:target="_blank"} (offering SMS, phone call, U2F security keys, and push notifications with the Duo Mobile app).

## Overview

This article takes you through configuring your bitwarden Premium account to use Duo two-factor authentication services via [Duo Push](https://duo.com/product/trusted-users/two-factor-authentication/duo-mobile){:target="_blank"}. You'll sign up for a Duo account, configure bitwarden to use your new Duo account, and enroll your bitwarden account and your device for use with Duo's service.

Once you complete this process, Duo Security's two-factor authentication platform protects access to your bitwarden data by requiring two-step approval when logging in to your bitwarden vault.

## Create a Duo Security Account

A Duo account is required to use this feature. A Duo account account for up to 10 users can be created for free.

1. If you do not already have one, sign up for a new Duo account at <https://signup.duo.com/>
2. Log in to the Duo Admin panel with your Duo account at <https://admin.duosecurity.com/login>
3. In the left menu, navigate to **Applications**, then click the **Protect an Application** button.
4. Find the **Web SDK** application and click the **Protect this Application** button.
5. Note the **Integration Key**, **Secret Key**, and **API Hostname** details. We will need to reference these later when configuring bitwarden.
   {% image two-step/duo/application-details.png %}

## Get the Duo Mobile App

It is recommended to install the free [Duo Mobile](https://duo.com/product/trusted-users/two-factor-authentication/duo-mobile){:target="_blank"} app if you want to take advantage of quickly logging in with push notifications. This is optional, however, since Duo also supports SMS, phone calls, and U2F security keys.

- iOS: [Download on the App Store](https://itunes.apple.com/us/app/duo-mobile/id422663827?mt=8){:target="_blank"}
- Android: [Download on Google Play](https://play.google.com/store/apps/details?id=com.duosecurity.duomobile){:target="_blank"}

## Enable Two-step Login with Duo

{% warning %}
Two-step login can permanently lock you out of your account. It is very important that you write down and keep your two-step login **recovery code** in a safe place in the event that you lose access to your normal two-step login methods.
{% endwarning %}

1. Log in to the web vault at <https://vault.bitwarden.com>.
2. Click **Settings** on the sidebar. Click **Two-step Login** in the sub-menu that opens under **Settings**.  
4. Select the **Duo** option and then type in your master password to continue.
5. Enter the configuration information provided from the Duo Admin **Web SDK** application that was set up earlier: **Integration Key**, **Secret Key**, and **API Hostname**.
6. Click **Save** to enable Duo.
7. Click the **Close** button and confirm that the Duo option now shows as **Enabled**.

## Log In, Enroll, and Test

1. Log out of the bitwarden web vault.
2. Log back into the bitwarden web vault. You should now be prompted with a Duo two-step login option.
3. Upon your first login using Duo you may be prompted to enroll your bitwarden account and device(s) with Duo. Complete the Duo enrollment process following the on-screen instructions.
4. Log out of and back in to any other bitwarden applications that you are using to confirm that Duo is properly working. You will eventually be logged out automatically.
