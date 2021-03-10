fetch('http://localhost:3000/api/teddies')
.then((resp) => resp.json())                 // promesse 1
.then(function(data) {                       // promesse 2
    let teddie = data                        // import des teddies avec la data
    return teddie.map(function(teddie) {     // fonction pour l'affichage des teddies et infos avec return (considéré comme une promesse ?)
    console.log(teddie)

    //  CREATION DES ELEMENTS ET DES BALISES HTML  
    let titreTeddie = document.createElement('div')
    let article = document.createElement('a')
    let description = document.createElement('p')
    let photo = document.createElement('img')
    let prix = document.createElement('div')

//  AJOUT DE CLASSES AUX ELEMENTS   
    article.setAttribute('href', 'produit.html?id=' + teddie._id)
    photo.setAttribute('src', teddie.imageUrl)
    photo.setAttribute('alt','Photo de Teddie made in France')
    photo.setAttribute('width', 120)
// Exemple de classes bootstrap ; photo.setAttribute('class', 'class1 class2')
    
//  RECUPERATION DE LA DATA A INCLURE AU DOCUMENT HTML
    let descriptionContaint = document.createTextNode(teddie.description)
    let divContaint = document.createTextNode(teddie.name)   
    let prixContaint = document.createTextNode(teddie.price)
    prix.innerHTML = '€ '

//  POSITIONNEMENT DES ELEMENTS
    titreTeddie.appendChild(divContaint)
    article.appendChild(titreTeddie)
    description.appendChild(descriptionContaint)
    article.appendChild(description)
    prix.appendChild(prixContaint)
    article.appendChild(prix)
    article.appendChild(photo)

// CREATION DU TEMPLATE GALERIE
    let containerGalerie = document.getElementById('galerie');
    containerGalerie.appendChild(article)
    console.log(containerGalerie) 
    
    })
})

const afficherGalerie = document.querySelectorAll('#galerie');



/* TRANSITION DES INFO DANS LA BARRE URL =>>>>>
? => après le nom de la page exemple 'produit.html?'
&amp; => symbole '&' dans la barre d'adresse 
= ex. nom=paramètre => x'=' puis récupération du contenu pour affichage => echo $_GET['nom'] 
. => séparation
attention au contenu saisi dans l'url
*/


/*
.then(function(idTeddie) {
    const parametreTeddie = window.location.search
    const idTeddie = parametre.replace('?id=','') })
    return id
*/


//CREATION FENETRES POP-UP
//article=window.open('src','produit.html','?')

// CREATION D'UNE REDIRECTION DEFINITIVE idem qu'une redirection WINDOW.LOCATION
/*pushTeddie.replace(url);
document.location.replace('https://developer.mozilla.org/en-US/docs/Web/API/Location.reload')*/


/*
    function load () {
    let link = document.getElementsByTagName('a');
    for (let i=0; i < teddie.length; i++) 
    teddie[ i ] = clic;
    }
    window.open = teddie._id;
*/


/*
let x = document.links;
let txt = "";
let i;
for (i = 0; i < x.length; i++) {
  txt = txt + x[i].href + "<br>";
}
*/


// route id : /:_id
// window : représente la fenêtre du navigateur
// document : page html
// innerHTML : intégration de données chaînes de caractères
// local storage : mise dans le panier
// promesses et callback hell
// faire fonctionner la page index et produit et comment faire le panier