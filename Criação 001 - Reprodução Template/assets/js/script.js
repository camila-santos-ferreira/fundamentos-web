// Case Sensitive => reconhece letras MAIUSCULAS e minusculas (e diferencia elas)
// camila / Camila

// document selector
// por tag: document.getElementsByTagName('h3')
// por classe: document.getElementsByClassName('.nomedaclasse')
// por nome: document.getElementsByName('email')
// por ID: document.getElementById('#idDoelemento')
// por seletor: document.querySelector('id/classe/nome')

// Variaveis:
//   var nome = 'camila' //jeito mais antigo
//   let nome = 'camila' //jeito mais atual - variavel que vai sofrer mudanças
//   const nome = 'Camila' //jeito mais atual - variavel 'fixa'

let digiteAlgo = document.querySelector('#digiteAlgo');

function validaCampo() {
  if (digiteAlgo.value.length < 5 ) {
    digiteAlgo.style.color = 'red';
    digiteAlgo.style.border = '1px solid red'
  } else {
    digiteAlgo.style.color = 'green'
    digiteAlgo.style.border = '1px solid green';
  }
}

let modal = document.getElementById('myModal')
let btn = document.getElementById('myBtn')
let span = document.getElementsByClassName('close')[0]

btn.onclick = function(){
  modal.style.display = 'block';
}

span.onclick = function(){
  modal.style.display = 'none';
}

window.onclick= function(event){
  if (event.target == modal){
    modal.style.display = 'none';
  }
}


