import { GraphQLObjectType, GraphQLString } from 'graphql';

export default new GraphQLObjectType({
  name: 'Event',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    startDate: { type: GraphQLString },
    createdAt: { type: GraphQLString },
  },
});
