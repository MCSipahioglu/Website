//For changing the page language
const e_logos_lang =document.getElementById("logos_lang");
const e_logo_eng=document.getElementById("logo_eng");
const e_logo_tr=document.getElementById("logo_tr");
const e_lang_dropdown=document.getElementById("lang_dropdown");

const e_cv_pdf_eng=document.getElementById("cv_pdf_eng");
const e_cv_pdf_tr=document.getElementById("cv_pdf_tr");

//For changing the page content


//Page boots up on English
e_logo_eng.addEventListener("click", DropdownActivateWhenEng, true);
email_msg="Email copied to clipboard.";



function DropdownActivateWhenEng(){
    e_logos_lang.addEventListener("mouseleave", DropdownLeftWhenEng, true);   //Also start listening for exit condition

    //When clicked drop down dropdown menu.
    e_lang_dropdown.style.height="9.15vmin";
    e_lang_dropdown.style.visibility="visible";
    e_lang_dropdown.style.opacity="100%";

    setTimeout(() => {  
        e_logo_tr.style.visibility="visible";
        e_logo_tr.style.opacity="100%";
     },    400);


    //Start listening for lang change click or exit mouseleave
    e_logo_tr.addEventListener("click", LanguageChangeTr, true);  
}

function DropdownDeactivateWhenEng(){
    e_logo_tr.style.visibility="hidden";
    e_logo_tr.style.opacity="0%";

    e_lang_dropdown.style.height="0vmin";
    e_lang_dropdown.style.visibility="hidden";
    e_lang_dropdown.style.opacity="0%";
    
    e_logo_tr.removeEventListener("click", LanguageChangeTr, true);
    e_logos_lang.removeEventListener("mouseleave", DropdownLeftWhenEng, true);
}

function DropdownLeftWhenEng(event){
    
    // if leaving dropdown menu. (If the element we leave to isn't contained in the dropdown menu.)
    if(e_logos_lang.contains(event.relatedTarget)==0){
        DropdownDeactivateWhenEng();
    }
}





function DropdownActivateWhenTr(){
    e_logos_lang.addEventListener("mouseleave", DropdownLeftWhenTr, true);   //Also start listening for exit condition

    //When clicked drop down dropdown menu.
    e_lang_dropdown.style.height="9.15vmin";
    e_lang_dropdown.style.visibility="visible";
    e_lang_dropdown.style.opacity="100%";

    e_logo_eng.style.visibility="visible";
    e_logo_eng.style.opacity="100%";

    //Start listening for lang change click
    e_logo_eng.addEventListener("click", LanguageChangeEng, true);
}

function DropdownDeactivateWhenTr(){
    e_logo_eng.style.visibility="hidden";
    e_logo_eng.style.opacity="0%";

    e_lang_dropdown.style.height="0vmin";
    e_lang_dropdown.style.visibility="hidden";
    e_lang_dropdown.style.opacity="0%";
    
    e_logo_eng.removeEventListener("click", LanguageChangeEng, true);
    e_logos_lang.removeEventListener("mouseleave", DropdownLeftWhenTr, true);
}

function DropdownLeftWhenTr(event){
    
    // if leaving dropdown menu. (If the element we leave to isn't contained in the dropdown menu.)
    if(e_logos_lang.contains(event.relatedTarget)==0){
        DropdownDeactivateWhenTr();
    }
}





function LanguageChangeEng(){
    DropdownDeactivateWhenTr();
    e_logo_tr.removeEventListener("click", DropdownActivateWhenTr, true);
    e_logo_eng.addEventListener("click", DropdownActivateWhenEng, true);
    e_logos_lang.insertBefore(e_logo_eng, e_logo_tr);



    //Change Logo
    e_logo_eng.style.visibility="visible";
    e_logo_eng.style.opacity="100%";
    e_cv_pdf_eng.style.visibility="visible";
    e_cv_pdf_eng.style.opacity="100%";
    e_logo_tr.style.visibility="hidden";
    e_logo_tr.style.opacity="0%";
    e_cv_pdf_tr.style.visibility="hidden";
    e_cv_pdf_tr.style.opacity="0%";

   //Change Page Content
   email_msg="Email copied to clipboard.";





}


function LanguageChangeTr(){
    DropdownDeactivateWhenEng();
    e_logo_eng.removeEventListener("click", DropdownActivateWhenEng, true);
    e_logo_tr.addEventListener("click", DropdownActivateWhenTr, true);
    e_logos_lang.insertBefore(e_logo_tr, e_logo_eng);



    //Change Logo
    e_logo_tr.style.visibility="visible";
    e_logo_tr.style.opacity="100%";
    e_cv_pdf_tr.style.visibility="visible";
    e_cv_pdf_tr.style.opacity="100%";
    e_logo_eng.style.visibility="hidden";
    e_logo_eng.style.opacity="0%";
    e_cv_pdf_eng.style.visibility="hidden";
    e_cv_pdf_eng.style.opacity="0%";

    //Change Page Content
    email_msg="E-posta panoya kopyalandı.";

}


