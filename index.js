



// let gg=` ${h}hr : ${m}min : ${i}sec: ${mm}milisec`


// st.addEventListener('click',()=>{ 
//     setInterval(()=>{ 
//         mm++;
//            td.innerHTML= ` ${h}hr : ${m}min : ${i}sec: ${mm}milisec`
         
       
//             if(mm>99){
//                mm=0;
//                i++;
//             }
//            if(i>59){
//                m++;
//                i=0;
//            }
//            if(m>59){
//                h++;
//                m=0;
//            }
//        },1)
// })

 

// rs.addEventListener('click',()=>{ 
//     h='00';
// m='00';
// mm=0;
//  i=0;
// })

// pause.addEventListener('click',(e)=>{ 
//     let w= td.innerHTML
//     console.log(w);
//     td.innerHTML=`${w}`;
// })

const td = document.querySelector('.timerDisplay');
const pause = document.querySelector('#pauseTimer');
const rs= document.querySelector('#resetTimer');
const st = document.querySelector('#startTimer');

let h = '00';
let m = '00';
let mm = 0;
let i = 0;
let intervalId;

st.addEventListener('click', () => { 
    intervalId = setInterval(() => { 
        mm++;
        td.innerHTML = `${h}hr : ${m}min : ${i}sec: ${mm}milisec`;
       
        if (mm > 99) {
            mm = 0;
            i++;
        }
        if (i > 59) {
            m++;
            i = 0;
        }
        if (m > 59) {
            h++;
            m = 0;
        }
    }, 10); // Changed interval to 10 milliseconds for better accuracy
});

rs.addEventListener('click', () => { 
    clearInterval(intervalId); // Stop the interval
    h = '00';
    m = '00';
    mm = 0;
    i = 0;
    td.innerHTML = `${h}hr : ${m}min : ${i}sec: ${mm}milisec`; // Update timer display
});

pause.addEventListener('click', () => { 
    clearInterval(intervalId); // Pause the interval
});
