/*!
 * Trie树
 * dxpweb - lib/trie.js
 * Author: 继风 <wade428@163.com>
 */


var Trie = function (options) {
  this.trie = {};

};

Trie.prototype.add = function(letters, value) {
	var cur = this.trie;
  for ( var j = 0; j < letters.length; j++ ) {
	  var letter = letters[j];
	  var pos = cur[letter];
    if ( pos === null || pos === undefined) {
      cur = cur[ letter ] = j === letters.length - 1 ? { $: value } : {};
    } else if ( j === letters.length - 1) {
      cur = cur[ letter ]['$'] =  value;
    } else {
      cur = cur[ letter ];
    }
  }
};


Trie.prototype.get = function (letters, limit) {
  if (!letters) {
    return undefined;
  }
  var cur = this.trie;
  var infos = undefined;

  for (var i = 0; i < letters.length; i++) {
    var letter = letters[i];
    var pos = cur[letter];
    if ( pos === null || pos === undefined) {
      break;
    } else if ( i === letters.length - 1) {
      infos = cur[ letter ];
      break;
    } else {
      cur = cur[ letter ];
    }  
  }

  if (!infos || Object.keys(infos).length === 0) {
    return undefined;
  }

  var result = [];
  //严格匹配得到的词
  if (infos['$']) {
    return [infos['$']]
  }

  limit = limit || 10;
  var list = []
  var _get = function(infos) {
    if (list.length < limit) {
      if (infos['$'] !== undefined) {
        list.push(infos['$']);
      } else {
        for (var key in infos) {
          _get(infos[key])
        }
      }
    }
  }
  _get(infos);
  return list;
};

module.exports = function (options) {
  return new Trie(options);
};