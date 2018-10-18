var targetNumber = 53;

$("#target-num").text(targetNumber);

var counter = 0;

var randomNums = [10, 11, 13, 14];

for (var i = 0; i < randomNums.length; i++) {

    var picCrystal = $("<img>");

    picCrystal.addClass("crystal-image");

    picCrystal.attr("src","https://cdn.shopify.com/s/files/1/1911/3007/products/Adundance-Quartz-Crystal-Candle_4816eb0f-4728-422e-bdb3-b5f0b9b2731d.jpg?v=1536772508");

    picCrystal.attr("src","https://www.thoughtco.com/thmb/TqQm3tRT4882EvcdDbqaogKDonI=/3609x2727/filters:fill(auto,1)/close-up-of-crystal-stone-glowing-in-darkroom-583919173-56f28e5d3df78ce5f83d7284.jpg");

    picCrystal.attr("src","https://images-na.ssl-images-amazon.com/images/I/61NHzqPotVL._SX425_.jpg");

    picCrystal.attr("src","https://d1u5p3l4wpay3k.cloudfront.net/fortnite_gamepedia/7/70/Shadowshard_crystal_icon.png");

    picCrystal.attr("crystalValue", randomNums[i]);

    $(".crystal-image").append(picCrystal);
}


$(".crystal-image").on("click", function() {

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
