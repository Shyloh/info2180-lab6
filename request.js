
window.onload = function(){
    "use strict";
    let someId = document.getElementById("Search");
    let tE = document.getElementById("sV");
    someId.addEventListener("click", doReach);
    let result=document.getElementById("result");
     let search_all=document.getElementById("allDef");

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
    search_all.addEventListener("click",function(){
        let request_all = new XMLHttpRequest();
        request_all.onreadystatechange = function(){
            if(request_all.readyState === 4 && request_all.status === 200){
                let list="<ol>";
                let xml_document = request_all.responseXML;
                let words = xml_document.getElementsByTagName("definition");
                for(let i = 0; i<words.length; i++){
                    list+="<li><h3>"+words[i].getAttribute("name")+"</h3><p>"+words[i].childNodes[0].nodeValue+"</p><p> - "+words[i].getAttributeNode("author").value+"</p></li>";
                }
                list+="</ol>";
                result.innerHTML = "<h3>Result</h3>"+list;
            }
        };
        request_all.open("GET","request.php?q=&all=true",true);
        request_all.send();
    });
 
};
    
