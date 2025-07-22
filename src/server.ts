
import { ApolloServer } from '@apollo/server';
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import routes from './routes/index.js';
import { sequelize } from './models/index.js';
import { typeDefs, resolvers } from './schemas/index.js';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';


const forceDatabaseRefresh = false;
const app = express();
const PORT = process.env.PORT || 3001;

// Serves static files in the entire client's dist folder

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

app.use(cors({
    origin:'https://ac-technology.netlify.app',
    credentials: true
  }))


app.use(express.json())

const startApolloServer = async() =>{

  await server.start();

  app.use(express.static('../client/dist'));

  app.use(express.json());
  app.use(routes);
  app.use('/graphql', expressMiddleware(server))


  sequelize.sync({force: forceDatabaseRefresh}).then(() => {
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
}

startApolloServer();