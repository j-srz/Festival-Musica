document.addEventListener("DOMContentLoaded",()=>{iniciarApp()});const iniciarApp=()=>{navegacionFija(),crearGaleria()},navegacionFija=()=>{const e=document.querySelector(".header"),n=document.querySelector(".lineup"),t=document.querySelector("body");window.addEventListener("scroll",()=>{n.getBoundingClientRect().top<0?(e.classList.add("fijo"),t.classList.add("body-scroll")):(e.classList.remove("fijo"),t.classList.remove("body-scroll"))})},crearGaleria=()=>{const e=document.querySelector(".galeria-imagenes");for(let n=1;n<=12;n++){const t=document.createElement("picture");t.innerHTML=`\n        <source srcset="build/img/thumb/${n}.avif" type="image/avif" />\n        <source srcset="build/img/thumb/${n}.webp" type="image/webp" />\n        <img\n            loading="lazy"\n            width="200"\n            height="300"\n            src="build/img/thumb/${n}.jpg"\n            alt="imagen galeria"\n        />\n        `,t.onclick=()=>mostrarImagen(n),e.appendChild(t)}},mostrarImagen=e=>{const n=document.createElement("picture");n.innerHTML=`\n        <source srcset="build/img/grande/${e}.avif" type="image/avif" />\n        <source srcset="build/img/grande/${e}.webp" type="image/webp" />\n        <img\n            loading="lazy"\n            width="200"\n            height="300"\n            src="build/img/grande/${e}.jpg"\n            alt="imagen galeria"\n        />\n        `;const t=document.createElement("div");t.appendChild(n),t.classList.add("overlay"),t.onclick=()=>{document.querySelector("body").classList.remove("fijar-body"),t.remove()};const i=document.createElement("p");i.textContent="X",i.classList.add("btn-cerrar"),i.onclick=()=>{document.querySelector("body").classList.remove("fijar-body"),t.remove()},t.appendChild(i);const a=document.querySelector("body");a.appendChild(t),a.classList.add("fijar-body")};