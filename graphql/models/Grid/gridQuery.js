import {GraphQLNonNull, GraphQLID,GraphQLString} from 'graphql';
import {Grid} from './gridSchema';

export default {
  getGridById: {
    type: Grid,
    args: {
      id: {type: new GraphQLNonNull(GraphQLID)}
    },
    async resolve() {
      return {id: 5, user: 5,title: 'Hello World', likes:7, createdAt: new Date(),updatedAt: new Date(), height:8, width:8}
    }
  }
};
