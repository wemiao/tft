const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;
const router = express.Router();

router.get('/', function(req, res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

//add the router
app.use('/', router);
app.listen(port);
console.log('Server started at http://localhost:' + port);
