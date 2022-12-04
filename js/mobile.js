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





//---------------------------------DIRECTING FUNCTIONS---------------------------------
//First Loading of a Page
function PageChangeMobile(page_index){
    MobileLandingDeactivate();

    //Order the mobile menu items.
    MobileMenuOrder(page_index);
    MobileMenuActivate();
    PageActivate(page_index);
}

//Mobile Landing (De)Activate
function MobileLandingActivate(){
    e_mlanding.style.display="block";                   //Activate landing page
}

function MobileLandingDeactivate(){
    e_mlanding.style.display="none";                    //Deactivate landing page
}



//Mobile Menu Order Set
function MobileMenuOrder(page_index){
    
    e_mn[(page_index+3)%page_count].style.transform= "translateX(calc("+ -2.04 +"*var(--mobmen_x_step)))";
    e_mn[(page_index+4)%page_count].style.transform= "translateX(calc("+ -1.02 +"*var(--mobmen_x_step)))";
    e_mn[(page_index)%page_count].style.transform= "translateX(calc("+ -0 +"*var(--mobmen_x_step)))";
    e_mn[(page_index+1)%page_count].style.transform= "translateX(calc("+ +1 +"*var(--mobmen_x_step)))";
    e_mn[(page_index+2)%page_count].style.transform= "translateX(calc("+ +2 +"*var(--mobmen_x_step)))";

    e_mn[(page_index+3)%page_count].style.textAlign= "right";
    e_mn[(page_index+4)%page_count].style.textAlign= "right";
    e_mn[(page_index)%page_count].style.textAlign= "center";
    e_mn[(page_index+1)%page_count].style.textAlign= "left";
    e_mn[(page_index+2)%page_count].style.textAlign= "left";

    e_mn[(page_index)%page_count].style.fontSize="8vmin";
    e_mn[(page_index+1)%page_count].style.fontSize="6vmin";
    e_mn[(page_index+2)%page_count].style.fontSize="6vmin";
    e_mn[(page_index+3)%page_count].style.fontSize="6vmin";
    e_mn[(page_index+4)%page_count].style.fontSize="6vmin";
    
    e_mn[(page_index)%page_count].style.paddingTop="0vmin";
    e_mn[(page_index+1)%page_count].style.paddingTop="1vmin";
    e_mn[(page_index+2)%page_count].style.paddingTop="1vmin";
    e_mn[(page_index+3)%page_count].style.paddingTop="1vmin";
    e_mn[(page_index+4)%page_count].style.paddingTop="1vmin";

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
    e_mmenu.addEventListener("touchstart", TouchStart, true);
    e_mmenu.addEventListener("touchmove", TouchMove, true);
    e_mmenu.addEventListener("touchend", TouchEnd, true);
}

function MobileMenuDeactivate(){
    e_mmenu.style.display="none";
}





//--------------------------------REDIRECTING FUNCTIONS--------------------------------
//Redirecting Between Two Main Pages
function MobileMenuRedirect(page_index){
    //Deactivate Open Projects. (Must check if there is an active project to not fire the function uselessly)
    if(active_project_index != -1){
        Deactivate(active_page_index, active_project_index);
        setTimeout(() => {  PageDeactivateExcept(page_index); PageRedirectMobile(page_index); }, 200);  //Must give delay for project deactivation animation to conclude.
    }else{
        PageDeactivateExcept(page_index);
        PageRedirectMobile(page_index);
    }
    
}


function AllDeactivateMobile(){
    //Deactivate Open Projects. (Must check if there is an active project to not fire the function uselessly)
    if(active_project_index != -1){
        Deactivate(active_page_index, active_project_index);
    }
}


//Redirect to Page[page_index]
function PageRedirectMobile(page_index){

    //Order the mobile menu items.
    MobileMenuOrder(page_index);

    e_p[(page_index+1)%page_count].style.transition="opacity 0.4s";
    e_p[(page_index+2)%page_count].style.transition="opacity 0.4s";
    e_p[(page_index+3)%page_count].style.transition="opacity 0.4s";
    e_p[(page_index+4)%page_count].style.transition="opacity 0.4s";

    PageActivate(page_index);
}



//Return to Landing Interrupt via S Logo
function ReturnToLandingMobile(){
    //Deactivate All Pages
    AllDeactivateMobile();                    //Deactivate active project or CV pages.
    MobileMenuDeactivate();
    PageDeactivateExceptLanding();

    //Activate Landing
    MobileLandingActivate();
}






//----------------------------------SWIPING FUNCTIONS----------------------------------
var touchstartX, touchendX, diffX;

function TouchStart(e){
    touchstartX=e.touches[0].screenX;

}

function TouchMove(e){
    //var diffX = startingX - e.touches[0].clientX;
    //e.preventDefault();
}

function TouchEnd(e){
    touchendX=e.changedTouches[0].screenX;
    
    var diffX = touchstartX - touchendX;
    var threshold = screen.width / 4;
    if (Math.abs(diffX) < threshold) {
        MobileMenuOrder(active_page_index);
    } else if (diffX>0){
        MobileMenuRedirect(active_page_index+1);
    } else if (diffX<0){
        MobileMenuRedirect(active_page_index-1);
    }
}






