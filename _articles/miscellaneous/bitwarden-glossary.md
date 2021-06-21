---
layout: article
title: Bitwarden Glossary of Terms
categories: [miscellaneous]
featured: false
popular: false
hidden: true
tags: [glossary, terminology]
---

| Terminology | Definition|
|---|----|
|Autofill|A software feature that automatically enters previously stored information into a data field. While certain variations apply, Bitwarden enables autofill logins for browser extensions and mobile devices. |
Collections |A logical unit to colocate Logins, Notes, Cards, and Identities for secure sharing within an Organization. |
|Directory Connector |The Bitwarden Directory Connector application syncs users and groups to a Bitwarden Organization from a selection of directory services. Directory Connector will automatically provision and de-provision users, groups, and group associations from the source directory. |
Groups |A unit of individuals. Groups relate together individual users, and provide a scalable way to assign permissions, including access to Collections, as well as permissions within each individual Collection. When onboarding new users, add them to a Group to have them automatically inherit that Group’s configured permissions.
|Items |Vault items are the individual entities that can be saved and shared in Bitwarden such as Logins, Notes, Cards, and Identities.
|Vault |The secure storage area that provides a unified interface and tight access control to any secret (logins, cards, identities, and secure notes, etc)
|Organization |An entity (company, institution, group of people) that relates Bitwarden users to an Organization Vault for secure sharing of Logins, Notes, Cards, and Identities. |
Organization Vault |The protected area for every user (also called a “member”) who is part of an Organization and can find shared items in their My Vault view, alongside personal items. Organization Vaults allow administrators to manage the Organization’s items, users, and settings.|
Personal Vault |The protected area for every user, regardless of their Bitwarden plan, that stores unlimited Logins, Notes, Cards, and Identities. Users can access their Bitwarden Personal Vaults on any device and platform. |
Individual Vault |The Individual Vault has all the functionalities and benefits of the Personal Vault. It refers to the user Vault that is connected to an Organization Vault, which allows a user to securely share data between friends, family, co-workers, a department, or an entire company. |
Single Sign On (SSO) |A session and user authentication service that permits a user to use one set of login credentials when accessing multiple applications and websites. Bitwarden Login with SSO decouples user authentication from Vault decryption and leverages your existing Identity Provider (IdP) to authenticate users into their Bitwarden Vault, and using Master Passwords for decryption of Vault data. |
Master Password *(Main password, account password, vault password)* |The primary method (or key) for accessing a Vault. With this, a user authorizes Bitwarden to conduct a function such as store, retrieve, or fill in passwords for you. Bitwarden encourages users to establish one that is both memorable and strong. <br> *In mid 2021, Bitwarden introduced Admin Password Reset, which enables users and organizations to implement a new policy that allows Administrators and Owners to reset passwords.* |