var SandwichMaker = (function(maker) {

  var breadPrices = {
  		"white": 0.50, 
  		"wheat": 0.60
  	};

  maker.addBread = function() {
    return breadPrices[selectedTopping];
  };

  return maker;
  
})(SandwichMaker);
