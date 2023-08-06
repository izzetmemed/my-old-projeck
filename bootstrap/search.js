let same=0;
let dif=0;
let arr=[];
function diffrentletters(s){
for(let i=0;i<s.length;i++){
  for(let u=0;u<s.length;u++){
    if(s[i]===s[u]){
      same++;
      arr.push(s[i]);
      s=s.replaceAll(s[i],'');
      
    }else{
      dif++;
    }

  }
}
}
console.log(arr);
console.log(dif);
console.log(same);
diffrentletters("qazqazqazw");