'use strict';

const repeating = require('repeating');

module.exports = (str, spaces) => {
	spaces = spaces || 2;

	const regex = new RegExp(repeating(spaces), 'g');

	return str.replace(/^\s+/gm, $1 => $1.replace(regex, '\t'));
};
