import {
  GraphQLBoolean,
  GraphQLString,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLList
} from 'graphql';

export const Palette = new GraphQLObjectType({
	name: 'Palette',
	description: 'A Palette object.',
	fields: () => ({
		id: {type: new GraphQLNonNull(GraphQLID), description: 'The Palettes id.'},
	})
})