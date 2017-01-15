import {
  GraphQLBoolean,
  GraphQLString,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLList
} from 'graphql';

export const Order = new GraphQLObjectType({
	name: 'Order',
	description: 'A Order object.',
	fields: () => ({
		id: {type: new GraphQLNonNull(GraphQLID), description: 'The Orders id.'},
	})
})