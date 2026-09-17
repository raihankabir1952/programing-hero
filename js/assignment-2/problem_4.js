// let arr = [
//     { name: "Chillox", rating: 5.5 },
//     { name: "Sultan's Dine", rating: 4.8 }
// ];

// let isEmpty = arr.length === 0;

// if (!Array.isArray(arr) || isEmpty) {
//     console.log("Invalid");
// } else {

//     let maxRating = arr[0].rating;
//     let restaurantName = arr[0].name;

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i].rating > maxRating) {
//             maxRating = arr[i].rating;
//             restaurantName = arr[i].name;
//         }
//     }

//     console.log(`Restaurant Name: ${restaurantName.toUpperCase()}, Rating: ${maxRating}`);
// }

// function topRatedRestaurant(restaurants) {

//     // Validation
//     if (!Array.isArray(restaurants) || restaurants.length === 0) {
//         return "Invalid";
//     }

//     let maxRating = restaurants[0].rating;
//     let restaurantName = restaurants[0].name;

//     for (let i = 1; i < restaurants.length; i++) {
//         if (restaurants[i].rating > maxRating) {
//             maxRating = restaurants[i].rating;
//             restaurantName = restaurants[i].name;
//         }
//     }

//     return restaurantName.toUpperCase();
// }

// console.log(topRatedRestaurant([
//     { name: "Chillox", rating: 5.5 },
//     { name: "Sultan's Dine", rating: 4.8 }
// ]));

// console.log(topRatedRestaurant([]));

// console.log(topRatedRestaurant("Raihan"));


function topRatedRestaurant(restaurants) {

    if(!Array.isArray(restaurants) || restaurants.length===0)
    {
        return "Invalid"
    }

    let maxRating=restaurants[0].rating
    let resturentName=restaurants[0].name

    for(let i=0; i<restaurants.length; i++)
    {
        if(restaurants[i].rating > maxRating)
    {
        maxRating=restaurants[i].rating;
        resturentName=restaurants[i].name
    }
    }

    return resturentName.toUpperCase();

}

let res = topRatedRestaurant([{ name: "Chillox", rating: 5.5 },
    { name: "Sultan's Dine", rating: 4.8 }])

console.log(res)
