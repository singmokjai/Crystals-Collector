var targetNumber = 53;

$("#target-num").text(targetNumber);

var counter = 0;

var randomNums = [10, 11, 13, 14];

for (var i = 0; i < randomNums.length; i++) {

    var picCrystal = $("<img>");

    picCrystal.addClass("crystal-image");

    picCrystal.attr("src","https://images-na.ssl-images-amazon.com/images/I/61NHzqPotVL._SX425_.jpg");

    picCrystal.attr("crystalValue", randomNums[i]);

    $("#crystals").append(picCrystal);
}


$(".crystal-image").on("click", function() {
console.log(this)
    var crystalNum = ($(this).attr("crystalValue"));

    crystalNum = parseInt(crystalNum);

    counter += crystalNum;

    alert("New score: " + counter);

if (counter === targetNumber) {

    alert("You Win!");

}

else if (counter >= targetNumber) {

    alert("You lose!");
}

});

