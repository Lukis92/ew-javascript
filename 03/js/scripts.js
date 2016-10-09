//konstruktor Person
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

}

//metoda sayHello
Array.prototype.sayHello = function() {
  return this.firstName + " " + this.lastName;
};

var person1 = new Person("Jan", "Kowalski");
var person2 = new Person("Tomasz", "Nowak");

// person1.sayHello = function() {
//   return this.firstName.toUpperCase() + " " + this.lastName.toUpperCase();
// };

var arr = [];

arr.firstName = "Tablica";
arr.lastName = "Nowakowska";
