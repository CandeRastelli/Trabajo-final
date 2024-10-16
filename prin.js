const menus = [{nombre: "inicio", url: "Prin.html"},
              {nombre: "¿Quienes somos", url: "quienes.html"},
              {nombre: "Contacto", url: "constacto.html"}
]

function cargarmenu() {
    let enlaces = document.getElementById("menuul")
    for (const menu of menus) {
        let lista = document.createElement("li")
        lista.innerHTML = `<a href=${$menu.url}>{$menu.nombre}</a>`
        enlaces.appendChild(lista)
    } 
}
cargarmenu()

function cargarproductos() {
    let lista = document.createElement("div")
    for (const producto of productos) {
    lista.innerHTML = `<h3>${producto.nombre}</h3>
                        <img src=${producto.urlimagen} alt=" ">
                        <p>${producto.precio}</p>
                        <button onclick = "ver detalle('${produto.nombre}')">Detalles
                        `;
                        enlaces.appendChild(lista);
    }
}
cargarproductos()
function verdetalle(nombreproducto) {
    localStorage.setItem("detalleproducto", nombreproducto)
    window.location.href = "detalle.html"
}
