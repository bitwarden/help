---
layout: article
title: Self-hosting Send
categories: [send]
featured: true
popular: false
tags: []
order: 08
---

Once you [update your instance]({% link _articles/hosting/updating-on-premise.md %}), most implementations will be already setup to begin [using Send]({% link _articles/send/create-send.md %}). An exception to this is if you're using a non-default **mapped volume for attachment storage**.

The files attached to File Sends are stored in a `send` subdirectory of the existing attachments volume (i.e. `./bwdata/core/attachments/send`). This is dictated by the `globalSettings__send__baseDirectory=` environment variable, which has the following default configuration in `global.override.env`:

```
globalSettings__send__baseDirectory=/etc/bitwarden/core/attachments/send
```

If you want to store the files attached to File Sends in your non-default attachments volume, you'll need to point `globalSettings__send__baseDirectory=` to the new volume. For more information, see [Configure Environment Variables](#).
