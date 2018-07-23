const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Listening on port...' + port));

//Static folder
app.use('/public', express.static('public'));

//Middleware para handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


//Index route
app.get('/', (req, res) => {
	res.render('index');
});

app.get('/servicios', (req, res) => {
	res.render('servicios');
});

app.get('/nosotros', (req, res) => {
	res.render('nosotros');
});

app.get('/galeria', (req, res) => {
	res.render('galeria');
});

app.get('/contacto', (req, res) => {
	res.render('contacto');
});
