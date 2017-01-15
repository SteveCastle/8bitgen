import {
  GraphQLBoolean,
  GraphQLString,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLList
} from 'graphql';

export const Frame = new GraphQLObjectType({
	name: 'Frame',
	description: 'A Frame object.',
	fields: () => ({
		id: {type: new GraphQLNonNull(GraphQLID), description: 'The Frames id.'},
	})
})