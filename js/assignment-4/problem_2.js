"use strict";
//"Aisha's table for 4 guests is confirmed at 7:00 PM."
function formatBookingConfirmation(booking) {
    return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`;
}
console.log(formatBookingConfirmation({
    name: "Aisha",
    guests: 4,
    time: "7:30 PM"
}));
