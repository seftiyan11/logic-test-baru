const str = 'Hello World';
const isUpperCase = char => char.charCodeAt(0) >= 65 && char.charCodeAt(0)<= 90;
const isLowerCase = char => char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122;
const alternateCase = str => {
   let newStr = '';
   const margin = 32;
   for(let i = 0; i < str.length; i++){
      const curr = str[i];
      if(isLowerCase(curr)){
         newStr += String.fromCharCode(curr.charCodeAt(0) - margin);
      }else if(isUpperCase(curr)){
         newStr += String.fromCharCode(curr.charCodeAt(0) + margin);
      }else{
         newStr += curr;
      };
   };
   return newStr;
};
console.log(alternateCase(str));