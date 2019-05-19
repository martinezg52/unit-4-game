

//Crystal game PseudoCode
/* set up 4 crystals and each must generate a random number between 1 and 12
the score target should generate random values between 19 and 120, must also set up variables to store
total wins and losses. At the end, the game must reset*/

//When clicking a crystal it should add the previous results, increments until it equals the target score.
//If it is greater than the target score, then add to losses variable
//If it equals the master target, then this is a WIN and we increment the wins variable


//setting up global variables

var targetScore;
var losses = 0;
var wins = 0;
var counter = 0;

//First part of code:

var restartGame = function (){

    $(".crystals").empty();    //I found that with out this empty method the crystal divs do not reset (do not empty), had to ask for help on this one.

    var images = [
            "assets/images/crystal1.png",
            "assets/images/crystal2",
            "assets/images/crystal3.png",
            "assets/images/crystal4.jpg"];

//adding value to targetScore Variable and using jquery to add the target score between the <p> tag in html by using the #targetScore class

targetScore = Math.floor(Math.random() * 102+19);


$("#targetScore").html("Target Score: " +targetScore);

//setting up 4 divs for the crystal images using jquery
//for loop for the 4 divs and include a variable randome to generate random numbers between 1 and 12.

for(var i = 0; i < 4; i++) {

    var random = Math.floor(Math.random() * 12+1);


//adding the random math function to crystalDiv so that each crystal generates a random number between 1 and 12.

    var crystalDiv = $("<div>");
        crystalDiv.attr({
            "class": "crystalDiv",
            "data-random": random
        });

        crystalDiv.css({
            "background-image":"url(" + images[i] + ")",
            "background-size":"cover"
        })

//appending the crystals to crystalDiv
    
    $(".crystals").append(crystalDiv);

    }
}

restartGame();

//second part of code:
//This is so when we click a crystal it calls the random function which will assign a random number to each crystal
//parseInt allows us to get an integer when calling the crystalDiv class.

$(document).on("click", ".crystalDiv", function() {
    var num = parseInt($(this).attr("data-random"));

    counter += num;

    $("#counter").html("Your Total Score Is: " +counter);


    if(counter > targetScore) {
        losses++;
        $("#losses").html("Losses: " +losses);
        

        counter = 0;

        restartGame();
      
    }

    else if(counter === targetScore) {
        wins++;
        $("#wins").html("wins: " +wins);

        counter = 0;

        restartGame();

    }

});

