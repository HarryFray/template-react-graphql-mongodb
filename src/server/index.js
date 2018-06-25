const express = require('express');

const app = express();
const apiRouter = express.Router();
const restRouter = express.Router();


// subrouting with api middleware
// oftent break subroutes out into seperate files
// order matters here! this must be above app /
app.use('/api', apiRouter);
apiRouter.use('/rest', restRouter);

// saves lines when path is the same
// but using diff http verb
restRouter.route('/')
  .get((req, res) => res.json({ getRest: true }))
  .post((req, res) => res.json({ postRest: true }))

// subroute api/ infront of this route
apiRouter.get('/', (req, res) => res.json({ api: true }));


app.get('/', (req, res) => res.json({ first: true }));

// catch all...very similar to .use only returns something
app.all('*', (req, res) => res.json({ ok: 'CatchAll' }));



app.listen(8080, () => {
  console.log('API local 8080');
});
