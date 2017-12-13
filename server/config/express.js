import express from 'express';
import bodyParser from 'body-parser';
import { graphql } from 'graphql';
import graphqlHTTP from 'express-graphql';
import routes from '../routes/index.route';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());

app.use('/api', routes);

// TODO: Need to create schema
// app.use(
//   '/api/graphql',
//   graphqlHTTP(req => ({
//     schema,
//     graphiql: true,
//   }))
// );

export default app;
