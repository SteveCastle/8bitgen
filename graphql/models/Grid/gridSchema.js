import {
  GraphQLBoolean,
  GraphQLString,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLList
} from 'graphql';

export const Grid = new GraphQLObjectType({
	name: 'Grid',
	description: 'A grid object.',
	fields: () => ({
		id: {type: new GraphQLNonNull(GraphQLID), description: 'The grid id.'},
	})
})