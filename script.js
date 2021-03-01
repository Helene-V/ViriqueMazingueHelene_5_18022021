fetch('http://localhost:3000/api/teddies/')
.then((resp) => resp.json()) 
.then(function(data) {
    let teddie = data
    return teddie.map(function(teddie){
    let div = document.createElement('div')
    let a = document.createElement('a')
    a.setAttribute('href', 'product.html', '') 
    let divContaint = document.createTextNode(teddie.name)
    div.appendChild(divContaint)
    a.appendChild(div)
    let elt = document.getElementById("galerie");
    elt.appendChild(a)
    console.log(teddie)
    })
})
let teddies = document.querySelector('#galerie');
