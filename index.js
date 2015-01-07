'use strict';
var getYouTubeID = require('get-youtube-id');
var articleTitle = require('article-title');
var request = require('request');
var format = require('util').format;
var YTMD_URL = "[![%s](http://img.youtube.com/vi/%s/0.jpg)](http://www.youtube.com/watch?v=%s)";

module.exports = function(url, cb) {
	request(url, function(error, response, body) {
			if (!error && response.statusCode == 200) {
				var title = articleTitle(body),
					id = getYouTubeID(url),
					md = format(YTMD_URL,title, id, id);
			cb(null, md);
		} else {
			cb(error, null);
		}
	});
}
