function upDate(img){
    let bigBox=document.getElementById("image");
     bigBox.style.backgroundImage = "url('" + img.src + "')";
    bigBox.innerHTML="";

}
function upDo(img){
    let bigBox=document.getElementById("image");
    bigBox.style.backgroundImage="";
    bigBox.innerHTML="Hover over an image below to display here.";
}