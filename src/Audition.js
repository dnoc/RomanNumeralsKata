"use strict";

var JavaScriptAudition = {
  itRuns: function() {
    return true;
  }
};

function toRoman(num) {
    if (num === 1){
        return "I";
    } else if (num === 5) {
        return "V";
    } else if (num === 10) {
        return "X";
    }
}