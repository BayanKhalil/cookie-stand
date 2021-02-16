'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function Location(name, min, max, avg, customersArray, cookiesArray, total) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgCookies = avg;
  this.customersArray = customersArray;
  this.cookiesArray = cookiesArray;
  this.total = total
  

}
Location.prototype.getCustomersArray = function () {
  for (let i = 0; i < hours.length; i++) {
    this.customersArray[i] = random(this.min, this.max);
    console.log(this.customersArray);
  }
}
Location.prototype.getCookiesArray = function () {
  for (let i = 0; i < this.customersArray.length; i++) {
    this.cookiesArray[i] = (Math.floor(this.customersArray[i] * this.avgCookies));
    console.log(this.cookiesArray);
    this.total += this.cookiesArray[i]
  }

}
Location.prototype.render = function () {
  let parent = document.getElementById('parent');
  console.log(parent);

  let shopName = document.createElement('h3');

  parent.appendChild(shopName);


  shopName.textContent = this.name;


  let unorderedList = document.createElement('ul');

  parent.appendChild(unorderedList);


  for (let i = 0; i < hours.length; i++) {

    let listItem = document.createElement('li');

    unorderedList.appendChild(listItem);

    listItem.textContent = `${hours[i]}: ${this.cookiesArray[i]} cookies`
  }


  let totalItem = document.createElement('li');

  unorderedList.appendChild(totalItem);

  totalItem.textContent = `total: ${this.total} cookies`;

}



let seattle = new Location('seattle', 23, 65, 6.3, [], [], 0);
let tokyo = new Location('tokyo', 3, 24, 1.2, [], [], 0);
let dubai = new Location('dubai', 11, 38, 3.7, [], [], 0);
let paris = new Location('paris', 20, 38, 2.3, [], [], 0);
let lima = new Location('lima', 2, 16, 4.6, [], [], 0);

seattle.getCustomersArray()
seattle.getCookiesArray()
seattle.render()

tokyo.getCustomersArray()
tokyo.getCookiesArray()
tokyo.render()

dubai.getCustomersArray()
dubai.getCookiesArray()
dubai.render()

paris.getCustomersArray()
paris.getCookiesArray()
paris.render()

lima.getCustomersArray()
lima.getCookiesArray()
lima.render()



let parent = document.getElementById('parent')
let table = document.createElement('table')
parent.appendChild(table)

// creatHeaderRow

  let headerRow = document.createElement('tr');
  table.appendChild(headerRow);
  let th = document.createElement('th');
  th.textContent = 'time';
  headerRow.appendChild(th);
  for (var i = 0; i < hours.length; i++) {
    th = document.createElement('th');
    th.textContent = hours[i];
    headerRow.appendChild(th);

  }
  th = document.createElement('th');
  th.textContent = 'Location Total';
  headerRow.appendChild(th);
  console.log(table);




