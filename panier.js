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

let price = 0
monPanier.forEach(totalPrice => {
price += totalPrice.price
sessionStorage.setItem('panier',JSON.stringify(monPanier))
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

// RECUPERATION DES DONNEES >>> Desactiver le contrôle via bootstrap 
let firstName = document.getElementById('inputFirstName'),
  lastName = document.getElementById('inputLastName'),
  address = document.getElementById('inputAddress'),
  city = document.getElementById('inputCity'),
  email = document.getElementById('inputEmail')

// REGEX + VERIFICATION VALUE INPUT > REGEX ET NETTOYAGE DES DONNEES DES INPUTS
/*const valeursAccepteesMail = /^[\w\-\.+] + \@[a-zA-Z0-9\.\-] + \.[a-zA-z0-9] {2,4}$/
if (email.value.match(valeursAccepteesMail)) {
//  console.log('mail valide')
  return true
}
else {
  alert('mail non valide')
}*/

/* const valeursAcceptees = '/^[0-9a-zA-Z]+$/'

/*function testFormulaire(form) {
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

  let products = [] 
     for(let i = 0; i < products.length; i++) {
      products.push(teddie._id)
      sessionStorage.setItem('panier',JSON.stringify(monPanier))
     }
    
    let postData = {
      contact, products
    }
    
    let jsonPostData = JSON.stringify('postData')
    console.log(postData)
    console.log(jsonPostData)

    fetch('http://localhost:3000/api/teddies/order', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: jsonPostData,
  })
.then(response => response.json()) 
.then(function(data) {  
  monPanier.push(postData)
  sessionStorage.setItem('maCommande', response.orderID)
  window.location.href = 'commande.html'
  console.log(json.orderID)
  console.log(data)
  .catch(err => console.log(err))
  })
  
})
window.location.href = 'commande.html'
// ENVOI DES DONNEES DANS LE SESSION STORAGE ET RETOURNER LA PAGE COMMANDE
//(Note charte : retourne objet contact, array products et order_id = envoyer le nom, le totalPrice et le orderID)
// Donc, remercier l'utilisateur pour sa commande + prix total + l'identifiant de commande envoyé par le serveur. order_id


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