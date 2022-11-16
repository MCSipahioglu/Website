//For changing the page language
const e_logos_lang =document.getElementById("logos_lang");
const e_logo_eng=document.getElementById("logo_eng");
const e_logo_tr=document.getElementById("logo_tr");
const e_lang_dropdown=document.getElementById("lang_dropdown");

var current_lang=0; //0 for ENG, 1 for TR.



e_logo_eng.addEventListener("click", dropdown_lang_when_eng, true);     //Page boots up on English




function dropdown_lang_when_eng(){
    e_logos_lang.addEventListener("mouseleave", dropdown_left_when_eng, true);   //Also start listening for exit condition

    //When clicked drop down dropdown menu.
    e_lang_dropdown.style.height="9.15vmin";
    e_lang_dropdown.style.visibility="visible";
    e_lang_dropdown.style.opacity="100%";

    e_logo_tr.style.visibility="visible";
    e_logo_tr.style.opacity="100%";

    //Start listening for lang change click or exit mouseleave
    e_logo_tr.addEventListener("click", lang_change_tr, true);  
}

function dropdown_despawn_when_eng(){
    e_logo_tr.style.visibility="hidden";
    e_logo_tr.style.opacity="0%";

    e_lang_dropdown.style.height="0vmin";
    e_lang_dropdown.style.visibility="hidden";
    e_lang_dropdown.style.opacity="0%";
    
    e_logo_tr.removeEventListener("click", lang_change_tr, true);
    e_logos_lang.removeEventListener("mouseleave", dropdown_left_when_eng, true);
}

function dropdown_left_when_eng(event){
    
    // if leaving dropdown menu. (If the element we leave to isn't contained in the dropdown menu.)
    if(e_logos_lang.contains(event.relatedTarget)==0){
        dropdown_despawn_when_eng();
    }
}





function dropdown_lang_when_tr(){
    e_logos_lang.addEventListener("mouseleave", dropdown_left_when_tr, true);   //Also start listening for exit condition

    //When clicked drop down dropdown menu.
    e_lang_dropdown.style.height="9.15vmin";
    e_lang_dropdown.style.visibility="visible";
    e_lang_dropdown.style.opacity="100%";

    e_logo_eng.style.visibility="visible";
    e_logo_eng.style.opacity="100%";

    //Start listening for lang change click
    e_logo_eng.addEventListener("click", lang_change_eng, true);
}

function dropdown_despawn_when_tr(){
    e_logo_eng.style.visibility="hidden";
    e_logo_eng.style.opacity="0%";

    e_lang_dropdown.style.height="0vmin";
    e_lang_dropdown.style.visibility="hidden";
    e_lang_dropdown.style.opacity="0%";
    
    e_logo_eng.removeEventListener("click", lang_change_eng, true);
    e_logos_lang.removeEventListener("mouseleave", dropdown_left_when_tr, true);
}

function dropdown_left_when_tr(event){
    
    // if leaving dropdown menu. (If the element we leave to isn't contained in the dropdown menu.)
    if(e_logos_lang.contains(event.relatedTarget)==0){
        dropdown_despawn_when_tr();
    }
}





function lang_change_eng(){
    current_lang=0;
    dropdown_despawn_when_tr();
    e_logo_tr.removeEventListener("click", dropdown_lang_when_tr, true);
    e_logo_eng.addEventListener("click", dropdown_lang_when_eng, true);
    e_logos_lang.insertBefore(e_logo_eng, e_logo_tr);
    e_logo_eng.style.visibility="visible";
    e_logo_eng.style.opacity="100%";
    e_logo_tr.style.visibility="hidden";
    e_logo_tr.style.opacity="0%";


    //Change page content


}


function lang_change_tr(){
    current_lang=1;
    dropdown_despawn_when_eng();
    e_logo_eng.removeEventListener("click", dropdown_lang_when_eng, true);
    e_logo_tr.addEventListener("click", dropdown_lang_when_tr, true);

    e_logos_lang.insertBefore(e_logo_tr, e_logo_eng);
    e_logo_tr.style.visibility="visible";
    e_logo_tr.style.opacity="100%";
    e_logo_eng.style.visibility="hidden";
    e_logo_eng.style.opacity="0%";



    //Change page content



}


