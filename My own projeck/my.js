// class person{
//     constructor(tbl) {
//         this.tbl = document.createElement("table");
//       }
//  body(th1v,th2v,th3v){
//     let th1=document.createElement("th");
//     th1.textContent=th1v;
//     let th2=document.createElement("th");
//     th2.textContent=th2v;
//     let th3=document.createElement("th");
//     th3.textContent=th3v;
    
//     let tr=document.createElement("tr");

   

//     tr.appendChild(th1);
//     tr.appendChild(th2);
//     tr.appendChild(th3);

//     this.tbl.appendChild(tr);

//     let bdy=document.querySelector("body");

//     bdy.appendChild(this.tbl);
//    }
//    row(td1v,td2v,td3v){
//     let td1=document.createElement("td");
//     td1.textContent=td1v;
//     let td2=document.createElement("td");
//     td2.textContent=td2v;
//     let td3=document.createElement("td");
//     td3.textContent=td3v;

//     let tr1=document.createElement("tr");

//     tr1.appendChild(td1);
//     tr1.appendChild(td2);
//     tr1.appendChild(td3);
    
//     let tbl=document.querySelector("table");
//     tbl.appendChild(tr1);

//    }
// }

// let person1 = new person("tbl");
// person1.body("Name", "Surname", "Age");
// person1.row("Izzet", "Memmedov", "21");
// person1.row("Izzet", "Memmedov", "21");
// person1.row("Izzet", "Memmedov", "21");
// person1.row("Izzet", "Memmedov", "21");
// person1.row("Izzet", "Memmedov", "21");
// person1.row("Izzet", "Memmedov", "21");
// person1.row("Izzet", "Memmedov", "21");
// person1.row("Izzet", "Memmedov", "21");
// person1.row("Izzet", "Memmedov", "21");
// person1.row("Izzet", "Memmedov", "21");
// person1.row("Izzet", "Memmedov", "21");
for(var i=0;i<4;i++){
    setTimeout(()=>console.log(i),1000);}
for(let i=0;i<4;i++){
    setTimeout(()=>console.log(i),1000);}