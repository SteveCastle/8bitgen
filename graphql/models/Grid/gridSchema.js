import {
  GraphQLBoolean,
  GraphQLString,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLList
} from 'graphql';

import Frame from '../Frame/frameSchema'
import User from '../User/userSchema'


export const Grid = new GraphQLObjectType({
	name: 'Grid',
	description: 'A grid object.',
	fields: () => ({
		id: {type: new GraphQLNonNull(GraphQLID), description: 'The grid id.'},
    user: {type: new GraphQLNonNull(GraphQLID), description: 'The userId that created the grid'},
    title: {type: new GraphQLNonNull(GraphQLString), description: 'The grid title'},
    createdAt: {type: GraphQLString, description: 'The datetime the grid was created'},
    updatedAt: {type: GraphQLString, description: 'The datetime the grid was last updated'},
    height: {type: GraphQLInt, description: 'The datetime the grid was last updated'},
    width: {type: GraphQLInt, description: 'The datetime the grid was last updated'},
    frames: {
      type: new GraphQLList(GraphQLString),
      description: 'The Frames in this grid.',
      resolve: () => ['frame', 'second frame']
    }



	})
})