# Jobs Application

This application is designed to control job applications, providing both a RESTful Express server and a GraphQL server. It is built using Solid principles, Domain-Driven Design (DDD), and Design Patterns with clean code practices in TypeScript.

## Features

- **RESTful API**: The server runs on port <http://localhost:8000/api/v1/version>.
- **GraphQL Server**: Accessible at <http://localhost:8000/graphql>.
- **Hasura**: Utilizes Hasura for instant GraphQL API generation and management over PostgreSQL the password is youradminsecretkey <http://localhost:8080>.
- **Domain-Driven Design**: The application structure is based on DDD principles.
- **Design Patterns**: Uses various design patterns to maintain clean and manageable code.
- **TypeScript**: The application is written entirely in TypeScript for type safety and better developer experience.
- **Vitest**: The application uses Vitest for testing to ensure code quality and reliability.
- **Postgres/Mongoose**: Supports both PostgreSQL and MongoDB (using Mongoose) connections for flexible data management.
- **LocalStack**: Uses LocalStack for development mode instead of AWS, providing a local AWS cloud stack for testing and development

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/MohamedAljoke/node_ddd_graphql_rest.git
   ```

2. start the application with docker, this will have a postgres db the backend and a hasura:

   ```sh
   docker-compose up -d
   ```
