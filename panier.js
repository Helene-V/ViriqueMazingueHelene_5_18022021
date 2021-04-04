// TITRE PAGE
let getPresentation = document.getElementById('presentation')
getPresentation.innerHTML = `<h1 class="mt-5 pt-5 pb-4 d-flex justify-content-center">Votre panier</h1>`

// RECUPERATION ET AFFICHAGE DU PANIER
const monPanier = JSON.parse(sessionStorage.getItem('panier'))

let teddie = monPanier
monPanier.forEach(teddie => {  
  let creationListe = document.createElement("ul")
  let listeElement = document.createElement("li")
//  let photo = document.createElement('img')
//  let container = document.createElement('div')
  
  let teddieName = document.createTextNode(teddie.name)
  let teddiePrice = document.createTextNode(teddie.price/100 + ',00 €')
  
//  photo.src = teddie.imageUrl
//  photo.setAttribute('alt','Photo de Teddie made in France')
//  photo.width = 200  
  
  listeElement.appendChild(teddieName)
  listeElement.appendChild(teddiePrice)
  creationListe.appendChild(listeElement) 
//  container.appendChild(photo)

  document.getElementById("affichage").appendChild(creationListe)
// document.getElementById("container").appendChild(container)
}) 

// CALCUL ET ENVOI DU TOTAL PRICE DANS LE SESSION STORAGE
let price = 0
monPanier.forEach(totalPrice => {
price += totalPrice.price
//monPanier.push(price)
sessionStorage.setItem('panier',JSON.stringify(monPanier))

//console.log(price/100 + ',00 €')
})

// RECUPERATION DES DONNEES >>> Desactiver le contrôle via bootstrap 
let firstName = document.getElementById('inputFirstName'),
  lastName = document.getElementById('inputLastName'),
  address = document.getElementById('inputAddress'),
  city = document.getElementById('inputCity'),
  email = document.getElementById('inputEmail')

// CLICK VALIDATION FORMULAIRE
let validation = document.getElementById('validation')
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
      sessionStorage.setItem('panier',JSON.stringify(monPanier))
     }

// REGROUPEMENT EN UN SEUL OBJET
    let postData = {
      contact, products,
    }
    let jsonPostData = JSON.stringify(postData) // je le passe en parse au lieu de stringify
    console.log(postData)
    console.log(jsonPostData)
    console.log(typeof jsonPostData)

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
.then(function(data) {  
  sessionStorage.setItem('panier', jsonPostData.orderId)
  window.location.href = 'commande.html'
  console.log(jsonPostData.orderId)
  console.log(data)
  //.catch(err => console.log(err))
  })
  
})

/*
    let jsonPostData = JSON.stringify(postData) // je le passe en parse au lieu de stringify
    console.log(postData)
    console.log(jsonPostData)
    console.log(typeof jsonPostData)

// ENVOI DES DONNEES
    fetch('http://localhost:3000/api/teddies/order', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(jsonPostData), //ici je le stringify pour recevoir l'order 
  })

https://developer.mozilla.org/fr/docs/Learn/Forms/Form_validation

> push pour les tableaux et return pour les objets
> créer des li en suivant les li pour un teddie et ses options
> suppression de la validation des champs via bootstrap
 

******REGEX******

const valeursAccepteesForm = '/^[0-9a-zA-Z]+$/'
const valeursAccepteesMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

******VERIFICATION VALUE INPUT******
**test 1**
function testFormulaire(form) {
  valid = validationFirstName(form.firstName.value)
  valid += validationLastName(form.lastName.value)
  valid += validationAddress(form.address.value)
  valid += validationCity(form.city.value)
  valid += validationEmail(form.email.value)

  if (valid == "")
    validation = input.pushValidation()
    sessionStorage.setItem('panier',JSON.stringify(monPanier)
  else {alert(remplissage du formulaire non conforme)
    return false
  }
}

**test 2** trouver si c'est possible de faire tous les input avec une fonction ou s'il faut les faire un à un
function validation(event) {
  if (firstName.lastName.address.city.email.validity.valueMissing) {
    event.prenventDefault() // empêche l'envoi du formulaire
    noFirstName.textContent = "Champ vide"
    noFirstName.style.color = "red"
  }
  else if (valeursAccepteesForm.test(firstName.lastName.address.city.value) == false) {
    event.prenventDefault() // empêche l'envoi du formulaire
    noFirstName.textContent = "Caractère invalides"
    noFirstName.style.color = "red"
  }

}

** test 3 spécial mail **
if (valeursAccepteesMail.test(email.value)) {
  return true
else (valeursAccepteesForm.test(firstName.lastName.address.city.value) == false) {
    event.prenventDefault() // empêche l'envoi du formulaire
    noFirstName.textContent = "Caractère invalides"
    noFirstName.style.color = "red"
}
 
SI LE FORMULAIRE EST COMPLET ENVOI DE CONTACT
 if( input ('information')) {
    valid = input.pushPostData(contact)

******NETTOYAGE DES DONNEES DES INPUTS******
.reset () >>> reinitialise
sessionStorage.clear() La méthode clear()permet de retirer tous les éléments d'un ensemble Set
*/