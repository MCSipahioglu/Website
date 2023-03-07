e_carousel=document.getElementById("carousel_gallery");
e_carousel_title=document.getElementById("carousel_title");
e_carousel_counter=document.getElementById("carousel_counter");

image_index=0;



function GalleryActivate(gallery_title, gallery_id){
    e_gallery=document.getElementById(gallery_id);
    e_carousel.style="display: block";
    e_gallery.style="display: flex";
    e_images=e_gallery.children;
    image_count=e_images.length;

    e_carousel_title.innerHTML=gallery_title;
    ImageUpdate();

}


function GalleryDeactivate(){
    e_images[image_index].style="display: none";
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
    image_index=(image_index+image_count)%image_count;
    e_carousel_counter.innerHTML=(image_index+1).toString()+"/"+image_count.toString();
    e_images[image_index].style="display: block";

}
