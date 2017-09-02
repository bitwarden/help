---
layout: article
title: I forgot my master password
categories: [account-management]
featured: true
popular: false
tags: [master password, account]
---

Unlike most services that you use on the internet, due to the way bitwarden works there is no way to reset your master password in the event that you forget it. This is because all of your vault data in encrypted with your master password, therefore it is impossible to unlock or recover without it.

If you have forgotten your master password unfortunately there is no way to fully recover the account. The only option to gain access to the account again is to delete the account so that you can register again and start over. Note that deleting the account will also delete all of your stored login data associated with the account.

{% tip %}
If you still have an active login session open in the browser extension you can export your data from **Tools** &rarr; **Export Vault** so that you can import it back in after the account has been deleted and you have registered again.
{% endtip %}

## Deleting the account

1. Navigate to <https://vault.bitwarden.com/#/recover-delete>
2. Enter your account's email address
3. Go to your email inbox and click the verification link that was sent to you
4. Confirm the delete

You can now register a new account using the same email address.
