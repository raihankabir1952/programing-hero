"use strict";
function getBatteryStatus(percentage) {
    if (percentage <= 20) {
        return "Low";
    }
    else if (percentage <= 50) {
        return "Medium";
    }
    else if (percentage <= 90) {
        return "High";
    }
    else {
        return "Full";
    }
}
console.log(getBatteryStatus(5));
