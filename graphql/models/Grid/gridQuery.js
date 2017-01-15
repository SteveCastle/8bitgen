import {GraphQLNonNull, GraphQLID,GraphQLString} from 'graphql';
import {Grid} from './gridSchema';

export default {
  getGridById: {
    type: GraphQLString,
    args: {
      id: {type: new GraphQLNonNull(GraphQLID)}
    },
    async resolve() {
      return 'Hello world'
    }
  }
};
