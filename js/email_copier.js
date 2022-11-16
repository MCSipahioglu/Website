const e_logo_email=document.getElementById("logo_email");
const e_logo_copypaste=document.getElementById("logo_copypaste");
const e_email_wrapper=document.getElementById("email_wrapper");
const e_email=document.getElementById("email");


document.getElementById("logo_email").onclick = function() {ExpandEmail()};



function ExpandEmail(){
    e_email_wrapper.addEventListener("mouseleave", email_left, true);

    e_email_wrapper.style.left="calc(100vw - 38vmin)";
    e_logo_copypaste.addEventListener("click", CopyEmail, true);
}



function CopyEmail() {
    /* Copy text into clipboard */
    navigator.clipboard.writeText("mustafacagataysipahioglu@gmail.com");
    e_email.innerHTML="Email Copied!";
}



function email_left(event){
    if(e_email_wrapper.contains(event.relatedTarget)==0){
        email_despawn();
    }
}



function email_despawn(){
    e_email_wrapper.style.left="100vw";
    setTimeout(() => {  e_email.innerHTML="mustafacagataysipahioglu@gmail.com"; }, 500);
    

    e_logo_copypaste.removeEventListener("click", CopyEmail, true);
    e_email_wrapper.removeEventListener("mouseleave", email_left, true);
}

