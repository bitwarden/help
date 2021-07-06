---
layout: article
title: Connect to an External MSSQL Database
categories: [hosting]
featured: false
popular: false
tags: [hosting, database, mssql]
order: 12
---

By default, self-hosted instances of Bitwarden will use a Microsoft SQL Server (MSSQL) database created as a normal part of [installation setup]({{site.baseurl}}/article/install-on-premise), however you configure Bitwarden to use an external MSSQL database.

{% callout info %}
Currently, self-hosted installations of Bitwarden support **only** MSSQL databases. Stay tuned for future updates on this topic.
{% endcallout %}

To setup your self-hosted instance with an external database:

1. Create a new MSSQL database named `vault`.

   {% callout warning %}You **must** use `vault` as your database name. A different database name will cause migration to fail.{% endcallout %}
2. (**Recommended**) Create a dedicated DBO for your `vault` database.
3. As an administrator of your Bitwarden server, open the `global.override.env` file in an editor:

   ```
   nano bwdata/env/global.override.env
   ```
4. Edit the `globalSettings__sqlServer__connectionString=` value for the following information.

   - Replace `"Data Source=tcp:mssql,1443";` with your MSSQL Server name, for example `"Data Source=protocol:server_url,port"`.
   - If you created a DBO, replace `User ID=sa;` with your DBO User ID.
   - Replace `Password=<default_pw>;` with your DBO or SA password.
5. Save your changes to `global.override.env`.
6. Start Bitwarden (`./bitwarden.sh start`).

{% comment %}
6. Run `./bitwarden.sh updatedb` to migrate the **database schema**.

   {% callout success %}`updatedb` does not migrate data, it only migrates the database schema. To move existing data to the new database, [restore a backup]({{site.baseurl}}/article/backup-on-premise/#restore-a-nightly-backup) from `./bwdata/mssql/backups`.{% endcallout %}
{% endcomment %}

Once the above steps are complete, you can test the connection by creating a new user through the Web Vault and querying the external `vault` database for creation of the new user.
