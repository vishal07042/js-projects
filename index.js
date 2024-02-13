const btn = document.querySelector('.btn');

btn.addEventListener('click', async (e)=>{
const ed = new EyeDropper();
const  res =  await ed.open();
console.log(res.sRGBHex);

window.navigator.clipboard.writeText(res.
    sRGBHex);
} )