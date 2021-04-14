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

// CREATION DU PANIER POUR POUVOIR Y STOCKER TEDDIE
if (sessionStorage.getItem('panier')) {
    console.log('le panier existe')
}
    else {
        console.log('creation du panier')
        let init = []
        sessionStorage.setItem('panier', (JSON.stringify(init)))
    
    }
let monPanier = JSON.parse(sessionStorage.getItem('panier'))

// RECUPERATION API AVEC FETCH
fetch('http://localhost:3000/api/teddies/'+ teddieId)
.then((resp) => resp.json())                 
.then(function(data) {                       
    let teddie = data                        
    const div = document.getElementById('#galerie')

    let titreTeddie = createNode('h2')
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
    prix.innerHTML = 'Prix : ' + teddie.price/100 + ',00 €' + ' TTC'
    append(div,prix)

// AJOUT DES CLASSES
    div.setAttribute('class', 'card-body rounded bg-light col-lg-6')
    titreTeddie.setAttribute('class', 'd-flex justify-content-center mb-3')
    photo.setAttribute('class', 'img-fluid rounded')
    description.setAttribute('class', 'mt-3')
    prix.setAttribute('class', 'fw-bold')

// AFFICHAGE DES OPTIONS DE COULEURS - LISTE DEROULANTE
    let idColor = document.getElementById('color')
    append(div,idColor)
    let option = ''
    teddie.colors.forEach(couleur => {
        option = document.createElement('option')
        idColor.appendChild(option)
        option.setAttribute('value', couleur)
        option.textContent = couleur
    })

// AJOUTER LES ARTICLES DANS LE PANIER
function addProduit(){
    const bouton = document.getElementById('addProduit')
    append(div,bouton)
    bouton.addEventListener('click', async function(){
        monPanier.push(teddie)
        sessionStorage.setItem('panier',JSON.stringify(monPanier))
        alert('article ' + teddie.name + ' bien ajouté au panier')
        location.reload()
        })
    }
    addProduit()
    console.log(sessionStorage.getItem('panier'))
})