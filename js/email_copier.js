const e_logo_email=document.getElementById("logo_email");
const e_logo_copypaste=document.getElementById("logo_copypaste");
const e_email_wrapper=document.getElementById("email_wrapper");
const e_email=document.getElementById("email");


e_logo_email.onclick = function() {EmailActivate()};



function EmailActivate(){
    e_email_wrapper.addEventListener("mouseleave", EmailLeft, true);

    e_email_wrapper.style.left="calc(100vw - 38vmin)";
    e_logo_copypaste.addEventListener("click", EmailCopy, true);
}



function EmailCopy() {
    /* Copy text into clipboard */
    navigator.clipboard.writeText("mustafacagataysipahioglu@gmail.com");
    e_email.innerHTML="Email copied to clipboard.";
}



function EmailLeft(event){
    if(e_email_wrapper.contains(event.relatedTarget)==0){
        EmailDeactivate();
    }
}



function EmailDeactivate(){
    e_email_wrapper.style.left="100vw";
    setTimeout(() => {  e_email.innerHTML="mustafacagataysipahioglu@gmail.com"; }, 500);
    

    e_logo_copypaste.removeEventListener("click", EmailCopy, true);
    e_email_wrapper.removeEventListener("mouseleave", EmailLeft, true);
}

