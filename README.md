node-trie
=========

A simple Trie implementation for Node.js

## install

```bash
npm install node-trie
```

## usage

```js
var Trie = require('node-trie');

var trie = Trie();

var letters = [
  'hello',
  'world',
  'help',
  '中国'
];

for(var i = 0; i < letters.length; i++) {
  trie.add(letters[i], letters[i]);
}

trie.get('hello'); //[ 'hello' ]

trie.get('h'); //[ 'hello', 'help' ]
trie.get('中'); //[ '中国' ]

```