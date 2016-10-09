var person = {
    firstName: "Jan",
    lastName: "Kowalski",
    hobbies: ["sport", "technologie"],
    birthdate: new Date(1970, 2, 15),
    married: false,
    salary: 2000,
    sayHello: function() {
        return this.firstName + " " + this.lastName;
    }
};

//Konwertowanie obiektu na JSON
//null - funkcja
//4 - ilość spacji, wcięcie
var personJSON = JSON.stringify(person, null, 4);

//Konwertowanie JSON na obiekt
var personAgain = JSON.parse(personJSON);
