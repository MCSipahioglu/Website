const em_logo_arrow=document.getElementById("mobile_logo_arrow");
const em_logo_cv=document.getElementById("mobile_logo_cv");
const em_logo_lang=document.getElementById("mobile_logo_lang");
const em_logo_email=document.getElementById("mobile_logo_email");
const em_logo_kofi=document.getElementById("mobile_logo_kofi");

var sidebar_active=0;
var lang_active=0;







function MobileSidebarToggle(){

    if(sidebar_active==0){
        sidebar_active=1;
        em_logo_arrow.style.transform="scaleX(-1)";
        em_logo_cv.style.transform="translateX(0vmin)";
        em_logo_lang.style.transform="translateX(0vmin)";
        em_logo_email.style.transform="translateX(0vmin)";
        em_logo_kofi.style.transform="translateX(0vmin)";
    }

    else if(sidebar_active==1){
        sidebar_active=0;
        em_logo_arrow.style.transform="scaleX(+1)";
        em_logo_cv.style.transform="translateX(12vmin)";
        em_logo_lang.style.transform="translateX(12vmin)";
        em_logo_email.style.transform="translateX(12vmin)";
        em_logo_kofi.style.transform="translateX(12vmin)";
    }
    
}

function MobileCVDownload(){
    if(lang_active==0){
        window.open('./assets/Mustafa Cagatay Sipahioglu - CV.pdf');
    }else if(lang_active==1){
        window.open('./assets/Mustafa Çağatay Sipahioğlu - CV.pdf');
    }   
}


function MobileLanguageToggle(){
    console.log("Toggling Lang.");
    if(lang_active==0){
        lang_active=1;
        LanguageChangeTr();

    }else if(lang_active==1){
        lang_active=0;
        LanguageChangeEng();

    }
}

function MobileEmailCopy() {
    navigator.clipboard.writeText(email); // Copy text into clipboard
}

