const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

app.use(express.static(path.join(__dirname, '../client/public')));

let port = 8001;
app.listen(port, () => console.log(`Dashboard server listening at port ${port}`));