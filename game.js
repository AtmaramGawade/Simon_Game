var buttonColors = ["red", "blue", "green", "yellow" ];

var gamePattern = [];

var userClickedPattern = [];

var level = 0;

var started = false;



function playSound(name){
    var audio = new Audio ("sounds/"+name+".mp3");
    audio.play();
}


$(document).keydown(function(){
    if(!started){
        $("#level-title").text("Level"+level);
        nextSequence();
        started = true;
    }

})
    




function nextSequence(){
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level "+level);

    var randomNumber = Math.floor(Math.random()*4);
    console.log(randomNumber);


    var randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

}


function animatePress(userChosenColour){
    $("#" + userChosenColour).addClass("flash");


setTimeout(function() {
    $("#" + userChosenColour).removeClass("flash");
}, 100);
}



$(".btn").on("click", function(){

   var userChosenColor = $(this).attr("id");
   
   userClickedPattern.push(userChosenColor);
   
   console.log(userClickedPattern);
   
   playSound(userChosenColor);
   
   animatePress(userChosenColor);

   checkAnswer(userClickedPattern.length - 1);


})

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        console.log("success");
    

    if(gamePattern.length === userClickedPattern.length){
        setTimeout(() => {
            nextSequence();
        }, 1000);
        
    } 
       
}else{
    console.log("wrong");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    startOver();



}


}




function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
  }







