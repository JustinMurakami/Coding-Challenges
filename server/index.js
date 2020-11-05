const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const model = require('../database/model.js');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

app.get('/gamesList/:type', (req, res) => {
  model.getGamesList(req.params.type, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  });
})

app.use(express.static(path.join(__dirname, '../client/public')));

let port = 8001;
app.listen(port, () => console.log(`Dashboard server listening at port ${port}`));