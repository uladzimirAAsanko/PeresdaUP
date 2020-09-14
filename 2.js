;function divideArray(arr){
	var b = [];
	var c = [];
	for(var i = 0; i < arr.length;i++){
		if(typeof (arr[i]) == "number" && arr[i] != 0){
			if(arr[i] > 0){
				b.push(arr[i]);
			}else{
				c.push(arr[i]);
			}
		}
	}
	console.log("Array B:");
	for(var i = 0; i < b.length; i++){
		console.log(b[i]);
	}
	console.log("Array C:");
	for(var i = 0; i < c.length; i++){
		console.log(c[i]);
	}
}
function numberOfRepeats(arr){
	var uniqElem = [];
	for(var i = 0; i < arr.length;i++){
		if(typeof (arr[i]) == "number" && isInUniqueElem(uniqElem,arr[i])){
			uniqElem.push(arr[i]);
			count = 1;
			for(var j = i + 1; j < arr.length; j++){
				if(arr[i] == arr[j]){
					count++;
				}
			}
			console.log("Number ", arr[i]," meets ",count, " times ");
		}
	}
}
function isInUniqueElem(arr, number){
	for(var i = 0; i < arr.length;i++){
		if(number == arr[i]){
			return false;
		}
	}
	return true;
}

function isAnnagrams(wordOne, wordTwo){
	if(wordOne.length != wordTwo.length){
		return false;
	}
	for(var i = 0; i < wordOne.length;i++){
		if(!isItInSecondWord(wordOne[i],wordTwo)){
			return false;
		}
	}
	return true;
}
function isItInSecondWord(char,word){
	for(var i = 0; i < word.length;i++){
		if(word[i] == char){
			word[i] = null;
			return true
		}
	}
	return false;
}
