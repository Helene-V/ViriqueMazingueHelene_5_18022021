// RECUPERATION DU PANIER 
const monPanier = JSON.parse(sessionStorage.getItem('panier'))
monPanier.forEach(afficher)

function afficher(teddie) {
document.write("J'affiche le nom de teddie : " + teddie.name + " et voici son prix : "+ teddie.price/100 + ',00 €' + "<br>")
}
//console.log(afficher)

let produit = function(photo, nom, prix) {
  return {
    photo: teddie.imageURL,
    nom: teddie.name,
    prix: teddie.price
  }
}

let getPrez = document.getElementById('presentation')
getPrez.innerHTML = `<h1 class="mt-5 pt-5 pb-4 d-flex justify-content-center">Commande en cours</h1>`

//let getArticle = document.getElementById('affichage')
//getArticle.innerHTML = `<div>${teddie.name}</div>`

let getForm = document.getElementById('information')
getForm.innerHTML = `<form>
<div class="form-row d-flex justify-content-center">
<div class="form-group col-md-2">
  <label for="inputFirstname">First name</label>
  <input type="text" class="form-control" id="inputFirstname" placeholder="ex. Albert">
</div>
<div class="form-group col-md-2">
  <label for="inputLastName">Last name</label>
  <input type="text" class="form-control" id="inputLastname" placeholder="ex. Dupont">
</div>
<div class="form-group col-md-2">
<label for="inputAdress">Adress</label>
<input type="text" class="form-control" id="inputAdress" placeholder="ex. 2, rue ma campagne">
</div>
</div>
<div class="form-row d-flex justify-content-center">
  <div class="form-group col-md-3">
    <label for="inputCity">City</label>
    <input type="text" class="form-control" id="inputCity" placeholder="ex. Lille">
  </div>
  <div class="form-group col-md-3">
    <label for="inputEmail4">Email</label>
    <input type="email" class="form-control" id="inputEmail4" placeholder="ex. adupont@gmail.com">
  </div>
  </div>
  <div class="form-row d-flex justify-content-center">
<button type="submit" class="btn btn-primary">Valider ma commande</button>
</div>
</form>`

// RECUPERATION DES DONNEES
let firstName = document.getElementById('information')
let contact = {
  firstName: firstName.value,
  lastName: lastName.value,
  adress: adress.value,
  city: city.value,
  email: email.value
}
console.log(contact)

let products = [
// push les id dans products avec une boucle for of
]
console.log(products)


/*
document.getElementById('inputEmail4').addEventListener('click',function(){
  let valide = true
  for(let input of document.document.getElementById('information')){
    valid = input.pushValidation()
    if(valide){
      break
    }
  }
  if(valide){
    // idee : POST, les PDTS EN window location pour ouvrir la page de confirmation
    /* info : faire une page de confirmation de commande, remerciant l'utilisateur pour sa
    commande, et indiquant le prix total et l'identifiant de commande envoyé
    par le serveur. order_id
*/

/*
function totalPrice(teddie) {
  for (let i = 0; i< teddie.length; i++) {
    let teddie = teddie[i]
}
  console.log(totalPrice)
*/

/*
let getElt = product
this.product = product.id
this.product = product.name + product.price
*/

//sessionStorage.getItem('price') = document.getElementById('affichage').innerHTML
//sessionStorage.getItem('name') = document.getElementById('affichage').innerHTML

//let nom = sessionStorage.getItem('name').innerHTML
//let prix = sessionStorage.getItem('price').innerHTML


// faire un objet global qui regroupe contact + products, l'envoyer en post via un nouveau sessionStorage ex bonDeCommande sur la page commande

// On peut construire un préfixe HTTP
// afin de construire plus facilement
// des requêtes via des substitutions
/*
POST`http://toto.org/truc?a=${a}&b=${b}
     Content-Type: application/json
     X-Credentials: ${credentials}
     { "toto": ${toto},
       "truc": ${truc}}`(myOnReadyStateChangeHandler);
*/