import {
  GraphQLBoolean,
  GraphQLString,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLList
} from 'graphql';

export const SnapShot = new GraphQLObjectType({
	name: 'SnapShot',
	description: 'A SnapShot object.',
	fields: () => ({
		id: {type: new GraphQLNonNull(GraphQLID), description: 'The SnapShots id.'},
	})
})