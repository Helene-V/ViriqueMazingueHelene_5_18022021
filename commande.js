// RECUPERATION ET AFFICHAGE DU PANIER
const firstName = sessionStorage.getItem('firstName'),
        orderId = sessionStorage.getItem('orderId'),
        price = sessionStorage.getItem('price')


// RECUPERATION ET AFFICHAGE DU SESSION STORAGE
document.getElementById('firstName').innerHTML = firstName
document.getElementById('orderId').innerHTML =  data.orderId
document.getElementById('montant').innerHTML = price/100 + ',00 €'

//NETTOYAGE DU SESSION STORAGE
//sessionStorage.clear()

console.log(orderId)

//let getOrderId = document.getElementById('orderId')
//getOrderId.innerHTML = data.orderId