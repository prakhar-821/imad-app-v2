var button = document.getElementById('counter');
button.onClick = function() {
    
    
    
    var counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
    
};