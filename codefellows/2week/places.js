

var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
//   console.log(hours);

var pikePlace = {
    minCust: 17,
    maxCust: 88,
    avgCookPurch: 5.2,
    // pikeHours: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'],
    outcome: [],
    total: 0,


    randCust: function() {
      return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
   },

    generateHourly: function () {
      for (i = 0; i < hours.length; i++ ){
          // this.outcome.push(Math.floor(this.randCust() * this.avgCookPurch));
          var cookies = (Math.floor(this.randCust() * this.avgCookPurch));
          this.total += cookies;
          this.outcome.push(cookies);

      };
    },
};
console.log(pikePlace.randCust());
console.log(pikePlace.generateHourly());
console.log(pikePlace.outcome);


var seaTacAirport = {
    minCust: 6,
    maxCust: 44,
    avgCookPurch: 1.2,
    // pikeHours: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'],
    outcome: [],
    total: 0,


    randCust: function() {
      return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
   },

    generateHourly: function () {
      for (i = 0; i < hours.length; i++ ){
          // this.outcome.push(Math.floor(this.randCust() * this.avgCookPurch));
          var cookies = (Math.floor(this.randCust() * this.avgCookPurch));
          this.total += cookies;
          this.outcome.push(cookies);

      };

    },

};
console.log(seaTacAirport.randCust());
console.log(seaTacAirport.generateHourly());
console.log(seaTacAirport.outcome);


var southCenterMall = {
    minCust: 11,
    maxCust: 38,
    avgCookPurch: 1.9,
    outcome: [],
    total: 0,

    randCust: function() {
      return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
      },

    generateHourly: function () {
      for (i = 0; i < hours.length; i++ ){
          // this.outcome.push(Math.floor(this.randCust() * this.avgCookPurch));
          var cookies = (Math.floor(this.randCust() * this.avgCookPurch));
          this.total += cookies;
          this.outcome.push(cookies);
      };
    },
};
console.log(southCenterMall.randCust());
console.log(southCenterMall.generateHourly());
console.log(southCenterMall.outcome);

var bellSquare = {
    minCust: 20,
    maxCust: 48,
    avgCookPurch: 3.3,
    outcome: [],
    total: 0,

    randCust: function() {
      return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
      },

    generateHourly: function () {
      for (i = 0; i < hours.length; i++ ){
          // this.outcome.push(Math.floor(this.randCust() * this.avgCookPurch));
          var cookies = (Math.floor(this.randCust() * this.avgCookPurch));
          this.total += cookies;
          this.outcome.push(cookies);
      };
    },
};
console.log(bellSquare.randCust());
console.log(bellSquare.generateHourly());
console.log(bellSquare.outcome);


var alki = {
    minCust: 3,
    maxCust: 24,
    avgCookPurch: 2.6,
    outcome: [],
    total: 0,

    randCust: function() {
      return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
      },

    generateHourly: function () {
      for (i = 0; i < hours.length; i++ ){
          // this.outcome.push(Math.floor(this.randCust() * this.avgCookPurch));
          var cookies = (Math.floor(this.randCust() * this.avgCookPurch));
          console.log(this.total);
          this.outcome.push(cookies);
          this.total += cookies;

      };

      this.outcome.push(this.total);
    },
};
console.log(alki.randCust());
console.log(alki.generateHourly());
console.log(alki.outcome);




function renderCookie() {

//Pike Place
   var hours = ['10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: '];
   var hoursEl = document.getElementById('hours');
   var ulEl = document.createElement('ul');
   ulEl.appendChild(document.createTextNode('Pike Place!'));

     for (var i = 0; i < hours.length; i++) {

       var liEl = document.createElement('li');
       liEl.textContent = hours[i] + pikePlace.outcome [i] + ' cookies';
       ulEl.appendChild(liEl);
     }
     hoursEl.appendChild(ulEl);


       var liEl = document.createElement('li');
       liEl.textContent = 'Total: ' + pikePlace.total [i] + 'cookies';
       ulEl.appendChild(liEl);

    //
    // var totalEl = document.getElementById('total')
    // var liEl = document.createElement ('li');
    // liEl.appendChild(document.createTextNode('Total: ' + pikePlace.total [i]))
    // totalEl.appendChild(liEl);







//SeaTac Airport
   var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
   var hoursEl = document.getElementById('hours');
   var ulEl = document.createElement('ul');
   ulEl.appendChild(document.createTextNode('SeaTac Airport'));

     for (var i = 0; i < hours.length; i++) {

       var liEl = document.createElement('li');
       liEl.textContent = hours[i] + seaTacAirport.outcome [i] + ' cookies';
       ulEl.appendChild(liEl);
     }
     hoursEl.appendChild(ulEl);

//South Center Mall
   var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
   var hoursEl = document.getElementById('hours');
   var ulEl = document.createElement('ul');
   ulEl.appendChild(document.createTextNode('South Center Mall'));

     for (var i = 0; i < hours.length; i++) {

       var liEl = document.createElement('li');
       liEl.textContent = hours[i] + southCenterMall.outcome [i] + ' cookies';
       ulEl.appendChild(liEl);
     }
     hoursEl.appendChild(ulEl);

//Bellevue Square
    var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
    var hoursEl = document.getElementById('hours');
    var ulEl = document.createElement('ul');
    ulEl.appendChild(document.createTextNode('Bellevue Square'));

      for (var i = 0; i < hours.length; i++) {

        var liEl = document.createElement('li');
        liEl.textContent = hours[i] + bellSquare.outcome [i] + ' cookies';
        ulEl.appendChild(liEl);
      }
      hoursEl.appendChild(ulEl);

//Alki
    var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
    var hoursEl = document.getElementById('hours');
    var ulEl = document.createElement('ul');
    ulEl.appendChild(document.createTextNode('Alki'));

        for (var i = 0; i < hours.length; i++) {

        var liEl = document.createElement('li');
        liEl.textContent = hours[i] + alki.outcome [i]  + ' cookies';
        ulEl.appendChild(liEl);
      }
      hoursEl.appendChild(ulEl);


 }

 renderCookie();
