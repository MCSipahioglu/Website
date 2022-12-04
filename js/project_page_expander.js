const e_blanket=[
    document.getElementById("project_page_roboticist_blanket"),
    document.getElementById("project_page_botsmith_blanket"),
    document.getElementById("project_page_designer_blanket")];      //Append when new page.

const e_pp=[
   [document.getElementById("pp_r0"),
    document.getElementById("pp_r1"),
    document.getElementById("pp_r2"),
    document.getElementById("pp_r3"),
    document.getElementById("pp_r4"),
    document.getElementById("pp_r5"),
    document.getElementById("pp_r6")],
    
   [document.getElementById("pp_b0"),
    document.getElementById("pp_b1"),
    document.getElementById("pp_b2"),
    document.getElementById("pp_b3"),
    document.getElementById("pp_b4")],
    
   [document.getElementById("pp_d0")]];                             //Append when new project

var active_project_index=-1;
   


function Activate(page_index, project_index){
    //Code to get blanket to spawn in on the "top" of the page wrt. overflowed scrolled position.
    e_p[page_index].style.overflowY="hidden";        //Lock the page at current scroll
    e_blanket[page_index].style.transform="translateY("+ e_p[page_index].scrollTop +"px)";  //Make the blanket spawn in from the "top" of the scrolled position.
    ActivateBlanket(page_index);                    //Spawn in the blanket.

    //Activate Page[page_index][project_index]
    e_pp[page_index][project_index].style.height="calc(100%)";/* Must size %100 rather than 100vh to fix android cutoff issue*/
    e_pp[page_index][project_index].style.opacity="100%";
    e_pp[page_index][project_index].style.visibility="visible";

    active_page_index=page_index;
    active_project_index=project_index;

}

function ActivateBlanket(page_index){
    e_blanket[page_index].style.height="calc(100%)";/* Must size %100 rather than 100vh to fix android cutoff issue*/
    e_blanket[page_index].style.opacity="100%";
}



function Deactivate(page_index, project_index){
    e_blanket[page_index].style.transform="translateY(0px)";  //Reset blanket position to absolute top of the page.
    e_p[page_index].style.overflowY="scroll";        //Unlock the page at current scroll
    DeactivateBlanket(page_index);

    //Deactivate Page[page_index][project_index]
    e_pp[page_index][project_index].style.height="0vmin";
    e_pp[page_index][project_index].style.opacity="0%";
    e_pp[page_index][project_index].style.visibility="hidden";

    active_page_index=-1;
    active_project_index=-1;
}

function DeactivateBlanket(page_index){
    e_blanket[page_index].style.height="0%";
    e_blanket[page_index].style.opacity="0%";
}




