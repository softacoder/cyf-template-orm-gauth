# Google Auth and Sequalize Starter Kit

## Local Quickstart

### 1. Create Google Auth Application

https://developers.google.com/identity/sign-in/web/sign-in

### 2. Setup

Setup the environment variables. The following are needed:
 - LOG_LEVEL (debug)
 - CLIENT_ID (from previous step)
 - DB_USERNAME
 - DB_PASSWORD
 - DB_DATABASE
 - DB_NAME
 - DB_HOST
 - DB_PORT (5432)
 - NODE_ENV (development)

### 3. Migrate the database
 - copy the .env file to the server folder
 - cd to the `server` folder
 - run `npx sequelize-cli db:migrate`

### 4. Run the applications
 - cd to the root folder
 - run `npm run dev`

## Developer Guide
