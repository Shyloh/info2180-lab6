
window.onload = function(){
    "use strict";
    let someId = document.getElementById("Search");
    someId.addEventListener("click", doReach);
};
 function doReach () {
    let httpRequest = new XMLHttpRequest();
    let url = "https://lab6---shyloh.c9users.io/request.php/request.php?q=definition";
    httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState === 4){
            if(httpRequest.status ===200){
                let response= (httpRequest.responseText.split("</h3>")); //splits term and tern defn
                let div = document.createElement("div"); //used to remove html tags from php response
                div.innerHTML = response[1]; //selecting only the definition.
                alert(response[1]);
            }else{
                alert("There was an issue with the request.");
            }
        }
    };
    httpRequest.open("GET", url);
    httpRequest.send();
}

    
