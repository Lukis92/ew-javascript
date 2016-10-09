(function() {

  var form = document.querySelector("#form"),
    message = document.querySelector("#message");

  function showMessage(type, msg) {

    message.className = type;
    message.innerHTML = msg;

  }

  function sendEmail(e) {

    e.preventDefault();

    var fields = form.querySelectorAll("input, textarea"),
      data = {};

    fields.forEach(function(field) {
      data[field.name] = field.value;
    });

    AJAX({
      type: form.getAttribute("method"),
      url: form.getAttribute("action"),
      data: data,
      success: function(response, xhr) {
        var res = JSON.parse(response);

        if(Array.isArray(res)){
          showMessage("error", res.join("<br>"));
        }else if("error" in res) {
          showMessage("error", res.error);
        }else if("success" in res){
          showMessage("success", res.success);
          form.removeEventListener("submit", sendEmail, false);
          form.querySelector("button").setAttribute("disabled", "disabled");
        }

      }
    });
  }

  form.addEventListener("submit", sendEmail, false);

})();
