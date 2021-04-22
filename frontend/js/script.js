fetch('http://localhost:3000/api/teddies')
.then((resp) => resp.json())                 // promesse 1
.then(function(data) {                       // promesse 2
    let teddie = data                        // import des teddies via data
    return teddie.map(function(teddie) {     // fonction pour l'affichage des teddies

//  CREATION DES ELEMENTS ET DES BALISES HTML  
    let titreTeddie = document.createElement('h2')
    let article = document.createElement('a')
    let photo = document.createElement('img')
    let description = document.createElement('p')
    let prix = document.createElement('div')

//  AJOUT DE CLASSES AUX ELEMENTS   
    article.setAttribute('href', 'produit.html?id=' + teddie._id)
    article.setAttribute('class','card bg-light col-lg-5 col-sm-6 mb-4 ml-1 mr-1 card-body shadow p-3 mb-5 bg-body rounded text-decoration-none')
    photo.setAttribute('src', teddie.imageUrl)
    photo.setAttribute('alt','Photo de Teddie made in France')
    photo.setAttribute('class', 'rounded img-fluid h-100')
    description.setAttribute('class', 'card-text text-dark mt-2')
    titreTeddie.setAttribute('class', 'card-title text-center text-dark')
    prix.setAttribute('class', 'text-dark font-weight-bold text-center')
    
//  RECUPERATION DE LA DATA A INCLURE AU DOCUMENT HTML VIA LE DOM
    let descriptionContaint = document.createTextNode(teddie.description)
    let divContaint = document.createTextNode(teddie.name)   
    let prixContaint = document.createTextNode(teddie.price/100 + ',00 €')

//  POSITIONNEMENT DES ELEMENTS
    titreTeddie.appendChild(divContaint)
    article.appendChild(titreTeddie)
    article.appendChild(photo)
    description.appendChild(descriptionContaint)
    article.appendChild(description)
    article.appendChild(prix)
    prix.appendChild(prixContaint)

// CREATION DU TEMPLATE GALERIE
    let containerGalerie = document.getElementById('galerie');
    containerGalerie.appendChild(article)
    containerGalerie.setAttribute('class', 'row d-flex justify-content-around mt-5')

//  Vérification de la récupération des données fetch
    console.log('Succès de la requête avec réponse JSON', teddie)
    })
})
.catch(function() {
        console.log('Erreur, vérifier le fetch, les promesses');
})

const afficherGalerie = document.querySelectorAll('#galerie');