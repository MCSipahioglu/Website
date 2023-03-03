const em_logo_arrow=document.getElementById("mobile_logo_arrow");
const em_logo_cv=document.getElementById("mobile_logo_cv");
const em_logo_lang=document.getElementById("mobile_logo_lang");
const em_logo_email=document.getElementById("mobile_logo_email");
const em_logo_kofi=document.getElementById("mobile_logo_kofi");

const em_notification_wrapper=document.getElementById("mobile_notification");
const em_notification_text=document.getElementById("mobile_notification_text");

var sidebar_active=0;
var lang_active=0;
var sidebar_delay_step=30;






function MobileSidebarToggle(){

    if(sidebar_active==0){
        sidebar_active=1;
        em_logo_arrow.style.transform="rotate(+180deg)";
        setTimeout(() => {  em_logo_cv.style.transform="translateX(0vmin)"; },    0*sidebar_delay_step);
        setTimeout(() => {  em_logo_lang.style.transform="translateX(0vmin)"; },  1*sidebar_delay_step);
        setTimeout(() => {  em_logo_email.style.transform="translateX(0vmin)"; }, 2*sidebar_delay_step);
        setTimeout(() => {  em_logo_kofi.style.transform="translateX(0vmin)"; },  3*sidebar_delay_step);
    }

    else if(sidebar_active==1){
        sidebar_active=0;
        em_logo_arrow.style.transform="rotate(0deg)";
        em_logo_cv.style.transform="translateX(12vmin)";
        em_logo_lang.style.transform="translateX(12vmin)";
        em_logo_email.style.transform="translateX(12vmin)";
        em_logo_kofi.style.transform="translateX(12vmin)";
    }
    
}

function MobileCVDownload(){
    if(lang_active==0){
        window.open('./assets/Mustafa Cagatay Sipahioglu - CV.pdf');
        MobileNotification("Downloading CV...");
    }else if(lang_active==1){
        window.open('./assets/Mustafa Çağatay Sipahioğlu - CV.pdf');
        MobileNotification("CV indiriliyor...");
    }
}


function MobileLanguageToggle(){
    if(lang_active==0){
        lang_active=1;
        LanguageChangeTr();
        MobileNotification("Dil, Türkçe olarak değiştirildi.");

    }else if(lang_active==1){
        lang_active=0;
        LanguageChangeEng();
        MobileNotification("Language changed to English.");

    }
}

function MobileEmailCopy() {
    navigator.clipboard.writeText(email); // Copy text into clipboard
    MobileNotification(email_msg);
}

function MobileNotification(message){
    em_notification_text.innerHTML=message;
    em_notification_wrapper.style.visibility="visible";
    em_notification_wrapper.style.opacity="100%";
    setTimeout(() => {
    em_notification_wrapper.style.visibility="hidden";
    em_notification_wrapper.style.opacity="0%";      
    }, 1400);
}