window.onload = function() {
    draw();
};
function draw() {
  var canvas = document.getElementById('my_canvas');
  var context = canvas.getContext('2d');

  canvas.addEventListener('click', onClick, false);
  function onClick(e){
    var rect = e.target.getBoundingClientRect();
    var mouseX =  Math.round(e.clientX - rect.left);
    var mouseY =  Math.round(e.clientY - rect.top);
    
    context.beginPath();
    context.arc(mouseX, mouseY, 30, 0, Math.PI * 2, true);
    context.lineWidth = 2;
    context.strokeStyle = "red";
    context.fillStyle = "pink";
    context.fill();
    context.stroke();
  };
};