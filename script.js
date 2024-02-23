const apiKe = "2f3c792d6cc7687cae9e740d";

let api = `https://v6.exchangerate-api.com/v6/${apiKe}/latest/USD`;

const res = document.querySelector('#result');

const convertBtn = document.querySelector('#convert-button')

const fromDropDown = document.getElementById("from-currency-select");
const toDropDown = document.getElementById("to-currency-select");

const amt = document.querySelector('#amount');


currencies.map((e) => {

    const w = document.createElement('option')

    w.value = e
    w.text = e

    toDropDown.add(w);

    // fromDropDown.add(w)

})

currencies.map((e) => {

    const w = document.createElement('option')

    w.value = e
    w.text = e

    //  toDropDown.add(w);

    //   

    fromDropDown.add(w)

})


// fromDropDown.addEventListener('change', ()=>{ console.log(fromDropDown.value)})


// https://v6.exchangerate-api.com/v6/YOUR-API-KEY/pair/EUR/GBP/AMOUNT

convertBtn.addEventListener('click', async (e) => {
    const val = amt.value
    const up = fromDropDown.value
    const down = toDropDown.value

    const data = await fetch(`https://v6.exchangerate-api.com/v6/${apiKe}/pair/${up}/${down}/${val}`)

    const dd = await data.json();
    console.log(dd);


   // console.log(dd.conversion_result)

    res.innerHTML = dd.conversion_result




})