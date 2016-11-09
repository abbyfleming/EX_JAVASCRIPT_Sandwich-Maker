var SandwichMaker = (function(maker) {

  var cheesePrices = {
  		"cheddar": 0.50, 
  		"provolone": 0.75
  	};

  maker.addCheese = function(selectedTopping) {
    return cheesePrices[selectedTopping];
  };

  return maker;
  
})(SandwichMaker);
