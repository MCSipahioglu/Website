//Writer Page's Filter
const e_button=[
    document.getElementById("filter_1"),
    document.getElementById("filter_2"),
    document.getElementById("filter_3"),
    document.getElementById("filter_4")];           //Append the new filter here.

var toggle=[1, 1, 1, 1];                            //Add a one to here.

const e_page_writer=document.getElementById("page_writer");
var elements_tagged=[
    e_page_writer.getElementsByClassName("tag1"),
    e_page_writer.getElementsByClassName("tag2"),
    e_page_writer.getElementsByClassName("tag3"),
    e_page_writer.getElementsByClassName("tag4")]; //Append the new tag here.





function ToggleTag(filter_index){

    if (toggle[filter_index]==1){        //Deactivate
        toggle[filter_index]=0;
        e_button[filter_index].style.backgroundColor="var(--bg_black)";
        for (let i = 0; i < elements_tagged[filter_index].length; i++) {
            elements_tagged[filter_index][i].style.display='none';
        }
    }else if (toggle[filter_index]==0){  //Activate
        toggle[filter_index]=1;
        e_button[filter_index].style.backgroundColor="white";
        for (let i = 0; i < elements_tagged[filter_index].length; i++) {
            elements_tagged[filter_index][i].style.display='block';
        }
    }

}



function Highlight(filter_index){
    if (toggle[filter_index]==1){
        e_button[filter_index].style.backgroundColor="var(--bg_black)";
    }else if (toggle[filter_index]==0){
        e_button[filter_index].style.backgroundColor="white";
    }
}

function Lowlight(filter_index){
    if (toggle[filter_index]==0){
        e_button[filter_index].style.backgroundColor="var(--bg_black)";
    }else if (toggle[filter_index]==1){
        e_button[filter_index].style.backgroundColor="white";
    }
}



