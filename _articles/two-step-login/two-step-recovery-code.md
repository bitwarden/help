---
layout: article
title: Recovery Codes
categories: [two-step-login]
featured: false
popular: false
tags: [two-step login, 2fa, two factor authentication, account]
order: 08
---

If you enable any [Two-step Login methods]({% link _articles/two-step-login/setup-two-step-login.md %}), it's important to understand that losing access to your secondary device(s) (e.g. a Mobile device with an installed Authenticator, a Security Key, or a linked Email inbox) has the potential to lock you out of your Bitwarden Vault.

To protect against this, Bitwarden generates a **Recovery Code** that can be used with your Master Password to disable any enabled Two-step Login methods from outside your Vault.

{% callout success %}
You should [get your Recovery Code](#get-your-recovery-code) **immediately** after enabling any Two-step Login method.
{% endcallout %}

## Get your Recovery Code

To get your Recovery Code from your [Web Vault](https://vault.bitwarden.com){:target="\_blank"}:

1. Select **Settings** from the top navigation bar.
2. Select **Two-step Login** from the left-side Settings menu.
3. Select the **View Recovery Code** button near the top of the screen. You'll be prompted to enter your Master Password, which will open a Recovery Code panel:

   {% image two-step/recoverycode.png Sample Recovery Code %}

Save your Recovery Code in the way that makes the most sense for you. Believe it or not, printing your code and keeping it somewhere safe is one of the best ways to ensure that the code isn't vulnerable to theft or inadvertent deletion.

{% callout info %}
**When does a recovery code change?**

Neither disabling and re-enabling Two-step Login nor changing your Master Password will change your recovery code. Your recovery code will only change [when you use it](#use-you-recovery-code). On using your recovery code, immediately get a new one and save it in the way that makes the most sense for you.
{% endcallout %}

### Use your Recovery Code

To use your Recovery Code, navigate to [https://vault.bitwarden.com/#/recover-2fa/](https://vault.bitwarden.com/#/recover-2fa/) (or, if you're self-hosting, [https://your.domain.com/#/recover-2fa/](#use-your-recovery-code)).

Using your Recovery Code is like a normal log in procedure, requiring your Email Address and Master Password, but will also take your Recovery Code. On successful authentication of all three, you'll be logged in to your Vault and **all Two-step Login methods will be disabled**.

Once used, you'll need to:

- Re-enable any Two-step Login methods you want to use in the future.
- [Get your Recovery Code](#get-your-recovery-code) again, as it'll be reset upon use.

{% callout info %}
Recovery Codes **won't disable Duo for Organizations**. You can tell that a Duo prompt is Organization-wide by the **(Organization)** header, as in the following screenshot:

{% image two-step/duo/duo-orgs.png Duo (Organization)%}

If you're locked out of your Vault by a **Duo (Organization)** prompt, reach out to the Duo Administrator at your company for help bypassing the prompt.
{% endcallout %}
