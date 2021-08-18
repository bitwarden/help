---
layout: article
title: Get Started with the Web Vault
categories: [getting-started]
featured: false
popular: false
hidden: false
tags: [tutorial, getting started, web vault]
order: 02
---

**The Bitwarden Web Vault provides the richest Bitwarden experience** for personal users and Organizations. Lots of important functions, like setting up [Two-step Login]({% link _articles/two-step-login/setup-two-step-login.md %}) or administering an [Organization]({% link _articles/organizations/about-organizations.md %}), can only be done from the Web Vault.

Your Web Vault is accessible from any modern web browser by navigating to [vault.bitwarden.com](https://vault.bitwarden.com){:target=\_blank}.

{% image getting-started/webvault.png The Bitwarden Web Vault %}

When your first log in to your Web Vault, you'll land on the **My Vault** view. This space will list all your Vault items, including Logins, Cards, Identities, and Secure Notes. To learn about these different types of items, see [Vault Items]({% link _articles/account/managing-items.md %}).

## First Steps

In the above screenshot, your **My Vault** view is showing {% icon fa-th %} **All Items**. The **Filters** column on the left-hand side of the Vault can help you use **Favorites** and **Folders** to organize your Vault so that you can quickly find whatever you're looking for.

Let's start by setting up a new Folder and adding a new Login item to it:

#### Create a Folder

To create a folder:

1. Select the {% icon fa-plus %} plus icon next to the Folders section in your Filters column.
2. Enter a Name (e.g. `Social Media Logins`) for your folder and select **Save**.

   {% callout success %}For added organizational prowess, you can nest folders inside other folders. To learn how, see [Folders]({% link _articles/features/folders.md %}).{% endcallout %}

#### Add a Login

To add a new Login item:

1. Select the {% icon fa-plus %} **Add Item** button near the top-right of your Vault.
2. Make sure that **Login** is selected from the type dropdown (if you're adding a Card, Identity, or Secure Note instead, select that type).
3. Enter a **Name** for the item. Names are used to help you easily identify an item in your Vault, so give it a recognizable one (e.g. `My Twitter Login`).
4. Enter your **Username** and **Password** for the Login item. For now, enter your **existing** password, we'll help you [replace it with a stronger password](#generate-a-strong-password) later.
5. We always recommend adding something to the **URI 1** field so that you can auto-fill your Login from your [mobile app]({% link _articles/getting-started/getting-started-mobile.md %}) or [browser extension]({% link _articles/getting-started/getting-started-browserext.md %}).

   For most Login items, this should be the URL a webpage (e.g. `https://twitter.com/login`). If you don't know what URL to use, navigate to the website's login screen and copy it from your address bar.

   {% image getting-started/gs-uri.png Finding a URI %}
6. From the **Folder** dropdown menu, select the name of the Folder you want to add this item to (e.g. the `Social Media Logins` folder we created earlier).

   Select the {% icon fa-star-o %} **Favorite** icon in the bottom-right of this panel if you want to add this item to your Favorites. The icon will fill-in ({% icon fa-star-o %} &rarr; {% icon fa-star %}) when it's marked as a Favorite.
7. Nice work! Select the **Save** button to finish adding this item.

## Generate a Strong Password

Now that a new Login item is saved in your Vault, you can beef up its security by replacing the existing password with a stronger one:

1. In your Bitwarden Vault, click on the item you want to secure to view its information.
2. In a new tab or window, open the corresponding website and login to your account.

   {% callout success %}If you entered something in the **URI 1** field, click the {% icon fa-share %} **Launch** icon to open it directly from your Vault!{% endcallout %}
3. On that website, navigate to the area where you can **Change your password**.

   Typically, you can find this in a **Your Account**, **Security**, **Sign in Settings**, or **Login Settings** section.
4. Most websites will require you to enter your **Current password** first. Tab back over to your Bitwarden Vault and click the {% icon fa-copy %} **Copy** icon next to the **Password** field. Then, tab back over to the website and paste it in the **Current password** field.

   You might have the old password memorized, but it's a good idea to get in the habit of copying and pasting your password since this is primarily how you'll be logging in to websites once your password is replaced with a stronger one.
5. Tab back over to your Bitwarden Vault and click the {% icon fa-refresh %} **Generate** icon next to the **Password** field. You'll be asked whether you want to overwrite the current password, so click **Yes** to proceed.

   This will replace your **Password** value with a randomly generated strong password. Moving from a password like `Fido1234` to `X@Ln@x9J@&u@5n##B` can stop a would-be hacker in their tracks.
6. Copy your new password with the same {% icon fa-copy %} **Copy** icon you used earlier, and hit the **Save** button.

   {% callout success %}Don't worry about overwriting your existing password! If something goes wrong, Bitwarden maintains a **Password History** of the last 5 passwords for every Login item:<br><br>{% image getting-started/pwhistory.png %}{% endcallout %}
7. Tab back over to the other website, and paste your strong password in the **New Password** and **Confirm new password** fields.
8. Once you **Save** the password change, you're finished!

## Import Your Data

Do you have usernames and passwords saved somewhere else, for instance in a web browser like Google Chrome or another password manager like LastPass?

**Good news!** In your Web Vault, you can import credentials to Bitwarden in-bulk rather than having to manually create a new item for each. To learn how, use our guide on [Importing Data to your Vault]({% link _articles/importing/import-data.md %}).

## Setup Two-step Login

Besides using a really good [Master Password]({% link _articles/account/master-password.md %}), using Two-step Login is the best measure you can take to protect your Vault. Two-step Login requires that you verify your identity upon logging in to your account using an additional "token", typically retrieved from a different device.

There are many [available methods]({% link _articles/two-step-login/setup-two-step-login.md %}) for Two-step Login, but the recommended method for a free Bitwarden account is using a mobile device authenticator app like [Authy](https://authy.com/){:target="\_blank"}:

1. Download Authy on your mobile device.
2. In your Bitwarden Web Vault, navigate to the **Settings** tab from the top navigation bar.
3. From the left-side Settings menu, select **Two-step Login**.
4. Locate the **Authenticator App** option and select the **Manage** button:

   {% image two-step/twostep-options-authoverlay.png Select the Manage Button %}

   You'll be prompted to enter your Bitwarden Master Password to continue.
5. On your mobile device, open Authy and tap the {% icon fa-plus %} **Add Account** button.
6. Scan the QR code located in your Web Vault using Authy. Once scanned, Authy will display a 6-digit verification code.
7. Enter the 6-digit verification code in the dialog box in your Web Vault, and select the **Enable** button.
8. Select the **Close** button to return to the Two-step Login screen, and select the **View Recovery Code** button.

   Your Two-step Login Recovery code can be used in the event that you lose your mobile device. **This is a critical step to ensure you don't ever get locked out of your Vault**, so don't skip it!
9. Enter your Master Password and select the **Continue** button to get your Recovery Code.

   {% image getting-started/recoverycode.png Example Recovery Code %}

Save your Recovery Code in the way that makes the most sense for you. Believe it or not, printing your Recovery Code and keeping it somewhere safe is one of the best ways to make that the code isn't vulnerable to theft or inadvertent deletion.

## Signup for Premium

Congratulations on mastering the basics of Bitwarden! We want everyone to be safe online, so we're proud to offer everything you've learned about here for free.

For personal users, we offer a premium subscription for **$10 / year** that unlocks advanced Vault capabilities including:

- Advanced Two-step Login options, like [Duo]({% link _articles/two-step-login/setup-two-step-login-duo.md %}) and [YubiKey Security Keys]({% link _articles/two-step-login/setup-two-step-login-yubikey.md %})
- Storage space for [Encrypted File Attachments]({% link _articles/features/attachments.md %})
- A built-in [Temporary One-time Password (TOTP) Authenticator]({% link _articles/features/authenticator-keys.md %})
- [Emergency Access]({% link _articles/security/emergency-access.md %}) to your Vault by trusted emergency contacts
- [Vault Health Reports]({% link _articles/features/reports.md %}) that report on password and security hygiene

To start a premium subscription:

1. In your Bitwarden Web Vault, navigate to the **Settings** tab from the top navigation bar.
2. From the left-side Settings menu, select **Go Premium**.

## Start an Organization

Do you need to share passwords or other Vault items with your friends, family, team, or entire business?

Bitwarden Organizations let you do just that. We recommend trying out the functionality of password-sharing from Organizations by starting a **free** 2-person Organization. To learn how, see [Get Started with an Organization]({% link _articles/getting-started/getting-started-organizations.md %}).

Once you've tested an Organization, check out our [Bitwarden Plans and Pricing](https://bitwarden.com/pricing/business/) page to learn about the different Paid Organizations you might consider.
