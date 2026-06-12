/* ==========================================
   GRUPO OXFORD
   PREMIUM JAVASCRIPT
========================================== */

/* ==========================
   MENU RESPONSIVE
========================== */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if(menuToggle){

menuToggle.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});

}

/* ==========================
   NAVBAR SCROLL EFFECT
========================== */

const navbar = document.querySelector(".header");

window.addEventListener("scroll",()=>{

if(window.scrollY > 100){

navbar.style.background =
"rgba(11,31,58,.97)";

navbar.style.boxShadow =
"0 10px 30px rgba(0,0,0,.20)";

}else{

navbar.style.background =
"rgba(11,31,58,.85)";

navbar.style.boxShadow =
"none";

}

});

/* ==========================
   ANIMATED COUNTERS
========================== */

const counters = document.querySelectorAll(".stat-card h3");

const animateCounter = (counter)=>{

const target =
parseInt(counter.innerText);

let count = 0;

const speed = target / 80;

const updateCounter = ()=>{

count += speed;

if(count < target){

counter.innerText =
Math.floor(count);

requestAnimationFrame(updateCounter);

}else{

counter.innerText = target;

}

};

updateCounter();

};

const counterObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

animateCounter(
entry.target
);

counterObserver.unobserve(
entry.target
);

}

});

},

{
threshold:.5
}

);

counters.forEach(counter=>{

counterObserver.observe(counter);

});

/* ==========================
   SCROLL ANIMATIONS
========================== */

const fadeElements = document.querySelectorAll(

".section, .module-card, .reflection-card, .stat-card"

);

const fadeObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{
threshold:.15
}

);

fadeElements.forEach(el=>{

el.classList.add("hidden");

fadeObserver.observe(el);

});

/* ==========================
   SOBRIEDAD CALCULATOR
========================== */

const btnSobriedad =
document.getElementById(
"calcularSobriedad"
);

if(btnSobriedad){

btnSobriedad.addEventListener(

"click",

()=>{

const fecha =
document.getElementById(
"fechaSobriedad"
).value;

const resultado =
document.getElementById(
"resultadoSobriedad"
);

if(!fecha){

resultado.innerHTML =
"Seleccione una fecha.";

return;

}

const inicio =
new Date(fecha);

const hoy =
new Date();

const diferencia =
hoy - inicio;

const dias =
Math.floor(
diferencia /
(1000*60*60*24)
);

const años =
Math.floor(dias / 365);

const meses =
Math.floor(
(dias % 365) / 30
);

const diasRestantes =
dias -
(años*365) -
(meses*30);

resultado.innerHTML =

`
<div class="sobriedad-result">

<h2>${años}</h2>
<p>Años</p>

<h2>${meses}</h2>
<p>Meses</p>

<h2>${diasRestantes}</h2>
<p>Días</p>

</div>

`;

}

);

}

/* ==========================
   SMOOTH SCROLL
========================== */

document
.querySelectorAll("a")
.forEach(enlace=>{

enlace.addEventListener(

"click",

function(e){

const href =
this.getAttribute("href");

if(
!href ||
href === "#" ||
!href.startsWith("#")
){
return;
}

const destino =
document.querySelector(href);

if(destino){

e.preventDefault();

destino.scrollIntoView({

behavior:"smooth",
block:"start"

});

}

}

);

});

/* ==========================
   HERO PARALLAX
========================== */

window.addEventListener(

"scroll",

()=>{

const hero =
document.querySelector(".hero");

let scroll =
window.pageYOffset;

hero.style.backgroundPositionY =

scroll * 0.4 + "px";

}

);

/* ==========================
   CARD HOVER PREMIUM
========================== */

const cards =
document.querySelectorAll(

".module-card"

);

cards.forEach(card=>{

card.addEventListener(

"mouseenter",

()=>{

card.style.transform =
"translateY(-12px)";

}

);

card.addEventListener(

"mouseleave",

()=>{

card.style.transform =
"translateY(0px)";

}

);

});


/* ==========================
   CURRENT YEAR FOOTER
========================== */

const footer =
document.querySelector(
".footer-content"
);

if(footer){

const year =
new Date().getFullYear();

const copyright =
document.createElement("p");

copyright.innerHTML =

`© ${year} Grupo Oxford`;

copyright.style.marginTop =
"25px";

copyright.style.opacity =
".7";

footer.appendChild(
copyright
);

}

/* ==========================================
   END
========================================== */







document
.querySelectorAll('.book-card')
.forEach(card=>{

card.addEventListener(
'click',
()=>{

alert(
'Próximamente disponible.'
);

});

});







function calcularDiasOxford() {

    const fundacion =
    new Date(2026, 4, 22); // 22 mayo

    const hoy =
    new Date();

    // Si aún no inicia la sesión de hoy,
    // contar solo hasta ayer
    hoy.setDate(
        hoy.getDate() - 1
    );

    const diferencia =
    hoy - fundacion;

    const dias =
    Math.floor(
        diferencia /
        (1000 * 60 * 60 * 24)
    ) + 1;

    document
    .getElementById("contador-sobriedad")
    .textContent = dias;

}

calcularDiasOxford();


/* ==========================================
   Carrusel de producos plenitud y literatura
========================================== */


let plenitud = [];
let literatura = [];

async function cargarBiblioteca(){

const p =
await fetch('plenitud.json');

plenitud =
await p.json();

const l =
await fetch('literatura.json');

literatura =
await l.json();

renderCarrusel(
'plenitud-carousel',
plenitud
);

renderCarrusel(
'literatura-carousel',
literatura
);

}

function renderCarrusel(
contenedorId,
datos
){

const contenedor =
document.getElementById(
contenedorId
);

if(!contenedor) return;

contenedor.innerHTML='';

datos.forEach(item=>{

contenedor.innerHTML += `

<div class="book-item">

<img
src="${item.imagen}"
alt="${item.titulo}"

>

<div class="book-info">

<h4>${item.titulo}</h4>

<p>${item.descripcion}</p>

</div>

</div>

`;

});

}

function moverCarrusel(
tipo,
direccion
){

const track =
document.getElementById(
tipo + '-carousel'
);

track.scrollLeft +=
direccion * 320;

}

cargarBiblioteca();

/* ==========================================
   Carrusel de eventos
========================================== */
let eventos = [];

async function cargarEventos(){

const response =
await fetch(
'eventos.json'
);

eventos =
await response.json();

renderEventos();

}

function renderEventos(){

const contenedor =
document.getElementById(
'eventos-carousel'
);

if(!contenedor) return;

contenedor.innerHTML='';

eventos.forEach(evento=>{

contenedor.innerHTML += `

<div class="event-card">

<img
src="${evento.imagen}"
alt="${evento.titulo}"

>

<div class="event-content">

<div class="event-fecha">

${evento.fecha}

</div>

<h3>

${evento.titulo}

</h3>

<div class="event-lugar">

📍 ${evento.lugar}

</div>

<p class="event-descripcion">

${evento.descripcion}

</p>

</div>

</div>

`;

});

}

function moverCarruselEventos(
direccion
){

const track =
document.getElementById(
'eventos-carousel'
);

track.scrollLeft +=
direccion * 380;

}

cargarEventos();

/* ==========================
  galeria
========================== */
let albumes = [];

let fotosActuales = [];

let fotoActual = 0;

async function cargarGaleria(){

try{

const response =
await fetch('galeria.json');

albumes =
await response.json();

renderAlbumes();

}
catch(error){

console.error(
'Error cargando galería:',
error
);

}

}

function renderAlbumes(){

const carrusel =
document.getElementById(
'album-carousel'
);

if(!carrusel) return;

carrusel.innerHTML='';

albumes.forEach(album=>{

const card =
document.createElement('div');

card.className =
'album-card';

card.innerHTML = `

<img
src="${album.portada}"
alt="${album.titulo}">

<div class="album-content">

<h3>${album.titulo}</h3>

<p>${album.descripcion}</p>

<div class="album-total">

${album.fotos.length}
fotografías

</div>

<br>

<div
class="album-open"
data-id="${album.id}">

Ver Álbum

</div>

</div>

`;

carrusel.appendChild(card);

});

document
.querySelectorAll('.album-open')
.forEach(btn=>{

btn.addEventListener(
'click',
()=>{

abrirAlbum(
btn.dataset.id
);

});

});

}

function abrirAlbum(id){

const album =
albumes.find(
a => a.id === id
);

if(!album) return;

fotosActuales =
album.fotos;

fotoActual = 0;

mostrarFoto();

}

function mostrarFoto(){

document
.getElementById(
'galleryModal'
)
.style.display='flex';

document
.getElementById(
'galleryImage'
)
.src =
fotosActuales[fotoActual];

document
.getElementById(
'galleryTitle'
)
.innerText =

`${fotoActual + 1}
 de
 ${fotosActuales.length}`;

}

function cerrarGaleria(){

document
.getElementById(
'galleryModal'
)
.style.display='none';

}

function fotoAnterior(){

fotoActual--;

if(fotoActual < 0){

fotoActual =
fotosActuales.length - 1;

}

mostrarFoto();

}

function fotoSiguiente(){

fotoActual++;

if(
fotoActual >=
fotosActuales.length
){

fotoActual = 0;

}

mostrarFoto();

}

document
.addEventListener(
'DOMContentLoaded',
()=>{

cargarGaleria();

const carrusel =
document.getElementById(
'album-carousel'
);

document
.getElementById(
'album-prev'
)
.addEventListener(
'click',
()=>{

carrusel.scrollLeft -= 450;

});

document
.getElementById(
'album-next'
)
.addEventListener(
'click',
()=>{

carrusel.scrollLeft += 450;

});

document
.getElementById(
'galleryClose'
)
.addEventListener(
'click',
cerrarGaleria
);

document
.getElementById(
'fotoAnterior'
)
.addEventListener(
'click',
fotoAnterior
);

document
.getElementById(
'fotoSiguiente'
)
.addEventListener(
'click',
fotoSiguiente
);

});

/* ==========================
   banner temas importantes al inicio
========================== */

/* ==========================================
   ANIVERSARIO AA
========================================== */

let slidesAA = [];
let slideActualAA = 0;
let intervaloAA = null;

async function cargarAniversario(){

    try{

        const response =
        await fetch('datosrelevantes.json');

        if(!response.ok){

            throw new Error(
                'No se pudo cargar datosrelevantes.json'
            );

        }

        slidesAA =
        await response.json();

        if(
            !Array.isArray(slidesAA) ||
            slidesAA.length === 0
        ){

            console.warn(
                'No hay diapositivas'
            );

            return;

        }

        crearBanner();

    }
    catch(error){

        console.error(
            'Error cargando aniversario:',
            error
        );

    }

}

function crearBanner(){

    const carousel =
    document.getElementById(
        'anniversaryCarousel'
    );

    const dotsContainer =
    document.getElementById(
        'bannerDots'
    );

    if(!carousel){

        console.error(
            'No existe anniversaryCarousel'
        );

        return;

    }

    carousel.innerHTML = '';

    if(dotsContainer){

        dotsContainer.innerHTML = '';

    }

    slidesAA.forEach(

        (slide,index)=>{

            const activo =
            index === 0
            ? 'active'
            : '';

            carousel.innerHTML += `

            <div class="banner-slide ${activo}">

                <img
                src="${slide.imagen}"
                alt="${slide.titulo}">

                <div class="banner-overlay">

                    <h2>
                        ${slide.titulo}
                    </h2>

                    <p>
                        ${slide.texto}
                    </p>

                </div>

            </div>

            `;

            if(dotsContainer){

                dotsContainer.innerHTML += `

                <div
                class="banner-dot ${activo}"
                data-index="${index}">
                </div>

                `;

            }

        }

    );

    document
    .querySelectorAll(
        '.banner-dot'
    )
    .forEach(dot=>{

        dot.addEventListener(
            'click',
            ()=>{

                mostrarSlideAA(

                    Number(
                        dot.dataset.index
                    )

                );

            }
        );

    });

    const prev =
    document.getElementById(
        'bannerPrev'
    );

    if(prev){

        prev.addEventListener(
            'click',
            slideAnteriorAA
        );

    }

    const next =
    document.getElementById(
        'bannerNext'
    );

    if(next){

        next.addEventListener(
            'click',
            slideSiguienteAA
        );

    }

    iniciarBannerAA();

}

function mostrarSlideAA(indice){

    const slides =
    document.querySelectorAll(
        '.banner-slide'
    );

    const dots =
    document.querySelectorAll(
        '.banner-dot'
    );

    if(
        slides.length === 0
    ){

        return;

    }

    if(
        indice < 0 ||
        indice >= slides.length
    ){

        return;

    }

    slides.forEach(slide=>{

        slide.classList.remove(
            'active'
        );

    });

    dots.forEach(dot=>{

        dot.classList.remove(
            'active'
        );

    });

    slideActualAA = indice;

    slides[
        slideActualAA
    ].classList.add(
        'active'
    );

    if(
        dots[slideActualAA]
    ){

        dots[
            slideActualAA
        ].classList.add(
            'active'
        );

    }

}

function slideSiguienteAA(){

    if(
        slidesAA.length === 0
    ) return;

    let siguiente =
    slideActualAA + 1;

    if(
        siguiente >=
        slidesAA.length
    ){

        siguiente = 0;

    }

    mostrarSlideAA(
        siguiente
    );

}

function slideAnteriorAA(){

    if(
        slidesAA.length === 0
    ) return;

    let anterior =
    slideActualAA - 1;

    if(
        anterior < 0
    ){

        anterior =
        slidesAA.length - 1;

    }

    mostrarSlideAA(
        anterior
    );

}

function iniciarBannerAA(){

    clearInterval(
        intervaloAA
    );

    intervaloAA =

    setInterval(

        slideSiguienteAA,

        7000

    );

}

document.addEventListener(

    'DOMContentLoaded',

    ()=>{

        cargarAniversario();

    }

);
/* ==========================
  Notas releveantes del grupo volatil
========================== */

document.addEventListener(

'DOMContentLoaded',

()=>{

const noticia =
document.querySelector(
'.news-content'
);

if(!noticia) return;

noticia.animate(

[
{
opacity:0,
transform:'translateY(40px)'
},
{
opacity:1,
transform:'translateY(0)'
}
],

{
duration:1200,
fill:'forwards'
}

);

}
);

/* ==========================
   REFLEXIONES Y EXPERIENCIAS
========================== */
/* ==================================================
REFLEXIONES Y EXPERIENCIAS OXFORD
================================================== */

let reflexiones = {};
let experiencias = {};

const meses = [
"Enero",
"Febrero",
"Marzo",
"Abril",
"Mayo",
"Junio",
"Julio",
"Agosto",
"Septiembre",
"Octubre",
"Noviembre",
"Diciembre"
];

const hoy = new Date();

let fechaSeleccionada = new Date(
hoy.getFullYear(),
hoy.getMonth(),
hoy.getDate()
);

let mesActual = fechaSeleccionada.getMonth();
let anioActual = fechaSeleccionada.getFullYear();

/* ==================================================
CARGAR JSON
================================================== */

Promise.all([
fetch("reflexiones.json").then(r => r.json()),
fetch("experiencias.json").then(r => r.json())
])
.then(([datosReflexiones, datosExperiencias]) => {

reflexiones = datosReflexiones;
experiencias = datosExperiencias;

generarCalendario();
cargarContenido();

})
.catch(error => {

console.error(
    "Error cargando JSON:",
    error
);

});

/* ==================================================
CALENDARIO
================================================== */

function generarCalendario(){

const contenedor =
document.getElementById(
    "diasCalendario"
);

const tituloMes =
document.getElementById(
    "tituloMes"
);

contenedor.innerHTML = "";

tituloMes.textContent =
    `${meses[mesActual]} ${anioActual}`;

const primerDia =
new Date(
    anioActual,
    mesActual,
    1
);

const ultimoDia =
new Date(
    anioActual,
    mesActual + 1,
    0
);

let inicio =
primerDia.getDay();

inicio =
inicio === 0
    ? 6
    : inicio - 1;

for(let i = 0; i < inicio; i++){

    const vacio =
    document.createElement("div");

    contenedor.appendChild(
        vacio
    );

}

for(
    let dia = 1;
    dia <= ultimoDia.getDate();
    dia++
){

    const boton =
    document.createElement(
        "button"
    );

    boton.className =
    "dia";

    boton.textContent =
    dia;

    const fechaBoton =
    new Date(
        anioActual,
        mesActual,
        dia
    );

    /* Día actual */

    if(
        dia === hoy.getDate() &&
        mesActual === hoy.getMonth() &&
        anioActual === hoy.getFullYear()
    ){
        boton.classList.add(
            "hoy"
        );
    }

    /* Día seleccionado */

    if(
        dia === fechaSeleccionada.getDate() &&
        mesActual === fechaSeleccionada.getMonth() &&
        anioActual === fechaSeleccionada.getFullYear()
    ){
        boton.classList.add(
            "activo"
        );
    }

    boton.addEventListener(
        "click",
        () => {

            fechaSeleccionada =
            fechaBoton;

            generarCalendario();

            cargarContenido();

        }
    );

    contenedor.appendChild(
        boton
    );

}

}

/* ==================================================
FORMATEAR CLAVE JSON
================================================== */

function obtenerClaveFecha(){

const mes =
String(
    fechaSeleccionada.getMonth() + 1
).padStart(2,"0");

const dia =
String(
    fechaSeleccionada.getDate()
).padStart(2,"0");

return `${mes}-${dia}`;

}

/* ==================================================
FECHA LEGIBLE
================================================== */

function actualizarFechaTexto(){

document.getElementById(
    "textoFecha"
).textContent =

fechaSeleccionada.toLocaleDateString(
    "es-MX",
    {
        day:"numeric",
        month:"long",
        year:"numeric"
    }
);

}

/* ==================================================
ANIMACIÓN
================================================== */

function animarTarjetas(){

document
    .querySelectorAll(
        ".tarjeta-diaria"
    )
    .forEach(tarjeta => {

        tarjeta.animate(
            [
                {
                    opacity:0,
                    transform:"translateY(15px)"
                },
                {
                    opacity:1,
                    transform:"translateY(0)"
                }
            ],
            {
                duration:350,
                easing:"ease"
            }
        );

    });

}

/* ==================================================
CARGAR CONTENIDO
================================================== */

function cargarContenido(){

actualizarFechaTexto();

const clave =
obtenerClaveFecha();

const reflexion =
reflexiones[clave];

const experiencia =
experiencias[clave];

/* ==========================
   REFLEXIÓN
========================== */

if(reflexion){

    document.getElementById(
        "tituloReflexion"
    ).textContent =
    reflexion.titulo;

    document.getElementById(
        "fechaReflexion"
    ).textContent =
    reflexion.fecha;

    document.getElementById(
        "extractoReflexion"
    ).textContent =
    reflexion.extracto;

    document.getElementById(
        "btnReflexion"
    ).href =
    reflexion.url;

}else{

    document.getElementById(
        "tituloReflexion"
    ).textContent =
    "Sin información";

    document.getElementById(
        "fechaReflexion"
    ).textContent =
    "";

    document.getElementById(
        "extractoReflexion"
    ).textContent =
    "No existe contenido para esta fecha.";

    document.getElementById(
        "btnReflexion"
    ).href =
    "#";

}

/* ==========================
   EXPERIENCIA
========================== */

if(experiencia){

    document.getElementById(
        "tituloExperiencia"
    ).textContent =
    experiencia.titulo;

    document.getElementById(
        "fechaExperiencia"
    ).textContent =
    experiencia.fecha;

    document.getElementById(
        "extractoExperiencia"
    ).textContent =
    experiencia.extracto;

    document.getElementById(
        "autorExperiencia"
    ).textContent =
    experiencia.autor || "";

    document.getElementById(
        "areaExperiencia"
    ).textContent =
    experiencia.area || "";

    document.getElementById(
        "btnExperiencia"
    ).href =
    experiencia.url;

}else{

    document.getElementById(
        "tituloExperiencia"
    ).textContent =
    "Sin información";

    document.getElementById(
        "fechaExperiencia"
    ).textContent =
    "";

    document.getElementById(
        "extractoExperiencia"
    ).textContent =
    "No existe contenido para esta fecha.";

    document.getElementById(
        "autorExperiencia"
    ).textContent =
    "";

    document.getElementById(
        "areaExperiencia"
    ).textContent =
    "";

    document.getElementById(
        "btnExperiencia"
    ).href =
    "#";

}

animarTarjetas();

}

/* ==================================================
CAMBIO DE MES
================================================== */

document
.getElementById("mesAnterior")
.addEventListener(
"click",
() => {

    mesActual--;

    if(mesActual < 0){

        mesActual = 11;
        anioActual--;

    }

    generarCalendario();

}

);

document
.getElementById("mesSiguiente")
.addEventListener(
"click",
() => {

    mesActual++;

    if(mesActual > 11){

        mesActual = 0;
        anioActual++;

    }

    generarCalendario();

}

);


/* ==========================
  servicios
========================== */
/* ==========================
   SERVICIOS
========================== */

let servicios = [];

fetch("servicio.json")
.then(res => res.json())
.then(data => {

    servicios = data;

    const grupo =
        document.getElementById("serviciosGrupo");

    const distrito =
        document.getElementById("serviciosDistrito");

    data.forEach(servicio => {

        const card = `

        <div class="card-servicio"
             data-id="${servicio.id}">

            <div class="icono-servicio">
                ${servicio.icono}
            </div>

            <h3>
                ${servicio.nombre}
            </h3>

            <span class="badge">
                ${servicio.duracion}
            </span>

        </div>
        `;

        if(servicio.tipo === "Grupo"){
            grupo.innerHTML += card;
        } else {
            distrito.innerHTML += card;
        }
    });

    activarEventos();
});

/* ==========================
   EVENTOS
========================== */

function activarEventos(){

    document
    .querySelectorAll(".card-servicio")
    .forEach(card => {

        card.addEventListener("click", () => {

            abrirServicio(card.dataset.id);

        });

    });

}

/* ==========================
   MODAL
========================== */

function abrirServicio(id){

    const servicio =
        servicios.find(s => s.id === id);

    const funciones =
        servicio.funciones || [];

    const noHace =
        servicio.noHace || [];

    const literatura =
        servicio.literatura || [];

    const puestos =
        servicio.puestos || [];

    document
    .getElementById("detalleServicio")
    .innerHTML = `

        <h2>
            ${servicio.icono}
            ${servicio.nombre}
        </h2>

        <p>
            <strong>Duración:</strong>
            ${servicio.duracion}
        </p>

        <p>
            <strong>Tipo:</strong>
            ${servicio.tipo}
        </p>

        ${servicio.objetivo ? `
        <h3>Objetivo</h3>

        <p>
            ${servicio.objetivo}
        </p>
        ` : ""}

        ${puestos.length ? `
        <h3>Servicios incluidos</h3>

        <ul>
            ${puestos.map(p =>
                `<li>${p}</li>`
            ).join("")}
        </ul>
        ` : ""}

        ${funciones.length ? `
        <h3>Funciones</h3>

        <ul>
            ${funciones.map(f =>
                `<li>${f}</li>`
            ).join("")}
        </ul>
        ` : ""}

        ${noHace.length ? `
        <h3>No corresponde</h3>

        <ul>
            ${noHace.map(f =>
                `<li>${f}</li>`
            ).join("")}
        </ul>
        ` : ""}

        ${literatura.length ? `
        <h3>Literatura recomendada</h3>

        <ul>
            ${literatura.map(f =>
                `<li>${f}</li>`
            ).join("")}
        </ul>
        ` : ""}
    `;

    document
    .getElementById("modalServicio")
    .classList.add("active");
}

/* ==========================
   CERRAR MODAL
========================== */

document
.getElementById("cerrarModal")
.addEventListener("click", () => {

    document
    .getElementById("modalServicio")
    .classList.remove("active");

});

document
.getElementById("modalServicio")
.addEventListener("click", (e) => {

    if(e.target.id === "modalServicio"){

        document
        .getElementById("modalServicio")
        .classList.remove("active");

    }

});
