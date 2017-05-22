---
layout: article
title: Does bitwarden use a salted hash for my password?
categories: [Security]
featured: true
popular: false
tags: [encryption, hash]
---

Yes.

bitwarden salts and hashes your master password with your email address on the client (your computer/device) before it is
transmitted to our servers. Once the server receives the hashed password from your computer/device it is then salted
again with a cryptographically secure random value, hashed again and stored in our database. This process is repeated and
hashes are compared every time you log in.

The hashing functions that are used are one way hashes. This means that they cannot be reverse engineered by anyone at
bitwarden to reveal your true master password. In the hypothetical event that the bitwarden servers were hacked and your
data was leaked, the data would have **no value** to the hacker.