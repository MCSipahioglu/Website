//--------------------------------------CONSTANTS--------------------------------------
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

var navmen_og_index=0;  //Original page condition at navmen.
var navmen_index=0;


//--------------------------------------VARIABLES--------------------------------------
//Elements to activate and scroll through
const e_n=[
    document.getElementById("navbar_menu_roboticist"),
    document.getElementById("navbar_menu_botsmith"),
    document.getElementById("navbar_menu_inventor"),
    document.getElementById("navbar_menu_writer"),
    document.getElementById("navbar_menu_traveller")];      //Append the new element here.

//Pages to activate
const e_p=[
    document.getElementById("page_roboticist"),
    document.getElementById("page_botsmith"),
    document.getElementById("page_inventor"),
    document.getElementById("page_writer"),
    document.getElementById("page_traveller")];             //Append the new element here.

    const page_count=5;                                         //Add 1 here.

colors=[
    "var(--swatch_red)",
    "var(--swatch_purple)",
    "var(--swatch_orange)",
    "var(--swatch_turqoise)",
    "var(--swatch_green)"];                                 //Append the new element here.
S_ids=["logo_S_red",
    "logo_S_purple",
    "logo_S_orange",
    "logo_S_turqoise",
    "logo_S_green"];                                        //Append the new element here.

//MAIN
//Elements for getting onclick interrupt                    //Add new element with its interrupt here.
document.getElementById("swatch_roboticist").onclick = function() {PageChange(0)};
document.getElementById("swatch_botsmith").onclick     = function() {PageChange(1)};
document.getElementById("swatch_inventor").onclick     = function() {PageChange(2)};
document.getElementById("swatch_writer").onclick         = function() {PageChange(3)};
document.getElementById("swatch_traveller").onclick   = function() {PageChange(4)};





//--------------------------------------FUNCTIONS--------------------------------------
//Landing (De)Activate
function ActivateLanding(){
    e_landing_header_name.style.display="inline";             //Deactivate landing page
    e_landing_header_surname.style.display="inline";
    e_landing_swatch_wrapper.style.display="inline";
    document.addEventListener("wheel", RotateSwatch, true);
}

function DeactivateLanding(){
    e_landing_header_name.style.display="none";             //Deactivate landing page
    e_landing_header_surname.style.display="none";
    e_landing_swatch_wrapper.style.display="none";
    document.removeEventListener("wheel", RotateSwatch, true);
}

//Navbar (De)Activate
function ActivateNavbar(){
    setTimeout(() => {  e_navbar_wrapper.style.justifyContent="space-between"; e_navbar_name.style.opacity="100%"; }, 1000);//Spawn via opacity to not mess up the flex display composition
    setTimeout(() => {  e_navbar_menu.style.visibility="visible"; e_navbar_menu.style.opacity="100%"; }, 1750);     //Can't animate in from display none, instead animate in from visibility+opacity
    e_sweeper_secondary.style.display="inline";     //Also spawn in the secondary sweeper.
}

function DeactivateNavbar(){
    e_sweeper_secondary.style.display="none";     //Despawn the secondary sweeper.
    e_navbar_name.style.opacity="0%";
    e_navbar_menu.style.visibility="hidden";
    e_navbar_menu.style.opacity="0%";
}

//First Loading of a Page
function PageChange(page_index){
    DeactivateLanding();

    e_sweeper_neon.style.backgroundColor=colors[page_index];//Assign Colors
    e_sweeper_neon.style.boxShadow="0px 0px 3vmin 1.5vmin "+colors[page_index];
    e_sweeper_wrapper.style.left="-0.75vmin";               //Sweep to left
    e_sweeper_divider.style.left="-0.75vmin";               //Sweep to left
    e_logo_S.id= S_ids[page_index];

    //Order the navbar menu items.
    NavbarOrder(page_index);
    ActivateNavbar();
    navmen_og_index=page_index;
    navmen_index=page_index;
    setTimeout(() => {  PageActivate(page_index); }, 2500);
}

//Navbar Order Set
function NavbarOrder(page_index){
    
    e_n[(page_index+3)%page_count].style.transform= "translateY(calc("+ -1.78 +"*var(--navmen_y_step)))";
    e_n[(page_index+4)%page_count].style.transform= "translateY(calc("+ -0.78 +"*var(--navmen_y_step)))";
    e_n[(page_index)%page_count].style.transform= "translateY(calc("+ 0 +"*var(--navmen_y_step)))";
    e_n[(page_index+1)%page_count].style.transform= "translateY(calc("+ 1 +"*var(--navmen_y_step)))";
    e_n[(page_index+2)%page_count].style.transform= "translateY(calc("+ 2 +"*var(--navmen_y_step)))";

    e_n[(page_index)%page_count].style.fontSize="4.5vmin";
    e_n[(page_index+1)%page_count].style.fontSize="3vmin";
    e_n[(page_index+2)%page_count].style.fontSize="3vmin";
    e_n[(page_index+3)%page_count].style.fontSize="3vmin";
    e_n[(page_index+4)%page_count].style.fontSize="3vmin";

    e_n[(page_index)%page_count].style.opacity="100%";
    e_n[(page_index+1)%page_count].style.opacity="30%";
    e_n[(page_index+2)%page_count].style.opacity="0%";
    e_n[(page_index+3)%page_count].style.opacity="0%";
    e_n[(page_index+4)%page_count].style.opacity="30%";

    e_n[(page_index)%page_count].style.display="inline";
    e_n[(page_index+1)%page_count].style.display="inline";
    e_n[(page_index+2)%page_count].style.display="none";
    e_n[(page_index+3)%page_count].style.display="none";
    e_n[(page_index+4)%page_count].style.display="inline";

    e_n[(page_index)%page_count].style.color=colors[page_index];
    e_n[(page_index+1)%page_count].style.color="rgb(255,255,255)";
    e_n[(page_index+2)%page_count].style.color="rgb(255,255,255)";
    e_n[(page_index+3)%page_count].style.color="rgb(255,255,255)";
    e_n[(page_index+4)%page_count].style.color="rgb(255,255,255)";

    e_n[(page_index)%page_count].style.textShadow="0 0 50px "+ colors[page_index];
    e_n[(page_index+1)%page_count].style.textShadow="none";
    e_n[(page_index+2)%page_count].style.textShadow="none";
    e_n[(page_index+3)%page_count].style.textShadow="none";
    e_n[(page_index+4)%page_count].style.textShadow="none";
}

//Activate Main Page
function PageActivate(page_index){
    e_p[page_index].style.visibility="visible";
    e_p[page_index].style.opacity="100%";
    e_logo_S.style.pointerEvents="all";
}



//Hover+Wheel interrupt to use the navbar menu
document.addEventListener('mousemove', e => {
    if ( ((document.elementFromPoint(e.clientX, e.clientY)).id).includes("navbar_menu_") ){ //When on the navbar_menu elements:
        document.addEventListener("wheel", NavbarMenuScroll, true);       //Check for scrolling. (Scroll navbar_menu when scrolling while hovering on it.)
        document.addEventListener("click", NavbarMenuRedirect, true);     //If clicked when able to scroll. Then redirect.
    }else{
        document.removeEventListener("wheel", NavbarMenuScroll, true);    //When leaving navbar_menu area, stop listening for events and revert to original condition.
        document.removeEventListener("click", NavbarMenuRedirect, true);
        NavbarOrder(navmen_og_index);
    }
  }, {passive: true})

//Scrolling Function
function NavbarMenuScroll(event){
    var delta = Math.sign(event.deltaY);     //Normalize Scroll's deltaY (+-120 for Chrome into -+1)

    if (delta==1){         //Scroll Down
        navmen_index=((navmen_index+1)%page_count+page_count)%page_count;     //Weird modulo so that negative numbers become positive as well.
    }
    else if (delta==-1){   //Scroll Up
        navmen_index=((navmen_index-1)%page_count+page_count)%page_count;     //Weird modulo so that negative numbers become positive as well.
    }

    NavbarOrder(navmen_index);
}

//Redirecting Between Two Main Pages
function NavbarMenuRedirect(){
    DeactivateAll();                    //Deactivate active project or CV pages.
    e_sweeper_wrapper.style.left="calc(100vw + 5vmin)";         //Reset for left sweep animation. (Right Sweep)
    e_sweeper_secondary.style.left="0vw";

    setTimeout(() => {  PageDeactivateExcept(navmen_index); PageRedirect(navmen_index); }, 1000);
    /*
    if(navmen_index==0){
        setTimeout(() => {  PageDeactivateExcept(navmen_index); PageRedirect(navmen_index); }, 1000);
    }else if(navmen_index==1){
        setTimeout(() => {  PageDeactivateExceptBotsmith(); PageRedirectBotsmith(); }, 1000);
    }else if(navmen_index==2){
        setTimeout(() => {  PageDeactivateExceptInventor(); PageRedirectInventor(); }, 1000);
    }else if(navmen_index==3){
        setTimeout(() => {  PageDeactivateExceptWriter(); PageRedirectWriter(); }, 1000); 
    }else if(navmen_index==4){
        setTimeout(() => {  PageDeactivateExceptTraveller(); PageRedirectTraveller(); }, 1000);
    }
    */
}

//Close Any Open Projects or the CV
function DeactivateAll(){
    //Deactivate CV.
    CvDeactivate();

    //Deactivate Open Projects. (Must check if the function name is valid since when no projects open we don't have a corresponding function)
    var DeactivateAProject = window["Deactivate"+activeproject];
    if (typeof DeactivateAProject === "function") DeactivateAProject.apply(null,);
}

//Deactivate Pages Except Page[page_index]
function PageDeactivateExcept(page_index){
    e_p[(page_index+1)%page_count].style.transition="opacity 0s";     //Make transitions 0s. Such that the previous pages despawn immediately to not be seen during the sweeper left animation.
    e_p[(page_index+2)%page_count].style.transition="opacity 0s";
    e_p[(page_index+3)%page_count].style.transition="opacity 0s";
    e_p[(page_index+4)%page_count].style.transition="opacity 0s";

    e_p[(page_index+1)%page_count].style.visibility="hidden";
    e_p[(page_index+1)%page_count].style.opacity="0%";
    e_p[(page_index+2)%page_count].style.visibility="hidden";
    e_p[(page_index+2)%page_count].style.opacity="0%";
    e_p[(page_index+3)%page_count].style.visibility="hidden";
    e_p[(page_index+3)%page_count].style.opacity="0%";
    e_p[(page_index+4)%page_count].style.visibility="hidden";
    e_p[(page_index+4)%page_count].style.opacity="0%";
}

//Redirect to Page[page_index]
function PageRedirect(page_index){
    e_sweeper_neon.style.backgroundColor = colors[page_index];//Assign Colors
    e_sweeper_neon.style.boxShadow="0px 0px 3vmin 1.5vmin "+colors[page_index];
    e_sweeper_wrapper.style.left="-0.75vmin";                 //Sweep to left
    e_sweeper_secondary.style.left="calc(-100vw - 5.75vmin)";
    e_logo_S.id= S_ids[page_index];

    //Order the navbar menu items.
    NavbarOrder(page_index);
    navmen_og_index=page_index;
    navmen_index=page_index;

    setTimeout(() => {          //Reassign animation length after sweeping before activating the page.
        e_p[(page_index+1)%page_count].style.transition="opacity 0.4s";
        e_p[(page_index+2)%page_count].style.transition="opacity 0.4s";
        e_p[(page_index+3)%page_count].style.transition="opacity 0.4s";
        e_p[(page_index+4)%page_count].style.transition="opacity 0.4s";
    }, 400);  

    setTimeout(() => {  PageActivate(page_index); }, 1000);
}



//Return to Landing Interrupt via S Logo
function ReturnToLanding(){
    //Deactivate All Pages
    DeactivateAll();                    //Deactivate active project or CV pages.
    DeactivateNavbar();
    PageDeactivateExceptLanding();

    //Reset Swatch
    element_swatch.style.transform = "rotate(0deg)";
    current_step=0;

    //Swipe to Right
    setTimeout(() => {     
        e_sweeper_wrapper.style.left="calc(100vw + 5vmin)";         //Reset for left sweep animation. (Right Sweep)
        e_sweeper_divider.style.left="calc(100vw + 5vmin)";
    }, 400);

    setTimeout(() => {     
        e_logo_S.id= "logo_S";
    }, 995);

    //Activate Landing
    ActivateLanding();
}

//Deactivate All Pages
function PageDeactivateExceptLanding(){
    e_logo_S.style.pointerEvents="none";

    e_p[0].style.visibility="hidden";
    e_p[0].style.opacity="0%";
    e_p[1].style.visibility="hidden";
    e_p[1].style.opacity="0%";
    e_p[2].style.visibility="hidden";
    e_p[2].style.opacity="0%";
    e_p[3].style.visibility="hidden";
    e_p[3].style.opacity="0%";
    e_p[4].style.visibility="hidden";
    e_p[4].style.opacity="0%";
}




