import {GraphQLObjectType} from 'graphql';
import grid from './models/Grid/gridMutation';

const rootFields = Object.assign(grid);

export default new GraphQLObjectType({
  name: 'Mutation',
  fields: () => rootFields
});