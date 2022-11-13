document.getElementById("logo_email").onclick = function() {copyEmail()};


function copyEmail() {
    /* Copy text into clipboard */
    navigator.clipboard.writeText("mustafacagataysipahioglu@gmail.com");
    alert("Copied contact e-mail.");
}

$(".alert").show(() => {
    setTimeout(() => {
        $(".alert").fadeTo(500, 1).slideUp(500, () => {

            $(message).hide();
        })
    }, 5000)
});