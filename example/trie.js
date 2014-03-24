var Trie = require('../');
var letters = [
  'hello',
  'world',
  'help',
  '中国'
];

var trie = Trie();
for(var i = 0; i < letters.length; i++) {
  trie.add(letters[i], letters[i]);
}

console.log(trie.get('hello'));
console.log(trie.get('h'));
console.log(trie.get('中'));