"use strict";
function getTrafficLightAction(light) {
    if (light === "red") {
        return "Stop";
    }
    else if (light === "yellow") {
        return "Caution";
    }
    else if (light === "green") {
        return "Go";
    }
    else {
        return "Invalid light color";
    }
}
console.log(getTrafficLightAction("red")); // Output: Stop
console.log(getTrafficLightAction("yellow")); // Output: Caution
