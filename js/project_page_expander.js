const e_roboticist_blanket=document.getElementById("project_page_roboticist_blanket");
const e_botsmith_blanket=document.getElementById("project_page_botsmith_blanket");
const e_inventor_blanket=document.getElementById("project_page_inventor_blanket");

const e_project_return_container=document.getElementById("project_page_return_button_container");
const e_project_return_button=document.getElementById("project_page_return_button");

const e_pp_r1=document.getElementById("pp_r1");
const e_pp_b1=document.getElementById("pp_b1");
const e_pp_b2=document.getElementById("pp_b2");
const e_pp_b3=document.getElementById("pp_b3");
const e_pp_b4=document.getElementById("pp_b4");
const e_pp_i1=document.getElementById("pp_i1");

var activeproject="zxafdfmlk";  //Jibberish to prevent misfire in case we define a function as Deactivate()



function ActivateProjectReturn(DeactivateFunc){
    e_project_return_container.style.opacity="100%";
    e_project_return_container.style.visibility="visible";
    e_project_return_button.addEventListener("click", DeactivateFunc, true);
}

function DeactivateProjectReturn(DeactivateFunc){
    e_project_return_container.style.opacity="0%";
    e_project_return_container.style.visibility="hidden";
    e_project_return_button.removeEventListener("click", DeactivateFunc, true);
}






function ActivateRoboticistBlanket(DeactivateFunc){
    e_roboticist_blanket.style.height="calc(100vh - 8.75vmin)";
    e_roboticist_blanket.style.opacity="100%";
    ActivateProjectReturn(DeactivateFunc);
}

function DeactivateRoboticistBlanket(DeactivateFunc){
    e_roboticist_blanket.style.height="0vmin";
    e_roboticist_blanket.style.opacity="0%";
    DeactivateProjectReturn(DeactivateFunc);
}

function ActivateBotsmithBlanket(DeactivateFunc){
    e_botsmith_blanket.style.height="calc(100vh - 8.75vmin)";
    e_botsmith_blanket.style.opacity="100%";
    ActivateProjectReturn(DeactivateFunc);
}

function DeactivateBotsmithBlanket(DeactivateFunc){
    e_botsmith_blanket.style.height="0vmin";
    e_botsmith_blanket.style.opacity="0%";
    DeactivateProjectReturn(DeactivateFunc);
}

function ActivateInventorBlanket(DeactivateFunc){
    e_inventor_blanket.style.height="calc(100vh - 8.75vmin)";
    e_inventor_blanket.style.opacity="100%";
    ActivateProjectReturn(DeactivateFunc);
}

function DeactivateInventorBlanket(DeactivateFunc){
    e_inventor_blanket.style.height="0vmin";
    e_inventor_blanket.style.opacity="0%";
    DeactivateProjectReturn(DeactivateFunc);
}





function ActivateR1(){
    activeproject="R1";
    ActivateRoboticistBlanket(DeactivateR1);

    //Activate PageR1
    e_pp_r1.style.height="calc(100vh - 8.75vmin)";
    e_pp_r1.style.opacity="100%";
}

function DeactivateR1(){
    activeproject="zxafdfmlk";
    DeactivateRoboticistBlanket(DeactivateR1);

    //Deactive PageR1
    e_pp_r1.style.height="0vmin";
    e_pp_r1.style.opacity="0%";
}





function ActivateB1(){
    activeproject="B1";
    ActivateBotsmithBlanket(DeactivateB1);

    //Activate PageB1
    e_pp_b1.style.height="calc(100vh - 8.75vmin)";
    e_pp_b1.style.opacity="100%";
}

function DeactivateB1(){
    activeproject="zxafdfmlk";
    DeactivateBotsmithBlanket(DeactivateB1);

    //Deactive PageB1
    e_pp_b1.style.height="0vmin";
    e_pp_b1.style.opacity="0%";
}



function ActivateB2(){
    activeproject="B2";
    ActivateBotsmithBlanket(DeactivateB2);

    //Activate PageB2
    e_pp_b2.style.height="calc(100vh - 8.75vmin)";
    e_pp_b2.style.opacity="100%";
}

function DeactivateB2(){
    activeproject="zxafdfmlk";
    DeactivateBotsmithBlanket(DeactivateB2);

    //Deactive PageB2
    e_pp_b2.style.height="0vmin";
    e_pp_b2.style.opacity="0%";
}



function ActivateB3(){
    activeproject="B3";
    ActivateBotsmithBlanket(DeactivateB3);

    //Activate PageB3
    e_pp_b3.style.height="calc(100vh - 8.75vmin)";
    e_pp_b3.style.opacity="100%";
}

function DeactivateB3(){
    activeproject="zxafdfmlk";
    DeactivateBotsmithBlanket(DeactivateB3);

    //Deactive PageB3
    e_pp_b3.style.height="0vmin";
    e_pp_b3.style.opacity="0%";
}



function ActivateB4(){
    activeproject="B4";
    ActivateBotsmithBlanket(DeactivateB4);

    //Activate PageB4
    e_pp_b4.style.height="calc(100vh - 8.75vmin)";
    e_pp_b4.style.opacity="100%";
}

function DeactivateB4(){
    activeproject="zxafdfmlk";
    DeactivateBotsmithBlanket(DeactivateB4);

    //Deactive PageB4
    e_pp_b4.style.height="0vmin";
    e_pp_b4.style.opacity="0%";
}





function ActivateI1(){
    activeproject="I1";
    ActivateInventorBlanket(DeactivateI1);

    //Activate PageI1
    e_pp_i1.style.height="calc(100vh - 8.75vmin)";
    e_pp_i1.style.opacity="100%";
}

function DeactivateI1(){
    activeproject="zxafdfmlk";
    DeactivateInventorBlanket(DeactivateI1);

    //Deactive PageI1
    e_pp_i1.style.height="0vmin";
    e_pp_i1.style.opacity="0%";
}



