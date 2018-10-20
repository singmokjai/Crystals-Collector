var numberOptions = [20, 23, 40, 53];

var targetNumber = 50

function numberGen () {

 return numberOptions [Math.floor(Math.random() * numberOptions.length)];

}


$("#target-num").text(targetNumber);



var counter = 0;


var wins = 0;
var losses = 0;


var randomNums = [10, 11, 13, 14,];

for (var i = 0; i < randomNums.length; i++) {

    var picCrystal = $("<img>");

    picCrystal.addClass("crystal-image");

    picCrystal.attr("src","https://images-na.ssl-images-amazon.com/images/I/61NHzqPotVL._SX425_.jpg");

    picCrystal.attr("crystalValue", randomNums[i]);

    $("#crystals").append(picCrystal);
}


$(".crystal-image").on("click", function() {

    var crystalNum = ($(this).attr("crystalValue"));

    crystalNum = parseInt(crystalNum);

    counter += crystalNum;


    $("#total-score").text(counter);
    

    alert("New score: " + counter);

    
    if (counter === targetNumber) {

        alert("You Win!");

        winReset ();
        console.log(winReset)
        wins++;
        $("#Wins").text(wins);
        
    }

    else if (counter > targetNumber) {

        alert("You lose!");

        losses++;

        $("#Losses").text(losses);
    }


});



var winReset = function () {

    return numberOptions [Math.floor(Math.random() * numberOptions.length)];
}




