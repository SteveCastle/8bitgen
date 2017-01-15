require("babel-core/register");
require("babel-polyfill");

import express from 'express';
import fs from 'fs';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';
import schema from './graphql/schema'


const app = express();


app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use('/graphql', graphqlHTTP(req => ({
  schema,
  pretty: true,
  graphiql: true

})));


app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
