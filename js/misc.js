//For Loading the Screen
window.onload = function() {LoadingScreen()};

function LoadingScreen(){
    document.getElementById("loader_wrapper").style.opacity="0%";
    document.getElementById("loader_wrapper").style.zIndex="0";
}



//For copying email
document.getElementById("logo_email").onclick = function() {CopyEmail()};

function CopyEmail() {
    /* Copy text into clipboard */
    navigator.clipboard.writeText("mustafacagataysipahioglu@gmail.com");
    alert("Copied contact e-mail.");
}


