let buttonColours = ["red", "blue", "green", "yellow"]

let gamePattern = []
let userClickedPattern = []

//You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.
let started = false;

let level = 0
 
$(document).keypress(function (event) {

    if(!started){ 
        $("#level-title").text("Level " + level)
        nextSequence();
        started = true;
    }
})

let clickCount = 0 
// this is happen when an user click on the button 
$(".btn").click(function(event) {
    let userChosenColour = $(event.target).attr("id")  // by this wecan find the id of the element on which click enent occured or we use $(this).attr("id")
    userClickedPattern.push(userChosenColour)         // this will store the pattern in which user click on the button    

    playSound(userChosenColour)
    animatePress($(event.target).attr("id"))

    clickCount++ 
    checkAnswer(clickCount)
})


// this is for the game pattern  
function nextSequence(){
    level++ 
    $("#level-title").text("Level " + level);

    let randomNumber = Math.floor(Math.random() * 4) 
    let randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
    $("#"+randomChosenColour).fadeOut(50).fadeIn(50)  // by this we can apply a flash animation on the button 

    playSound(randomChosenColour)
}


// this function is for playing diffrent sound 
function playSound(name){
    let audio = new Audio("sounds/"+name+".mp3")
    audio.play()
}


// this function will add or remove a css class called pressed when uer clik on the button
function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed")

    setTimeout(function() {
        $("#"+currentColour).removeClass("pressed");
      }, 100)
}


// answer check
function checkAnswer(currentLevel){
    var i = 0
    for(i ; i<currentLevel ; i++){
        if(gamePattern[i] != userClickedPattern[i]){

            started = false
            level = 0 
            userClickedPattern = []
            gamePattern = []
            clickCount = 0 
            playSound("wrong")
            $("#level-title").text("Game Over, Press Any Key to Restart")
            $("body").addClass("game-over")
            setTimeout(() => {
                $("body").removeClass("game-over")
            }, 200);
            return  
        }
    }

    if(i === level){
        userClickedPattern = []
        clickCount = 0 
        setTimeout(nextSequence, 1000)  // setTimeOut(function_name, timeInMillisecon)  this function allows us to run the argument function after the time interval
    }
}

