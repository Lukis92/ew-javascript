//zmienna globalna, ponieważ nie opleciliśmy ją żadną funkcją
var firstName = "Jan";

//funkcja anonimowa - nie ma nazwy
(function() {

  var firstName = "Anna";

  function sayHello() {
    console.log(firstName);
  }

  sayHello();
})();

function fireXTimes(fn, x) {

  var counter = 0;

  return function() {

    if (++counter > x) {
      throw new Error("Przekroczono maksymalny limit wywołań: " + x);
    } else {
      fn();
    }
  };
}

var fire3times = fireXTimes(function() {
  console.log("Hej!");
}, 3);

fire3times();
