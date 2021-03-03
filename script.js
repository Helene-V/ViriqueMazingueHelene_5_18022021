fetch('http://localhost:3000/api/teddies')
.then((resp) => resp.json())                 // promesse 1
.then(function(data) {                       // promesse 2
    let teddie = data                        // import des teddies avec la data
    return teddie.map(function(teddie) {     // fonction pour l'affichage des teddies et infos avec return
    
    let titreTeddie = document.createElement('div')
    let article = document.createElement('a')
    let description = document.createElement('p')
    let photo = document.createElement('img')
    let prix = document.createElement('div')
    
    article.setAttribute('href', 'product.html',)
    photo.setAttribute('src', teddie.imageUrl)
    photo.setAttribute('alt','Photo de Teddie made in France')
    
    let descriptionContaint = document.createTextNode(teddie.description)
    let divContaint = document.createTextNode(teddie.name)
    let prixContaint = document.createTextNode(teddie.price)
    prix.innerHTML = '€ '    // trouver comment placer '€' après les chiffres
    
    titreTeddie.appendChild(divContaint)
    article.appendChild(titreTeddie)
    description.appendChild(descriptionContaint)  
    article.appendChild(description)
    prix.appendChild(prixContaint)    //bcp de lignes mais ça fonctionne
    article.appendChild(prix)
    article.appendChild(photo)
    
    let containerGalerie = document.getElementById("galerie");
    containerGalerie.appendChild(article)
    console.log(containerGalerie)
   
    })
})
const afficherGalerie = document.querySelectorAll('#galerie');


// window : représente la fenêtre du navigateur
// document : page html
// innerHTML : intégration de données
// page produit avec travail de FOREACH
// promesses et callback hell
// faire fonctionner la page index et produit et comment faire le panier