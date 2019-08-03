//Array of employee demo objects
let employees = [
    {firstName:'Brian', lastName:'Wilson', job:'Developer'},
    {firstName:'Terry', lastName:'Jackson', job:'Manager'},
    {firstName:'Sally', lastName:'Phelan', job:'Director'},
    {firstName:'Claire', lastName:'Wilson', job:'Designer'},
    {firstName:'Debbie', lastName:'Jones', job:'Designer'}
];

//div we will add a button to dynamically from the employess objects.
let buttonsMenu = document.getElementById("buttonsMenu");

//divs to add content to AND slide in and out on button click.
let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");

//starting positions of divs set
div3.style.opacity = "1";
div3.style.left = "0";
div2.style.opacity = "0";
div2.style.left = "1200px";
div1.style.opacity = "0";
div1.style.left = "0px";

//current slide variable set to 3 - the div sitting on top of the other divs.
let currentSlide = 3;

//buttons variable to store dynamically created buttons from employees objects.
let buttons = '';

for(i=0; i<employees.length; i++){
    let btn = '';
    btn += '<button id="' + 'obj' + i + '">' + employees[i].firstName + ' ' + employees[i].lastName + '</button>';
    buttons += btn;
}

//dynamically created buttons added to buttonsMenu div
buttonsMenu.innerHTML = buttons;

//on page load, fill the current div (3) with details of the first employee.
slideOnLoad();

function slideOnLoad(){
    let content = '';
    content += '<h1>' + employees[0].firstName + ' ' + employees[0].lastName + '</h1>';
    content += '<h3>Job: ' + employees[0].job + '</h3>';
    div3.innerHTML = content;
}

//function called when an employee name button is clicked. 
function nextSlide(objNum){
    let content = '';
    content += '<h1>' + employees[i].firstName + ' ' + employees[i].lastName + '</h1>';
    content += '<h3>Job: ' + employees[i].job + '</h3>';

    

    if(currentSlide == 3){
        div3.style.opacity = "0";
        div3.style.left = "0px";
        div2.style.opacity = "1";
        div2.style.left = "0px";
        div2.innerHTML = content;
        div1.style.opacity = "0";
        div1.style.left = "1200px";
        currentSlide = 2;
    }else if(currentSlide == 2){
        div3.style.opacity = "0";
        div3.style.left = "1200px";
        div2.style.opacity = "0";
        div2.style.left = "0px";
        div1.style.opacity = "1";
        div1.style.left = "0px";
        div1.innerHTML = content;
        currentSlide = 1;
    }else if(currentSlide == 1){
        div3.style.opacity = "1";
        div3.style.left = "0px";
        div3.innerHTML = content;
        div2.style.opacity = "0";
        div2.style.left = "1200px";
        div1.style.opacity = "0";
        div1.style.left = "0px";
        currentSlide = 3;
    }

    console.log(currentSlide);
    
}
