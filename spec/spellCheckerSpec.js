const spellCheckerModule = require('../src/spellChecker.js');
const SpellChecker = spellCheckerModule.SpellChecker;

describe('SpellChecker', function() {
  it('returns empty string for empty string input', function() {
    var newSpellChecker = new SpellChecker;

    expect(newSpellChecker.compute("")).toEqual("");
  });
});
