 const btn = document.querySelector(' #startStopButton ')
 const numDice = document.querySelector('#numDice');
 const numSides = document.querySelector('#numSides');
const output = document.querySelector('#output');

 btn.addEventListener('click',()=>{ 


   let nd= numDice.value
 let ns = numSides.value
    console.log(nd)
    console.log(ns);

   setInterval(() => {
      for(let i=1 ;i<nd; i++){ 

         const die = document.createElement('p');
             die.textContent = `Die ${i} : ${Math.floor(Math.random()*ns)}`
             console.log('die1')
   
             output.append(die);
   
   
   
   
         }
   }, 1000);
   
 

     


      // const  cel = document.createElement('p');

      // cel.textContent = "wwe ";

      // output.append('cel');

 })



