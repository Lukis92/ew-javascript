var xhr = new XMLHttpRequest();

xhr.open("GET", "o-nas.html", true);

//onreadystatechange wykonuje się wtedy kiedy zmienia się readyState
xhr.onreadystatechange = function(e) {

  console.log(this.status);

    if(this.readyState === 4 && this.status === 200) {
      console.log(this.response);
    }
};

function logType(e) {
  console.log(e.type);
}
//zdefiniowanie ile jesteśmy w stanie czekać na wykonanie żądania(w milisekundach)
// xhr.timeout = 1;

xhr.onloadstart = logType;
xhr.onprogress = logType;
xhr.onabort = logType;
xhr.onload = logType;
xhr.ontimeout = logType;
xhr.onloadend = logType;

xhr.send(null);

//przerwanie wysyłania
//xhr.abort();

// UNSENT = 0
// OPENED = 1
// HEADERS_RECEIVED = 2
// LOADING = 3
// DONE = 4
