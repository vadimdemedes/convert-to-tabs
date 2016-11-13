'use strict';

module.exports = (str, spaces) => {
	const regex = new RegExp(' '.repeat(spaces || 2), 'g');

	return str.replace(/^\s+/gm, $1 => $1.replace(regex, '\t'));
};
