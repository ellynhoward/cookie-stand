
var hours = ['10am ', '11am ', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm '];
var places = [];

function CookieShop (location, min, max, avg) {
  this.location = location;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.outcome = [];
  this.total = 0;
  this.generateHourly();
  places.push(this);
}

CookieShop.prototype.randCust = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

CookieShop.prototype.generateHourly = function() {
  for (var i = 0; i < hours.length; i++ ) {
    var hourly = Math.floor(this.randCust(this.min, this.max) * this.avg);
    this.total += hourly;
    this.outcome.push(hourly);
  }
};

var tblEl = document.createElement('table');
tblEl.id = 'myTable';
var topRow = ['Location', '10am ', '11am ', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', 'Total'];

function createTable () {

for (var b = 0; b < topRow.length; b++){
  var hoursEl = document.getElementById('hours');  //referencing id elements in html
  var thEl = document.createElement('th');
  // for(var z; z < topRow.length; z++){
  //   var content = content + "<td>" + topRow[z] + "</td>";
  //   trEl.textContent = content;
  // }
  thEl.textContent = topRow[b];
  tblEl.appendChild(thEl);
  hoursEl.appendChild(tblEl);
  }
}

function renderCookies() {
  var tblEl = document.getElementById('myTable');
  for (var h = 0; h < places.length; h++) {
    var taEl = document.createElement('tr');
    var tdEl = document.createElement('td');

    tdEl.textContent = places[h].location;
    taEl.appendChild(tdEl);

    for(var x = 0; x < hours.length; x++) {
      var tgEl = document.createElement('td');
      tgEl.textContent = places[h].outcome[x];
      taEl.appendChild(tgEl);
    }
      var totalEl = document.createElement('td');
      totalEl.textContent = places[h].total;
      taEl.appendChild(totalEl);


      tblEl.appendChild(taEl);
  }
  tblEl.appendChild(taEl);
};

var pikePlace = new CookieShop('Pike Place', 17, 88, 5.2);
var alki = new CookieShop('Alki', 3, 24, 2.6);
var bellSquare = new CookieShop('Bellevue Square',20, 48, 3.3);
var seaTac = new CookieShop ('SeaTac Airport', 6, 44, 1.2);
var southCenter = new CookieShop ('South Center', 11, 38, 1.9);

  //Tables
createTable();
renderCookies();





document.getElementById('user_form').addEventListener('submit', function(event){ //fire function and pass event in//
  event.preventDefault();
  // console.log(event.target.store_location.value); //what exactly is the event?..target in console log will call things from html, target is the form... store_location.value is a field in the form..this is how we get the value out of a field and into a variable in js.
  var eventStoreLocation = event.target.store_location.value;
  var eventMinCust = event.target.min_customer.value;
  var eventMaxCust = event.target.max_customer.value;
  var eventAvgCust = event.target.avg_customer.value;
  console.log(eventStoreLocation);
  console.log(eventMinCust);
  console.log(eventMaxCust);
  console.log(eventAvgCust);

});


















// function renderMonths() {
//   // Create an array of Months
//   var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//
//   var sectEl = document.getElementById('test');//referencing id elenments in html
//   // Create a new table element
//   var tblEl = document.createElement('table');//creates an empty element and binds to that variable, in the string ul creates
//   //create table row element
//   var trEl.document.createElement('tr');
//
//
// //refer to class repo
//
// //refer to code from repo for comparison
//   for (var i = 0; i < months.length; i++) {
//     // For each iteration of the loop; Create an LI element <li></li>
//     var tdEl = document.createElement('td');
//     // For each LI element; Assign the contents of the array[i] to the LI's text content
//     tdEl.textContent = months[i];
//     // Append the populated LI element back to the UL as a Child
//     trEl.appendChild(tdEl);
//   }
//   // Append the completely populated UL to the monthsEl element in index.html
//
//   tblEl.appendChild(trEl);
//   sectEl.appendChild(tblEl)
//
// }
//
// renderMonths();


//
//
// function cookies () {
// var tblEl = document.createElement('table');
//  var trEl = document.createElement('tr');
//  for (var i = 0;  i < hours.length; i++){
//    var thEl = document.createElement('th');
//    thEl.textContent = hours[i];
//    trEl.appendChild(thEl);
// }
// tblEl.appendChild(trEl);
// for (var h = 0; h < shops.length; h++) {
//  var taEl = document.createElement('tr');
//  var tgEl = document.createElement('th');
//  tgEl.textContent = shops[h].stand;
//  taEl.appendChild(tgEl);
// console.log(shops[1]);
// console.log(shops[1].hourlyTotals.length);
// for (var b=0; b < shops[h].hourlyTotals.length; b++){_____________________________________
//    var tdEl = document.createElement('td');
//    tdEl.textContent = shops[h].hourlyTotals[b];
//    taEl.appendChild(tdEl);
//  }
//  tblEl.appendChild(taEl);
// }
//  hoursEl.appendChild(tblEl);
// };
