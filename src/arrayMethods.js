window.every = function(array, callback) {
    var result = true;
    for(var i = 0; i < array.length; i++){
        if(!callback(array[i], i, array))  {
            result = false;
	    break;
        }

    }
    return result;
};



// some 

window.some = function(array, callback) {
var result = false;
    for(var i = 0; i < array.length; i++){
        if(callback(array[i], i, array))  {
            result = true;
	    break;
        }
    }
    return result;
};


// forEach

window.forEach = function(array, callback) {
    for(var i = 0; i < array.length; i++){
      callback(array[i], i, array);
    }
  };
  
// filter

window.filter = function(array, callback) {
    var filteredArr = [];
    for(var i = 0; i < array.length; i++){
      if(callback(array[i], i, array)) {
        filteredArr.push(array[i]);
      }
    }
    return filteredArr;
  };
  



// map 
window.map = function(array, callback) {
    var resultArr = [];
    for(var i = 0; i < array.length; i++){
      resultArr.push(callback(array[i], i, array));
      }
    
    return resultArr;
  };
  


// reduce


window.reduce = function(array, callback, initialValue) {
var sum = 0;
var temp = initialValue;
for(var i = 0; i < array.length; i++){
    sum = callback(temp,array[i], i, array);
    temp = sum;
    }
    return sum;
};

