module.exports = function reverse (n) {
      // return +Math.abs(n).toString().split('').reverse().join('');
      let s = '';
      let str = Math.abs(n).toString();
       for(let i = str.length -1; i >= 0; i--){
           s = s + str[i];
       }
         return +s;
}

