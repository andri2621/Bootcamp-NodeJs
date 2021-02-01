// function declaration
function foo(){
    return "Foo";
}

console.log(foo());


//function expression
const fnc_exp = function (value){
    return value;
}

console.log(fnc_exp);

//function expression with name
const fnc_exp = function foo(value){
    return value;
}

console.log(fnc_exp);

//arrow function
const fn_arrow = () =>{

}

//arrow function with parameter
const fn_arrow = (value) =>{
    "hello" +value
}

console.log(fn_arrow("JS"));