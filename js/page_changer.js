const e_roboticist=document.getElementById("swatch_roboticist");
const e_botsmith=document.getElementById("swatch_botsmith");
const e_inventor=document.getElementById("swatch_inventor");
const e_writer=document.getElementById("swatch_writer");
const e_traveller=document.getElementById("swatch_traveller");

const e_landing_header_name=document.getElementById("landing_header_name");
const e_landing_header_surname=document.getElementById("landing_header_surname");
const e_landing_swatch_wrapper=document.getElementById("landing_swatch_wrapper");

const e_sweeper_wrapper=document.getElementById("sweeper_wrapper");
const e_sweeper_neon=document.getElementById("sweeper_neon");
const e_logo_S=document.getElementById("logo_S");

const e_navbar=document.getElementById("navbar");
const e_navbar_menu=document.getElementById("navbar_menu");
const e_navbar_name=document.getElementById("navbar_name");
const e_navbar_roboticist=document.getElementById("navbar_roboticist");
const e_navbar_botsmith=document.getElementById("navbar_botsmith");
const e_navbar_inventor=document.getElementById("navbar_inventor");
const e_navbar_writer=document.getElementById("navbar_writer");
const e_navbar_traveller=document.getElementById("navbar_traveller");


e_roboticist.addEventListener("click", page_change_roboticist);
e_botsmith.addEventListener("click", page_change_botsmith);
e_inventor.addEventListener("click", page_change_inventor);
e_writer.addEventListener("click", page_change_writer);
e_traveller.addEventListener("click", page_change_traveller);





function page_change_roboticist(event){
    e_landing_header_name.style.display="none";             //Deactivate landing page
    e_landing_header_surname.style.display="none";
    e_landing_swatch_wrapper.style.display="none";

    console.log('Roboticist Clicked!');                     //Console feedback
    e_sweeper_neon.style.backgroundColor="var(--swatch_red)"//Assign Colors
    e_sweeper_neon.style.boxShadow="0px 0px 3vmin 1.5vmin var(--swatch_red)"
    e_sweeper_wrapper.style.left="-0.75vmin";               //Sweep to left
    e_logo_S.id= "logo_S_red";


    setTimeout(() => {  e_navbar.style.justifyContent="space-between"; e_navbar_name.style.opacity="100%"; }, 1000);//Spawn in navbar
    setTimeout(() => {  e_navbar_roboticist.style.opacity="100%"; }, 1750);
                         
}

function page_change_botsmith(event){
    e_landing_header_name.style.display="none";             //Deactivate landing page
    e_landing_header_surname.style.display="none";
    e_landing_swatch_wrapper.style.display="none";

    console.log('Botsmith Clicked!');                       //Console feedback
    e_sweeper_neon.style.backgroundColor="var(--swatch_purple)"//Assign Colors
    e_sweeper_neon.style.boxShadow="0px 0px 3vmin 1.5vmin var(--swatch_purple)"
    e_sweeper_wrapper.style.left="-0.75vmin";               //Sweep to left
    e_logo_S.id= "logo_S_purple";


    setTimeout(() => {  e_navbar.style.justifyContent="space-between"; e_navbar_name.style.opacity="100%"; }, 1000);//Spawn in navbar
    setTimeout(() => {  e_navbar_botsmith.style.opacity="100%"; }, 1750);
                         
}

function page_change_inventor(event){
    e_landing_header_name.style.display="none";             //Deactivate landing page
    e_landing_header_surname.style.display="none";
    e_landing_swatch_wrapper.style.display="none";

    console.log('Inventor Clicked!');                       //Console feedback
    e_sweeper_neon.style.backgroundColor="var(--swatch_orange)"//Assign Colors
    e_sweeper_neon.style.boxShadow="0px 0px 3vmin 1.5vmin var(--swatch_orange)"
    e_sweeper_wrapper.style.left="-0.75vmin";               //Sweep to left
    e_logo_S.id= "logo_S_orange";


    setTimeout(() => {  e_navbar.style.justifyContent="space-between"; e_navbar_name.style.opacity="100%"; }, 1000);//Spawn in navbar
    setTimeout(() => {  e_navbar_inventor.style.opacity="100%"; }, 1750);
                         
}

function page_change_writer(event){
    e_landing_header_name.style.display="none";             //Deactivate landing page
    e_landing_header_surname.style.display="none";
    e_landing_swatch_wrapper.style.display="none";

    console.log('Writer Clicked!');                         //Console feedback
    e_sweeper_neon.style.backgroundColor="var(--swatch_turqoise)"//Assign Colors
    e_sweeper_neon.style.boxShadow="0px 0px 3vmin 1.5vmin var(--swatch_turqoise)"
    e_sweeper_wrapper.style.left="-0.75vmin";               //Sweep to left
    e_logo_S.id= "logo_S_turqoise";


    setTimeout(() => {  e_navbar.style.justifyContent="space-between"; e_navbar_name.style.opacity="100%"; }, 1000);//Spawn in navbar
    setTimeout(() => {  e_navbar_writer.style.opacity="100%"; }, 1750);
                         
}

function page_change_traveller(event){
    e_landing_header_name.style.display="none";             //Deactivate landing page
    e_landing_header_surname.style.display="none";
    e_landing_swatch_wrapper.style.display="none";

    console.log('Traveller Clicked!');                      //Console feedback
    e_sweeper_neon.style.backgroundColor="var(--swatch_green)"//Assign Colors
    e_sweeper_neon.style.boxShadow="0px 0px 3vmin 1.5vmin var(--swatch_green)"
    e_sweeper_wrapper.style.left="-0.75vmin";               //Sweep to left
    e_logo_S.id= "logo_S_green";


    setTimeout(() => {  e_navbar.style.justifyContent="space-between"; e_navbar_name.style.opacity="100%"; }, 1000);//Spawn in navbar
    setTimeout(() => {  e_navbar_traveller.style.opacity="100%"; }, 1750);
                         
}


