---
date: "2019-03-19"
title: "Setup MongoDB for Remote Access"
tags: ["mongodb"]
excerpt: "connect mongodb remotely via authentication"
---

This guide is tested on AWS EC2 Ubuntu.

## modify conf file

```bash
sudo vim /etc/mongod.conf
```

```
# network interfaces
net:
  port: 27017
  bindIp: 0.0.0.0 # change bindIp to 0.0.0.0 from 127.0.0.1
```

```bash
sudo service mongod restart
```

## Authenticated Access Only

### modify conf file

```bash
sudo vim /etc/mongod.conf
```

add these lines

```
security:
    authorization: 'enabled'
```

```bash
sudo service mongod restart
```

If setup conf file like this, you cannot access to this mongodb without authentications.

### create admin user

```bash
mongo

> db.createUser({
... user: "admin",
... pwd: "adminCustomPassword",
... roles: [
... { role: "userAdminAnyDatabase", db: "admin" },
... { role: "readWriteAnyDatabase", db: "admin" },
... { role: "dbAdminAnyDatabase", db: "admin" }
... ]
```

### create user role for specific DataBase

```bash
> use YOUR_DB_NAME;

> db.createUser({
... user: "userCustomName",
... pwd: "userCustomPassword",
... roles: [
... { role: "userAdmin", db: "YOUR_DB_NAME" },
... { role: "dbAdmin", db: "YOUR_DB_NAME" },
... { role: "readWrite", db: "YOUR_DB_NAME" }
... ]
... });
```

## Test

```bash
mongo -u admin -p adminCustomPassword 127.0.0.1/admin
mongo -u userCustomName -p userCustomPassword 127.0.0.1/YOUR_DB_NAME
```
