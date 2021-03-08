// 1 APPELER Un ELEMENTS SUR LA PAGE params :
// https://developer.mozilla.org/fr/docs/Web/API/URL/searchParams
// 2 CREER DE NOUVEAU LES BALISES (incorporation des elts)
// 3 CREER UN MENU DEROULANT AVEC LES DIFFERENTES OPTIONS - foreach
// 4 EVENEMENT BOUTON AU CLIC ENVOI DANS LE PANIER (Local storage) session storage
// https://developer.mozilla.org/fr/docs/Web/API/Storage


// RECUPERATION DES PARAMETRES
let params = (new URL(document.location)).searchParams;
let teddieId = params.get('id');

// CREATION DES NOEUDS (balises)
function createNode(element){
    return document.createElement(element)
}

// POSITIONNEMENT DES NOEUDS
function append(parent, elt){
    return parent.appendChild(elt)
}

fetch('http://localhost:3000/api/teddies/'+ teddieId)
.then((resp) => resp.json())                 
.then(function(data) {                       
    let teddie = data                        
    const div = document.getElementById('#galerie')
    
    let titreTeddie = createNode('p')
    titreTeddie.innerHTML = teddie.name
    append(div,titreTeddie)
    
    let photo = createNode('img')
    photo.src = teddie.imageUrl
    photo.setAttribute('alt','Photo de Teddie made in France')
    photo.width = 500
    append(div,photo)

    let description = createNode('p')
    description.innerHTML = teddie.description
    append(div,description)

    let prix = createNode('p')
    prix.innerHTML = teddie.price + ' €'
    append(div,prix)
})



/*
DOM Shadow
XMLHttpRequest
CALLBACK HELL
*/

/*
teddies.forEach(function(teddie) {
    let div = document.createElement('div');
    div.classList.add('gallery-item');

    document.querySelector('div-gallery').appendChild(div);
});
*/