// TITRE PAGE
let getPresentation = document.getElementById('presentation')
getPresentation.innerHTML = `<h1 class="mt-5 pt-5 pb-4 d-flex justify-content-center">Votre panier</h1>`

// RECUPERATION ET AFFICHAGE DU PANIER
const monPanier = JSON.parse(sessionStorage.getItem('panier'))

let teddie = monPanier
monPanier.forEach(teddie => {  
  let listeElement = document.createElement("li")
  listeElement.setAttribute('class','list-group-item')

  let teddieName = document.createTextNode(teddie.name)
  let teddiePrice = document.createTextNode(teddie.price/100 + ',00 €')
  let photo = document.createElement('img')

  photo.setAttribute('src', teddie.imageUrl)
  photo.setAttribute('alt','Photo de Teddie made in France')
  photo.width = 200

  listeElement.appendChild(photo)
  listeElement.appendChild(teddieName)
  listeElement.appendChild(teddiePrice)
  document.getElementById("affichage").appendChild(listeElement)
}) 

// CALCUL ET ENVOI DU TOTAL PRICE DANS LE SESSION STORAGE
let price = 0
monPanier.forEach(totalPrice => {
  price += totalPrice.price
  sessionStorage.setItem('price',JSON.stringify(price))
})

// RECUPERATION DES INPUTS
let firstName = document.getElementById('inputFirstName'),
  lastName = document.getElementById('inputLastName'),
  address = document.getElementById('inputAddress'),
  city = document.getElementById('inputCity'),
  email = document.getElementById('inputEmail')


// RETOURNE INFO AU VISITEUR SI INPUTS INCORRECTS
let testForm = document.getElementById('bouton_envoi')

let noFirstName = document.getElementById('noFirstName'),
  noLastName = document.getElementById('noLastName'),
  noAddress = document.getElementById('noAddress'),
  noCity = document.getElementById('noCity'),
  noEmail = document.getElementById('noEmail')
 
// REGEX - EXPRESSION REGULIERE
const caracteresValid = /^[a-zA-Zéèîï][a-zéèêàçïîÉÈ]+([-'\s][a-zA-Zéèîï][a-zéèêàçïîÉÈ]+)?[^0-9]+$/ 
const valeursValidAddress = /^[a-z0-9]+\s[a-z0-9]+$/ 
const valeursValidMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
testForm.addEventListener('click', formValid) 

// TEST FORMULAIRE
function formValid(e){
  if (inputFirstName.validity.valueMissing) {
      e.preventDefault()
      noFirstName.textContent = 'Prénom manquant'
      noFirstName.style.color = 'red'
  }else if (caracteresValid.test(inputFirstName.value) == false) {
      event.preventDefault()
      noFirstName.textContent = 'format incorrect'
      noFirstName.style.color = 'orange'
  }else{
    console.log('Prénom ok')
  }
  if (inputLastName.validity.valueMissing) {
      e.preventDefault()
      noLastName.textContent = 'Nom manquant'
      noLastName.style.color = 'red'
  }else if (caracteresValid.test(inputLastName.value) == false) {
      event.preventDefault()
      noLastName.textContent = 'format incorrect'
      noLastName.style.color = 'orange'
  }else{
    console.log('Nom ok')
  }
  if (inputAddress.validity.valueMissing) {
      e.preventDefault()
      noAddress.textContent = 'Adresse manquante'
      noAddress.style.color = 'red'
  }else if (valeursValidAddress.test(inputAddress.value) == false) {
      event.preventDefault()
      noAddress.textContent = 'format incorrect'
      noAddress.style.color = 'orange'
  }else{
    console.log('Adresse ok')
  }
  if (inputCity.validity.valueMissing) {
      e.preventDefault()
      noCity.textContent = 'Ville manquante'
      noCity.style.color = 'red'
  }else if (caracteresValid.test(inputCity.value) == false) {
      event.preventDefault()
      noCity.textContent = 'format incorrect'
      noCity.style.color = 'orange'
  }else{
    console.log('Ville ok')
  }
  if (inputEmail.validity.valueMissing) {
      e.preventDefault()
      noEmail.textContent = 'Email manquant'
      noEmail.style.color = 'red'
  }else if (valeursValidMail.test(inputEmail.value) == false) {
      event.preventDefault()
      noEmail.textContent = 'format incorrect'
      noEmail.style.color = 'orange'
  }else{
    console.log('Mail ok')
  }
}

// CLICK VALIDATION FORMULAIRE
let validation = document.getElementById('bouton_envoi')
validation.addEventListener('click', function() { //formValid()
  let contact = {
    firstName: firstName.value,
    lastName: lastName.value,
    address: address.value,
    city: city.value,
    email: email.value
  }
  
// PARCOURS LES PRODUITS ET ENVOI ID
  let products = [] 
     for(let i = 0; i < products.length; i++) {
      products.push(teddie._id)
     }

// REGROUPEMENT EN UN SEUL OBJET
    let postData = {
      contact, products,
    }
    let jsonPostData = JSON.stringify(postData)

// ENVOI DES DONNEES
    fetch('http://localhost:3000/api/teddies/order', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: jsonPostData
  })

.then(response => response.json()) 
.then(data => sessionStorage.setItem('orderId', data.orderId))
  sessionStorage.setItem('firstName', firstName.value)
  document.location.href = 'commande.html'
})


//https://developer.mozilla.org/fr/docs/Learn/Forms/Form_validation 