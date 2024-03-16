//  api = https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example

const inputText = document.querySelector('#input_text');
const downbtn = document.createElement('button');
const img = document.createElement('img')
const btn = document.querySelector('.button');
const div = document.querySelector('.qr-code');
btn.addEventListener('click',async()=>{
     const val= inputText.value

    const req = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${val}`)

     
     
     downbtn.textContent = ' download'
     img.src=req.url;

     div.append(img);
     div.append(downbtn);


})

downbtn.addEventListener('click',()=>{
    console.log("downbtnClic")
    const ca = document.createElement('a')
 
    ca.setAttribute("download", "qr_code.png");
      
    console.log(ca)
    ca.href=img.src
    downbtn.appendChild(ca)
    
})