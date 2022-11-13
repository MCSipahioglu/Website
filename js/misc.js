document.getElementById("logo_email").onclick = function() {copyEmail()};


function copyEmail() {
    /* Copy text into clipboard */
    navigator.clipboard.writeText("mustafacagataysipahioglu@gmail.com");
    alert("Copied contact e-mail.");
}