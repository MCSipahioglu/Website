const element_swatch=document.getElementById("landing_swatch_container");
const angle_step=25;
const element_swatch_count=5;
var current_step=0;


document.addEventListener("wheel", swatch_rotate);

function swatch_rotate(event){
    var delta = Math.sign(event.deltaY);     //Normalize Scroll's deltaY (+-120 for Chrome into -+1)

    if (delta==1 && current_step<element_swatch_count-1){         //Rotate Down
        element_swatch.style.transform = "rotate("+ (current_step*(-angle_step)-angle_step) +"deg)";
        current_step+=1;
        console.log('Down');
        console.log(current_step);
    }
    if (delta==-1 && current_step>0){                           //Rotate Up
        element_swatch.style.transform = "rotate("+ (current_step*(-angle_step)+angle_step) +"deg)";
        current_step+=-1;
        console.log('Up');
        console.log(current_step);

    }

}

//I really thought I wouldn't be able to build the swatch but that wasn't so bad once I got the idea that I could rotate the general div.






