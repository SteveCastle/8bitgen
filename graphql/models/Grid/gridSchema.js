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

import {makeRequired} from '../utils';
import {User} from '../User/userSchema';


export const Grid = new GraphQLObjectType({
	name: 'Grid',
	description: 'A grid object.',
	fields: () => ({
		id: {type: new GraphQLNonNull(GraphQLID), description: 'The grid id.'},
    userId: {type: new GraphQLNonNull(GraphQLID), description: 'The userId that created the grid'},
    title: {type: new GraphQLNonNull(GraphQLString), description: 'The grid title'},
    createdAt: {type: GraphQLString, description: 'The datetime the grid was created'},
    updatedAt: {type: GraphQLString, description: 'The datetime the grid was last updated'},
    height: {type: GraphQLInt, description: 'The datetime the grid was last updated'},
    width: {type: GraphQLInt, description: 'The datetime the grid was last updated'},
    likes: {type: GraphQLInt, description: 'Number of likes received by this grid'},
    user: {type: User, 
           description: 'The user who created this grid',
           resolve: () => ({id:5, name:'STC', iconUrl:'/img/creator.png'})
  },
    frames: {
      type: new GraphQLList(new GraphQLList(new GraphQLList(GraphQLString))),
      description: 'The Frames in this grid.',
      resolve: () => [
        [
            ['#000', '#000', '#f9af14', '#f9af14', '#f9af14', '#000', '#000', '#bcbcbc'],
            ['#000', '#f9af14', '#f9af14', '#f9af14', '#f9af14', '#f9af14', '#000', '#bcbcbc'],
            ['#000', '#f9af14', '#f2be98', '#000', '#ffc9a1', '#000', '#000', '#bcbcbc'],
            ['#df9d12', '#df9d12', '#f2be98', '#ffc9a1', '#ffc9a1', '#ffc9a1', '#000', '#bcbcbc'],
            ['#000', '#358230', '#358230', '#359030', '#359030', '#000', '#000', '#a9a9a9'],
            ['#ffc9a1', '#358230', '#358230', '#359030', '#358230', '#358230', '#ffc9a1', '#f2be98'],
            ['#000', '#000', '#358230', '#358230', '#358230', '#000', '#000', 'brown'],
            ['#000', '#ad0200', '#000', '#000', '#ad0200', '#000', '#000', '#000']
        ]
    ]
    }



	})
})

const inputFields = {
  id: {type: GraphQLID, description: 'The laneId'},
  userId: {type: GraphQLID, description: 'The userId that created the grid'},
  isPrivate: {type: GraphQLBoolean, description: 'Whether the grid is visible to other users'},
  title: {type: GraphQLString, description: 'The lane title'},
  frames: {
      type: new GraphQLList(new GraphQLList(new GraphQLList(GraphQLString))),
      description: 'The Frames in this grid.'
    }
};

export const UpdatedGrid = new GraphQLInputObjectType({
  name: 'UpdatedGrid',
  description: 'Args to update a grid',
  fields: () => makeRequired(inputFields, ['id'])
});

export const NewGrid = new GraphQLInputObjectType({
  name: 'NewGrid',
  description: 'Args to add a grid',
  fields: () => makeRequired(inputFields, ['userId', 'title', 'frames'])
});