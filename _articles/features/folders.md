---
layout: article
title: Folders
categories: [features]
featured: false
popular: false
tags: [categories]
---

Folders are a great way to categorize items in your Bitwarden vault.

{% note %}
An [organization's collections]({% link _articles/organizations/collections.md %}) are different than folders. Collections are a way to organize items and control user access within an organization's vault while folders are a way for individual users to organize items within their own personal vault. An individual user may wish to further organize the items being shared with them in their own vault into a personalized folder structure that makes sense just for them.
{% endnote %}

## Nested folders (sub-folders)

Nested folders work by using a naming convention with the forward slash character (`/`) as a delimiter. For example, if I have folders with the names "Work" and "Work/Email", "Email" will be nested as a sub-folder underneath the "Work" folder.

### Nested folders example

In this example I have the following folders:

- Personal
- Personal/Email
- Personal/Email/Sub
- Social
- Work
- Work/Clients
- Work/Email

This would produce a folder structure that looks like this in the web vault (and similarly in other Bitwarden applications):

{% image subfolders.png %}

There is no limit on the depth that you can go with nested folders, though the application interface may begin to "break" if you go too deep.

If a folder's name contains the forward slash delimiter, yet no "parent" folder exists, its name will be displayed in its entirety. In the example above, "Finance/Banking" would not produce a nested structure. You would need to create a "Finance" folder as well if nesting is desired.
