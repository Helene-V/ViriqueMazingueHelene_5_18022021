// RECUPERATION ET AFFICHAGE DU PANIER
const monPanier = JSON.parse(sessionStorage.getItem('panier'))

let teddie = monPanier
monPanier.forEach(teddie => {  
  let listeElement = document.createElement("li")
  listeElement.setAttribute('class','list-group-item d-flex justify-content-between align-items-center')

  let teddieName = document.createTextNode(teddie.name + ' ')
  let teddiePrice = document.createTextNode(teddie.price/100 + ',00 €')
  let photo = document.createElement('img')

  photo.setAttribute('src', teddie.imageUrl)
  photo.setAttribute('alt','Photo de Teddie made in France')
  photo.setAttribute('class','w-25')

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
const caracteresValid = /^[a-zA-Z-èéêëîïôöçÈÉÊË]+$/;
const valeursValidAddress = /^[a-z0-9]+\s[a-z0-9]+$/;
const valeursValidMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
testForm.addEventListener('click', formValid) 
let formControle = true

// TEST FORMULAIRE
function formValid(e){
  if (inputFirstName.validity.valueMissing) {
      e.preventDefault()
      noFirstName.textContent = 'Prénom manquant'
      noFirstName.style.color = 'red'
      formControle = false
  }else if (caracteresValid.test(inputFirstName.value) == false) {
      e.preventDefault()
      noFirstName.textContent = 'format incorrect'
      noFirstName.style.color = 'orange'
  }else{
    console.log('Prénom ok')
  }
  if (inputLastName.validity.valueMissing) {
      e.preventDefault()
      noLastName.textContent = 'Nom manquant'
      noLastName.style.color = 'red'
      formControle = false
  }else if (caracteresValid.test(inputLastName.value) == false) {
      e.preventDefault()
      noLastName.textContent = 'format incorrect'
      noLastName.style.color = 'orange'
  }else{
    console.log('Nom ok')
  }
  if (inputAddress.validity.valueMissing) {
      e.preventDefault()
      noAddress.textContent = 'Adresse manquante'
      noAddress.style.color = 'red'
      formControle = false
  }else if (valeursValidAddress.test(inputAddress.value) == false) {
      e.preventDefault()
      noAddress.textContent = 'format incorrect'
      noAddress.style.color = 'orange'
  }else{
    console.log('Adresse ok')
  }
  if (inputCity.validity.valueMissing) {
      e.preventDefault()
      noCity.textContent = 'Ville manquante'
      noCity.style.color = 'red'
      formControle = false
  }else if (caracteresValid.test(inputCity.value) == false) {
      e.preventDefault()
      noCity.textContent = 'format incorrect'
      noCity.style.color = 'orange'
  }else{
    console.log('Ville ok')
  }
  if (inputEmail.validity.valueMissing) {
      e.preventDefault()
      noEmail.textContent = 'Email manquant'
      noEmail.style.color = 'red'
      formControle = false
  }else if (valeursValidMail.test(inputEmail.value) == false) {
      e.preventDefault()
      noEmail.textContent = 'format incorrect'
      noEmail.style.color = 'orange'
  }else{
    console.log('Mail ok')
  }
}

/*
  if (firstName &=
    lastName &=
    address &=
    city &=
    email === true) {
    return true
  } else {
    return false
  }
*/

/*
  if (formControle == true)
  return true
  else {
  return false
  }
*/

/*
  if (reportValidity(formControle = true))
  formControle = formControle && contact.reportValidity()
 
  if(!formControle){
   break
  }
  if (formControle) {
   console.log('formulaire valide')
  }
 */

/*
  if (formControle == true){
    return contact
}
  else if (formControle == false){
    effacer()
  }
  else {
    effacer()
    validation.reset()
    window.location.reload()
  }
*/

/*
// EFFACER LES INPUT
function effacer() {
document.getElementById('inputFirstName').value = ''
document.getElementById('inputLastName').value = ''
document.getElementById('inputAddress').value = ''
document.getElementById('inputCity').value = ''
document.getElementById('inputEmail').value = ''
}
*/

// validation.reset() >>> Bloque l'envoi du formulaire quand les champs ne sont pas bons
// validation.clear() >>> essai nettoyage des champs input
//window.location.reload()

// CLICK VALIDATION FORMULAIRE
let validation = document.getElementById('bouton_envoi')
validation.addEventListener('click', function() {
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