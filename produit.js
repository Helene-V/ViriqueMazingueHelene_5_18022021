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

// CREATION DE LA BALISE SELECT
    let selectTeddie = createNode('select')
    append(div,selectTeddie)

// CREATION DU MENU DEROULANT DANS LA BALISE SELECT
    let optionTeddie = createNode('option')
    optionTeddie.innerHTML = 'choix de la couleur'
    append(selectTeddie, optionTeddie)

// CREATION BOUTON AJOUT AU PANIER
    let boutonAdd = createNode('button')
    boutonAdd.innerHTML = 'Ajoutez-moi !'
    append(div, boutonAdd)
    boutonAdd.addEventListener('click', changeTexte)
    boutonAdd.addEventListener('click', ajoutPanier)

// EVENEMENT CLIC AJOUt AU PANIER
    function changeTexte () {
    this.innerHTML = '<strong>Merci !</strong>'
    this.style.color = 'purple'
    }
    function ajoutPanier () {
    sessionStorage.setItem('_id') //uniquement pour la session en cours, si fermeture d'onglet suppression des données
    }

// IMPORTATION DES DONNEES API A INTEGRER AU MENU DEROULANT
    teddie(option).forEach(colors=> {
    colors.innerHTML = teddie.colors[i]
    colors.setAttribute('value',teddie.colors[i])
    append(optionTeddie)
    })

})

/*
    teddie.forEach(function(colors) {
    colors.innerHTML = teddie.colors
    colors.add(teddie.colors)
    append(selectTeddie,optionTeddie)
    })
*/

/*  let optionTeddie = teddie.colors
    return teddie.array.forEach(selectTeddie => {
    let optionTeddie = createNode('option')
    optionTeddie.innerHTML = teddie.colors[0,1,2]
    selectTeddie.add(teddie.colors)
    append(div, optionTeddie)
    console.log(optionTeddie)
    });*/

    /*Object.entries(teddie.colors).forEach(teddie=> {
    let optionTeddie = createNode('option')
    optionTeddie.innerHTML = teddie.colors[0,1,2]
    selectTeddie.add(teddie.colors)
    append(div, optionTeddie)
    console.log(optionTeddie)
    })*/

// colors : arrays  de 1 à 4 elt max - [0-3]

/*
DOM Shadow
XMLHttpRequest
CALLBACK HELL
APPELER Un ELEMENTS SUR LA PAGE params :
https://developer.mozilla.org/fr/docs/Web/API/URL/searchParams
EVENEMENT BOUTON AU CLIC ENVOI DANS LE PANIER (Local storage) session storage
https://developer.mozilla.org/fr/docs/Web/API/Storage
*/