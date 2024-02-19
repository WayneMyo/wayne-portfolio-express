# Wayne's Portfolio (ExpressJS) Documentation

## Project Structure Overview
```
/wayne-portfolio-express
    ├── /dist # Compiled TypeScript files
    ├── /node_modules # Node.js modules
    ├── /src # Source files for the project
    │   ├── data # Data files for the project
    │   ├── resolvers # GraphQL resolvers
    │   ├── schema # GraphQL schema
    │   └── server.ts # Express server
    ├── .gitignore # Git ignore file
    ├── package.json # Node.js package file
    ├── package-lock.json # Node.js package lock file
    ├── README.md # Project documentation
    └── tsconfig.json # TypeScript configuration file
```

## Packages Used
- @graphql-tools/merge # GraphQL schema merging
- @graphql-tools/schema # GraphQL schema tools
- @types/node # Node.js types
- express # Express.js
- express-graphql # Express.js GraphQL middleware
- graphql # GraphQL
- graphql-tools # GraphQL tools
- typescript # TypeScript

## Development Environment
- Node.js v20.11.0
- npm v8.19.2

## Getting Started
1. Clone the repository:
```gh repo clone WayneMyo/wayne-portfolio-express```

2. Install the required packages:
```npm install```

3. Start the server:
```npm run dev```

4. Open Postman and send a POST request to `http://localhost:3000/graphql` with the following query:
```query {
  hello
}
```

## Learn More
- [Express.js](https://expressjs.com/)
- [GraphQL](https://graphql.org/)
- [TypeScript](https://www.typescriptlang.org/)
