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
   REFLEXIONES ROTATIVAS
========================== */

const reflexiones = [

"Un día a la vez.",

"La sobriedad es una nueva forma de vivir.",

"La recuperación comienza con la honestidad.",

"Primero lo primero.",

"Solo por hoy.",

"La experiencia compartida salva vidas.",

"La serenidad llega con la práctica.",

"La unidad es nuestra fortaleza."

];

const blockquote =
document.querySelector(
".reflection-card blockquote"
);

if(blockquote){

setInterval(()=>{

const random =

Math.floor(
Math.random() *
reflexiones.length
);

blockquote.innerText =
reflexiones[random];

},8000);

}

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
