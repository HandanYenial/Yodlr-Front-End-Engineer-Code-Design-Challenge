\c yodlr

DROP TABLE IF EXISTS "users";

CREATE TABLE users(
    id integer PRIMARY KEY,
    email text NOT NULL,
    first_name text NOT NULL,
    last_name text NOT NULL,
    password text NOT NULL,
    state text NOT NULL
);
