// RECUPERATION DU PANIER 
let params = (new URL(document.location)).searchParams;
let teddieId = params.get('id');
let url = ('http://localhost:3000/api/teddies/')
let monPanier = window.sessionStorage

function afficherPanier() {
  let monPanier = JSON.parse(sessionStorage.setItem('panier'))
  sessionStorage.getItem('panier',JSON.stringify(monPanier))
  monPanier.push(teddie)
  window.sessionStorage('panier')
  return afficherPanier
}

console.log(afficherPanier)

fetch( url, {
  method: 'get',
  origin:'http://localhost:3000/api/teddies/' ,
  headers: {
    "Content-type": 'application/json',
  },
  body: JSON.stringify('data'),
  mode: 'cors',
  credentials: 'same-origin',
})
.then((resp) => resp.json())                 
.then(function(data) {     
  monPanier.push(teddie) 
  console.log('Request succeeded with JSON response', data);
})
.catch(function (error) {
  console.log('Request failed', error);
});

console.log(sessionStorage.getItem('panier'))

/*monPanier = function () {
  if (storage) {
    return JSON.parse(sessionStorage.getItem('panier'))
  }
}
monPanier()*/

/*function afficherPanier(){
  let monPanier = JSON.parse(sessionStorage.getItem('panier'))
  sessionStorage.getItem('panier',JSON.stringify(monPanier))
  monPanier.push(teddie)
  window.sessionStorage['panier']
}
afficherPanier()*/

/*
fetch(url, panier, {
  method: 'post',
  //credentials: 'include'
})
.then(json)
.then(function (init) {

  console.log('Request succeeded with JSON response', init);
})
.catch(function (error) {
  console.log('Request failed', error);
});

const monPanier = document.querySelectorAll('#afficher')
*/
// AFFICHER LE DETAIL DU PANIER : PDT + QTE + PRIX (POST, /order, Requête JSON contenant un obj de contact et un array de pdts

/*Validation des données
Pour les routes POST, l’objet contact envoyé au serveur doit contenir les champs
firstName, lastName, address, city et email. Le tableau des produits envoyé au
backend doit être un array de strings product_id. Les types de ces champs et leur
présence doivent être validés avant l’envoi des données au serveur.
*/

// https://developers.google.com/web/updates/2015/03/introduction-to-fetch

// FORMULAIRE (route POST)

// CHAMPS DE SAISIE VALEURS ACCEPTEES
//Les inputs des utilisateurs doivent être validés avant l’envoi à l’API.

// VALIDATION DES DONNEES POUR ENVOI DE LA PAGE CONFIRMATION

/* une page de confirmation de commande, remerciant l'utilisateur pour sa
commande, et indiquant le prix total et l'identifiant de commande envoyé
par le serveur.
*/