// let is a keyword used to declare variables that are block-scoped and can be reassigned
// 




const add = (a, b) => a + b;

console.log(add(5, 10)); // Output: 15

function myFunc(theArr) {
  theArr[0] = 30;
}

const arr = [45];

console.log(arr[0]); // 45
myFunc(arr);
console.log(arr[0]); // 30