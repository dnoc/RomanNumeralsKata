"use strict";

var JavaScriptAudition = {
  itRuns: function() {
    return true;
  }
};

function toRoman(num) {
    var lookup = {M:1000,CM:900,D:500,CD:400,C:100,
                    XC:90,L:50,XL:40,X:10,IX:9,VIII:8,VII:7,VI:6,V:5,IV:4,I:1},
        roman = '',
        i;
    for (i in lookup) {
        if (num === lookup[i])
            return i;
    }
}