var newBtn = document.querySelector(".btn");
var tbl = document.querySelector(".tbl");
let container = document.querySelector(".container");
let x = 0;
let array = [];
let file = document.querySelector(".file");
let img = document.querySelector(".img-class");
let main = document.querySelector(".main");
let idString = [];
let textString = [];
let statuseString = [];
let storedItem2 = [];
let storedItem1 = [];
let storedItem3 = [];
    let input1 = document.querySelector(".input1");
    let input2 = document.getElementById("select1").value;
document.addEventListener("DOMContentLoaded", AllLesener);
 function work(){
  var count=(JSON.parse(localStorage.getItem("idarr"))).length;
  for(let i=0;i<count;i++){
  let store1 = JSON.parse(localStorage.getItem("idarr"));
  storedItem1.push(store1[i]);
  if (storedItem1 !== null) {
    console.log(storedItem1);
  } else {
    console.log("Item not found");
  }
  let store2 = JSON.parse(localStorage.getItem("textarr"));
  console.log(store2);
  storedItem2.push(store2[i]);
  if (storedItem2 !== null) {
    console.log(storedItem2);
  } else {
    console.log("Item not found");
  }
  let store3 = JSON.parse(localStorage.getItem("statusearr"));
  storedItem3.push(store3[i]);
  if (storedItem3 !== null) {
    console.log(storedItem3);
  } else {
    console.log("Item not found");
  }
  var th1 = document.createElement("th");
  th1.textContent = storedItem1[i];
  th1.className = "cth1";
  let th2 = document.createElement("th");
  th2.textContent = storedItem2[i];
  th2.className = "cth2";
  let th3 = document.createElement("th");
  th3.className = "cth3";
  th3.textContent = storedItem3[i];
  var tr1 = document.createElement("tr");
  input1.value = "";
  tr1.appendChild(th1);
  tr1.appendChild(th2);
  tr1.appendChild(th3);
  tbl.appendChild(tr1);
      }  }
function AllLesener() {
  newBtn.addEventListener("click", () => {

    if (array.every((a) => a !== input1.value)) {
      if (input1.value != "") { 
        x++;
        idString.push(x);
        textString.push(input1.value);
        let value3 = (input2.value = 1 ? "True" : "False");
        statuseString.push(value3);
        
        localStorage.setItem("idarr", JSON.stringify(idString));
        localStorage.setItem("textarr", JSON.stringify(textString));
        localStorage.setItem("statusearr", JSON.stringify(statuseString));

        let store1 = JSON.parse(localStorage.getItem("idarr"));
        storedItem1.push(store1[x - 1]);
        if (storedItem1 !== null) {
          console.log(storedItem1);
        } else {
          console.log("Item not found");
        }
        let store2 = JSON.parse(localStorage.getItem("textarr"));
        console.log(store2);
        storedItem2.push(store2[x - 1]);
        if (storedItem2 !== null) {
          console.log(storedItem2);
        } else {
          console.log("Item not found");
        }
        let store3 = JSON.parse(localStorage.getItem("statusearr"));
        storedItem3.push(store3[x - 1]);
        if (storedItem3 !== null) {
          console.log(storedItem3);
        } else {
          console.log("Item not found");
        }
        var th1 = document.createElement("th");
        th1.textContent = storedItem1[x - 1];
        th1.className = "cth1";
        let th2 = document.createElement("th");
        th2.textContent = storedItem2[x - 1];
        th2.className = "cth2";
        let th3 = document.createElement("th");
        th3.className = "cth3";
        th3.textContent = storedItem3[x - 1];
        var tr1 = document.createElement("tr");
        input1.value = "";
        tr1.appendChild(th1);
        tr1.appendChild(th2);
        tr1.appendChild(th3);
        tbl.appendChild(tr1);
      } else {
        alert("input is empty");
      }
    } else {
      alert("this information have already existed");
    }
  });
   
  file.addEventListener("change", () => {
    let div1 = document.createElement("div");
    div1.className = "film-div w-25 h-50 m-3";
    let img = document.createElement("img");
    img.className = "img-class w-100 h-100";
    let element = document.createElement("p");
    element.className = "element-p";
    div1.appendChild(img);
    div1.appendChild(element);
    main.appendChild(div1);

    let a = file.files[0];
    let url = URL.createObjectURL(a);
    img.src = url;
  });
}
work();
 