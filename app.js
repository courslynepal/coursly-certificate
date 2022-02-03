const express = require('express')
const bodyParser = require('body-parser')
const certifacteRoutes = require('./routes/certificateRoutes');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json());

const router = express.Router();

router
.get('/', function(req,res) {
    res.render('index')
})

app.set('view engine','ejs')
app.use(express.static(__dirname+'/public'));
app.use('/',certifacteRoutes);

module.exports = app;