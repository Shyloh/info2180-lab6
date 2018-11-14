
window.onload = function(){
    "use strict";
    let someId = document.getElementById("Search");
    let tE = document.getElementById("sV");
    someId.addEventListener("click", doReach);
    let result=document.getElementById("result");

 function doReach () {
    let httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState === 4){
            if(httpRequest.status ===200){
                let response= (httpRequest.responseText.split("</h3>")); //splits term and tern defn
                let div = document.createElement("div"); //used to remove html tags from php response
                div.innerHTML = response[1]; //selecting only the definition.
                result.innerHTML = "<h2>Result</h2>"+response;
        }}
    };
    let url = "request.php?q="+ tE.value;
    httpRequest.open("GET", url, true);
    httpRequest.send();
}
 
};
    
