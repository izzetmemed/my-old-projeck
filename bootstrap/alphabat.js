 var alphabet=["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
 var text="";
function pangrams(s) {
   
    if(0<s.length || s.length<1000){
        s=s.toLowerCase();
        Array.from(s);
        for (let x of alphabet){
            for( let i=0;i<s.length;i++){
                if(x==s[i]){
                    text=alphabet.toString();

                    alphabet.replace(x,"").push()
                    break;
                }
            }
        }
        if(alphabet.every(x=> x="")){
            console.log("pangram");
        }else{
            console.log("not pangram");
        }
    }
    

}
console.log(text);
pangrams("lwwwwwwwiouiyiu9tercxbn\\.,'[POPWIYYU GHFGghAL[IOW[[QDBXMX")