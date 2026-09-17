function getMaxNumber(numbers) {

    // validation 1
    if (!Array.isArray(numbers)) {
        return "Invalid";
    }

    // validation 2
    if (numbers.length === 0) {
        return "Invalid";
    }

    // validation 3
    if (!numbers.every((num) => {
        return typeof num === "number";
    })) {
        return "Invalid";
    }

    let result = numbers.reduce((max, num) => {

        if (num > max) {
            return num;
        }

        return max;

    });

    return result;
}

let res = getMaxNumber([10, 50, 20, 80, 30]);

console.log(res);