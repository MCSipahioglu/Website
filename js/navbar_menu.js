const e_roboticist=document.getElementById("navbar_roboticist");
const e_botsmith=document.getElementById("navbar_botsmith");
const e_inventor=document.getElementById("navbar_inventor");
const e_writer=document.getElementById("navbar_writer");
const e_traveller=document.getElementById("navbar_traveller");

const e_navmen_count=5;

const e_navbar_menu=document.getElementById("navbar_menu");







document.addEventListener("wheel", navbar_menu_scroll);

function navbar_menu_scroll(event){


    console.log(e_navbar_menu.matches(":hover"));




    var delta = Math.sign(event.deltaY);     //Normalize Scroll's deltaY (+-120 for Chrome into -+1)

    if (delta==1 && current_step<e_navmen_count-1){         //Rotate Down
        element_swatch.style.transform = "rotate("+ (current_step*(-angle_step)-angle_step) +"deg)";
        current_step+=1;
        console.log('Down');
    }
    if (delta==-1 && current_step>0){                           //Rotate Up
        element_swatch.style.transform = "rotate("+ (current_step*(-angle_step)+angle_step) +"deg)";
        current_step+=-1;
        console.log('Up');

    }

}







