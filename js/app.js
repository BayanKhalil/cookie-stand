'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


let seattle = {
    min: 23,
    max: 65,
    avgCookies: 6.3,
    customersArray: [],
    cookiesArray: [],
    getCustomersArray: function () {
        for (let i = 0; i < hours.length; i++) {

            this.customersArray[i] = randomAge(this.min, this.max);
            console.log(this.customersArray);
        }

    },


    getCookiesArray: function () {
        for (let i = 0; i < this.customersArray.length; i++) {
            this.cookiesArray[i] = this.customersArray[i] * this.avgCookies;
            console.log(this.cookiesArray);
        }

    }

}
function randomAge(min, max) {
return Math.floor(Math.random() * (max - min + 1) + min);
}
seattle.getCustomersArray();
seattle.getCookiesArray();



let tokyo = {
    min: 3,
    max: 24,
    avgCookies: 1.2,
    customersArray: [],
    cookiesArray: [],
    getCustomersArray: function () {
        for (let i = 0; i < hours.length; i++) {

            this.customersArray[i] = randomAge(this.min, this.max);
            console.log(this.customersArray);
        }

    },


    getCookiesArray: function () {
        for (let i = 0; i < this.customersArray.length; i++) {
            this.cookiesArray[i] = this.customersArray[i] * this.avgCookies;
            console.log(this.cookiesArray);
        }

    }

}
function randomAge(min, max) {
return Math.floor(Math.random() * (max - min + 1) + min);
}
tokyo.getCustomersArray();
tokyo.getCookiesArray();



let dubai = {
    min: 11,
    max: 38,
    avgCookies: 3.7,
    customersArray: [],
    cookiesArray: [],
    getCustomersArray: function () {
        for (let i = 0; i < hours.length; i++) {

            this.customersArray[i] = randomAge(this.min, this.max);
            console.log(this.customersArray);
        }

    },


    getCookiesArray: function () {
        for (let i = 0; i < this.customersArray.length; i++) {
            this.cookiesArray[i] = this.customersArray[i] * this.avgCookies;
            console.log(this.cookiesArray);
        }

    }

}
function randomAge(min, max) {
return Math.floor(Math.random() * (max - min + 1) + min);
}
dubai.getCustomersArray();
dubai.getCookiesArray();



let paris = {
    min: 20,
    max: 38,
    avgCookies: 2.3,
    customersArray: [],
    cookiesArray: [],
    getCustomersArray: function () {
        for (let i = 0; i < hours.length; i++) {

            this.customersArray[i] = randomAge(this.min, this.max);
            console.log(this.customersArray);
        }

    },


    getCookiesArray: function () {
        for (let i = 0; i < this.customersArray.length; i++) {
            this.cookiesArray[i] = this.customersArray[i] * this.avgCookies;
            console.log(this.cookiesArray);
        }

    }

}
function randomAge(min, max) {
return Math.floor(Math.random() * (max - min + 1) + min);
}
paris.getCustomersArray();
paris.getCookiesArray();




let lima = {
    min: 2,
    max: 16,
    avgCookies: 4.6,
    customersArray: [],
    cookiesArray: [],
    getCustomersArray: function () {
        for (let i = 0; i < hours.length; i++) {

            this.customersArray[i] = randomAge(this.min, this.max);
            console.log(this.customersArray);
        }

    },


    getCookiesArray: function () {
        for (let i = 0; i < this.customersArray.length; i++) {
            this.cookiesArray[i] = this.customersArray[i] * this.avgCookies;
            console.log(this.cookiesArray);
        }

    }

}
function randomAge(min, max) {
return Math.floor(Math.random() * (max - min + 1) + min);
}
lima.getCustomersArray();
lima.getCookiesArray();






let parent =document.getElementById('parent');
console.log(parent);

let image = document.createElement('img');
parent.appendChild(image);
image.setAttribute('src','img/salmon.png');


let header =document.createElement('h1');
parent.appendChild(header);
header.textContent='seattle';

let unorderedList = document.createElement('ul');
parent.appendChild(unorderedList);

for(let i =0 ; i<hours.length;i++){
    let listItem = document.createElement('li');
    unorderedList.appendChild(listItem);
    listItem.textContent=`${hours[i]} , ${seattle.cookiesArray[i]} it\'s avg cookies`;

    
   
}


let header2 =document.createElement('h1');
parent.appendChild(header2);
header2.textContent='Tokyo';
let unorderedList2 = document.createElement('ul');
parent.appendChild(unorderedList2);

for(let i =0 ; i<hours.length;i++){
    let listItem= document.createElement('li');
    unorderedList2.appendChild(listItem);
    listItem.textContent=`${hours[i]} , ${tokyo.cookiesArray[i]} it\'s avg cookies`;
   
}


let header3 =document.createElement('h1');
parent.appendChild(header3);
header3.textContent='Dubai';
let unorderedList3 = document.createElement('ul');
parent.appendChild(unorderedList3);

for(let i =0 ; i<hours.length;i++){
    let listItem= document.createElement('li');
    unorderedList3.appendChild(listItem);
    listItem.textContent=`${hours[i]} , ${dubai.cookiesArray[i]} it\'s avg cookies`;
   
}


let header4 =document.createElement('h1');
parent.appendChild(header4);
header4.textContent='Paris';
let unorderedList4 = document.createElement('ul');
parent.appendChild(unorderedList4);

for(let i =0 ; i<hours.length;i++){
    let listItem= document.createElement('li');
    unorderedList4.appendChild(listItem);
    listItem.textContent=`${hours[i]} , ${paris.cookiesArray[i]} it\'s avg cookies`;
   
}


let header5 =document.createElement('h1');
parent.appendChild(header5);
header5.textContent='Lima';
let unorderedList5 = document.createElement('ul');
parent.appendChild(unorderedList5);

for(let i =0 ; i<hours.length;i++){
    let listItem= document.createElement('li');
    unorderedList5.appendChild(listItem);
    listItem.textContent=`${hours[i]} , ${lima.cookiesArray[i]} it\'s avg cookies`;
   
}
