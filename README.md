# Recipe API

## Description
- Creating a simple Node API that can store a basic recipe Title, Ingredients, and Instructions via a mySQL DB. Currently only exists within a local dev environment.

## Pre-Requirements
- Knowledge of mySQL
- Knowledge of Sequelize (ORM)
- MySQL with a username & password

## Additional Requirements

- When the repo is cloned, create a `.env` file in root directory. CLI command `touch .env`. Insert the below values. Replacing `DB_USER` and `DB_PW` with your respective username and password.
  - DB_NAME='recipes_db'
  - DB_USER='{insert MySQL username}'
  - DB_PW= {insert MySQL password}

- The DB is not automatically created so make sure you have created a DB labeled `recipes_db`
    - mySQL CLI Command: `CREATE DATABASE recipes_db`