function reverse(angka) {
    var currentString = angka;
    var newString = '';
   for (let i = angka.length - 1; i >= 0; i--) {
     newString = newString + currentString[i];
    }
    
    return newString;
   }
   console.log(reverse('4263'));