import { Grid, UpdatedGrid, NewGrid} from './gridSchema';
import {GraphQLNonNull, GraphQLBoolean, GraphQLID} from 'graphql';

export default {
  addGrid: {
    type: Grid,
    args: {
      grid: {type: new GraphQLNonNull(NewGrid)}
    },
    async resolve(source) {
        return {id: 5, user: 5, title: 'Hello World', likes:7, createdAt: new Date(),updatedAt: new Date(), height:8, width:8}
    }
  },
  updateGrid: {
    type: Grid,
    args: {
      grid: {type: new GraphQLNonNull(UpdatedGrid)}
    },
    async resolve(source) {
        return {id: 5, user: 5, title: 'Hello World', likes:7, createdAt: new Date(),updatedAt: new Date(), height:8, width:8}
    }
  },
  deleteGrid: {
    type: GraphQLBoolean,
    args: {
      id: {type: new GraphQLNonNull(GraphQLID)}
    },
    async resolve(source) {
    	return true
    }
  }
};