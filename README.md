# metro-api

---

Welcome! This is a CRUD graphql api for trains, lines, and stations within the Tokyo 23 special wards! It connects to a PostgreSQL database via the Knex.js library. This is a free to use api with data collected through various data such as Wikipedia and the official train operators’ websites. Please feel free to DM me any feedback!

# Getting Started

---

To run this api locally after you fork it, you must create the following:

- a `.env` file in the root directory
- a local psql database named `metro_api`

**Copy and paste the following into a `.env` file**

```
DB_CLIENT=postgresql
DB_HOST=5432
DB_NAME=metro_api
DB_USER=->your username here<-
DB_PASS=->your password here<-
DB_URL_LOCAL=*yourpassword*://*yourusername*@127.0.0.1:5432/metro_api
```