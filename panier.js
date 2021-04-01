// TITRE PAGE
let getPrez = document.getElementById('presentation')
getPrez.innerHTML = `<h1 class="mt-5 pt-5 pb-4 d-flex justify-content-center">Votre panier</h1>`

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

let price = 0
monPanier.forEach(totalPrice => {
price += totalPrice.price
console.log(price/100 + ',00 €')
})

/*creationTemplate = () => {
if (teddie = 0) {
  console.log("Le panier est vide")
}
else (teddie < 0) {
  let creerTemplate = document.getElementById('node')
  creerTemplate.innerHTML =`<tr id="node">
                              <th scope="row">1</th>
                              <td><img src="${teddie.imageUrl}" alt="Photo de Teddie made in France" class="img-thumbnail rounded-3 w-25"></td>
                              <td>${teddie.name}</td>
                              <td>${teddie.price/100 + ',00 €'}</td>
                           </tr>`
}}*/

/* A RECUPERER APRES TEST DE LA LISTE si non concluant
// CREATION DES NOEUDS (balises)
function createNode(element){
  return document.createElement(element)
}

// POSITIONNEMENT DES NOEUDS
function append(parent, elt){
  return parent.appendChild(elt)
}

let teddie = monPanier
monPanier.forEach(teddie => {
  let div = document.getElementById('affichage')
  
  let titreTeddie = createNode('h2')
  titreTeddie.innerHTML = teddie.name
  append(div,titreTeddie)

  let photo = createNode('img')
  photo.src = teddie.imageUrl
  photo.setAttribute('alt','Photo de Teddie made in France')
  photo.width = 200
  append(div,photo)
  
  let prix = createNode('p')
  prix.innerHTML = teddie.price/100 + ',00 €'
  append(div,prix)

})*/

// RECUPERATION DES DONNEES
let firstName = document.getElementById('inputFirstName'),
  lastName = document.getElementById('inputLastName'),
  address = document.getElementById('inputAddress'),
  city = document.getElementById('inputCity'),
  email = document.getElementById('inputEmail')

// REGEX + VERIFICATION VALUE INPUT > REGEX ET NETTOYAGE DES DONNEES DES INPUTS
/*function testFormulaire(form) {
  valid = validationFirstName(form.firstName.value)
  valid += validationLastName(form.lastName.value)
  valid += validationAddress(form.address.value)
  valid += validationCity(form.city.value)
  valid += validationEmail(form.email.value)

  if (valid == "")
    validation = input.pushValidation()
  else {alert(remplissage du formulaire non conforme)
    return false
  }
}
*/

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
  let products = [] 
     for(let i = 0; i < products.length; i++) {
      products.push(teddie._id)
      sessionStorage.setItem('panier',JSON.stringify(maCommande))
      console.log('liste-moi les produits dans la boucle for' + products[i])
     }
    
    let postData = {
      contact, products
    }
    let jsonPostData = JSON.stringify('postData')
    console.log(postData)
    console.log(jsonPostData)   
    fetch('http://localhost:3000/api/teddies/' + 'order', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: jsonPostData,
  })
.then(response => response.json()) 
.then(function(data) { 
  let pushCommande = JSON.parse(sessionStorage.getItem('commande'))
  console.log(json.orderId)
  console.log(data)
//.catch(err => console.log(err))
  })
})

// ENVOI DES DONNEES DANS LE SESSION STORAGE ET RETOURNER LA PAGE COMMANDE
//(Note charte : retourne objet contact, array products et order_id = envoyer le nom, le totalPrice et le orderID)
// Donc, remercier l'utilisateur pour sa commande + prix total + l'identifiant de commande envoyé par le serveur. order_id
/*  sessionStorage.setItem('maCommande', response.orderID)
  window.location.href = 'commande.html'*/
//let maCommande = JSON.parse(sessionStorage.getItem('commande'))


/* IDEE PUSH DES DONNEES DANS LE SESSION STORAGE
document.getElementById('validation').addEventListener('click',function(){
  let valide = true
  for(let input of document.getElementById('div')){
    valid = input.pushValidation()
    if(valide){
      break
    }
  }
  if(valide){
}*/

//https://developer.mozilla.org/fr/docs/Learn/Forms/Form_validation