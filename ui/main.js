//console.log("loaded");
var button = document.getElementById('hi');
button.onclick = function() {
   
   var request = new XMLHttpRequest();
   
   request.onreadystateChange = function() {
       if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200){
            var counter1 = request.responseText;
            var span = document.getElementById('count1');
            span.innerHTML = counter1.toString();
}
       }
   };
   
    
    request.open('GET', 'http://prakhar-821.imad.hasura-app.io/counter', true);
    request.send(null);
};


var submit = document.getElementById('sbt');
submit.onclick = function() {
    
    var request = new XMLHttpRequest();
   
   request.onreadystateChange = function() {
       if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200){
             var names = request.responseText();
             names = JSON.parse(names);
             var list = '';
             for (var i=0; i<names.length; i++) {
                list += '<li>' + name[i] + '<li>' ;
        
             }
        var ul = document.getElementById('namelist');
        ul.innerHTML = list;
        }
       }
   };
   
    var nameInput = document.getElementById('name');
    var name = nameInput.value; 
    request.open('GET', 'http://prakhar-821.imad.hasura-app.io/submit-name?name=' + name, true);
    request.send(null);
};
   