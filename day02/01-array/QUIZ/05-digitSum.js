// console.log(digitSum(4242));
// console.log(digitSum(12345));
// Output :
// 12
// 15


function digitSum(arr) {
    let sum = 0;
    let com = arr.split("");
    for (const val of com) {
      sum += val;
    }
    return sum;
  }
  
//   console.log(digitSum([1, 3, 5, 7])); // 16
  console.log(digitSum([1,2,3,4,5]))

