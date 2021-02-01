//fungsi dengan value, dan pengkondisian

function whoAmI(value){
    if(typeof value === "number"){
        return "you are number";
    }else if(typeof value === "string"){
        return "you are string";
    }else{
        return "undefine";
    }
}

console.log(whoAmI (45));