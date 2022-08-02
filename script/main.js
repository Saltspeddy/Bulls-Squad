// document.querySelector("#menu").style.width= "0px";
document.querySelector("#menu").style.transform = "translatex(-150px)";
let a = true;

function toggleMenu(){
    
    if(a == false){
        document.querySelector("#menu").style.transform = "translatex(-150px)";

    }
    if(a == true){
        document.querySelector("#menu").style.transform = "translatex(0px)";

    }

    a = !a;
}