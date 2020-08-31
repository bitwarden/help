---
layout: article
title: Bitwarden Software Release Support
categories: [hosting]
featured: false
popular: false
hidden: true 
tags: [releases]
---

Bitwarden maintains software versions for the Bitwarden Server, Bitwarden Clients, and other supported integrations and modules.

As a security company building a globally trusted product, Bitwarden maintains up-to-date and relevant software versions for all of our user base, making them widely available and easy to access.

At the same time, we recognize there needs to be a balance between frequent updates and release lifespan. We also recognize there needs to be a balance between pushing forward with new features on newer systems and relinquishing support for older systems. (“Systems” in this case represents devices, operating systems, and software applications and frameworks.)

Our policy for software lifecycle support is below. This information will help you prepare for updates appropriate for your organization.

## Release Support at Bitwarden
Release support at Bitwarden varies for each component of the system and its access or distribution method.

### Bitwarden Cloud
The Bitwarden Cloud is operated and maintained directly by Bitwarden. We update the Bitwarden Cloud regularly and post updates at [status.bitwarden.com](https://status.bitwarden.com/).

### Bitwarden Server
For self-hosting implementations with applicable subscription plans, the Bitwarden Server receives ongoing updates. 

Support for Bitwarden Server releases is available for a duration of 12 months following the initial release.

Note: This means that self-hosting users may be required to update their server on an annual basis to stay current on Bitwarden features and support, and remain compatible with the latest released clients.

### Bitwarden API
The Bitwarden API release cycle and duration aligns with the Bitwarden Server. As a practice, we aim to provide backwards compatibility to the API indefinitely through semantic versioning. However, if we add enhancements that make it difficult or impossible to maintain backwards compatibility to all prior versions, we will indicate that by incrementing the major version number.

### Bitwarden Clients
For Bitwarden Clients and the ongoing support for Bitwarden Client Application releases, our approach to support and upgrades generally aligns with the client environment, as follows:

Browser Browser Extensions
- Bitwarden aims to align with the Browser Provider

Desktop Applications
- Bitwarden aims to align with the Operating System Provider

Mobile Applications
- Bitwarden aims to align with the Mobile OS Provider

Bitwarden CLI
- Bitwarden aims to align with the Operating System Provider

Bitwarden Directory Connector
- Bitwarden aims to align with the Operating System Provider