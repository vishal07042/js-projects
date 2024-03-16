const btn = document.querySelector('#speak-button');
const texArea = document.querySelector('#text');
const pause = document.querySelector('.pause');
btn.addEventListener('click', async () => {
    let textoSpech =  await new SpeechSynthesisUtterance(texArea.value)

    console.log(typeof texArea.value)


     await speechSynthesis.speak(textoSpech)
     


//      let utterance = new SpeechSynthesisUtterance("Hello world!");
// speechSynthesis.speak(utterance);


})

// pause.addEventListener('click',()=>{
//     console.log("paused clicked")
// speechSynthesis.pause();
    
// })