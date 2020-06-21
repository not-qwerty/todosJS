-- Run this in PgAdmin to setup database 

-- CREATE DATABASE todoapp;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);