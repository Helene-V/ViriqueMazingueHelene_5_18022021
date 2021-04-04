// RECUPERATION ET AFFICHAGE DU PANIER
const monPanier = JSON.parse(sessionStorage.getItem('panier'))

// TITRE PAGE
let getTitre = document.getElementById('titre')
getTitre.innerHTML = `<h1 class="mt-5 pt-5 pb-4 d-flex justify-content-center">Commande validée</h1>`

// RECUPERATION ET AFFICHAGE DU SESSION STORAGE
let orderId = JSON.parse(sessionStorage.getItem('panier'))
document.getElementById("firstName").innerHTML = panier.contact.firstName
document.getElementById("orderId").innerHTML = panier.orderId
document.getElementById("montant").innerHTML = panier.contact.price

