---
layout: article
title: Disable a Browser's Built-in Password Manager
categories: [auto-fill]
featured: true
popular: true
hidden: false
tags: []
order: 08
---

If you're new to Bitwarden, it's likely that the web browser you use has been saving and auto-filling your passwords. Most web browsers enable this by default, but experts generally agree that [built-in password managers are more vulnerable](https://www.wired.com/2016/08/browser-password-manager-probably-isnt-enough/){:target="\_blank"} than dedicated solutions like Bitwarden.

For that reason, and because an active built-in password manager can interfere with your Bitwarden experience, we recommend disabling your web browser's built-in password manager.

Learn how to disable the built-in password manager for major browsers:

{% callout success %}
Lots of modern browsers, including Edge, Opera, and Brave, use a Google Chrome framework called "Chromium". If you're using one of those browsers, use the **Chrome/Chromium** instructions.
{% endcallout %}

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" id="tab" role="presentation">
    <a class="nav-link active" id="chrometab" data-bs-toggle="tab" data-target="#chrome" role="tab" aria-controls="chrome" aria-selected="true">Chrome/Chromium</a>
  </li>
  <li class="nav-item" id="tab" role="presentation">
    <a class="nav-link" id="firefoxtab" data-bs-toggle="tab" data-target="#firefox" role="tab" aria-controls="firefox" aria-selected="false">Firefox</a>
  </li>
  <li class="nav-item" id="tab" role="presentation">
    <a class="nav-link" id="safaritab" data-bs-toggle="tab" data-target="#safari" role="tab" aria-controls="safari" aria-selected="false">Safari</a>
  </li>
  <li class="nav-item" id="tab" role="presentation">
    <a class="nav-link" id="vivalditab" data-bs-toggle="tab" data-target="#vivaldi" role="tab" aria-controls="vivaldi" aria-selected="false">Vivaldi</a>
  </li>
  <li class="nav-item" id="tab" role="presentation">
    <a class="nav-link" id="tortab" data-bs-toggle="tab" data-target="#tor" role="tab" aria-controls="tor" aria-selected="false">Tor</a>
  </li>
</ul>

<div class="tab-content" id="clientsContent">
  <div class="tab-pane show active" id="chrome" role="tabpanel" aria-labelledby="chrometab">
{% capture chrome %}
### Chrome/Chromium

In Chrome or any Chromium-based browser (e.g. Edge, Opera, Brave), navigate to the **Passwords** page by entering `chrome://settings/passwords` in the address bar, substituting `chrome` for your browser name (e.g. `brave://settings/passwords`).

On this page, toggle off both the **Offer to save passwords** option and the **Auto Sign-in** option:

{% image features/chrome-disable-autofill.png Chrome Password Options %}

This page will also list any **Saved Passwords** that are being stored by the browser:

{% image features/chrome-delete-passwords.png Chrome Saved Passwords %}

If you haven't already saved these passwords in Bitwarden, [export them]({{site.baseurl}}/article/import-from-chrome/#export-from-chrome) to prepare for future import to Bitwarden. Once exported, you should delete these passwords from the browser's storage.

{% endcapture %}
{{ chrome | markdownify }}
  </div>
  <div class="tab-pane" id="firefox" role="tabpanel" aria-labelledby="firefoxtab">
{% capture firefox %}
### Firefox

In Firefox, navigate to **Preferences** &rarr; **Privacy & Security** and scroll down to the **Logins and Passwords** section. In this section, uncheck all the pre-checked options:

{% image features/firefox-disable.png Firefox Password Options %}

You should also find out which Logins Firefox has already saved by selecting the **Saved Logins...** button:

{% image features/firefox-delete.png Firefox Saved Logins %}

If you haven't already saved these passwords in Bitwarden, [export them]({{site.baseurl}}/article/import-from-firefox) for future import to Bitwarden. Once exported, you should {% icon fa-trash %} **Remove** these passwords from Firefox.

{% endcapture %}
{{ firefox | markdownify }}
  </div>
  <div class="tab-pane" id="safari" role="tabpanel" aria-labelledby="safaritab">
{% capture safari %}
### Safari

In Safari, open **Preferences** from the menu bar and navigate to the **AutoFill** tab. On this tab, uncheck all the pre-checked options:

{% image features/safari-disable.png Safari Password Options %}

You should also find out which Passwords Safari has already saved by navigating to the **Passwords** tab:

{% image features/safari-delete.png Safari Saved Passwords %}

If you haven't already saved these passwords in Bitwarden, create Login items in Bitwarden for these passwords. Once all saved passwords are in Bitwarden, **Remove** these passwords from Safari.

{% endcapture %}
{{ safari | markdownify }}
  </div>
  <div class="tab-pane" id="vivaldi" role="tabpanel" aria-labelledby="vivalditab">
{% capture vivaldi %}
### Vivaldi

In Vivaldi, open the {% icon fa-cog %} **Vivaldi Settings** window and select {% icon fa-eye %} **Privacy** from the left-hand navigation. Scroll down to the Passwords section and uncheck the **Save Webpage Passwords** option:

{% image features/vivaldi-disable.png Vivaldi Password Options %}

You should also find out which passwords Vivaldi has already saved by selecting the **Show Saved Passwords** button:

{% image features/vivaldi-delete.png Vivaldi Saved Passwords %}

If you haven't already saved these passwords in Bitwarden, create Login items in Bitwarden for these passwords. Once all saved passwords are in Bitwarden, remove these passwords from Vivaldi by right-clicking on each and selecting **Delete Password**.

{% endcapture %}
{{ vivaldi | markdownify }}
  </div>
  <div class="tab-pane" id="tor" role="tabpanel" aria-labelledby="tortab">
{% capture tor %}
### Tor

Despite sharing roots with Firefox, Tor is a unique in that it doesn't save your Logins by default. If you haven't manually configured Tor to save and autofill logins, you're already all set.

If you did, navigate to the **Passwords** page by entering `about:preferences#privacy` in the address bar, and scroll down to the Logins and Passwords section. Toggle off all the options that you had checked:

{% image features/tor-disable.png Tor Password Option %}

You should also find out which Logins Tor has already saved by selecting the **Saved Logins...** button:

{% image features/tor-delete.png Tor Saved Passwords %}

If you haven't already saved these passwords in Bitwarden, create Login items in Bitwarden for these passwords. Once all saved passwords are in Bitwarden, {% icon fa-trash %} **Remove** these passwords from Tor.

{% endcapture %}
{{ tor | markdownify }}
  </div>
</div>
