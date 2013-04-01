var mancjs = require("../mancjs");
var assert= require("assert");

describe("mancjs", function(){
	it("should be able to retrieve next event date", function(done){
		mancjs.getNextDate(function(err, date){
			assert.equal("03 Apr 19:00", date);
			done();
		});
	});
});