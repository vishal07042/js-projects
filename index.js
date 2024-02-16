
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
let str=''
const pass = document.querySelector('#password');

for(let i=0;i<2;i++){
    const w=Math.random().toString(36).slice(2);
    str+=w;
}


btn1.addEventListener('click',()=>{ 

    pass.value =`${str}`

})

btn2.addEventListener('click',()=>{ 
    navigator.clipboard.writeText(pass.value);

    pass.value=''
})