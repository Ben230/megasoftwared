const spellCheckerModule = require('../src/spellChecker.js');
const SpellChecker = spellCheckerModule.SpellChecker;

describe('SpellChecker', function() {
  var newSpellChecker;

  beforeEach(function() {
    newSpellChecker = new SpellChecker;
  });

  it('returns empty string for empty string input', function() {
    expect(newSpellChecker.compute("")).toEqual("");
  });

  it('returns "a" for "a" input', function() {
    expect(newSpellChecker.compute("a")).toEqual("a");
  });

  it('returns "~b~" for "b" input', function() {
    expect(newSpellChecker.compute("b")).toEqual("~b~");
  });

  it('returns "~helo~ world" for "helo world" input', function() {
    expect(newSpellChecker.compute("helo world")).toEqual("~helo~ world");
  });

});
