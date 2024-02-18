"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const graphql_1 = require("graphql");
// Define your GraphQL schema
const schema = (0, graphql_1.buildSchema)(`
  type Query {
    hello: String
  }
`);
// Define resolvers
const root = {
    hello: () => 'Hello, GraphQL!',
};
// Create an Express app
const app = (0, express_1.default)();
// Set up GraphQL endpoint
app.use('/graphql', (0, express_graphql_1.graphqlHTTP)({
    schema: schema,
    rootValue: root,
    graphiql: true, // Enable GraphiQL for testing
}));
// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
