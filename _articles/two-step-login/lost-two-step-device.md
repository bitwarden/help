---
layout: article
title: Lost Secondary Device
categories: [two-step-login]
featured: false
popular: false
tags: [two-step login, 2fa, two factor authentication, account]
order: 09
---

Losing access to your secondary device(s) (e.g. a Mobile device with an installed Authenticator, a Security Key, or a linked Email inbox) has the potential to lock you out of your Bitwarden Vault.

What to do when you've lost access to your secondary device(s) depends on whether you've saved your [Two-step Login Recovery Code]({% link _articles/two-step-login/two-step-recovery-code.md %}). If you're unsure, remember that Recovery Codes need to be actively saved (i.e. Bitwarden won't save it anywhere *for you*) and look something like this:

{% image two-step/recoverycode.png Sample Recovery Code %}

## Have a Recovery Code?

Excellent! If you have have your Recovery Code saved somewhere, you can use it to disable all Two-step Login methods from outside your Vault. Learn more [here]({{site.baseurl}}/article/two-step-recovery-code/#use-your-recovery-code).

{% callout success %}
Recovery Codes **won't disable Duo for Organizations**. You can tell that a Duo prompt is Organization-wide by the **(Organization)** header, as in the following screenshot:

{% image two-step/duo/duo-orgs.png Duo (Organization)%}

If you're locked out of your Vault by a **Duo (Organization)** prompt, reach out to the Duo Administrator at your company for help bypassing the prompt.
{% endcallout %}

## Don't have a Recovery Code?

If you don't have your Recovery Code saved somewhere outside of your Vault, there is unfortunately no way for the team to recover the account or data therein. You'll need to delete your account and start a new one.

{% callout success %}
Before proceeding to delete your account, try the following:

1. **If you're using Duo**, [generate a bypass code](https://duo.com/docs/administration-users#generating-a-bypass-code). For Duo for Organizations, your company's Duo administrator can generate a bypass code for you.
2. **Check if you're currently logged in to any Bitwarden client applications** (Mobile Apps, Browser Extensions, etc.). If you are, [export your vault data]({% link _articles/account/export-your-data.md %}) to preserve your data.
{% endcallout %}

To delete your account:

1. Navigate to [vault.bitwarden.com/#/recover-delete](https://vault.bitwarden.com/#/recover-delete).
2. Enter the **Email Address** associated with your account.
3. In your email inbox, open the email and verify that you want to delete this Bitwarden account.

Once deleted, you're free to create a new Bitwarden account with that email address.

If you delete a Bitwarden account that has a Premium subscription associated with it, [Contact Us](https://bitwarden.com/contact/){:target="\_blank"} and we'll reapply your existing subscription to the new account. If you were able to successfully export your Vault data prior to deletion, you can easily [import it into the new account]({% link _articles/importing/import-data.md %}).
