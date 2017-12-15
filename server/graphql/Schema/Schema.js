import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean,
} from 'graphql/type';

import EventModel from '../../models/event.model';

/**
 * generate projection object for mongoose
 * @param  {Object} fieldASTs
 * @return {Project}
 */
export function getProjection(fieldASTs) {
  return fieldASTs.fieldNodes[0].selectionSet.selections.reduce(
    (projections, selection) => {
      projections[selection.name.value] = true;
      return projections;
    },
    {}
  );
}

const eventType = new GraphQLObjectType({
  name: 'event',
  description: 'the events',
  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'The id of event.',
    },
    name: {
      type: GraphQLString,
      description: 'The name of event',
    },
  }),
});

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      events: {
        type: new GraphQLList(eventType),
        args: {
          // id: {
          //   name: 'id',
          //   type: new GraphQLNonNull(GraphQLInt),
          // },
        },
        resolve: async (root, params, source, fieldASTs) => {
          const projections = getProjection(fieldASTs);
          try {
            const events = await EventModel.find({}, projections);
            return events;
          } catch (error) {
            console.log('error', error);
            throw new Error(error);
          }
        },
      },
    },
  }),
});

export default schema;
