#Book Store Microservice project

This is a scallable,maintable and well structured Microservice project

## Getting Started

  To run this project locally, follow the instructions below:

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (>= 14.x.x)
- [npm](https://www.npmjs.com/) (>= 6.x.x)

### Installation
1. Create a nest project:
   ```bash
   nest new bookstore
   ```
2. Convert the standard nestjs project into monorepo and create the API gateway:
   ```bash
   nest generate app bookstore-api-gateway
   ```
3. Create services:
   ```bash
   nest generate app users
   ```
   ```bash
   nest generate app books
   ```
4. Remove the initial bookstore app and update the nest-cli.json where remove bookstore related        configuration final is like this.
    ```bash
       {
  "$schema": "https://json.schemastore.org/nest-cli",
  "collection": "@nestjs/schematics",
  "sourceRoot": "apps/bookstore-api-gateway/src",
  "compilerOptions": {
    "deleteOutDir": true,
    "webpack": true,
    "tsConfigPath": "apps/bookstore-api-gateway/tsconfig.app.json"
  },
  "monorepo": true,
  "root": "apps/bookstore-api-gateway",
  "projects": {
    "bookstore-api-gateway": {
      "type": "application",
      "root": "apps/bookstore-api-gateway",
      "entryFile": "main",
      "sourceRoot": "apps/bookstore-api-gateway/src",
      "compilerOptions": {
        "tsConfigPath": "apps/bookstore-api-gateway/tsconfig.app.json"
      }
    },
    "users": {
      "type": "application",
      "root": "apps/users",
      "entryFile": "main",
      "sourceRoot": "apps/users/src",
      "compilerOptions": {
        "tsConfigPath": "apps/users/tsconfig.app.json"
      }
    },
    "books": {
      "type": "application",
      "root": "apps/books",
      "entryFile": "main",
      "sourceRoot": "apps/books/src",
      "compilerOptions": {
        "tsConfigPath": "apps/books/tsconfig.app.json"
      }
    },
    "contract": {
      "type": "library",
      "root": "libs/contract",
      "entryFile": "index",
      "sourceRoot": "libs/contract/src",
      "compilerOptions": {
        "tsConfigPath": "libs/contract/tsconfig.lib.json"
      }
    }
  }
}
    ```
5. Connecting to a microservices:
   **Add a user module to the gateway application
   ```bash
   nest generate module user --project bookstore-api-gateway
   ```
    **Add a user service to the gateway application
   ```bash
   nest generate service user --project bookstore-api-gateway
   ```
    **Add a user controller to the gateway application
   ```bash
   nest generate controller user --project bookstore-api-gateway
   ```
   same for books app too.

6. Generate the resource in books app and select Microservices
    ```bash
   nest generate resource books --project books
   ```
7. Generate the resource in bookstore-api-gateway and select REST for CRUD operation
    ```bash
   nest generate resource books --project bookstore-api-gateway
   ```
8. Generate a new library for contract
    ```bash
   nest generate library contracts
   ```
9. Copy DTOs from the books application to the contracts library
    ```bash
   cp apps/books/src/books/dto/* libs/contracts/src/books
   ```

 


