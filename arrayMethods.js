Array.prototype.myMap = function(callback){
    const output = [];
    // iterate through the array and call the callback function.
    for(let i = 0; i < this.length; i++) {
        // adding the elements to the output array
        output.push(callback(this[i],i,this));
    }
    return output;
}

Array.prototype.myFilter = function(callback) {
    const output = [];
    // loop thorugh the array
    for (let i=0; i<this.length; i++) {
        // only adding the elements only if the callback returns 'true'
        if(callback(this[i],i,this) === true) {
            output.push(this[i]);
        }
    }
    return output;
}   

Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
        // on the first iteration, if there's no initialValue defined, set the accumulator to the first element of the array
        if(i===0 && !initialValue) {
            accumulator = this[i];
        } else {
            accumulator = callback(accumulator, this[i], i, this);
        }
    }
    return accumulator;

}


const array = [1,2,3];

const mappedArray = array.myMap((value, i, arr)=> {
    return value + i + arr[i];
})

const filteredArray = array.myFilter((value,i,arr)=>{
    return (value + i + arr[i]) > 5; // return a boolean value - true / false
})

const reduceValue = array.myReduce((accumulator, value, i, arr) => {
    return accumulator + value + i + arr[i];
}, 3) 

