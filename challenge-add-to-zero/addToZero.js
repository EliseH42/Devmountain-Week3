// Starting array
let array = [28, 43, -12, 30, 4, 0, 13]

// Write your solution below:
// function addToZero(array){
//     for(let i=0;i<array.length;i++){
//         for(let b=0;b<array.length;b++){
//             let sumZero = false
//             if(array[i]+array[b]===0){
//                 sumZero = true
//                 break;
//             }else{
//                 sumZero = false
//             };
//             return(sumZero)
//         };
//     };
// };


function addToZero(array){
    // let inner = arr.concat(arr[0]);
    for (let i = 0; i<array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === 0) return true;
        }
    }
    return false;
    
}


console.log(addToZero(array))