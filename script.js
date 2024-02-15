const red = document.querySelector('#red')
const green = document.querySelector('#green')
const blue = document.querySelector('#blue')

const container = document.querySelector('.container');

const res = document.querySelector('.res');

const btn = document.querySelector('#copy-btn');


let r1=0;
let g1=0;
let b1=0;

red.addEventListener('change',(e)=>{ 
   // console.log("changed")
    r1=e.target.value
    res.value=`rgb(${r1},${g1},${b1},)`
   
   // console.log(r1);

//    return r1;
})
green.addEventListener('change',(e)=>{ 
 //   console.log("changed")
 
    g1= e.target.value
    // res.value=`rgb(${g1},${r1},$b1)`
    res.value=`rgb(${r1},${g1},${b1},)`
    // return g1
})
blue.addEventListener('change',(e)=>{ 
  //  console.log("changed")
 
    b1= e.target.value
    res.value=`rgb(${r1},${g1},${b1},)`
})



btn.addEventListener('click', ()=>{ 
    let w=res.value
    navigator.clipboard.writeText(w);
})