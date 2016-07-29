"use strict";

var JavaScriptAudition = {
  itRuns: function() {
    return true;
  }
};

function toRoman(num) {
    var lookup = {X:10,IX:9,VIII:8,VII:7,VI:6,V:5,IV:4,III:3,II:2,I:1},
        roman = '',
        i;
    for (i in lookup) {
        if (num === lookup[i])
            return i;
    }
}