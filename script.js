fetch('http://localhost:3000/api/teddies')
.then((resp) => resp.json())                 // promesse 1
.then(function(data) {                       // promesse 2
    let teddie = data                        // import des teddies avec la data
    return teddie.map(function(teddie) {     // fonction pour l'affichage des teddies et infos avec return (considéré comme une promesse ?)
    console.log(teddie)

//  CREATION DES ELEMENTS ET DES BALISES HTML  
    let titreTeddie = document.createElement('h2')
    let article = document.createElement('a')
    let photo = document.createElement('img')
    let description = document.createElement('p')
    let prix = document.createElement('div')

//  AJOUT DE CLASSES AUX ELEMENTS   
    article.setAttribute('href', 'produit.html?id=' + teddie._id)
    article.setAttribute('class','card col-lg-4 col-sm-6 mb-4 card-body shadow p-3 mb-5 bg-body rounded text-decoration-none')
    article.style.backgroundColor = "#f8f9fa"
    photo.setAttribute('src', teddie.imageUrl)
    photo.setAttribute('alt','Photo de Teddie made in France')
    photo.setAttribute('class', 'card-img-top rounded img-fluid')
    description.setAttribute('class', 'card-text')
    titreTeddie.setAttribute('class', 'card-title text-center')
    
//  RECUPERATION DE LA DATA A INCLURE AU DOCUMENT HTML
    let descriptionContaint = document.createTextNode(teddie.description)
    let divContaint = document.createTextNode(teddie.name)   
    let prixContaint = document.createTextNode(teddie.price)
    prix.innerHTML = '€ '

//  POSITIONNEMENT DES ELEMENTS
    titreTeddie.appendChild(divContaint)
    article.appendChild(titreTeddie)
    article.appendChild(photo)
    description.appendChild(descriptionContaint)
    article.appendChild(description)
    prix.appendChild(prixContaint)
    article.appendChild(prix)

// CREATION DU TEMPLATE GALERIE
    let containerGalerie = document.getElementById('galerie');
    containerGalerie.appendChild(article)
    containerGalerie.style.marginTop = "60px";
    containerGalerie.setAttribute('class', 'row')
    console.log(containerGalerie) 
    
    })
})

const afficherGalerie = document.querySelectorAll('#galerie');