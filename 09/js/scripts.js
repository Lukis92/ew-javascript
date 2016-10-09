function Shape(sideLengths) {

  if (!(this instanceof Shape)) {
    return new Shape(sideLengths)
  }
  this.sideLengths = sideLengths;
}

function sayHello() {
  console.log(this);
  return this.firstName + " " + this.lastName;
}

//zmienne nie oplecione żadną funkcją są globalne. Dlatego też this.firstName zwraca
//Jan
var firstName = "Jan",
  lastName = "Kowalski";

var person = {
  firstName: "Jan",
  lastName: "Kowalski",
  sayHello: sayHello
};

var person2 = {
  firstName: "Katarzyna",
  lastName: "Nowak",
  sayHello: sayHello
};

var shape = new Shape([20, 20, 20, 20, ]);
