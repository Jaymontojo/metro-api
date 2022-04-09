const { ApolloServer} = require('apollo-server');
const db = require('../db/knex');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const PORT = process.env.PORT || 3000;
const server = new ApolloServer({typeDefs, resolvers});


(async () => {
  try{
    await db.migrate.latest();
    server.listen(PORT, () => {
      console.log(`App is listening at http://localhost:${PORT}/graphql`)
    });

  } catch (err) {
    console.error(`App failed to start ${err}`);
    process.exit(-1);
  }
})();