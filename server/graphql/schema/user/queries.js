import { GraphQLNonNull, GraphQLInt, GraphQLList } from 'graphql';
import { getProjection } from '../../../utils/mongoose';
import EventModel from '../../../models/user.model';
import UserType from './UserType';

const users = {
  type: new GraphQLList(UserType),
  resolve: async (root, params, source, fieldASTs) => {
    const projections = getProjection(fieldASTs);
    try {
      const users = await UserModel.find({}, projections);
      return users;
    } catch (err) {
      throw new Error(error);
    }
  },
};

export default {
  users,
};
