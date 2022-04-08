const db = require("../db/knex");
//const { setupExpressServer } = require('./server')
const PORT = process.env.PORT || 3000;
//const app = setupExpressServer();
const { ApolloServer} = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const server = new ApolloServer({typeDefs, resolvers});


(async () => {
  try{
    await db.migrate.latest();
    // app.listen(PORT, () => {
    //   console.log(`App is listening at http://localhost:${PORT}`)
    // });
    server.listen(PORT, () => {
      console.log(`App is listening at http://localhost:${PORT}/graphql`)
    });

  } catch (err) {
    console.error(`App failed to start ${err}`);
    process.exit(-1);
  }
})();