console.log("loaded");
var button = document.getElementById('hi');
var span = document.getElementById('count1');
var counter1 = 0;
button.onClick = function() {
    
    counter1 = counter1 + 1;
    
   span.innerHTML = counter1.toString();

};