describe("Audition JavaScript Tests", function() {

  it("SpecRunner runs", function() {
    expect(JavaScriptAudition.itRuns()).toBeTruthy();
  });

  it("converts 1 to Roman Numeral", function() {
        expect(toRoman(1)).toBe("I");});

  it("converts 2 to Roman Numeral", function() {
          expect(toRoman(2)).toBe("II");});

  it("converts 4 to Roman Numeral", function() {
        expect(toRoman(4)).toBe("IV");});

  it("converts 5 to Roman Numeral", function() {
        expect(toRoman(5)).toBe("V");});

  it("converts 9 to Roman Numeral", function() {
          expect(toRoman(9)).toBe("IX");});

  it("converts 10 to Roman Numeral", function() {
          expect(toRoman(10)).toBe("X");});
});
