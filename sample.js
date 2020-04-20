
let longest = function(arr) {
    let long = 0;
    for (i =0; i < arr.length; i++) {
        let splited = arr[i].split(' ');
        if(splited.length > long) {
            long = splited.length;
        }
      return long;
    }
}
console.log(longest(['asswd', 'adf', 'adaerfvgsrtg']));


// function findLongestWord(str) {
//     str = str.split(' ');
//     var longest = 0;
  
//     for(var i = 0; i < str.length; i++) {
//        if(str[i].length >= longest) {
//          longest = str[i].length;
//           } 
//        }
//     return longest;
//   }
//   console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));