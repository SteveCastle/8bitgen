import { GraphQLNonNull, GraphQLID, GraphQLString } from 'graphql';
import GridModel from './Grid';
import { Types } from 'mongoose';
import { Grid } from './gridSchema';
import getProjection from '../get-projection';

export default {
    getStartingGrid: {
        type: Grid,
        args: {
        },
        async resolve(root, params, options) {
            return {id: 5, user: 5, title: 'Hello World', likes:7, createdAt: new Date(),updatedAt: new Date(), height:8, width:8}
        }
    },
    getGridById: {
        type: Grid,
        args: {
            id: { type: new GraphQLNonNull(GraphQLID) }
        },
        async resolve(root, params, options) {
            return {id: 5, user: 5, title: 'Hello World', likes:7, createdAt: new Date(),updatedAt: new Date(), height:8, width:8}
        }
    },
    getGridsByUser: {
        type: Grid,
        args: {
            userId: { type: new GraphQLNonNull(GraphQLID) }
        },
        async resolve(root, params, options) {
            return {id: 5, user: 5, title: 'Hello World', likes:7, createdAt: new Date(),updatedAt: new Date(), height:8, width:8}
        }
    },
    getFeaturedGrids: {
        type: Grid,
        args: {
        },
        async resolve(root, params, options) {
            return {id: 5, user: 5, title: 'Hello World', likes:7, createdAt: new Date(),updatedAt: new Date(), height:8, width:8}
        }
    }
};
