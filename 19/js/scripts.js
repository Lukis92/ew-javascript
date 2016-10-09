var xhr = new XMLHttpRequest(),
  data = new FormData(),
  dProgress = document.querySelector("#download"),
  uProgress = document.querySelector("#upload");

xhr.open("POST", "odbierz.php", true);

xhr.onreadystatechange = function(e) {

  if (this.readyState === 4 && this.status >= 200 && this.status < 300) {
    console.log(this.response);
  }

};

xhr.onprogress = function(e) {
  if (e.lengthComputable) {
    //percent of loaded  event
    var percent = (e.loaded / e.total) * 100;

    console.log(percent);
    dProgress.value = percent;
  }
};

xhr.upload.onprogress = function(e) {
  if (e.lengthComputable) {
    //percent of loaded  event
    var percent = (e.loaded / e.total) * 100;

    console.log(percent);
    uProgress.value = percent;
  }
};
data.append("firstName", "Jan");
data.append("lastName", "Kowalski");

xhr.send(data);
