const bd = document.querySelector('body');

const fls=document.querySelector('#flashlight');


bd.addEventListener('mousemove',(e)=>{ 
    fls.style.setProperty("--Xpos",`${e.pageX}px`)
    fls.style.setProperty("--Ypos",`${e.pageY}px`)
})