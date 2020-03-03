---
layout: article
title: Backing up your on-premises hosted data
categories: [hosting]
featured: false
popular: false
tags: [hosting, docker, backup]
---

With the public cloud version of Bitwarden, we automatically handle backing up your data for you. However, when self-hosting Bitwarden you must implement your own backup procedures in order to keep your data safe.

Bitwarden's Docker containers use volume mapping to keep all important data persisted on the host machine. You can find this data in the `./bwdata` directory relative to your Bitwarden installation. The Docker containers themselves are to be considered ephemeral and do not persist data or state.

You should back up and keep the entire `./bwdata` directory safe. In the event of data loss you will need all or parts of data contained in this directory to restore your installation.

Some particularly important parts of the `./bwdata` directory are:

- `./bwdata/mssql/data` - database data
- `./bwdata/core/attachments` - vault item attachments
- `./bwdata/env` - environment variables, including database and certificate passwords

## Nightly database backups

Bitwarden will automatically take nightly backups of the `mssql` container database. These database backups are kept in the `./bwdata/mssql/backups` directory. Nightly database backups are kept in this directory for 30 days. In the event of data loss, you can restore one of these daily backups. 

## Restoring a nightly backup
1. Go to your Bitwarden installation and execute an interactive bash shell on the `bitwarden-mssql` container.

    ```    
    docker exec -it bitwarden-mssql /bin/bash
    ```
2. Take note of the backup file you wish to restore in the nightly backups directory. The directory here is a host volume for `./bwdata/mssql/backups`.
    ```
    ls /etc/bitwarden/mssql/backups/ 
    ```
    For this example, the backup we will be using is named `vault_FULL_20200302_235901.BAK`, which is a backup of the vault database on 2 March 2020 at 2359. The full path of the backup in this container would be `/etc/bitwarden/mssql/backups/vault_FULL_20200302_235901.BAK` 
3. Execute `sqlcmd` with the required authentication.
    ```
    /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P ${SA_PASSWORD}
    ```
4. Execute the SQL command `RESTORE DATABASE` with your backup to restore the nightly backup.
    ```
   1> RESTORE DATABASE vault FROM DISK = '/etc/bitwarden/mssql/backups/vault_FULL_20200302_235901.BAK' WITH REPLACE
   2> GO
    ```
