"use strict";

var JavaScriptAudition = {
  itRuns: function() {
    return true;
  }
};

function toRoman(num) {
    var lookup = {X:10,V:5,I:1},
        roman = '',
        i;
    for (i in lookup) {
        if (num === lookup[i])
            return i;
    }
}