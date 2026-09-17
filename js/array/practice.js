//1. Create an array with 3 items of your choice. Log it.
let students = ["Ashraful", "Anamul", "Haffez"]
console.log(students)

// 2. Log the length of the array from Task 1.
console.log(students.length)

//3. Log the item at index 0 and index 2 of the array.
console.log(students[0])
console.log(students[2])

//4. Change the item at index 1 to a new value. Log the array.
students[1] = "Tamim";
console.log(students)

//5. Add one item to the end of the array. Log the array.
students.push("Shakib")
console.log(students)

//6. Remove the last item from the array. Log the array and the removed value.
let removeitem = students.pop()
console.log("Remove Item : ", removeitem)
console.log("After removing item : ", students)

//7. Add one item to the start of the array. Log the array.
students.unshift("Rakib")
console.log(students)

//8. Remove the first item from the array. Log the array and the removed value.
students.shift()
console.log(students)

//8. Remove the first item from the array. Log the array and the removed value.
console.log(students.includes("Tamim"))
console.log(students.includes("Babar"))

//10. Find the position of a specific value in the array. Log the number.
console.log(students.indexOf("Tamim"))

//11. Loop through the array with a for loop and log each item.
for (let i = 0; i < students.length; i++) {
    console.log(students[i])
}

//12. Loop through the array with a while loop and log each item.
let i = 0;

while (i < students.length) {
    console.log(students[i]);
    i++;
}

console.log("..............................................................................................")

//...................................................Intermediate..............................................

//1. Combine two arrays into one new array. Log the result.
let a = ["Rangpur", "Rajshahi", "Chattogram"]
let b = ["Bangladesh", "Nepal", "Bhutam"]

let combine = a.concat(b)
console.log(combine)

//2. Take a portion of an array (not the whole thing) without changing the original. Log the result.
let players = ["Tamim", "Sakib", "Hridoy", "Taskin", "Miraz"]
console.log(players.slice(1, 3))
console.log("Orginal Array", players)

//3. Turn an array of words into a single sentence string
let sentence = ["I", "Love", "JavaScript"]
console.log(sentence.join(" "))

//4. Check two variables (one array, one not) and log whether each is an array.
let result = Array.isArray(players);
console.log(result)

//5. Reverse an array of at least 5 items. Log the result.
let numbers = [10, 20, 30, 40, 50];
console.log(numbers.reverse())

//6. Sort an array of names alphabetically. Log the result.
console.log(players.sort())

//7. Sort an array of numbers in ascending order, keeping numeric order correct (not string order).
numbers.sort((a, b) => a - b)
console.log(numbers)

//8. Given an array of numbers, log only the values greater than 10, using a loop.
let id = [100, 105, 117, 200, 250]
for (let i = 0; i < id.length; i++) {
    if (id[i] > 10) {
        console.log("Greater then 10 :",id[i])
    }
}

//9. Given an array of numbers, calculate and log the total sum, using a loop.
let nums=[1,2,3,4,5,6,7,8,9,10]
let sum=0
for(i=0;i<nums.length;i++)
{
    sum=sum+nums[i]
}
console.log("Sumation :",sum)

console.log(".............................................................")

//largest and smallest number
let arr=[20,5,10,7,1,100]
let largest=arr[0]
let smallest=arr[0]

for(let i=0; i<arr.length; i++)
    {
        if (arr[i]>largest)
        {
            largest=arr[i]
            
        }

        if(arr[i]<smallest)
        {
            smallest=arr[i]
            
        }  
    }
    console.log(`Largest number : ${largest}`)
    console.log(`Smallest number : ${smallest}`)