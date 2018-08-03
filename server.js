var express = require('express'), app = express();
var chalk = require('chalk');
var holidays = require('date-holidays');

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Holidays Endpoint | (/holidays/US)
app.get('/holidays/:country', function(req, res) {
	var hd = new holidays(req.params.country.toUpperCase());
	res.json(hd.getHolidays());
});

app.listen(port);


console.log(chalk.green('Server listening  on port ' + port));

exports = module.exports = app;