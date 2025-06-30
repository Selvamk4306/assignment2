var st = new Date().getTime();

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function move() {
    var l = Math.random() * 200;
    var t = Math.random() * 200;
    var wh = (Math.random() * 500) + 100;  

    var shape = document.getElementById('shape');
    shape.style.left = l + "px";          
    shape.style.top = t + "px";            
    shape.style.width = wh + "px";        
    shape.style.height = wh + "px";        
  
    shape.style.display = "block";

    shape.style.backgroundColor = getRandomColor();
    st = new Date().getTime();
}

document.getElementById("shape").onclick = function () {
    // this.style.display = "none";      

    var end = new Date().getTime();        

    var tt = (end - st) / 1000;     

    alert("Your reaction time: " + tt + " seconds");

    move();
}
