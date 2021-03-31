// TITRE PAGE
let getPrez = document.getElementById('presentation')
getPrez.innerHTML = `<h1 class="mt-5 pt-5 pb-4 d-flex justify-content-center">Votre panier</h1>`

// RECUPERATION ET AFFICHAGE DU PANIER 
const monPanier = JSON.parse(sessionStorage.getItem('panier'))
monPanier.forEach(teddie => {
  let getAfficher = document.getElementById('affichage')
  getAfficher.innerHTML = `<div class="d-flex justify-content-center">
                            <table class="table col-6">
                              <thead>
                                <tr>
                                  <th scope="col">#</th>
                                  <th scope="col">Image</th>
                                  <th scope="col">Article</th>
                                  <th scope="col">Prix</th>
                               </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th scope="row">1</th>
                                  <td><img src="${teddie.imageUrl}" alt="Photo de Teddie made in France" class="img-thumbnail rounded-3 w-25"></td>
                                  <td>${teddie.name}</td>
                                  <td>${teddie.price/100 + ',00 €'}</td>
                                </tr>
                                <tr>
                                  <th scope="row">2</th>
                                  <td><img src="${teddie.imageUrl}" alt="Photo de Teddie made in France" class="img-thumbnail rounded-3 w-25"></td>
                                  <td>${teddie.name}</td>
                                  <td>${teddie.price/100 + ',00 €'}</td>
                                </tr>
                                <tr id="node">
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <h2 class="mt-5 pt-5 pb-4 d-flex justify-content-center">Formulaire de commande</h2>`

})
//IDEE : si mon panier n'est pas vide alors affichage d'un nouveau gabarit avec les teddies en ciblant les <td>
/*creationTemplate = () => {
if (teddie = 0) {
  alert("Votre panier est vide")
}
else (teddie < 0) {
  let creerTemplate = document.getElementById('node')
  creerTemplate.innerHTML =`<tr id="node">
                              <th scope="row">3</th>
                              <td><img src="${teddie.imageUrl}" alt="Photo de Teddie made in France" class="img-thumbnail rounded-3 w-25"></td>
                              <td>${teddie.name}</td>
                              <td>${teddie.price/100 + ',00 €'}</td>
                           </tr>`
}}*/

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

//https://developer.mozilla.org/fr/docs/Learn/Forms/Form_validation