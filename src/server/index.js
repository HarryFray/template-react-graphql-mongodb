const expressGraphQL = require('express-graphql');
const express = require('express');
const schema = require('./schema');
const db = require('../db/index.js');

const app = express();

// api
const apiRouter = express.Router();
app.use('/api', apiRouter);

// api/rest
const restRouter = express.Router();
apiRouter.use('/rest', restRouter);

// api/graphql
apiRouter.use('/graphql', expressGraphQL({
  schema,
  graphiql: true,
}));

app.listen(8080, () => {
  console.log('API local 8080');
});
