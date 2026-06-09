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
.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

anchor.addEventListener(

"click",

function(e){

e.preventDefault();

const destino =
document.querySelector(
this.getAttribute("href")
);

if(destino){

destino.scrollIntoView({

behavior:"smooth"

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

/* =====================================
CALENDARIO REFLEXIONES
===================================== */

let reflexiones = {};

async function cargarReflexiones() {

    const response =
    await fetch(
        'reflexiones.json'
    );

    reflexiones =
    await response.json();

    generarCalendario();

    cargarHoy();
}

function cargarHoy() {

    const hoy = new Date();

    const fecha =

        hoy.getFullYear() +
        '-' +
        String(
            hoy.getMonth()+1
        ).padStart(2,'0')
        +
        '-' +
        String(
            hoy.getDate()
        ).padStart(2,'0');

    if(reflexiones[fecha]){

        mostrarReflexion(fecha);

    }
}

function mostrarReflexion(fecha){

    const r =
    reflexiones[fecha];

    if(!r) return;

    document.getElementById(
        'reflectionTitle'
    ).innerText =
    r.titulo;

    document.getElementById(
        'reflectionText'
    ).innerText =
    r.texto;

    document.getElementById(
        'reflectionDate'
    ).innerText =
    r.fecha;

    document.getElementById(
        'reflectionSource'
    ).innerText =
    r.fuente;
}

function generarCalendario(){

    const grid =
    document.getElementById(
        'calendarGrid'
    );

    grid.innerHTML = '';

    for(let dia=1; dia<=30; dia++){

        const celda =
        document.createElement('div');

        celda.classList.add(
            'day'
        );

        celda.innerText =
        dia;

        const fecha =

        '2026-06-' +
        String(dia)
        .padStart(2,'0');

        if(reflexiones[fecha]){

            celda.addEventListener(

                'click',

                ()=>{

                    document
                    .querySelectorAll(
                    '.day'
                    )
                    .forEach(d=>{

                    d.classList.remove(
                    'active-day'
                    );

                    });

                    celda.classList.add(
                    'active-day'
                    );

                    mostrarReflexion(
                    fecha
                    );

                }

            );

        }

        grid.appendChild(
            celda
        );

    }

}

cargarReflexiones();







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
   Contador de visitas
========================== */

async function cargarVisitas() {

    try {

        const response =
        await fetch(

        'https://api.countapi.xyz/hit/grupo-oxford/visitas'

        );

        const data =
        await response.json();

        document.getElementById(
        'contador-visitas'
        ).textContent =
        data.value.toLocaleString();

    }

    catch(error){

        console.error(
        'Error contador:',
        error
        );

    }

}

cargarVisitas();

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
