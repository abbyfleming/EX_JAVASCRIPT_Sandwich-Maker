var SandwichMaker = (function(maker) {

  var condimentPrices = {
  		"mayo": 0.10, 
  		"mustard": 0.20
  	};

  maker.addCondiment = function(selectedTopping) {
    return condimentPrices[selectedTopping];
  };

  return maker;
  
})(SandwichMaker);
