const element_roboticist=document.getElementById("swatch_roboticist");
const element_botsmith=document.getElementById("swatch_botsmith");
const element_inventor=document.getElementById("swatch_inventor");
const element_writer=document.getElementById("swatch_writer");
const element_traveller=document.getElementById("swatch_traveller");

const element_landing_header_name=document.getElementById("landing_header_name");
const element_landing_header_surname=document.getElementById("landing_header_surname");

const element_sweeper_wrapper=document.getElementById("sweeper_wrapper");


element_roboticist.addEventListener("click", page_change_roboticist);
function page_change_roboticist(event){
    console.log('Roboticist Clicked!');
    element_sweeper_wrapper.style.left="-0.75vmin";


}





