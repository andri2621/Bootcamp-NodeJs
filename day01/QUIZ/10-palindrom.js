// s = string yang diinput
function isPalindrome(k){
    var kalimat = k.toLowerCase();
//me-reverse
    var currentString = kalimat;
    var newString = '';
   for (let i = kalimat.length - 1; i >= 0; i--) {
     newString = newString + currentString[i];
    }
    
    if(kalimat == newString){
        console.log("kalimat ini palindrome");
    }else{
        console.log("kalimat ini bukan palindrome");
    }

    

}
return isPalindrome("Kasur INI rusak");



// Output : true
// Case sensitive diabaiakan