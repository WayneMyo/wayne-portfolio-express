import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { mergeResolvers } from '@graphql-tools/merge';

// Import schemas
import aboutSchemas from './schemas/aboutSchemas';
import contactSchemas from './schemas/contactSchemas';
import homeSchemas from './schemas/homeSchemas';
import workExperienceSchemas from './schemas/workExperienceSchemas';
import recommendationSchemas from './schemas/recommendationSchemas';

// Import resolvers
import aboutResolvers from './resolvers/aboutResolvers';
import contactResolvers from './resolvers/contactResolvers';
import homeResolvers from './resolvers/homeResolvers';
import workExperienceResolvers from './resolvers/workExperienceResolvers';
import recommendationResolvers from './resolvers/recommendationResolvers';

// Merge the schemas and resolvers
const mergedTypeDefs = mergeTypeDefs([ // Merge the schemas
  ...aboutSchemas, 
  ...contactSchemas, 
  ...homeSchemas, 
  ...workExperienceSchemas, 
  ...recommendationSchemas
]); 
const mergedSchemas = makeExecutableSchema({ typeDefs: mergedTypeDefs }); // Merge the schemas
const mergedResolvers = mergeResolvers([ // Merge the resolvers
  ...aboutResolvers, 
  ...contactResolvers, 
  ...homeResolvers, 
  ...workExperienceResolvers, 
  ...recommendationResolvers
]); 

const app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema: mergedSchemas,
    rootValue: mergedResolvers,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
