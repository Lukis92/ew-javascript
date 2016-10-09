(function() {

    function JSONP(url, showPage){
        var script = document.createElement("script");

        script.type = "text/javascript";
        script.async = true;
        script.src = url + ".json?page=" + showPage;

        document.head.appendChild(script);
    };

    function showData(data) {

        var pre = document.createElement("pre");

        pre.textContent = JSON.stringify(data);
        document.body.appendChild(pre);

    }

    document.querySelector("#loadData").onclick = function(e) {

      JSONP("http://uidictionary.herokuapp.com/phrases", 1);

    };

    window.showData = showData;
})();
