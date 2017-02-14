//console.log("loaded");
var button = document.getElementById('hi');
button.onclick = function() {
   
   var request = new XMLHttpRequest();
   
   request.onreadystateChange = function() {
       if(request.readyState === XMLHttpRequest.DONE) {
            if(request.status === 200){
            var counter1 = request.responseText;
            var span = document.getElementById('count1');
            span.innerHTML = counter1.toString();
}
       }
   };
   
    
    request.open('GET', 'http://prakhar-821.imad.hasura-app.io/counter', true);
    request.send(null);
};