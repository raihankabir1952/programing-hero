//Task 1
// function getNumber()
// {
//     return 10;
// }
// let result = getNumber();
// console.log(result)

//Task 2
// function add(a,b)
// {
//     return a+b;
// }

// let result=add(5,5)
// console.log(result)

//Task 3
// function getName()
// {
//     return "Raihan";
// }

// let result=getName()
// console.log(result)

//Task 4
// function add(a, b) {

//     return a+b;
// }

// let result = add(10, 20);

// console.log(result);

//Task 5
// function add(a, b) {
//     return a+b;
// }

// let result = add(10, 20);

// let finalResult = result + 50;

// console.log(finalResult);

//Task 6
// function mul(a,b)
// {
//     return a*b;
// }
// let result=mul(100,3)
// console.log(result)
// let discount=result*0.30
// console.log(`30% Discount : ${discount}`)
// let total_price=result-discount
// console.log(`Total Price Now : ${result} - ${discount} = ${total_price}`)



// function mul(a, b) {
//     return a * b;
// }

// function discount(price) {
//     return price * 0.20;
// }

// let result = mul(500, 2);

// let discountAmount = discount(result);

// let finalPrice = result - discountAmount;

// console.log(`Total Price : ${result}`);
// console.log(`Discount : ${discountAmount}`);
// console.log(`Final Price : ${finalPrice}`);


// function add(a,b)
// {
//     return a+b;
// }
// function multipy(number)
// {
//     return number*2;
// }

// let sum=add(2,3)
// let res=multipy(sum)
// console.log(`Sumation : ${sum}`)
// console.log(`Multiplication : ${sum} * 2 = ${res}`)


// function calculateDiscount(price, discountPercentage)
// {
//     return (price * discountPercentage) / 100;
// }
// let price=1000;

// let discount = calculateDiscount(1000, 20);

// console.log(discount);

// let final_price=price-discount;
// console.log(final_price)


// function calculateTotal(price, quantity)
// {
//     return price * quantity;
// }

// let total = calculateTotal(500, 3);

// console.log(`Total Price : ${total}`);

// function calculateDiscount(price, discountPercentage)
// {
//     return (price * discountPercentage) / 100;
// }

// let discount = calculateDiscount(total, 20);

// console.log(`Discount : ${discount}`);

// let final_price=total-discount;
// console.log(final_price)


//important task
// function calculateBasicSalary(basicSalary,bonus)
// {
//     return basicSalary+bonus;
// }
// let Total_Salary = calculateBasicSalary(30000,5000)

// console.log(`Total Salary : ${Total_Salary}`)


// function calculateTax(tax)
// {
//     return Total_Salary*tax/100;
// }
// let tax=calculateTax(10)
// console.log(`Total tax : ${tax}`)

// function calculateFinalSalary()
// {
//     return Total_Salary-tax;
// }

// let result=calculateFinalSalary()
// console.log(`Salary : ${result}`)

//important task(alternative)
// function calculateBasicSalary(basicSalary, bonus)
// {
//     return basicSalary + bonus;
// }

// let totalSalary = calculateBasicSalary(30000, 5000);

// console.log(`Total Salary : ${totalSalary}`);


// function calculateTax(totalSalary, taxPercentage)
// {
//     return totalSalary * taxPercentage / 100;
// }

// let tax = calculateTax(totalSalary, 10);

// console.log(`Total Tax : ${tax}`);


// function calculateFinalSalary(totalSalary, tax)
// {
//     return totalSalary - tax;
// }

// let result = calculateFinalSalary(totalSalary, tax);

// console.log(`Final Salary : ${result}`);


//shopping cart
function calculateProductTotal(price, quantity)
{
    return price * quantity;
}
let product1=calculateProductTotal(500,2)
let product2=calculateProductTotal(300,3)
let product3=calculateProductTotal(1000,1)

let subtotal=product1+product2+product3

console.log(`Total Price : ${subtotal}`)

if(subtotal>=2000)
{
    console.log("congraclutations! you got 20% discount ")
    let discount_price=subtotal*0.20
    console.log(`After 20% discount your price is : ${discount_price}`)
    let total_price=subtotal-discount_price
    console.log(`Your final price is : ${subtotal} - ${discount_price} = ${total_price}`)
}

else
{
    console.log("sorry no discount avaiable cause for discount you need to purchases 2000+ tk")
}