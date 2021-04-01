// TITRE PAGE
let getPrez = document.getElementById('presentation')
getPrez.innerHTML = `<h1 class="mt-5 pt-5 pb-4 d-flex justify-content-center">Nous vous remercions pour votre commande !</h1>`

// AFFICHAGE MERCI MME MR + NOM

// AFFICHAGE PRIX TOTAL
let totalCommande = document.createElement('p')
totalPrice.innerHTML = ` Montant : ${totalPrice.price / 100} €`
totalCommande.appendChild(totalPrice)
document.getElementById("container").appendChild(totalCommande)
console.log(totalCommande)

