exports.numbers = function(){
    for(var i=1;i<=100;i++){
        console.log(i);
    }
	console.log("===");
};

exports.even = function(){
    for(var i=1;i<=100;i++){ 
        if(i % 2 == 0){
            console.log(i);
        }   
    }
	console.log("===");
};

exports.odd = function(){
    for(var i=1;i<=100;i++){
      if(i % 2 !== 0){
            console.log(i);
      }
    }
	console.log("===");
};
