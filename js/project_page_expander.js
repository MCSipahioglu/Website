const e_roboticist_blanket=document.getElementById("project_page_roboticist_blanket");
const e_botsmith_blanket=document.getElementById("project_page_botsmith_blanket");
const e_inventor_blanket=document.getElementById("project_page_inventor_blanket");
e_blanket=[
    document.getElementById("project_page_roboticist_blanket"),
    document.getElementById("project_page_botsmith_blanket"),
    document.getElementById("project_page_inventor_blanket")];


const e_pp_r1=document.getElementById("pp_r1");
const e_pp_r2=document.getElementById("pp_r2");
const e_pp_r3=document.getElementById("pp_r3");
const e_pp_r4=document.getElementById("pp_r4");
const e_pp_b1=document.getElementById("pp_b1");
const e_pp_b2=document.getElementById("pp_b2");
const e_pp_b3=document.getElementById("pp_b3");
const e_pp_b4=document.getElementById("pp_b4");
const e_pp_i1=document.getElementById("pp_i1");

var activeproject="zxafdfmlk";  //Jibberish to prevent misfire in case we define a function as Deactivate()





function ActivateRoboticistBlanket(){
    e_roboticist_blanket.style.height="calc(100vh - 8.75vmin)";
    e_roboticist_blanket.style.opacity="100%";
}

function DeactivateRoboticistBlanket(){
    e_roboticist_blanket.style.height="0vmin";
    e_roboticist_blanket.style.opacity="0%";
}

function ActivateBotsmithBlanket(){
    e_botsmith_blanket.style.height="calc(100vh - 8.75vmin)";
    e_botsmith_blanket.style.opacity="100%";
}

function DeactivateBotsmithBlanket(){
    e_botsmith_blanket.style.height="0vmin";
    e_botsmith_blanket.style.opacity="0%";
}

function ActivateInventorBlanket(){
    e_inventor_blanket.style.height="calc(100vh - 8.75vmin)";
    e_inventor_blanket.style.opacity="100%";
}

function DeactivateInventorBlanket(){
    e_inventor_blanket.style.height="0vmin";
    e_inventor_blanket.style.opacity="0%";
}





function ActivateR1(){
    activeproject="R1";
    ActivateRoboticistBlanket();

    //Activate PageR1
    e_pp_r1.style.height="calc(100vh - 8.75vmin)";
    e_pp_r1.style.opacity="100%";
    e_pp_r1.style.visibility="visible";
}

function DeactivateR1(){
    activeproject="zxafdfmlk";
    DeactivateRoboticistBlanket();

    //Deactive PageR1
    e_pp_r1.style.height="0vmin";
    e_pp_r1.style.opacity="0%";
    e_pp_r1.style.visibility="hidden";
}

function ActivateR2(){
    activeproject="R2";
    ActivateRoboticistBlanket();

    //Activate PageR2
    e_pp_r2.style.height="calc(100vh - 8.75vmin)";
    e_pp_r2.style.opacity="100%";
    e_pp_r2.style.visibility="visible";
}

function DeactivateR2(){
    activeproject="zxafdfmlk";
    DeactivateRoboticistBlanket();

    //Deactive PageR2
    e_pp_r2.style.height="0vmin";
    e_pp_r2.style.opacity="0%";
    e_pp_r2.style.visibility="hidden";
}

function ActivateR3(){
    activeproject="R3";
    ActivateRoboticistBlanket();

    //Activate PageR3
    e_pp_r3.style.height="calc(100vh - 8.75vmin)";
    e_pp_r3.style.opacity="100%";
    e_pp_r3.style.visibility="visible";
}

function DeactivateR3(){
    activeproject="zxafdfmlk";
    DeactivateRoboticistBlanket();

    //Deactive PageR3
    e_pp_r3.style.height="0vmin";
    e_pp_r3.style.opacity="0%";
    e_pp_r3.style.visibility="hidden";
}

function ActivateR4(){
    activeproject="R4";
    ActivateRoboticistBlanket();

    //Activate PageR4
    e_pp_r4.style.height="calc(100vh - 8.75vmin)";
    e_pp_r4.style.opacity="100%";
    e_pp_r4.style.visibility="visible";
}

function DeactivateR4(){
    activeproject="zxafdfmlk";
    DeactivateRoboticistBlanket();

    //Deactive PageR4
    e_pp_r4.style.height="0vmin";
    e_pp_r4.style.opacity="0%";
    e_pp_r4.style.visibility="hidden";
}




function ActivateB1(){
    activeproject="B1";
    ActivateBotsmithBlanket();

    //Activate PageB1
    e_pp_b1.style.height="calc(100vh - 8.75vmin)";
    e_pp_b1.style.opacity="100%";
    e_pp_b1.style.visibility="visible";
}

function DeactivateB1(){
    activeproject="zxafdfmlk";
    DeactivateBotsmithBlanket();

    //Deactive PageB1
    e_pp_b1.style.height="0vmin";
    e_pp_b1.style.opacity="0%";
    e_pp_b1.style.visibility="hidden";
}



function ActivateB2(){
    activeproject="B2";
    ActivateBotsmithBlanket();

    //Activate PageB2
    e_pp_b2.style.height="calc(100vh - 8.75vmin)";
    e_pp_b2.style.opacity="100%";
    e_pp_b2.style.visibility="visible";
}

function DeactivateB2(){
    activeproject="zxafdfmlk";
    DeactivateBotsmithBlanket();

    //Deactive PageB2
    e_pp_b2.style.height="0vmin";
    e_pp_b2.style.opacity="0%";
    e_pp_b2.style.visibility="hidden";
}



function ActivateB3(){
    activeproject="B3";
    ActivateBotsmithBlanket();

    //Activate PageB3
    e_pp_b3.style.height="calc(100vh - 8.75vmin)";
    e_pp_b3.style.opacity="100%";
    e_pp_b3.style.visibility="visible";
}

function DeactivateB3(){
    activeproject="zxafdfmlk";
    DeactivateBotsmithBlanket();

    //Deactive PageB3
    e_pp_b3.style.height="0vmin";
    e_pp_b3.style.opacity="0%";
    e_pp_b3.style.visibility="hidden";
}



function ActivateB4(){
    activeproject="B4";
    ActivateBotsmithBlanket();

    //Activate PageB4
    e_pp_b4.style.height="calc(100vh - 8.75vmin)";
    e_pp_b4.style.opacity="100%";
    e_pp_b4.style.visibility="visible";
}

function DeactivateB4(){
    activeproject="zxafdfmlk";
    DeactivateBotsmithBlanket();

    //Deactive PageB4
    e_pp_b4.style.height="0vmin";
    e_pp_b4.style.opacity="0%";
    e_pp_b4.style.visibility="hidden";
}





function ActivateI1(){
    activeproject="I1";
    ActivateInventorBlanket();

    //Activate PageI1
    e_pp_i1.style.height="calc(100vh - 8.75vmin)";
    e_pp_i1.style.opacity="100%";
    e_pp_i1.style.visibility="visible";
}

function DeactivateI1(){
    activeproject="zxafdfmlk";
    DeactivateInventorBlanket();

    //Deactive PageI1
    e_pp_i1.style.height="0vmin";
    e_pp_i1.style.opacity="0%";
    e_pp_i1.style.visibility="hidden";
}



