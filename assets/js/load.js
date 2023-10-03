function queryObj() {
    var result = {}, keyValuePairs = location.search.slice(1).split("&");
    keyValuePairs.forEach(function(keyValuePair) {
        keyValuePair = keyValuePair.split('=');
        result[decodeURIComponent(keyValuePair[0])] = decodeURIComponent(keyValuePair[1]) || '';
    });
    return result;
}
var myParam = queryObj();
        console.log(myParam);
        const div = document.getElementById("chama");
        
        fetch(div.innerHTML = myParam['nav'] + ".html")
            .then(response => response.text()) 
            .then(textString => 
            {
                div.innerHTML = textString;
            });