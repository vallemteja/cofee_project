let man=document.querySelectorAll('ul')
let openMan=document.querySelectorById('#opener')
let closeMan=document.querySelectorAll('#closer')

openMan.addEventListener('click',()=>{
    man.style.top='0'
})

closeMan.addEventListener('click',()=>{
    man.style.top='-100vh'
})