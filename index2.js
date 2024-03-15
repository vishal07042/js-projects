const flipbutton = document.querySelector('#flip-button');
let coin = document.querySelector(".coin");
const headscount = document.querySelector('#heads-count');
const head = document.querySelector('.head');
const tailsCount = document.querySelector('#tails-count');
const resetbtn = document.querySelector('#reset-button');


let hc = 0;
let tc = 0;

flipbutton.addEventListener('click', () => {

  

  

    const ans = Math.floor(Math.random() * 2);
    console.log(ans);
    coin.style.animation = "none";

    if (ans) {
      
        
        hc++;
        head.src = 'https://venkatarun.files.wordpress.com/2015/11/india-1-rupee-2013.jpg'
        headscount.innerHTML = `heads ${hc}`
    } else {

     
        tc++;

        head.src = 'https://qph.cf2.quoracdn.net/main-qimg-9c81a54813716fccd8e3608ab2f51dcf-lq'
        tailsCount.innerHTML = `tails ${tc}`
    }




})


resetbtn.addEventListener('click',()=>{
    hc=0;
    tc=0;
    headscount.innerHTML = `heads ${hc}`
    tailsCount.innerHTML = `tails ${tc}`
})


