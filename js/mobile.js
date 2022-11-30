
//--------------------------------------CONSTANTS--------------------------------------
//Elements to disactivate
const e_mlanding=document.getElementById("mobile_landing");
const e_mmenu=document.getElementById("mobile_menu");


//--------------------------------------VARIABLES--------------------------------------
//Elements to activate and scroll through
const e_mn=[
    document.getElementById("mobile_menu_roboticist"),
    document.getElementById("mobile_menu_botsmith"),
    document.getElementById("mobile_menu_designer"),
    document.getElementById("mobile_menu_writer"),
    document.getElementById("mobile_menu_traveller")];      //Append the new element here.



//MAIN
//Elements for getting onclick interrupt                    //Add new element with its interrupt here.
document.getElementById("mobile_roboticist").onclick = function() {PageChangeMobile(0)};
document.getElementById("mobile_botsmith").onclick   = function() {PageChangeMobile(1)};
document.getElementById("mobile_designer").onclick   = function() {PageChangeMobile(2)};
document.getElementById("mobile_writer").onclick     = function() {PageChangeMobile(3)};
document.getElementById("mobile_traveller").onclick  = function() {PageChangeMobile(4)};





//--------------------------------------FUNCTIONS--------------------------------------
//First Loading of a Page
function PageChangeMobile(page_index){
    MobileLandingDeactivate();

    //Order the navbar menu items.
    //MobileMenuOrder(page_index);
    MobileMenuActivate();
    PageActivate(page_index);
}

//--------------------------------------FUNCTIONS--------------------------------------

//Mobile Landing (De)Activate
function MobileLandingActivate(){
    e_mlanding.style.display="block";                   //Activate landing page
}

function MobileLandingDeactivate(){
    e_mlanding.style.display="none";                    //Deactivate landing page
}



//Mobile Menu Order Set
function MobileMenuOrder(page_index){
    
    e_mn[(page_index+3)%page_count].style.transform= "translateY(calc("+ -1.78 +"*var(--navmen_y_step)))";
    e_mn[(page_index+4)%page_count].style.transform= "translateY(calc("+ -0.78 +"*var(--navmen_y_step)))";
    e_mn[(page_index)%page_count].style.transform= "translateY(calc("+ 0 +"*var(--navmen_y_step)))";
    e_mn[(page_index+1)%page_count].style.transform= "translateY(calc("+ 1 +"*var(--navmen_y_step)))";
    e_mn[(page_index+2)%page_count].style.transform= "translateY(calc("+ 2 +"*var(--navmen_y_step)))";

    e_mn[(page_index)%page_count].style.fontSize="4.5vmin";
    e_mn[(page_index+1)%page_count].style.fontSize="3vmin";
    e_mn[(page_index+2)%page_count].style.fontSize="3vmin";
    e_mn[(page_index+3)%page_count].style.fontSize="3vmin";
    e_mn[(page_index+4)%page_count].style.fontSize="3vmin";

    e_mn[(page_index)%page_count].style.opacity="100%";
    e_mn[(page_index+1)%page_count].style.opacity="30%";
    e_mn[(page_index+2)%page_count].style.opacity="0%";
    e_mn[(page_index+3)%page_count].style.opacity="0%";
    e_mn[(page_index+4)%page_count].style.opacity="30%";

    e_mn[(page_index)%page_count].style.display="block";
    e_mn[(page_index+1)%page_count].style.display="block";
    e_mn[(page_index+2)%page_count].style.display="none";
    e_mn[(page_index+3)%page_count].style.display="none";
    e_mn[(page_index+4)%page_count].style.display="block";

    e_mn[(page_index)%page_count].style.color=colors[page_index];
    e_mn[(page_index+1)%page_count].style.color="rgb(255,255,255)";
    e_mn[(page_index+2)%page_count].style.color="rgb(255,255,255)";
    e_mn[(page_index+3)%page_count].style.color="rgb(255,255,255)";
    e_mn[(page_index+4)%page_count].style.color="rgb(255,255,255)";

    e_mn[(page_index)%page_count].style.textShadow="0 0 50px "+ colors[page_index];
    e_mn[(page_index+1)%page_count].style.textShadow="none";
    e_mn[(page_index+2)%page_count].style.textShadow="none";
    e_mn[(page_index+3)%page_count].style.textShadow="none";
    e_mn[(page_index+4)%page_count].style.textShadow="none";
}





//Mobile Menu (De)Activate
function MobileMenuActivate(){
    e_mmenu.style.display="block";
}

function MobileMenuDeactivate(){
    e_mmenu.style.display="none";
}





//Activate Main Page
function PageActivateMobile(page_index){
    e_p[page_index].style.visibility="visible";
    e_p[page_index].style.opacity="100%";
}




//Redirecting Between Two Main Pages
function MobileMenuRedirect(){
    AllDeactivateMobile(active_page_index, active_project_index)
    PageDeactivateExcept(navmen_index);
    PageRedirectMobile(navmen_index);
}


function AllDeactivateMobile(active_page_index, active_project_index){
    //Deactivate Open Projects. (Must check if there is an active project to not fire the function uselessly)
    if(active_project_index != -1){
        Deactivate(active_page_index, active_project_index);
    }
}

//Redirect to Page[page_index]
function PageRedirectMobile(page_index){

    //Order the mobile menu items.
    MobileMenuOrder(page_index);
    PageActivate(page_index);
}



//Return to Landing Interrupt via S Logo
function ReturnToLanding(){
    //Deactivate All Pages
    AllDeactivateMobile();                    //Deactivate active project or CV pages.
    MobileMenuDeactivate();
    PageDeactivateExceptLanding();

    //Activate Landing
    MobileLandingActivate();
}