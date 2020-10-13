str = "Vishwanath";

str1 = {};
function getCount(str){

 for (let i=0; i<str.length; i++) {
     // console.log(str[i]);
     const ch = str[i];

     if(!str1[ch]) {
        str1[ch]=0;
     }
     str1[ch]++;
 }
 return str1;
}

 console.log(getCount("Vishwanath"));


