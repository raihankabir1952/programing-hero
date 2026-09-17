function matchWinner(teamAGoals, teamBGoals) {
    if (typeof teamAGoals !== "number" || typeof teamBGoals !== "number") {
        return "Invalid"
    }

     else if (teamAGoals > teamBGoals) {
        return "Team A Won"
    }

    else if (teamBGoals > teamAGoals) {
        return "Team B Won"
    }

    else {
        return "Draw"
    }

}

// let result=matchWinner(2,1)
// let result=matchWinner(1,3)
// let result=matchWinner(2,2)
let result = matchWinner("3", 2)
console.log(result)