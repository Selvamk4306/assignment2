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
    var wh = (Math.random() * 500) + 100;  // <-- fix: use Math.random() as a function

    var shape = document.getElementById('shape');
    shape.style.left = l + "px";           // <-- fix: add "px"
    shape.style.top = t + "px";            // <-- fix: add "px"
    shape.style.width = wh + "px";         // <-- fix: add "px"
    shape.style.height = wh + "px";        // usually need height too

    shape.style.display = "block";

    shape.style.backgroundColor = getRandomColor();
    st = new Date().getTime();
}

document.getElementById("shape").onclick = function () {
    this.style.display = "none";           // <-- fix: correct property is style.display

    var end = new Date().getTime();        // <-- fix: add parentheses () to getTime

    var tt = (end - st) / 1000;            // <-- fix: compute difference (end - st)

    alert("Your reaction time: " + tt + " seconds");

    move();
}