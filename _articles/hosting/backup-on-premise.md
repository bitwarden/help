---
layout: article
title: Backing up your on-premise hosted data
categories: [hosting]
featured: false
popular: false
tags: [hosting, docker, backup]
---

With the public cloud version of Bitwarden, we automatically handle backing up your data for you. However, when self-hosting Bitwarden you must implement your own backup procedures in order to keep your data safe.

Bitwarden's Docker containers use volume mapping to keep all important data persisted on the host machine. You can find this data in the `./bwdata` directory relative to your bitwarden installation. The Docker containers themselves are to be considered ephemeral and do not persist data or state.

You should back up and keep the entire `./bwdata` directory safe. In the event of data loss you will need all or parts of data contained in this directory to restore your installation.

Some particularly important parts of the `./bwdata` directory are:

- `./bwdata/mssql/data` - database data
- `./bwdata/core/attachments` - vault item attachments
- `./bwdata/env` - environment variables, including database and certificate passwords

## Nightly database backups

Bitwarden will automatically take nightly backups of the `mssql` container database. These database backups are kept in the `./bwdata/mssql/backups` directory. Nightly database backups are kept in this directory for 30 days. In the event of data loss, you can restore one of these daily backups. You can read more about SQL Server backup restoration at <https://docs.microsoft.com/en-us/sql/relational-databases/backup-restore/complete-database-restores-simple-recovery-model/>.
