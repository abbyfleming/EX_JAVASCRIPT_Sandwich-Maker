var output = document.getElementById("output");
var finalSandwichPrice = 0;
var selectedTopping;

/* ---- SANDWICH OPTIONS ---- */

var meatChooser = document.getElementById("meat-chooser");
var cheeseChooser = document.getElementById("cheese-chooser");
var veggieChooser = document.getElementById("veggie-chooser");
var condimentChooser = document.getElementById("condiment-chooser");
var breadChooser = document.getElementById("bread-chooser");

/* ---- EVENT LISTENERS ----- */

breadChooser.addEventListener("change", function(event) {
	selectedTopping = event.target.value;
	var sandwichPriceBread = SandwichMaker.addBread(selectedTopping);
	finalSandwichPrice += sandwichPriceBread;
	output.innerHTML = finalSandwichPrice.toFixed(2);

});

meatChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
  var sandwichPriceMeat = SandwichMaker.addMeat(selectedTopping); 
  finalSandwichPrice += sandwichPriceMeat;
  output.innerHTML = finalSandwichPrice.toFixed(2);
});


cheeseChooser.addEventListener("change", function(event) {
	selectedTopping = event.target.value;
	var sandwichPriceCheese = SandwichMaker.addCheese(selectedTopping);
	finalSandwichPrice += sandwichPriceCheese;
	output.innerHTML = finalSandwichPrice.toFixed(2);
});


veggieChooser.addEventListener("change", function(event) {
	selectedTopping = event.target.value;
	var sandwichPriceVeggie = SandwichMaker.addVeggie(selectedTopping);
	finalSandwichPrice += sandwichPriceVeggie;
	output.innerHTML = finalSandwichPrice.toFixed(2);
});

condimentChooser.addEventListener("change", function(event) {
	selectedTopping = event.target.value;
	var sandwichPriceCheeseCondiment = SandwichMaker.addCondiment(selectedTopping);
	finalSandwichPrice += sandwichPriceCheeseCondiment;
	output.innerHTML = finalSandwichPrice.toFixed(2);
})


