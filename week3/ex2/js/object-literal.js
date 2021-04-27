// Set up the object
var hotel = {
    name: 'Quay',
    rooms: 40,
    booked: 25,

    checkAvailability: function () {
        return this.rooms - this.booked; // Need "this" (refers keyword) because inside function
    }
};

hotel.gym = false;
hotel.pool = true;
delete hotel.name;

//   function checkAvailability() {
//       return hotel.rooms - hotel.booked;
//   }      This function works as same as the method checkAvailabilty in the hotel object !!!

// Update the HTML
var elName = document.getElementById('hotelName'); // Get element
elName.textContent = "Hotel Name: " + hotel.name;                   // Update HTML with property of the object

var elRooms = document.getElementById('rooms');    // Get element
elRooms.textContent = "Rooms Available: " + hotel.checkAvailability(); // Update HTML with propery of the object

var elPool = document.getElementById('pool'); // Get element
elPool.textContent = "Pool Available: " + pool.checkAvailability(); // Update HTML with propery of the object

console.log(checkAvailability);