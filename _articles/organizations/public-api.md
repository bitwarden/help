---
layout: article
title: Bitwarden Public API
categories: [organizations]
featured: true
popular: false
tags: [public api, oas, organizations]
order: 16
---

The Bitwarden Public API provides Organizations a suite of tools for managing members, collections, groups, event logs, and policies.

{% callout success %}
For automating **management of Vault items**, we recommend using the [CLI]({{site.baseurl}}/article/cli/). Access to Vault items relies on Vault decryption, which must be done with a Username and Master Password rather than an [API Key](#authentication).
{% endcallout %}

The Public API is a RESTful API with predictable resource-oriented URLs, accepts JSON-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.

The Public API is compatible with the OpenAPI Specification (OAS3) and publishes a compliant [`swagger.json`](https://bitwarden.com/help/api/specs/public/swagger.json) definition file. Explore the OpenAPI Specification using the Swagger UI:
- For Public Cloud-hosted instances: [https://bitwarden.com/help/api/](https://bitwarden.com/help/api/){:target="\_blank"}
- For Self-hosted instances: https://your.domain.com/api/docs/

{% callout info %}
Access to the Bitwarden Public API is available customers on the following plans, **Classic 2019 Enterprise Organizations**, current **Enterprise Organizations**, and current **Teams Organizations**. For more information, see [About Bitwarden Plans](https://bitwarden.com/help/article/about-bitwarden-plans/#compare-the-plans-1).
{% endcallout %}

## Endpoints

### Base URL

For Cloud-hosted, `https://api.bitwarden.com`.

For Self-hosted, `https://your.domain.com/api`.

### Authentication Endpoints

For Cloud-hosted, `https://identity.bitwarden.com/connect/token`.

For Self-hosted, `https://your.domain.com/identity/connect/token`.

## Authentication

The API uses bearer access tokens to authenticate with protected API endpoints. Bitwarden uses an [OAuth2 Client Credentials](https://www.oauth.com/oauth2-servers/access-tokens/client-credentials/){:target="_blank"} application request flow to grant bearer access tokens from the endpoint. Authentication requests take `client_id` and `client_secret` as required parameters.

The API Key `client_id` and `client_secret` can be obtained by an **Owner** from the Web Vault by navigating to Organization **Settings** &rarr; **My Organization** and scrolling down to the **API Key** section:

{% image organizations/org-api-key.png Get Organization API Key %}

If, as an owner, you want to share the API Key with an Admin or other user, use a secure communication method like [Bitwarden Send]({{site.baseurl}}/article/about-send/).

{% callout warning %}
Your API key enables full access to your Organization. Keep your API key private. If you believe your API key has been compromised, select the **Rotate API Key** button on this screen. Active uses of your current API key will need to be reconfigured with the new key before use.
{% endcallout %}

### Bearer Access Tokens

To obtain a bearer access token, make a `POST` request with `Content-Type: application/x-www-form-urlencoded` with your `client_id` and `client_secret` to the [Authentication Endpoint](#authentication-endpoints). When using the API for Organization Management, you will always use `grant_type=client_credentials` and `scope=api.organization`. For example:

```
curl -X POST \
  https://identity.bitwarden.com/connect/token \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'grant_type=client_credentials&scope=api.organization&client_id=<ID>&client_secret=<SECRET>'
```

This request will result in the following response:

```
{
  "access_token": "<TOKEN>",
  "expires_in": 3600,
  "token_type": "Bearer"
}
```

In this response, `3600` represents the expiration value (in seconds), meaning this token is valid for 60 minutes after being issued. Making an API call with an expired token will return a `401 Unauthorized` [response code](#response-codes).

## Content Types

The Bitwarden Public API communicates with `application/json` requests and responses, with one exception:

The [Authentication Endpoint](#authentication-endpoints) expects a `application/x-www-form-urlencoded` request, however will respond with `application/json`.

## Sample Request

```
curl -X GET \
  https://api.bitwarden.com/public/collections \
  -H 'Authorization: Bearer <TOKEN>'
```
Where `<TOKEN>` is the value for the `access_token:` key in the obtained [bearer access token](#bearer-access-tokens).

This request will result in a response:

```
{
  "object": "list",
  "data": [
    {
      "object": "event",
      "type": 1000,
      "itemId": "string",
      "collectionId": "string",
      "groupId": "string",
      "policyId": "string",
      "memberId": "string",
      "actingUserId": "string",
      "date": "2020-11-04T15:01:21.698Z",
      "device": 0,
      "ipAddress": "xxx.xx.xxx.x"
    }
  ],
  "continuationToken": "string"
}
```

## Status

Bitwarden has a public [status page](https://status.bitwarden.com), where you can find information about service health and incidents for all services including the Public API.

## Response Codes

The Bitwarden Public API uses conventional HTTP response codes to indicate the success or failure of an API request:

|Status Code|Description|
|-----------|-----------|
|`200 OK`|Everything worked as expected.|
|`400 Bad Request`|The request was unacceptable, possibly due to missing or malformed parameter(s).|
|`401 Unauthorized`|The bearer access token was missing, invalid, or expired.|
|`404 Not Found`|The requested resource doesn't exist.|
|`429 Too Many Requests`|Too many requests hit the API too quickly. We recommend scaling back the number of requests.|
|`500, 502, 503, 504 Server Error`|Something went wrong on Bitwarden's end. These are rare, but [Contact Us](https://bitwarden.com/contact/) if they occur.|

## Further Reading

For more information about using the Bitwarden Public API, see the following articles:
- [Bitwarden Public API OAS Specification](https://bitwarden.com/help/api/){:target="\_blank"}
- [Event Logs](https://bitwarden.com/help/article/event-logs/)
