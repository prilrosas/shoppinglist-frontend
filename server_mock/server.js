const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3005;
const db = require('./db.json');
server.use(bodyParser.json())

server.use(middlewares);

server.use(jsonServer.rewriter({
    '/api/shoppinglist': '/shoppinglist'
}));


server.post('/api/purchaseitem', (req, res) => {
    if (req.method === 'POST') {
      console.log(req.body)  
      let shoppinglistid = req.body['shoppinglistid'];
      if (shoppinglistid != null && shoppinglistid >= 0) {
        let result = db.shoppinglist.find(e => {
          return e.id == shoppinglistid;
        })
        

        if (result) {
          result.itens.push(req.body)
          res.send(req.body);
        } else {
          res.status(400).jsonp({
            error: "Bad shoppinglistid"
          });
        }
      } else {
        res.status(400).jsonp({
          error: "No valid shoppinglistid"
        });
      }
    }
  });

server.use(router);
server.listen(port);