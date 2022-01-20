[![Build](https://github.com/bitwarden/help/workflows/Build/badge.svg)](https://github.com/bitwarden/help/actions?query=workflow%3ABuild)
[![Join the chat at https://gitter.im/bitwarden/Lobby](https://badges.gitter.im/bitwarden/Lobby.svg)](https://gitter.im/bitwarden/Lobby)

# Bitwarden Help Center

The Bitwarden help center project is written using Jekyll, which is deployed at ([https://bitwarden.com/help/]({{site.baseurl}}/)).

# Build/Run

**Requirements**

- Node.js
- [Ruby](https://www.ruby-lang.org/)
- [Jekyll](https://jekyllrb.com/)

Run the following commands:

- `npm install`
- `npm run build:watch`

You can now access the help center at `http://localhost:4009`. As soon as you save any changes, Jekyll will compile them and automatically reload the page in your browser.

## Docker

Alternatively, you can build and test the site without installing Node.js, Ruby etc. on your machine.

Assuming you have Docker installed, you can run this setup command:
```
docker run --rm -t -i -v $(PWD):/srv/jekyll jekyll/jekyll:4 npm install
```

Then run this command to build and serve the site:
```
docker run --rm -t -i -v $(PWD):/srv/jekyll \
  -p 4009:4009 -p 35729:35729 jekyll/jekyll:4 \
  npm run build:watch
```

# Ruby Gems

## Jekyll Redirect From

To use [jekyll-redirect-from](https://github.com/jekyll/jekyll-redirect-from) add `redirect_from` to the YAML front-matter of your page or post. For example:

```
---
title: 10 Tips to Choosing a Password Manager for Your Team
layout: post
author: Gary Orenstein
redirect_from: /blog/10-tips-choosing-password-manager-for-teams/
---
```

# Contribute

Article contributions are welcome! Please commit any pull requests against the `master` branch. Please see [`CONTRIBUTING.md`](CONTRIBUTING.md) for more info.
