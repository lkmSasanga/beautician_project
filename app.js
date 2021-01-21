const app = require('express')();
const cors = require('cors');
require("dotenv").config();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

app.use(cors());

var port = process.env.PORT || 6000;

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.listen(port, () => {
   console.log(`Server is started on: ${port}`);
});