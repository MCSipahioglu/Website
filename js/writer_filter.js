const e_button1=document.getElementById("filter_1");
const e_button2=document.getElementById("filter_2");
const e_button3=document.getElementById("filter_3");
const e_button4=document.getElementById("filter_4");

toggle1=1;
toggle2=1;
toggle3=1;
toggle4=1;

const e_page_writer=document.getElementById("page_writer");

const elements_tag1 = e_page_writer.getElementsByClassName("tag1");
const elements_tag2 = e_page_writer.getElementsByClassName("tag2");
const elements_tag3 = e_page_writer.getElementsByClassName("tag3");
const elements_tag4 = e_page_writer.getElementsByClassName("tag4");



function ToggleTag1(){
    if (toggle1==1){        //Deactivate
        toggle1=0;
        e_button1.style.backgroundColor="white";
        for (let i = 0; i < elements_tag1.length; i++) {
            elements_tag1[i].style.display='none';
        }
    }else if (toggle1==0){  //Activate
        toggle1=1;
        e_button1.style.backgroundColor="var(--bg_black)";
        for (let i = 0; i < elements_tag1.length; i++) {
            elements_tag1[i].style.display='block';
        }
    }
}

function ToggleTag2(){
    if (toggle2==1){        //Deactivate
        toggle2=0;
        e_button2.style.backgroundColor="white";
        for (let i = 0; i < elements_tag2.length; i++) {
            elements_tag2[i].style.display='none';
        }
    }else if (toggle2==0){  //Activate
        toggle2=1;
        e_button2.style.backgroundColor="var(--bg_black)";
        for (let i = 0; i < elements_tag2.length; i++) {
            elements_tag2[i].style.display='block';
        }
    }
}

function ToggleTag3(){
    if (toggle3==1){        //Deactivate
        toggle3=0;
        e_button3.style.backgroundColor="white";
        for (let i = 0; i < elements_tag3.length; i++) {
            elements_tag3[i].style.display='none';
        }
    }else if (toggle3==0){  //Activate
        toggle3=1;
        e_button3.style.backgroundColor="var(--bg_black)";
        for (let i = 0; i < elements_tag3.length; i++) {
            elements_tag3[i].style.display='block';
        }
    }
}

function ToggleTag4(){
    if (toggle4==1){        //Deactivate
        toggle4=0;
        e_button4.style.backgroundColor="white";
        for (let i = 0; i < elements_tag4.length; i++) {
            elements_tag4[i].style.display='none';
        }
    }else if (toggle4==0){  //Activate
        toggle4=1;
        e_button4.style.backgroundColor="var(--bg_black)";
        for (let i = 0; i < elements_tag4.length; i++) {
            elements_tag4[i].style.display='block';
        }
    }
}





function Highlight(e_tag, toggle){
    if (toggle==1){
        e_tag.style.backgroundColor="white";
    }else if (toggle==0){
        e_tag.style.backgroundColor="var(--bg_black)";
    }
}

function Lowlight(e_tag, toggle){
    if (toggle==0){
        e_tag.style.backgroundColor="white";
    }else if (toggle==1){
        e_tag.style.backgroundColor="var(--bg_black)";
    }
}



