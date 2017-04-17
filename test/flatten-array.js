describe('flatten array', function () {
  it('should flatten an array', function () {
  var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
          expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];
  
   
     var flattenAndOrder = function(array) {
       if (!Array.isArray(array)) {
         throw "Should be an array";
       }
       var flatten = function(value, returnFlat) {
         if (!returnFlat || !Array.isArray(returnFlat)) {
           throw 'Not an array'
         }
 
       for(var i = 0; i < value.length; i++) {
             if(Array.isArray(value[i])) {
                 flatten(value[i], returnFlat);
             } else {
                 returnFlat.push(value[i]);
             }
         }
         return returnFlat;
       }
       var returnFinal = [];
       flatten(array, returnFinal);
 
       return returnFinal.sort();
     }
 
     arr = flattenAndOrder(arr);
      expect(arr).toEqual(expected);
    });
  }); 
