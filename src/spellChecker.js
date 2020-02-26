class SpellChecker {

};

SpellChecker.prototype.compute = function(word) {
  if (word === "") {
    return "";
  } else {
    return "a";
  }

};

module.exports.SpellChecker = SpellChecker;
