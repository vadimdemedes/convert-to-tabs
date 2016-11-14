'use strict';

module.exports = (str, spaces) => {
	return str.replace(/^\s+/gm, $1 => '\t'.repeat($1.length / (spaces || 2)));
};
