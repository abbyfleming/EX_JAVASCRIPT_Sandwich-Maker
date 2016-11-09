var SandwichMaker = (function(maker) {

  var meatPrices = {
	"turkey": 0.90, 
	"ham": 1.50,
	"none": 0,
};

  maker.addMeat = function(selectedTopping) {
    //console.log("selectedTopping in Meat.js", selectedTopping); 
    return meatPrices[selectedTopping];
  };

  return maker;
  
})(SandwichMaker);

