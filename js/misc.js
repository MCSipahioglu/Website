document.getElementById("logo_email").onclick = function() {CopyEmail()};

window.onload = function() {LoadingScreen()};

function LoadingScreen(){
    document.getElementById("loader_wrapper").style.opacity="0%";
}


function CopyEmail() {
    /* Copy text into clipboard */
    navigator.clipboard.writeText("mustafacagataysipahioglu@gmail.com");
    alert("Copied contact e-mail.");
}