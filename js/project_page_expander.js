const e_roboticist_blanket=document.getElementById("project_page_roboticist");
const e_botsmith_blanket=document.getElementById("project_page_botsmith");
const e_inventor_blanket=document.getElementById("project_page_inventor");

const e_project_return_container=document.getElementById("project_page_return_button_container");
const e_project_return_button=document.getElementById("project_page_return_button");





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
    ActivateRoboticistBlanket(DeactivateR1);
    //Activate PageR1
}

function DeactivateR1(){
    DeactivateRoboticistBlanket(DeactivateR1);
    //Deactive PageR1
}





function ActivateB1(){
    ActivateBotsmithBlanket(DeactivateB1);
    //Activate PageB1
}

function DeactivateB1(){
    DeactivateBotsmithBlanket(DeactivateB1);
    //Deactive PageB1
}



function ActivateB2(){
    ActivateBotsmithBlanket(DeactivateB2);
    //Activate PageB2
}

function DeactivateB2(){
    DeactivateBotsmithBlanket(DeactivateB2);
    //Deactive PageB2
}



function ActivateB3(){
    ActivateBotsmithBlanket(DeactivateB3);
    //Activate PageB3
}

function DeactivateB3(){
    DeactivateBotsmithBlanket(DeactivateB3);
    //Deactive PageB3
}



function ActivateB4(){
    ActivateBotsmithBlanket(DeactivateB4);
    //Activate PageB4
}

function DeactivateB4(){
    DeactivateBotsmithBlanket(DeactivateB4);
    //Deactive PageB4
}





function ActivateI1(){
    ActivateInventorBlanket(DeactivateI1);
    //Activate PageI1
}

function DeactivateI1(){
    DeactivateInventorBlanket(DeactivateI1);
    //Deactive PageI1
}