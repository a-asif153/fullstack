
const pi = 3.14159;
let circumference;

document.getElementById('mysubmit').onclick = function(){
    radius = document.getElementById('userInput').value;
    radius = Number(radius)
    circumference = 2*pi*radius;
    document.getElementById('answer').textContent = `The circumference of the circle is: ${circumference}`
}