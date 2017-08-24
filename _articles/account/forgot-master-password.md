---
layout: article
title: I forgot my master password
categories: [account-management]
featured: true
popular: false
tags: [master password, account]
---

Unlike most services that you use on the internet, due to the way bitwarden works there is no way to reset your master password in the event that you forget it. This is because all of your vault data in encrypted with your master password, therefore it is impossible to unlock without it. This is why whenever you change your master password the normal way you must also always provide your current master password.

If you have forgotten your master password unfortunately there is no way to fully recover the account. The only option to gain access to the account again is to have the account deleted by [contacting bitwarden support](https://bitwarden.com/contact) so that you can register again and start over. Note that deleting the account will also delete all of your stored login data associated with the account. If you still have an active login session open in the browser extension you can export your data from **Tools** -> **Export Vault** so that you can import it back in after the account has been deleted and you have registered again.