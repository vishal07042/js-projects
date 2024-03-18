const startbutton = document.querySelector('#start-button');
const startScreen = document.querySelector('.start-screen');
const queContainer = document.querySelector('#container');

const displaycontainer = document.querySelector('#display-container');
const ee = document.getElementsByTagName('p');
const nextbutton = document.querySelector('.nextbtn');
const scorc = document.querySelector('.score-container');
const userscore = document.querySelector('#user-score');

let acount =0;

// startbutton.addEventListener('click',()=>{
//     console.log('start clicked');
//     // displaycontainer.classList.remove('visibility')
//     displayContainer.classList.remove("hide");
//     console.log(displaycontainer.classList)
// })



const quizArray = [
  {
    id: "0",
    question: "Which is the most widely spoken language in the world?",
    options: ["Spanish", "Mandarin", "English", "German"],
    correct: "Mandarin",
  },
  {
    id: "1",
    question: "Which is the only continent in the world without a desert?",
    options: ["North America", "Asia", "Africa", "Europe"],
    correct: "Europe",
  },
  {
    id: "2",
    question: "Who invented Computer?",
    options: ["Charles Babbage", "Henry Luce", "Henry Babbage", "Charles Luce"],
    correct: "Charles Babbage",
  },
];

startbutton.addEventListener('click', () => {
  startScreen.classList.add('hide');
  displaycontainer.style.visibility = "visible"

  const rq = Math.floor(Math.random() * 3);
  let k = [];
  quizArray.map((es) => {

    const btn = document.createElement('button');
    btn.setAttribute('id', 'next-button');
    btn.textContent = 'Next'
    // queContainer.append(btn);

    const el = document.createElement('div');
    el.textContent = `${es.question}`
    k.push(es.options);

    el.classList.add('question');
    queContainer.append(el);


    es.options.map((e) => {

      const op = document.createElement('p');
      op.classList.add('option-div')
      op.textContent = e;
      queContainer.append(op);

      op.addEventListener('click', (e) => {
        console.log(e);
        if (e.target.innerText == es.correct) {

          op.classList.add('correct')
          acount++;


        } else {

          op.classList.add('incorrect');
          // console.log(e)
          // console.log(op);

          // console.log(ee);
        }
        // console.log(e.target.innerText);

      })

    })

  })


})






nextbutton.addEventListener('click', () => {
  const arre = Array.prototype.slice.call(ee);

  arre.map((e)=>{ 
    if(e.innerText  ==  "Mandarin" || e.innerText == "Europe" || e.innerText == "Charles Babbage" ){ 
      e.classList.add('correct')
     }else { 

     e.classList.add('incorrect');
      }

  })

  setTimeout(()=>{ 
    scorc.classList.remove('hide');
      userscore.innerHTML = `<h1> score is ${acount} out of 3</h1>`;
      queContainer.classList.add('hide');
      displaycontainer.classList.add('hide');



  },2000)
  
})