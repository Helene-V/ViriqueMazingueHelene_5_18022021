// RECUPERATION ET AFFICHAGE DU PANIER
const monPanier = JSON.parse(sessionStorage.getItem('panier'))

// TITRE PAGE
let getTitre = document.getElementById('titre')
getTitre.innerHTML = `<h1 class="mt-5 pt-5 pb-4 d-flex justify-content-center">Commande validée</h1>`

// AFFICHAGE MERCI et récupération du prénom
let getCommande = document.getElementById('commande')
getCommande.innerHTML = `<p>Merci ${firstName.value} <br> votre commande n° ${order_id} du montant de ${totalPrice} a bien été prise en compte</p>`

// AFFICHAGE PRIX TOTAL
let totalCommande = document.createElement('p')
totalPrice.innerHTML = ` Montant : ${totalPrice.price / 100} €`
totalCommande.appendChild(totalPrice)
document.getElementById("container").appendChild(totalCommande)
console.log(totalCommande)

