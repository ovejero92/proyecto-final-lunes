const productos = [
    {nombre:'remera',precio:10000,stock:20},
    {nombre:'pantalon',precio:10000,stock:20},
    {nombre:'cartera',precio:10000,stock:0},
    {nombre:'zapatillas',precio:10000,stock:20},
];
let CP = document.getElementById('CP')

productos.forEach((prod)=>{
    let card = document.createElement('div')
    card.classList.add('card')
    
    let h2 = document.createElement('h2')
    h2.textContent = `nombre: ${prod.nombre}`

    let p = document.createElement('p')
    p.textContent = `precio: $${prod.precio}`
 
    let sotck = document.createElement('p')
    sotck.textContent = `stock: ${prod.stock}`

    if(prod.stock == 0){
        card.style.background = 'red'
    }
    
    CP.appendChild(card)
    card.appendChild(h2)
    card.appendChild(p)
    card.appendChild(sotck)
})