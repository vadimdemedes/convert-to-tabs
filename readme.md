# convert-to-tabs [![Build Status](https://travis-ci.org/vadimdemedes/convert-to-tabs.svg?branch=master)](https://travis-ci.org/vadimdemedes/convert-to-tabs)

> Convert tabs to spaces in a string


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

- [convert-to-spaces](https://github.com/vadimdemedes/convert-to-spaces) - Convert tabs to spaces.


## License

MIT © [Vadim Demedes](https://vadimdemedes.com)
