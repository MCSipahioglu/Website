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

const e_navbar_wrapper=document.getElementById("navbar_wrapper");
const e_navbar_menu=document.getElementById("navbar_menu");
const e_navbar_name=document.getElementById("navbar_name");


const e_n_roboticist=document.getElementById("navbar_roboticist");
const e_n_botsmith=document.getElementById("navbar_botsmith");
const e_n_inventor=document.getElementById("navbar_inventor");
const e_n_writer=document.getElementById("navbar_writer");
const e_n_traveller=document.getElementById("navbar_traveller");
const e_navmen_count=5;



e_roboticist.onclick = function() {page_change_roboticist();};
e_botsmith.onclick   = function() {page_change_botsmith()};
e_inventor.onclick   = function() {page_change_inventor()};
e_writer.onclick     = function() {page_change_writer()};
e_traveller.onclick  = function() {page_change_traveller()};



function deactivate_landing(){
    e_landing_header_name.style.display="none";             //Deactivate landing page
    e_landing_header_surname.style.display="none";
    e_landing_swatch_wrapper.style.display="none";
}

function activate_navbar(){
    setTimeout(() => {  e_navbar_wrapper.style.justifyContent="space-between"; e_navbar_name.style.opacity="100%"; }, 1000);//Spawn in navbar
    setTimeout(() => {  e_navbar_menu.style.opacity="100%"; }, 1750);
}

function navbar_roboticist_order(){
    e_n_writer.style.transform= "translateY(calc("+ -1.78 +"*var(--navmen_y_step)))";
    e_n_traveller.style.transform= "translateY(calc("+ -0.78 +"*var(--navmen_y_step)))";
    e_n_roboticist.style.transform= "translateY(calc("+ 0 +"*var(--navmen_y_step)))";
    e_n_botsmith.style.transform= "translateY(calc("+ 1 +"*var(--navmen_y_step)))";
    e_n_inventor.style.transform= "translateY(calc("+ 2 +"*var(--navmen_y_step)))";

    e_n_roboticist.style.fontSize="4.5vmin";
    e_n_botsmith.style.fontSize="3vmin";
    e_n_inventor.style.fontSize="3vmin";
    e_n_writer.style.fontSize="3vmin";
    e_n_traveller.style.fontSize="3vmin";

    e_n_roboticist.style.opacity="100%";
    e_n_botsmith.style.opacity="30%";
    e_n_inventor.style.opacity="0%";
    e_n_writer.style.opacity="0%";
    e_n_traveller.style.opacity="30%";

    e_n_roboticist.style.color="var(--swatch_red)";
    e_n_botsmith.style.color="rgb(255,255,255)";
    e_n_inventor.style.color="rgb(255,255,255)";
    e_n_writer.style.color="rgb(255,255,255)";
    e_n_traveller.style.color="rgb(255,255,255)";

    e_n_roboticist.style.textShadow="0 0 50px var(--swatch_red)";
    e_n_botsmith.style.textShadow="none";
    e_n_inventor.style.textShadow="none";
    e_n_writer.style.textShadow="none";
    e_n_traveller.style.textShadow="none";
}

function navbar_botsmith_order(){
    e_n_traveller.style.transform= "translateY(calc("+ -1.78 +"*var(--navmen_y_step)))";
    e_n_roboticist.style.transform= "translateY(calc("+ -0.78 +"*var(--navmen_y_step)))";
    e_n_botsmith.style.transform= "translateY(calc("+ 0 +"*var(--navmen_y_step)))";
    e_n_inventor.style.transform= "translateY(calc("+ 1 +"*var(--navmen_y_step)))";
    e_n_writer.style.transform= "translateY(calc("+ 2 +"*var(--navmen_y_step)))";

    e_n_roboticist.style.fontSize="3vmin";
    e_n_botsmith.style.fontSize="4.5vmin";
    e_n_inventor.style.fontSize="3vmin";
    e_n_writer.style.fontSize="3vmin";
    e_n_traveller.style.fontSize="3vmin";

    e_n_roboticist.style.opacity="30%";
    e_n_botsmith.style.opacity="100%";
    e_n_inventor.style.opacity="30%";
    e_n_writer.style.opacity="0%";
    e_n_traveller.style.opacity="0%";

    e_n_roboticist.style.color="rgb(255,255,255)";
    e_n_botsmith.style.color="var(--swatch_purple)";
    e_n_inventor.style.color="rgb(255,255,255)";
    e_n_writer.style.color="rgb(255,255,255)";
    e_n_traveller.style.color="rgb(255,255,255)";


    e_n_roboticist.style.textShadow="none";
    e_n_botsmith.style.textShadow="0 0 50px var(--swatch_purple)";
    e_n_inventor.style.textShadow="none";
    e_n_writer.style.textShadow="none";
    e_n_traveller.style.textShadow="none";
}

function navbar_inventor_order(){
    e_n_roboticist.style.transform= "translateY(calc("+ -1.78 +"*var(--navmen_y_step)))";
    e_n_botsmith.style.transform= "translateY(calc("+ -0.78 +"*var(--navmen_y_step)))";
    e_n_inventor.style.transform= "translateY(calc("+ 0 +"*var(--navmen_y_step)))";
    e_n_writer.style.transform= "translateY(calc("+ 1 +"*var(--navmen_y_step)))";
    e_n_traveller.style.transform= "translateY(calc("+ 2 +"*var(--navmen_y_step)))";

    e_n_roboticist.style.fontSize="3vmin";
    e_n_botsmith.style.fontSize="3vmin";
    e_n_inventor.style.fontSize="4.5vmin";
    e_n_writer.style.fontSize="3vmin";
    e_n_traveller.style.fontSize="3vmin";

    e_n_roboticist.style.opacity="0%";
    e_n_botsmith.style.opacity="30%";
    e_n_inventor.style.opacity="100%";
    e_n_writer.style.opacity="30%";
    e_n_traveller.style.opacity="0%";

    e_n_roboticist.style.color="rgb(255,255,255)";
    e_n_botsmith.style.color="rgb(255,255,255)";
    e_n_inventor.style.color="var(--swatch_orange)"; 
    e_n_writer.style.color="rgb(255,255,255)";
    e_n_traveller.style.color="rgb(255,255,255)";

    e_n_roboticist.style.textShadow="none";
    e_n_botsmith.style.textShadow="none";
    e_n_inventor.style.textShadow="0 0 50px var(--swatch_orange)";
    e_n_writer.style.textShadow="none";
    e_n_traveller.style.textShadow="none";
}

function navbar_writer_order(){
    e_n_botsmith.style.transform= "translateY(calc("+ -1.78 +"*var(--navmen_y_step)))";
    e_n_inventor.style.transform= "translateY(calc("+ -0.78 +"*var(--navmen_y_step)))";
    e_n_writer.style.transform= "translateY(calc("+ 0 +"*var(--navmen_y_step)))";
    e_n_traveller.style.transform= "translateY(calc("+ 1 +"*var(--navmen_y_step)))";
    e_n_roboticist.style.transform= "translateY(calc("+ 2 +"*var(--navmen_y_step)))";

    e_n_roboticist.style.fontSize="3vmin";
    e_n_botsmith.style.fontSize="3vmin";
    e_n_inventor.style.fontSize="3vmin";
    e_n_writer.style.fontSize="4.5vmin";
    e_n_traveller.style.fontSize="3vmin";

    e_n_roboticist.style.opacity="0%";
    e_n_botsmith.style.opacity="0%";
    e_n_inventor.style.opacity="30%";
    e_n_writer.style.opacity="100%";
    e_n_traveller.style.opacity="30%";

    e_n_roboticist.style.color="rgb(255,255,255)";
    e_n_botsmith.style.color="rgb(255,255,255)";
    e_n_inventor.style.color="rgb(255,255,255)";
    e_n_writer.style.color="var(--swatch_turqoise)";
    e_n_traveller.style.color="rgb(255,255,255)";

    e_n_roboticist.style.textShadow="none";
    e_n_botsmith.style.textShadow="none";
    e_n_inventor.style.textShadow="none";
    e_n_writer.style.textShadow="0 0 50px var(--swatch_turqoise)";
    e_n_traveller.style.textShadow="none";  
}

function navbar_traveller_order(){
    e_n_inventor.style.transform= "translateY(calc("+ -1.78 +"*var(--navmen_y_step)))";
    e_n_writer.style.transform= "translateY(calc("+ -0.78 +"*var(--navmen_y_step)))";
    e_n_traveller.style.transform= "translateY(calc("+ 0 +"*var(--navmen_y_step)))";
    e_n_roboticist.style.transform= "translateY(calc("+ 1 +"*var(--navmen_y_step)))";
    e_n_botsmith.style.transform= "translateY(calc("+ 2 +"*var(--navmen_y_step)))";

    e_n_roboticist.style.fontSize="3vmin";
    e_n_botsmith.style.fontSize="3vmin";
    e_n_inventor.style.fontSize="3vmin";
    e_n_writer.style.fontSize="3vmin";
    e_n_traveller.style.fontSize="4.5vmin";

    e_n_roboticist.style.opacity="30%";
    e_n_botsmith.style.opacity="0%";
    e_n_inventor.style.opacity="0%";
    e_n_writer.style.opacity="30%";
    e_n_traveller.style.opacity="100%";

    e_n_roboticist.style.color="rgb(255,255,255)";
    e_n_botsmith.style.color="rgb(255,255,255)";
    e_n_inventor.style.color="rgb(255,255,255)";
    e_n_writer.style.color="rgb(255,255,255)";
    e_n_traveller.style.color="var(--swatch_green)"; 

    e_n_roboticist.style.textShadow="none";
    e_n_botsmith.style.textShadow="none";
    e_n_inventor.style.textShadow="none";
    e_n_writer.style.textShadow="none";
    e_n_traveller.style.textShadow="0 0 50px var(--swatch_green)";
}





function page_change_roboticist(event){
    deactivate_landing();

    console.log('Roboticist Clicked!');                     //Console feedback
    e_sweeper_neon.style.backgroundColor="var(--swatch_red)"//Assign Colors
    e_sweeper_neon.style.boxShadow="0px 0px 3vmin 1.5vmin var(--swatch_red)"
    e_sweeper_wrapper.style.left="-0.75vmin";               //Sweep to left
    e_logo_S.id= "logo_S_red";

    //Order the navbar menu items.
    navbar_roboticist_order();
    activate_navbar();                        
}

function page_change_botsmith(event){
    deactivate_landing();

    console.log('Botsmith Clicked!');                       //Console feedback
    e_sweeper_neon.style.backgroundColor="var(--swatch_purple)"//Assign Colors
    e_sweeper_neon.style.boxShadow="0px 0px 3vmin 1.5vmin var(--swatch_purple)"
    e_sweeper_wrapper.style.left="-0.75vmin";               //Sweep to left
    e_logo_S.id= "logo_S_purple";

    //Order the navbar menu items.
    navbar_botsmith_order();
    activate_navbar();    
}

function page_change_inventor(event){
    deactivate_landing();

    console.log('Inventor Clicked!');                       //Console feedback
    e_sweeper_neon.style.backgroundColor="var(--swatch_orange)"//Assign Colors
    e_sweeper_neon.style.boxShadow="0px 0px 3vmin 1.5vmin var(--swatch_orange)"
    e_sweeper_wrapper.style.left="-0.75vmin";               //Sweep to left
    e_logo_S.id= "logo_S_orange";

    //Order the navbar menu items.
    navbar_inventor_order();
    activate_navbar();                       
}

function page_change_writer(event){
    deactivate_landing();

    console.log('Writer Clicked!');                         //Console feedback
    e_sweeper_neon.style.backgroundColor="var(--swatch_turqoise)"//Assign Colors
    e_sweeper_neon.style.boxShadow="0px 0px 3vmin 1.5vmin var(--swatch_turqoise)"
    e_sweeper_wrapper.style.left="-0.75vmin";               //Sweep to left
    e_logo_S.id= "logo_S_turqoise";

    //Order the navbar menu items.
    navbar_writer_order();
    activate_navbar();                   
}

function page_change_traveller(event){
    deactivate_landing();

    console.log('Traveller Clicked!');                      //Console feedback
    e_sweeper_neon.style.backgroundColor="var(--swatch_green)"//Assign Colors
    e_sweeper_neon.style.boxShadow="0px 0px 3vmin 1.5vmin var(--swatch_green)"
    e_sweeper_wrapper.style.left="-0.75vmin";               //Sweep to left
    e_logo_S.id= "logo_S_green";

    //Order the navbar menu items.
    navbar_traveller_order();
    activate_navbar();                     
}


