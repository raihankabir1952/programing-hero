"use strict";
function getQuizSummary(scores) {
    if (scores.length === 0) {
        return {
            total: 0,
            average: 0
        };
    }
    const total = scores.reduce((acc, score) => acc + score, 0);
    const average = total / scores.length;
    return {
        total,
        average
    };
}
console.log(getQuizSummary([80, 90, 70, 85])); // Output: { total: 325, average: 81.25 }
