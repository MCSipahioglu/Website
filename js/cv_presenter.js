//Show unshow CV
const e_logo_cv=document.getElementById("logo_cv");
const e_logo_return=document.getElementById("logo_return");
const e_page_cv=document.getElementById("page_cv");


e_logo_cv.addEventListener("click", CvActivate, true);
e_logo_return.addEventListener("click", CvDeactivate, true);


function CvActivate(){
    e_page_cv.style.top="8vmin";

    e_logo_cv.style.visibility="hidden";
    e_logo_cv.style.opacity="0%";
    e_logo_return.style.visibility="visible";
    e_logo_return.style.opacity="100%";

}


function CvDeactivate(){
    e_page_cv.style.top="100vh";

    e_logo_return.style.visibility="hidden";
    e_logo_return.style.opacity="0%";
    e_logo_cv.style.visibility="visible";
    e_logo_cv.style.opacity="100%";

}