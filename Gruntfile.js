'use strict';

var tourism = require('tourism');

module.exports = tourism({
	analyse: {
		server: [
			'*/.js',
			'!app/build.js',
			'!node_modules/*/.js'
		]
	},
	start: 'browserify -o app/build.js app/app.js && node app.js'
});