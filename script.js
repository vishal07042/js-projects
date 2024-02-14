 const btn=document.querySelector('#generateBtn');
 const p=document.querySelector('#otpDisplay');
 
 
 

 btn.addEventListener('click',genotp)
 function genotp(){ 

    const w= Math.random()*60000;
  const f=   w.toString(6);
  const k= f.slice(0, 6)

  p.innerHTML=k;

   
 }



 genotp();