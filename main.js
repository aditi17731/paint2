canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var mouseevent="empty";
var last_postion_x,Last_postion_y;
color="black";
line_width=1;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    color=document.getElementById("color").value;
    line_width=document.getElementById("Width").value;
mouseevent="mousedown";
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
mouseevent="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
mouseevent="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){
current_postion_x=e.clientX-canvas.offsetLeft;
current_postion_y=e.clientY-canvas.offsetTop;

if (mouseevent=="mousedown") {
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=line_width;
    
    ctx.arc(current_position_x, current_position_y, 30 ,0 , 2 * Math.PI);
ctx.stroke();
}

}
function clear(){
ctx.clearRect(0,0,canvas.width,canvas.height);

}