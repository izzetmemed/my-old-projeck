var input=document.querySelector(".input-tag");
var button=document.querySelector(".btn");
var big=document.querySelector(".big");
var bigger=document.querySelector(".bigger");
var arr=[];
document.addEventListener("DOMContentLoaded",addAll);

function addAll(){
button.addEventListener("click", ()=>{
 
    let Todo=prompt("Write your todo...");

    if(Todo==="" || Todo===null){
     alert("it is empty here..")}
else{
     var div1=document.createElement("div");
     div1.className="d-flex justify-content-center m-2";
     var div2=document.createElement("div");
     div2.className="text d-flex justify-content-between  p-2 bg-light"
     var elemp=document.createElement("p");
     elemp.className="firstp d-inline-block";
     elemp.textContent=Todo;
     var div3=document.createElement("div");
     var btn1=document.createElement("button");
     btn1.className="btn btn-outline-danger";
     btn1.textContent="Delete";
     var btn2=document.createElement("button");
     btn2.className="btn btn-outline-success";
     btn2.textContent="Edit";

     div2.appendChild(elemp);
     div1.appendChild(div2);
     div3.appendChild(btn1);
     div3.appendChild(btn2);
     div2.appendChild(div3);

     big.appendChild(div1);
     bigger.appendChild(big);

     arr.push(Todo);
    }
})
input.addEventListener("keyup",()=>{
    var pelement=document.querySelectorAll(".firstp").value;
    for(var i=0;i<input.value.length;i++){
if(pelement[i]==input.value[i]){
    pelement.style.display='block';
}
else{
    pelement.style.display='none';
}
}
})

}