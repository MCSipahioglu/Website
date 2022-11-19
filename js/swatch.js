//Swatch element to rotate
const element_swatch=document.getElementById("landing_swatch_wrapper");
const element_swatch_count=5;
var current_step=0;


document.addEventListener("wheel", RotateSwatch, true);

function RotateSwatch(event){
    var delta = Math.sign(event.deltaY);     //Normalize Scroll's deltaY (+-120 for Chrome into -+1)

    if (delta==1 && current_step<element_swatch_count-1){         //Rotate Down
        element_swatch.style.transform = "rotate(calc(" + -1*current_step + " * var(--swatch_angle_step) - var(--swatch_angle_step)))";
        current_step+=1;
    }
    else if (delta==-1 && current_step>0){                           //Rotate Up
        element_swatch.style.transform = "rotate(calc(" + -1*current_step + " * var(--swatch_angle_step) + var(--swatch_angle_step)))";
        current_step+=-1;
    }

    if(current_step==0){
        e_roboticist.style.pointerEvents="all";
        e_botsmith.style.pointerEvents="none";
        e_inventor.style.pointerEvents="none";
        e_writer.style.pointerEvents="none";
        e_traveller.style.pointerEvents="none";
    }else if(current_step==1){
        e_roboticist.style.pointerEvents="none";
        e_botsmith.style.pointerEvents="all";
        e_inventor.style.pointerEvents="none";
        e_writer.style.pointerEvents="none";
        e_traveller.style.pointerEvents="none";
    }else if(current_step==2){
        e_roboticist.style.pointerEvents="none";
        e_botsmith.style.pointerEvents="none";
        e_inventor.style.pointerEvents="all";
        e_writer.style.pointerEvents="none";
        e_traveller.style.pointerEvents="none";
    }else if(current_step==3){
        e_roboticist.style.pointerEvents="none";
        e_botsmith.style.pointerEvents="none";
        e_inventor.style.pointerEvents="none";
        e_writer.style.pointerEvents="all";
        e_traveller.style.pointerEvents="none"; 
    }else if(current_step==4){
        e_roboticist.style.pointerEvents="none";
        e_botsmith.style.pointerEvents="none";
        e_inventor.style.pointerEvents="none";
        e_writer.style.pointerEvents="none";
        e_traveller.style.pointerEvents="all"; 
    }

}

//I really thought I wouldn't be able to build the swatch but that wasn't so bad once I got the idea that I could rotate the general div.






