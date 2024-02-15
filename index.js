const date = document.querySelector("#date");
const mm = document.querySelector("#month");
const yy = document.querySelector("#year");



const btn = document.querySelector('.btn');


btn.addEventListener('click',()=>{ 
    const datee = new Date();

   const nd=datee.getDate()-date.value
    const md= datee.getMonth()-mm.value
    const yd  = datee.getFullYear()-yy.value
 //

//   
     console.log(nd);
     console.log(md);
     console.log(yd);


 })



