var arr = new Array();

function Person(firstName, lastName, date_of_birth) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.date_of_birth = date_of_birth;
}

Person.prototype.sayHello = function() {
  return this.firstName + " " + this.lastName;
};

Person.prototype.getAge = function() {
  var today = new Date();
  var birthDate = new Date(this.date_of_birth);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

Person.prototype.getInitials = function() {
  return firstName[0] + ' ' + lastName[0];
};
var person1 = new Person("Jan", "Kowalski", "1992-05-22"),
  person2 = new Person("Tomasz", "Nowak");
