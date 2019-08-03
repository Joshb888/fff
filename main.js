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