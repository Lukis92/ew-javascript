function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

Person.prototype.sayHello = function() {
  return this.firstName + " " + this.lastName;
};

var person = {
  firstName: "Jan",
  lastName: "Kowalski",
  age: 34
};

var person2 = new Person("Anna", "Nowak", 25)
  // if ("age" in person) {
  //   console.log(person.age);
  // }

for (var key in person2) {

  if (person2.hasOwnProperty(key)) {
    console.log(key);
  }
}
