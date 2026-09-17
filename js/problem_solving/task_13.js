//remove first and last char in a string.
function removeFirstAndLast(str) {
    let remove = str.slice(1, str.length - 1);
    return remove;
}

let res = removeFirstAndLast("raihan");

console.log(res);