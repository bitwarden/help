---
layout: article
title: CLI Authentication Challenges
categories: [miscellaneous]
featured: false
popular: false
tags: [cli, captcha]
---

The August 2021 release of Bitwarden (**2021-08-18**) introduced [Captcha](https://www.hcaptcha.com/about){:target="\_blank"} requirements to increase security against bot traffic. On the CLI, Captcha challenges are substituted with authentication challenges that can validated using your account's [Personal API Key]({{site.baseurl}}/article/personal-api-key) `client_secret`.

## Get your Personal API Key

To get your Personal API Key:

1. Log in to the [Web Vault](https://vault.bitwarden.com){:target="\_blank"} and select the **Settings** tab.
2. From the **My Account** screen, scroll down to the **API Key** section.
3. Select the **View API Key** button and enter your Master Password to validate access.
4. From the **API Key** dialog box, copy the **client_secret:** value, which is a random string like `efrbgT9C6BogEfXi5pZc48XyJjfpR`.

## Answering Challenges

Depending on your preferences, you can [save an environment variable](#answer-challenges-with-an-environment-variable) to automatically pass authentication challenges or [manually enter](#using-the-prompt) your `client_secret` whenever a challenge is made:

{% callout success %}
Aside from using environment variable, any possible challenge is automatically bypassed when using the `bw login --apikey` method. [Learn more]({{site.baseurl}}/article/cli/#using-an-api-key).
{% endcallout %}

### Answer Challenges with an Environment Variable

Authentication challenges will look for a non-empty environment variables `BW_CLIENTSECRET` before prompting you to enter one manually. Saving this variable with the [retrieved client_secret value](#get-your-personal-api-key) will allow you to automatically pass authentication challenges. To save this environment variable:

{% icon fa-linux %} {% icon fa-apple %} Bash
```
export BW_CLIENTSECRET="client_secret"
```

{% icon fa-windows %} PowerShell
```
env:BW_CLIENTSECRET="client_secret"
```

{% callout warning %}
If your `client_secret` is incorrect, you will receive an error. In most cases, this is because you have [rotated your API Key]({{site.baseurl}}/article/personal-api-key/#rotate-your-api-key) since saving the variable. [Use the above steps](#get-your-personal-api-key) to retrieve the correct value.
{% endcallout %}

### Answer Challenges Manually

When an authentication challenge is made and no `BW_CLIENTSECRET` value is found, you will be prompted to manually enter your `client_secret` value:

{% image cli/cli-captcha-1-markup.png Login Prompt with Auth Challenge %}

{% callout warning %}
If your `client_secret` is incorrect, you will receive an error. In most cases, this is because you have [rotated your API Key]({{site.baseurl}}/article/personal-api-key/#rotate-your-api-key) since saving the variable. [Use the above steps](#get-your-personal-api-key) to retrieve the correct value.
{% endcallout %}
