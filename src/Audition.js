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
    }
}