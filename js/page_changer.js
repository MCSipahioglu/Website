//Elements for getting onclick interrupt
const e_roboticist=document.getElementById("swatch_roboticist");
const e_botsmith=document.getElementById("swatch_botsmith");
const e_inventor=document.getElementById("swatch_inventor");
const e_writer=document.getElementById("swatch_writer");
const e_traveller=document.getElementById("swatch_traveller");

//Elements to disactivate
const e_landing_header_name=document.getElementById("landing_header_name");
const e_landing_header_surname=document.getElementById("landing_header_surname");
const e_landing_swatch_wrapper=document.getElementById("landing_swatch_wrapper");

//Elements for transition to other pages
const e_sweeper_wrapper=document.getElementById("sweeper_wrapper");
const e_sweeper_divider=document.getElementById("sweeper_divider");
const e_sweeper_neon=document.getElementById("sweeper_neon");
const e_sweeper_secondary=document.getElementById("sweeper_secondary");
const e_logo_S=document.getElementById("logo_S");

//Elements to activate
const e_navbar_wrapper=document.getElementById("navbar_wrapper");
const e_navbar_menu=document.getElementById("navbar_menu");
const e_navbar_name=document.getElementById("navbar_name");

//Elements to activate and scroll through
const e_n_roboticist=document.getElementById("navbar_menu_roboticist");
const e_n_botsmith=document.getElementById("navbar_menu_botsmith");
const e_n_inventor=document.getElementById("navbar_menu_inventor");
const e_n_writer=document.getElementById("navbar_menu_writer");
const e_n_traveller=document.getElementById("navbar_menu_traveller");

const navmen_count=5;
var navmen_og_index=0;  //Keep in mind the original page condition for navbar menu.
var navmen_index=0;

//Pages to activate
const e_p_roboticist=document.getElementById("page_roboticist");
const e_p_botsmith=document.getElementById("page_botsmith");
const e_p_inventor=document.getElementById("page_inventor");
const e_p_writer=document.getElementById("page_writer");
const e_p_traveller=document.getElementById("page_traveller");

//MAIN
//Onclick interrupts to leave the landing page
e_roboticist.onclick = function() {PageChangeRoboticist();};
e_botsmith.onclick   = function() {PageChangeBotsmith()};
e_inventor.onclick   = function() {PageChangeInventor()};
e_writer.onclick     = function() {PageChangeWriter()};
e_traveller.onclick  = function() {PageChangeTraveller()};


//Hover+Wheel interrupt to use the navbar menu
document.addEventListener('mousemove', e => {
    if ( ((document.elementFromPoint(e.clientX, e.clientY)).id).includes("navbar_menu_") ){ //When on the navbar_menu elements:
        document.addEventListener("wheel", NavbarMenuScroll, true);       //Check for scrolling. (Scroll navbar_menu when scrolling while hovering on it.)
        document.addEventListener("click", NavbarMenuRedirect, true);     //If clicked when able to scroll. Then redirect.
    }else{
        document.removeEventListener("wheel", NavbarMenuScroll, true);    //When leaving navbar_menu area, stop listening for events and revert to original condition.
        document.removeEventListener("click", NavbarMenuRedirect, true);
        if(navmen_og_index==0){
            NavbarOrderRoboticist();
        }else if(navmen_og_index==1){
            NavbarOrderBotsmith();
        }else if(navmen_og_index==2){
            NavbarOrderInventor();
        }else if(navmen_og_index==3){
            NavbarOrderWriter();  
        }else if(navmen_og_index==4){
            NavbarOrderTraveller();
        }
    }
  }, {passive: true})





//FUNCTIONS
function DeactivateLanding(){
    e_landing_header_name.style.display="none";             //Deactivate landing page
    e_landing_header_surname.style.display="none";
    e_landing_swatch_wrapper.style.display="none";
    document.removeEventListener("wheel", RotateSwatch, true);
}

function ActivateNavbar(){ //Spawn in navbar
    setTimeout(() => {  e_navbar_wrapper.style.justifyContent="space-between"; e_navbar_name.style.opacity="100%"; }, 1000);//Spawn via opacity to not mess up the flex display composition
    setTimeout(() => {  e_navbar_menu.style.visibility="visible"; e_navbar_menu.style.opacity="100%"; }, 1750);     //Can't animate in from display none, instead animate in from visibility+opacity
    e_sweeper_secondary.style.display="inline";     //Also spawn in the secondary sweeper.
}


//Activating/Deactivating Pages
function PageActivateRoboticist(){
    e_p_roboticist.style.visibility="visible";
    e_p_roboticist.style.opacity="100%";
}

function PageDeactivateExceptRoboticist(){
    e_p_botsmith.style.transition="opacity 0s";     //Make transitions 0s. Such that the previous pages despawn immediately to not be seen during the sweeper left animation.
    e_p_inventor.style.transition="opacity 0s";
    e_p_writer.style.transition="opacity 0s";
    e_p_traveller.style.transition="opacity 0s";

    e_p_botsmith.style.visibility="hidden";
    e_p_botsmith.style.opacity="0%";
    e_p_inventor.style.visibility="hidden";
    e_p_inventor.style.opacity="0%";
    e_p_writer.style.visibility="hidden";
    e_p_writer.style.opacity="0%";
    e_p_traveller.style.visibility="hidden";
    e_p_traveller.style.opacity="0%";
}



function PageActivateBotsmith(){
    e_p_botsmith.style.visibility="visible";
    e_p_botsmith.style.opacity="100%";
}

function PageDeactivateExceptBotsmith(){
    e_p_roboticist.style.transition="opacity 0s";     //Make transitions 0s. Such that the previous pages despawn immediately to not be seen during the sweeper left animation.
    e_p_inventor.style.transition="opacity 0s";
    e_p_writer.style.transition="opacity 0s";
    e_p_traveller.style.transition="opacity 0s";

    e_p_roboticist.style.visibility="hidden";
    e_p_roboticist.style.opacity="0%";
    e_p_inventor.style.visibility="hidden";
    e_p_inventor.style.opacity="0%";
    e_p_writer.style.visibility="hidden";
    e_p_writer.style.opacity="0%";
    e_p_traveller.style.visibility="hidden";
    e_p_traveller.style.opacity="0%";
}



function PageActivateInventor(){
    e_p_inventor.style.visibility="visible";
    e_p_inventor.style.opacity="100%";
}

function PageDeactivateExceptInventor(){
    e_p_roboticist.style.transition="opacity 0s";     //Make transitions 0s. Such that the previous pages despawn immediately to not be seen during the sweeper left animation.
    e_p_botsmith.style.transition="opacity 0s";
    e_p_writer.style.transition="opacity 0s";
    e_p_traveller.style.transition="opacity 0s";

    e_p_roboticist.style.visibility="hidden";
    e_p_roboticist.style.opacity="0%";
    e_p_botsmith.style.visibility="hidden";
    e_p_botsmith.style.opacity="0%";
    e_p_writer.style.visibility="hidden";
    e_p_writer.style.opacity="0%";
    e_p_traveller.style.visibility="hidden";
    e_p_traveller.style.opacity="0%";
}



function PageActivateWriter(){
    e_p_writer.style.visibility="visible";
    e_p_writer.style.opacity="100%";

}

function PageDeactivateExceptWriter(){
    e_p_roboticist.style.transition="opacity 0s";     //Make transitions 0s. Such that the previous pages despawn immediately to not be seen during the sweeper left animation.
    e_p_botsmith.style.transition="opacity 0s";
    e_p_inventor.style.transition="opacity 0s";
    e_p_traveller.style.transition="opacity 0s";

    e_p_roboticist.style.visibility="hidden";
    e_p_roboticist.style.opacity="0%";
    e_p_botsmith.style.visibility="hidden";
    e_p_botsmith.style.opacity="0%";
    e_p_inventor.style.visibility="hidden";
    e_p_inventor.style.opacity="0%";
    e_p_traveller.style.visibility="hidden";
    e_p_traveller.style.opacity="0%";
}



function PageActivateTraveller(){
    e_p_traveller.style.visibility="visible";
    e_p_traveller.style.opacity="100%";

}

function PageDeactivateExceptTraveller(){
    e_p_roboticist.style.transition="opacity 0s";     //Make transitions 0s. Such that the previous pages despawn immediately to not be seen during the sweeper left animation.
    e_p_botsmith.style.transition="opacity 0s";
    e_p_inventor.style.transition="opacity 0s";
    e_p_writer.style.transition="opacity 0s";

    e_p_roboticist.style.visibility="hidden";
    e_p_roboticist.style.opacity="0%";
    e_p_botsmith.style.visibility="hidden";
    e_p_botsmith.style.opacity="0%";
    e_p_inventor.style.visibility="hidden";
    e_p_inventor.style.opacity="0%";
    e_p_writer.style.visibility="hidden";
    e_p_writer.style.opacity="0%";
}





//Navbar Menu Scroll
function NavbarOrderRoboticist(){
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

    e_n_roboticist.style.display="inline";
    e_n_botsmith.style.display="inline";
    e_n_inventor.style.display="none";
    e_n_writer.style.display="none";
    e_n_traveller.style.display="inline";

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

function NavbarOrderBotsmith(){
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

    e_n_roboticist.style.display="inline";
    e_n_botsmith.style.display="inline";
    e_n_inventor.style.display="inline";
    e_n_writer.style.display="none";
    e_n_traveller.style.display="none";

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

function NavbarOrderInventor(){
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

    e_n_roboticist.style.display="none";
    e_n_botsmith.style.display="inline";
    e_n_inventor.style.display="inline";
    e_n_writer.style.display="inline";
    e_n_traveller.style.display="none";

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

function NavbarOrderWriter(){
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

    e_n_roboticist.style.display="none";
    e_n_botsmith.style.display="none";
    e_n_inventor.style.display="inline";
    e_n_writer.style.display="inline";
    e_n_traveller.style.display="inline";

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

function NavbarOrderTraveller(){
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

    e_n_roboticist.style.display="inline";
    e_n_botsmith.style.display="none";
    e_n_inventor.style.display="none";
    e_n_writer.style.display="inline";
    e_n_traveller.style.display="inline";

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



function NavbarMenuScroll(event){
    var delta = Math.sign(event.deltaY);     //Normalize Scroll's deltaY (+-120 for Chrome into -+1)

    if (delta==1){         //Scroll Down
        navmen_index=((navmen_index+1)%navmen_count+navmen_count)%navmen_count;     //Weird modulo so that negative numbers become positive as well.
    }
    else if (delta==-1){   //Scroll Up
        navmen_index=((navmen_index-1)%navmen_count+navmen_count)%navmen_count;     //Weird modulo so that negative numbers become positive as well.
    }



    if(navmen_index==0){
        NavbarOrderRoboticist();
    }else if(navmen_index==1){
        NavbarOrderBotsmith();
    }else if(navmen_index==2){
        NavbarOrderInventor();
    }else if(navmen_index==3){
        NavbarOrderWriter();  
    }else if(navmen_index==4){
        NavbarOrderTraveller();
    }
}





//First Spawning Of a Page
function PageChangeRoboticist(event){
    DeactivateLanding();

    e_sweeper_neon.style.backgroundColor="var(--swatch_red)"//Assign Colors
    e_sweeper_neon.style.boxShadow="0px 0px 3vmin 1.5vmin var(--swatch_red)"
    e_sweeper_wrapper.style.left="-0.75vmin";               //Sweep to left
    e_sweeper_divider.style.left="-0.75vmin";               //Sweep to left
    e_logo_S.id= "logo_S_red";

    //Order the navbar menu items.
    NavbarOrderRoboticist();
    ActivateNavbar();
    navmen_og_index=0;
    navmen_index=0;
    setTimeout(() => {  PageActivateRoboticist(); }, 2500);
          
}

function PageChangeBotsmith(event){
    DeactivateLanding();

    e_sweeper_neon.style.backgroundColor="var(--swatch_purple)"//Assign Colors
    e_sweeper_neon.style.boxShadow="0px 0px 3vmin 1.5vmin var(--swatch_purple)"
    e_sweeper_wrapper.style.left="-0.75vmin";               //Sweep to left
    e_sweeper_divider.style.left="-0.75vmin";               //Sweep to left
    e_logo_S.id= "logo_S_purple";

    //Order the navbar menu items.
    NavbarOrderBotsmith();
    ActivateNavbar();
    navmen_og_index=1;
    navmen_index=1;
    setTimeout(() => {  PageActivateBotsmith(); }, 2500);
    
}

function PageChangeInventor(event){
    DeactivateLanding();

    e_sweeper_neon.style.backgroundColor="var(--swatch_orange)"//Assign Colors
    e_sweeper_neon.style.boxShadow="0px 0px 3vmin 1.5vmin var(--swatch_orange)"
    e_sweeper_wrapper.style.left="-0.75vmin";               //Sweep to left
    e_sweeper_divider.style.left="-0.75vmin";               //Sweep to left
    e_logo_S.id= "logo_S_orange";

    //Order the navbar menu items.
    NavbarOrderInventor();
    ActivateNavbar();
    navmen_og_index=2;
    navmen_index=2;
    setTimeout(() => {  PageActivateInventor(); }, 2500);
}

function PageChangeWriter(event){
    DeactivateLanding();

    e_sweeper_neon.style.backgroundColor="var(--swatch_turqoise)"//Assign Colors
    e_sweeper_neon.style.boxShadow="0px 0px 3vmin 1.5vmin var(--swatch_turqoise)"
    e_sweeper_wrapper.style.left="-0.75vmin";               //Sweep to left
    e_sweeper_divider.style.left="-0.75vmin";               //Sweep to left
    e_logo_S.id= "logo_S_turqoise";

    //Order the navbar menu items.
    NavbarOrderWriter();
    ActivateNavbar();
    navmen_og_index=3;
    navmen_index=3;
    setTimeout(() => {  PageActivateWriter(); }, 2500);
}

function PageChangeTraveller(event){
    DeactivateLanding();

    e_sweeper_neon.style.backgroundColor="var(--swatch_green)"//Assign Colors
    e_sweeper_neon.style.boxShadow="0px 0px 3vmin 1.5vmin var(--swatch_green)"
    e_sweeper_wrapper.style.left="-0.75vmin";               //Sweep to left
    e_sweeper_divider.style.left="-0.75vmin";               //Sweep to left
    e_logo_S.id= "logo_S_green";

    //Order the navbar menu items.
    NavbarOrderTraveller();
    ActivateNavbar();
    navmen_og_index=4;
    navmen_index=4;
    setTimeout(() => {  PageActivateTraveller(); }, 2500);      
}





//Redirecting to that page.
function PageRedirectRoboticist(event){
    e_sweeper_neon.style.backgroundColor="var(--swatch_red)"//Assign Colors
    e_sweeper_neon.style.boxShadow="0px 0px 3vmin 1.5vmin var(--swatch_red)"
    e_sweeper_wrapper.style.left="-0.75vmin";               //Sweep to left
    e_sweeper_secondary.style.left="-100vw";
    e_logo_S.id= "logo_S_red";

    //Order the navbar menu items.
    NavbarOrderRoboticist();
    navmen_og_index=0;
    navmen_index=0;

    setTimeout(() => {          //Reassign animation length after sweeping before activating the page.
    e_p_botsmith.style.transition="opacity 0.4s";
    e_p_inventor.style.transition="opacity 0.4s";
    e_p_writer.style.transition="opacity 0.4s";
    e_p_traveller.style.transition="opacity 0.4s";}, 400);  

    setTimeout(() => {  PageActivateRoboticist(); }, 1000);       
}

function PageRedirectBotsmith(event){
    e_sweeper_neon.style.backgroundColor="var(--swatch_purple)"//Assign Colors
    e_sweeper_neon.style.boxShadow="0px 0px 3vmin 1.5vmin var(--swatch_purple)"
    e_sweeper_wrapper.style.left="-0.75vmin";               //Sweep to left
    e_sweeper_secondary.style.left="-100vw";
    e_logo_S.id= "logo_S_purple";

    //Order the navbar menu items.
    NavbarOrderBotsmith();
    navmen_og_index=1;
    navmen_index=1;

    setTimeout(() => {          //Reassign animation length after sweeping before activating the page.
        e_p_roboticist.style.transition="opacity 0.4s";
        e_p_inventor.style.transition="opacity 0.4s";
        e_p_writer.style.transition="opacity 0.4s";
        e_p_traveller.style.transition="opacity 0.4s";}, 400);
    
    setTimeout(() => {  PageActivateBotsmith(); }, 1000);
}

function PageRedirectInventor(event){
    e_sweeper_neon.style.backgroundColor="var(--swatch_orange)"//Assign Colors
    e_sweeper_neon.style.boxShadow="0px 0px 3vmin 1.5vmin var(--swatch_orange)"
    e_sweeper_wrapper.style.left="-0.75vmin";               //Sweep to left
    e_sweeper_secondary.style.left="-100vw";
    e_logo_S.id= "logo_S_orange";

    //Order the navbar menu items.
    NavbarOrderInventor();
    navmen_og_index=2;
    navmen_index=2;

    setTimeout(() => {          //Reassign animation length after sweeping before activating the page.
        e_p_roboticist.style.transition="opacity 0.4s";
        e_p_botsmith.style.transition="opacity 0.4s";
        e_p_writer.style.transition="opacity 0.4s";
        e_p_traveller.style.transition="opacity 0.4s";}, 400);

    setTimeout(() => {  PageActivateInventor(); }, 1000);        
}

function PageRedirectWriter(event){
    e_sweeper_neon.style.backgroundColor="var(--swatch_turqoise)"//Assign Colors
    e_sweeper_neon.style.boxShadow="0px 0px 3vmin 1.5vmin var(--swatch_turqoise)"
    e_sweeper_wrapper.style.left="-0.75vmin";               //Sweep to left
    e_sweeper_secondary.style.left="-100vw";
    e_logo_S.id= "logo_S_turqoise";

    //Order the navbar menu items.
    NavbarOrderWriter();
    navmen_og_index=3;
    navmen_index=3;
    
    setTimeout(() => {          //Reassign animation length after sweeping before activating the page.
        e_p_roboticist.style.transition="opacity 0.4s";
        e_p_botsmith.style.transition="opacity 0.4s";
        e_p_inventor.style.transition="opacity 0.4s";
        e_p_traveller.style.transition="opacity 0.4s";}, 400);

    setTimeout(() => {  PageActivateWriter(); }, 1000);
}

function PageRedirectTraveller(event){
    e_sweeper_neon.style.backgroundColor="var(--swatch_green)"//Assign Colors
    e_sweeper_neon.style.boxShadow="0px 0px 3vmin 1.5vmin var(--swatch_green)"
    e_sweeper_wrapper.style.left="-0.75vmin";               //Sweep to left
    e_sweeper_secondary.style.left="-100vw";
    e_logo_S.id= "logo_S_green";

    //Order the navbar menu items.
    NavbarOrderTraveller();
    navmen_og_index=4;
    navmen_index=4;

    setTimeout(() => {          //Reassign animation length after sweeping before activating the page.
        e_p_roboticist.style.transition="opacity 0.4s";
        e_p_botsmith.style.transition="opacity 0.4s";
        e_p_inventor.style.transition="opacity 0.4s";
        e_p_writer.style.transition="opacity 0.4s";}, 400);

    setTimeout(() => {  PageActivateTraveller(); }, 1000); 
}




function NavbarMenuRedirect(event){
    DeactivateAll();                    //Deactivate active project or CV pages.
    e_sweeper_wrapper.style.left="calc(100vw + 5vmin)";         //Reset for left sweep animation. (Right Sweep)
    e_sweeper_secondary.style.left="0vw";

    if(navmen_index==0){
        setTimeout(() => {  PageDeactivateExceptRoboticist(); PageRedirectRoboticist(); }, 1000);
    }else if(navmen_index==1){
        setTimeout(() => {  PageDeactivateExceptBotsmith(); PageRedirectBotsmith(); }, 1000);
    }else if(navmen_index==2){
        setTimeout(() => {  PageDeactivateExceptInventor(); PageRedirectInventor(); }, 1000);
    }else if(navmen_index==3){
        setTimeout(() => {  PageDeactivateExceptWriter(); PageRedirectWriter(); }, 1000); 
    }else if(navmen_index==4){
        setTimeout(() => {  PageDeactivateExceptTraveller(); PageRedirectTraveller(); }, 1000);
    }
}


function DeactivateAll(){
    //Deactivate CV.
    CvDeactivate();

    //Deactivate Open Projects. (Must check if the function name is valid since when no projects open we don't have a corresponding function)
    var DeactivateAProject = window["Deactivate"+activeproject];
    if (typeof DeactivateAProject === "function") DeactivateAProject.apply(null,);
}



