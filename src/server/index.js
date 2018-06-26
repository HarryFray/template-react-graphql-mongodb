const expressGraphQL = require('express-graphql');
const express = require('express');

const schema = require('./schema');
const db = require('./db/index.js');

const app = express();

const apiRouter = express.Router();
const restRouter = express.Router();

app.use('/api', apiRouter);
apiRouter.use('/rest', restRouter);

apiRouter.use('/graphql', expressGraphQL({
  schema,
  graphiql: true,
}));

restRouter.route('/')
  .get((req, res) => res.json({ getRest: true }))
  .post((req, res) => res.json({ postRest: true }));

app.listen(8080, () => {
  console.log('API local 8080');
});
