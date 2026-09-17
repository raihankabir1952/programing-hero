function isElevatorSafe(weights) {

    if (!Array.isArray(weights)) {
        return "Invalid";
    }

    let sum = 0;

    for (let i = 0; i < weights.length; i++) {
        sum = sum + weights[i];
    }

    if (sum > 400) {
        return false;
    } else {
        return true;
    }
}

let result=isElevatorSafe([60, 75, 50])
//let result=isElevatorSafe("60,75,50")
console.log(result)