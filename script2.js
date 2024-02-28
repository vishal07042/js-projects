const btn = document.querySelector(' #startStopButton ')
const numDice = document.querySelector('#numDice');
const numSides = document.querySelector('#numSides');
const output = document.querySelector('#output');



btn.addEventListener('click', () => {

    let sum = 0;
    let w = 0;
    // console.log(numSides.value);
    // console.log(numDice.value);
    let nd = numDice.value
    let ns = numSides.value
    let sums = document.createElement('h1')
    for (let i = 1; i <= nd; i++) {
        const die = document.createElement('h1');
        sum = 0;
        setInterval(() => {
            const randNum = Math.floor(Math.random() * 6);
            // console.log(randNum)
            // p.innerText = `${randNum}`;
            die.textContent = `Die ${i} : ${randNum}`
            sum += randNum;
            w = sum
            sums.textContent = ` sum ${w}`;
            console.log(sum);
            w=0;
           

        }, 1000);
        sum=0;
        
        console.log('die1')
        output.append(die);
        output.append(sums);

    }

    const p = document.createElement('p');
    output.append(p);


})


