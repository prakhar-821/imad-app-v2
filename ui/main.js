console.log("loaded");
var button = document.getElementById('counter1');
 var span = document.getElementById('count1');
var counter = 0;
button.onClick = function() {
    
    
    
   // counter = counter + 1;
   
    //span.innerHTML = counter.toString();
    span.innerHTML = counter++;
};