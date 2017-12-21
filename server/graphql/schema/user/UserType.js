import { GraphQLObjectType, GraphQLString } from 'graphql';

export default new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    email: { type: GraphQLString },
    passwrod: { type: GraphQLString },
    createdAt: { type: GraphQLString },
  },
});
