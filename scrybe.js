let loadMoreBtn = document.querySelector('#load-more');
let currentiten = 8;

loadMoreBtn.onclick = () => {
    let boxes = {...document.querySelectorAll('.boz-container .box')};
    for(var i = currentitem; i < currentitem + 4; i++) {
        boxes[i].style.display = 'inline block';
    }
    currentitem += 4;
    if(currentitem >= boxes.length) {
        loadMoreBtn.style.display = "none"
    }
}

//carrito
const carrito = document.gotElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners() {
    elementos1.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarrito8tn.addEventListener('click', vaciarCarrito);
}

function comprarElemento(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')) {
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}


function leeerDatosElemento(elemento) {
    const infoElemento = {
        imagen: elemento.querySelector("img").src,
        titulo: elemento.querySelector("h3").textContent,
        precio: elemento.querySelector(".precio").textContent,
        id: elemento.querySelector("a").getAttribute("data-id")
    }
    InsertarCarrito(inforElemento)
}

function insertarCarrito(elemento) {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>
            <img src="${elemento.imagen}" width=100 height=150px >
        </td>
        <td>
           ${elemento.titulo}
        </td>
        <td>
           ${elemento.precio}
        </td>
        <td>
            <a hef="# class="borrar" data-is="${elemento.id}" >X</a>
        </td>
    `;
    lista.appendChild(row);
}

function eliminarElemento(e) {
    e.preventDefault();
    let elemento,
        elementoId;

    if(e.target.classLis.contains('borrar')) {
        e.target.parentElement.remove();
        elemento = e.target.parentElement.parentElement;}
        elementoId = elemento.querySelector('a').getAttribute('data-id');
    }   

]

function vaciarcarrito() {
    while(lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false;
}