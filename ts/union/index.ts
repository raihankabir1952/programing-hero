//string or number
function printValue(value:string | number) : void 
{
    if (typeof value === "string")
    {
        console.log(value.toUpperCase())
    }
    else
    {
        console.log(value.toFixed(2))
    }
}
printValue("hello")
printValue(25)

//User Role Checker
type Role = "admin" | "editor" | "viewer";

function checkRole(role: Role): void {
    if (role === "admin") {
        console.log("Full access");
    } else if (role === "editor") {
        console.log("Edit access");
    } else {
        console.log("Read-only access");
    }
}

checkRole("admin");
checkRole("editor");
checkRole("viewer");

//payment method
type PaymentMethod = "cash" | "card" | "mobile-banking";

function processPayment(method: PaymentMethod): void {
    if (method === "cash") {
        console.log("Processing cash payment");
    } else if (method === "card") {
        console.log("Processing card payment");
    } else {
        console.log("Processing mobile banking payment");
    }
}

processPayment("cash");
processPayment("card");
processPayment("mobile-banking");


//user id
function showUserId(id: string | number): void {
    if (typeof id === "string") {
        console.log(`User ID: ${id}`);
    } else {
        console.log(`User ID Number: ${id}`);
    }
}

showUserId("ABC123");
showUserId(123);

//product price
function calculatePrice(price: string | number) :number {
    if (typeof price === "string")
    {
        return Number(price)
    }
    else
    {
        return price
    }
}

console.log(calculatePrice(500));
console.log(calculatePrice("1000"));

//order status
type OrderStatus =
    | "pending"
    | "shipped"
    | "delivered"
    | "cancelled";

function getOrderMessage(status: OrderStatus): string {
    if (status === "pending") {
        return "Order is being processed";
    } else if (status === "shipped") {
        return "Order is on the way";
    } else if (status === "delivered") {
        return "Order delivered";
    } else {
        return "Order cancelled";
    }
}
console.log(getOrderMessage("pending"));
console.log(getOrderMessage("shipped"));
console.log(getOrderMessage("delivered"));
console.log(getOrderMessage("cancelled"));

//notification
type NotificationType = "success" | "error" | "warning";

function showNotification(type: NotificationType): void {
    if (type === "success") {
        console.log("Operation successful");
    } else if (type === "error") {
        console.log("Something went wrong");
    } else {
        console.log("Please be careful");
    }
}

showNotification("success");
showNotification("error");
showNotification("warning");

//search item
function search(value: string | string[]): void {
    if (typeof value === "string") {
        console.log(`Searching for: ${value}`);
    } else {
        console.log("Searching for multiple items");

        for (let i=0; i<value.length; i++) {
            console.log(value[i]);
        }
    }
}

search("laptop");

search(["laptop", "mouse", "keyboard"]);

//real api
function handleData(data: string | number | null): void {
    if (typeof data === "string") {
        console.log(data.toUpperCase());
    } else if (typeof data === "number") {
        console.log(data + 10);
    } else {
        console.log("No data");
    }
}

handleData("hello"); // HELLO
handleData(20);      // 30
handleData(null);    // No data