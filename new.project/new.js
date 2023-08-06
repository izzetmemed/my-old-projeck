
document.addEventListener("DOMContentLoaded", () => {
  var first = document.querySelector(".first-i-button");
  var second = document.querySelector(".second-i-button");
  var boxHidden = document.querySelector(".box-hidden");
 
first.addEventListener("click", () => {
    boxHidden.scrollLeft-=400;
    console.log(boxHidden.scrollLeft);
  });
  second.addEventListener("click", () => {
    boxHidden.scrollLeft+=320;
    
  });
  var first1 = document.querySelector(".first-i-button1");
  var second2 = document.querySelector(".second-i-button2");
  var boxHidden3 = document.querySelector(".box-hidden3");
 
first1.addEventListener("click", () => {
    boxHidden3.scrollLeft-=400;
  });
  second2.addEventListener("click", () => {
    boxHidden3.scrollLeft+=520;
    
  });
  var first11 = document.querySelector(".first-i-button1-1");
  var second21 = document.querySelector(".second-i-button2-1");
  var boxHidden31 = document.querySelector(".box-hidden3-1");
 
first11.addEventListener("click", () => {
    boxHidden31.scrollLeft-=400;
  });
  second21.addEventListener("click", () => {
    boxHidden31.scrollLeft+=520;
    
  });

 

});
   const animation=document.querySelector(".animation");
 setInterval(time,2000);
 function time(){
  animation.scrollTop+=440;
 };
 setInterval(timing,6000);
 function timing(){
  animation.scrollTop-=1320;
  console.log(animation.scroll);
 };

 const phone=document.querySelector(".phone-animation");

 setInterval(rotate,1000);
 function rotate(){
  phone.style.color=phone.style.color == "lime" ? "darkslategrey" : "lime";
 }
