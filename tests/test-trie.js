var e = require('expect.js');
var Trie = require('../lib/trie');

var trie = Trie();

var trie = new Trie();
var lettersArray = [
  'hello',
  'world',
  'hellox',
  'hel',
  '中国',
  'worlx',
  'aaaaaaa',
  'aaaaaab',
  'aaaaaac',
  'aaaaaad',
  'aaaaaae',
  'aaaaaaf',
  'aaaaaag',
  'aaaaaah',
  'aaaaaai',
  'aaaaaaj',
  'aaaaaak',
  'aaaaaal',
  'aaaaaam',
  'aaaaaan',
  'aaaaaao',
  'aaaaaap',
  'aaaaaaq'
];
for(var i = 0; i < lettersArray.length; i++) {
  trie.add(lettersArray[i], lettersArray[i]);
}

describe('trie', function () {

  var cases = [
    ['hello', ['hello']],
    ['he', ['hel']],
    ['worl', ['world', 'worlx']],
    ['aaa',  ['aaaaaaa', 'aaaaaab', 'aaaaaac', 'aaaaaad','aaaaaae',
              'aaaaaaf', 'aaaaaag', 'aaaaaah', 'aaaaaai', 'aaaaaaj']
    ],
    ['xxxxxxxxxxx', undefined]
  ];

  cases.forEach(function (item) {
    it('sucecess "' + item[0] + '" => "' +  JSON.stringify(item[0]) + '"', function (done) {
      e(trie.get(item[0])).to.eql(item[1]);
      done();
    });
  });


  it('undefined fails', function(done) {
    e(trie.get(undefined)).to.eql(undefined);
    done();
  });

  it('undefined fails', function(done) {
    e(trie.get(undefined)).to.eql(undefined);
    done();
  });
});