import {
  GraphQLBoolean,
  GraphQLString,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLList
} from 'graphql';

export const User = new GraphQLObjectType({
	name: 'User',
	description: 'A user object.',
	fields: () => ({
		id: {type: new GraphQLNonNull(GraphQLID), description: 'The users id.'},
	})
})