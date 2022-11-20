const e_blanket=[
    document.getElementById("project_page_roboticist_blanket"),
    document.getElementById("project_page_botsmith_blanket"),
    document.getElementById("project_page_inventor_blanket")];      //Append when new page.

const e_pp=[
   [document.getElementById("pp_r1"),
    document.getElementById("pp_r2"),
    document.getElementById("pp_r3"),
    document.getElementById("pp_r4")],
    
   [document.getElementById("pp_b1"),
    document.getElementById("pp_b2"),
    document.getElementById("pp_b3"),
    document.getElementById("pp_b4")],
    
   [document.getElementById("pp_i1")]];                             //Append when new project



var activeproject="zxafdfmlk";  //Jibberish to prevent misfire in case we define a function as Deactivate()



function Activate(page_index, project_index){
    ActivateBlanket(page_index);

    //Activate Page[page_index][project_index]
    e_pp[page_index][project_index].style.height="calc(100vh - 8.75vmin)";
    e_pp[page_index][project_index].style.opacity="100%";
    e_pp[page_index][project_index].style.visibility="visible";

}

function ActivateBlanket(page_index){
    e_blanket[page_index].style.height="calc(100vh - 8.75vmin)";
    e_blanket[page_index].style.opacity="100%";
}



function Deactivate(page_index, project_index){
    activeproject="zxafdfmlk";
    DeactivateBlanket(page_index);

    //Deactivate Page[page_index][project_index]
    e_pp[page_index][project_index].style.height="0vmin";
    e_pp[page_index][project_index].style.opacity="0%";
    e_pp[page_index][project_index].style.visibility="hidden";
}

function DeactivateBlanket(page_index){
    e_blanket[page_index].style.height="0vmin";
    e_blanket[page_index].style.opacity="0%";
}




