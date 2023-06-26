/*document.querySelector("button").addEventListener("click",handleClick);
function handleClick(){
    alert("Working");
}*/


//by using anonymous function i.e a function with no name


//this function only selection the first button


/*document.querySelector("button").addEventListener("click",function(){
    alert("Clicked");
});*/


//------------------------------------------------------------------------------------------------------
/*document.querySelectorAll(".drum")[0].addEventListener("click",function(){
    alert("Clicked");
});
document.querySelectorAll(".drum")[1].addEventListener("click",function(){
    alert("Clicked");
});
document.querySelectorAll(".drum")[2].addEventListener("click",function(){
    alert("Clicked");
});
document.querySelectorAll(".drum")[3].addEventListener("click",function(){
    alert("Clicked");
});
document.querySelectorAll(".drum")[4].addEventListener("click",function(){
    alert("Clicked");
});
document.querySelectorAll(".drum")[5].addEventListener("click",function(){
    alert("Clicked");
});
document.querySelectorAll(".drum")[6].addEventListener("click",function(){
    alert("Clicked");
});*/


var numberOfdrums = document.querySelectorAll(".drum").length;
for(var i = 0 ; i < numberOfdrums ; i ++ ){

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML = this.innerHTML; //this will gives the letter pressed
        makeSound(buttonInnerHTML);
    });
}
//detecting keyboard press
//by adding addEventListener to whole document ...it will cover the full page
document.addEventListener("keydown",function(event){
    makeSound(event.key);
});
function makeSound(key){
    switch (key) {
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            
            break;
        case "r":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            
            break;
        case "u":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
                
            break;
        case "m":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
                
            break;
        case "k":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            
            break;
        case "i":
            var kick_bass = new Audio("sounds/kick-bass.mp3");
            kick_bass.play();
                
            break;
    
        case "t":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
                
            break;
        default:
            console.log(buttonInnerHTML);
            break;
    }

}

