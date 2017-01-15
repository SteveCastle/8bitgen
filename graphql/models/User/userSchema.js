import {
  GraphQLBoolean,
  GraphQLString,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLList
} from 'graphql';
import {Grid} from '../Grid/gridSchema';

export const User = new GraphQLObjectType({
	name: 'User',
	description: 'A user object.',
	fields: () => ({
		id: {type: new GraphQLNonNull(GraphQLID), description: 'The users id.'},
    name: {type: new GraphQLNonNull(GraphQLString), description: 'The users name.'},
    grids: {type: new GraphQLList(Grid), description: 'Grids created by this user.'}
	})
})