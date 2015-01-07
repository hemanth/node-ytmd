#!/usr/bin/env node

'use strict';
var pkg = require('./package.json');
var ytmd = require('./');

function help() {
	console.log([
		pkg.description,
		'',
		'Usage',
		'  $ ytmd <youtube_url>',
		'',
		'Example',
		'  $ ytmd https://www.youtube.com/watch?v=jo_B4LTHi3I',
	].join('\n'));
}

if (process.argv.indexOf('--help') !== -1) {
	help();
	return;
}

if (process.argv.indexOf('--version') !== -1) {
	console.log(pkg.version);
	return;
}

if (!process.argv[2]) {
	help();
} else {
	ytmd(process.argv[2], function(err, md) {
		if (!err) {
			console.log(md);
		} else {
			throw (new Error(err));
		}
	});
}
