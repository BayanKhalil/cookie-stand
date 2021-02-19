'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let stores = [];
let shopForm = document.getElementById('shopForm');
function Location(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avgCookies = avg;
    this.customersArray = [];
    this.cookiesArray = [];
    this.total = 0
    this.totalCookiesPerHour = 0;
    stores.push(this);


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
// Location.prototype.render = function () {
//   let parent = document.getElementById('parent');
//   console.log(parent);

//   let shopName = document.createElement('h3');

//   parent.appendChild(shopName);


//   shopName.textContent = this.name;


//   let unorderedList = document.createElement('ul');

//   parent.appendChild(unorderedList);


//   for (let i = 0; i < hours.length; i++) {

//     let listItem = document.createElement('li');

//     unorderedList.appendChild(listItem);

//     listItem.textContent = `${hours[i]}: ${this.cookiesArray[i]} cookies`
//   }


//   let totalItem = document.createElement('li');

//   unorderedList.appendChild(totalItem);

//   totalItem.textContent = `total: ${this.total} cookies`;

// }



let seattle = new Location('seattle', 23, 65, 6.3);
let tokyo = new Location('tokyo', 3, 24, 1.2);
let dubai = new Location('dubai', 11, 38, 3.7);
let paris = new Location('paris', 20, 38, 2.3);
let lima = new Location('lima', 2, 16, 4.6);

seattle.getCustomersArray()
seattle.getCookiesArray()
// seattle.render()

tokyo.getCustomersArray()
tokyo.getCookiesArray()
// tokyo.render()

dubai.getCustomersArray()
dubai.getCookiesArray()
// dubai.render()

paris.getCustomersArray()
paris.getCookiesArray()
// paris.render()

lima.getCustomersArray()
lima.getCookiesArray()
// lima.render()



let parent = document.getElementById('parent')
let table = document.createElement('table')
parent.appendChild(table)

function creatHeaderRow() {
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
}

creatHeaderRow();
function creatRows(){
    for (let i = 0; i < stores.length; i++) {
        let dataRow = document.createElement('tr');
        table.appendChild(dataRow)
        let td1 = document.createElement('td');
        dataRow.appendChild(td1);
        td1.textContent = stores[i].name;
        for (let x = 0; x < hours.length; x++) {
            let td2 = document.createElement('td');
            td2.textContent = stores[i].cookiesArray[x];
            dataRow.appendChild(td2);

        }
        let td3 = document.createElement('td')
        dataRow.appendChild(td3);
        td3.textContent = stores[i].total;
    }

}
creatRows();


function creatFooterRow() {
    let footerRow = document.createElement('tr');
    table.appendChild(footerRow);
    let th1 = document.createElement('th');
    th1.textContent = 'totals';
    footerRow.appendChild(th1);
    let grandTotal = 0;
    for (let i = 0; i < hours.length; i++) {
        let totalEachHour = 0;
        for (let j = 0; j < stores.length; j++) {
            totalEachHour += stores[j].cookiesArray[i]


        }
        grandTotal += totalEachHour


        let th2 = document.createElement('th');
        footerRow.appendChild(th2);
        th2.textContent = totalEachHour;
    }
    let th3 = document.createElement('th');
    footerRow.appendChild(th3);
    th3.textContent = grandTotal



}

creatFooterRow();




  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  