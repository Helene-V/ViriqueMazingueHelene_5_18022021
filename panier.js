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
validation.addEventListener('click', async function() {
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
    let jsonPostData = JSON.stringify('postData')
    console.log(postData)
    console.log(jsonPostData)

// ENVOI DES DONNEES
    fetch('http://localhost:3000/api/teddies/order', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
  
    body: jsonPostData,
  })

.then(response => response.json()) 
.then(function(data) {  
  sessionStorage.setItem('panier', jsonPostData.orderId)
  window.location.href = 'commande.html'
  console.log(json.orderId)
  console.log(data)
  //.catch(err => console.log(err))
  })
  
})

/*
ENVOI DES DONNEES DANS LE SESSION STORAGE ET RETOURNER LA PAGE COMMANDE
(Note charte : retourne objet contact, array products et order_id = envoyer le nom, le totalPrice et le orderID)

https://developer.mozilla.org/fr/docs/Learn/Forms/Form_validation

 SI LE FORMULAIRE EST COMPLET ENVOI DE CONTACT
 if( input ('information')) {
    valid = input.pushPostData(contact)
  

const valeursAcceptees = '/^[0-9a-zA-Z]+$/'
REGEX + VERIFICATION VALUE INPUT > REGEX ET NETTOYAGE DES DONNEES DES INPUTS
const valeursAccepteesMail = /^[\w\-\.+] + \@[a-zA-Z0-9\.\-] + \.[a-zA-z0-9] {2,4}$/
if (email.value.match(valeursAccepteesMail)) {
//  console.log('mail valide')
  return true

else {
  alert('mail non valide')


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
*/