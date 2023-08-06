// function absentVowel(x){
// let letters=["a","e","i","o","u"];
// letters.forEach(a=>{if(!x.includes(a)){
//     console.log(letters.indexOf(a));
// }})
// }

// absentVowel("Bb Smith sent us six neatly arranged range bicycles");

// function friend(friends){
//     let myFriends=[];
//     friends.forEach(x=>{if(x.toString().length==4 && isNaN(x)){
//         myFriends.push(x);
//     }})
//     return myFriends;
//   }

//   friend(["Ryan", "Kieran", "Mark","1"]);

// function openOrSenior(data){
//      let array=[];
//     for(let [o,b] of data){
//         oarray.filter(x=>(x>=55 && barray[oarray.findIndex(x)]>7)?array.push("Open"):array.push("Senior"));
    
//     }
// console.log(array);
   
   
//   }
//   openOrSenior([[2,7],[4,6]]);

// function findShort(s){
//     let news=s.split(" ").sort((a,b)=>{return a.length-b.length});
//     return news[0].length;
// }
// findShort("Let's travel abroad shall we");

// function arrayDiff(a, b) {
//   let array=[];
//   for(let x of b){
//     a.forEach(y=>{if(y!=x){
//         array.push(y);}
// })
//     return array;
//   }
// }

// arrayDiff([1,2,2], []);

// function maskify(cc) {
// let four=cc.substring((cc.length-4),cc.length);
// console.log(Number(four.padStart(cc.length,"#")));
// }
// maskify('1');

// function digPow(n, p){
//     let string=n.toString();
//      let sum=0;
//      for(let i=0;i<string.length;i++){
//    sum+=Math.pow(string[i],p+i)
// }
// let k=sum/n
// if(Number.isInteger(k)){
//  return k;
// }else{
//     return -1;
// }
//   }
//  digPow(46288, 3);

//  function cakes(recipe, available) {
//     let array=[];
//     let k=[];
//     let key=Object.keys(recipe);
//   for(let i=0;i<Object.keys(recipe).length;i++){
//   array.push(Object.hasOwn(available, Object.keys(recipe)[i]));
//   k.push(Math.floor(available[key[i]]/recipe[key[i]]))
//     }
//     if(array.every(x=>x=="true") && k.every(x=>x>=1)){
//       return k.sort((a,b)=>{a-b})[0]; 
//     }
//     else{
//         return "0";
//     }
//   }
//   let recipe = {flour: 500, sugar: 200, eggs: 1};
//   let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
//   cakes(recipe, available);
//   recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
//   available = {sugar: 500, flour: 2000, milk: 2000};
//   cakes(recipe, available);

//   function order(words){
//     words.split(" ").map(x=>
//       (Array.from(x).filter(y=>typeof(y)=="number")).sort((a,b)=>{return a-b}
//     ))
//      console.log(words);
//   }
//   order("ujh4 kok3 kpp1 lpp2");

// function findOdd(A) {
//     let map =new Map();
//     let count=1;
//     A.forEach(x=>{map.set(x,count++)})
// console.log(map);
//   }

//   findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
//   findOdd([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
//   findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
//   findOdd([10], 10);
//   findOdd([1,1,1,1,1,1,10,1,1,1,1], 10);
//   findOdd([5,4,3,2,1,5,4,3,2,10,10], 1);

// function findMissingLetter(array){
//     array=Array.from(array.join("").toString().toLowerCase());
//   let alphabet=["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//  let element=alphabet.toString().substring((alphabet.indexOf(array[0]),array.length+1));
//    let differ= element.filter(y=>!array.includes(y));
//    console.log(differ.toString());
// }

// findMissingLetter(['O','Q','R','S'])
// function createPhoneNumber(numbers) {
//   let main = numbers.join("").toString().substring(0, 3).padStart(4, "(").padEnd(5, ")");
//   console.log(main);
// }

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

// function createPhoneNumber(numbers) {
//   let main = numbers.join("").toString().substring(0, 3).padStart(4, "(").padEnd(5,")");
//   let second=numbers.join("").toString().substring(3, 6);
//   let third=numbers.join("").toString().substring(6, 9);
//   console.log(main+" "+second+"-"+third);

// }

// createPhoneNumber([1, 5, 3, 7, 5, 6, 8, 3, 9, 0]);

// function sortArray(array) {
//  let arr= array.filter(x=>x%2==1).sort((a,b)=>a-b);
//  let index=arr.map(x=>x=array.indexOf(x)).sort((a,b)=>a-b);
//  for(let i=0;i<arr.length;i++){
//   array[index[i]]=arr[i];
//  }
//  return array;
// }
// sortArray([5, 3, 1, 8, 0]);
// function countSmileys(arr) {
//   let array=[[";",":"],["-","~"],[")","D"]];
//   let arrTrue=[];
//   let[num1,num2,num3]=array;
//   for(let i=0;i<arr.length;i++){
//     array.forEach(x=>{x.forEach(y=>{if(arr.includes(y)){
//       arrTrue.push(y);
//     }})})
//   }console.log(arrTrue)
// }
// countSmileys([':D',':~)',';~D',':)'])

// function disemvowel(str) {
//   let pattern=/[^aoiue]/gi;
//   console.log(str.match(pattern).join("").toString());
// }
// disemvowel("What are you, a communist?")

// function expandedForm(num) {
//   var result=[];
//    num=num.toString();
//     for(let i=0;i<num.length;i++){
//       if(num[i]!=0){
//       result.push(num[i].padEnd(num.length-i,"0"))}
//     }
//     return result.join("+").toString();
//   }
//   expandedForm(42);

// function uniqueInOrder(iterable){
// for(let i=0;i<iterable.length;i++){
//   if(iterable[i]=iterable[i+1]){
//     iterable=iterable.replace(iterable[i],"");
//   }
// }
// console.log(iterable);
// }
// uniqueInOrder('AAAABBBCCDAABBB')
// function tribonacci(signature,n){
//   if(n>3){
//   for(let i=3;i<n;i++){
//     signature[i]=signature[i-1]+signature[i-2]+signature[i-3];}
//   }if(0<n<4){
//    signature=[signature[n-1]];
//   }else{
//     signature=[0];
//   }
  
//  console.log(signature);
// }
// tribonacci([1,2,3], 0)