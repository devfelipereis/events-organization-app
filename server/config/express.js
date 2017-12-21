import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { graphql } from 'graphql';
import graphqlHTTP from 'express-graphql';
import routes from '../routes/index.route';
import schema from '../graphql/schema';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// TODO: detect envs... morgan should be used only for development
app.use(morgan('combined'));
app.use(cors());

app.use('/api', routes);

app.use(
  '/api/graphql',
  graphqlHTTP(req => ({
    schema,
    graphiql: true,
    context: {
      req, // I will use this later to get authorization token
    },
  }))
);

export default app;
