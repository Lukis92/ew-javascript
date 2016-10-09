function sayHello(text) {
    console.log(text + " " + this.firstName + " " + this.lastName);
}

var person = {
    firstName: "Jan",
    lastName: "Kowalski"
};

//do hello została zapisana kopia funkcji sayHello
//teraz możemy ją wywołać z parametrem np. hello("Witaj");
var hello = sayHello.bind(person);

function bind(fn, obj) {
  //wycinamy dwa pierwsze parametry(sayHello,person) i bierzemy resztę
  //slice(2) wytnij wszystko od drugiego elementy wzwyż
  //arguments jest typem tablico podobnym i nie ma metody slice, dlatego też
  //zapożyczamy ją z Array.prototype i wywołujemy ją za pomocą call
  var args = Array.prototype.slice.call(arguments, 2);

  return function(){
    //call wywoła funkcję fn z this(obj)
    fn.apply(obj, args);
  };
}
var hello2 = bind(sayHello, person, "Siemanko", "laalalala");
