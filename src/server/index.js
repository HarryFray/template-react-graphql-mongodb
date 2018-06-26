const schema = require('./schema');
const db = require('./db/index.js');
const express = require('express');
const expressGraphQL = require('express-graphql');


const app = express();

const apiRouter = express.Router();
const restRouter = express.Router();

// /api
app.use('/api', apiRouter);

// /api/rest
apiRouter.use('/rest', restRouter);
// /api/graphql
apiRouter.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

restRouter.route('/')
  .get((req, res) => res.json({ getRest: true }))
  .post((req, res) => res.json({ postRest: true }))



// subroute api/ infront of this route
apiRouter.get('*', (req, res) => res.json({ api: true }));


app.listen(8080, () => {
  console.log('API local 8080');
});
