var SandwichMaker = (function(maker) {

  var veggiePrices = {
	"lettuce": 0.50, 
	"tomato": .75
};

  maker.addVeggie = function(selectedTopping) {
    //console.log("selectedTopping in Meat.js", selectedTopping); 
    return veggiePrices[selectedTopping];
  };

  return maker;
  
})(SandwichMaker);

