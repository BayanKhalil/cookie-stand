'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
    }

let seattle = {
    min: 23,
    max: 65,
    avgCookies: 6.3,
    customersArray: [],
    cookiesArray: [],
    total:0,
    getCustomersArray: function () {
        for (let i = 0; i < hours.length; i++) {

            this.customersArray[i] = random(this.min, this.max);
            console.log(this.customersArray);
        }

    },


    getCookiesArray: function () {
        for (let i = 0; i < this.customersArray.length; i++) {
            this.cookiesArray[i] = (Math.floor(this.customersArray[i] * this.avgCookies));
            console.log(this.cookiesArray);
            this.total+=this.cookiesArray[i]
        }
       

    },
    render:function(){
        
        let parent= document.getElementById('parent');
        console.log(parent);
        
        let shopName = document.createElement('h3');
        
        parent.appendChild(shopName);
        
   
        shopName.textContent = 'Seattle';
        
        
        let unorderedList=document.createElement('ul');
        
        parent.appendChild(unorderedList);
         
    
        for(let i =0;i<hours.length;i++){
          
          let listItem=document.createElement('li');
         
          unorderedList.appendChild(listItem);
          
          listItem.textContent = `${hours[i]}: ${this.cookiesArray[i]} cookies`
        }
    
       
        let totalItem = document.createElement('li');
    
        unorderedList.appendChild(totalItem);
    
        totalItem.textContent=`total: ${this.total} cookies`;
        
      }


}










seattle.getCustomersArray();
seattle.getCookiesArray();
seattle.render();


let tokyo = {
    min: 3,
    max: 24,
    avgCookies: 1.2,
    customersArray: [],
    cookiesArray: [],
    total:0,
    getCustomersArray: function () {
        for (let i = 0; i < hours.length; i++) {

            this.customersArray[i] = random(this.min, this.max);
            console.log(this.customersArray);
        }

    },


    getCookiesArray: function () {
        for (let i = 0; i < this.customersArray.length; i++) {
            this.cookiesArray[i] = Math.floor(this.customersArray[i] * this.avgCookies);
            console.log(this.cookiesArray);
            this.total+=this.cookiesArray[i]
        }

    },
    render:function(){
        
        let parent= document.getElementById('parent');
        console.log(parent);
        
        let shopName = document.createElement('h3');
        
        parent.appendChild(shopName);
        
   
        shopName.textContent = 'Tokyo';
        
        
        let unorderedList=document.createElement('ul');
        
        parent.appendChild(unorderedList);
         
    
        for(let i =0;i<hours.length;i++){
          
          let listItem=document.createElement('li');
         
          unorderedList.appendChild(listItem);
          
          listItem.textContent = `${hours[i]}: ${this.cookiesArray[i]} cookies`
        }
    
       
        let totalItem = document.createElement('li');
    
        unorderedList.appendChild(totalItem);
    
        totalItem.textContent=`total: ${this.total} cookies`;
        
      }


}


tokyo.getCustomersArray();
tokyo.getCookiesArray();
tokyo.render();



let dubai = {
    min: 11,
    max: 38,
    avgCookies: 3.7,
    customersArray: [],
    cookiesArray: [],
    total:0,
    getCustomersArray: function () {
        for (let i = 0; i < hours.length; i++) {

            this.customersArray[i] = random(this.min, this.max);
            console.log(this.customersArray);
        }

    },


    getCookiesArray: function () {
        for (let i = 0; i < this.customersArray.length; i++) {
            this.cookiesArray[i] =Math.floor( this.customersArray[i] * this.avgCookies);
            console.log(this.cookiesArray);
            this.total+=this.cookiesArray[i]
        }

    },
    render:function(){
        
        let parent= document.getElementById('parent');
        console.log(parent);
        
        let shopName = document.createElement('h3');
        
        parent.appendChild(shopName);
        
   
        shopName.textContent = 'Dubai';
        
        
        let unorderedList=document.createElement('ul');
        
        parent.appendChild(unorderedList);
         
    
        for(let i =0;i<hours.length;i++){
          
          let listItem=document.createElement('li');
         
          unorderedList.appendChild(listItem);
          
          listItem.textContent = `${hours[i]}: ${this.cookiesArray[i]} cookies`
        }
    
       
        let totalItem = document.createElement('li');
    
        unorderedList.appendChild(totalItem);
    
        totalItem.textContent=`total: ${this.total} cookies`;
        
      }

}

dubai.getCustomersArray();
dubai.getCookiesArray();
dubai.render();


let paris = {
    min: 20,
    max: 38,
    avgCookies: 2.3,
    customersArray: [],
    cookiesArray: [],
    total:0,
    getCustomersArray: function () {
        for (let i = 0; i < hours.length; i++) {

            this.customersArray[i] = random(this.min, this.max);
            console.log(this.customersArray);
        }

    },


    getCookiesArray: function () {
        for (let i = 0; i < this.customersArray.length; i++) {
            this.cookiesArray[i] = Math.floor(this.customersArray[i] * this.avgCookies);
            console.log(this.cookiesArray);
            this.total+=this.cookiesArray[i]
        }

    },
    render:function(){
        
        let parent= document.getElementById('parent');
        console.log(parent);
        
        let shopName = document.createElement('h3');
        
        parent.appendChild(shopName);
        
   
        shopName.textContent = 'Paris';
        
        
        let unorderedList=document.createElement('ul');
        
        parent.appendChild(unorderedList);
         
    
        for(let i =0;i<hours.length;i++){
          
          let listItem=document.createElement('li');
         
          unorderedList.appendChild(listItem);
          
          listItem.textContent = `${hours[i]}: ${this.cookiesArray[i]} cookies`
        }
    
       
        let totalItem = document.createElement('li');
    
        unorderedList.appendChild(totalItem);
    
        totalItem.textContent=`total: ${this.total} cookies`;
        
      }
    

}

paris.getCustomersArray();
paris.getCookiesArray();
paris.render();




let lima = {
    min: 2,
    max: 16,
    avgCookies: 4.6,
    customersArray: [],
    cookiesArray: [],
    total:0,
    getCustomersArray: function () {
        for (let i = 0; i < hours.length; i++) {

            this.customersArray[i] = random(this.min, this.max);
            console.log(this.customersArray);
        }

    },


    getCookiesArray: function () {
        for (let i = 0; i < this.customersArray.length; i++) {
            this.cookiesArray[i] = Math.floor(this.customersArray[i] * this.avgCookies);
            console.log(this.cookiesArray);
            this.total+=this.cookiesArray[i]
        }

    },
    render:function(){
        
        let parent= document.getElementById('parent');
        console.log(parent);
        
        let shopName = document.createElement('h3');
        
        parent.appendChild(shopName);
        
   
        shopName.textContent = 'Lima';
        
        
        let unorderedList=document.createElement('ul');
        
        parent.appendChild(unorderedList);
         
    
        for(let i =0;i<hours.length;i++){
          
          let listItem=document.createElement('li');
         
          unorderedList.appendChild(listItem);
          
          listItem.textContent = `${hours[i]}: ${this.cookiesArray[i]} cookies`
        }
    
       
        let totalItem = document.createElement('li');
    
        unorderedList.appendChild(totalItem);
    
        totalItem.textContent=`total: ${this.total} cookies`;
        
      }

}

lima.getCustomersArray();
lima.getCookiesArray();
lima.render();




