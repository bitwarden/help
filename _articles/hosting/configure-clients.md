---
layout: article
title: Configure Clients Centrally
categories: [hosting]
featured: true
popular: false
tags: []
order: 10
---

When operating a self-hosted Bitwarden server in a business setting, administrators may want to centrally configure client application settings (particularly, Server URL) before deploying to users with an endpoint management platform.

The process for doing so will be different for each client application:

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="mobtab" data-target="#mobile" role="tab" aria-controls="mobile" aria-selected="false">Mobile</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="desktab" data-target="#desktop" role="tab" aria-controls="desktop" aria-selected="false">Desktop</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="betab" data-target="#browserextension" role="tab" aria-controls="browserextension" aria-selected="false">Browser Extension</a>
  </li>
</ul>
<div class="tab-content" id="clientsContent">
  <div class="tab-pane show active" id="mobile" role="tabpanel" aria-labelledby="mobtab">
{% capture mobile_info %}

#### Mobile

Most Mobile Device Management (MDM) or Enterprise Mobility Management (EMM) solutions allow administrators to pre-configure applications before deployment in a standard fashion. To pre-configure Bitwarden Mobile apps to use your self-hosted Server URL, construct the following Application Configuration:

|Configuration Key|Value Type|Configuration Value|
|-----------------|----------|-------------------|
|`baseEnvironmentUrl`|string|Your self-hosted Server URL, for example `https://my.bitwarden.server.com`.|

{% endcapture %}
{{ mobile_info | markdownify}}
  </div>
  <div class="tab-pane" id="desktop" role="tabpanel" aria-labelledby="desktab">
{% capture desktop_info %}

#### Desktop

To centrally configure the  Desktop app for deployment, first complete the following steps on a single workstation:

1. Install the Desktop app. If you're using Windows, silent install Bitwarden using `installer.exe /S` (see [NSIS documentation](https://nsis.sourceforge.io/Docs/Chapter4.html#silent){:target="\_blank"}).
2. Navigate to the Desktop app's locally stored settings. This directory is different depending on your OS (e.g. `%AppData%\Bitwarden` on Windows, `~/Library/Application Support/Bitwarden` on macOS). [Find your directory.]({{site.baseurl}}/article/data-storage/)
3. In the directory, open the `data.json` file.
4. Edit `data.json` to configure the Desktop app as desired. In particular, create the following object to configure the app with your self-hosted Server URL:

   ```
   "environmentUrls": {
 		"base": "https://my.bitwarden.server.com",
 		"api": null,
 		"identity": null,
 		"webVault": null,
 		"icons": null,
 		"notifications": null,
 		"events": null,
 		"enterprise": null
 	}
   ```
5. Once configured the way you want it, use your endpoint management solution of choice (like [Jamf](https://www.jamf.com/){:target="\_blank"}) to deploy the pre-configured Desktop app as a template.

{% endcapture %}
{{ desktop_info | markdownify}}
  </div>
  <div class="tab-pane" id="browserextension" role="tabpanel" aria-labelledby="betab">
{% capture browser_extension %}

#### Browser Extensions

While it is possible to deploy Bitwarden Browser Extensions using an endpoint management solution like [Jamf](https://www.jamf.com/){:target="\_blank"} or Microsoft Endpoint Manager (formerly SCCM), it is currently **not possible** to alter the configuration in this way.

Instruct your end-users to follow [these steps]({{site.baseurl}}/article/change-client-environment/#browser-extensions-desktop-apps-and-mobile-apps) to connect a Browser Extension to your self-hosted server.

{% endcapture %}
{{ browser_extension | markdownify}}
  </div>
</div>
