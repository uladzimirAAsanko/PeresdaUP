function getRootes(a,b,c){
     
    if(typeof (a) != "number" || typeof (b) != "number" || typeof (c) != "number"){
    	console.log("Incorrect input");
    	return;
    }
    d = b * b - 4 * a * c;
    if(d < 0){
    	console.log("There are no roots");
    }else{
    	if(d == 0){
    		x = -b / (2*a);
    		console.log("x =", x); 
    	}else{
    		sq = Math.sqrt(d);
    		x2 = (-b + sq)/(2*a);
    		x1 = (-b - sq)/(2*a);
    		console.log("x1 =",x1);
    		console.log("x2 =",x2);    		
    	}
    }
}
function isSimple(a){
	if(typeof (a) != "number"){
	
		console.log("Incorrect input");
    		return;
	}
	var i;
	sq = Math.sqrt(a);
	for(i = 2; i <= sq; i++){
		if(a % i == 0){
			console.log("false");
			return;
		}
	}
	console.log("true");
}
function findSum(a){
	if(typeof (a) != "number" || a == 0){
	
		console.log("Incorrect input");
    		return;
	}
	var i;
	sum = 1.0;
	for(i = 2; i <= a; i++){
		sum += 1/i;
	}
	console.log("sum = ",sum);
}
function reverseNumber(a){
	if(typeof (a) != "number"){
		console.log("Incorrect input");
    		return;
	}
	isPositive = true;
	if(a < 0){
		isPositive = false;
		a = -a;
	}
	i = 0;
	b = a;
	while(b >= 1){
		i++;
		b = b / 10;
	}
	i--;
	numb = 0;
	b = a;
	for(i;i >= 0; i--){
		numb += Math.floor(b % 10) * Math.pow(10,i);
		b = b / 10;
	}
	if(!isPositive){
		numb = -numb;
	}
	console.log("Reverse number = ", numb)
}
