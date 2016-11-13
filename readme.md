# convert-to-tabs [![Build Status](https://travis-ci.org/vdemedes/convert-to-tabs.svg?branch=master)](https://travis-ci.org/vdemedes/convert-to-tabs)

> Convert tabs to spaces in a string

Supports multine strings as well.


## Install

```
$ npm install --save convert-to-tabs
```


## Usage

```js
const convertToTabs = require('convert-to-tabs');

convertToTabs('    hello');
//=> '\t\thello'

convertToTabs('    hello', 4);
//=> '\thello'
```


## API

### convertToTabs(str, [spaces])

#### str

Type: `string`

Source string.

#### spaces

Type: `number`<br>
Default: `2`

Number of spaces to treat as one tab.


## Related

- [convert-to-spaces](https://github.com/vdemedes/convert-to-spaces) - Convert tabs to spaces.


## License

MIT © [vdemedes](https://github.com/vdemedes)
