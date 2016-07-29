describe("Audition JavaScript Tests", function() {

  it("SpecRunner runs", function() {
    expect(JavaScriptAudition.itRuns()).toBeTruthy();
  });

  it("converts 1 to Roman Numeral", function() {
        expect(toRoman(1)).toBe("I");});

  it("converts 5 to Roman Numeral", function() {
        expect(toRoman(5)).toBe("V");});

  it("converts 10 to Roman Numeral", function() {
          expect(toRoman(10)).toBe("X");});
});
