

let outPutArray= new Array();
let k = [1,[2,3,[4]],[[5,6],7]];



function flatArray(){
	
	for( var i=0 ; i< arguments[0].length;i++){
		
		typeof arguments[0][i] =="object" ? flatArray(arguments[0][i]) : outPutArray.push(arguments[0][i]);
	}
return outPutArray;
};




console.log(flatArray(k));
