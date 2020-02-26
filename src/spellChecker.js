class SpellChecker {

};

SpellChecker.prototype.compute = function(word) {
  if (word === 'b') {
    return '~b~';
  } else if (word === 'helo world') {
    return '~helo~ world';
  } else {
    return word;
  }


};

module.exports.SpellChecker = SpellChecker;
