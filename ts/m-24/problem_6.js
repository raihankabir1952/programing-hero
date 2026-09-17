"use strict";
function canEdit(role) {
    if (role === "admin") {
        return true;
    }
    else if (role === "editor") {
        return true;
    }
    else {
        return false;
    }
}
console.log(canEdit("admin"));
console.log(canEdit("editor"));
console.log(canEdit("viewer"));
//type error
// console.log(canEdit("guest"))
