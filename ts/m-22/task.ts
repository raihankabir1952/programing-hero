//task_1:type assertion
let val: unknown = "Hello TypeScript";

// Using "as string"
let length1 = (val as string).length;
console.log(length1);

// Using angle-bracket syntax
let length2 = (<string>val).length;
console.log(length2);


//task_2:
let value: string | number
value="100"
//safe conversion
let result=Number(value) + 10
console.log(result)
// Double assertion
let riskyValue = value as unknown as number;

// Risky because type assertion does not convert
// the actual runtime value.
// The value is still a string.

//task_3:
//interface: using interface we define stracture/shape of an object
interface Product {
    title : string;
    price : number;
    inStock?:boolean
}
let product1 : Product = {
    title : "Laptop",
    price : 55000
}
let product2 : Product = {
    title : "mouse",
    price : 500,
    inStock : true
}
function showPrice(product : Product) : void{
    console.log(product.price)
}
showPrice(product1)
showPrice(product2)

//task_4:
type PaymentMethod = "cash" | "card" | "mobile";

// Interface cannot directly represent a union of literal values.
// Interface is mainly used to define the structure of objects.

interface Order {
    id: number;
    method: PaymentMethod;
}


let method: PaymentMethod = "card";


const order: Order = {
    id: 1,
    method: method
};

console.log(order);

//task_5
function getLastElement<T>(array: T[]): T {
    return array[array.length - 1];
}


const numbers = [10, 20, 30];
const strings = ["a", "b", "c"];


console.log(getLastElement(numbers));
console.log(getLastElement(strings));

//task_6
interface Container<T> {
    item: T;
}


const numberContainer: Container<number> = {
    item: 100
};


const stringContainer: Container<string> = {
    item: "Books"
};


console.log(numberContainer);
console.log(stringContainer);

//task_7
//task_8
enum OrderStatus {
    Placed = "PLACED",
    Shipped = "SHIPPED",
    Delivered = "DELIVERED",
    Cancelled = "CANCELLED"
}


function showStatus(status: OrderStatus): void {
    console.log(`Current status: ${status}`);
}


showStatus(OrderStatus.Shipped);

//task_9
const appConfig = {
    theme: "dark",
    version: 2
} as const;


// ❌ Error: Cannot assign to 'theme' because it is a read-only property.
// appConfig.theme = "light";


const colors = ["red", "green", "blue"] as const;

type Color = typeof colors[number];


let selectedColor: Color = "red";

console.log(selectedColor);


//task_10
interface Employee {
    name: string;
    id: number;
    salary: number;
    department: string;
}


// Partial<Employee>
// সব property optional হয়ে যাবে
function updateEmployee(updates: Partial<Employee>): void {
    console.log(updates);
}


updateEmployee({ name: "Rafi" });


// Pick<Employee, "name" | "id">
// শুধু name এবং id থাকবে
type EmployeeBasic = Pick<Employee, "name" | "id">;

const basicEmployee: EmployeeBasic = {
    name: "Rafi",
    id: 1
};


// Omit<Employee, "salary">
// salary বাদ দিয়ে বাকি property থাকবে
type EmployeeWithoutSalary = Omit<Employee, "salary">;

const employeeInfo: EmployeeWithoutSalary = {
    name: "Rafi",
    id: 1,
    department: "IT"
};


console.log(basicEmployee);
console.log(employeeInfo);