//Array of employee demo objects
let employees = [
    {firstName:'Brian', lastName:'Wilson', job:'Developer',
    bio:'<p>Brian has worked as a developer for 20 years.</p>' + 
    '<p>He works with a variety of languages including Python, PHP and C#</p>'},
    {firstName:'Terry', lastName:'Jackson', job:'Manager',
    bio: '<p>Terry joined in 2004 and has worked as Operations and Logistics manager.</p>'},
    {firstName:'Sally', lastName:'Phelan', job:'Director',
    bio:'<p>Sally has been the director of the company for 12 years.</p><p>She has overseen 50% company growth in the last 3 years.</p>'},
    {firstName:'Claire', lastName:'Wilson', job:'Designer',
    bio:'<p>Claire has a passion for design and works alongside the developers delivering pixel perfect design.</p>'},
    {firstName:'Debbie', lastName:'Jones', job:'Designer',
    bio:'<p>Debbie is a UX specialistworking alongside our team of developers.</p>'
    + ''}
];

//div we will add a button to dynamically from the employess objects.
let buttonsMenu = document.getElementById("buttonsMenu");

//divs to SLIDE IN and FADE OUT
let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");

//var for displayDiv - will use to CHANGE HEIGHT DYNAMICALLY
let displayDiv = document.getElementById("displayDiv");

//set starting position of divs
div3.style.opacity = "1";
div3.style.left = "0";
div2.style.opacity = "0";
div2.style.left = "1200px";
div1.style.opacity = "0";
div1.style.left = "0px";

//current slide variable set to 3 - the div sitting on top of the other divs.
let currentSlide = 3;

//var stores currently displayed employee array number
let currentEmployeeNum = 0;

//buttons variable to store dynamically created buttons from employees objects.
let buttons = '';

for(i=0; i<employees.length; i++){
    let btn = '';
    btn += '<button class="btn" id="' + 'obj' + i + '">' + employees[i].firstName + ' ' + employees[i].lastName + '</button>';
    buttons += btn;
}

//dynamically created buttons added to buttonsMenu div
buttonsMenu.innerHTML = buttons;

//add event lister to document as buttons will change as the employee objects change
document.body.addEventListener('click', function(e){
    for(i=0; i<employees.length; i++){
        //create a button id used in dynamic buttons
        let btnId = 'obj' + i;
        //check if the id of source element matches the button id - display slide
        if(e.srcElement.id == btnId){
            nextSlide(i);
        }
    }
});

//on page load, fill the current div (3) with details of the first employee.
slideOnLoad();

function slideOnLoad(){
    let content = '';
    content += '<h1>' + employees[currentEmployeeNum].firstName + ' ' + employees[currentEmployeeNum].lastName + '</h1>';
    content += '<h3>Job: ' + employees[currentEmployeeNum].job + '</h3>';
    content += '<p>' + employees[currentEmployeeNum].bio + '</p>';
    div3.innerHTML = content;
}

//function called when an employee name button is clicked. 
function nextSlide(objNum){
    //if objNum matches currentEmployeeNum - don't change slides
    if(objNum == currentEmployeeNum){
        return;
    }

    //update currentEmployeeNum
    currentEmployeeNum = objNum;

    let content = '';
    content += '<h1>' + employees[i].firstName + ' ' + employees[i].lastName + '</h1>';
    content += '<h3>Job: ' + employees[i].job + '</h3>';
    content += employees[i].bio;

    //fade out current slide, slide in waiting slide, move exited slide to the right
    if(currentSlide == 3){
        div3.style.opacity = "0";
        div3.style.left = "0px";
        div2.style.opacity = "1";
        div2.style.left = "0px";
        div2.innerHTML = content;
        changeDisplayHeight(div2.offsetHeight);
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
        changeDisplayHeight(div1.offsetHeight);
        currentSlide = 1;
    }else if(currentSlide == 1){
        div3.style.opacity = "1";
        div3.style.left = "0px";
        div3.innerHTML = content;
        changeDisplayHeight(div3.offsetHeight);
        div2.style.opacity = "0";
        div2.style.left = "1200px";
        div1.style.opacity = "0";
        div1.style.left = "0px";
        currentSlide = 3;
    }

}

//takes height of current slide - changes displayDiv height.
function changeDisplayHeight(sliderHeight){
    displayDiv.style.height = sliderHeight + 'px';
}
