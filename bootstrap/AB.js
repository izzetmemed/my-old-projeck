function alternatingCharacters(s) {
      var y=0;
    for (let x = 0; x < s.length - 1; x++){
    if(s[x]==s[x+1]){
      y++;
      var b=s[x+1];
        s=s.replace(b,'');
    }
    else{
        continue;
    }
  }
console.log(y);
console.log(s);
}
alternatingCharacters("ABBAAAAABABABA");
