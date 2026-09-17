//API response
type SuccessResponse ={
    status : "success";
    data : {
        name : string;
        email : string
    };
};
type ErrorResponse ={
    status : "error";
    message : string
}
type APIResponse = SuccessResponse | ErrorResponse

function handleErrorResponse(response : APIResponse): void{
    if(response.status==="success"){
        console.log("Name : " ,response.data.name)
        console.log("Email : " ,response.data.email)
    }
    else{
        console.log("Error : ",response.message)
    }
}
const successResponse : SuccessResponse ={
    status : "success",
    data : {
        name : "Raihan",
        email : "raihankabir1952@gmail.com"
    }
}
handleErrorResponse(successResponse)

const errorResponse : ErrorResponse ={
    status : "error",
    message : "user not found"
}
handleErrorResponse(errorResponse)


//Payment
type CashPayment = {
    method: "cash";
    amount: number;
};

type CardPayment = {
    method: "card";
    cardNumber: string;
};

type Payment = CashPayment | CardPayment;


function processPayment(payment: Payment): void {

    if (payment.method === "cash") {

        console.log("Payment method: Cash");
        console.log("Amount:", payment.amount);

    } else {

        console.log("Payment method: Card");
        console.log("Card number:", payment.cardNumber);

    }
}


const cashPayment: Payment = {
    method: "cash",
    amount: 500
};


const cardPayment: Payment = {
    method: "card",
    cardNumber: "123456789"
};


processPayment(cashPayment);
processPayment(cardPayment);


//Three Object Union
type Admin = {
    role: "admin";
    permissions: string[];
};

type Editor = {
    role: "editor";
    canPublish: boolean;
};

type Viewer = {
    role: "viewer";
    canComment: boolean;
};


type User = Admin | Editor | Viewer;


function handleUser(user: User): void {

    if (user.role === "admin") {

        console.log("User role: Admin");
        console.log("Permissions:", user.permissions);

    } else if (user.role === "editor") {

        console.log("User role: Editor");
        console.log("Can publish:", user.canPublish);

    } else {

        console.log("User role: Viewer");
        console.log("Can comment:", user.canComment);

    }
}


const adminUser: User = {
    role: "admin",
    permissions: ["create", "update", "delete"]
};


const editorUser: User = {
    role: "editor",
    canPublish: true
};


const viewerUser: User = {
    role: "viewer",
    canComment: false
};


handleUser(adminUser);
handleUser(editorUser);
handleUser(viewerUser);
