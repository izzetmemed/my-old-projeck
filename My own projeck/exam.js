var text=document.querySelector(".input-text");
var password=document.querySelector(".input-password");
var btn=document.querySelector(".input-btn");
var btnn=document.querySelector(".new1");
var maindiv=document.querySelector(".main");
var body=document.querySelector("body");
var text_array=[];
var password_array=[];
var last_text=[];
var last_password=[];
document.addEventListener("DOMContentLoaded", allfunc);
function allfunc(){
btnn.addEventListener("click", create);
btn.addEventListener("click", check);

}
function create(){
  text_array.push(text.value);
  password_array.push(password.value);
  localStorage.setItem("Text",JSON.stringify(text_array));
  localStorage.setItem("Password",JSON.stringify(password_array));
};
function check(){
    let t=JSON.parse(localStorage.getItem("Text"));
    let p=JSON.parse(localStorage.getItem("Password"))
    let ta=Array.from(t);
    let pa=Array.from(p);
    last_text.push(ta[ta.length-1]);
    last_password.push(pa[pa.length-1]);
    last_text.forEach((x)=>{
        if(x==text.value){
            last_password.forEach((y)=>{
                if(y==password.value){
                    alert("Your password is true")
                }
            })
        }
    })
}
