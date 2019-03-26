---
layout: article
title: RESTful API for managing your organization
categories: [organizations]
featured: true
popular: false
tags: [api]
---

Bitwarden provides a full-featured RESTful API for managing your organization. You can use the API to manage your organization's members, collections, groups, event logs, and more. The API has predictable resource-oriented URLs, accepts JSON-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.

{% note %}
API access is only available to enterprise organizations.
{% endnote %}

## Table of Contents

- [Endpoints](#endpoints)
- [Content Types](#content-types)
- [Authentication](#authentication)
- [Errors](#errors)
- [Explore the API](#explore-the-api)

## Endpoints

The following endpoints are used when accessing the API:

**Public Cloud Server API**

- Authentication: `https://identity.bitwarden.com/connect/token`
- Base URL: `https://api.bitwarden.com`

**On-premises Server API**

- Authentication: `https://your.server.com/identity/connect/token`
- Base URL: `https://your.server.com/api`

## Content Types

The Bitwarden RESTful API communicates with `application/json` requests and responses. The only exception is the authentication endpoint, which expects a `application/x-www-form-urlencoded` request. The authentication endpoint will respond with `application/json`.

## Authentication

The Bitwarden RESTful API uses bearer access tokens to authenticate with protected API endpoints. An [OAuth2 client credentials](https://www.oauth.com/oauth2-servers/access-tokens/client-credentials/){:target="_blank"} (application) flow is used to obtain a bearer access token from the authentication endpoint. You can obtain your `client_id` and `client_secret` from your organization through the web vault. Navigate to your organization's administrative area, then **Settings** &rarr; **My Organization** &rarr; **API Key**.

{% note %}
Your API Key (specifically the `client_secret`) should be kept private. If you believe that this key has been compromised, you can always invalidate and rotate the key from the organization's administrative area.
{% endnote %}

To obtain a bearer access token, make a `application/x-www-form-urlencoded` `POST` request with your `client_id` and `client_secret` to the authentication endpoint. For access to the organization APIs, you will use the `api.organization` scope.

Example request:

```
curl -X POST \
  https://identity.bitwarden.com/connect/token \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'grant_type=client_credentials&scope=api.organization&client_id=<ID>&client_secret=<SECRET>'
```

A bearer access token with a expiration value (in seconds, from now) will be returned.

Example response:

```
{
  "access_token": "<TOKEN>",
  "expires_in": 3600,
  "token_type": "Bearer"
}
```

You can then use this bearer token in the `Authorization` header to make authorized calls to API endpoints.

Example:

```
curl -X GET \
  https://api.bitwarden.com/public/collections \
  -H 'Authorization: Bearer <TOKEN>'
```

You will need to keep track of the token's expiration and renew it whenever it nears expiration or has expired. Calling API endpoints that require authorization without a bearer token or with an expired token will return a `401 Unauthorized` status code.

## Errors

The Bitwarden RESTful API uses conventional HTTP response codes to indicate the success or failure of an API request. In general: Codes in the `2xx` range indicate success. Codes in the `4xx` range indicate an error that failed given the information provided. Codes in the `5xx` range indicate an error with Bitwarden's servers (these are rare).

- `200` - OK: Everything worked as expected.
- `400` - Bad Request: The request was unacceptable, often due to missing or malformed parameter.
- `401` - Unauthorized: No valid bearer token provided.
- `404` - Not Found: The requested resource doesn't exist.
- `429` - Too Many Requests: Too many requests hit the API too quickly. We recommend an exponential backoff of your requests.
- `500, 502, 503, 504` - Server Errors: Something went wrong on Bitwarden's end. (These are rare.)

## Explore the API

The Bitwarden RESTful API is compatible with the OpenAPI specification and publishes a compliant [`swagger.json`](https://docs.bitwarden.com/api/specs/public/swagger.json) definition file.

You can explore and execute the API endpoints and their definitions using Swagger UI at:

**Public Cloud Server API**

- [https://docs.bitwarden.com/api/](https://docs.bitwarden.com/api/){:target="_blank"}

**On-premises Server API**

- https://your.domain.com/api/docs/
