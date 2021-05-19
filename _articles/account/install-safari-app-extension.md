---
layout: article
title: Safari Web Extension
categories: [miscellaneous]
featured: false
popular: false
tags: [browser, safari]
---

Bitwarden's Safari Web Extension is a port of the prior *App Extension* designed for use with [Safari 14](https://developer.apple.com/documentation/safariservices/safari_web_extensions/converting_a_safari_app_extension_to_a_safari_web_extension?language=objc){:target="\_blank"}.    The Safari Web Extension is packaged with the Bitwarden Desktop App available on the App Store.

{% callout info %}
Due to changes by Apple, Safari limits Web Extension use to **only those obtained through Mac App Store downloads**. As of the [2021-03-11 Release]({% link _articles/getting-started/releasenotes.md %}), users will not be able to use a Bitwarden Safari Extension obtained through a `.dmg` installation from [bitwarden.com/download](https://bitwarden.com/download){:target="\_blank"} or any other non-App Store source.

**If you're using a Safari version prior to 14**, you can continue using a `.dmg` installation, which can be downloaded from [bitwarden.com/download](https://bitwarden.com/download){:target="\_blank"} by clicking **more desktop installation options >**. Keeping the `.dmg` outside of the Applications folder should allow you to simultaneously use both an older Safari Extension and the latest Desktop App.
{% endcallout %}

The Safari Web Extension has full feature parity to the prior App Extension. For developer detail on the difference between Safari Web Extensions and App Extensions, click [here](https://developer.apple.com/documentation/safariservices/safari_web_extensions/converting_a_safari_app_extension_to_a_safari_web_extension?language=objc).

## Enable the Extension

Before enabling the Safari Web Extension, run the Desktop Application at least once. In Safari:

1. Open the **Preferences** window.
2. Navigate to the **Extensions** page.
3. Check the **Bitwarden** checkbox, and select **Turn on** in the confirmation dialog.
