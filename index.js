// console.log('walaa')
let title=document.getElementById('title')
//alert(title.innerHTML)
title.innerHTML="Full stack trainig with RonyRisck"

// let container = document.getElementById('container')
// let myButton = document.createElement('button')
// // myButton.innerText=('Click me')
// container.appendChild(myButton)

// let names =['walaa','ahmad','Elene','Mhmd']
// names.forEach(name => {
//     let container = document.getElementById('container')
// let myButton = document.createElement('button')
// myButton.innerText=(name)
// container.appendChild(myButton)
// });
console.log(data)

let Users = JSON.parse(data)
console.log(Users)

Users.forEach(user=> {
    let container = document.getElementById('container')
    let myButton = document.createElement('button')
    myButton.innerText=(user.name)
    container.appendChild(myButton)
    
    
});

let ddl_users=document.getElementById('ddl')

Users.forEach(user=> {
    let option1 = document.createElement('option')
    option1.innerHTML=user.name;
    ddl_users.appendChild(option1)
    
});