var request = require('request');
var cheerio = require('cheerio');

module.exports.getNextDate = function getNextDate(callback){
	request('http://mancjs.com', function (error, response, body) {
		if (!error && response.statusCode == 200) {
			var $ = cheerio.load(body);
			callback(null, $(".badge")[0].children[0].data);
		}
	})
}

