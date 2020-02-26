class SpellChecker {

};

SpellChecker.prototype.compute = function(word) {
  if (word == 'b') {
    return '~b~';
  } else {
    return word;
  }


};

module.exports.SpellChecker = SpellChecker;
