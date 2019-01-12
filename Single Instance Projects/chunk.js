// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
// empty array to hold chunks called chunked

//for each element in the unchunked array
//retrieve the last element in chunked

//if last element does not exist or if its length is equal to chunk size
//push a new chunk into chunked with the current element

//else add the current element to the chunk 



function chunk(array, size) {
const chunked = [];  //we declare a empty array

for (element of array){    //cycle through elements of array
const last = chunked[chunked.length -1 ]; // last element inside of our array sets as we loop.
//since arrays pass by reference last is a sub array and dependent on size if you make a new chunk length
if(!last || last.length === size ) {  //if last does not exist or if last.length is the size
    chunked.push([element]);
} else {
    last.push(element);
}
}
return chunked;
}

//chunked but with slice.
function chunk(array,size) {
    const chunked = [];
    let index = 0;
    while(index < array.length){
        chunked.push(array.slice(index,index + size));
        index += size;
    }

    return chunked;
}

//chunks strings similarly to above but its HYPER Fast
function chunkString(str, len) {
    var _size = Math.ceil(str.length/len),
        _ret  = new Array(_size),
        _offset
    ;
  
    for (var _i=0; _i<_size; _i++) {
      _offset = _i * len;
      _ret[_i] = str.substring(_offset, _offset + len);
    }
  
    return _ret;
  }
  //                       012345678910111
  console.log(chunkString('12345678910',3));