---
layout: article
title: Change App Theme
categories: [miscellaneous]
featured: true
popular: false
tags: []
description: "Learn how to change the theme of you Bitwarden client applications."
---

Bitwarden Browser Extensions, Desktop Apps, and Mobile apps come packed with stylish themes:

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="betab" data-target="#browserextension" role="tab" aria-controls="browserextension" aria-selected="false">Browser Extension</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="desktab" data-target="#desktop" role="tab" aria-controls="desktop" aria-selected="false">Desktop</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="mobtab" data-target="#mobile" role="tab" aria-controls="mobile" aria-selected="false">Mobile</a>
  </li>
</ul>
<div class="tab-content" id="clientsContent">
  <div class="tab-pane show active" id="browserextension" role="tabpanel" aria-labelledby="betab">
{% capture browser_extension %}
#### Browser Extension

To change the theme of your Browser Extension:

1. Open the Browser Extension's {% icon fa-cogs %} **Settings** tab.
2. Scroll to the **Other** section and select **Options**.
3. Scroll to the **Display** section and use the **Theme** dropdown to select your favorite theme!

   {% image features/theme-browserext.png Change Theme %}

{% endcapture %}
{{ browser_extension | markdownify}}
  </div>
  <div class="tab-pane" id="desktop" role="tabpanel" aria-labelledby="desktab">
{% capture desktop_info %}
#### Desktop App

To change the theme of your Desktop App:

1. Open the Desktop App's **Preferences** panel (on Windows, **File** &rarr; **Settings**) (on macOS, **Bitwarden** &rarr; Preferences).
2. Scroll to the **Options** section and use the **Theme** dropdown to select your favorite theme!

   {% image features/theme-desktop.png Change Theme %}

{% endcapture %}
{{ desktop_info | markdownify}}
  </div>
  <div class="tab-pane" id="mobile" role="tabpanel" aria-labelledby="mobtab">
{% capture mobile_info %}
### Mobile App

To change the theme of your Mobile App:

1. Open the Mobile App's {% icon fa-cogs %} **Settings** tab.
2. Scroll to the **Other** section and select **Options**.
3. Tap the **Theme** option to select your favorite theme!

   {% image features/theme-mobile.jpeg Change Theme %}

{% endcapture %}
{{ mobile_info | markdownify}}
  </div>
</div>
