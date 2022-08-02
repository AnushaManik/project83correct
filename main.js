var last_position_x , last_position_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "Pink";
width_of_the_line = 5;

var width = screen.width;
var new_width = screen.width - 70;
var new_height = screen.height - 300;
if(width < 992){
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";

}
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){

    console.log("my_touchstart");
    color = document.getElementById("color").value;
    width_of_the_line = document.getElementById("width_of_the_line").value;

    last_position_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_y = e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
    console.log("my_touchmove");
    current_position_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_the_line;

    console.log("Last position of x and y coordinates = ")
    console.log("x = "  + last_position_x + ",y = " + last_position_y);
    ctx.moveTo(last_position_x, last_position_y);

    console.log("Current position of x and y coordinates = ")
    console.log("x = "  + current_position_x + ",y = " + current_position_y);
    ctx.lineTo(current_position_x, current_position_y);
    ctx.stroke();

    last_position_x = current_position_x;
    last_position_y = current_position_y;
    }
    var last_position_x , last_position_y;
    var mouseEvent = "empty";

    canvas.addEventListener("mousedown", my_mousedown);
    function my_mousedown(e) {
        color = document.getElementById("color").value;
        width_of_the_line = document.getElementById("width_of_the_line");
        mouseEvent = "mousedown";

    }
    canvas.addEventListener("mousemove" , my_mousemove);
    function my_mousemove(e){
        current_position_x = e.clientX - canvas.offsetLeft;
        current_position_y = e.clientY - canvas.offsetTop;
        if(mouseEvent == "mousedown") {
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = width_of_the_line; 

            console.log("Last position of x and y coordinates = ")
    console.log("x = "  + last_position_x + ",y = " + last_position_y);
    ctx.moveTo(last_position_x, last_position_y);

    console.log("Current position of x and y coordinates = ")
    console.log("x = "  + current_position_x + ",y = " + current_position_y);
    ctx.lineTo(current_position_x, current_position_y);
    ctx.stroke();

        }
        last_position_x = current_position_x;
    last_position_y = current_position_y;
    }
    canvas.addEventListener("mouseup" , my_mouseup);
    function my_mouseup(e) {
        mouseEvent = "mouseup";
    }
    canvas.addEventListener("mouseleave" , my_mouseleave);
    function my_mouseleave(e) {
        mouseEvent = "mouseleave";
    }

    function clear_drawing()
     {
        ctx.clearRect(0,0,canvas.width,canvas.height);
    } 