/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

function calculatorModule(){
     var memory = 0;
     var total = 0;

     function load(x){
         if(typeof x === 'number'){
             total = x;
             return total;
         } else {
             throw error;
         }
     };

     function getTotal(x){
         return total;
     }

     function add(x){
        if(typeof x === 'number'){
            total+= x;
        } else {
            throw error;
        }
        return total;
     }

     function subtract(x){
        if(typeof x === 'number'){
            total-= x;
        } else {
            throw error;
        }
        return total;
     }

     function multiply(x){
        if(typeof x === 'number'){
            total*= x;
        } else {
            throw error;
        }
        return total;
     }

     function divide(x){
        if(typeof x === 'number'){
            total/= x;
        } else {
            throw error;
        }
        return total;
     }

     function recallMemory(){
         return memory;
     }

     function saveMemory(){
         memory = total;
     }

     function clearMemory(){
         memory = 0;
     }



     return {
         load: load,
         getTotal: getTotal,
         add: add,
         subtract: subtract,
         multiply: multiply,
         divide: divide,
         recallMemory: recallMemory,
         saveMemory: saveMemory,
         clearMemory: clearMemory
    }
 }

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */


  /**
   * Return the value of `total`
   * @return { Number }
   */


  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */


  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */


  /**
   * Stores the value of `total` to `memory`
   */


  /**
   * Clear the value stored at `memory`
   */

  /**
   * Validation
   */

