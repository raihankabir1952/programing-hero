"use strict";
function handleErrorResponse(response) {
    if (response.status === "success") {
        console.log("Name : ", response.data.name);
        console.log("Email : ", response.data.email);
    }
    else {
        console.log("Error : ", response.message);
    }
}
const successResponse = {
    status: "success",
    data: {
        name: "Raihan",
        email: "raihankabir1952@gmail.com"
    }
};
handleErrorResponse(successResponse);
const errorResponse = {
    status: "error",
    message: "user not found"
};
handleErrorResponse(errorResponse);
function processPayment(payment) {
    if (payment.method === "cash") {
        console.log("Payment method: Cash");
        console.log("Amount:", payment.amount);
    }
    else {
        console.log("Payment method: Card");
        console.log("Card number:", payment.cardNumber);
    }
}
const cashPayment = {
    method: "cash",
    amount: 500
};
const cardPayment = {
    method: "card",
    cardNumber: "123456789"
};
processPayment(cashPayment);
processPayment(cardPayment);
