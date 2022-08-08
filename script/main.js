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

function trainings(){
    
    if( a == true){
        document.querySelector('.selector > :nth-child(2)').style.height = "160px";
        let days = document.querySelectorAll(".day");
        for( let i = 0 ; i < days.length; i++){
            days[i].style.transform = "translatey(0px)";
            days[i].style.visibility = "visible";
        }
        document.querySelector("#icon").innerHTML = '<svg style="color: black;" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" /></svg>;';
    }
    if( a == false){
        document.querySelector('.selector > :nth-child(2)').style.height = "40px";
        let days = document.querySelectorAll(".day");

        for( let i = 0 ; i < days.length; i++){
            days[i].style.transform = "translatey(" + (i * -40 - 40 ) +"px)";
        }

        for( let i = 0 ; i < days.length; i++){
            days[i].style.visibility = "hidden";
        }
        document.querySelector("#icon").innerHTML = '<svg style="color: black;" id="icon" width="30px" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg>';
    }
    a = !a;
}

function changeDay(value){
    
    let days = document.querySelectorAll(".day");
    let idOfExercise = days[value].id;
    
    [document.querySelector(".currentDay").innerHTML, days[value].innerHTML] = [days[value].innerHTML, document.querySelector(".currentDay").innerHTML];
    [document.querySelector(".currentDay").id, days[value].id] = [days[value].id, document.querySelector(".currentDay").id];

    if( a == false){
        document.querySelector('.selector > :nth-child(2)').style.height = "40px";
        let days = document.querySelectorAll(".day");

        for( let i = 0 ; i < days.length; i++){
            days[i].style.transform = "translatey(" + (i * -40 - 40 ) +"px)";
        }

        for( let i = 0 ; i < days.length; i++){
            days[i].style.visibility = "hidden";
        }
        document.querySelector("#icon").innerHTML = '<svg style="color: black;" id="icon" width="30px" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg>';
    }
    a = !a;
    swipe(idOfExercise);
}

function swipe(value){
    document.querySelector(".days").style.transform = "translatex(" + value * -100 + "vw)";
}