 ;function Machine(power) {
      this._power = power;
      this._enabled = false;
      var self = this;
      this.enable = function() { self._enabled = true; };
      this.disable = function() { self._enabled = false; };
    }
    
 function Fridge() {
 	Machine.call(this);
 	_food = ["food","food1"];
 	 this.addFood  = function (item){
 		if(!this._enabled){
 			alert("Error : Fridge is not enabled");
 			return;
 		}
 		console.log(this._power);
 		if(Array.isArray(item)){
 			if(this._power / 100 - item.length - _food.length > 0){
 				for(var i = 0; i < item.length; i++){
 					_food.push(item[i]);
 				}
 			}else{
 				console.log("Error : Not enough place in fridge");
 				return;
 			}
 		}else{
 				if(this._power / 100 - _food.length > 0){
 					_food.push(item);
 				}else{
 					console.log("Error : Not enough place in fridge");
 					return;
 				}
 			}
 			
 	}
 	this.enable = function(){
 		this._enabled = true;
 	}
 	this.unenable = function(){
 		this._enabled = false;
 	}
 	
 	this.getFood  = function(){
 		var map = Array.prototype.map;
 		newFood = map.call(_food, x=>x);
 		return newFood;
 	}
 }
