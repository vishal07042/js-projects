
// img.addEventListener('mouseover',  (e)=>{ 



//   for(let i=0;i<67;i++){
// //    ` img.style.transform='scale(${i})';`
// //    i=i+1.06;
// w=i;
//   }
//   setInterval(()=>{ 
//     ` img.style.transform='scale(${w})';`

//   })

  
// })

const img = document.querySelector('img');
let w = 1;

img.addEventListener('mouseover', (e) => {
  for (let i = 0; i < 67; i++) {
    setTimeout(() => {
      w = i;
      img.style.transform = `scale(${w})`;
    }, i * 900); // Adjust the interval duration as needed
  }
});
