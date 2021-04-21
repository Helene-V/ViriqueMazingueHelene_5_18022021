// RECUPERATION ET AFFICHAGE DU PANIER
const monPanier = JSON.parse(sessionStorage.getItem('panier'))

// Vérification de récupération des teddies
if (monPanier === null){
  alert("Votre panier est vide")
}
console.log('Contenu session storage : ', monPanier)

let teddie = monPanier
monPanier.forEach(teddie => {  
  let listeElement = document.createElement("li")
  listeElement.setAttribute('class','rounded list-group-item d-flex justify-content-between align-items-center')

  let teddieName = document.createTextNode('Teddie : ' + teddie.name)
  let teddiePrice = document.createTextNode('Prix : ' + teddie.price/100 + ',00 €')
  let photo = document.createElement('img')

  photo.setAttribute('src', teddie.imageUrl)
  photo.setAttribute('alt','Photo de Teddie made in France')
  photo.setAttribute('class','w-25 rounded')

  listeElement.appendChild(teddieName)
  listeElement.appendChild(photo)
  listeElement.appendChild(teddiePrice)
  document.getElementById("affichage").appendChild(listeElement)
})

// CALCUL ET ENVOI DU TOTAL PRICE DANS LE SESSION STORAGE
let price = 0
monPanier.forEach(totalPrice => {
  price += totalPrice.price
  sessionStorage.setItem('price',JSON.stringify(price))
})
console.log('Addition qui donne le montant total des articles : '+ price/100 + ',00 €')

// RECUPERATION DES INPUTS
let firstName = document.getElementById('inputFirstName'),
  lastName = document.getElementById('inputLastName'),
  address = document.getElementById('inputAddress'),
  city = document.getElementById('inputCity'),
  email = document.getElementById('inputEmail')

// REGEX - EXPRESSION REGULIERE
const caracteresValid = /^[a-zA-Z-èéêëîïôöçÈÉÊË+\s]+$/;
const valeursValidAddress = /^[0-9A-Za-z-+\s]+$/; ///^[a-zA-Z0-9]+\s[a-z0-9]+$/;
const valeursValidMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// RETOURNE INFO AU VISITEUR SI INPUTS INCORRECTS
let testForm = document.getElementById('bouton_envoi')

let noFirstName = document.getElementById('noFirstName'),
  noLastName = document.getElementById('noLastName'),
  noAddress = document.getElementById('noAddress'),
  noCity = document.getElementById('noCity'),
  noEmail = document.getElementById('noEmail')

let postData = document.getElementById('post')
let formControle = true
testForm.addEventListener('click', formValid) 

// TEST FORMULAIRE
function formValid(){
  if (!caracteresValid.test(inputFirstName.value)) {
      noFirstName.textContent = 'Vérifiez ce champ svp'
      noFirstName.style.color = 'red'
      formControle = false
  } else { 
      formControle = true
      console.log('Prénom ok')
  }
  if (!caracteresValid.test(inputLastName.value)) {
      noLastName.textContent = 'Vérifiez ce champ svp'
      noLastName.style.color = 'red'
      formControle = false
  } else {
      formControle = true
      console.log('Nom ok')
  }
  if (!valeursValidAddress.test(inputAddress.value)) {
      noAddress.textContent = 'Vérifiez ce champ svp'
      noAddress.style.color = 'red'
      formControle = false
  } else {
      formControle = true
      console.log('Adresse ok')
  }
  if (!caracteresValid.test(inputCity.value)) {
      noCity.textContent = 'Vérifiez ce champ svp'
      noCity.style.color = 'red'
      formControle = false
  } else {
      formControle = true
      console.log('Ville ok')
  }
  if (!valeursValidMail.test(inputEmail.value)) {
      noEmail.textContent = 'Vérifiez ce champ svp'
      noEmail.style.color = 'red'
      formControle = false
  } else {
      formControle = true
      console.log('Mail ok')
  }

// RECUPERATION DES DONNEES INPUTS SI LES CHAMPS SONT VALIDES
  if(formControle) {
    contact = {
    firstName: firstName.value,
    lastName: lastName.value,
    address: address.value,
    city: city.value,
    email: email.value
    }
  
  let products = [] 
  for(let i = 0; i < products.length; i++) {
    products.push(teddie._id)
  }

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
.then(data => {let orderId = data.orderId
sessionStorage.setItem('orderId', orderId)
sessionStorage.setItem('firstName', firstName.value)
document.location.href = 'commande.html'
})

} else {
  return false
}
console.log('Retour du test des champs : ',formControle)
}