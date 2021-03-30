// TITRE PAGE PANIER
let getPrez = document.getElementById('presentation')
getPrez.innerHTML = `<h1 class="mt-5 pt-5 pb-4 d-flex justify-content-center">Commande en cours</h1>`

// RECUPERATION DU PANIER 
const monPanier = JSON.parse(sessionStorage.getItem('panier'))
monPanier.forEach(afficher)

// AFFICHAGE DE MON PANIER - TESTER AVEC LES BACKTICS - A REFAIRE
function afficher(teddie) {
document.write("J'affiche le nom de teddie : " + teddie.name + " et voici son prix : "+ teddie.price/100 + ',00 €' + "<br>")
}
let produit = function(photo, nom, prix) {
  return {
    photo: teddie.imageURL,
    nom: teddie.name,
    prix: teddie.price
  }
}
//let getArticle = document.getElementById('affichage')
//getArticle.innerHTML = `<div>${teddie.name}</div>`

// RECUPERATION DES DONNEES
let firstName = document.getElementById('inputfirstName'),
  lastName = document.getElementById('inputlastName'),
  address = document.getElementById('inputaddress'),
  city = document.getElementById('inputcity'),
  email = document.getElementById('inputemail')

// REGEX + VERIFICATION VALUE INPUT > REGEX ET NETTOYAGE DES DONNEES DES INPUTS
/*function testFormulaire(form) {
  valid = validationFirstName(form.firstName.value)
  valid += validationLastName(form.lastName.value)
  valid += validationAddress(form.address.value)
  valid += validationCity(form.city.value)
  valid += validationEmail(form.email.value)

  if (valid == "")
    validation = input.pushValidation()
  else {alert(test)
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
  let products = [
    '5be9c8541c9d440000665243', '5beaa8bf1c9d440000a57d94'
    // push les id dans products avec une boucle for of
    ]
    let postData = [
      contact, products
    ]
    let jsonPostData = JSON.stringify('postData')
    console.log(postData)
    console.log(jsonPostData)   
    fetch('http://localhost:3000/api/teddies/' + 'order', {
    method: 'POST',
    //mode : 'cors',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: jsonPostData,
  })
.then(response => response.json()) 
.then(json => console.log(json))
//.catch(err => console.log(err))
})

// ENVOI DES DONNEES DANS LE SESSION STORAGE ET RETOURNER LA PAGE COMMANDE
//(Note charte : retourne objet contact, array products et order_id = envoyer le nom, le totalPrice et le orderID)
// Donc, remercier l'utilisateur pour sa commande + prix total + l'identifiant de commande envoyé par le serveur. order_id
/*  sessionStorage.setItem('maCommande', response.orderID)
  window.location.href = 'confirmation.html'*/
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

/* IDEE AFFICHER LE PRIX TOTAL AVEC BOUCLE FOR
function totalPrice(teddie) {
  for (let i = 0; i< teddie.length; i++) {
    let teddie = teddie[i]
  }
}
  console.log(totalPrice)
*/

// IDEE AFFICHAGE DES PDTS SESSION STORAGE
//sessionStorage.getItem('price') = document.getElementById('affichage').innerHTML
//sessionStorage.getItem('name') = document.getElementById('affichage').innerHTML

//let nom = sessionStorage.getItem('name').innerHTML
//let prix = sessionStorage.getItem('price').innerHTML

/* RESTE A FAIRE
AMELIORATION CSS
PLAN DE TEST
*/