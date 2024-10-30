import { resaltaSiEstasEn } from "../lib/js/resaltaSiEstasEn.js"

export class NavTabFixed extends HTMLElement {

 connectedCallback() {
  this.classList.add("md-tab", "fixed")

  this.innerHTML = /* HTML */`
   <a id="navtabfixed" ${resaltaSiEstasEn(["/index.html", "", "/"])}
  href="index.html">
 <span class="material-symbols-outlined">home</span>
 Inicio
</a>

<a id="navtabfixed" ${resaltaSiEstasEn(["/geolocalizacion.html"])}
  href="geolocalizacion.html">
 <span class="material-symbols-outlined">map</span>
 GPS
</a>

<a id="navtabfixed" ${resaltaSiEstasEn(["/archivos.html"])}
  href="archivos.html">
 <span class="material-symbols-outlined">archive</span>
 Archivos    
</a>

<a id="navtabfixed" ${resaltaSiEstasEn(["/camara.html"])}
  href="camara.html">
 <span class="material-symbols-outlined">camera</span>
 Camara
</a>

<a id="navtabfixed" ${resaltaSiEstasEn(["/ayuda.html"])}
  href="ayuda.html">
 <span class="material-symbols-outlined">help</span>
 Ayuda
</a>`
 }

}

customElements.define("nav-tab-fixed", NavTabFixed)
