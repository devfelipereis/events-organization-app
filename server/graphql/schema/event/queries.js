import { GraphQLNonNull, GraphQLInt, GraphQLList } from 'graphql';
import { getProjection } from '../../../utils/mongoose';
import EventModel from '../../../models/event.model';
import EventType from './EventType';

const events = {
  type: new GraphQLList(EventType),
  resolve: async (root, params, source, fieldASTs) => {
    const projections = getProjection(fieldASTs);
    try {
      const events = await EventModel.find({}, projections);
      return events;
    } catch (err) {
      throw new Error(error);
    }
  },
};

export default {
  events,
};
