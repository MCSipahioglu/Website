e_carousel=document.getElementById("carousel_gallery");
image_index=0;




function GalleryActivate(gallery){
    e_gallery=document.getElementById(gallery);
    e_carousel.style="display: block";
    e_gallery.style="display: flex";
    e_images=e_gallery.children;
    image_count=e_images.length;
    ImageUpdate();

}


function GalleryDeactivate(){
    e_gallery.style="display: none";
    e_carousel.style="display: none";
    image_index=0;

}



function ImageNext(){
    e_images[image_index].style="display: none";
    image_index+=1;
    ImageUpdate();
}


function ImagePrevious(){
    e_images[image_index].style="display: none";
    image_index-=1;
    ImageUpdate();
}

function ImageUpdate(){
    image_index=image_index%image_count;
    e_images[image_index].style="display: block";

}
