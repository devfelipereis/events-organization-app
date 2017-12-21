import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import userQueries from './user/queries';
import eventQueries from './event/queries';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      ...userQueries,
      ...eventQueries,
    },
  }),
  // TODO: mutations
  // mutation: new GraphQLObjectType({
  //   name: 'Mutation',
  //   fields: {
  //     ...eventMutations,
  //     ...usersMutations,
  //   },
  // }),
});
