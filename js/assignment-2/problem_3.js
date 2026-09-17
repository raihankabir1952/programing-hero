function calculateAiCost(tokensUsed) {

    if (typeof tokensUsed !== "number" || tokensUsed<0) {
        return "Invalid";
    }

    if (tokensUsed <= 500) {
        return 0;
    }

    let chargeableTokens = tokensUsed - 500;
    let charge = Math.floor(chargeableTokens / 100) * 5;

    return charge;
}

console.log(calculateAiCost("-500"));   // 0
console.log(calculateAiCost(501));   // 0
console.log(calculateAiCost(550));   // 0
console.log(calculateAiCost(599));   // 0
console.log(calculateAiCost(600));   // 5
console.log(calculateAiCost(650));   // 5
console.log(calculateAiCost(700));   // 10
console.log(calculateAiCost(1000));  // 25