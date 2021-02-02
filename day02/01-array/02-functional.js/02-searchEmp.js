let employees= ["Raiz","Alif","Fahmi","Ahmad","Dafa","Ale","Amar","Andi","Rizki"]

// //oldway
// function filterEmp(emps,prefix) {
//     let result = []
//     let resultArr = emps.filter(emp => emp.startsWith(prefix))

//     for (let i = 0; i < emps.length; i++) {
//         if(emps[i].startsWith(prefix)){
//             result.push(emps[i])
//         }
//     }
//     return resultArr    
// }

//arrow function 
let filterEmpArrowF = (emps,prefix) => emps.filter(emp=> emp.startsWith(prefix));
console.log(filterEmpArrowF(employees,"A"));
console.log(filterEmp(employees,"F"));