// Create the template for objects that are hotels
function Hotel(name, rooms, booked, pool) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.pool = pool;
    this.checkAvailability = function() {
      return this.rooms - this.booked;
    };
  }
  
  
  // Create two hotel objects
  var quayHotel = new Hotel('Quay', 40, 25, true);
  var parkHotel = new Hotel('Park', 120, 77, false);
  var queensHotel = new Hotel('Queens', 1000, 26, TextTrackCue);
  
  
  // Update the HTML for the page
  var details1 = quayHotel.name + ' rooms: ';
      details1 += quayHotel.checkAvailability();
  var elHotel1 = document.getElementById('hotel1');
  elHotel1.textContent = details1;
  
  var details2 = parkHotel.name + ' rooms: ';
      details2 += parkHotel.checkAvailability();
  var elHotel2 = document.getElementById('hotel2');
  elHotel2.textContent = details2;

  var details3 = queensHotel.name + ' rooms: ';
      details3 += queensHotel.checkAvailability();
  var elHotel3 = document.getElementById('hotel3');
  elHotel3.textContent = details3;