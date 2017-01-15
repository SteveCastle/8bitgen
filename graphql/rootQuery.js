import {GraphQLObjectType} from 'graphql';
import grid from './models/Grid/gridQuery';

const rootFields = Object.assign(grid);

export default new GraphQLObjectType({
  name: 'RootQuery',
  fields: () => rootFields
});