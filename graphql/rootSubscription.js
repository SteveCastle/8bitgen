import {GraphQLObjectType} from 'graphql';
import grid from './models/Grid/gridSubscription';

const rootFields = Object.assign({});

export default new GraphQLObjectType({
  name: 'RootSubscription',
  fields: () => rootFields
});