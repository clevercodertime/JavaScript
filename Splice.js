const array = [2, 5, 9];

console.log(array);

const index = array.indexOf(5);
if (index > -1) {
  array.splice(1, 1); // 1st parameter mean remove the 1 index number, 2nd parameter means remove one item only
}

// array = [2, 9]
console.log(array); 
