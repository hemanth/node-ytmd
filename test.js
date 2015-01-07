'use strict';
var assert = require('assert');
var ytmd = require('./');

it('should return an md url', function() {
	this.timeout(20000);
	var url = "https://www.youtube.com/watch?v=jo_B4LTHi3I"
	ytmd(url, function(err, md) {
		assert.equal(!err,true);
	});
});
