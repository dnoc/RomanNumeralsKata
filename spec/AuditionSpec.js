describe("Audition JavaScript Tests", function() {

  it("SpecRunner runs", function() {
    expect(JavaScriptAudition.itRuns()).toBeTruthy();
  });

  it("converts 1 to Roman Numeral", function() {
        expect(JavaScriptAudition.toRoman(1)).toBe("I");});

});
