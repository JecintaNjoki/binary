
// // Given an unsorted array of numbers return the sorted array in descending order
// // let arr=[123,89,5,23,9,56]


const leftIndex = mergeSort(num.slice(0,middleIndex));
const rightIndex =mergeSort(num.slice(middleIndex));
return merge(leftIndex,rightIndex)

function merge(leftIndex,rightIndex){
const result = [];
let x =0;
let v=0;
while(x<leftIndex.length && v < rightIndex.length){
    if(leftIndex[x]<rightIndex[v]){
        result.push(leftIndex[x]);
        x++;
    }else{
        result.push(rightIndex[v]);
        v++;
    }
}
return result.concat(leftIndex.slice(x)).concat(rightIndex.slice(v));
}
function binarysearch(num,target){
let leftIndex=0;
let rightIndex=num.length -1;
while (leftIndex<=rightIndex){
    const middleIndex=  Math.floor((leftIndex+rightIndex)/2);
    if(num[middleIndex]===target){
        return middleIndex
    }
    else if(num[middleIndex]<target){
        leftIndex=middleIndex+1;
    }else{
        rightIndex=middleIndex-1;
    }
}
return null;
}
const sortedNum=mergeSort(num);
const targetIndex=binarysearch(sortedNum,target);
console.log(targetIndex);
//Given an unsorted array of numbers return the sorted array in descending order
//let arr=[123,89,5,23,9,56]
//Given the following array, search for the following target
//let target = 34
//let arr2 = [1,4,78,2,67,3];
let target = 34;
let arr2 = [1,4,78,2,67,3];
function mergeSortted(arr2){
if (arr2.length <= 1){
    return arr2;
}
const middleIndex =Math.floor(arr2.length/2);
const leftIndex = mergeSort(arr2.slice(0,middleIndex));
const rightIndex =mergeSort(arr2.slice(middleIndex));
return merge(leftIndex,rightIndex)
}
function mergesorts(leftIndex,rightIndex){
const result = [];
let a =0;
let b=0;
while(a<leftIndex.length && b < rightIndex.length){
    if(leftIndex[a]<rightIndex[b]){
        result.push(leftIndex[a]);
        a++;
    }else{
        result.push(rightIndex[b]);
        b++;
    }
}
return result.concat(leftIndex.slice(a)).concat(rightIndex.slice(b));
}
function binarysearch(arr2,target){
let leftIndex=0;
let rightIndex=arr2.length -1;
while (leftIndex<=rightIndex){
    const middleIndex=  Math.floor((leftIndex+rightIndex)/2);
    if(arr2[middleIndex]===target){
        return middleIndex
    }
    else if(num[middleIndex]<target){
        leftIndex=middleIndex+1;
    }else{
        rightIndex=middleIndex-1;
    }
}
return null;
}
const sortedarr2=mergeSort(arr2);
const targeT=binarysearch(sortedarr2,target);
console.log(targeT);
