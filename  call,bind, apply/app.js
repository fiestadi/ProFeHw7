let person ={
   first: 'Diana',
   last: 'Burdina',
   full: function(){
      console.log(this.first + ' ' + this.last);
   }
};
person.full();// vozvrashaet znachenie
//**************************** */
let person1 ={
   first: 'Diana',
   last: 'Burdina',
   full: function(){
      console.log(this);
   }
};
person1.full();//vozvrashaet objekt

//************call*********** */
let fruits = {
   apple: "red",
   banana: "yellow",
   orange: "orange",
   getInfo: function (fruit) {
     console.log(`The ${fruit} is ${this[fruit]}.`);
   },
 };
 //metod call vizivaet metod getInfo
 fruits.getInfo.call(fruits, "apple"); // Вывод: The apple is red.
 fruits.getInfo.call(fruits, "banana"); // Вывод: The banana is yellow.


 //metod apply 
 fruits.getInfo.apply(fruits, ["orange"]); // Вывод: The orange is orange.


// metod bind
const getAppleInfo = fruits.getInfo.bind(fruits, "apple");
getAppleInfo(); // Вывод: The apple is red.


 // konstruktor 
 function Person(firstName, lastName) {
   this.firstName = firstName;
   this.lastName = lastName;
 }
 //privetstvie
 Person.prototype.greet = function (greeting) {
   console.log(`${greeting}, ${this.firstName} ${this.lastName}!`);
 };
 let person3 = new Person("Diana", "Burdina");
let person4 = new Person("Tom", "Black");
//bind
let greetPerson3 = person3.greet.bind(person3, "Hello");
greetPerson3();
// call
person4.greet.call(person4, "Salut");

//apply
person3.greet.apply(person3, ["Holla"]);