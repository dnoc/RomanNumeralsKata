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

  it("converts 40 to Roman Numeral", function() {
        expect(toRoman(40)).toBe("XL");});

  it("converts 50 to Roman Numeral", function() {
        expect(toRoman(50)).toBe("L");});

  it("converts 90 to Roman Numeral", function() {
        expect(toRoman(90)).toBe("XC");});

  it("converts 100 to Roman Numeral", function() {
        expect(toRoman(100)).toBe("C");});

  it("converts 400 to Roman Numeral", function() {
        expect(toRoman(400)).toBe("CD");});

  it("converts 500 to Roman Numeral", function() {
        expect(toRoman(500)).toBe("D");});

  it("converts 900 to Roman Numeral", function() {
        expect(toRoman(900)).toBe("CM");});

  it("converts 1000 to Roman Numeral", function() {
        expect(toRoman(1000)).toBe("M");});
});
