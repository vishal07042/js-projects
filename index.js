const dayName = document.querySelector('#dayName');

const tt= document.querySelector('#time');




// setInterval(()=>{ 
//     tt.innerText=t
// },1000)
setInterval(()=>{ 

    const w= new Date();
    dayName.innerHTML= w.toDateString()
    const   ww=w.toTimeString()
      const t= ww.slice(0,8);
   // console.log(t);
    tt.innerText=t
},1000)