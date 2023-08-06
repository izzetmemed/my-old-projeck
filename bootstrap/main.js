var p=["h", "a", "c", "k", "e", "r", "r", "a", "n", "k"];
var word="";
var result=[];
function hackerrankInString(s) {
    for (let x of p){
       var arr_str= Array.from(word);
            if(arr_str.some(y=> y==x)){
                result.push("Yes");
                var z=word.indexOf(x)
                var c=word[z];
                word=word.replace(c,"");
            }
            else{
                 result.push("No");
                
            }
        
    }
   if (result.every(b=> b=='Yes')){
        console.log("Yes")
    }else{
        console.log("No")
    }

}
hackerrankInString()
console.log(result);