// let arr=[1 , 100, -22,-33,45,23,-2]
// let frieds='i love makdfkf code ndkfsl much'
// let frieds='al434z43ero'

// let newArry=frieds.split("").filter(function (ele,ind,arr){
//     return parseInt(ele)?ele:false
// })
// let another=newArry.map((ele)=>{
//     return ele
// })
// console.log(newArry)
// console.log(another)
// let num=['@','a','@','l','@','z','@','e','@','r','@','o']
// let 
// let red=num.reduce((acc,curr)=>{})
// console.log(red)
// let alli=document.querySelectorAll('ul li')
// let aldiv=document.querySelectorAll('.content div')
// alli.forEach((ele,index)=>{
//     ele.addEventListener('click',()=>{
//         aldiv.forEach(content => {
//             content.classList.remove('active')
//         })
//         alli.forEach(tab => {
//             tab.classList.remove('active')
//         })
//         aldiv[index].classList.add('active')
//         alli[index].classList.add('active')
//     })
//     })

    
// console.log(aldiv)
// console.log(alli)

if(localStorage.length>0){
    document.body.style.background=localStorage.clor

}

function setColor(color){
    document.body.style.background=color;
    localStorage.clor=color
}



