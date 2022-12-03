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
    ActivateBlanket(page_index);

    //Activate Page[page_index][project_index]
    e_pp[page_index][project_index].style.height="calc(100vh - 8.75vmin)";
    e_pp[page_index][project_index].style.opacity="100%";
    e_pp[page_index][project_index].style.visibility="visible";

    active_page_index=page_index;
    active_project_index=project_index;

}

function ActivateBlanket(page_index){
    e_blanket[page_index].style.height="calc(100vh - 8.75vmin)";
    e_blanket[page_index].style.opacity="100%";
}



function Deactivate(page_index, project_index){
    DeactivateBlanket(page_index);

    //Deactivate Page[page_index][project_index]
    e_pp[page_index][project_index].style.height="0vmin";
    e_pp[page_index][project_index].style.opacity="0%";
    e_pp[page_index][project_index].style.visibility="hidden";

    active_page_index=-1;
    active_project_index=-1;
}

function DeactivateBlanket(page_index){
    e_blanket[page_index].style.height="0vmin";
    e_blanket[page_index].style.opacity="0%";
}




