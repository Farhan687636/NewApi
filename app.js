const express = require('express');
const cors = require('cors');
const secure = require('ssl-express-www');
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const dotenv = require('dotenv').config()
const app = express();
const __path = process.cwd()

var mainrouter = require('./routes/main'),
    apirouter = require('./routes/api')

// To support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
// To parse cookies from the HTTP Request

app.use(cookieParser());
app.enable('trust proxy');
app.set("json spaces",2)
app.use(express.static("views"))
app.use(cors())
app.use(secure)
app.engine('hbs', exphbs({
    extname: '.hbs'
}));

app.set('view engine', 'hbs');

app.use('/', mainrouter)
app.use('/api', apirouter)

// Our requests hadlers will be implemented here...



app.listen(8080, console.log('running port 8080'));