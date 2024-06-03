let luna = document.querySelector('#luna')
document.querySelector('h3').addEventListener('click',(e)=>{
    e.target.innerText='anda pa alla'
})

luna.addEventListener('click', (e) => {
    e.target.innerText = '🔥'

})

luna.addEventListener('dblclick', (e)=>{

    e.target.style.background = 'red'
}
)


//const input = document.querySelector('#email');
/*Focus es para cuando clikeamos el input*/
input.addEventListener('focus', (e) => {
    console.log(e);
    console.dir(e.target);
    if(e.target.value == 'gus@gmail.com'){
        e.target.style.background = 'rgba(21, 164, 21, 0.492)';
    } else{
        e.target.style.background = 'rgba(161, 48, 22, 0.700)';
    }
    
})
/*Blur es para cuando dejamos de hacer foco en el input*/
input.addEventListener('blur', (e) => {
    if(e.target.value == 'gus@gmail.com'){
        e.target.style.background = 'rgba(21, 164, 21, 0.492)';
    } else{
        e.target.style.background = 'rgba(161, 48, 22, 0.492)';
    }
    })
/*Funcion echa onFocus */

 function foco (objeto) {
    // console.log(objeto);
    objeto.style.background = 'rgba(161, 48, 22, 0.492)';
 }
function blur (objeto) {
    objeto.style.background = 'white';
}

/*Sacando datos del formulario */
document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault()
    console.log(e)
    const data = Object.fromEntries(
        new FormData(e.target)
    )
    alert(JSON.stringify(data));
})

/*** keyup ****/
let inputText = document.getElementById('text');

inputText.addEventListener('keyup', (e) => {
    let texto = e.target.value;
    console.log(texto);
    let tectoMostrar = ''
    if(texto != ''){
        tectoMostrar = texto
    } else{
        tectoMostrar = 'input vacio'
    }
    document.getElementById('mostrar-texto').innerHTML= tectoMostrar;

})

/*** load ***/
// domcontent loader lo que hace es esperar a que se construlla el script

document.addEventListener('DOMContentLoaded', () => {
    console.log('Esto funciona?')

    let h3 = document.querySelector('h3');
    h3.textContent = 'segundo titulo'
})
let h3 = document.querySelector('h3');
h3.textContent = 'segundo titulo'

/*** mouseEnter***/
// movimientos dentro del elemento
function eventoME() {
  alert('mouse esta en movimiento')
}

/*** mousemove***/
// por dentro del elemento 
function eventoMV() {
    alert('mouse esta en movimiento')
}

/*** mouseup***/
// cuando soltamos el click en el elemento
function eventoUP() {
    alert('Cuando dejamos de presionar')
}


function scrollTopButton(btn){
    let scrollBtn = document.querySelector(btn)
    window.addEventListener('scroll',e=>{
        let scrollTop = window.pageXOffset || document.documentElement.scrollTop;

        if(scrollTop > 85) {
            scrollBtn.classList.remove('hidden')
        } else{
            scrollBtn.classList.add('hidden')
        }
     console.log(document.documentElement.scrollTop, window.pageYOffset);
    })
    document.addEventListener('click',e=>{
     if(e.target.matches(btn)) {
        window.scrollTo({
            //Comportamiento o animacion 
            behavior: 'smooth',
            //donde queres que regrese
            top:0,
        })
     }
    })
}
scrollTopButton('.scroll-top-btn')

/**DarckTheme */
function darkTheme(btn, classDark) {
    const themeBtn = document.querySelector(btn);
    // para traer todos los elementos (si ponemos corchete le va a aplicar a los elementos que tengan el atributo especificado en corchetes)
    let selectores = document.querySelectorAll("[data-dark]")
    //aparece por consola todos los nodos que tengan el atributo data-dark - preseguimos a aplicarle a los elementos que querramos ponerle modo oscuro
    console.log(selectores)

    let moon = '🌙';
    let sun = '☀️';
    
    const lightMode = () => {
        selectores.forEach(elemento => elemento.classList.remove(classDark));
        themeBtn.textContent = moon;
        localStorage.setItem('theme','ligth')
    }
    const darkMode = () => {
        selectores.forEach((elemento) => elemento.classList.add(classDark));
        themeBtn.textContent = sun;
        localStorage.setItem('theme', 'dark')
    }

    document.addEventListener('click',(e)=>{
        if(e.target.matches(btn)){
            console.log(themeBtn.textContent);
            if(themeBtn.textContent === moon){
            darkMode()
            } else {
            lightMode()
            }
        }
    });

    document.addEventListener('DOMContentLoaded',e=> {
        console.log(localStorage.getItem('theme')) // null porque no existe ninguna variable cn ese nombre en el localstorage
        if(localStorage.getItem('theme') === null){
            localStorage.setItem('theme','ligth')
        } 
        if(localStorage.getItem('theme')==='light'){
            lightMode()
        }
        if(localStorage.getItem('theme')==='dark'){
            darkMode()
        }
    })
}
darkTheme('.dark-theme-btn', 'dark-mode');
