var xhr = new XMLHttpRequest();

console.log(xhr.readyState); //0

// otwieramy połączenie
// pierwszy parametr - typ żądania
// drugi parametr - adres żądania(w naszym przypadku adres relatywny)
// trzeci parametr - czy chcemy, żeby żądanie było asynchroniczne(true/false)
xhr.open("GET", "o-nas.html", true);

console.log(xhr.readyState); //1

// wysyłamy żądanie - w przypadku GET nic nie podajemy w send
xhr.send(null);

console.log(xhr.response);
// UNSET = 0
// OPENED = 1
// HEADERS_RECEIVED = 2
// LOADING = 3
// DONE = 4
