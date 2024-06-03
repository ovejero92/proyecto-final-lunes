
let CP = document.getElementById('CP')

// const productosLS = JSON.parse(localStorage.getItem('productos')) || productos
// localStorage.setItem('productos',JSON.stringify(productos))

// let carrito = JSON.parse(localStorage.getItem('carrito')) || []

productos.forEach((prod)=>{
    let card = document.createElement('div')
    card.classList.add('card')

    let divImg = document.createElement('div')
    divImg.style.textAlign = 'center'
    
    let img = document.createElement('img')
    img.setAttribute('src', prod.img)
    img.style.width = '150px'
    img.style.borderRadius = '15px'
    
    let h2 = document.createElement('h2')
    h2.textContent = `nombre: ${prod.nombre}`

    let p = document.createElement('p')
    p.textContent = `precio: $${prod.precio}`
 
    let sotck = document.createElement('p')
    sotck.textContent = `stock: ${prod.stock}`

    let divBtn = document.createElement('div')
    divBtn.innerHTML = `<button >Agregar al Carrito</>`

    if(prod.stock == 0){
        let imgST = document.createElement('img')
        imgST.setAttribute('src','https://www.gakcreations.com.ar/productos/sold2.png')
        imgST.style.width = '190px'
        imgST.style.position = 'absolute'
        imgST.style.top = '0'
        imgST.style.right = '0'
        
        card.appendChild(imgST)
        card.style.background = '#9a9494'
    }
    
    CP.appendChild(card)
    card.appendChild(divImg)
    divImg.appendChild(img)
    card.appendChild(h2)
    card.appendChild(p)
    card.appendChild(sotck)
    card.appendChild(divBtn)
})

document.getElementById('carritoBoton').addEventListener('click',()=>{
    document.getElementById('carrito').style.display = 'block'
})

document.getElementById('cerrarCarrito').addEventListener('click',()=>{
    document.getElementById('carrito').style.display = 'none'
})