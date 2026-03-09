const form = document.getElementById("bookingForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(e){

e.preventDefault();

let checkin = new Date(document.getElementById("checkin").value);
let checkout = new Date(document.getElementById("checkout").value);
let today = new Date();

today.setHours(0,0,0,0);

if(checkin < today){
message.style.color="red";
message.textContent="Check-in date cannot be in the past.";
return;
}

if(checkout <= checkin){
message.style.color="red";
message.textContent="Check-out date must be after check-in date.";
return;
}

message.style.color="green";
message.textContent="Booking submitted successfully!";

form.reset();

});