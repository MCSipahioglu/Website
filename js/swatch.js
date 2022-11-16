const element_swatch=document.getElementById("landing_swatch_wrapper");
const element_swatch_count=5;
var current_step=0;


document.addEventListener("wheel", RotateSwatch);

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

}

//I really thought I wouldn't be able to build the swatch but that wasn't so bad once I got the idea that I could rotate the general div.






