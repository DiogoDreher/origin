//2

// alert("Olá Mundo");

//console.log("Olá Mundo");

//3

// window.addEventListener('load', function(){
//   let products = document.getElementById('products');
//   console.log(products);
// });


//4

// let form = document.getElementsByTagName('form');
// let secChild = document.querySelector('form');
// console.log(form);
// console.log(secChild[1]);
//
// let allEntries = document.querySelectorAll('input');
// let i = 0;
// for(i=0; i<allEntries.length; i++){
//   console.log(allEntries[i].outerHTML);
// }


//5

let form = document.getElementsByTagName('form')[0];
form.addEventListener('submit', function(){
  alert('Submitted!!');
  event.preventDefault();
});
