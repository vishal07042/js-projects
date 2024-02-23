


let letters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const docu = document.querySelector('#container');

const counts = document.querySelector('.count');
let w = 0;
const generateRandomValue = (array) =>
    array[Math.floor(Math.random() * array.length)];

let ac = [];

let count =0;



//Generate Hex Codes
const colorGenerator = () => {
    let newColor = "#";
    for (let i = 0; i < 6; i++) {
        newColor += generateRandomValue(letters);
    }

    //   const p=document.createElement('p');
    //   p.textContent = newColor;
    //   docu.append(p);
    ac.push(newColor);
    return newColor;
};

const createButtonWithColor = (color) => {
    const btn = document.createElement('button');
    btn.style.backgroundColor = color;
    btn.classList.add('button-container');
    btn.classList.add('option-div');
    return btn;
};



const addButtons = (numButtons) => {
    for (let j = 0; j < numButtons; j++) {
        const newColor = colorGenerator();
        const btn = createButtonWithColor(newColor);
        docu.appendChild(btn);

        btn.addEventListener('click', () => {

            w = Math.floor(Math.random() * 4);

            const pp = document.createElement('p');

            pp.textContent = ac[w];
          //  docu.append(pp);
           // console.log(newColor);
           console.log(ac[w])

            if(ac[w] == newColor){
                console.log("correct")

                const h11 = document.createElement('h1')
                h11.textContent = 'correct'
                document.body.append(h11);
                count+=1;
                counts.textContent =`${count}`
                addButtons()
            }
        });// Append button to the container
    }
};

// Call addButtons to generate and add buttons
addButtons(4); // Generate 4 buttons



const d3 = document.createElement('h1')

d3.innerHTML =ac[w];

document.body.prepend(d3);






