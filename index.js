// ul hidden then bar open and close 
let ul=document.getElementById('ul');
let barIcon=document.getElementById('icon-bar');
barIcon.onclick=()=>{
    ul.classList.toggle('hidden')
}
let section=document.querySelector('.box-about')
let span=document.querySelectorAll('.span span')
let pJs=document.querySelector('.js-about p')
console.log(pJs)
console.log(pJs)
window.onscroll=function (){
    if(window.scrollY >= section.offsetTop - 250){
        span.forEach((span)=>{
            span.style.width=span.dataset.width
        })

    }
}

