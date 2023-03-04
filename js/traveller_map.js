e_map=document.getElementById("world_map")
e_map.addEventListener("wheel", MapZoom, true);


zoom=4.703125;
const zoom_speed=0.3125;






function MapZoom(event){
    prev_zoom=zoom;
    if(event.deltaY>0 && (zoom-prev_zoom*zoom_speed<1.3125)){   //Don't try to zoom out if we are maxed zoomed out.
        zoom=1.3125;
    }else{
        if(event.deltaY<0){
            zoom+=prev_zoom*zoom_speed;
        }else{
            zoom-=prev_zoom*zoom_speed;
        }     
    }
    e_map.style.transform="scale("+ zoom +")";

}